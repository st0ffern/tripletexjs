#!/bin/bash
swagger-codegen generate -i https://tripletex.no/v2/swagger.json -l typescript-fetch --config ./config.json --template-dir ./templates/
