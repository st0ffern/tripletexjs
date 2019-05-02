const package = require('../package.json');
const semver = require('semver');
const fs = require('fs-extra');
const path = require('path');
const execa = require('execa');
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

function dockerBuild() {
    return execa.shell('docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate -i https://tripletex.no/v2/swagger.json -l typescript-fetch --config /local/config.json --template-dir /local/templates/ -o /local/');
}

async function releasePackage(version) {
    return release({
        increment: version,
        'non-interactive': true,
        'dry-run': true,
        git: {
            commitArgs: `--message="chore(release): Release ${version} [skip ci]"`,
            requireCleanWorkingDir: false
        },
        publishConfig: {
            access: 'public'
        }
    });
}

async function build() {
    await dockerBuild();
    return execa.shell(`npm run compile`);
}

async function run() {
    // Analyze to see if there is a new build.
    const newVersion = await analyze();
    if(!newVersion) {
        return "No new version. Skipping 🎉"
    }

    await build();
    await releasePackage(newVersion);
}

run().then(console.log).catch(console.error);
