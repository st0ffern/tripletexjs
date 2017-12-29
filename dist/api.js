"use strict";
/**
 * Tripletex API
 * The Tripletex API is a **RESTful API**, which does not implement PATCH, but uses a PUT with optional fields.  **Actions** or commands are represented in our RESTful path with a prefixed **\":\"**. Example: **\"/v2/hours/123/:approve\"**. (Use \"::\" in Postman)  **Summaries** or aggregated results are represented in our RESTful path with a prefixed **\"&gt;\"**. Example: **\"/v2/hours/&gt;thisWeeksBillables\"**.  **\"requestID\"** is a key found in all validation and error responses. If additional log information is absolutely necessary, our support division can locate the key value.  **HTTPS** is used by the entire API and will throw an error on HTTP.  **Download** the [swagger.json](/v2/swagger.json) file [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification) to [generate code](https://github.com/swagger-api/swagger-codegen). This document was generated from the Swagger JSON file.  **version:** This is a versioning number found on all DB records. If included, it will prevent your PUT/POST from overriding any updates to the record since your GET.  **Date & DateTime** follows the **ISO 8601** standard. Date: YYYY-MM-DD. DateTime: YYYY-MM-DDThh:mm:ssZ  **Sorting** is done by specifying a comma separated list, where a \"-\" prefix denotes descending. You can sort by sub object with the following format: 'project.name, -date'.  **Searching:** is done by entering values in the optional fields for each API call. The values fall into the following categories: range, in, exact and like.  **Tokens:** The Tripletex API uses 3 different tokens - **consumerToken**, **employeeToken** and **sessionToken**.  **consumerToken** is a token provided to the consumer by Tripletex after the API 2.0 registration is completed.  **employeeToken** is a token created by an administrator in your Tripletex account via the user settings and the tab \"API access\". Each employee token must be given a set of entitlements.  **sessionToken** is the token from \"/tokens/session/:create\" which requires a consumerToken and an employeeToken created with the same consumer token, but not an authentication header. The session token is used as the password in \"Basic Authentication Header\" for API calls.  Use blank or 0 as username for accessing the account with regular employee token, or if a company owned employee token accesses \"/company/&gt;withLoginAccess\" or \"/token/session/&gt;whoAmI\".  For company owned employee tokens (accounting offices) the ID from \"/company/&gt;withLoginAccess\" can be used as username for accessing client accounts.  If you need to create the header yourself use \"Authorization: Basic &lt;base64encode(':sessionToken')&gt;\".  ##Tags:## - <div class=\"tag-icon-beta\"></div> **[BETA]** This is a beta endpoint and can be subject to change. - <div class=\"tag-icon-deprecated\"></div> **[DEPRECATED]** Deprecated means that we intend to remove/change this feature or capability in a future \"major\" API release. We therefore discourage all use of this feature/capability.  ##Fields:## - **project,activity,hours**  returns _{project:..., activety:...., hours:...}_. - just **project** returns _\"project\" : { \"id\": 12345, \"url\": \"tripletex.no/v2/projects/12345\"  }_. - **project(*)** returns _\"project\" : { \"id\": 12345 \"name\":\"ProjectName\" \"number.....startDate\": \"2013-01-07\" }_. - **project(name)** returns _*\"project\" : { \"name\":\"ProjectName\" }*_. - All elements and some subElements :  _*,activity(name),employee(*)_.  ##Rate limiting in each response header:## - **X-Rate-Limit-Limit** - The number of allowed requests in the current period. - **X-Rate-Limit-Remaining** - The number of remaining requests. - **X-Rate-Limit-Reset** - The number of seconds left in the current period.  ##Status codes / Error codes## - **200 OK** - **201 Created** - From POSTs that create something new. - **204 No Content** - When there is no answer, ex: \"/:anAction\" or DELETE. - **400 Bad request** -   - **4000** Bad Request Exception   - **11000** Illegal Filter Exception   - **12000** Path Param Exception   - **24000**   Cryptography Exception - **401 Unauthorized** - When authentication is required and has failed or has not yet been provided   -  **3000** Authentication Exception   -  **9000** Security Exception - **403 Forbidden** - When AuthorisationManager says no. - **404 Not Found** - For content/IDs that does not exist.   -  **6000** Not Found Exception - **409 Conflict** - Such as an edit conflict between multiple simultaneous updates   -  **7000** Object Exists Exception   -  **8000** Revision Exception   - **10000** Locked Exception   - **14000** Duplicate entry - **422 Bad Request** - For Required fields or things like malformed payload.   - **15000** Value Validation Exception   - **16000** Mapping Exception   - **17000** Sorting Exception   - **18000** Validation Exception   - **21000** Param Exception   - **22000** Invalid JSON Exception   - **23000**   Result Set Too Large Exception - **500 Internal Error** -  Unexpected condition was encountered and no more specific message is suitable   -  **1000** Exception
 *
 * OpenAPI spec version: 2.5.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var Promise = require("bluebird");
var defaultBasePath = 'https://tripletex.no/v2';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
/* tslint:disable:no-unused-variable */
var AbstractDTO = /** @class */ (function () {
    function AbstractDTO() {
    }
    return AbstractDTO;
}());
exports.AbstractDTO = AbstractDTO;
var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());
exports.Account = Account;
var AccountingPeriod = /** @class */ (function () {
    function AccountingPeriod() {
    }
    return AccountingPeriod;
}());
exports.AccountingPeriod = AccountingPeriod;
var Activity = /** @class */ (function () {
    function Activity() {
    }
    return Activity;
}());
exports.Activity = Activity;
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;
var AnnualAccount = /** @class */ (function () {
    function AnnualAccount() {
    }
    return AnnualAccount;
}());
exports.AnnualAccount = AnnualAccount;
var ApiConsumer = /** @class */ (function () {
    function ApiConsumer() {
    }
    return ApiConsumer;
}());
exports.ApiConsumer = ApiConsumer;
var ApiError = /** @class */ (function () {
    function ApiError() {
    }
    return ApiError;
}());
exports.ApiError = ApiError;
var ApiValidationMessage = /** @class */ (function () {
    function ApiValidationMessage() {
    }
    return ApiValidationMessage;
}());
exports.ApiValidationMessage = ApiValidationMessage;
var AppSpecific = /** @class */ (function () {
    function AppSpecific() {
    }
    return AppSpecific;
}());
exports.AppSpecific = AppSpecific;
var Beacon = /** @class */ (function () {
    function Beacon() {
    }
    return Beacon;
}());
exports.Beacon = Beacon;
var CSVRecord = /** @class */ (function () {
    function CSVRecord() {
    }
    return CSVRecord;
}());
exports.CSVRecord = CSVRecord;
var CloseGroup = /** @class */ (function () {
    function CloseGroup() {
    }
    return CloseGroup;
}());
exports.CloseGroup = CloseGroup;
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());
exports.Company = Company;
var ConsumerToken = /** @class */ (function () {
    function ConsumerToken() {
    }
    return ConsumerToken;
}());
exports.ConsumerToken = ConsumerToken;
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());
exports.Contact = Contact;
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());
exports.Country = Country;
var Currency = /** @class */ (function () {
    function Currency() {
    }
    return Currency;
}());
exports.Currency = Currency;
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
exports.Customer = Customer;
var CustomerCategory = /** @class */ (function () {
    function CustomerCategory() {
    }
    return CustomerCategory;
}());
exports.CustomerCategory = CustomerCategory;
var Department = /** @class */ (function () {
    function Department() {
    }
    return Department;
}());
exports.Department = Department;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;
(function (Employee) {
    var UserTypeEnum;
    (function (UserTypeEnum) {
        UserTypeEnum[UserTypeEnum["STANDARD"] = 'STANDARD'] = "STANDARD";
        UserTypeEnum[UserTypeEnum["EXTENDED"] = 'EXTENDED'] = "EXTENDED";
        UserTypeEnum[UserTypeEnum["NOACCESS"] = 'NO_ACCESS'] = "NOACCESS";
    })(UserTypeEnum = Employee.UserTypeEnum || (Employee.UserTypeEnum = {}));
})(Employee = exports.Employee || (exports.Employee = {}));
exports.Employee = Employee;
var EmployeeToken = /** @class */ (function () {
    function EmployeeToken() {
    }
    return EmployeeToken;
}());
exports.EmployeeToken = EmployeeToken;
var Employment = /** @class */ (function () {
    function Employment() {
    }
    return Employment;
}());
exports.Employment = Employment;
var EmploymentDetails = /** @class */ (function () {
    function EmploymentDetails() {
    }
    return EmploymentDetails;
}());
exports.EmploymentDetails = EmploymentDetails;
var EmploymentType = /** @class */ (function () {
    function EmploymentType() {
    }
    return EmploymentType;
}());
exports.EmploymentType = EmploymentType;
(function (EmploymentType) {
    var EmploymentTypeEnum;
    (function (EmploymentTypeEnum) {
        EmploymentTypeEnum[EmploymentTypeEnum["RELATIONSHIP"] = 'TYPE_OF_EMPLOYMENT_RELATIONSHIP'] = "RELATIONSHIP";
    })(EmploymentTypeEnum = EmploymentType.EmploymentTypeEnum || (EmploymentType.EmploymentTypeEnum = {}));
})(EmploymentType = exports.EmploymentType || (exports.EmploymentType = {}));
exports.EmploymentType = EmploymentType;
var Entitlement = /** @class */ (function () {
    function Entitlement() {
    }
    return Entitlement;
}());
exports.Entitlement = Entitlement;
var ImportConfigDTO = /** @class */ (function () {
    function ImportConfigDTO() {
    }
    return ImportConfigDTO;
}());
exports.ImportConfigDTO = ImportConfigDTO;
var ImportReportDTO = /** @class */ (function () {
    function ImportReportDTO() {
    }
    return ImportReportDTO;
}());
exports.ImportReportDTO = ImportReportDTO;
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    return Inventory;
}());
exports.Inventory = Inventory;
var Invoice = /** @class */ (function () {
    function Invoice() {
    }
    return Invoice;
}());
exports.Invoice = Invoice;
(function (Invoice) {
    var EhfSendStatusEnum;
    (function (EhfSendStatusEnum) {
        EhfSendStatusEnum[EhfSendStatusEnum["DONOTSEND"] = 'DO_NOT_SEND'] = "DONOTSEND";
        EhfSendStatusEnum[EhfSendStatusEnum["SEND"] = 'SEND'] = "SEND";
        EhfSendStatusEnum[EhfSendStatusEnum["SENT"] = 'SENT'] = "SENT";
        EhfSendStatusEnum[EhfSendStatusEnum["SENDFAILURERECIPIENTNOTFOUND"] = 'SEND_FAILURE_RECIPIENT_NOT_FOUND'] = "SENDFAILURERECIPIENTNOTFOUND";
    })(EhfSendStatusEnum = Invoice.EhfSendStatusEnum || (Invoice.EhfSendStatusEnum = {}));
})(Invoice = exports.Invoice || (exports.Invoice = {}));
exports.Invoice = Invoice;
var LeaveOfAbsence = /** @class */ (function () {
    function LeaveOfAbsence() {
    }
    return LeaveOfAbsence;
}());
exports.LeaveOfAbsence = LeaveOfAbsence;
var LeaveOfAbsenceType = /** @class */ (function () {
    function LeaveOfAbsenceType() {
    }
    return LeaveOfAbsenceType;
}());
exports.LeaveOfAbsenceType = LeaveOfAbsenceType;
(function (LeaveOfAbsenceType) {
    var LeaveOfAbsenceTypeEnum;
    (function (LeaveOfAbsenceTypeEnum) {
        LeaveOfAbsenceTypeEnum[LeaveOfAbsenceTypeEnum["TYPE"] = 'LEAVE_OF_ABSENCE_TYPE'] = "TYPE";
    })(LeaveOfAbsenceTypeEnum = LeaveOfAbsenceType.LeaveOfAbsenceTypeEnum || (LeaveOfAbsenceType.LeaveOfAbsenceTypeEnum = {}));
})(LeaveOfAbsenceType = exports.LeaveOfAbsenceType || (exports.LeaveOfAbsenceType = {}));
exports.LeaveOfAbsenceType = LeaveOfAbsenceType;
var LedgerAccount = /** @class */ (function () {
    function LedgerAccount() {
    }
    return LedgerAccount;
}());
exports.LedgerAccount = LedgerAccount;
var ListResponseAccount = /** @class */ (function () {
    function ListResponseAccount() {
    }
    return ListResponseAccount;
}());
exports.ListResponseAccount = ListResponseAccount;
var ListResponseAccountingPeriod = /** @class */ (function () {
    function ListResponseAccountingPeriod() {
    }
    return ListResponseAccountingPeriod;
}());
exports.ListResponseAccountingPeriod = ListResponseAccountingPeriod;
var ListResponseActivity = /** @class */ (function () {
    function ListResponseActivity() {
    }
    return ListResponseActivity;
}());
exports.ListResponseActivity = ListResponseActivity;
var ListResponseAddress = /** @class */ (function () {
    function ListResponseAddress() {
    }
    return ListResponseAddress;
}());
exports.ListResponseAddress = ListResponseAddress;
var ListResponseAnnualAccount = /** @class */ (function () {
    function ListResponseAnnualAccount() {
    }
    return ListResponseAnnualAccount;
}());
exports.ListResponseAnnualAccount = ListResponseAnnualAccount;
var ListResponseBeacon = /** @class */ (function () {
    function ListResponseBeacon() {
    }
    return ListResponseBeacon;
}());
exports.ListResponseBeacon = ListResponseBeacon;
var ListResponseCloseGroup = /** @class */ (function () {
    function ListResponseCloseGroup() {
    }
    return ListResponseCloseGroup;
}());
exports.ListResponseCloseGroup = ListResponseCloseGroup;
var ListResponseCompany = /** @class */ (function () {
    function ListResponseCompany() {
    }
    return ListResponseCompany;
}());
exports.ListResponseCompany = ListResponseCompany;
var ListResponseContact = /** @class */ (function () {
    function ListResponseContact() {
    }
    return ListResponseContact;
}());
exports.ListResponseContact = ListResponseContact;
var ListResponseCountry = /** @class */ (function () {
    function ListResponseCountry() {
    }
    return ListResponseCountry;
}());
exports.ListResponseCountry = ListResponseCountry;
var ListResponseCurrency = /** @class */ (function () {
    function ListResponseCurrency() {
    }
    return ListResponseCurrency;
}());
exports.ListResponseCurrency = ListResponseCurrency;
var ListResponseCustomer = /** @class */ (function () {
    function ListResponseCustomer() {
    }
    return ListResponseCustomer;
}());
exports.ListResponseCustomer = ListResponseCustomer;
var ListResponseCustomerCategory = /** @class */ (function () {
    function ListResponseCustomerCategory() {
    }
    return ListResponseCustomerCategory;
}());
exports.ListResponseCustomerCategory = ListResponseCustomerCategory;
var ListResponseDepartment = /** @class */ (function () {
    function ListResponseDepartment() {
    }
    return ListResponseDepartment;
}());
exports.ListResponseDepartment = ListResponseDepartment;
var ListResponseEmployee = /** @class */ (function () {
    function ListResponseEmployee() {
    }
    return ListResponseEmployee;
}());
exports.ListResponseEmployee = ListResponseEmployee;
var ListResponseEmployment = /** @class */ (function () {
    function ListResponseEmployment() {
    }
    return ListResponseEmployment;
}());
exports.ListResponseEmployment = ListResponseEmployment;
var ListResponseEmploymentDetails = /** @class */ (function () {
    function ListResponseEmploymentDetails() {
    }
    return ListResponseEmploymentDetails;
}());
exports.ListResponseEmploymentDetails = ListResponseEmploymentDetails;
var ListResponseEmploymentType = /** @class */ (function () {
    function ListResponseEmploymentType() {
    }
    return ListResponseEmploymentType;
}());
exports.ListResponseEmploymentType = ListResponseEmploymentType;
var ListResponseEntitlement = /** @class */ (function () {
    function ListResponseEntitlement() {
    }
    return ListResponseEntitlement;
}());
exports.ListResponseEntitlement = ListResponseEntitlement;
var ListResponseInventory = /** @class */ (function () {
    function ListResponseInventory() {
    }
    return ListResponseInventory;
}());
exports.ListResponseInventory = ListResponseInventory;
var ListResponseInvoice = /** @class */ (function () {
    function ListResponseInvoice() {
    }
    return ListResponseInvoice;
}());
exports.ListResponseInvoice = ListResponseInvoice;
var ListResponseLeaveOfAbsenceType = /** @class */ (function () {
    function ListResponseLeaveOfAbsenceType() {
    }
    return ListResponseLeaveOfAbsenceType;
}());
exports.ListResponseLeaveOfAbsenceType = ListResponseLeaveOfAbsenceType;
var ListResponseLedgerAccount = /** @class */ (function () {
    function ListResponseLedgerAccount() {
    }
    return ListResponseLedgerAccount;
}());
exports.ListResponseLedgerAccount = ListResponseLedgerAccount;
var ListResponseNotification = /** @class */ (function () {
    function ListResponseNotification() {
    }
    return ListResponseNotification;
}());
exports.ListResponseNotification = ListResponseNotification;
var ListResponseOccupationCode = /** @class */ (function () {
    function ListResponseOccupationCode() {
    }
    return ListResponseOccupationCode;
}());
exports.ListResponseOccupationCode = ListResponseOccupationCode;
var ListResponseOrder = /** @class */ (function () {
    function ListResponseOrder() {
    }
    return ListResponseOrder;
}());
exports.ListResponseOrder = ListResponseOrder;
var ListResponseOrderLine = /** @class */ (function () {
    function ListResponseOrderLine() {
    }
    return ListResponseOrderLine;
}());
exports.ListResponseOrderLine = ListResponseOrderLine;
var ListResponsePaymentType = /** @class */ (function () {
    function ListResponsePaymentType() {
    }
    return ListResponsePaymentType;
}());
exports.ListResponsePaymentType = ListResponsePaymentType;
var ListResponsePayslip = /** @class */ (function () {
    function ListResponsePayslip() {
    }
    return ListResponsePayslip;
}());
exports.ListResponsePayslip = ListResponsePayslip;
var ListResponsePosting = /** @class */ (function () {
    function ListResponsePosting() {
    }
    return ListResponsePosting;
}());
exports.ListResponsePosting = ListResponsePosting;
var ListResponseProduct = /** @class */ (function () {
    function ListResponseProduct() {
    }
    return ListResponseProduct;
}());
exports.ListResponseProduct = ListResponseProduct;
var ListResponseProductUnit = /** @class */ (function () {
    function ListResponseProductUnit() {
    }
    return ListResponseProductUnit;
}());
exports.ListResponseProductUnit = ListResponseProductUnit;
var ListResponseProject = /** @class */ (function () {
    function ListResponseProject() {
    }
    return ListResponseProject;
}());
exports.ListResponseProject = ListResponseProject;
var ListResponseProjectCategory = /** @class */ (function () {
    function ListResponseProjectCategory() {
    }
    return ListResponseProjectCategory;
}());
exports.ListResponseProjectCategory = ListResponseProjectCategory;
var ListResponseProspect = /** @class */ (function () {
    function ListResponseProspect() {
    }
    return ListResponseProspect;
}());
exports.ListResponseProspect = ListResponseProspect;
var ListResponseRemunerationType = /** @class */ (function () {
    function ListResponseRemunerationType() {
    }
    return ListResponseRemunerationType;
}());
exports.ListResponseRemunerationType = ListResponseRemunerationType;
var ListResponseSalarySpecification = /** @class */ (function () {
    function ListResponseSalarySpecification() {
    }
    return ListResponseSalarySpecification;
}());
exports.ListResponseSalarySpecification = ListResponseSalarySpecification;
var ListResponseSalaryTransaction = /** @class */ (function () {
    function ListResponseSalaryTransaction() {
    }
    return ListResponseSalaryTransaction;
}());
exports.ListResponseSalaryTransaction = ListResponseSalaryTransaction;
var ListResponseSalaryType = /** @class */ (function () {
    function ListResponseSalaryType() {
    }
    return ListResponseSalaryType;
}());
exports.ListResponseSalaryType = ListResponseSalaryType;
var ListResponseStandardTime = /** @class */ (function () {
    function ListResponseStandardTime() {
    }
    return ListResponseStandardTime;
}());
exports.ListResponseStandardTime = ListResponseStandardTime;
var ListResponseSupplier = /** @class */ (function () {
    function ListResponseSupplier() {
    }
    return ListResponseSupplier;
}());
exports.ListResponseSupplier = ListResponseSupplier;
var ListResponseSupplierBalance = /** @class */ (function () {
    function ListResponseSupplierBalance() {
    }
    return ListResponseSupplierBalance;
}());
exports.ListResponseSupplierBalance = ListResponseSupplierBalance;
var ListResponseTimeClock = /** @class */ (function () {
    function ListResponseTimeClock() {
    }
    return ListResponseTimeClock;
}());
exports.ListResponseTimeClock = ListResponseTimeClock;
var ListResponseTimesheetEntry = /** @class */ (function () {
    function ListResponseTimesheetEntry() {
    }
    return ListResponseTimesheetEntry;
}());
exports.ListResponseTimesheetEntry = ListResponseTimesheetEntry;
var ListResponseVatType = /** @class */ (function () {
    function ListResponseVatType() {
    }
    return ListResponseVatType;
}());
exports.ListResponseVatType = ListResponseVatType;
var ListResponseVoucherType = /** @class */ (function () {
    function ListResponseVoucherType() {
    }
    return ListResponseVoucherType;
}());
exports.ListResponseVoucherType = ListResponseVoucherType;
var ListResponseWeeklyStatus = /** @class */ (function () {
    function ListResponseWeeklyStatus() {
    }
    return ListResponseWeeklyStatus;
}());
exports.ListResponseWeeklyStatus = ListResponseWeeklyStatus;
var ListResponseWorkingHoursScheme = /** @class */ (function () {
    function ListResponseWorkingHoursScheme() {
    }
    return ListResponseWorkingHoursScheme;
}());
exports.ListResponseWorkingHoursScheme = ListResponseWorkingHoursScheme;
var LoggedInUserInfoDTO = /** @class */ (function () {
    function LoggedInUserInfoDTO() {
    }
    return LoggedInUserInfoDTO;
}());
exports.LoggedInUserInfoDTO = LoggedInUserInfoDTO;
var MaventaEventDataDTO = /** @class */ (function () {
    function MaventaEventDataDTO() {
    }
    return MaventaEventDataDTO;
}());
exports.MaventaEventDataDTO = MaventaEventDataDTO;
var MaventaStatusDTO = /** @class */ (function () {
    function MaventaStatusDTO() {
    }
    return MaventaStatusDTO;
}());
exports.MaventaStatusDTO = MaventaStatusDTO;
var MonthlyStatus = /** @class */ (function () {
    function MonthlyStatus() {
    }
    return MonthlyStatus;
}());
exports.MonthlyStatus = MonthlyStatus;
var Notification = /** @class */ (function () {
    function Notification() {
    }
    return Notification;
}());
exports.Notification = Notification;
var OccupationCode = /** @class */ (function () {
    function OccupationCode() {
    }
    return OccupationCode;
}());
exports.OccupationCode = OccupationCode;
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());
exports.Order = Order;
(function (Order) {
    var InvoicesDueInTypeEnum;
    (function (InvoicesDueInTypeEnum) {
        InvoicesDueInTypeEnum[InvoicesDueInTypeEnum["DAYS"] = 'DAYS'] = "DAYS";
        InvoicesDueInTypeEnum[InvoicesDueInTypeEnum["MONTHS"] = 'MONTHS'] = "MONTHS";
        InvoicesDueInTypeEnum[InvoicesDueInTypeEnum["RECURRINGDAYOFMONTH"] = 'RECURRING_DAY_OF_MONTH'] = "RECURRINGDAYOFMONTH";
    })(InvoicesDueInTypeEnum = Order.InvoicesDueInTypeEnum || (Order.InvoicesDueInTypeEnum = {}));
    var OrderLineSortingEnum;
    (function (OrderLineSortingEnum) {
        OrderLineSortingEnum[OrderLineSortingEnum["ID"] = 'ID'] = "ID";
        OrderLineSortingEnum[OrderLineSortingEnum["PRODUCT"] = 'PRODUCT'] = "PRODUCT";
        OrderLineSortingEnum[OrderLineSortingEnum["CUSTOM"] = 'CUSTOM'] = "CUSTOM";
    })(OrderLineSortingEnum = Order.OrderLineSortingEnum || (Order.OrderLineSortingEnum = {}));
    var SubscriptionDurationTypeEnum;
    (function (SubscriptionDurationTypeEnum) {
        SubscriptionDurationTypeEnum[SubscriptionDurationTypeEnum["MONTHS"] = 'MONTHS'] = "MONTHS";
        SubscriptionDurationTypeEnum[SubscriptionDurationTypeEnum["YEAR"] = 'YEAR'] = "YEAR";
    })(SubscriptionDurationTypeEnum = Order.SubscriptionDurationTypeEnum || (Order.SubscriptionDurationTypeEnum = {}));
    var SubscriptionPeriodsOnInvoiceTypeEnum;
    (function (SubscriptionPeriodsOnInvoiceTypeEnum) {
        SubscriptionPeriodsOnInvoiceTypeEnum[SubscriptionPeriodsOnInvoiceTypeEnum["MONTHS"] = 'MONTHS'] = "MONTHS";
    })(SubscriptionPeriodsOnInvoiceTypeEnum = Order.SubscriptionPeriodsOnInvoiceTypeEnum || (Order.SubscriptionPeriodsOnInvoiceTypeEnum = {}));
    var SubscriptionInvoicingTimeInAdvanceOrArrearsEnum;
    (function (SubscriptionInvoicingTimeInAdvanceOrArrearsEnum) {
        SubscriptionInvoicingTimeInAdvanceOrArrearsEnum[SubscriptionInvoicingTimeInAdvanceOrArrearsEnum["ADVANCE"] = 'ADVANCE'] = "ADVANCE";
        SubscriptionInvoicingTimeInAdvanceOrArrearsEnum[SubscriptionInvoicingTimeInAdvanceOrArrearsEnum["ARREARS"] = 'ARREARS'] = "ARREARS";
    })(SubscriptionInvoicingTimeInAdvanceOrArrearsEnum = Order.SubscriptionInvoicingTimeInAdvanceOrArrearsEnum || (Order.SubscriptionInvoicingTimeInAdvanceOrArrearsEnum = {}));
    var SubscriptionInvoicingTimeTypeEnum;
    (function (SubscriptionInvoicingTimeTypeEnum) {
        SubscriptionInvoicingTimeTypeEnum[SubscriptionInvoicingTimeTypeEnum["DAYS"] = 'DAYS'] = "DAYS";
        SubscriptionInvoicingTimeTypeEnum[SubscriptionInvoicingTimeTypeEnum["MONTHS"] = 'MONTHS'] = "MONTHS";
    })(SubscriptionInvoicingTimeTypeEnum = Order.SubscriptionInvoicingTimeTypeEnum || (Order.SubscriptionInvoicingTimeTypeEnum = {}));
})(Order = exports.Order || (exports.Order = {}));
exports.Order = Order;
var OrderLine = /** @class */ (function () {
    function OrderLine() {
    }
    return OrderLine;
}());
exports.OrderLine = OrderLine;
var PaymentType = /** @class */ (function () {
    function PaymentType() {
    }
    return PaymentType;
}());
exports.PaymentType = PaymentType;
var Payslip = /** @class */ (function () {
    function Payslip() {
    }
    return Payslip;
}());
exports.Payslip = Payslip;
var Posting = /** @class */ (function () {
    function Posting() {
    }
    return Posting;
}());
exports.Posting = Posting;
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var ProductUnit = /** @class */ (function () {
    function ProductUnit() {
    }
    return ProductUnit;
}());
exports.ProductUnit = ProductUnit;
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());
exports.Project = Project;
var ProjectCategory = /** @class */ (function () {
    function ProjectCategory() {
    }
    return ProjectCategory;
}());
exports.ProjectCategory = ProjectCategory;
var Prospect = /** @class */ (function () {
    function Prospect() {
    }
    return Prospect;
}());
exports.Prospect = Prospect;
var RemunerationType = /** @class */ (function () {
    function RemunerationType() {
    }
    return RemunerationType;
}());
exports.RemunerationType = RemunerationType;
(function (RemunerationType) {
    var RemunerationTypeEnum;
    (function (RemunerationTypeEnum) {
        RemunerationTypeEnum[RemunerationTypeEnum["TYPE"] = 'REMUNERATION_TYPE'] = "TYPE";
    })(RemunerationTypeEnum = RemunerationType.RemunerationTypeEnum || (RemunerationType.RemunerationTypeEnum = {}));
})(RemunerationType = exports.RemunerationType || (exports.RemunerationType = {}));
exports.RemunerationType = RemunerationType;
var ResponseWrapperAccount = /** @class */ (function () {
    function ResponseWrapperAccount() {
    }
    return ResponseWrapperAccount;
}());
exports.ResponseWrapperAccount = ResponseWrapperAccount;
var ResponseWrapperAccountingPeriod = /** @class */ (function () {
    function ResponseWrapperAccountingPeriod() {
    }
    return ResponseWrapperAccountingPeriod;
}());
exports.ResponseWrapperAccountingPeriod = ResponseWrapperAccountingPeriod;
var ResponseWrapperActivity = /** @class */ (function () {
    function ResponseWrapperActivity() {
    }
    return ResponseWrapperActivity;
}());
exports.ResponseWrapperActivity = ResponseWrapperActivity;
var ResponseWrapperAddress = /** @class */ (function () {
    function ResponseWrapperAddress() {
    }
    return ResponseWrapperAddress;
}());
exports.ResponseWrapperAddress = ResponseWrapperAddress;
var ResponseWrapperAnnualAccount = /** @class */ (function () {
    function ResponseWrapperAnnualAccount() {
    }
    return ResponseWrapperAnnualAccount;
}());
exports.ResponseWrapperAnnualAccount = ResponseWrapperAnnualAccount;
var ResponseWrapperApiConsumer = /** @class */ (function () {
    function ResponseWrapperApiConsumer() {
    }
    return ResponseWrapperApiConsumer;
}());
exports.ResponseWrapperApiConsumer = ResponseWrapperApiConsumer;
var ResponseWrapperAppSpecific = /** @class */ (function () {
    function ResponseWrapperAppSpecific() {
    }
    return ResponseWrapperAppSpecific;
}());
exports.ResponseWrapperAppSpecific = ResponseWrapperAppSpecific;
var ResponseWrapperBeacon = /** @class */ (function () {
    function ResponseWrapperBeacon() {
    }
    return ResponseWrapperBeacon;
}());
exports.ResponseWrapperBeacon = ResponseWrapperBeacon;
var ResponseWrapperBoolean = /** @class */ (function () {
    function ResponseWrapperBoolean() {
    }
    return ResponseWrapperBoolean;
}());
exports.ResponseWrapperBoolean = ResponseWrapperBoolean;
var ResponseWrapperCloseGroup = /** @class */ (function () {
    function ResponseWrapperCloseGroup() {
    }
    return ResponseWrapperCloseGroup;
}());
exports.ResponseWrapperCloseGroup = ResponseWrapperCloseGroup;
var ResponseWrapperCompany = /** @class */ (function () {
    function ResponseWrapperCompany() {
    }
    return ResponseWrapperCompany;
}());
exports.ResponseWrapperCompany = ResponseWrapperCompany;
var ResponseWrapperConsumerToken = /** @class */ (function () {
    function ResponseWrapperConsumerToken() {
    }
    return ResponseWrapperConsumerToken;
}());
exports.ResponseWrapperConsumerToken = ResponseWrapperConsumerToken;
var ResponseWrapperContact = /** @class */ (function () {
    function ResponseWrapperContact() {
    }
    return ResponseWrapperContact;
}());
exports.ResponseWrapperContact = ResponseWrapperContact;
var ResponseWrapperCountry = /** @class */ (function () {
    function ResponseWrapperCountry() {
    }
    return ResponseWrapperCountry;
}());
exports.ResponseWrapperCountry = ResponseWrapperCountry;
var ResponseWrapperCurrency = /** @class */ (function () {
    function ResponseWrapperCurrency() {
    }
    return ResponseWrapperCurrency;
}());
exports.ResponseWrapperCurrency = ResponseWrapperCurrency;
var ResponseWrapperCustomer = /** @class */ (function () {
    function ResponseWrapperCustomer() {
    }
    return ResponseWrapperCustomer;
}());
exports.ResponseWrapperCustomer = ResponseWrapperCustomer;
var ResponseWrapperCustomerCategory = /** @class */ (function () {
    function ResponseWrapperCustomerCategory() {
    }
    return ResponseWrapperCustomerCategory;
}());
exports.ResponseWrapperCustomerCategory = ResponseWrapperCustomerCategory;
var ResponseWrapperDepartment = /** @class */ (function () {
    function ResponseWrapperDepartment() {
    }
    return ResponseWrapperDepartment;
}());
exports.ResponseWrapperDepartment = ResponseWrapperDepartment;
var ResponseWrapperDouble = /** @class */ (function () {
    function ResponseWrapperDouble() {
    }
    return ResponseWrapperDouble;
}());
exports.ResponseWrapperDouble = ResponseWrapperDouble;
var ResponseWrapperEmployee = /** @class */ (function () {
    function ResponseWrapperEmployee() {
    }
    return ResponseWrapperEmployee;
}());
exports.ResponseWrapperEmployee = ResponseWrapperEmployee;
var ResponseWrapperEmployeeToken = /** @class */ (function () {
    function ResponseWrapperEmployeeToken() {
    }
    return ResponseWrapperEmployeeToken;
}());
exports.ResponseWrapperEmployeeToken = ResponseWrapperEmployeeToken;
var ResponseWrapperEmployment = /** @class */ (function () {
    function ResponseWrapperEmployment() {
    }
    return ResponseWrapperEmployment;
}());
exports.ResponseWrapperEmployment = ResponseWrapperEmployment;
var ResponseWrapperEmploymentDetails = /** @class */ (function () {
    function ResponseWrapperEmploymentDetails() {
    }
    return ResponseWrapperEmploymentDetails;
}());
exports.ResponseWrapperEmploymentDetails = ResponseWrapperEmploymentDetails;
var ResponseWrapperEntitlement = /** @class */ (function () {
    function ResponseWrapperEntitlement() {
    }
    return ResponseWrapperEntitlement;
}());
exports.ResponseWrapperEntitlement = ResponseWrapperEntitlement;
var ResponseWrapperInteger = /** @class */ (function () {
    function ResponseWrapperInteger() {
    }
    return ResponseWrapperInteger;
}());
exports.ResponseWrapperInteger = ResponseWrapperInteger;
var ResponseWrapperInventory = /** @class */ (function () {
    function ResponseWrapperInventory() {
    }
    return ResponseWrapperInventory;
}());
exports.ResponseWrapperInventory = ResponseWrapperInventory;
var ResponseWrapperInvoice = /** @class */ (function () {
    function ResponseWrapperInvoice() {
    }
    return ResponseWrapperInvoice;
}());
exports.ResponseWrapperInvoice = ResponseWrapperInvoice;
var ResponseWrapperLeaveOfAbsence = /** @class */ (function () {
    function ResponseWrapperLeaveOfAbsence() {
    }
    return ResponseWrapperLeaveOfAbsence;
}());
exports.ResponseWrapperLeaveOfAbsence = ResponseWrapperLeaveOfAbsence;
var ResponseWrapperLoggedInUserInfoDTO = /** @class */ (function () {
    function ResponseWrapperLoggedInUserInfoDTO() {
    }
    return ResponseWrapperLoggedInUserInfoDTO;
}());
exports.ResponseWrapperLoggedInUserInfoDTO = ResponseWrapperLoggedInUserInfoDTO;
var ResponseWrapperMonthlyStatus = /** @class */ (function () {
    function ResponseWrapperMonthlyStatus() {
    }
    return ResponseWrapperMonthlyStatus;
}());
exports.ResponseWrapperMonthlyStatus = ResponseWrapperMonthlyStatus;
var ResponseWrapperNotification = /** @class */ (function () {
    function ResponseWrapperNotification() {
    }
    return ResponseWrapperNotification;
}());
exports.ResponseWrapperNotification = ResponseWrapperNotification;
var ResponseWrapperOrder = /** @class */ (function () {
    function ResponseWrapperOrder() {
    }
    return ResponseWrapperOrder;
}());
exports.ResponseWrapperOrder = ResponseWrapperOrder;
var ResponseWrapperOrderLine = /** @class */ (function () {
    function ResponseWrapperOrderLine() {
    }
    return ResponseWrapperOrderLine;
}());
exports.ResponseWrapperOrderLine = ResponseWrapperOrderLine;
var ResponseWrapperPaymentType = /** @class */ (function () {
    function ResponseWrapperPaymentType() {
    }
    return ResponseWrapperPaymentType;
}());
exports.ResponseWrapperPaymentType = ResponseWrapperPaymentType;
var ResponseWrapperPayslip = /** @class */ (function () {
    function ResponseWrapperPayslip() {
    }
    return ResponseWrapperPayslip;
}());
exports.ResponseWrapperPayslip = ResponseWrapperPayslip;
var ResponseWrapperPosting = /** @class */ (function () {
    function ResponseWrapperPosting() {
    }
    return ResponseWrapperPosting;
}());
exports.ResponseWrapperPosting = ResponseWrapperPosting;
var ResponseWrapperProduct = /** @class */ (function () {
    function ResponseWrapperProduct() {
    }
    return ResponseWrapperProduct;
}());
exports.ResponseWrapperProduct = ResponseWrapperProduct;
var ResponseWrapperProductUnit = /** @class */ (function () {
    function ResponseWrapperProductUnit() {
    }
    return ResponseWrapperProductUnit;
}());
exports.ResponseWrapperProductUnit = ResponseWrapperProductUnit;
var ResponseWrapperProject = /** @class */ (function () {
    function ResponseWrapperProject() {
    }
    return ResponseWrapperProject;
}());
exports.ResponseWrapperProject = ResponseWrapperProject;
var ResponseWrapperProjectCategory = /** @class */ (function () {
    function ResponseWrapperProjectCategory() {
    }
    return ResponseWrapperProjectCategory;
}());
exports.ResponseWrapperProjectCategory = ResponseWrapperProjectCategory;
var ResponseWrapperProspect = /** @class */ (function () {
    function ResponseWrapperProspect() {
    }
    return ResponseWrapperProspect;
}());
exports.ResponseWrapperProspect = ResponseWrapperProspect;
var ResponseWrapperSalarySpecification = /** @class */ (function () {
    function ResponseWrapperSalarySpecification() {
    }
    return ResponseWrapperSalarySpecification;
}());
exports.ResponseWrapperSalarySpecification = ResponseWrapperSalarySpecification;
var ResponseWrapperSalaryTransaction = /** @class */ (function () {
    function ResponseWrapperSalaryTransaction() {
    }
    return ResponseWrapperSalaryTransaction;
}());
exports.ResponseWrapperSalaryTransaction = ResponseWrapperSalaryTransaction;
var ResponseWrapperSalaryType = /** @class */ (function () {
    function ResponseWrapperSalaryType() {
    }
    return ResponseWrapperSalaryType;
}());
exports.ResponseWrapperSalaryType = ResponseWrapperSalaryType;
var ResponseWrapperSessionToken = /** @class */ (function () {
    function ResponseWrapperSessionToken() {
    }
    return ResponseWrapperSessionToken;
}());
exports.ResponseWrapperSessionToken = ResponseWrapperSessionToken;
var ResponseWrapperStandardTime = /** @class */ (function () {
    function ResponseWrapperStandardTime() {
    }
    return ResponseWrapperStandardTime;
}());
exports.ResponseWrapperStandardTime = ResponseWrapperStandardTime;
var ResponseWrapperString = /** @class */ (function () {
    function ResponseWrapperString() {
    }
    return ResponseWrapperString;
}());
exports.ResponseWrapperString = ResponseWrapperString;
var ResponseWrapperSupplier = /** @class */ (function () {
    function ResponseWrapperSupplier() {
    }
    return ResponseWrapperSupplier;
}());
exports.ResponseWrapperSupplier = ResponseWrapperSupplier;
var ResponseWrapperTimeClock = /** @class */ (function () {
    function ResponseWrapperTimeClock() {
    }
    return ResponseWrapperTimeClock;
}());
exports.ResponseWrapperTimeClock = ResponseWrapperTimeClock;
var ResponseWrapperTimesheetEntry = /** @class */ (function () {
    function ResponseWrapperTimesheetEntry() {
    }
    return ResponseWrapperTimesheetEntry;
}());
exports.ResponseWrapperTimesheetEntry = ResponseWrapperTimesheetEntry;
var ResponseWrapperTripletexAccountReturn = /** @class */ (function () {
    function ResponseWrapperTripletexAccountReturn() {
    }
    return ResponseWrapperTripletexAccountReturn;
}());
exports.ResponseWrapperTripletexAccountReturn = ResponseWrapperTripletexAccountReturn;
var ResponseWrapperUnreadCountDTO = /** @class */ (function () {
    function ResponseWrapperUnreadCountDTO() {
    }
    return ResponseWrapperUnreadCountDTO;
}());
exports.ResponseWrapperUnreadCountDTO = ResponseWrapperUnreadCountDTO;
var ResponseWrapperVatType = /** @class */ (function () {
    function ResponseWrapperVatType() {
    }
    return ResponseWrapperVatType;
}());
exports.ResponseWrapperVatType = ResponseWrapperVatType;
var ResponseWrapperVoucher = /** @class */ (function () {
    function ResponseWrapperVoucher() {
    }
    return ResponseWrapperVoucher;
}());
exports.ResponseWrapperVoucher = ResponseWrapperVoucher;
var ResponseWrapperVoucherType = /** @class */ (function () {
    function ResponseWrapperVoucherType() {
    }
    return ResponseWrapperVoucherType;
}());
exports.ResponseWrapperVoucherType = ResponseWrapperVoucherType;
var ResponseWrapperWeeklyStatus = /** @class */ (function () {
    function ResponseWrapperWeeklyStatus() {
    }
    return ResponseWrapperWeeklyStatus;
}());
exports.ResponseWrapperWeeklyStatus = ResponseWrapperWeeklyStatus;
var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());
exports.Result = Result;
(function (Result) {
    var FileEnum;
    (function (FileEnum) {
        FileEnum[FileEnum["DEPARTMENTS"] = 'DEPARTMENTS'] = "DEPARTMENTS";
        FileEnum[FileEnum["EMPLOYEES"] = 'EMPLOYEES'] = "EMPLOYEES";
        FileEnum[FileEnum["VATCODES"] = 'VATCODES'] = "VATCODES";
        FileEnum[FileEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        FileEnum[FileEnum["CUSTOMERS"] = 'CUSTOMERS'] = "CUSTOMERS";
        FileEnum[FileEnum["CUSTOMERSCATEGORIES"] = 'CUSTOMERS_CATEGORIES'] = "CUSTOMERSCATEGORIES";
        FileEnum[FileEnum["VENDORS"] = 'VENDORS'] = "VENDORS";
        FileEnum[FileEnum["VENDORSCATEGORIES"] = 'VENDORS_CATEGORIES'] = "VENDORSCATEGORIES";
        FileEnum[FileEnum["CONTACTS"] = 'CONTACTS'] = "CONTACTS";
        FileEnum[FileEnum["DELIVERYADDRESSES"] = 'DELIVERY_ADDRESSES'] = "DELIVERYADDRESSES";
        FileEnum[FileEnum["PRODUCTS"] = 'PRODUCTS'] = "PRODUCTS";
        FileEnum[FileEnum["PRODUCTSCATEGORIES"] = 'PRODUCTS_CATEGORIES'] = "PRODUCTSCATEGORIES";
        FileEnum[FileEnum["PROJECTS"] = 'PROJECTS'] = "PROJECTS";
        FileEnum[FileEnum["PROJECTSCATEGORIES"] = 'PROJECTS_CATEGORIES'] = "PROJECTSCATEGORIES";
    })(FileEnum = Result.FileEnum || (Result.FileEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["IGNORED"] = 'IGNORED'] = "IGNORED";
        TypeEnum[TypeEnum["UPDATED"] = 'UPDATED'] = "UPDATED";
        TypeEnum[TypeEnum["CREATED"] = 'CREATED'] = "CREATED";
        TypeEnum[TypeEnum["ERROR"] = 'ERROR'] = "ERROR";
    })(TypeEnum = Result.TypeEnum || (Result.TypeEnum = {}));
})(Result = exports.Result || (exports.Result = {}));
exports.Result = Result;
var SalarySpecification = /** @class */ (function () {
    function SalarySpecification() {
    }
    return SalarySpecification;
}());
exports.SalarySpecification = SalarySpecification;
var SalaryTransaction = /** @class */ (function () {
    function SalaryTransaction() {
    }
    return SalaryTransaction;
}());
exports.SalaryTransaction = SalaryTransaction;
var SalaryType = /** @class */ (function () {
    function SalaryType() {
    }
    return SalaryType;
}());
exports.SalaryType = SalaryType;
var SessionToken = /** @class */ (function () {
    function SessionToken() {
    }
    return SessionToken;
}());
exports.SessionToken = SessionToken;
var StandardTime = /** @class */ (function () {
    function StandardTime() {
    }
    return StandardTime;
}());
exports.StandardTime = StandardTime;
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    return Supplier;
}());
exports.Supplier = Supplier;
var SupplierBalance = /** @class */ (function () {
    function SupplierBalance() {
    }
    return SupplierBalance;
}());
exports.SupplierBalance = SupplierBalance;
var TimeClock = /** @class */ (function () {
    function TimeClock() {
    }
    return TimeClock;
}());
exports.TimeClock = TimeClock;
var TimesheetEntry = /** @class */ (function () {
    function TimesheetEntry() {
    }
    return TimesheetEntry;
}());
exports.TimesheetEntry = TimesheetEntry;
var TimesheetEntrySearchResponse = /** @class */ (function () {
    function TimesheetEntrySearchResponse() {
    }
    return TimesheetEntrySearchResponse;
}());
exports.TimesheetEntrySearchResponse = TimesheetEntrySearchResponse;
var TripletexAccount = /** @class */ (function () {
    function TripletexAccount() {
    }
    return TripletexAccount;
}());
exports.TripletexAccount = TripletexAccount;
var TripletexAccountReturn = /** @class */ (function () {
    function TripletexAccountReturn() {
    }
    return TripletexAccountReturn;
}());
exports.TripletexAccountReturn = TripletexAccountReturn;
var UnreadCountDTO = /** @class */ (function () {
    function UnreadCountDTO() {
    }
    return UnreadCountDTO;
}());
exports.UnreadCountDTO = UnreadCountDTO;
var VatType = /** @class */ (function () {
    function VatType() {
    }
    return VatType;
}());
exports.VatType = VatType;
var Voucher = /** @class */ (function () {
    function Voucher() {
    }
    return Voucher;
}());
exports.Voucher = Voucher;
var VoucherSearchResponse = /** @class */ (function () {
    function VoucherSearchResponse() {
    }
    return VoucherSearchResponse;
}());
exports.VoucherSearchResponse = VoucherSearchResponse;
var VoucherType = /** @class */ (function () {
    function VoucherType() {
    }
    return VoucherType;
}());
exports.VoucherType = VoucherType;
var WeeklyStatus = /** @class */ (function () {
    function WeeklyStatus() {
    }
    return WeeklyStatus;
}());
exports.WeeklyStatus = WeeklyStatus;
var WorkingHoursScheme = /** @class */ (function () {
    function WorkingHoursScheme() {
    }
    return WorkingHoursScheme;
}());
exports.WorkingHoursScheme = WorkingHoursScheme;
(function (WorkingHoursScheme) {
    var WorkingHoursSchemeEnum;
    (function (WorkingHoursSchemeEnum) {
        WorkingHoursSchemeEnum[WorkingHoursSchemeEnum["SCHEME"] = 'WORKING_HOURS_SCHEME'] = "SCHEME";
    })(WorkingHoursSchemeEnum = WorkingHoursScheme.WorkingHoursSchemeEnum || (WorkingHoursScheme.WorkingHoursSchemeEnum = {}));
})(WorkingHoursScheme = exports.WorkingHoursScheme || (exports.WorkingHoursScheme = {}));
exports.WorkingHoursScheme = WorkingHoursScheme;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
var ActivityApiApiKeys;
(function (ActivityApiApiKeys) {
})(ActivityApiApiKeys = exports.ActivityApiApiKeys || (exports.ActivityApiApiKeys = {}));
var ActivityApi = /** @class */ (function () {
    function ActivityApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(ActivityApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    ActivityApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ActivityApi.prototype.setApiKey = function (key, value) {
        this.authentications[ActivityApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(ActivityApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Find activity by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    ActivityApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/activity/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find applicable time sheet activities for an employee on a specific day.
     * @param projectId Project ID
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param date yyyy-MM-dd. Defaults to today.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    ActivityApi.prototype.getForTimeSheet = function (projectId, employeeId, date, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/activity/>forTimeSheet';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling getForTimeSheet.');
        }
        if (projectId !== undefined) {
            queryParameters['projectId'] = projectId;
        }
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (date !== undefined) {
            queryParameters['date'] = date;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find activities corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param number Equals
     * @param description Containing
     * @param isProjectActivity Equals
     * @param isGeneral Equals
     * @param isChargeable Equals
     * @param isTask Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    ActivityApi.prototype.search = function (id, name, number, description, isProjectActivity, isGeneral, isChargeable, isTask, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/activity';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (number !== undefined) {
            queryParameters['number'] = number;
        }
        if (description !== undefined) {
            queryParameters['description'] = description;
        }
        if (isProjectActivity !== undefined) {
            queryParameters['isProjectActivity'] = isProjectActivity;
        }
        if (isGeneral !== undefined) {
            queryParameters['isGeneral'] = isGeneral;
        }
        if (isChargeable !== undefined) {
            queryParameters['isChargeable'] = isChargeable;
        }
        if (isTask !== undefined) {
            queryParameters['isTask'] = isTask;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return ActivityApi;
}());
exports.ActivityApi = ActivityApi;
var AddressApiApiKeys;
(function (AddressApiApiKeys) {
})(AddressApiApiKeys = exports.AddressApiApiKeys || (exports.AddressApiApiKeys = {}));
var AddressApi = /** @class */ (function () {
    function AddressApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(AddressApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    AddressApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    AddressApi.prototype.setApiKey = function (key, value) {
        this.authentications[AddressApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(AddressApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get address by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    AddressApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/address/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Update address.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    AddressApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/address/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find addresses corresponding with sent data.
     * @param id List of IDs
     * @param addressLine1 List of IDs
     * @param addressLine2 List of IDs
     * @param postalCode List of IDs
     * @param city List of IDs
     * @param name List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    AddressApi.prototype.search = function (id, addressLine1, addressLine2, postalCode, city, name, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/address';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (addressLine1 !== undefined) {
            queryParameters['addressLine1'] = addressLine1;
        }
        if (addressLine2 !== undefined) {
            queryParameters['addressLine2'] = addressLine2;
        }
        if (postalCode !== undefined) {
            queryParameters['postalCode'] = postalCode;
        }
        if (city !== undefined) {
            queryParameters['city'] = city;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return AddressApi;
}());
exports.AddressApi = AddressApi;
var CompanyApiApiKeys;
(function (CompanyApiApiKeys) {
})(CompanyApiApiKeys = exports.CompanyApiApiKeys || (exports.CompanyApiApiKeys = {}));
var CompanyApi = /** @class */ (function () {
    function CompanyApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(CompanyApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    CompanyApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    CompanyApi.prototype.setApiKey = function (key, value) {
        this.authentications[CompanyApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(CompanyApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Find company by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    CompanyApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/company/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find divisions.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    CompanyApi.prototype.getDivisions = function (from, count, sorting, fields) {
        var localVarPath = this.basePath + '/company/divisions';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Returns client customers (with accountant/auditor relation) where the current user has login access (proxy login).
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    CompanyApi.prototype.getWithLoginAccess = function (from, count, sorting, fields) {
        var localVarPath = this.basePath + '/company/>withLoginAccess';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return CompanyApi;
}());
exports.CompanyApi = CompanyApi;
var ContactApiApiKeys;
(function (ContactApiApiKeys) {
})(ContactApiApiKeys = exports.ContactApiApiKeys || (exports.ContactApiApiKeys = {}));
var ContactApi = /** @class */ (function () {
    function ContactApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(ContactApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    ContactApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ContactApi.prototype.setApiKey = function (key, value) {
        this.authentications[ContactApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(ContactApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get contact by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    ContactApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/contact/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Create contact.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    ContactApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/contact';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find contacts corresponding with sent data.
     * @param id List of IDs
     * @param firstName Containing
     * @param lastName Containing
     * @param email Containing
     * @param customerId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    ContactApi.prototype.search = function (id, firstName, lastName, email, customerId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/contact';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (firstName !== undefined) {
            queryParameters['firstName'] = firstName;
        }
        if (lastName !== undefined) {
            queryParameters['lastName'] = lastName;
        }
        if (email !== undefined) {
            queryParameters['email'] = email;
        }
        if (customerId !== undefined) {
            queryParameters['customerId'] = customerId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return ContactApi;
}());
exports.ContactApi = ContactApi;
var CountryApiApiKeys;
(function (CountryApiApiKeys) {
})(CountryApiApiKeys = exports.CountryApiApiKeys || (exports.CountryApiApiKeys = {}));
var CountryApi = /** @class */ (function () {
    function CountryApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(CountryApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    CountryApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    CountryApi.prototype.setApiKey = function (key, value) {
        this.authentications[CountryApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(CountryApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get country by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    CountryApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/country/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find countries corresponding with sent data.
     * @param id List of IDs
     * @param code List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    CountryApi.prototype.search = function (id, code, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/country';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (code !== undefined) {
            queryParameters['code'] = code;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return CountryApi;
}());
exports.CountryApi = CountryApi;
var CrmprospectApiApiKeys;
(function (CrmprospectApiApiKeys) {
})(CrmprospectApiApiKeys = exports.CrmprospectApiApiKeys || (exports.CrmprospectApiApiKeys = {}));
var CrmprospectApi = /** @class */ (function () {
    function CrmprospectApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(CrmprospectApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrmprospectApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    CrmprospectApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    CrmprospectApi.prototype.setApiKey = function (key, value) {
        this.authentications[CrmprospectApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(CrmprospectApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrmprospectApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get prospect by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    CrmprospectApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/crm/prospect/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find prospects corresponding with sent data.
     * @param name Containing
     * @param description Containing
     * @param createdDateFrom From and including
     * @param createdDateTo To and excluding
     * @param customerId Equals
     * @param salesEmployeeId Equals
     * @param isClosed Equals
     * @param closedReason Equals
     * @param closedDateFrom From and including
     * @param closedDateTo To and excluding
     * @param competitor Containing
     * @param prospectType Equals
     * @param projectId Equals
     * @param projectOfferId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    CrmprospectApi.prototype.search = function (name, description, createdDateFrom, createdDateTo, customerId, salesEmployeeId, isClosed, closedReason, closedDateFrom, closedDateTo, competitor, prospectType, projectId, projectOfferId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/crm/prospect';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (description !== undefined) {
            queryParameters['description'] = description;
        }
        if (createdDateFrom !== undefined) {
            queryParameters['createdDateFrom'] = createdDateFrom;
        }
        if (createdDateTo !== undefined) {
            queryParameters['createdDateTo'] = createdDateTo;
        }
        if (customerId !== undefined) {
            queryParameters['customerId'] = customerId;
        }
        if (salesEmployeeId !== undefined) {
            queryParameters['salesEmployeeId'] = salesEmployeeId;
        }
        if (isClosed !== undefined) {
            queryParameters['isClosed'] = isClosed;
        }
        if (closedReason !== undefined) {
            queryParameters['closedReason'] = closedReason;
        }
        if (closedDateFrom !== undefined) {
            queryParameters['closedDateFrom'] = closedDateFrom;
        }
        if (closedDateTo !== undefined) {
            queryParameters['closedDateTo'] = closedDateTo;
        }
        if (competitor !== undefined) {
            queryParameters['competitor'] = competitor;
        }
        if (prospectType !== undefined) {
            queryParameters['prospectType'] = prospectType;
        }
        if (projectId !== undefined) {
            queryParameters['projectId'] = projectId;
        }
        if (projectOfferId !== undefined) {
            queryParameters['projectOfferId'] = projectOfferId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return CrmprospectApi;
}());
exports.CrmprospectApi = CrmprospectApi;
var CurrencyApiApiKeys;
(function (CurrencyApiApiKeys) {
})(CurrencyApiApiKeys = exports.CurrencyApiApiKeys || (exports.CurrencyApiApiKeys = {}));
var CurrencyApi = /** @class */ (function () {
    function CurrencyApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(CurrencyApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrencyApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    CurrencyApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    CurrencyApi.prototype.setApiKey = function (key, value) {
        this.authentications[CurrencyApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(CurrencyApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrencyApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get currency by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    CurrencyApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/currency/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find currencies corresponding with sent data.
     * @param id List of IDs
     * @param code Currency codes
     * @param fields Fields filter pattern
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     */
    CurrencyApi.prototype.search = function (id, code, fields, from, count, sorting) {
        var localVarPath = this.basePath + '/currency';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (code !== undefined) {
            queryParameters['code'] = code;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return CurrencyApi;
}());
exports.CurrencyApi = CurrencyApi;
var CustomerApiApiKeys;
(function (CustomerApiApiKeys) {
})(CustomerApiApiKeys = exports.CustomerApiApiKeys || (exports.CustomerApiApiKeys = {}));
var CustomerApi = /** @class */ (function () {
    function CustomerApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(CustomerApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    CustomerApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    CustomerApi.prototype.setApiKey = function (key, value) {
        this.authentications[CustomerApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(CustomerApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get customer by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    CustomerApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/customer/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Create customer. Related customer addresses may also be created.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    CustomerApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/customer';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Update customer.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    CustomerApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/customer/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find customers corresponding with sent data.
     * @param id List of IDs
     * @param customerAccountNumber List of IDs
     * @param email Equals
     * @param invoiceEmail Equals
     * @param isInactive Equals
     * @param accountManagerId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    CustomerApi.prototype.search = function (id, customerAccountNumber, email, invoiceEmail, isInactive, accountManagerId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/customer';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (customerAccountNumber !== undefined) {
            queryParameters['customerAccountNumber'] = customerAccountNumber;
        }
        if (email !== undefined) {
            queryParameters['email'] = email;
        }
        if (invoiceEmail !== undefined) {
            queryParameters['invoiceEmail'] = invoiceEmail;
        }
        if (isInactive !== undefined) {
            queryParameters['isInactive'] = isInactive;
        }
        if (accountManagerId !== undefined) {
            queryParameters['accountManagerId'] = accountManagerId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return CustomerApi;
}());
exports.CustomerApi = CustomerApi;
var CustomercategoryApiApiKeys;
(function (CustomercategoryApiApiKeys) {
})(CustomercategoryApiApiKeys = exports.CustomercategoryApiApiKeys || (exports.CustomercategoryApiApiKeys = {}));
var CustomercategoryApi = /** @class */ (function () {
    function CustomercategoryApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(CustomercategoryApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomercategoryApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    CustomercategoryApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    CustomercategoryApi.prototype.setApiKey = function (key, value) {
        this.authentications[CustomercategoryApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(CustomercategoryApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomercategoryApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Find customer/supplier category by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    CustomercategoryApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/customer/category/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Add new customer/supplier category.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    CustomercategoryApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/customer/category';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Update customer/supplier category.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    CustomercategoryApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/customer/category/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find customer/supplier categories corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param number Equals
     * @param description Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    CustomercategoryApi.prototype.search = function (id, name, number, description, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/customer/category';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (number !== undefined) {
            queryParameters['number'] = number;
        }
        if (description !== undefined) {
            queryParameters['description'] = description;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return CustomercategoryApi;
}());
exports.CustomercategoryApi = CustomercategoryApi;
var DepartmentApiApiKeys;
(function (DepartmentApiApiKeys) {
})(DepartmentApiApiKeys = exports.DepartmentApiApiKeys || (exports.DepartmentApiApiKeys = {}));
var DepartmentApi = /** @class */ (function () {
    function DepartmentApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(DepartmentApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DepartmentApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    DepartmentApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    DepartmentApi.prototype.setApiKey = function (key, value) {
        this.authentications[DepartmentApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(DepartmentApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DepartmentApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get department by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    DepartmentApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/department/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find department corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param departmentNumber Containing
     * @param departmentManagerId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    DepartmentApi.prototype.search = function (id, name, departmentNumber, departmentManagerId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/department';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (departmentNumber !== undefined) {
            queryParameters['departmentNumber'] = departmentNumber;
        }
        if (departmentManagerId !== undefined) {
            queryParameters['departmentManagerId'] = departmentManagerId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return DepartmentApi;
}());
exports.DepartmentApi = DepartmentApi;
var EmployeeApiApiKeys;
(function (EmployeeApiApiKeys) {
})(EmployeeApiApiKeys = exports.EmployeeApiApiKeys || (exports.EmployeeApiApiKeys = {}));
var EmployeeApi = /** @class */ (function () {
    function EmployeeApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(EmployeeApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    EmployeeApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmployeeApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(EmployeeApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get employee by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    EmployeeApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/employee/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Create one employee.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    EmployeeApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/employee';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Create several employees.
     * @param body JSON representing a list of new object to be created. Should not have ID and version set.
     */
    EmployeeApi.prototype.postList = function (body) {
        var localVarPath = this.basePath + '/employee/list';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Update employee.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    EmployeeApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/employee/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find employees corresponding with sent data.
     * @param id List of IDs
     * @param firstName Containing
     * @param lastName Containing
     * @param employeeNumber Containing
     * @param fields Fields filter pattern
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     */
    EmployeeApi.prototype.search = function (id, firstName, lastName, employeeNumber, fields, from, count, sorting) {
        var localVarPath = this.basePath + '/employee';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (firstName !== undefined) {
            queryParameters['firstName'] = firstName;
        }
        if (lastName !== undefined) {
            queryParameters['lastName'] = lastName;
        }
        if (employeeNumber !== undefined) {
            queryParameters['employeeNumber'] = employeeNumber;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return EmployeeApi;
}());
exports.EmployeeApi = EmployeeApi;
var EmployeeemploymentApiApiKeys;
(function (EmployeeemploymentApiApiKeys) {
})(EmployeeemploymentApiApiKeys = exports.EmployeeemploymentApiApiKeys || (exports.EmployeeemploymentApiApiKeys = {}));
var EmployeeemploymentApi = /** @class */ (function () {
    function EmployeeemploymentApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(EmployeeemploymentApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeemploymentApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    EmployeeemploymentApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmployeeemploymentApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(EmployeeemploymentApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Find employment by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    EmployeeemploymentApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/employee/employment/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Create employment.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    EmployeeemploymentApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/employee/employment';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Update employemnt.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    EmployeeemploymentApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/employee/employment/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find all employments for employee.
     * @param employeeId Element ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    EmployeeemploymentApi.prototype.search = function (employeeId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/employee/employment';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return EmployeeemploymentApi;
}());
exports.EmployeeemploymentApi = EmployeeemploymentApi;
var EmployeeemploymentdetailsApiApiKeys;
(function (EmployeeemploymentdetailsApiApiKeys) {
})(EmployeeemploymentdetailsApiApiKeys = exports.EmployeeemploymentdetailsApiApiKeys || (exports.EmployeeemploymentdetailsApiApiKeys = {}));
var EmployeeemploymentdetailsApi = /** @class */ (function () {
    function EmployeeemploymentdetailsApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(EmployeeemploymentdetailsApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentdetailsApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeemploymentdetailsApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    EmployeeemploymentdetailsApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmployeeemploymentdetailsApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(EmployeeemploymentdetailsApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentdetailsApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary [BETA] Find employment details by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    EmployeeemploymentdetailsApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/employee/employment/details/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Create employment details.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    EmployeeemploymentdetailsApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/employee/employment/details';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Update employment details.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    EmployeeemploymentdetailsApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/employee/employment/details/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Find all employmentdetails for employment.
     * @param employmentId Element ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    EmployeeemploymentdetailsApi.prototype.search = function (employmentId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/employee/employment/details';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (employmentId !== undefined) {
            queryParameters['employmentId'] = employmentId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return EmployeeemploymentdetailsApi;
}());
exports.EmployeeemploymentdetailsApi = EmployeeemploymentdetailsApi;
var EmployeeemploymentemploymentTypeApiApiKeys;
(function (EmployeeemploymentemploymentTypeApiApiKeys) {
})(EmployeeemploymentemploymentTypeApiApiKeys = exports.EmployeeemploymentemploymentTypeApiApiKeys || (exports.EmployeeemploymentemploymentTypeApiApiKeys = {}));
var EmployeeemploymentemploymentTypeApi = /** @class */ (function () {
    function EmployeeemploymentemploymentTypeApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(EmployeeemploymentemploymentTypeApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentemploymentTypeApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeemploymentemploymentTypeApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    EmployeeemploymentemploymentTypeApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmployeeemploymentemploymentTypeApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(EmployeeemploymentemploymentTypeApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentemploymentTypeApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary [BETA] Find all employment type IDs.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    EmployeeemploymentemploymentTypeApi.prototype.search = function (from, count, sorting, fields) {
        var localVarPath = this.basePath + '/employee/employment/employmentType';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return EmployeeemploymentemploymentTypeApi;
}());
exports.EmployeeemploymentemploymentTypeApi = EmployeeemploymentemploymentTypeApi;
var EmployeeemploymentleaveOfAbsenceApiApiKeys;
(function (EmployeeemploymentleaveOfAbsenceApiApiKeys) {
})(EmployeeemploymentleaveOfAbsenceApiApiKeys = exports.EmployeeemploymentleaveOfAbsenceApiApiKeys || (exports.EmployeeemploymentleaveOfAbsenceApiApiKeys = {}));
var EmployeeemploymentleaveOfAbsenceApi = /** @class */ (function () {
    function EmployeeemploymentleaveOfAbsenceApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(EmployeeemploymentleaveOfAbsenceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentleaveOfAbsenceApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeemploymentleaveOfAbsenceApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    EmployeeemploymentleaveOfAbsenceApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmployeeemploymentleaveOfAbsenceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(EmployeeemploymentleaveOfAbsenceApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentleaveOfAbsenceApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary [BETA] Find leave of absence by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    EmployeeemploymentleaveOfAbsenceApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/employee/employment/leaveOfAbsence/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Create leave of absence.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    EmployeeemploymentleaveOfAbsenceApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/employee/employment/leaveOfAbsence';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Update leave of absence.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    EmployeeemploymentleaveOfAbsenceApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/employee/employment/leaveOfAbsence/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return EmployeeemploymentleaveOfAbsenceApi;
}());
exports.EmployeeemploymentleaveOfAbsenceApi = EmployeeemploymentleaveOfAbsenceApi;
var EmployeeemploymentleaveOfAbsenceTypeApiApiKeys;
(function (EmployeeemploymentleaveOfAbsenceTypeApiApiKeys) {
})(EmployeeemploymentleaveOfAbsenceTypeApiApiKeys = exports.EmployeeemploymentleaveOfAbsenceTypeApiApiKeys || (exports.EmployeeemploymentleaveOfAbsenceTypeApiApiKeys = {}));
var EmployeeemploymentleaveOfAbsenceTypeApi = /** @class */ (function () {
    function EmployeeemploymentleaveOfAbsenceTypeApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(EmployeeemploymentleaveOfAbsenceTypeApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentleaveOfAbsenceTypeApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeemploymentleaveOfAbsenceTypeApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    EmployeeemploymentleaveOfAbsenceTypeApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmployeeemploymentleaveOfAbsenceTypeApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(EmployeeemploymentleaveOfAbsenceTypeApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentleaveOfAbsenceTypeApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary [BETA] Find all leave of absence type IDs.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    EmployeeemploymentleaveOfAbsenceTypeApi.prototype.search = function (from, count, sorting, fields) {
        var localVarPath = this.basePath + '/employee/employment/leaveOfAbsenceType';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return EmployeeemploymentleaveOfAbsenceTypeApi;
}());
exports.EmployeeemploymentleaveOfAbsenceTypeApi = EmployeeemploymentleaveOfAbsenceTypeApi;
var EmployeeemploymentoccupationCodeApiApiKeys;
(function (EmployeeemploymentoccupationCodeApiApiKeys) {
})(EmployeeemploymentoccupationCodeApiApiKeys = exports.EmployeeemploymentoccupationCodeApiApiKeys || (exports.EmployeeemploymentoccupationCodeApiApiKeys = {}));
var EmployeeemploymentoccupationCodeApi = /** @class */ (function () {
    function EmployeeemploymentoccupationCodeApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(EmployeeemploymentoccupationCodeApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentoccupationCodeApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeemploymentoccupationCodeApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    EmployeeemploymentoccupationCodeApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmployeeemploymentoccupationCodeApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(EmployeeemploymentoccupationCodeApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentoccupationCodeApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary [BETA] Find all profession codes.
     * @param nameNO Containing
     * @param code Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    EmployeeemploymentoccupationCodeApi.prototype.search = function (nameNO, code, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/employee/employment/occupationCode';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (nameNO !== undefined) {
            queryParameters['nameNO'] = nameNO;
        }
        if (code !== undefined) {
            queryParameters['code'] = code;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return EmployeeemploymentoccupationCodeApi;
}());
exports.EmployeeemploymentoccupationCodeApi = EmployeeemploymentoccupationCodeApi;
var EmployeeemploymentremunerationTypeApiApiKeys;
(function (EmployeeemploymentremunerationTypeApiApiKeys) {
})(EmployeeemploymentremunerationTypeApiApiKeys = exports.EmployeeemploymentremunerationTypeApiApiKeys || (exports.EmployeeemploymentremunerationTypeApiApiKeys = {}));
var EmployeeemploymentremunerationTypeApi = /** @class */ (function () {
    function EmployeeemploymentremunerationTypeApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(EmployeeemploymentremunerationTypeApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentremunerationTypeApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeemploymentremunerationTypeApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    EmployeeemploymentremunerationTypeApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmployeeemploymentremunerationTypeApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(EmployeeemploymentremunerationTypeApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentremunerationTypeApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary [BETA] Find all remuneration type IDs.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    EmployeeemploymentremunerationTypeApi.prototype.search = function (from, count, sorting, fields) {
        var localVarPath = this.basePath + '/employee/employment/remunerationType';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return EmployeeemploymentremunerationTypeApi;
}());
exports.EmployeeemploymentremunerationTypeApi = EmployeeemploymentremunerationTypeApi;
var EmployeeemploymentworkingHoursSchemeApiApiKeys;
(function (EmployeeemploymentworkingHoursSchemeApiApiKeys) {
})(EmployeeemploymentworkingHoursSchemeApiApiKeys = exports.EmployeeemploymentworkingHoursSchemeApiApiKeys || (exports.EmployeeemploymentworkingHoursSchemeApiApiKeys = {}));
var EmployeeemploymentworkingHoursSchemeApi = /** @class */ (function () {
    function EmployeeemploymentworkingHoursSchemeApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(EmployeeemploymentworkingHoursSchemeApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentworkingHoursSchemeApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeemploymentworkingHoursSchemeApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    EmployeeemploymentworkingHoursSchemeApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmployeeemploymentworkingHoursSchemeApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(EmployeeemploymentworkingHoursSchemeApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeemploymentworkingHoursSchemeApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary [BETA] Find working hours scheme ID.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    EmployeeemploymentworkingHoursSchemeApi.prototype.search = function (from, count, sorting, fields) {
        var localVarPath = this.basePath + '/employee/employment/workingHoursScheme';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return EmployeeemploymentworkingHoursSchemeApi;
}());
exports.EmployeeemploymentworkingHoursSchemeApi = EmployeeemploymentworkingHoursSchemeApi;
var EmployeeentitlementApiApiKeys;
(function (EmployeeentitlementApiApiKeys) {
})(EmployeeentitlementApiApiKeys = exports.EmployeeentitlementApiApiKeys || (exports.EmployeeentitlementApiApiKeys = {}));
var EmployeeentitlementApi = /** @class */ (function () {
    function EmployeeentitlementApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(EmployeeentitlementApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeentitlementApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeentitlementApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    EmployeeentitlementApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmployeeentitlementApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(EmployeeentitlementApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeentitlementApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get entitlement by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    EmployeeentitlementApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/employee/entitlement/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find all entitlements for user.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    EmployeeentitlementApi.prototype.search = function (employeeId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/employee/entitlement';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return EmployeeentitlementApi;
}());
exports.EmployeeentitlementApi = EmployeeentitlementApi;
var EmployeestandardTimeApiApiKeys;
(function (EmployeestandardTimeApiApiKeys) {
})(EmployeestandardTimeApiApiKeys = exports.EmployeestandardTimeApiApiKeys || (exports.EmployeestandardTimeApiApiKeys = {}));
var EmployeestandardTimeApi = /** @class */ (function () {
    function EmployeestandardTimeApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(EmployeestandardTimeApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeestandardTimeApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    EmployeestandardTimeApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    EmployeestandardTimeApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmployeestandardTimeApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(EmployeestandardTimeApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeestandardTimeApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary [BETA] Find standard time by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    EmployeestandardTimeApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/employee/standardTime/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Create standard time.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    EmployeestandardTimeApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/employee/standardTime';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Update standard time.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    EmployeestandardTimeApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/employee/standardTime/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Find all standard times for employee.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    EmployeestandardTimeApi.prototype.search = function (employeeId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/employee/standardTime';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return EmployeestandardTimeApi;
}());
exports.EmployeestandardTimeApi = EmployeestandardTimeApi;
var InventoryApiApiKeys;
(function (InventoryApiApiKeys) {
})(InventoryApiApiKeys = exports.InventoryApiApiKeys || (exports.InventoryApiApiKeys = {}));
var InventoryApi = /** @class */ (function () {
    function InventoryApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(InventoryApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    InventoryApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    InventoryApi.prototype.setApiKey = function (key, value) {
        this.authentications[InventoryApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(InventoryApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get inventory by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    InventoryApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/inventory/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find inventory corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param isMainInventory Equals
     * @param isInactive Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    InventoryApi.prototype.search = function (id, name, isMainInventory, isInactive, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/inventory';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (isMainInventory !== undefined) {
            queryParameters['isMainInventory'] = isMainInventory;
        }
        if (isInactive !== undefined) {
            queryParameters['isInactive'] = isInactive;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return InventoryApi;
}());
exports.InventoryApi = InventoryApi;
var InvoiceApiApiKeys;
(function (InvoiceApiApiKeys) {
})(InvoiceApiApiKeys = exports.InvoiceApiApiKeys || (exports.InvoiceApiApiKeys = {}));
var InvoiceApi = /** @class */ (function () {
    function InvoiceApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(InvoiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoiceApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    InvoiceApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    InvoiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[InvoiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(InvoiceApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoiceApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get invoice document by invoice ID.
     * @param invoiceId Invoice ID from which PDF is downloaded.
     */
    InvoiceApi.prototype.downloadPdf = function (invoiceId) {
        var localVarPath = this.basePath + '/invoice/{invoiceId}/pdf'
            .replace('{' + 'invoiceId' + '}', String(invoiceId));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new Error('Required parameter invoiceId was null or undefined when calling downloadPdf.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Get invoice by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    InvoiceApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/invoice/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Update invoice. The invoice is updated with payment information. The amount is in the invoice’s currency.
     * @param id Invoice id
     * @param paymentDate Payment date
     * @param paymentTypeId PaymentType id
     * @param paidAmount Amount paid by customer
     */
    InvoiceApi.prototype.payment = function (id, paymentDate, paymentTypeId, paidAmount) {
        var localVarPath = this.basePath + '/invoice/{id}/:payment'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling payment.');
        }
        // verify required parameter 'paymentDate' is not null or undefined
        if (paymentDate === null || paymentDate === undefined) {
            throw new Error('Required parameter paymentDate was null or undefined when calling payment.');
        }
        // verify required parameter 'paymentTypeId' is not null or undefined
        if (paymentTypeId === null || paymentTypeId === undefined) {
            throw new Error('Required parameter paymentTypeId was null or undefined when calling payment.');
        }
        // verify required parameter 'paidAmount' is not null or undefined
        if (paidAmount === null || paidAmount === undefined) {
            throw new Error('Required parameter paidAmount was null or undefined when calling payment.');
        }
        if (paymentDate !== undefined) {
            queryParameters['paymentDate'] = paymentDate;
        }
        if (paymentTypeId !== undefined) {
            queryParameters['paymentTypeId'] = paymentTypeId;
        }
        if (paidAmount !== undefined) {
            queryParameters['paidAmount'] = paidAmount;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Create invoice.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     * @param sendToCustomer Equals
     */
    InvoiceApi.prototype.post = function (body, sendToCustomer) {
        var localVarPath = this.basePath + '/invoice';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (sendToCustomer !== undefined) {
            queryParameters['sendToCustomer'] = sendToCustomer;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find invoices corresponding with sent data.
     * @param invoiceDateFrom From and including
     * @param invoiceDateTo To and excluding
     * @param id List of IDs
     * @param invoiceNumber Equals
     * @param kid Equals
     * @param voucherId Equals
     * @param customerId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    InvoiceApi.prototype.search = function (invoiceDateFrom, invoiceDateTo, id, invoiceNumber, kid, voucherId, customerId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/invoice';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'invoiceDateFrom' is not null or undefined
        if (invoiceDateFrom === null || invoiceDateFrom === undefined) {
            throw new Error('Required parameter invoiceDateFrom was null or undefined when calling search.');
        }
        // verify required parameter 'invoiceDateTo' is not null or undefined
        if (invoiceDateTo === null || invoiceDateTo === undefined) {
            throw new Error('Required parameter invoiceDateTo was null or undefined when calling search.');
        }
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (invoiceDateFrom !== undefined) {
            queryParameters['invoiceDateFrom'] = invoiceDateFrom;
        }
        if (invoiceDateTo !== undefined) {
            queryParameters['invoiceDateTo'] = invoiceDateTo;
        }
        if (invoiceNumber !== undefined) {
            queryParameters['invoiceNumber'] = invoiceNumber;
        }
        if (kid !== undefined) {
            queryParameters['kid'] = kid;
        }
        if (voucherId !== undefined) {
            queryParameters['voucherId'] = voucherId;
        }
        if (customerId !== undefined) {
            queryParameters['customerId'] = customerId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return InvoiceApi;
}());
exports.InvoiceApi = InvoiceApi;
var InvoicepaymentTypeApiApiKeys;
(function (InvoicepaymentTypeApiApiKeys) {
})(InvoicepaymentTypeApiApiKeys = exports.InvoicepaymentTypeApiApiKeys || (exports.InvoicepaymentTypeApiApiKeys = {}));
var InvoicepaymentTypeApi = /** @class */ (function () {
    function InvoicepaymentTypeApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(InvoicepaymentTypeApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoicepaymentTypeApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    InvoicepaymentTypeApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    InvoicepaymentTypeApi.prototype.setApiKey = function (key, value) {
        this.authentications[InvoicepaymentTypeApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(InvoicepaymentTypeApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoicepaymentTypeApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get payment type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    InvoicepaymentTypeApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/invoice/paymentType/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find payment type corresponding with sent data.
     * @param id List of IDs
     * @param description Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    InvoicepaymentTypeApi.prototype.search = function (id, description, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/invoice/paymentType';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (description !== undefined) {
            queryParameters['description'] = description;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return InvoicepaymentTypeApi;
}());
exports.InvoicepaymentTypeApi = InvoicepaymentTypeApi;
var LedgerApiApiKeys;
(function (LedgerApiApiKeys) {
})(LedgerApiApiKeys = exports.LedgerApiApiKeys || (exports.LedgerApiApiKeys = {}));
var LedgerApi = /** @class */ (function () {
    function LedgerApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(LedgerApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgerApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    LedgerApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    LedgerApi.prototype.setApiKey = function (key, value) {
        this.authentications[LedgerApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(LedgerApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgerApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Find open posts corresponding with sent data.
     * @param date Format is yyyy-MM-dd (from and incl.).
     * @param accountId Element ID
     * @param supplierId Element ID
     * @param customerId Element ID
     * @param employeeId Element ID
     * @param departmentId Element ID
     * @param projectId Element ID
     * @param productId Element ID
     * @param fields Fields filter pattern
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     */
    LedgerApi.prototype.openPost = function (date, accountId, supplierId, customerId, employeeId, departmentId, projectId, productId, fields, from, count, sorting) {
        var localVarPath = this.basePath + '/ledger/openPost';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'date' is not null or undefined
        if (date === null || date === undefined) {
            throw new Error('Required parameter date was null or undefined when calling openPost.');
        }
        if (date !== undefined) {
            queryParameters['date'] = date;
        }
        if (accountId !== undefined) {
            queryParameters['accountId'] = accountId;
        }
        if (supplierId !== undefined) {
            queryParameters['supplierId'] = supplierId;
        }
        if (customerId !== undefined) {
            queryParameters['customerId'] = customerId;
        }
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (departmentId !== undefined) {
            queryParameters['departmentId'] = departmentId;
        }
        if (projectId !== undefined) {
            queryParameters['projectId'] = projectId;
        }
        if (productId !== undefined) {
            queryParameters['productId'] = productId;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Get ledger (hovedbok).
     * @param dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param dateTo Format is yyyy-MM-dd (to and excl.).
     * @param openPostings Deprecated
     * @param accountId Element ID
     * @param supplierId Element ID
     * @param customerId Element ID
     * @param employeeId Element ID
     * @param departmentId Element ID
     * @param projectId Element ID
     * @param productId Element ID
     * @param fields Fields filter pattern
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     */
    LedgerApi.prototype.search = function (dateFrom, dateTo, openPostings, accountId, supplierId, customerId, employeeId, departmentId, projectId, productId, fields, from, count, sorting) {
        var localVarPath = this.basePath + '/ledger';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'dateFrom' is not null or undefined
        if (dateFrom === null || dateFrom === undefined) {
            throw new Error('Required parameter dateFrom was null or undefined when calling search.');
        }
        // verify required parameter 'dateTo' is not null or undefined
        if (dateTo === null || dateTo === undefined) {
            throw new Error('Required parameter dateTo was null or undefined when calling search.');
        }
        if (dateFrom !== undefined) {
            queryParameters['dateFrom'] = dateFrom;
        }
        if (dateTo !== undefined) {
            queryParameters['dateTo'] = dateTo;
        }
        if (openPostings !== undefined) {
            queryParameters['openPostings'] = openPostings;
        }
        if (accountId !== undefined) {
            queryParameters['accountId'] = accountId;
        }
        if (supplierId !== undefined) {
            queryParameters['supplierId'] = supplierId;
        }
        if (customerId !== undefined) {
            queryParameters['customerId'] = customerId;
        }
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (departmentId !== undefined) {
            queryParameters['departmentId'] = departmentId;
        }
        if (projectId !== undefined) {
            queryParameters['projectId'] = projectId;
        }
        if (productId !== undefined) {
            queryParameters['productId'] = productId;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return LedgerApi;
}());
exports.LedgerApi = LedgerApi;
var LedgeraccountApiApiKeys;
(function (LedgeraccountApiApiKeys) {
})(LedgeraccountApiApiKeys = exports.LedgeraccountApiApiKeys || (exports.LedgeraccountApiApiKeys = {}));
var LedgeraccountApi = /** @class */ (function () {
    function LedgeraccountApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(LedgeraccountApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgeraccountApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    LedgeraccountApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    LedgeraccountApi.prototype.setApiKey = function (key, value) {
        this.authentications[LedgeraccountApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(LedgeraccountApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgeraccountApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get account by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    LedgeraccountApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/ledger/account/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find accounts corresponding with sent data.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    LedgeraccountApi.prototype.search = function (from, count, sorting, fields) {
        var localVarPath = this.basePath + '/ledger/account';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return LedgeraccountApi;
}());
exports.LedgeraccountApi = LedgeraccountApi;
var LedgeraccountingPeriodApiApiKeys;
(function (LedgeraccountingPeriodApiApiKeys) {
})(LedgeraccountingPeriodApiApiKeys = exports.LedgeraccountingPeriodApiApiKeys || (exports.LedgeraccountingPeriodApiApiKeys = {}));
var LedgeraccountingPeriodApi = /** @class */ (function () {
    function LedgeraccountingPeriodApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(LedgeraccountingPeriodApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgeraccountingPeriodApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    LedgeraccountingPeriodApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    LedgeraccountingPeriodApi.prototype.setApiKey = function (key, value) {
        this.authentications[LedgeraccountingPeriodApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(LedgeraccountingPeriodApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgeraccountingPeriodApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get accounting period by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    LedgeraccountingPeriodApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/ledger/accountingPeriod/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find accounting periods corresponding with sent data.
     * @param id List of IDs
     * @param numberFrom From and including
     * @param numberTo To and excluding
     * @param startFrom From and including
     * @param startTo To and excluding
     * @param endFrom From and including
     * @param endTo To and excluding
     * @param count Number of elements to return
     * @param from From index
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    LedgeraccountingPeriodApi.prototype.search = function (id, numberFrom, numberTo, startFrom, startTo, endFrom, endTo, count, from, sorting, fields) {
        var localVarPath = this.basePath + '/ledger/accountingPeriod';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (numberFrom !== undefined) {
            queryParameters['numberFrom'] = numberFrom;
        }
        if (numberTo !== undefined) {
            queryParameters['numberTo'] = numberTo;
        }
        if (startFrom !== undefined) {
            queryParameters['startFrom'] = startFrom;
        }
        if (startTo !== undefined) {
            queryParameters['startTo'] = startTo;
        }
        if (endFrom !== undefined) {
            queryParameters['endFrom'] = endFrom;
        }
        if (endTo !== undefined) {
            queryParameters['endTo'] = endTo;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return LedgeraccountingPeriodApi;
}());
exports.LedgeraccountingPeriodApi = LedgeraccountingPeriodApi;
var LedgerannualAccountApiApiKeys;
(function (LedgerannualAccountApiApiKeys) {
})(LedgerannualAccountApiApiKeys = exports.LedgerannualAccountApiApiKeys || (exports.LedgerannualAccountApiApiKeys = {}));
var LedgerannualAccountApi = /** @class */ (function () {
    function LedgerannualAccountApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(LedgerannualAccountApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgerannualAccountApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    LedgerannualAccountApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    LedgerannualAccountApi.prototype.setApiKey = function (key, value) {
        this.authentications[LedgerannualAccountApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(LedgerannualAccountApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgerannualAccountApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get annual account by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    LedgerannualAccountApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/ledger/annualAccount/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find annual accounts corresponding with sent data.
     * @param id List of IDs
     * @param yearFrom From and including
     * @param yearTo To and excluding
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    LedgerannualAccountApi.prototype.search = function (id, yearFrom, yearTo, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/ledger/annualAccount';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (yearFrom !== undefined) {
            queryParameters['yearFrom'] = yearFrom;
        }
        if (yearTo !== undefined) {
            queryParameters['yearTo'] = yearTo;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return LedgerannualAccountApi;
}());
exports.LedgerannualAccountApi = LedgerannualAccountApi;
var LedgercloseGroupApiApiKeys;
(function (LedgercloseGroupApiApiKeys) {
})(LedgercloseGroupApiApiKeys = exports.LedgercloseGroupApiApiKeys || (exports.LedgercloseGroupApiApiKeys = {}));
var LedgercloseGroupApi = /** @class */ (function () {
    function LedgercloseGroupApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(LedgercloseGroupApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgercloseGroupApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    LedgercloseGroupApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    LedgercloseGroupApi.prototype.setApiKey = function (key, value) {
        this.authentications[LedgercloseGroupApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(LedgercloseGroupApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgercloseGroupApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get close group by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    LedgercloseGroupApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/ledger/closeGroup/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find close groups corresponding with sent data.
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param id List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    LedgercloseGroupApi.prototype.search = function (dateFrom, dateTo, id, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/ledger/closeGroup';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'dateFrom' is not null or undefined
        if (dateFrom === null || dateFrom === undefined) {
            throw new Error('Required parameter dateFrom was null or undefined when calling search.');
        }
        // verify required parameter 'dateTo' is not null or undefined
        if (dateTo === null || dateTo === undefined) {
            throw new Error('Required parameter dateTo was null or undefined when calling search.');
        }
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (dateFrom !== undefined) {
            queryParameters['dateFrom'] = dateFrom;
        }
        if (dateTo !== undefined) {
            queryParameters['dateTo'] = dateTo;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return LedgercloseGroupApi;
}());
exports.LedgercloseGroupApi = LedgercloseGroupApi;
var LedgerpostingApiApiKeys;
(function (LedgerpostingApiApiKeys) {
})(LedgerpostingApiApiKeys = exports.LedgerpostingApiApiKeys || (exports.LedgerpostingApiApiKeys = {}));
var LedgerpostingApi = /** @class */ (function () {
    function LedgerpostingApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(LedgerpostingApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgerpostingApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    LedgerpostingApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    LedgerpostingApi.prototype.setApiKey = function (key, value) {
        this.authentications[LedgerpostingApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(LedgerpostingApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgerpostingApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Find postings by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    LedgerpostingApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/ledger/posting/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find open posts corresponding with sent data.
     * @param date Format is yyyy-MM-dd (from and incl.).
     * @param accountId Element ID
     * @param supplierId Element ID
     * @param customerId Element ID
     * @param employeeId Element ID
     * @param departmentId Element ID
     * @param projectId Element ID
     * @param productId Element ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    LedgerpostingApi.prototype.openPost = function (date, accountId, supplierId, customerId, employeeId, departmentId, projectId, productId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/ledger/posting/openPost';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'date' is not null or undefined
        if (date === null || date === undefined) {
            throw new Error('Required parameter date was null or undefined when calling openPost.');
        }
        if (date !== undefined) {
            queryParameters['date'] = date;
        }
        if (accountId !== undefined) {
            queryParameters['accountId'] = accountId;
        }
        if (supplierId !== undefined) {
            queryParameters['supplierId'] = supplierId;
        }
        if (customerId !== undefined) {
            queryParameters['customerId'] = customerId;
        }
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (departmentId !== undefined) {
            queryParameters['departmentId'] = departmentId;
        }
        if (projectId !== undefined) {
            queryParameters['projectId'] = projectId;
        }
        if (productId !== undefined) {
            queryParameters['productId'] = productId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find postings corresponding with sent data.
     * @param dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param dateTo Format is yyyy-MM-dd (to and excl.).
     * @param openPostings Deprecated
     * @param accountId Element ID
     * @param supplierId Element ID
     * @param customerId Element ID
     * @param employeeId Element ID
     * @param departmentId Element ID
     * @param projectId Element ID
     * @param productId Element ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    LedgerpostingApi.prototype.search = function (dateFrom, dateTo, openPostings, accountId, supplierId, customerId, employeeId, departmentId, projectId, productId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/ledger/posting';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'dateFrom' is not null or undefined
        if (dateFrom === null || dateFrom === undefined) {
            throw new Error('Required parameter dateFrom was null or undefined when calling search.');
        }
        // verify required parameter 'dateTo' is not null or undefined
        if (dateTo === null || dateTo === undefined) {
            throw new Error('Required parameter dateTo was null or undefined when calling search.');
        }
        if (dateFrom !== undefined) {
            queryParameters['dateFrom'] = dateFrom;
        }
        if (dateTo !== undefined) {
            queryParameters['dateTo'] = dateTo;
        }
        if (openPostings !== undefined) {
            queryParameters['openPostings'] = openPostings;
        }
        if (accountId !== undefined) {
            queryParameters['accountId'] = accountId;
        }
        if (supplierId !== undefined) {
            queryParameters['supplierId'] = supplierId;
        }
        if (customerId !== undefined) {
            queryParameters['customerId'] = customerId;
        }
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (departmentId !== undefined) {
            queryParameters['departmentId'] = departmentId;
        }
        if (projectId !== undefined) {
            queryParameters['projectId'] = projectId;
        }
        if (productId !== undefined) {
            queryParameters['productId'] = productId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return LedgerpostingApi;
}());
exports.LedgerpostingApi = LedgerpostingApi;
var LedgervatTypeApiApiKeys;
(function (LedgervatTypeApiApiKeys) {
})(LedgervatTypeApiApiKeys = exports.LedgervatTypeApiApiKeys || (exports.LedgervatTypeApiApiKeys = {}));
var LedgervatTypeApi = /** @class */ (function () {
    function LedgervatTypeApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(LedgervatTypeApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgervatTypeApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    LedgervatTypeApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    LedgervatTypeApi.prototype.setApiKey = function (key, value) {
        this.authentications[LedgervatTypeApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(LedgervatTypeApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgervatTypeApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get vat type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    LedgervatTypeApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/ledger/vatType/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find vat types corresponding with sent data.
     * @param id List of IDs
     * @param number List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    LedgervatTypeApi.prototype.search = function (id, number, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/ledger/vatType';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (number !== undefined) {
            queryParameters['number'] = number;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return LedgervatTypeApi;
}());
exports.LedgervatTypeApi = LedgervatTypeApi;
var LedgervoucherApiApiKeys;
(function (LedgervoucherApiApiKeys) {
})(LedgervoucherApiApiKeys = exports.LedgervoucherApiApiKeys || (exports.LedgervoucherApiApiKeys = {}));
var LedgervoucherApi = /** @class */ (function () {
    function LedgervoucherApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(LedgervoucherApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgervoucherApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    LedgervoucherApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    LedgervoucherApi.prototype.setApiKey = function (key, value) {
        this.authentications[LedgervoucherApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(LedgervoucherApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgervoucherApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get attachment by voucher ID.
     * @param voucherId Voucher ID from which PDF is downloaded.
     */
    LedgervoucherApi.prototype.downloadPdf = function (voucherId) {
        var localVarPath = this.basePath + '/ledger/voucher/{voucherId}/pdf'
            .replace('{' + 'voucherId' + '}', String(voucherId));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'voucherId' is not null or undefined
        if (voucherId === null || voucherId === undefined) {
            throw new Error('Required parameter voucherId was null or undefined when calling downloadPdf.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Get voucher by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    LedgervoucherApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/ledger/voucher/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Add new voucher. IMPORTANT: Also creates postings. Only the gross amounts will be used
     * @param sendToLedger Should the voucher be sent to ledger?
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    LedgervoucherApi.prototype.post = function (sendToLedger, body) {
        var localVarPath = this.basePath + '/ledger/voucher';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (sendToLedger !== undefined) {
            queryParameters['sendToLedger'] = sendToLedger;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Update voucher. Postings with guiRow==0 will be deleted and regenerated.
     * @param id Element ID
     * @param sendToLedger Should the voucher be sent to ledger?
     * @param body Partial object describing what should be updated
     */
    LedgervoucherApi.prototype.put = function (id, sendToLedger, body) {
        var localVarPath = this.basePath + '/ledger/voucher/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        if (sendToLedger !== undefined) {
            queryParameters['sendToLedger'] = sendToLedger;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find vouchers corresponding with sent data.
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param id List of IDs
     * @param number List of IDs
     * @param numberFrom From and including
     * @param numberTo To and excluding
     * @param typeId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    LedgervoucherApi.prototype.search = function (dateFrom, dateTo, id, number, numberFrom, numberTo, typeId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/ledger/voucher';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'dateFrom' is not null or undefined
        if (dateFrom === null || dateFrom === undefined) {
            throw new Error('Required parameter dateFrom was null or undefined when calling search.');
        }
        // verify required parameter 'dateTo' is not null or undefined
        if (dateTo === null || dateTo === undefined) {
            throw new Error('Required parameter dateTo was null or undefined when calling search.');
        }
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (number !== undefined) {
            queryParameters['number'] = number;
        }
        if (numberFrom !== undefined) {
            queryParameters['numberFrom'] = numberFrom;
        }
        if (numberTo !== undefined) {
            queryParameters['numberTo'] = numberTo;
        }
        if (typeId !== undefined) {
            queryParameters['typeId'] = typeId;
        }
        if (dateFrom !== undefined) {
            queryParameters['dateFrom'] = dateFrom;
        }
        if (dateTo !== undefined) {
            queryParameters['dateTo'] = dateTo;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Upload attachment to voucher. Send as multipart form.
     * @param voucherId Voucher ID to upload PDF to.
     * @param fileName File name to store the pdf under. Will not be the same as the filename on the file returned.
     * @param file The file
     */
    LedgervoucherApi.prototype.uploadPdf = function (voucherId, fileName, file) {
        var localVarPath = this.basePath + '/ledger/voucher/{voucherId}/pdf/{fileName}'
            .replace('{' + 'voucherId' + '}', String(voucherId))
            .replace('{' + 'fileName' + '}', String(fileName));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'voucherId' is not null or undefined
        if (voucherId === null || voucherId === undefined) {
            throw new Error('Required parameter voucherId was null or undefined when calling uploadPdf.');
        }
        // verify required parameter 'fileName' is not null or undefined
        if (fileName === null || fileName === undefined) {
            throw new Error('Required parameter fileName was null or undefined when calling uploadPdf.');
        }
        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling uploadPdf.');
        }
        var useFormData = false;
        if (file !== undefined) {
            formParams['file'] = file;
        }
        useFormData = true;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return LedgervoucherApi;
}());
exports.LedgervoucherApi = LedgervoucherApi;
var LedgervoucherTypeApiApiKeys;
(function (LedgervoucherTypeApiApiKeys) {
})(LedgervoucherTypeApiApiKeys = exports.LedgervoucherTypeApiApiKeys || (exports.LedgervoucherTypeApiApiKeys = {}));
var LedgervoucherTypeApi = /** @class */ (function () {
    function LedgervoucherTypeApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(LedgervoucherTypeApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgervoucherTypeApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    LedgervoucherTypeApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    LedgervoucherTypeApi.prototype.setApiKey = function (key, value) {
        this.authentications[LedgervoucherTypeApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(LedgervoucherTypeApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedgervoucherTypeApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get voucher type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    LedgervoucherTypeApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/ledger/voucherType/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find voucher types corresponding with sent data.
     * @param name Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    LedgervoucherTypeApi.prototype.search = function (name, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/ledger/voucherType';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return LedgervoucherTypeApi;
}());
exports.LedgervoucherTypeApi = LedgervoucherTypeApi;
var OrderApiApiKeys;
(function (OrderApiApiKeys) {
})(OrderApiApiKeys = exports.OrderApiApiKeys || (exports.OrderApiApiKeys = {}));
var OrderApi = /** @class */ (function () {
    function OrderApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(OrderApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    OrderApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    OrderApi.prototype.setApiKey = function (key, value) {
        this.authentications[OrderApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(OrderApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get order by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    OrderApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/order/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Create new invoice from order.
     * @param id ID of order to invoice.
     * @param invoiceDate To and excluding
     * @param sendToCustomer Send invoice to customer
     */
    OrderApi.prototype.invoice = function (id, invoiceDate, sendToCustomer) {
        var localVarPath = this.basePath + '/order/{id}/:invoice'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling invoice.');
        }
        // verify required parameter 'invoiceDate' is not null or undefined
        if (invoiceDate === null || invoiceDate === undefined) {
            throw new Error('Required parameter invoiceDate was null or undefined when calling invoice.');
        }
        if (invoiceDate !== undefined) {
            queryParameters['invoiceDate'] = invoiceDate;
        }
        if (sendToCustomer !== undefined) {
            queryParameters['sendToCustomer'] = sendToCustomer;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Create order.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    OrderApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/order';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Update order.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    OrderApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/order/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find orders corresponding with sent data.
     * @param orderDateFrom From and including
     * @param orderDateTo To and excluding
     * @param id List of IDs
     * @param number Equals
     * @param customerId List of IDs
     * @param isClosed Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    OrderApi.prototype.search = function (orderDateFrom, orderDateTo, id, number, customerId, isClosed, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/order';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'orderDateFrom' is not null or undefined
        if (orderDateFrom === null || orderDateFrom === undefined) {
            throw new Error('Required parameter orderDateFrom was null or undefined when calling search.');
        }
        // verify required parameter 'orderDateTo' is not null or undefined
        if (orderDateTo === null || orderDateTo === undefined) {
            throw new Error('Required parameter orderDateTo was null or undefined when calling search.');
        }
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (number !== undefined) {
            queryParameters['number'] = number;
        }
        if (customerId !== undefined) {
            queryParameters['customerId'] = customerId;
        }
        if (orderDateFrom !== undefined) {
            queryParameters['orderDateFrom'] = orderDateFrom;
        }
        if (orderDateTo !== undefined) {
            queryParameters['orderDateTo'] = orderDateTo;
        }
        if (isClosed !== undefined) {
            queryParameters['isClosed'] = isClosed;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return OrderApi;
}());
exports.OrderApi = OrderApi;
var OrderorderlineApiApiKeys;
(function (OrderorderlineApiApiKeys) {
})(OrderorderlineApiApiKeys = exports.OrderorderlineApiApiKeys || (exports.OrderorderlineApiApiKeys = {}));
var OrderorderlineApi = /** @class */ (function () {
    function OrderorderlineApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(OrderorderlineApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderorderlineApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    OrderorderlineApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    OrderorderlineApi.prototype.setApiKey = function (key, value) {
        this.authentications[OrderorderlineApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(OrderorderlineApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderorderlineApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get order line by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    OrderorderlineApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/order/orderline/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Create order line. When creating several order lines, use /list for better performance.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    OrderorderlineApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/order/orderline';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Create multiple order lines.
     * @param body JSON representing a list of new object to be created. Should not have ID and version set.
     */
    OrderorderlineApi.prototype.postList = function (body) {
        var localVarPath = this.basePath + '/order/orderline/list';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return OrderorderlineApi;
}());
exports.OrderorderlineApi = OrderorderlineApi;
var ProductApiApiKeys;
(function (ProductApiApiKeys) {
})(ProductApiApiKeys = exports.ProductApiApiKeys || (exports.ProductApiApiKeys = {}));
var ProductApi = /** @class */ (function () {
    function ProductApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(ProductApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    ProductApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ProductApi.prototype.setApiKey = function (key, value) {
        this.authentications[ProductApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(ProductApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get product by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    ProductApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/product/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Create new product.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    ProductApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/product';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Update product.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    ProductApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/product/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find products corresponding with sent data.
     * @param number DEPRECATED. List of product numbers (Integer only)
     * @param productNumber List of valid product numbers
     * @param name Containing
     * @param isInactive Equals
     * @param isStockItem Equals
     * @param currencyId Equals
     * @param vatTypeId Equals
     * @param productUnitId Equals
     * @param departmentId Equals
     * @param accountId Equals
     * @param costExcludingVatCurrencyFrom From and including
     * @param costExcludingVatCurrencyTo To and excluding
     * @param priceExcludingVatCurrencyFrom From and including
     * @param priceExcludingVatCurrencyTo To and excluding
     * @param priceIncludingVatCurrencyFrom From and including
     * @param priceIncludingVatCurrencyTo To and excluding
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    ProductApi.prototype.search = function (number, productNumber, name, isInactive, isStockItem, currencyId, vatTypeId, productUnitId, departmentId, accountId, costExcludingVatCurrencyFrom, costExcludingVatCurrencyTo, priceExcludingVatCurrencyFrom, priceExcludingVatCurrencyTo, priceIncludingVatCurrencyFrom, priceIncludingVatCurrencyTo, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/product';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (number !== undefined) {
            queryParameters['number'] = number;
        }
        if (productNumber !== undefined) {
            queryParameters['productNumber'] = productNumber;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (isInactive !== undefined) {
            queryParameters['isInactive'] = isInactive;
        }
        if (isStockItem !== undefined) {
            queryParameters['isStockItem'] = isStockItem;
        }
        if (currencyId !== undefined) {
            queryParameters['currencyId'] = currencyId;
        }
        if (vatTypeId !== undefined) {
            queryParameters['vatTypeId'] = vatTypeId;
        }
        if (productUnitId !== undefined) {
            queryParameters['productUnitId'] = productUnitId;
        }
        if (departmentId !== undefined) {
            queryParameters['departmentId'] = departmentId;
        }
        if (accountId !== undefined) {
            queryParameters['accountId'] = accountId;
        }
        if (costExcludingVatCurrencyFrom !== undefined) {
            queryParameters['costExcludingVatCurrencyFrom'] = costExcludingVatCurrencyFrom;
        }
        if (costExcludingVatCurrencyTo !== undefined) {
            queryParameters['costExcludingVatCurrencyTo'] = costExcludingVatCurrencyTo;
        }
        if (priceExcludingVatCurrencyFrom !== undefined) {
            queryParameters['priceExcludingVatCurrencyFrom'] = priceExcludingVatCurrencyFrom;
        }
        if (priceExcludingVatCurrencyTo !== undefined) {
            queryParameters['priceExcludingVatCurrencyTo'] = priceExcludingVatCurrencyTo;
        }
        if (priceIncludingVatCurrencyFrom !== undefined) {
            queryParameters['priceIncludingVatCurrencyFrom'] = priceIncludingVatCurrencyFrom;
        }
        if (priceIncludingVatCurrencyTo !== undefined) {
            queryParameters['priceIncludingVatCurrencyTo'] = priceIncludingVatCurrencyTo;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return ProductApi;
}());
exports.ProductApi = ProductApi;
var ProductunitApiApiKeys;
(function (ProductunitApiApiKeys) {
})(ProductunitApiApiKeys = exports.ProductunitApiApiKeys || (exports.ProductunitApiApiKeys = {}));
var ProductunitApi = /** @class */ (function () {
    function ProductunitApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(ProductunitApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductunitApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    ProductunitApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ProductunitApi.prototype.setApiKey = function (key, value) {
        this.authentications[ProductunitApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(ProductunitApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductunitApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get product unit by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    ProductunitApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/product/unit/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find product units corresponding with sent data.
     * @param id List of IDs
     * @param name Names
     * @param nameShort Short names
     * @param commonCode Common codes
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    ProductunitApi.prototype.search = function (id, name, nameShort, commonCode, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/product/unit';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (nameShort !== undefined) {
            queryParameters['nameShort'] = nameShort;
        }
        if (commonCode !== undefined) {
            queryParameters['commonCode'] = commonCode;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return ProductunitApi;
}());
exports.ProductunitApi = ProductunitApi;
var ProjectApiApiKeys;
(function (ProjectApiApiKeys) {
})(ProjectApiApiKeys = exports.ProjectApiApiKeys || (exports.ProjectApiApiKeys = {}));
var ProjectApi = /** @class */ (function () {
    function ProjectApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(ProjectApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    ProjectApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ProjectApi.prototype.setApiKey = function (key, value) {
        this.authentications[ProjectApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(ProjectApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Find project by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    ProjectApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/project/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find projects applicable for time sheet registration on a specific day.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param date yyyy-MM-dd. Defaults to today.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    ProjectApi.prototype.getForTimeSheet = function (employeeId, date, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/project/>forTimeSheet';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (date !== undefined) {
            queryParameters['date'] = date;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find projects corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param number Equals
     * @param projectManagerId List of IDs
     * @param startDateFrom From and including
     * @param startDateTo To and excluding
     * @param endDateFrom From and including
     * @param endDateTo To and excluding
     * @param isClosed Equals
     * @param customerId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    ProjectApi.prototype.search = function (id, name, number, projectManagerId, startDateFrom, startDateTo, endDateFrom, endDateTo, isClosed, customerId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/project';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (number !== undefined) {
            queryParameters['number'] = number;
        }
        if (projectManagerId !== undefined) {
            queryParameters['projectManagerId'] = projectManagerId;
        }
        if (startDateFrom !== undefined) {
            queryParameters['startDateFrom'] = startDateFrom;
        }
        if (startDateTo !== undefined) {
            queryParameters['startDateTo'] = startDateTo;
        }
        if (endDateFrom !== undefined) {
            queryParameters['endDateFrom'] = endDateFrom;
        }
        if (endDateTo !== undefined) {
            queryParameters['endDateTo'] = endDateTo;
        }
        if (isClosed !== undefined) {
            queryParameters['isClosed'] = isClosed;
        }
        if (customerId !== undefined) {
            queryParameters['customerId'] = customerId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return ProjectApi;
}());
exports.ProjectApi = ProjectApi;
var ProjectcategoryApiApiKeys;
(function (ProjectcategoryApiApiKeys) {
})(ProjectcategoryApiApiKeys = exports.ProjectcategoryApiApiKeys || (exports.ProjectcategoryApiApiKeys = {}));
var ProjectcategoryApi = /** @class */ (function () {
    function ProjectcategoryApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(ProjectcategoryApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectcategoryApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    ProjectcategoryApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ProjectcategoryApi.prototype.setApiKey = function (key, value) {
        this.authentications[ProjectcategoryApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(ProjectcategoryApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectcategoryApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Find project category by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    ProjectcategoryApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/project/category/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Add new project category.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    ProjectcategoryApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/project/category';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Update project category.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    ProjectcategoryApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/project/category/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find project categories corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param number Equals
     * @param description Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    ProjectcategoryApi.prototype.search = function (id, name, number, description, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/project/category';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (number !== undefined) {
            queryParameters['number'] = number;
        }
        if (description !== undefined) {
            queryParameters['description'] = description;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return ProjectcategoryApi;
}());
exports.ProjectcategoryApi = ProjectcategoryApi;
var SalarypayslipApiApiKeys;
(function (SalarypayslipApiApiKeys) {
})(SalarypayslipApiApiKeys = exports.SalarypayslipApiApiKeys || (exports.SalarypayslipApiApiKeys = {}));
var SalarypayslipApi = /** @class */ (function () {
    function SalarypayslipApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(SalarypayslipApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalarypayslipApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    SalarypayslipApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    SalarypayslipApi.prototype.setApiKey = function (key, value) {
        this.authentications[SalarypayslipApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(SalarypayslipApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalarypayslipApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary [BETA] Find payslip (PDF document) by ID.
     * @param id Element ID
     */
    SalarypayslipApi.prototype.downloadPdf = function (id) {
        var localVarPath = this.basePath + '/salary/payslip/{id}/pdf'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling downloadPdf.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Find payslip by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    SalarypayslipApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/salary/payslip/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Find payslips corresponding with sent data.
     * @param id List of IDs
     * @param employeeId List of IDs
     * @param wageTransactionId List of IDs
     * @param activityId List of IDs
     * @param yearFrom From and including
     * @param yearTo To and excluding
     * @param monthFrom From and including
     * @param monthTo To and excluding
     * @param voucherDateFrom From and including
     * @param voucherDateTo To and excluding
     * @param comment Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    SalarypayslipApi.prototype.search = function (id, employeeId, wageTransactionId, activityId, yearFrom, yearTo, monthFrom, monthTo, voucherDateFrom, voucherDateTo, comment, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/salary/payslip';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (wageTransactionId !== undefined) {
            queryParameters['wageTransactionId'] = wageTransactionId;
        }
        if (activityId !== undefined) {
            queryParameters['activityId'] = activityId;
        }
        if (yearFrom !== undefined) {
            queryParameters['yearFrom'] = yearFrom;
        }
        if (yearTo !== undefined) {
            queryParameters['yearTo'] = yearTo;
        }
        if (monthFrom !== undefined) {
            queryParameters['monthFrom'] = monthFrom;
        }
        if (monthTo !== undefined) {
            queryParameters['monthTo'] = monthTo;
        }
        if (voucherDateFrom !== undefined) {
            queryParameters['voucherDateFrom'] = voucherDateFrom;
        }
        if (voucherDateTo !== undefined) {
            queryParameters['voucherDateTo'] = voucherDateTo;
        }
        if (comment !== undefined) {
            queryParameters['comment'] = comment;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return SalarypayslipApi;
}());
exports.SalarypayslipApi = SalarypayslipApi;
var SalaryspecificationApiApiKeys;
(function (SalaryspecificationApiApiKeys) {
})(SalaryspecificationApiApiKeys = exports.SalaryspecificationApiApiKeys || (exports.SalaryspecificationApiApiKeys = {}));
var SalaryspecificationApi = /** @class */ (function () {
    function SalaryspecificationApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(SalaryspecificationApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalaryspecificationApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    SalaryspecificationApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    SalaryspecificationApi.prototype.setApiKey = function (key, value) {
        this.authentications[SalaryspecificationApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(SalaryspecificationApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalaryspecificationApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary [BETA] Find salary specification entry by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    SalaryspecificationApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/salary/specification/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return SalaryspecificationApi;
}());
exports.SalaryspecificationApi = SalaryspecificationApi;
var SalarytransactionApiApiKeys;
(function (SalarytransactionApiApiKeys) {
})(SalarytransactionApiApiKeys = exports.SalarytransactionApiApiKeys || (exports.SalarytransactionApiApiKeys = {}));
var SalarytransactionApi = /** @class */ (function () {
    function SalarytransactionApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(SalarytransactionApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalarytransactionApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    SalarytransactionApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    SalarytransactionApi.prototype.setApiKey = function (key, value) {
        this.authentications[SalarytransactionApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(SalarytransactionApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalarytransactionApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary [BETA] Delete salary transaction by ID.
     * @param id Element ID
     */
    SalarytransactionApi.prototype._delete = function (id) {
        var localVarPath = this.basePath + '/salary/transaction/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Find salary transaction by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    SalarytransactionApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/salary/transaction/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Create a new salary transaction.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    SalarytransactionApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/salary/transaction';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return SalarytransactionApi;
}());
exports.SalarytransactionApi = SalarytransactionApi;
var SalarytypeApiApiKeys;
(function (SalarytypeApiApiKeys) {
})(SalarytypeApiApiKeys = exports.SalarytypeApiApiKeys || (exports.SalarytypeApiApiKeys = {}));
var SalarytypeApi = /** @class */ (function () {
    function SalarytypeApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(SalarytypeApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalarytypeApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    SalarytypeApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    SalarytypeApi.prototype.setApiKey = function (key, value) {
        this.authentications[SalarytypeApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(SalarytypeApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalarytypeApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary [BETA] Find salary type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    SalarytypeApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/salary/type/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary [BETA] Find salary type corresponding with sent data.
     * @param id List of IDs
     * @param number Containing
     * @param name Containing
     * @param description Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    SalarytypeApi.prototype.search = function (id, number, name, description, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/salary/type';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (number !== undefined) {
            queryParameters['number'] = number;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (description !== undefined) {
            queryParameters['description'] = description;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return SalarytypeApi;
}());
exports.SalarytypeApi = SalarytypeApi;
var SupplierApiApiKeys;
(function (SupplierApiApiKeys) {
})(SupplierApiApiKeys = exports.SupplierApiApiKeys || (exports.SupplierApiApiKeys = {}));
var SupplierApi = /** @class */ (function () {
    function SupplierApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(SupplierApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupplierApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    SupplierApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    SupplierApi.prototype.setApiKey = function (key, value) {
        this.authentications[SupplierApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(SupplierApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupplierApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get supplier by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    SupplierApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/supplier/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Create supplier. Related supplier addresses may also be created.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    SupplierApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/supplier';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Update supplier.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    SupplierApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/supplier/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find suppliers corresponding with sent data.
     * @param id List of IDs
     * @param supplierNumber List of IDs
     * @param email Equals
     * @param invoiceEmail Equals
     * @param isInactive Equals
     * @param accountManagerId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    SupplierApi.prototype.search = function (id, supplierNumber, email, invoiceEmail, isInactive, accountManagerId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/supplier';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (supplierNumber !== undefined) {
            queryParameters['supplierNumber'] = supplierNumber;
        }
        if (email !== undefined) {
            queryParameters['email'] = email;
        }
        if (invoiceEmail !== undefined) {
            queryParameters['invoiceEmail'] = invoiceEmail;
        }
        if (isInactive !== undefined) {
            queryParameters['isInactive'] = isInactive;
        }
        if (accountManagerId !== undefined) {
            queryParameters['accountManagerId'] = accountManagerId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return SupplierApi;
}());
exports.SupplierApi = SupplierApi;
var TimesheetentryApiApiKeys;
(function (TimesheetentryApiApiKeys) {
})(TimesheetentryApiApiKeys = exports.TimesheetentryApiApiKeys || (exports.TimesheetentryApiApiKeys = {}));
var TimesheetentryApi = /** @class */ (function () {
    function TimesheetentryApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(TimesheetentryApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimesheetentryApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    TimesheetentryApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    TimesheetentryApi.prototype.setApiKey = function (key, value) {
        this.authentications[TimesheetentryApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(TimesheetentryApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimesheetentryApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Delete timesheet entry by ID.
     * @param id Element ID
     * @param version Number of current version
     */
    TimesheetentryApi.prototype._delete = function (id, version) {
        var localVarPath = this.basePath + '/timesheet/entry/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }
        if (version !== undefined) {
            queryParameters['version'] = version;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find timesheet entry by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    TimesheetentryApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/timesheet/entry/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find recently used timesheet activities.
     * @param projectId ID of project to find activities for
     * @param employeeId ID of employee to find activities for. Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    TimesheetentryApi.prototype.getRecentActivities = function (projectId, employeeId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/timesheet/entry/>recentActivities';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling getRecentActivities.');
        }
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (projectId !== undefined) {
            queryParameters['projectId'] = projectId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find projects with recent activities (timesheet entry registered).
     * @param employeeId ID of employee with recent project hours Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    TimesheetentryApi.prototype.getRecentProjects = function (employeeId, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/timesheet/entry/>recentProjects';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find total hours registered on an employee in a specific period.
     * @param employeeId ID of employee to find hours for. Defaults to ID of token owner.
     * @param startDate Format is yyyy-MM-dd (from and incl.). Defaults to today.
     * @param endDate Format is yyyy-MM-dd (to and excl.). Defaults to tomorrow.
     * @param fields Fields filter pattern
     */
    TimesheetentryApi.prototype.getTotalHours = function (employeeId, startDate, endDate, fields) {
        var localVarPath = this.basePath + '/timesheet/entry/>totalHours';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (startDate !== undefined) {
            queryParameters['startDate'] = startDate;
        }
        if (endDate !== undefined) {
            queryParameters['endDate'] = endDate;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Add new timesheet entry. Only one entry per employee/date/activity/project combination is supported.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    TimesheetentryApi.prototype.post = function (body) {
        var localVarPath = this.basePath + '/timesheet/entry';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Add new timesheet entry. Multiple objects for several users can be sent in the same request.
     * @param body List of timesheet entry objects
     */
    TimesheetentryApi.prototype.postList = function (body) {
        var localVarPath = this.basePath + '/timesheet/entry/list';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Update timesheet entry by ID. Note: Timesheet entry object fields which are present but not set, or set to 0, will be nulled.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    TimesheetentryApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/timesheet/entry/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Update timesheet entry. Multiple objects for different users can be sent in the same request.
     * @param body List of timesheet entry objects to update
     */
    TimesheetentryApi.prototype.putList = function (body) {
        var localVarPath = this.basePath + '/timesheet/entry/list';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find timesheet entry corresponding with sent data.
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param id List of IDs
     * @param employeeId List of IDs
     * @param projectId List of IDs
     * @param activityId List of IDs
     * @param comment Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    TimesheetentryApi.prototype.search = function (dateFrom, dateTo, id, employeeId, projectId, activityId, comment, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/timesheet/entry';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'dateFrom' is not null or undefined
        if (dateFrom === null || dateFrom === undefined) {
            throw new Error('Required parameter dateFrom was null or undefined when calling search.');
        }
        // verify required parameter 'dateTo' is not null or undefined
        if (dateTo === null || dateTo === undefined) {
            throw new Error('Required parameter dateTo was null or undefined when calling search.');
        }
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (projectId !== undefined) {
            queryParameters['projectId'] = projectId;
        }
        if (activityId !== undefined) {
            queryParameters['activityId'] = activityId;
        }
        if (dateFrom !== undefined) {
            queryParameters['dateFrom'] = dateFrom;
        }
        if (dateTo !== undefined) {
            queryParameters['dateTo'] = dateTo;
        }
        if (comment !== undefined) {
            queryParameters['comment'] = comment;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return TimesheetentryApi;
}());
exports.TimesheetentryApi = TimesheetentryApi;
var TimesheettimeClockApiApiKeys;
(function (TimesheettimeClockApiApiKeys) {
})(TimesheettimeClockApiApiKeys = exports.TimesheettimeClockApiApiKeys || (exports.TimesheettimeClockApiApiKeys = {}));
var TimesheettimeClockApi = /** @class */ (function () {
    function TimesheettimeClockApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(TimesheettimeClockApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimesheettimeClockApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    TimesheettimeClockApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    TimesheettimeClockApi.prototype.setApiKey = function (key, value) {
        this.authentications[TimesheettimeClockApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(TimesheettimeClockApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimesheettimeClockApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Find time clock entry by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    TimesheettimeClockApi.prototype.get = function (id, fields) {
        var localVarPath = this.basePath + '/timesheet/timeClock/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find a user’s present running time clock.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param fields Fields filter pattern
     */
    TimesheettimeClockApi.prototype.getPresent = function (employeeId, fields) {
        var localVarPath = this.basePath + '/timesheet/timeClock/present';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Update time clock by ID.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    TimesheettimeClockApi.prototype.put = function (id, body) {
        var localVarPath = this.basePath + '/timesheet/timeClock/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find time clock entries corresponding with sent data.
     * @param id List of IDs
     * @param employeeId List of IDs
     * @param projectId List of IDs
     * @param activityId List of IDs
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param hourId List of IDs
     * @param isRunning Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    TimesheettimeClockApi.prototype.search = function (id, employeeId, projectId, activityId, dateFrom, dateTo, hourId, isRunning, from, count, sorting, fields) {
        var localVarPath = this.basePath + '/timesheet/timeClock';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (id !== undefined) {
            queryParameters['id'] = id;
        }
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (projectId !== undefined) {
            queryParameters['projectId'] = projectId;
        }
        if (activityId !== undefined) {
            queryParameters['activityId'] = activityId;
        }
        if (dateFrom !== undefined) {
            queryParameters['dateFrom'] = dateFrom;
        }
        if (dateTo !== undefined) {
            queryParameters['dateTo'] = dateTo;
        }
        if (hourId !== undefined) {
            queryParameters['hourId'] = hourId;
        }
        if (isRunning !== undefined) {
            queryParameters['isRunning'] = isRunning;
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
        }
        if (sorting !== undefined) {
            queryParameters['sorting'] = sorting;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Start time clock.
     * @param activityId Activity ID
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param projectId Project ID
     * @param date Optional. Default is today’s date
     */
    TimesheettimeClockApi.prototype.start = function (activityId, employeeId, projectId, date) {
        var localVarPath = this.basePath + '/timesheet/timeClock/:start';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'activityId' is not null or undefined
        if (activityId === null || activityId === undefined) {
            throw new Error('Required parameter activityId was null or undefined when calling start.');
        }
        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }
        if (projectId !== undefined) {
            queryParameters['projectId'] = projectId;
        }
        if (activityId !== undefined) {
            queryParameters['activityId'] = activityId;
        }
        if (date !== undefined) {
            queryParameters['date'] = date;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Stop time clock.
     * @param id Element ID
     * @param version Number of current version
     */
    TimesheettimeClockApi.prototype.stop = function (id, version) {
        var localVarPath = this.basePath + '/timesheet/timeClock/{id}/:stop'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling stop.');
        }
        if (version !== undefined) {
            queryParameters['version'] = version;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return TimesheettimeClockApi;
}());
exports.TimesheettimeClockApi = TimesheettimeClockApi;
var TokenconsumerApiApiKeys;
(function (TokenconsumerApiApiKeys) {
})(TokenconsumerApiApiKeys = exports.TokenconsumerApiApiKeys || (exports.TokenconsumerApiApiKeys = {}));
var TokenconsumerApi = /** @class */ (function () {
    function TokenconsumerApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(TokenconsumerApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenconsumerApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    TokenconsumerApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    TokenconsumerApi.prototype.setApiKey = function (key, value) {
        this.authentications[TokenconsumerApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(TokenconsumerApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenconsumerApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Get consumer token by token string.
     * @param token Element ID
     * @param fields Fields filter pattern
     */
    TokenconsumerApi.prototype.getByToken = function (token, fields) {
        var localVarPath = this.basePath + '/token/consumer/byToken';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling getByToken.');
        }
        if (token !== undefined) {
            queryParameters['token'] = token;
        }
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return TokenconsumerApi;
}());
exports.TokenconsumerApi = TokenconsumerApi;
var TokensessionApiApiKeys;
(function (TokensessionApiApiKeys) {
})(TokensessionApiApiKeys = exports.TokensessionApiApiKeys || (exports.TokensessionApiApiKeys = {}));
var TokensessionApi = /** @class */ (function () {
    function TokensessionApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'tokenAuthScheme': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(TokensessionApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokensessionApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    TokensessionApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    TokensessionApi.prototype.setApiKey = function (key, value) {
        this.authentications[TokensessionApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(TokensessionApi.prototype, "username", {
        set: function (username) {
            this.authentications.tokenAuthScheme.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokensessionApi.prototype, "password", {
        set: function (password) {
            this.authentications.tokenAuthScheme.password = password;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @summary Delete session token.
     * @param token The login token string to delete
     */
    TokensessionApi.prototype._delete = function (token) {
        var localVarPath = this.basePath + '/token/session/{token}'
            .replace('{' + 'token' + '}', String(token));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling _delete.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Create session token.
     * @param consumerToken Token of the API consumer
     * @param employeeToken The employees token
     * @param expirationDate Expiration date for the combined token
     */
    TokensessionApi.prototype.create = function (consumerToken, employeeToken, expirationDate) {
        var localVarPath = this.basePath + '/token/session/:create';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'consumerToken' is not null or undefined
        if (consumerToken === null || consumerToken === undefined) {
            throw new Error('Required parameter consumerToken was null or undefined when calling create.');
        }
        // verify required parameter 'employeeToken' is not null or undefined
        if (employeeToken === null || employeeToken === undefined) {
            throw new Error('Required parameter employeeToken was null or undefined when calling create.');
        }
        // verify required parameter 'expirationDate' is not null or undefined
        if (expirationDate === null || expirationDate === undefined) {
            throw new Error('Required parameter expirationDate was null or undefined when calling create.');
        }
        if (consumerToken !== undefined) {
            queryParameters['consumerToken'] = consumerToken;
        }
        if (employeeToken !== undefined) {
            queryParameters['employeeToken'] = employeeToken;
        }
        if (expirationDate !== undefined) {
            queryParameters['expirationDate'] = expirationDate;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * @summary Find information about the current user.
     * @param fields Fields filter pattern
     */
    TokensessionApi.prototype.whoAmI = function (fields) {
        var localVarPath = this.basePath + '/token/session/>whoAmI';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.tokenAuthScheme.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return TokensessionApi;
}());
exports.TokensessionApi = TokensessionApi;
