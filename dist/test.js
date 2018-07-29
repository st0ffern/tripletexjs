"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var tokenSession = new _1.TokensessionApi;
tokenSession.create('xxxx-xxxx-xxxx', 'xxxx-xxxx-xxxx', '2018-07-29T11:42:39.439Z').then(function (token) {
    var invoice = new _1.InvoiceApi({
        username: '',
        password: token.value.token
    });
    invoice.get(100000).then(function (invoiceItem) {
        console.log(invoiceItem.value.amount);
    });
});
