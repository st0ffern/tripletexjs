#!/bin/bash
swagger-codegen generate -i https://tripletex.no/v2/swagger.json -l typescript-inversify -o ./ --config ./config.json --template-dir ./templates/
