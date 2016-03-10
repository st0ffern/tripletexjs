var request = require('request')

/**
 * Tripletex.js
 * A wrapper for the uncommon Tripletex JSON-RPC API. Upload CSV, really?
 * 
 * The comments reflects our love of REST APIs.
 */

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
	 * importOrdersTripletexCSV
	 * Importing orders to Tripletex.
	 */

	/* I was to lazy to figure out this right now. I need to fucking upload CSV-file here. Not cool, mate!
	 * Was actually thinking about using J, or some other class, just to produce our CSV-files. */

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