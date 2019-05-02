const package = require('../package.json');
const semver = require('semver');
const fs = require('fs-extra');
const path = require('path');
const shell = require('shelljs');
const release = require('release-it');
require('portable-fetch');

const simpleGit = require('simple-git')(path.resolve(__dirname, '..'));

const tripletexSwaggerFile = 'https://tripletex.no/v2/swagger.json';
const packagePath = path.resolve(__dirname, '..', 'package.json');

/**
 * Get swagger file from Tripletex
 */
async function getSwaggerFile() {
    const swagger = await fetch(tripletexSwaggerFile);
    return swagger.json();
}

async function analyze() {
    const swagger = await getSwaggerFile();
    console.log(`Tripletex has version ${swagger.info.version}. We got ${package.version}`);
    if (semver.lt(package.version, swagger.info.version)) {
        return swagger.info.version;
    } else return false;
}

function exec(cmd) {
    return new Promise((resolve, reject) => {
        console.log(`Running command: ${cmd}`);
        const child = shell.exec(
            cmd, {
                async: true
            }, (code, stdout, stderr) => {
                stdout = stdout.toString().trim();
                if (code === 0) {
                    console.log(stdout);
                    resolve(stdout);
                } else {
                    reject(new Error(stderr || stdout));
                }
            });
    });
}

function buildDocker() {
    return exec('docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate -i https://tripletex.no/v2/swagger.json -l typescript-fetch --config /local/config.json --template-dir /local/templates/ -o /local/');
}

function buildTypescript() {
    return exec('npm run compile');
}

async function releasePackage(version) {
    return release({
        increment: version,
        'non-interactive': true,
        git: {
            commitArgs: `--message="chore(release): Release ${version} [skip ci]"`,
            pushArgs: `--set-upstream origin/master`,
            requireUpstream: false,
            requireCleanWorkingDir: false
        },
        publishConfig: {
            access: 'public'
        }
    });
}

async function build() {
    await buildDocker();
    await buildTypescript();
}

async function run() {
    // Analyze to see if there is a new build.
    const newVersion = await analyze();
    if (!newVersion) {
        return "No new version. Skipping 🎉"
    }

    await build();
    await releasePackage(newVersion);
}

run().then(console.log).catch(console.error);