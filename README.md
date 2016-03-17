[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url]

A wrapper for Tripletex JSON-RPC API.

## Not completed!
As of now, not complete, but it includes;

 * Sync Service
 * Company Service
 * Product Service
 * Project Service, not complete
 * Invoice Service, not complete!

## Use it
```nodejs
var tripletexjs = require('tripletexjs')
var tripletex = new tripletexjs()
```

## New functions!
Tripletex API are most likely built solely on working with their web application, and are just exposed to outside developers to extend their. They most likely aren't putting much effort into extendings its functionalty, hence their awkward way of authenticating.

No matter, we have added some magic to the mix recently (march 2016). Now you can add orders to Tripletex, just by running some simple functions. This is hopefully the first step to make an more intuitive way of exchanging data with Tripletex.

Since they are not documented trough Tripletex API documentation, we would like to explain the functions behavour here.

## Project (Order) Service
These functions are not actually a part of the Tripletex API, the only thing we found in the documentation is uploading orders trough CSV (importOrdersTripletexCSV). Because we didn't like that way of adding orders, we added a more intuitive way; a way more like the onces we are used to. This would most likely be the same for invoices, however that down the pipeline. The reason beeing that most applications you would only want to add orders, and manually / bulk send them for Tripletex interface.

### Function: addOrder
This function is based upon the schematics of importOrdersTripletexCSV-function, with some small changes to make it behave.

```nodejs

var order = {
	'Customer number': 10001,
	'lines': [
		{
			'Product number': 1200,
			'Count': 4,
			'Vat type': 3
		},
		{
			'Order line description': 'Testing some things out!',
			'Count': 3,
			'Unit price': 3999,
			'Vat type': 3
		},
	]
}

tripletex.addOrder(order, function(err, response){
    console.log(response);
});
```

The biggest change is that you provide data with an object. Inside that object you can add all the parameters you would like, in what order you'd like. Also, if you want to add some order-lines, you provide them inside the object with the variable ```lines```. The parameters is written the way they're explained in the API documentation.

## Function: addOrders
This function is made if you want to add more on the same request. We encourage you to use this if you are adding more than one, because it will lower load onto the Tripletex API by far. We all know its not that great. 

```nodejs

var orders = [
    {
    	'Customer number': 10001,
    	'lines': [
    		{
    			'Product number': 1200,
    			'Count': 4,
    			'Vat type': 3
    		}
    		…
    	]
    },
    {
    	'Customer number': 10002,
    	'lines': [
    		{
    			'Product number': 1201,
    			'Count': 4,
    			'Vat type': 3
    		}
    		…
    	]
    }
]

tripletex.addOrders(orders, function(err, response){
    console.log(response);
});
```

## Contribute!
If you are developing for this awful API, please contribute to making this
as good as it can get. There is yet to be developed how you can add invoice(s)
and add order(s).

Many of the missing services just needs simple copy-paste work.

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/tripletexjs
[npm-version-image]: http://img.shields.io/npm/v/tripletexjs.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/tripletexjs.svg?style=flat
