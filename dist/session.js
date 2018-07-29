"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api");
var Session = /** @class */ (function () {
    function Session() {
    }
    Session.generateToken = function (consumerToken, employeeToken, expirationDate) {
        var tokenSession = new api_1.TokensessionApi;
        return tokenSession.create(consumerToken, employeeToken, expirationDate);
    };
    return Session;
}());
exports.Session = Session;
