/**
 * Tripletex.js
 * A wrapper for the uncommon Tripletex JSON-RPC API. Upload CSV, really?
 * 
 * The comments reflects our love of REST APIs.
 */

var request = require('request'), // To be able to make requests.
	async = require('async')

var request = request.defaults({jar: true})

var Tripletex = function(){

	/**
	 * One selfish variable, right?
	 */
	var self = this

	/**
	 * Configuration variables
	 */
	var config = {
		endpoint: "https://tripletex.no/JSON-RPC"
	}

	/* Service: Sync 
	 *****************************************************************
	 */

	/**
	 * Login to API
	 * Create session. Yeah. With Cookies. I'm sad about this.
	 */

	self.login = function(syncSystem, syncPassword, username, password, callback){
		self.request('Sync.login', [
			syncSystem,
			syncPassword,
			username,
			password
			], function(err, result, body){
				if(typeof body.error !== 'undefined'){
					callback(body.error.msg)
				} else {
					callback(false, body)
				}
			})
	}

	/**
	 * Switch Company
	 * Change what company you are representing. Nice to ensure that you are working
	 * With the correct company, since things are actually saved inside the session.
	 */
	self.switchCompany = function(companyId, callback){
		self.request('Sync.switchCompany', [companyId], function(err, result, body){
			if(typeof body.error !== 'undefined'){
				callback(body.error.msg)
			} else {
				callback(false, body)
			}
		})
	}

	/**
	 * Login to API with OrgNr
	 * Create session, only with an organization? Maybe so you don't need to switch company?
	 */

	self.loginOrgNo = function(syncSystem, syncPassword, username, password, organizationNumber, callback){
		self.request('Sync.loginOrgNo', [
			syncSystem,
			syncPassword,
			username,
			password,
			organizationNumber
			], function(err, result, body){
				if(typeof body.error !== 'undefined'){
					callback(body.error.msg)
				} else {
					callback(false, body)
				}
			})
	}

	/**
	 * Logout of the API
	 * Right? WTF?
	 */

	self.logout = function(callback){
		self.request('Sync.logout', [], function(err, result, body){
			if(typeof body.error !== 'undefined'){
				callback(body.error.msg)
			} else {
				callback(false, body)
			}
		})
	}

	/* Service: Company 
	 *****************************************************************
	 */

	/**
	 * Get company name.
	 * It just returns the name of the logged in company.
	 */

	self.getLoginCompanyName = function(callback){
		self.request('Company.getLoginCompanyName', [], function(err, result, body){
			if(typeof body.error !== 'undefined'){
				callback(body.error.msg)
			} else {
				callback(false, body)
			}
		})
	}

	/**
	 * Search for customers and vendors.
	 */

	self.searchForCustomersAndVendors = function(customerVendorType, isActive, searchString, callback){
		self.request('Company.searchForCustomersAndVendors', [customerVendorType, isActive, searchString], function(err, result, body){
			if(typeof body.error !== 'undefined'){
				callback(body.error.msg)
			} else {
				callback(false, body)
			}
		})
	}

	/**
	 * Save an customer or vendor.
	 */

	self.saveCustomerVendor = function(object, callback){

		var params = [
			object.name ? object.name : '',
			object.customerAccountNumber ? object.customerAccountNumber : '',
			object.vendorAccountNumber ? object.vendorAccountNumber : '',
			object.organizationNumber ? object.organizationNumber : '',
			object.phoneNumber ? object.phoneNumber : '',
			object.mobileNumber ? object.mobileNumber : '',
			object.faxNumber ? object.faxNumber : '',
			object.email ? object.email : '',
			object.invoiceEmail ? object.invoiceEmail : '',
			object.postalAddress1 ? object.postalAddress1 : '',
			object.postalAddress2 ? object.postalAddress2 : '',
			object.postalNumber ? object.postalNumber : '',
			object.postalCity ? object.postalCity : '',
			object.postalCountryCode ? object.postalCountryCode : '',
			object.physicalAddress1 ? object.physicalAddress1 : '',
			object.physicalAddress2 ? object.physicalAddress2 : '',
			object.physicalPostalNumber ? object.physicalPostalNumber : '',
			object.physicalCity ? object.physicalCity : '',
			object.physicalCountryCode ? object.physicalCountryCode : '',
			object.accountManagerId ? object.accountManagerId : '',
			object.customerCategoryId1 ? object.customerCategoryId1 : '',
			object.customerCategoryId2 ? object.customerCategoryId2 : '',
			object.customerCategoryId3 ? object.customerCategoryId3 : '',
			object.languageCode ? object.languageCode : '',
			object.currencyCode ? object.currencyCode : '',
			object.isPrivateCustomer ? object.isPrivateCustomer : ''
		]

		self.request('Company.saveCustomerVendor', params, function(err, result, body){
			if(typeof body.error !== 'undefined'){
				callback(body.error.msg)
			} else {
				callback(false, body)
			}
		})
	}

	/* Service: Product 
	 *****************************************************************
	 */

	/**
	 * Search for products
	 */

	self.searchForProducts = function(isActive, searchString, callback){
		self.request('Product.searchForProducts', [isActive, searchString], function(err, result, body){
			if(typeof body.error !== 'undefined'){
				callback(body.error.msg)
			} else {
				callback(false, body)
			}
		})
	}

	/**
	 * Save a product.
	 */

	self.saveProduct = function(object, callback){

		var params = [
			object.name ? object.name : '',
			object.number ? object.number : '',
			object.cost ? object.cost : '',
			object.currencyCode ? object.currencyCode : '',
			object.vatType ? object.vatType : '',
			object.priceCurrency ? object.priceCurrency : '',
			object.priceIncVatCurrency ? object.priceIncVatCurrency : ''
		]

		self.request('Company.saveProduct', params, function(err, result, body){
			if(typeof body.error !== 'undefined'){
				callback(body.error.msg)
			} else {
				callback(false, body)
			}
		})
	}

	/* Service: Project (Order)
	 *****************************************************************
	 */


	/**
	* Special! addOrder
	* This function is not actually a part of the API. This actually simplifies the way you
	* add order regually trough an API; what is does is adding one order at a time. It uses
	* XLSX to produce an CSV-file and then uploads.
	*
	* It uses the same scheme as explained under Fileformat, but provided as one object.
	* Only change we did was to put order-lines inside the object, as shown:
	* {
	*	"Order number": 31941414,
	*	"lines": [
	*		{
	*			"Count": 2
	*		}
	*	]
	* }
	*/
	self.addOrder = function(order, callback){
		self.addOrders([order], callback);
	}

	/**
	* Special! addOrders
	* This function is not actually a part of the API. This functions is a kind of a helper,
	* that fixed the shitty interface Tripletex has regarding CSV-upload.
	*
	* Check out the singular-version (addOrder) to learn more. 
	*
	* It uses the same scheme as explained under Fileformat, but provided as an array.
	*/
	self.addOrders = function(orders, callback){

		var file;
		var params = {
			amountsIncVat: false,
			ignoreFirstRow: false,
			assignNewOrderNumbers: true
		};

		var importingOrders = [];
		var firstOrderId = 100000;

		async.eachSeries(orders, function(order, callback){
			var newOrder = [
				order['Order number'] ? order['Order number'] : firstOrderId,
				order['Order date'] ? order['Order date'] : "",
				order['Customer number'] ? order['Customer number'] : "",
				order['Customer name'] ? order['Customer name'] : "",
				order['Customer address1'] ? order['Customer address1'] : "",
				order['Customer address2'] ? order['Customer address2'] : "",
				order['Customer postal number'] ? order['Customer postal number'] : "",
				order['Customer city'] ? order['Customer city'] : "",
				order['Customer email'] ? order['Customer email'] : "",
				order['Contact first name'] ? order['Contact first name'] : "",
				order['Contact last name'] ? order['Contact last name'] : "",
				order['Attn. first name'] ? order['Attn. first name'] : "",
				order['Attn. last name'] ? order['Attn. last name'] : "",
				order['Reference number'] ? order['Reference number'] : "",
				order['Delivery date'] ? order['Delivery date'] : "",
				order['Delivery location'] ? order['Delivery location'] : "",
				order['Order comment'] ? order['Order comment'] : "",
				order['Subscription unit price period'] ? order['Subscription unit price period'] : "",
				order['Subscription unit price period unit'] ? order['Subscription unit price period unit'] : "",
				order['Subscription invoice period'] ? order['Subscription invoice period'] : "",
				order['Subscription invoicing type'] ? order['Subscription invoicing type'] : "",
				order['Subscription invoicing period count'] ? order['Subscription invoicing period count'] : "",
				order['Subscription invoicing period unit'] ? order['Subscription invoicing period unit'] : ""
			];

			firstOrderId++;

			if(typeof order.lines !== 'undefined'){
				var firstLine = true;


				// First line needs to go in newOrder
				async.eachSeries(order.lines, function(line, callback){
					var newLine = [
						line['Subscription start date'] ? line['Subscription start date'] : "",
						line['Count'] ? line['Count'] : "",
						line['Unit price'] ? line['Unit price'] : "",
						line['Discount percentage'] ? line['Discount percentage'] : "",
						line['Vat type'] ? line['Vat type'] : "",
						line['Order line description'] ? line['Order line description'] : "",
						line['Product number'] ? line['Product number'] : "",
						line['Department number'] ? line['Department number'] : "",
						line['Department name'] ? line['Department name'] : "",
						line['Project number'] ? line['Project number'] : "",
						line['Project name'] ? line['Project name'] : "",
						line['Currency code'] ? line['Currency code'] : "",
						line['Warehouse number'] ? line['Warehouse number'] : "",
						line['Warehouse name'] ? line['Warehouse name'] : ""
					];

					if(firstLine){
						newOrder = newOrder.concat(newLine);
						importingOrders.push(newOrder);
						firstLine = false;
					} else {
						var returningArray = Array(23);
						returningArray[0] = newOrder[0];
						importingOrders.push(returningArray.concat(newLine));
					}

					callback();
				}, function done(){
					callback();
				})
			} else {
				importingOrders.push(newOrder);
				callback();
			}
		}, function done(){

			var joinRow = function(row) {
			  return row.map(escapeCell).join(';')
			}

			var escapeCell = function(x) {
			  return /,|"/.test(x)
			    ? '"' + x + '"'
			    : x
			}

			file = importingOrders.map(joinRow).join('\r\n')
			self.importOrdersTripletexCSV(file, params.amountsIncVat, params.ignoreFirstRow, params.assignNewOrderNumbers, callback);
		});
	}

	 /**
	 * importOrdersTripletexCSV
	 * Importing orders to Tripletex.
	 */

	self.importOrdersTripletexCSV = function(file, amountsIncVat, ignoreFirstRow, assignNewOrderNumbers, callback){

		self.request('Project.importOrdersTripletexCSV', [file, amountsIncVat, ignoreFirstRow, assignNewOrderNumbers], function(err, result, body){
			if(typeof body.error !== 'undefined'){
				callback(body.error.msg)
			} else {
				callback(false, body)
			}
		})
	}

	/* Service: Invoice
	 *****************************************************************
	 */

	 /**
	 * importInvoicesTripletexCSV
	 * Importing invoices to Tripletex.
	 */

	 /* Same goes for this. */

	 /**
	 * getHistoryAmountCurrencyOutstanding
	 * Returns outstanding payment amount for an invoice.
	 */

	self.getHistoryAmountCurrencyOutstanding = function(invoiceNumber, callback){
		self.request('Invoice.getHistoryAmountCurrencyOutstanding', [invoiceNumber], function(err, result, body){
			if(typeof body.error !== 'undefined'){
				callback(body.error.msg)
			} else {
				callback(false, body)
			}
		})
	}

	/**
	 * createPaymentVoucher
	 * Creates payment voucher related to invoice
	 */

	self.createPaymentVoucher = function(invoiceNumber, date, paymentType, amountCurrency, callback){
		self.request('Invoice.createPaymentVoucher', [invoiceNumber, date, paymentType, amountCurrency], function(err, result, body){
			if(typeof body.error !== 'undefined'){
				callback(body.error.msg)
			} else {
				callback(false, body)
			}
		})
	}

	/**
	 * isCredited
	 * Returns true if the invoice is credited
	 */

	self.isCredited = function(invoiceNumber, callback){
		self.request('Invoice.isCredited', [invoiceNumber], function(err, result, body){
			if(typeof body.error !== 'undefined'){
				callback(body.error.msg)
			} else {
				callback(false, body)
			}
		})
	}

	/**
	 * getDocumentBase64PdfBytes
	 * Returns the invoice document as BASE64 pdf bytes.
	 */

	self.getDocumentBase64PdfBytes = function(invoiceNumber, callback){
		self.request('Invoice.getDocumentBase64PdfBytes', [invoiceNumber], function(err, result, body){
			if(typeof body.error !== 'undefined'){
				callback(body.error.msg)
			} else {
				callback(false, body)
			}
		})
	}

	 /**
	 * Requesting stuff. From the JSON-RPC SHITTY… sorry. I've gone to far.
	 */

	self.request = function(method, params, callback){

		var options = {
			url: config.endpoint,
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			json: {
				method: method,
				params: params
			}
		}

		request(options, callback)

	}

}

module.exports = Tripletex