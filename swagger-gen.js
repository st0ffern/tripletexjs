var request = require('request');
var fs = require('fs');
var CodeGen = require('swagger-typescript-codegen').CodeGen;


request("https://tripletex.no/v2/swagger.json", (err, res, body) => {
  if(err){
    return console.error(err);
  }

  var swagger = JSON.parse(body);
  console.log(swagger);
  var tsSourceCode = CodeGen.getTypescriptCode({
    className: 'Tripletex',
    swagger: swagger
  });
  fs.writeFile('src/tripletex.ts', tsSourceCode, (err) => {
    if(err){
      return console.error(err);
    }
    console.log('done');
  });

})
