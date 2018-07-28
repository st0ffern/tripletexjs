/**
 * Tripletex API
 * The Tripletex API is a **RESTful API**, which does not implement PATCH, but uses a PUT with optional fields.  **Actions** or commands are represented in our RESTful path with a prefixed **\":\"**. Example: **\"/v2/hours/123/:approve\"**.  **Summaries** or aggregated results are represented in our RESTful path with a prefixed **\"&gt;\"**. Example: **\"/v2/hours/&gt;thisWeeksBillables\"**.  **\"requestID\"** is a key found in all validation and error responses. If additional log information is absolutely necessary, our support division can locate the key value.  **HTTPS** is used by the entire API and will throw an error on HTTP.  **Download** the [swagger.json](/v2/swagger.json) file [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification) to [generate code](https://github.com/swagger-api/swagger-codegen). This document was generated from the Swagger JSON file.  **version:** This is a versioning number found on all DB records. If included, it will prevent your PUT/POST from overriding any updates to the record since your GET.  **Date & DateTime** follows the **ISO 8601** standard. Date: YYYY-MM-DD. DateTime: YYYY-MM-DDThh:mm:ssZ  **Sorting** is done by specifying a comma separated list, where a \"-\" prefix denotes descending. You can sort by sub object with the following format: 'project.name, -date'.  **Searching:** is done by entering values in the optional fields for each API call. The values fall into the following categories: range, in, exact and like.  **Missing fields or even no response data** can occur because result objects and fields are filtered on authorization.  **See [FAQ](https://tripletex.no/execute/docViewer?articleId=906&language=0) for more additional information.**   ##Authentication: - **Tokens:** The Tripletex API uses 3 different tokens - **consumerToken**, **employeeToken** and **sessionToken**.  - **consumerToken** is a token provided to the consumer by Tripletex after the API 2.0 registration is completed.  - **employeeToken** is a token created by an administrator in your Tripletex account via the user settings and the tab \"API access\". Each employee token must be given a set of entitlements. [Read more here.](https://tripletex.no/execute/docViewer?articleId=853&language=0)  - **sessionToken** is the token from \"/tokens/session/:create\" which requires a consumerToken and an employeeToken created with the same consumer token, but not an authentication header. See how to create a sessionToken [here](https://tripletex.no/execute/docViewer?articleId=855&language=0). - The session token is used as the password in \"Basic Authentication Header\" for API calls.  - Use blank or 0 as username for accessing the account with regular employee token, or if a company owned employee token accesses \"/company/&gt;withLoginAccess\" or \"/token/session/&gt;whoAmI\".  - For company owned employee tokens (accounting offices) the ID from \"/company/&gt;withLoginAccess\" can be used as username for accessing client accounts.  - If you need to create the header yourself use \"Authorization: Basic &lt;base64encode('0:sessionToken')&gt;\".   ##Tags: - <div class=\"tag-icon-beta\"></div> **[BETA]** This is a beta endpoint and can be subject to change. - <div class=\"tag-icon-deprecated\"></div> **[DEPRECATED]** Deprecated means that we intend to remove/change this feature or capability in a future \"major\" API release. We therefore discourage all use of this feature/capability.  ##Fields: - **project,activity,hours**  returns _{project:..., activity:...., hours:...}_. - just **project** returns _\"project\" : { \"id\": 12345, \"url\": \"tripletex.no/v2/projects/12345\"  }_. - **project(*)** returns _\"project\" : { \"id\": 12345 \"name\":\"ProjectName\" \"number.....startDate\": \"2013-01-07\" }_. - **project(name)** returns _*\"project\" : { \"name\":\"ProjectName\" }*_. - All elements and some subElements :  _*,activity(name),employee(*)_.  ##Changelog: - To get the changelog for a resource, 'changes' have to be explicitly specified as part of the fields parameter, I.E '*,changes'. - There are two types of change available:  -- 'CREATE' for when the resource was created -- 'UPDATE' for when the resource was last updated   ##Rate limiting in each response header: - **X-Rate-Limit-Limit** - The number of allowed requests in the current period. - **X-Rate-Limit-Remaining** - The number of remaining requests. - **X-Rate-Limit-Reset** - The number of seconds left in the current period.   ##Response envelope: ``` {   \"fullResultSize\": ###,   \"from\": ###, // Paging starting from   \"count\": ###, // Paging count   \"versionDigest\": \"Hash of full result\",   \"values\": [...list of objects...] } {   \"value\": {...single object...} } ```   ##WebHook envelope: ``` {   \"subscriptionId\": ###,   \"key\": \"object.verb\", // As listed from /v2/event/   \"id\": ###, // Object id   \"value\": {... single object, null if object.deleted ...} } ```    ##Error/Warning envelope: ``` {   \"status\": ###, // HTTP status code   \"code\": #####, // internal status code of event   \"message\": \"Basic feedback message in your language\",   \"link\": \"Link to doc\",   \"developerMessage\": \"More technical message\",   \"validationMessages\": [ // Will be null if Error     {       \"field\": \"Name of field\",       \"message\": \"Validation failure information\"     }   ],   \"requestId\": \"UUID used in any logs\" } ```   ##Status codes / Error codes: - **200 OK** - **201 Created** - From POSTs that create something new. - **204 No Content** - When there is no answer, ex: \"/:anAction\" or DELETE. - **400 Bad request** -   - **4000** Bad Request Exception   - **11000** Illegal Filter Exception   - **12000** Path Param Exception   - **24000**   Cryptography Exception - **401 Unauthorized** - When authentication is required and has failed or has not yet been provided   -  **3000** Authentication Exception   -  **9000** Security Exception - **403 Forbidden** - When AuthorisationManager says no. - **404 Not Found** - For content/IDs that does not exist.   -  **6000** Not Found Exception - **409 Conflict** - Such as an edit conflict between multiple simultaneous updates   -  **7000** Object Exists Exception   -  **8000** Revision Exception   - **10000** Locked Exception   - **14000** Duplicate entry - **422 Bad Request** - For Required fields or things like malformed payload.   - **15000** Value Validation Exception   - **16000** Mapping Exception   - **17000** Sorting Exception   - **18000** Validation Exception   - **21000** Param Exception   - **22000** Invalid JSON Exception   - **23000**   Result Set Too Large Exception - **500 Internal Error** -  Unexpected condition was encountered and no more specific message is suitable   -  **1000** Exception
 *
 * OpenAPI spec version: 2.15.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 */

import request = require('request');
import http = require('http');

let defaultBasePath = 'https://tripletex.no/v2';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

/* tslint:disable:no-unused-variable */

export class AbstractDTO {
    'number': string;
    'description': string;
}

export class AccommodationAllowance {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'travelExpense': TravelExpense;
    'rateType': TravelExpenseRate;
    'rateCategory': TravelExpenseRateCategory;
    'zone': string;
    'location': string;
    'address': string;
    'count': number;
    'rate': number;
    'amount': number;
}

export class Account {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'number': number;
    'name': string;
    'description': string;
    'type': Account.TypeEnum;
    /**
    * The default vat type for this account.
    */
    'vatType': VatType;
    /**
    * True if all entries on this account must have the vat type given by vatType.
    */
    'vatLocked': boolean;
    /**
    * If given, all entries on this account must have this currency.
    */
    'currency': Currency;
    /**
    * True if it should be possible to close entries on this account and it is possible to filter on open entries.
    */
    'isCloseable': boolean;
    /**
    * True if this account is applicable for supplier invoice registration.
    */
    'isApplicableForSupplierInvoice': boolean;
    /**
    * True if this account must be reconciled before the accounting period closure.
    */
    'requireReconciliation': boolean;
    /**
    * Inactive accounts will not show up in UI lists.
    */
    'isInactive': boolean;
    'isBankAccount': boolean;
    'isInvoiceAccount': boolean;
    'bankAccountNumber': string;
    'bankAccountCountry': Country;
    'bankName': string;
    'bankAccountIBAN': string;
    'bankAccountSWIFT': string;
}

export namespace Account {
    export enum TypeEnum {
        ASSETS = <any> 'ASSETS',
        EQUITY = <any> 'EQUITY',
        LIABILITIES = <any> 'LIABILITIES',
        OPERATINGREVENUES = <any> 'OPERATING_REVENUES',
        OPERATINGEXPENSES = <any> 'OPERATING_EXPENSES',
        INVESTMENTINCOME = <any> 'INVESTMENT_INCOME',
        COSTOFCAPITAL = <any> 'COST_OF_CAPITAL',
        TAXONORDINARYACTIVITIES = <any> 'TAX_ON_ORDINARY_ACTIVITIES',
        EXTRAORDINARYINCOME = <any> 'EXTRAORDINARY_INCOME',
        EXTRAORDINARYCOST = <any> 'EXTRAORDINARY_COST',
        TAXONEXTRAORDINARYACTIVITIES = <any> 'TAX_ON_EXTRAORDINARY_ACTIVITIES',
        ANNUALRESULT = <any> 'ANNUAL_RESULT',
        TRANSFERSANDALLOCATIONS = <any> 'TRANSFERS_AND_ALLOCATIONS'
    }
}
export class AccountingPeriod {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'number': number;
    'start': string;
    'end': string;
}

export class Activity {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'number': string;
    'description': string;
    'isProjectActivity': boolean;
    'isGeneral': boolean;
    'isChargeable': boolean;
    'isTask': boolean;
}

export class Address {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'employee': Employee;
    'addressLine1': string;
    'addressLine2': string;
    'postalCode': string;
    'city': string;
    'country': Country;
    'name': string;
}

export class AnnualAccount {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'year': number;
    'start': string;
    'end': string;
}

export class ApiConsumer {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'consumerName': string;
    'emails': string;
}

export class ApiError {
    'status': number;
    'code': number;
    'message': string;
    'link': string;
    'developerMessage': string;
    'validationMessages': Array<ApiValidationMessage>;
    'requestId': string;
}

export class ApiValidationMessage {
    'field': string;
    'message': string;
}

export class AppSpecific {
    'hourRegistrationEnabled': boolean;
    'projectEnabled': boolean;
    'userIsAllowedToRegisterHours': boolean;
}

export class Bank {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    /**
    * Bank name
    */
    'name': string;
    /**
    * Bank statement file formats supported.
    */
    'bankStatementFileFormatSupport': Array<Bank.BankStatementFileFormatSupportEnum>;
    /**
    * Register numbers belonging to bank.
    */
    'registerNumbers': Array<number>;
}

export namespace Bank {
    export enum BankStatementFileFormatSupportEnum {
        DANSKEBANKCSV = <any> 'DANSKE_BANK_CSV',
        EIKATELEPAY = <any> 'EIKA_TELEPAY'
    }
}
export class BankReconciliation {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'account': Account;
    'accountingPeriod': AccountingPeriod;
    'voucher': Voucher;
    'bankStatement': BankStatement;
    'isClosed': boolean;
    'outgoingBankAccountBalanceCurrency': number;
    'closedDate': string;
    'closedByContact': Contact;
    'closedByEmployee': Employee;
}

export class BankReconciliationMatch {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'bankReconciliation': BankReconciliation;
    /**
    * Match transactions
    */
    'transactions': Array<BankTransaction>;
    /**
    * Match postings
    */
    'postings': Array<Posting>;
}

export class BankReconciliationPaymentType {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    /**
    * Description
    */
    'description': string;
    /**
    * Debit account
    */
    'debitAccount': Account;
    /**
    * Credit account
    */
    'creditAccount': Account;
}

export class BankStatement {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    /**
    * Balance on the account.
    */
    'balanceCurrency': number;
    /**
    * Bank statement file name.
    */
    'fileName': string;
    /**
    * Bank transactions tied to the bank statement
    */
    'transactions': Array<BankTransaction>;
}

export class BankTransaction {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'postedDate': string;
    'description': string;
    'amountCurrency': number;
    'bankStatement': BankReconciliation;
}

export class Banner {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'bannerType': string;
    'title': string;
    'message': string;
    'button': string;
    'link': string;
    'tag': string;
    'done': boolean;
}

export class CSVRecord {
    'comment': string;
    'recordNumber': number;
    'consistent': boolean;
}

export class Change {
    'employeeId': number;
    'timestamp': Date;
    'changeType': Change.ChangeTypeEnum;
}

export namespace Change {
    export enum ChangeTypeEnum {
        CREATE = <any> 'CREATE',
        UPDATE = <any> 'UPDATE',
        DELETE = <any> 'DELETE'
    }
}
export class CloseGroup {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'date': string;
    'postings': Array<Posting>;
}

export class Company {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'startDate': string;
    'endDate': string;
    'organizationNumber': string;
    'email': string;
    'phoneNumber': string;
    'phoneNumberMobile': string;
    'faxNumber': string;
    'address': Address;
    'type': Company.TypeEnum;
}

export namespace Company {
    export enum TypeEnum {
        NONE = <any> 'NONE',
        ENK = <any> 'ENK',
        AS = <any> 'AS',
        NUF = <any> 'NUF',
        ANS = <any> 'ANS',
        DA = <any> 'DA',
        PRE = <any> 'PRE',
        KS = <any> 'KS',
        ASA = <any> 'ASA',
        BBL = <any> 'BBL',
        BRL = <any> 'BRL',
        GFS = <any> 'GFS',
        SPA = <any> 'SPA',
        SF = <any> 'SF',
        IKS = <any> 'IKS',
        KFFKF = <any> 'KF_FKF',
        FCD = <any> 'FCD',
        EOFG = <any> 'EOFG',
        BA = <any> 'BA',
        STI = <any> 'STI',
        ORG = <any> 'ORG',
        ESEK = <any> 'ESEK',
        SAM = <any> 'SAM',
        BO = <any> 'BO',
        VPFO = <any> 'VPFO',
        OS = <any> 'OS',
        Other = <any> 'Other'
    }
}
export class ConsumerToken {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'apiConsumer': ApiConsumer;
    'token': string;
    'expirationDate': string;
}

export class Contact {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'firstName': string;
    'lastName': string;
    'email': string;
    'customer': Customer;
}

export class Cost {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'travelExpense': TravelExpense;
    'vatType': VatType;
    'currency': Currency;
    'costCategory': PaymentType;
    'paymentType': PaymentType;
    'category': string;
    'comments': string;
    'rate': number;
    'amountCurrencyIncVat': number;
    'amountNOKInclVAT': number;
    'amountNOKInclVATLow': number;
    'amountNOKInclVATMedium': number;
    'amountNOKInclVATHigh': number;
    'isPaidByEmployee': boolean;
    'isChargeable': boolean;
    'date': string;
}

export class Country {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
}

export class Currency {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'code': string;
    'description': string;
}

export class Customer {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'organizationNumber': string;
    'supplierNumber': number;
    'customerNumber': number;
    'isSupplier': boolean;
    'isCustomer': boolean;
    'isInactive': boolean;
    'accountManager': Employee;
    'email': string;
    'invoiceEmail': string;
    /**
    * List of the bank account numbers for this customer. Norwegian bank account numbers only.
    */
    'bankAccounts': Array<string>;
    'phoneNumber': string;
    'phoneNumberMobile': string;
    'description': string;
    'isPrivateIndividual': boolean;
    'postalAddress': Address;
    'physicalAddress': Address;
    'deliveryAddress': Address;
    /**
    * Category 1 of this customer
    */
    'category1': CustomerCategory;
    /**
    * Category 2 of this customer
    */
    'category2': CustomerCategory;
    /**
    * Category 3 of this customer
    */
    'category3': CustomerCategory;
}

export class CustomerCategory {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'number': string;
    'description': string;
    'type': number;
}

export class CustomerTripletexAccount {
    /**
    * Administrator user to create in the new company. Leave empty if calling this enpoint as an auditor og accountant company
    */
    'administrator': Employee;
    /**
    * The customer id to an already created customer to create a Tripletex account for.
    */
    'customerId': number;
    'accountType': CustomerTripletexAccount.AccountTypeEnum;
    'modules': Modules;
    'type': CustomerTripletexAccount.TypeEnum;
    /**
    * Should the emails normally sent during creation be sent in this case?
    */
    'sendEmails': boolean;
    /**
    * Should the user be automatically validated?
    */
    'autoValidateUserLogin': boolean;
    /**
    * Creates a token for the admin user. The accounting office could also use their tokens so you might not need this.
    */
    'createApiToken': boolean;
    /**
    * Should the invoices for this account be sent to the customer?
    */
    'sendInvoiceToCustomer': boolean;
    /**
    * The address to send the invoice to at the customer.
    */
    'customerInvoiceEmail': string;
    /**
    * The number of employees in the customer company. Is used for calculating prices and setting some default settings, i.e. approval settings for timesheet.
    */
    'numberOfEmployees': number;
    /**
    * Number of vouchers each year. Used to calculate prices.
    */
    'numberOfVouchers': CustomerTripletexAccount.NumberOfVouchersEnum;
    /**
    * The password of the administrator user.
    */
    'administratorPassword': string;
}

export namespace CustomerTripletexAccount {
    export enum AccountTypeEnum {
        TEST = <any> 'TEST',
        PAYING = <any> 'PAYING'
    }
    export enum TypeEnum {
        NONE = <any> 'NONE',
        ENK = <any> 'ENK',
        AS = <any> 'AS',
        NUF = <any> 'NUF',
        ANS = <any> 'ANS',
        DA = <any> 'DA',
        PRE = <any> 'PRE',
        KS = <any> 'KS',
        ASA = <any> 'ASA',
        BBL = <any> 'BBL',
        BRL = <any> 'BRL',
        GFS = <any> 'GFS',
        SPA = <any> 'SPA',
        SF = <any> 'SF',
        IKS = <any> 'IKS',
        KFFKF = <any> 'KF_FKF',
        FCD = <any> 'FCD',
        EOFG = <any> 'EOFG',
        BA = <any> 'BA',
        STI = <any> 'STI',
        ORG = <any> 'ORG',
        ESEK = <any> 'ESEK',
        SAM = <any> 'SAM',
        BO = <any> 'BO',
        VPFO = <any> 'VPFO',
        OS = <any> 'OS',
        Other = <any> 'Other'
    }
    export enum NumberOfVouchersEnum {
        _0100 = <any> 'INTERVAL_0_100',
        _101500 = <any> 'INTERVAL_101_500',
        _0500 = <any> 'INTERVAL_0_500',
        _5011000 = <any> 'INTERVAL_501_1000',
        _10012000 = <any> 'INTERVAL_1001_2000',
        _20013500 = <any> 'INTERVAL_2001_3500',
        _35015000 = <any> 'INTERVAL_3501_5000',
        _500110000 = <any> 'INTERVAL_5001_10000',
        UNLIMITED = <any> 'INTERVAL_UNLIMITED'
    }
}
export class Department {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'departmentNumber': string;
    'departmentManager': Employee;
}

export class Employee {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'firstName': string;
    'lastName': string;
    'employeeNumber': string;
    'dateOfBirth': string;
    'email': string;
    'phoneNumberMobile': string;
    'nationalIdentityNumber': string;
    'dnumber': string;
    'bankAccountNumber': string;
    /**
    * Define the employee's user type.<br>STANDARD: Reduced access. Users with limited system entitlements.<br>EXTENDED: Users can be given all system entitlements.<br>NO_ACCESS: User with no log on access.<br>Users with access to Tripletex must confirm the email address.
    */
    'userType': Employee.UserTypeEnum;
    /**
    * Determines if salary information can be registered on the user including hours, travel expenses and employee expenses. The user may also be selected as a project member on projects.
    */
    'allowInformationRegistration': boolean;
    /**
    * Address tied to the employee
    */
    'address': Address;
    'department': Department;
    /**
    * Employments tied to the employee
    */
    'employments': Array<Employment>;
}

export namespace Employee {
    export enum UserTypeEnum {
        STANDARD = <any> 'STANDARD',
        EXTENDED = <any> 'EXTENDED',
        NOACCESS = <any> 'NO_ACCESS'
    }
}
export class EmployeeToken {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'employee': Employee;
    'apiConsumer': ApiConsumer;
    'token': string;
    'expirationDate': string;
}

export class Employment {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'employee': Employee;
    /**
    * Existing employment ID used by the current accounting system
    */
    'employmentId': string;
    'startDate': string;
    'endDate': string;
    'division': number;
    'lastSalaryChangeDate': string;
    /**
    * Employment types tied to the employment
    */
    'employmentDetails': Array<EmploymentDetails>;
}

export class EmploymentDetails {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'employment': Employment;
    'date': string;
    /**
    * To find the right value to enter in this field, you could go to <br>GET /employee/employment/employmentType and select TYPE_OF_EMPLOYMENT_RELATIONSHIP in the dropdown.
    */
    'employmentType': number;
    /**
    * To find the right value to enter in this field, you could go to <br> GET /employee/employment/remunerationType and select REMUNERATION_TYPE in the dropdown.
    */
    'remunerationType': number;
    /**
    * To find the right value to enter in this field, you could go to GET /employee/employment/workingHoursScheme and select WORKING_HOURS_SCHEME in the dropdown.
    */
    'workingHoursScheme': number;
    /**
    * To find the right value to enter in this field, you could go to GET /employee/employment/occupationCode to get a list of valid ID's.
    */
    'occupationCode': number;
    'percentageOfFullTimeEquivalent': number;
    'annualSalary': number;
    'hourlyWage': number;
}

export class EmploymentType {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    /**
    * Defines the employment type option. 
    */
    'employmentType': EmploymentType.EmploymentTypeEnum;
    'nameNO': string;
    'code': string;
}

export namespace EmploymentType {
    export enum EmploymentTypeEnum {
        RELATIONSHIP = <any> 'TYPE_OF_EMPLOYMENT_RELATIONSHIP'
    }
}
export class Entitlement {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    /**
    * Employee which has this privilege
    */
    'employee': Employee;
    /**
    * Descriptive name for the privilege. Might change between releases.
    */
    'name': string;
    /**
    * Unique id for the type of privilege.
    */
    'entitlementId': number;
    /**
    * The company this role applies for
    */
    'customer': Company;
}

export class EventInfoDescription {
    'description': string;
    'payloadModel': string;
}

export class ImportConfigDTO {
    'onlyUsers': boolean;
    'skipUsers': boolean;
    'skipAccounts': boolean;
}

export class ImportReportDTO {
    'companyId': number;
    'companyName': string;
    'agreementNumber': string;
    'agreementType': string;
    'accountantCompanyId': number;
    'accountantAgreementNumber': string;
    'startDate': Date;
    'endDate': Date;
    'success': boolean;
    'config': ImportConfigDTO;
    'admins': Array<string>;
    'summary': { [key: string]: { [key: string]: number; }; };
    'errors': Array<Result>;
    'messages': Array<string>;
    'results': Array<Result>;
}

export class Inventory {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'number': string;
    'isMainInventory': boolean;
    'isInactive': boolean;
}

export class Invoice {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    /**
    * If value is set to 0, the invoice number will be generated.
    */
    'invoiceNumber': number;
    'invoiceDate': string;
    /**
    * The invoice customer
    */
    'customer': Customer;
    'invoiceDueDate': string;
    /**
    * KID - Kundeidentifikasjonsnummer.
    */
    'kid': string;
    'comment': string;
    /**
    * Related orders. Only one order per invoice is supported at the moment.
    */
    'orders': Array<Order>;
    /**
    * The invoice voucher.
    */
    'voucher': Voucher;
    /**
    * The delivery date.
    */
    'deliveryDate': string;
    /**
    * In the company’s currency, typically NOK.
    */
    'amount': number;
    /**
    * In the specified currency.
    */
    'amountCurrency': number;
    /**
    * Amount excluding VAT (NOK).
    */
    'amountExcludingVat': number;
    /**
    * Amount excluding VAT in the specified currency.
    */
    'amountExcludingVatCurrency': number;
    'currency': Currency;
    'isCreditNote': boolean;
    'ehfSendStatus': Invoice.EhfSendStatusEnum;
}

export namespace Invoice {
    export enum EhfSendStatusEnum {
        DONOTSEND = <any> 'DO_NOT_SEND',
        SEND = <any> 'SEND',
        SENT = <any> 'SENT',
        SENDFAILURERECIPIENTNOTFOUND = <any> 'SEND_FAILURE_RECIPIENT_NOT_FOUND'
    }
}
export class Job {
    'name': string;
    'group': string;
    'stateful': boolean;
    'interruptable': boolean;
    'jobDetail': JobDetailDTO;
    'triggers': Array<TriggerDTO>;
}

export class JobDetailDTO {
    'name': string;
    'group': string;
    'description': string;
    'jobclass': string;
    'jobData': { [key: string]: any; };
}

export class LeaveOfAbsence {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'employment': Employment;
    /**
    * Existing leave of absence ID used by the current accounting system
    */
    'leaveOfAbsenceId': string;
    'startDate': string;
    'endDate': string;
    'percentage': number;
    'isWageDeduction': boolean;
    'type': number;
}

export class LeaveOfAbsenceType {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    /**
    * Defines the leave of absence type option.
    */
    'leaveOfAbsenceType': LeaveOfAbsenceType.LeaveOfAbsenceTypeEnum;
    'nameNO': string;
    'code': string;
}

export namespace LeaveOfAbsenceType {
    export enum LeaveOfAbsenceTypeEnum {
        TYPE = <any> 'LEAVE_OF_ABSENCE_TYPE'
    }
}
export class LedgerAccount {
    'account': Account;
    'sumAmount': number;
    'currency': Currency;
    'sumAmountCurrency': number;
    'openingBalance': number;
    'openingBalanceCurrency': number;
    'closingBalance': number;
    'closingBalanceCurrency': number;
    /**
    * Link to postings on this account.
    */
    'postings': Array<Posting>;
}

export class Link {
    'rel': string;
    'type': Link.TypeEnum;
    'href': string;
}

export namespace Link {
    export enum TypeEnum {
        POST = <any> 'POST',
        PUT = <any> 'PUT',
        GET = <any> 'GET',
        DELETE = <any> 'DELETE'
    }
}
export class ListResponseAccommodationAllowance {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<AccommodationAllowance>;
}

export class ListResponseAccount {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Account>;
}

export class ListResponseAccountingPeriod {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<AccountingPeriod>;
}

export class ListResponseActivity {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Activity>;
}

export class ListResponseAddress {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Address>;
}

export class ListResponseAnnualAccount {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<AnnualAccount>;
}

export class ListResponseBank {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Bank>;
}

export class ListResponseBankReconciliation {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<BankReconciliation>;
}

export class ListResponseBankReconciliationMatch {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<BankReconciliationMatch>;
}

export class ListResponseBankReconciliationPaymentType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<BankReconciliationPaymentType>;
}

export class ListResponseBankStatement {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<BankStatement>;
}

export class ListResponseBankTransaction {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<BankTransaction>;
}

export class ListResponseBanner {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Banner>;
}

export class ListResponseCloseGroup {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<CloseGroup>;
}

export class ListResponseCompany {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Company>;
}

export class ListResponseContact {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Contact>;
}

export class ListResponseCost {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Cost>;
}

export class ListResponseCountry {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Country>;
}

export class ListResponseCurrency {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Currency>;
}

export class ListResponseCustomer {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Customer>;
}

export class ListResponseCustomerCategory {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<CustomerCategory>;
}

export class ListResponseDepartment {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Department>;
}

export class ListResponseEmployee {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Employee>;
}

export class ListResponseEmployment {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Employment>;
}

export class ListResponseEmploymentDetails {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<EmploymentDetails>;
}

export class ListResponseEmploymentType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<EmploymentType>;
}

export class ListResponseEntitlement {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Entitlement>;
}

export class ListResponseInventory {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Inventory>;
}

export class ListResponseInvoice {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Invoice>;
}

export class ListResponseLeaveOfAbsenceType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<LeaveOfAbsenceType>;
}

export class ListResponseLedgerAccount {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<LedgerAccount>;
}

export class ListResponseMileageAllowance {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<MileageAllowance>;
}

export class ListResponseNotification {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Notification>;
}

export class ListResponseOccupationCode {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<OccupationCode>;
}

export class ListResponseOrder {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Order>;
}

export class ListResponseOrderLine {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<OrderLine>;
}

export class ListResponsePassenger {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Passenger>;
}

export class ListResponsePaymentType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<PaymentType>;
}

export class ListResponsePaymentTypeOut {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<PaymentTypeOut>;
}

export class ListResponsePayslip {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Payslip>;
}

export class ListResponsePerDiemCompensation {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<PerDiemCompensation>;
}

export class ListResponsePosting {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Posting>;
}

export class ListResponseProduct {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Product>;
}

export class ListResponseProductUnit {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<ProductUnit>;
}

export class ListResponseProject {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Project>;
}

export class ListResponseProjectCategory {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<ProjectCategory>;
}

export class ListResponseProspect {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Prospect>;
}

export class ListResponseRemunerationType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<RemunerationType>;
}

export class ListResponseSalarySpecification {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<SalarySpecification>;
}

export class ListResponseSalaryTransaction {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<SalaryTransaction>;
}

export class ListResponseSalaryType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<SalaryType>;
}

export class ListResponseStandardTime {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<StandardTime>;
}

export class ListResponseSubscription {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Subscription>;
}

export class ListResponseSupplier {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Supplier>;
}

export class ListResponseSupplierBalance {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<SupplierBalance>;
}

export class ListResponseTimeClock {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<TimeClock>;
}

export class ListResponseTimesheetEntry {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<TimesheetEntry>;
}

export class ListResponseTravelCostCategory {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<TravelCostCategory>;
}

export class ListResponseTravelExpense {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<TravelExpense>;
}

export class ListResponseTravelExpenseRate {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<TravelExpenseRate>;
}

export class ListResponseTravelExpenseRateCategory {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<TravelExpenseRateCategory>;
}

export class ListResponseTravelExpenseRateCategoryGroup {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<TravelExpenseRateCategoryGroup>;
}

export class ListResponseTravelPaymentType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<TravelPaymentType>;
}

export class ListResponseVatType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<VatType>;
}

export class ListResponseVoucher {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Voucher>;
}

export class ListResponseVoucherType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<VoucherType>;
}

export class ListResponseWeeklyStatus {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<WeeklyStatus>;
}

export class ListResponseWorkingHoursScheme {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<WorkingHoursScheme>;
}

export class LoggedInUserInfoDTO {
    'employeeId': number;
    'employee': Employee;
    'companyId': number;
    'company': Company;
    'language': string;
}

export class MaventaEventDataDTO {
    'invoiceId': string;
    'invoiceNumber': string;
    'destination': string;
    'recipientName': string;
    'recipientBid': string;
    'errorMessage': string;
}

export class MaventaStatusDTO {
    'event': string;
    'companyId': string;
    'eventTimestamp': Date;
    'eventData': MaventaEventDataDTO;
}

export class MileageAllowance {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'travelExpense': TravelExpense;
    'rateType': TravelExpenseRate;
    'rateCategory': TravelExpenseRateCategory;
    'date': string;
    'departureLocation': string;
    'destination': string;
    'km': number;
    'rate': number;
    'amount': number;
    'isCompanyCar': boolean;
    /**
    * Link to individual passengers.
    */
    'passengers': Array<Passenger>;
}

export class MobileAppLogin {
    /**
    * Users username (email)
    */
    'username': string;
    /**
    * Users password
    */
    'password': string;
    /**
    * App secret (temporary security mechanism during testing)
    */
    'appSecret': string;
    /**
    * Expiration date for the combined token
    */
    'expirationDate': string;
}

export class Modules {
    /**
    * Not readable. Only for input.
    */
    'accounting': boolean;
    /**
    * Not readable. Only for input.
    */
    'invoice': boolean;
    /**
    * Not readable. Only for input.
    */
    'salary': boolean;
    /**
    * Not readable. Only for input.
    */
    'project': boolean;
    'ocr': boolean;
    'remit': boolean;
    /**
    * Not readable. Only for input.
    */
    'electronicVouchers': boolean;
    /**
    * Not readable. Only for input.
    */
    'electro': boolean;
    /**
    * Not readable. Only for input.
    */
    'vvs': boolean;
    'agro': boolean;
    /**
    * Only readable for now
    */
    'approveVoucher': boolean;
}

export class MonthlyStatus {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'employee': Employee;
    'date': string;
    'hoursPaid': number;
    'vacationTransferred': number;
    'vacationPaid': number;
    'wagePayment': Payslip;
    'completed': boolean;
    'approved': boolean;
    'approvedBy': Employee;
    'approvedDate': string;
}

export class Notification {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'date': string;
    'title': string;
    'message': string;
    'type': string;
    'link': string;
}

export class OccupationCode {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'nameNO': string;
    'code': string;
}

export class Order {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'customer': Customer;
    'contact': Contact;
    'attn': Contact;
    'receiverEmail': string;
    'overdueNoticeEmail': string;
    'number': string;
    'reference': string;
    /**
    * If the contact is not an employee
    */
    'ourContact': Contact;
    /**
    * If the contact is an employee
    */
    'ourContactEmployee': Employee;
    'department': Department;
    'orderDate': string;
    'project': Project;
    'invoiceComment': string;
    'currency': Currency;
    /**
    * Number of days/months in which invoices created from this order is due
    */
    'invoicesDueIn': number;
    /**
    * Set the time unit of invoicesDueIn. The special case RECURRING_DAY_OF_MONTH enables the due date to be fixed to a specific day of the month, in this case the fixed due date will automatically be set as standard on all invoices created from this order. Note that when RECURRING_DAY_OF_MONTH is set, the due date will be set to the last day of month if \"31\" is set in invoicesDueIn.
    */
    'invoicesDueInType': Order.InvoicesDueInTypeEnum;
    /**
    * Show account statement - open posts on invoices created from this order
    */
    'isShowOpenPostsOnInvoices': boolean;
    /**
    * Denotes if this order is closed. A closed order can no longer be invoiced unless it is opened again.
    */
    'isClosed': boolean;
    'deliveryDate': string;
    /**
    * Delivery address of this order. This can be a new or existing address
    */
    'deliveryAddress': Address;
    'deliveryComment': string;
    'isPrioritizeAmountsIncludingVat': boolean;
    'orderLineSorting': Order.OrderLineSortingEnum;
    /**
    * Order lines tied to the order
    */
    'orderLines': Array<OrderLine>;
    /**
    * If true, the order is a subscription, which enables periodical invoicing of order lines
    */
    'isSubscription': boolean;
    /**
    * Number of months/years the subscription shall run
    */
    'subscriptionDuration': number;
    /**
    * The time unit of subscriptionDuration
    */
    'subscriptionDurationType': Order.SubscriptionDurationTypeEnum;
    /**
    * Number of periods on each invoice
    */
    'subscriptionPeriodsOnInvoice': number;
    /**
    * The time unit of subscriptionPeriodsOnInvoice
    */
    'subscriptionPeriodsOnInvoiceType': Order.SubscriptionPeriodsOnInvoiceTypeEnum;
    /**
    * Invoicing in advance/in arrears
    */
    'subscriptionInvoicingTimeInAdvanceOrArrears': Order.SubscriptionInvoicingTimeInAdvanceOrArrearsEnum;
    /**
    * Number of days/months invoicing in advance/in arrears
    */
    'subscriptionInvoicingTime': number;
    /**
    * The time unit of subscriptionInvoicingTime
    */
    'subscriptionInvoicingTimeType': Order.SubscriptionInvoicingTimeTypeEnum;
    /**
    * Automatic invoicing. Starts when the subscription is approved
    */
    'isSubscriptionAutoInvoicing': boolean;
}

export namespace Order {
    export enum InvoicesDueInTypeEnum {
        DAYS = <any> 'DAYS',
        MONTHS = <any> 'MONTHS',
        RECURRINGDAYOFMONTH = <any> 'RECURRING_DAY_OF_MONTH'
    }
    export enum OrderLineSortingEnum {
        ID = <any> 'ID',
        PRODUCT = <any> 'PRODUCT',
        CUSTOM = <any> 'CUSTOM'
    }
    export enum SubscriptionDurationTypeEnum {
        MONTHS = <any> 'MONTHS',
        YEAR = <any> 'YEAR'
    }
    export enum SubscriptionPeriodsOnInvoiceTypeEnum {
        MONTHS = <any> 'MONTHS'
    }
    export enum SubscriptionInvoicingTimeInAdvanceOrArrearsEnum {
        ADVANCE = <any> 'ADVANCE',
        ARREARS = <any> 'ARREARS'
    }
    export enum SubscriptionInvoicingTimeTypeEnum {
        DAYS = <any> 'DAYS',
        MONTHS = <any> 'MONTHS'
    }
}
export class OrderLine {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'order': Order;
    'product': Product;
    'inventory': Inventory;
    'description': string;
    'count': number;
    /**
    * Unit price purchase (cost) excluding VAT in the order's currency
    */
    'unitCostCurrency': number;
    /**
    * Unit price of purchase excluding VAT in the order's currency
    */
    'unitPriceExcludingVatCurrency': number;
    /**
    * Unit price of purchase including VAT in the order's currency
    */
    'unitPriceIncludingVatCurrency': number;
    /**
    * The order line's currency. Determined by the order's currency.
    */
    'currency': Currency;
    /**
    * Markup given as a percentage (%)
    */
    'markup': number;
    /**
    * Discount given as a percentage (%)
    */
    'discount': number;
    'vatType': VatType;
    /**
    * Total amount on order line excluding VAT in the order's currency
    */
    'amountExcludingVatCurrency': number;
    /**
    * Total amount on order line including VAT in the order's currency
    */
    'amountIncludingVatCurrency': number;
    'isSubscription': boolean;
    'subscriptionPeriodStart': string;
    'subscriptionPeriodEnd': string;
}

export class Passenger {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'mileageAllowance': MileageAllowance;
}

export class PaymentType {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'description': string;
    'debitAccount': Account;
    'creditAccount': Account;
    'vatType': VatType;
    'customer': Customer;
    'supplier': Supplier;
}

export class PaymentTypeOut {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'description': string;
    /**
    * true if it should be a deduction from the wage. The module PROVISIONSALARY is required to both view and change this setting
    */
    'isBruttoWageDeduction': boolean;
    'creditAccount': Account;
    /**
    * true if the payment type should be available in supplier invoices
    */
    'showIncomingInvoice': boolean;
    /**
    * true if the payment type should be available in wage payments. The wage module is required to both view and change this setting
    */
    'showWagePayment': boolean;
    /**
    * true if the payment type should be available in vat returns
    */
    'showVatReturns': boolean;
    /**
    * true if the payment type should be available in period transactionsThe wage module is required to both view and change this setting
    */
    'showWagePeriodTransaction': boolean;
    /**
    * true if a separate voucher is required
    */
    'requiresSeparateVoucher': boolean;
    /**
    * determines in which order the types should be listed. No 1 is listed first
    */
    'sequence': number;
    /**
    * true if the payment type should be hidden from available payment types
    */
    'isInactive': boolean;
}

export class Payslip {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'transaction': SalaryTransaction;
    'employee': Employee;
    /**
    * Voucher date.
    */
    'date': string;
    'year': number;
    'month': number;
    /**
    * Link to salary specifications.
    */
    'specifications': Array<SalarySpecification>;
    'vacationAllowanceAmount': number;
    'grossAmount': number;
    'amount': number;
}

export class PerDiemCompensation {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'travelExpense': TravelExpense;
    'rateType': TravelExpenseRate;
    'rateCategory': TravelExpenseRateCategory;
    'zone': string;
    /**
    * Set what sort of accommodation was had overnight.
    */
    'overnightAccommodation': PerDiemCompensation.OvernightAccommodationEnum;
    'location': string;
    'address': string;
    'count': number;
    'rate': number;
    'amount': number;
    'isDeductionForBreakfast': boolean;
    'isDeductionForLunch': boolean;
    'isDeductionForDinner': boolean;
}

export namespace PerDiemCompensation {
    export enum OvernightAccommodationEnum {
        NONE = <any> 'NONE',
        HOTEL = <any> 'HOTEL',
        BOARDINGHOUSEWITHOUTCOOKING = <any> 'BOARDING_HOUSE_WITHOUT_COOKING',
        BOARDINGHOUSEWITHCOOKING = <any> 'BOARDING_HOUSE_WITH_COOKING'
    }
}
export class Posting {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'voucher': Voucher;
    'date': string;
    'description': string;
    'account': Account;
    'customer': Customer;
    'supplier': Supplier;
    'employee': Employee;
    'project': Project;
    'product': Product;
    'department': Department;
    'vatType': VatType;
    'amount': number;
    'amountCurrency': number;
    'amountGross': number;
    'amountGrossCurrency': number;
    'currency': Currency;
    'closeGroup': CloseGroup;
    'invoiceNumber': string;
    'termOfPayment': string;
    'row': number;
    'systemGenerated': boolean;
}

export class Product {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'number': string;
    /**
    * Price purchase (cost) excluding VAT in the product's currency
    */
    'costExcludingVatCurrency': number;
    /**
    * Price of purchase excluding VAT in the product's currency
    */
    'priceExcludingVatCurrency': number;
    /**
    * Price of purchase including VAT in the product's currency
    */
    'priceIncludingVatCurrency': number;
    'isInactive': boolean;
    'productUnit': ProductUnit;
    'isStockItem': boolean;
    'stockOfGoods': number;
    'vatType': VatType;
    'currency': Currency;
    'department': Department;
    'account': Account;
}

export class ProductUnit {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'nameShort': string;
    'commonCode': string;
}

export class Project {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'number': string;
    'description': string;
    'projectManager': Employee;
    'department': Department;
    'mainProject': Project;
    'startDate': string;
    'endDate': string;
    /**
    * The project's customer
    */
    'customer': Customer;
    'isClosed': boolean;
    /**
    * Must be set to true.
    */
    'isInternal': boolean;
    'isOffer': boolean;
    'projectCategory': ProjectCategory;
    /**
    * Defines project name presentation in overviews.
    */
    'displayNameFormat': Project.DisplayNameFormatEnum;
    'externalAccountsNumber': string;
}

export namespace Project {
    export enum DisplayNameFormatEnum {
        STANDARD = <any> 'NAME_STANDARD',
        INCLCUSTOMERNAME = <any> 'NAME_INCL_CUSTOMER_NAME',
        INCLPARENTNAME = <any> 'NAME_INCL_PARENT_NAME',
        INCLPARENTNUMBER = <any> 'NAME_INCL_PARENT_NUMBER',
        INCLPARENTNAMEANDNUMBER = <any> 'NAME_INCL_PARENT_NAME_AND_NUMBER'
    }
}
export class ProjectCategory {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'number': string;
    'description': string;
}

export class Prospect {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'description': string;
    'createdDate': string;
    'customer': Customer;
    'salesEmployee': Employee;
    'isClosed': boolean;
    'closedReason': number;
    'closedDate': string;
    'competitor': string;
    'prospectType': number;
    /**
    * The project connected to this prospect.
    */
    'project': Project;
    /**
    * The project offer connected to this prospect.
    */
    'projectOffer': Project;
    /**
    * The estimated start date for income on the prospect.
    */
    'finalIncomeDate': string;
    /**
    * The estimated startup fee on this prospect.
    */
    'finalInitialValue': number;
    /**
    * The estimated monthly fee on this prospect.
    */
    'finalMonthlyValue': number;
    /**
    * Tripletex specific.
    */
    'finalAdditionalServicesValue': number;
    /**
    * The estimated total fee on this prospect.
    */
    'totalValue': number;
}

export class RemunerationType {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    /**
    * Defines the remuneration type option. 
    */
    'remunerationType': RemunerationType.RemunerationTypeEnum;
    'nameNO': string;
    'code': string;
}

export namespace RemunerationType {
    export enum RemunerationTypeEnum {
        TYPE = <any> 'REMUNERATION_TYPE'
    }
}
export class ResponseWrapperAccommodationAllowance {
    'value': AccommodationAllowance;
}

export class ResponseWrapperAccount {
    'value': Account;
}

export class ResponseWrapperAccountingPeriod {
    'value': AccountingPeriod;
}

export class ResponseWrapperActivity {
    'value': Activity;
}

export class ResponseWrapperAddress {
    'value': Address;
}

export class ResponseWrapperAnnualAccount {
    'value': AnnualAccount;
}

export class ResponseWrapperApiConsumer {
    'value': ApiConsumer;
}

export class ResponseWrapperAppSpecific {
    'value': AppSpecific;
}

export class ResponseWrapperBankReconciliation {
    'value': BankReconciliation;
}

export class ResponseWrapperBankReconciliationMatch {
    'value': BankReconciliationMatch;
}

export class ResponseWrapperBankReconciliationPaymentType {
    'value': BankReconciliationPaymentType;
}

export class ResponseWrapperBankStatement {
    'value': BankStatement;
}

export class ResponseWrapperBankTransaction {
    'value': BankTransaction;
}

export class ResponseWrapperBanner {
    'value': Banner;
}

export class ResponseWrapperBoolean {
    'value': boolean;
}

export class ResponseWrapperCloseGroup {
    'value': CloseGroup;
}

export class ResponseWrapperCompany {
    'value': Company;
}

export class ResponseWrapperConsumerToken {
    'value': ConsumerToken;
}

export class ResponseWrapperContact {
    'value': Contact;
}

export class ResponseWrapperCost {
    'value': Cost;
}

export class ResponseWrapperCountry {
    'value': Country;
}

export class ResponseWrapperCurrency {
    'value': Currency;
}

export class ResponseWrapperCustomer {
    'value': Customer;
}

export class ResponseWrapperCustomerCategory {
    'value': CustomerCategory;
}

export class ResponseWrapperDepartment {
    'value': Department;
}

export class ResponseWrapperDouble {
    'value': number;
}

export class ResponseWrapperEmployee {
    'value': Employee;
}

export class ResponseWrapperEmployeeToken {
    'value': EmployeeToken;
}

export class ResponseWrapperEmployment {
    'value': Employment;
}

export class ResponseWrapperEmploymentDetails {
    'value': EmploymentDetails;
}

export class ResponseWrapperEntitlement {
    'value': Entitlement;
}

export class ResponseWrapperInteger {
    'value': number;
}

export class ResponseWrapperInventory {
    'value': Inventory;
}

export class ResponseWrapperInvoice {
    'value': Invoice;
}

export class ResponseWrapperLeaveOfAbsence {
    'value': LeaveOfAbsence;
}

export class ResponseWrapperListJob {
    'value': Array<Job>;
}

export class ResponseWrapperLoggedInUserInfoDTO {
    'value': LoggedInUserInfoDTO;
}

export class ResponseWrapperMapStringEventInfoDescription {
    'value': { [key: string]: EventInfoDescription; };
}

export class ResponseWrapperMileageAllowance {
    'value': MileageAllowance;
}

export class ResponseWrapperModules {
    'value': Modules;
}

export class ResponseWrapperMonthlyStatus {
    'value': MonthlyStatus;
}

export class ResponseWrapperNotification {
    'value': Notification;
}

export class ResponseWrapperObject {
    'value': any;
}

export class ResponseWrapperOrder {
    'value': Order;
}

export class ResponseWrapperOrderLine {
    'value': OrderLine;
}

export class ResponseWrapperPassenger {
    'value': Passenger;
}

export class ResponseWrapperPaymentType {
    'value': PaymentType;
}

export class ResponseWrapperPaymentTypeOut {
    'value': PaymentTypeOut;
}

export class ResponseWrapperPayslip {
    'value': Payslip;
}

export class ResponseWrapperPerDiemCompensation {
    'value': PerDiemCompensation;
}

export class ResponseWrapperPosting {
    'value': Posting;
}

export class ResponseWrapperProduct {
    'value': Product;
}

export class ResponseWrapperProductUnit {
    'value': ProductUnit;
}

export class ResponseWrapperProject {
    'value': Project;
}

export class ResponseWrapperProjectCategory {
    'value': ProjectCategory;
}

export class ResponseWrapperProspect {
    'value': Prospect;
}

export class ResponseWrapperSalarySpecification {
    'value': SalarySpecification;
}

export class ResponseWrapperSalaryTransaction {
    'value': SalaryTransaction;
}

export class ResponseWrapperSalaryType {
    'value': SalaryType;
}

export class ResponseWrapperSessionToken {
    'value': SessionToken;
}

export class ResponseWrapperStandardTime {
    'value': StandardTime;
}

export class ResponseWrapperString {
    'value': string;
}

export class ResponseWrapperSubscription {
    'value': Subscription;
}

export class ResponseWrapperSupplier {
    'value': Supplier;
}

export class ResponseWrapperSystemMessage {
    'value': SystemMessage;
}

export class ResponseWrapperTimeClock {
    'value': TimeClock;
}

export class ResponseWrapperTimesheetEntry {
    'value': TimesheetEntry;
}

export class ResponseWrapperTravelCostCategory {
    'value': TravelCostCategory;
}

export class ResponseWrapperTravelExpense {
    'value': TravelExpense;
}

export class ResponseWrapperTravelExpenseRate {
    'value': TravelExpenseRate;
}

export class ResponseWrapperTravelExpenseRateCategory {
    'value': TravelExpenseRateCategory;
}

export class ResponseWrapperTravelExpenseRateCategoryGroup {
    'value': TravelExpenseRateCategoryGroup;
}

export class ResponseWrapperTravelPaymentType {
    'value': TravelPaymentType;
}

export class ResponseWrapperTripletexAccountReturn {
    'value': TripletexAccountReturn;
}

export class ResponseWrapperUnreadCountDTO {
    'value': UnreadCountDTO;
}

export class ResponseWrapperVatType {
    'value': VatType;
}

export class ResponseWrapperVoucher {
    'value': Voucher;
}

export class ResponseWrapperVoucherType {
    'value': VoucherType;
}

export class ResponseWrapperWeeklyStatus {
    'value': WeeklyStatus;
}

export class Result {
    'file': Result.FileEnum;
    'line': number;
    'type': Result.TypeEnum;
    'number': string;
    'dbId': number;
    'input': { [key: string]: any; };
    'output': { [key: string]: any; };
    'log': Array<string>;
    'record': CSVRecord;
    'dto': AbstractDTO;
}

export namespace Result {
    export enum FileEnum {
        DEPARTMENTS = <any> 'DEPARTMENTS',
        EMPLOYEES = <any> 'EMPLOYEES',
        VATCODES = <any> 'VATCODES',
        ACCOUNTS = <any> 'ACCOUNTS',
        CUSTOMERS = <any> 'CUSTOMERS',
        CUSTOMERSCATEGORIES = <any> 'CUSTOMERS_CATEGORIES',
        VENDORS = <any> 'VENDORS',
        VENDORSCATEGORIES = <any> 'VENDORS_CATEGORIES',
        CONTACTS = <any> 'CONTACTS',
        DELIVERYADDRESSES = <any> 'DELIVERY_ADDRESSES',
        PRODUCTS = <any> 'PRODUCTS',
        PRODUCTSCATEGORIES = <any> 'PRODUCTS_CATEGORIES',
        PROJECTS = <any> 'PROJECTS',
        PROJECTSCATEGORIES = <any> 'PROJECTS_CATEGORIES'
    }
    export enum TypeEnum {
        IGNORED = <any> 'IGNORED',
        UPDATED = <any> 'UPDATED',
        CREATED = <any> 'CREATED',
        ERROR = <any> 'ERROR'
    }
}
export class SalarySpecification {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'rate': number;
    'count': number;
    'project': Project;
    'department': Department;
    'salaryType': SalaryType;
    'payslip': Payslip;
    'employee': Employee;
    'description': string;
    'year': number;
    'month': number;
    'amount': number;
}

export class SalaryTransaction {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    /**
    * Voucher date.
    */
    'date': string;
    'year': number;
    'month': number;
    /**
    * Link to individual payslip objects.
    */
    'payslips': Array<Payslip>;
}

export class SalaryType {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'number': string;
    'name': string;
    'description': string;
}

export class SessionToken {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'consumerToken': ConsumerToken;
    'employeeToken': EmployeeToken;
    'expirationDate': string;
    'token': string;
    'encryptionKey': string;
}

export class SmartScanWebhook {
    'self': string;
    'documentId': string;
    'clientDocumentId': string;
}

export class StandardTime {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'employee': Employee;
    'fromDate': string;
    'hoursPerDay': number;
}

export class Subscription {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    /**
    * Event name (from v2/event) you wish to subscribe to. Form should be: *subject.verb*.
    */
    'event': string;
    /**
    * The callback URL used for subscriptions (including authentication tokens). Must be absolute and use HTTPS.
    */
    'targetUrl': string;
    /**
    * The fields in the object delivered with the notification callback, nested as in other API calls.
    */
    'fields': string;
    /**
    * The status of the subscription.
    */
    'status': Subscription.StatusEnum;
}

export namespace Subscription {
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        DISABLED = <any> 'DISABLED',
        DISABLEDTOOMANYERRORS = <any> 'DISABLED_TOO_MANY_ERRORS',
        DISABLEDRATELIMITEXCEEDED = <any> 'DISABLED_RATE_LIMIT_EXCEEDED',
        DISABLEDMISUSE = <any> 'DISABLED_MISUSE'
    }
}
export class Supplier {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'organizationNumber': string;
    'supplierNumber': number;
    'customerNumber': number;
    'isSupplier': boolean;
    'isCustomer': boolean;
    'isInactive': boolean;
    'email': string;
    /**
    * List of the bank account numbers for this supplier.  Norwegian bank account numbers only.
    */
    'bankAccounts': Array<string>;
    'invoiceEmail': string;
    'phoneNumber': string;
    'phoneNumberMobile': string;
    'description': string;
    'isPrivateIndividual': boolean;
    'accountManager': Employee;
    'postalAddress': Address;
    'physicalAddress': Address;
    'deliveryAddress': Address;
    /**
    * Category 1 of this supplier
    */
    'category1': CustomerCategory;
    /**
    * Category 2 of this supplier
    */
    'category2': CustomerCategory;
    /**
    * Category 3 of this supplier
    */
    'category3': CustomerCategory;
}

export class SupplierBalance {
    'supplier': Supplier;
    'balanceIn': number;
    'balanceChange': number;
    'balanceOut': number;
    /**
    * Currencies that have been used prior to this period, for the given filter
    */
    'balanceInCurrencies': Array<Currency>;
    'sumAmountNegative': number;
}

export class SystemMessage {
    'message': string;
}

export class TimeClock {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'employee': Employee;
    'project': Project;
    'activity': Activity;
    'timesheetEntry': TimesheetEntry;
    'date': string;
    'timeStart': string;
    'timeStop': string;
    'hoursStart': number;
}

export class TimesheetEntry {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'project': Project;
    'activity': Activity;
    'date': string;
    'hours': number;
    'chargeableHours': number;
    'employee': Employee;
    /**
    * Link to stop watches on this hour.
    */
    'timeClocks': Array<TimeClock>;
    'comment': string;
    /**
    * Indicates if the hour can be changed.
    */
    'locked': boolean;
    'chargeable': boolean;
}

export class TimesheetEntrySearchResponse {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<TimesheetEntry>;
    'sumAllHours': number;
}

export class TravelCostCategory {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'description': string;
    'account': Account;
    'vatType': VatType;
    'isVatLocked': boolean;
    'showOnTravelExpenses': boolean;
    'showOnEmployeeExpenses': boolean;
    'isInactive': boolean;
}

export class TravelDetails {
    'isForeignTravel': boolean;
    'isDayTrip': boolean;
    'isCompensationFromRates': boolean;
    'departureDate': string;
    'returnDate': string;
    'detailedJourneyDescription': string;
    'departureFrom': string;
    'destination': string;
    'departureTime': string;
    'returnTime': string;
    'purpose': string;
}

export class TravelExpense {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'project': Project;
    'employee': Employee;
    'approvedBy': Employee;
    'completedBy': Employee;
    'department': Department;
    'payslip': Payslip;
    'vatType': VatType;
    'paymentCurrency': Currency;
    'travelDetails': TravelDetails;
    'isCompleted': boolean;
    'isApproved': boolean;
    'isChargeable': boolean;
    'isFixedInvoicedAmount': boolean;
    'isIncludeAttachedReceiptsWhenReinvoicing': boolean;
    'completedDate': string;
    'approvedDate': string;
    'date': string;
    'travelAdvance': number;
    'fixedInvoicedAmount': number;
    'amount': number;
    'lowRateVAT': number;
    'mediumRateVAT': number;
    'highRateVAT': number;
    'paymentAmount': number;
    'paymentAmountCurrency': number;
    'number': number;
    'title': string;
    /**
    * Link to individual per diem compensations.
    */
    'perDiemCompensations': Array<PerDiemCompensation>;
    /**
    * Link to individual mileage allowances.
    */
    'mileageAllowances': Array<MileageAllowance>;
    /**
    * Link to individual accommodation allowances.
    */
    'accommodationAllowances': Array<AccommodationAllowance>;
    /**
    * Link to individual costs.
    */
    'costs': Array<Cost>;
    'attachmentCount': number;
    'state': TravelExpense.StateEnum;
    'actions': Array<Link>;
}

export namespace TravelExpense {
    export enum StateEnum {
        ALL = <any> 'ALL',
        OPEN = <any> 'OPEN',
        APPROVED = <any> 'APPROVED',
        SALARYPAID = <any> 'SALARY_PAID',
        DELIVERED = <any> 'DELIVERED'
    }
}
export class TravelExpenseRate {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'rateCategory': TravelExpenseRateCategory;
    'zone': string;
    'rate': number;
    'breakfastDeductionRate': number;
    'lunchDeductionRate': number;
    'dinnerDeductionRate': number;
}

export class TravelExpenseRateCategory {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'ameldingWageCode': number;
    'wageCodeNumber': string;
    'isValidDayTrip': boolean;
    'isValidAccommodation': boolean;
    'isValidForeignTravel': boolean;
    'isRequiresZone': boolean;
    'isRequiresOvernightAccommodation': boolean;
    'fromDate': string;
    'toDate': string;
    'type': TravelExpenseRateCategory.TypeEnum;
    'validDomestic': boolean;
}

export namespace TravelExpenseRateCategory {
    export enum TypeEnum {
        PERDIEM = <any> 'PER_DIEM',
        ACCOMMODATIONALLOWANCE = <any> 'ACCOMMODATION_ALLOWANCE',
        MILEAGEALLOWANCE = <any> 'MILEAGE_ALLOWANCE'
    }
}
export class TravelExpenseRateCategoryGroup {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'isForeignTravel': boolean;
    'fromDate': string;
    'toDate': string;
}

export class TravelPaymentType {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'description': string;
    'account': Account;
    'showOnTravelExpenses': boolean;
    'showOnEmployeeExpenses': boolean;
    'isInactive': boolean;
}

export class TriggerDTO {
    'calendarName': string;
    'description': string;
    'name': string;
    'nextFireTime': Date;
    'previousFireTime': Date;
    'state': string;
}

export class TripletexAccount {
    /**
    * Information about the company to create. Supply as much info as you have, but at least name, type and address.
    */
    'company': Company;
    /**
    * Employee to create. Department on this object will also be created if supplied. If null a dummy user and department will be created instead
    */
    'administrator': Employee;
    /**
    * Is this a test account or a paying account?
    */
    'accountType': TripletexAccount.AccountTypeEnum;
    /**
    * Modules (functionality in the application) to activate for the newly created account. Some modules have extra costs.
    */
    'modules': Modules;
    /**
    * Password for the administrator user to create. Not a part of the administrator employee object since this is a value that never can be read (it is salted and hashed before storing)
    */
    'administratorPassword': string;
    /**
    * Should the regular creation emails be sent to the company created and its users? If false you probably want to set autoValidateUserLogin to true
    */
    'sendEmails': boolean;
    /**
    * If true, the users created will be allowed to log in without validating their email address. ONLY USE THIS IF YOU ALREADY HAVE VALIDATED THE USER EMAILS.
    */
    'autoValidateUserLogin': boolean;
    /**
    * Create an API token for the administrator user for the consumer token used during this call. The token will be returned in the response.
    */
    'createAdministratorApiToken': boolean;
    /**
    * Create an API token for the company to use to call their clients, only possible for accounting and auditor accounts. The token will be returned in the response.
    */
    'createCompanyOwnedApiToken': boolean;
    /**
    * Should the company we are creating be able to create new Tripletex accounts?
    */
    'mayCreateTripletexAccounts': boolean;
    /**
    * Used to calculate prices.
    */
    'numberOfVouchers': TripletexAccount.NumberOfVouchersEnum;
    'auditor': boolean;
    'reseller': boolean;
    'accountingOffice': boolean;
}

export namespace TripletexAccount {
    export enum AccountTypeEnum {
        TEST = <any> 'TEST',
        PAYING = <any> 'PAYING'
    }
    export enum NumberOfVouchersEnum {
        _0100 = <any> 'INTERVAL_0_100',
        _101500 = <any> 'INTERVAL_101_500',
        _0500 = <any> 'INTERVAL_0_500',
        _5011000 = <any> 'INTERVAL_501_1000',
        _10012000 = <any> 'INTERVAL_1001_2000',
        _20013500 = <any> 'INTERVAL_2001_3500',
        _35015000 = <any> 'INTERVAL_3501_5000',
        _500110000 = <any> 'INTERVAL_5001_10000',
        UNLIMITED = <any> 'INTERVAL_UNLIMITED'
    }
}
export class TripletexAccountReturn {
    'company': Company;
    'administrator': Employee;
    'administratorApiToken': EmployeeToken;
    'companyOwnedApiToken': EmployeeToken;
    'companyOwnedApiTokenRobotId': number;
}

export class UnreadCountDTO {
    'count': number;
    'readCursor': number;
}

export class VNTCStatusDTO {
    'messageId': string;
    'externalSenderId': string;
    'externalMessageId': string;
    'partCount': number;
    'messageStatus': string;
}

export class VatType {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
    'number': string;
    'percentage': number;
}

export class Voucher {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'date': string;
    /**
    * System generated number that cannot be changed.
    */
    'number': number;
    'year': number;
    'description': string;
    'voucherType': VoucherType;
    'reverseVoucher': Voucher;
    'postings': Array<Posting>;
}

export class VoucherSearchResponse {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Voucher>;
    'totalNumberOfPostings': number;
}

export class VoucherType {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'name': string;
}

export class WeeklyStatus {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    'employee': Employee;
    'year': number;
    'week': number;
    'completed': boolean;
    'approved': boolean;
    'approvedBy': Employee;
    'approvedDate': string;
}

export class WorkingHoursScheme {
    'id': number;
    'version': number;
    'changes': Array<Change>;
    'url': string;
    /**
    * Defines the working hours scheme option.
    */
    'workingHoursScheme': WorkingHoursScheme.WorkingHoursSchemeEnum;
    'nameNO': string;
    'code': string;
}

export namespace WorkingHoursScheme {
    export enum WorkingHoursSchemeEnum {
        SCHEME = <any> 'WORKING_HOURS_SCHEME'
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: request.Options): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(requestOptions: request.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string;

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: request.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string;

    applyToRequest(requestOptions: request.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(_: request.Options): void {
        // Do nothing
    }
}

export enum ActivityApiApiKeys {
}

export class ActivityApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: ActivityApiApiKeys, value: string) {
        this.authentications[ActivityApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Find activity by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperActivity;  }> {
        const localVarPath = this.basePath + '/activity/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperActivity;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public getForTimeSheet (projectId: number, employeeId?: number, date?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseActivity;  }> {
        const localVarPath = this.basePath + '/activity/>forTimeSheet';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseActivity;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, name?: string, number?: string, description?: string, isProjectActivity?: boolean, isGeneral?: boolean, isChargeable?: boolean, isTask?: boolean, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseActivity;  }> {
        const localVarPath = this.basePath + '/activity';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseActivity;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum AddressApiApiKeys {
}

export class AddressApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: AddressApiApiKeys, value: string) {
        this.authentications[AddressApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get address by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperAddress;  }> {
        const localVarPath = this.basePath + '/address/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperAddress;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Update address. 
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: Address) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperAddress;  }> {
        const localVarPath = this.basePath + '/address/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperAddress;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, addressLine1?: string, addressLine2?: string, postalCode?: string, city?: string, name?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseAddress;  }> {
        const localVarPath = this.basePath + '/address';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseAddress;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum BankApiApiKeys {
}

export class BankApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: BankApiApiKeys, value: string) {
        this.authentications[BankApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Find bank corresponding with sent data.
     * @param id List of IDs
     * @param registerNumbers Bank register number (four digits)
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (id?: string, registerNumbers?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseBank;  }> {
        const localVarPath = this.basePath + '/bank';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        if (registerNumbers !== undefined) {
            queryParameters['registerNumbers'] = registerNumbers;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseBank;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum BankreconciliationApiApiKeys {
}

export class BankreconciliationApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: BankreconciliationApiApiKeys, value: string) {
        this.authentications[BankreconciliationApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete bank reconciliation by ID.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Add an adjustment to reconciliation by ID.
     * @param id Element ID
     * @param paymentTypeId Bank reconciliation PaymentType ID.
     * @param postingDate Format is yyyy-MM-dd
     * @param amount Amount
     */
    public adjustment (id: number, paymentTypeId: number, postingDate: string, amount: number) : Promise<{ response: http.IncomingMessage; body: ListResponsePosting;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation/{id}/:adjustment'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling adjustment.');
        }

        // verify required parameter 'paymentTypeId' is not null or undefined
        if (paymentTypeId === null || paymentTypeId === undefined) {
            throw new Error('Required parameter paymentTypeId was null or undefined when calling adjustment.');
        }

        // verify required parameter 'postingDate' is not null or undefined
        if (postingDate === null || postingDate === undefined) {
            throw new Error('Required parameter postingDate was null or undefined when calling adjustment.');
        }

        // verify required parameter 'amount' is not null or undefined
        if (amount === null || amount === undefined) {
            throw new Error('Required parameter amount was null or undefined when calling adjustment.');
        }

        if (paymentTypeId !== undefined) {
            queryParameters['paymentTypeId'] = paymentTypeId;
        }

        if (postingDate !== undefined) {
            queryParameters['postingDate'] = postingDate;
        }

        if (amount !== undefined) {
            queryParameters['amount'] = amount;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponsePosting;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Get bank reconciliation.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliation;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Get last closed reconciliation by account ID.
     * @param accountId Account ID
     * @param after Format is yyyy-MM-dd
     * @param fields Fields filter pattern
     */
    public lastClosed (accountId: number, after?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliation;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation/>lastClosed';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling lastClosed.');
        }

        if (accountId !== undefined) {
            queryParameters['accountId'] = accountId;
        }

        if (after !== undefined) {
            queryParameters['after'] = after;
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Post a bank reconciliation.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: BankReconciliation) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliation;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update a bank reconciliation.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: BankReconciliation) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliation;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find bank reconciliation corresponding with sent data.
     * @param id List of IDs
     * @param accountingPeriodId List of IDs
     * @param accountId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (id?: string, accountingPeriodId?: string, accountId?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseBankReconciliation;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        if (accountingPeriodId !== undefined) {
            queryParameters['accountingPeriodId'] = accountingPeriodId;
        }

        if (accountId !== undefined) {
            queryParameters['accountId'] = accountId;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseBankReconciliation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum BankreconciliationmatchApiApiKeys {
}

export class BankreconciliationmatchApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: BankreconciliationmatchApiApiKeys, value: string) {
        this.authentications[BankreconciliationmatchApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete a bank reconciliation match by ID.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation/match/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Get bank reconciliation match by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliationMatch;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation/match/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliationMatch;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create a bank reconciliation match.
     * @param body Partial object describing what should be updated
     */
    public post (body?: BankReconciliationMatch) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliationMatch;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation/match';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliationMatch;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update a bank reconciliation match by ID.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: BankReconciliationMatch) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliationMatch;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation/match/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliationMatch;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find bank reconciliation match corresponding with sent data.
     * @param id List of IDs
     * @param bankReconciliationId List of bank reconciliation IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (id?: string, bankReconciliationId?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseBankReconciliationMatch;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation/match';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        if (bankReconciliationId !== undefined) {
            queryParameters['bankReconciliationId'] = bankReconciliationId;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseBankReconciliationMatch;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum BankreconciliationpaymentTypeApiApiKeys {
}

export class BankreconciliationpaymentTypeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: BankreconciliationpaymentTypeApiApiKeys, value: string) {
        this.authentications[BankreconciliationpaymentTypeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Get payment type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliationPaymentType;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation/paymentType/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankReconciliationPaymentType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find payment type corresponding with sent data.
     * @param id List of IDs
     * @param description Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseBankReconciliationPaymentType;  }> {
        const localVarPath = this.basePath + '/bank/reconciliation/paymentType';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseBankReconciliationPaymentType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum BankstatementApiApiKeys {
}

export class BankstatementApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: BankstatementApiApiKeys, value: string) {
        this.authentications[BankstatementApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete bank statement by ID.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/bank/statement/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Get bank statement.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankStatement;  }> {
        const localVarPath = this.basePath + '/bank/statement/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankStatement;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Upload bank statement file.
     * @param fileFormat File format
     * @param file The bank statement file
     */
    public importBankStatement (fileFormat: string, file: Buffer) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankStatement;  }> {
        const localVarPath = this.basePath + '/bank/statement/import';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'fileFormat' is not null or undefined
        if (fileFormat === null || fileFormat === undefined) {
            throw new Error('Required parameter fileFormat was null or undefined when calling importBankStatement.');
        }

        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling importBankStatement.');
        }

        if (fileFormat !== undefined) {
            queryParameters['fileFormat'] = fileFormat;
        }

        let useFormData = false;

        if (file !== undefined) {
            formParams['file'] = file;
        }
        useFormData = true;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankStatement;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find bank statement corresponding with sent data.
     * @param id List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (id?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseBankStatement;  }> {
        const localVarPath = this.basePath + '/bank/statement';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (id !== undefined) {
            queryParameters['id'] = id;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseBankStatement;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum BankstatementtransactionApiApiKeys {
}

export class BankstatementtransactionApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: BankstatementtransactionApiApiKeys, value: string) {
        this.authentications[BankstatementtransactionApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Get bank transaction by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankTransaction;  }> {
        const localVarPath = this.basePath + '/bank/statement/transaction/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperBankTransaction;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Get additional details about transaction by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public getDetails (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperObject;  }> {
        const localVarPath = this.basePath + '/bank/statement/transaction/{id}/details'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDetails.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperObject;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find bank transaction corresponding with sent data.
     * @param bankStatementId Bank statement ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (bankStatementId: number, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseBankTransaction;  }> {
        const localVarPath = this.basePath + '/bank/statement/transaction';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'bankStatementId' is not null or undefined
        if (bankStatementId === null || bankStatementId === undefined) {
            throw new Error('Required parameter bankStatementId was null or undefined when calling search.');
        }

        if (bankStatementId !== undefined) {
            queryParameters['bankStatementId'] = bankStatementId;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseBankTransaction;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum CompanyApiApiKeys {
}

export class CompanyApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: CompanyApiApiKeys, value: string) {
        this.authentications[CompanyApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Find company by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperCompany;  }> {
        const localVarPath = this.basePath + '/company/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperCompany;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find divisions.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public getDivisions (from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseCompany;  }> {
        const localVarPath = this.basePath + '/company/divisions';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseCompany;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Returns client customers (with accountant/auditor relation) where the current user has login access (proxy login).
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public getWithLoginAccess (from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseCompany;  }> {
        const localVarPath = this.basePath + '/company/>withLoginAccess';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseCompany;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum ContactApiApiKeys {
}

export class ContactApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: ContactApiApiKeys, value: string) {
        this.authentications[ContactApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get contact by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperContact;  }> {
        const localVarPath = this.basePath + '/contact/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperContact;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Create contact.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: Contact) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperContact;  }> {
        const localVarPath = this.basePath + '/contact';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperContact;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, firstName?: string, lastName?: string, email?: string, customerId?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseContact;  }> {
        const localVarPath = this.basePath + '/contact';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseContact;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum CountryApiApiKeys {
}

export class CountryApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: CountryApiApiKeys, value: string) {
        this.authentications[CountryApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get country by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperCountry;  }> {
        const localVarPath = this.basePath + '/country/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperCountry;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, code?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseCountry;  }> {
        const localVarPath = this.basePath + '/country';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseCountry;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum CrmprospectApiApiKeys {
}

export class CrmprospectApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: CrmprospectApiApiKeys, value: string) {
        this.authentications[CrmprospectApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get prospect by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperProspect;  }> {
        const localVarPath = this.basePath + '/crm/prospect/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperProspect;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (name?: string, description?: string, createdDateFrom?: string, createdDateTo?: string, customerId?: string, salesEmployeeId?: string, isClosed?: boolean, closedReason?: string, closedDateFrom?: string, closedDateTo?: string, competitor?: string, prospectType?: string, projectId?: string, projectOfferId?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseProspect;  }> {
        const localVarPath = this.basePath + '/crm/prospect';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseProspect;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum CurrencyApiApiKeys {
}

export class CurrencyApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: CurrencyApiApiKeys, value: string) {
        this.authentications[CurrencyApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get currency by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperCurrency;  }> {
        const localVarPath = this.basePath + '/currency/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperCurrency;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, code?: string, fields?: string, from?: number, count?: number, sorting?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseCurrency;  }> {
        const localVarPath = this.basePath + '/currency';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseCurrency;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum CustomerApiApiKeys {
}

export class CustomerApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: CustomerApiApiKeys, value: string) {
        this.authentications[CustomerApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get customer by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperCustomer;  }> {
        const localVarPath = this.basePath + '/customer/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperCustomer;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Create customer. Related customer addresses may also be created.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: Customer) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperCustomer;  }> {
        const localVarPath = this.basePath + '/customer';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperCustomer;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create multiple customers. Related supplier addresses may also be created.
     * @param body JSON representing a list of new object to be created. Should not have ID and version set.
     */
    public postList (body?: Array<Customer>) : Promise<{ response: http.IncomingMessage; body: ListResponseCustomer;  }> {
        const localVarPath = this.basePath + '/customer/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseCustomer;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Update customer. 
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: Customer) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperCustomer;  }> {
        const localVarPath = this.basePath + '/customer/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperCustomer;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update multiple customers. Addresses can also be updated.
     * @param body JSON representing updates to object. Should have ID and version set.
     */
    public putList (body?: Array<Customer>) : Promise<{ response: http.IncomingMessage; body: ListResponseCustomer;  }> {
        const localVarPath = this.basePath + '/customer/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseCustomer;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, customerAccountNumber?: string, email?: string, invoiceEmail?: string, isInactive?: boolean, accountManagerId?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseCustomer;  }> {
        const localVarPath = this.basePath + '/customer';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseCustomer;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum CustomercategoryApiApiKeys {
}

export class CustomercategoryApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: CustomercategoryApiApiKeys, value: string) {
        this.authentications[CustomercategoryApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Find customer/supplier category by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperCustomerCategory;  }> {
        const localVarPath = this.basePath + '/customer/category/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperCustomerCategory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Add new customer/supplier category.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: CustomerCategory) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperCustomerCategory;  }> {
        const localVarPath = this.basePath + '/customer/category';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperCustomerCategory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Update customer/supplier category.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: CustomerCategory) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperCustomerCategory;  }> {
        const localVarPath = this.basePath + '/customer/category/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperCustomerCategory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find customer/supplier categories corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param number Equals
     * @param description Containing
     * @param type List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (id?: string, name?: string, number?: string, description?: string, type?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseCustomerCategory;  }> {
        const localVarPath = this.basePath + '/customer/category';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        if (type !== undefined) {
            queryParameters['type'] = type;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseCustomerCategory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum DepartmentApiApiKeys {
}

export class DepartmentApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: DepartmentApiApiKeys, value: string) {
        this.authentications[DepartmentApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get department by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperDepartment;  }> {
        const localVarPath = this.basePath + '/department/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperDepartment;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, name?: string, departmentNumber?: string, departmentManagerId?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseDepartment;  }> {
        const localVarPath = this.basePath + '/department';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseDepartment;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum EmployeeApiApiKeys {
}

export class EmployeeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: EmployeeApiApiKeys, value: string) {
        this.authentications[EmployeeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get employee by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployee;  }> {
        const localVarPath = this.basePath + '/employee/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployee;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create one employee.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: Employee) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployee;  }> {
        const localVarPath = this.basePath + '/employee';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployee;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create several employees.
     * @param body JSON representing a list of new object to be created. Should not have ID and version set.
     */
    public postList (body?: Array<Employee>) : Promise<{ response: http.IncomingMessage; body: ListResponseEmployee;  }> {
        const localVarPath = this.basePath + '/employee/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseEmployee;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Update employee.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: Employee) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployee;  }> {
        const localVarPath = this.basePath + '/employee/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployee;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find employees corresponding with sent data.
     * @param id List of IDs
     * @param firstName Containing
     * @param lastName Containing
     * @param employeeNumber Containing
     * @param allowInformationRegistration Equals
     * @param departmentId List of IDs
     * @param fields Fields filter pattern
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     */
    public search (id?: string, firstName?: string, lastName?: string, employeeNumber?: string, allowInformationRegistration?: boolean, departmentId?: string, fields?: string, from?: number, count?: number, sorting?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseEmployee;  }> {
        const localVarPath = this.basePath + '/employee';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        if (allowInformationRegistration !== undefined) {
            queryParameters['allowInformationRegistration'] = allowInformationRegistration;
        }

        if (departmentId !== undefined) {
            queryParameters['departmentId'] = departmentId;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseEmployee;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum EmployeeemploymentApiApiKeys {
}

export class EmployeeemploymentApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: EmployeeemploymentApiApiKeys, value: string) {
        this.authentications[EmployeeemploymentApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Find employment by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployment;  }> {
        const localVarPath = this.basePath + '/employee/employment/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployment;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create employment.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: Employment) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployment;  }> {
        const localVarPath = this.basePath + '/employee/employment';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployment;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update employemnt. 
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: Employment) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployment;  }> {
        const localVarPath = this.basePath + '/employee/employment/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployment;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find all employments for employee.
     * @param employeeId Element ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseEmployment;  }> {
        const localVarPath = this.basePath + '/employee/employment';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseEmployment;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum EmployeeemploymentdetailsApiApiKeys {
}

export class EmployeeemploymentdetailsApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: EmployeeemploymentdetailsApiApiKeys, value: string) {
        this.authentications[EmployeeemploymentdetailsApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Find employment details by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmploymentDetails;  }> {
        const localVarPath = this.basePath + '/employee/employment/details/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmploymentDetails;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create employment details.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: EmploymentDetails) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmploymentDetails;  }> {
        const localVarPath = this.basePath + '/employee/employment/details';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmploymentDetails;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update employment details. 
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: EmploymentDetails) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmploymentDetails;  }> {
        const localVarPath = this.basePath + '/employee/employment/details/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmploymentDetails;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find all employmentdetails for employment.
     * @param employmentId Element ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (employmentId?: number, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseEmploymentDetails;  }> {
        const localVarPath = this.basePath + '/employee/employment/details';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseEmploymentDetails;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum EmployeeemploymentemploymentTypeApiApiKeys {
}

export class EmployeeemploymentemploymentTypeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: EmployeeemploymentemploymentTypeApiApiKeys, value: string) {
        this.authentications[EmployeeemploymentemploymentTypeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Find all employment type IDs.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseEmploymentType;  }> {
        const localVarPath = this.basePath + '/employee/employment/employmentType';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseEmploymentType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum EmployeeemploymentleaveOfAbsenceApiApiKeys {
}

export class EmployeeemploymentleaveOfAbsenceApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: EmployeeemploymentleaveOfAbsenceApiApiKeys, value: string) {
        this.authentications[EmployeeemploymentleaveOfAbsenceApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Find leave of absence by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperLeaveOfAbsence;  }> {
        const localVarPath = this.basePath + '/employee/employment/leaveOfAbsence/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperLeaveOfAbsence;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create leave of absence.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: LeaveOfAbsence) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperLeaveOfAbsence;  }> {
        const localVarPath = this.basePath + '/employee/employment/leaveOfAbsence';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperLeaveOfAbsence;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update leave of absence. 
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: LeaveOfAbsence) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperLeaveOfAbsence;  }> {
        const localVarPath = this.basePath + '/employee/employment/leaveOfAbsence/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperLeaveOfAbsence;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum EmployeeemploymentleaveOfAbsenceTypeApiApiKeys {
}

export class EmployeeemploymentleaveOfAbsenceTypeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: EmployeeemploymentleaveOfAbsenceTypeApiApiKeys, value: string) {
        this.authentications[EmployeeemploymentleaveOfAbsenceTypeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Find all leave of absence type IDs.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseLeaveOfAbsenceType;  }> {
        const localVarPath = this.basePath + '/employee/employment/leaveOfAbsenceType';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseLeaveOfAbsenceType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum EmployeeemploymentoccupationCodeApiApiKeys {
}

export class EmployeeemploymentoccupationCodeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: EmployeeemploymentoccupationCodeApiApiKeys, value: string) {
        this.authentications[EmployeeemploymentoccupationCodeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
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
    public search (nameNO?: string, code?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseOccupationCode;  }> {
        const localVarPath = this.basePath + '/employee/employment/occupationCode';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseOccupationCode;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum EmployeeemploymentremunerationTypeApiApiKeys {
}

export class EmployeeemploymentremunerationTypeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: EmployeeemploymentremunerationTypeApiApiKeys, value: string) {
        this.authentications[EmployeeemploymentremunerationTypeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Find all remuneration type IDs.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseRemunerationType;  }> {
        const localVarPath = this.basePath + '/employee/employment/remunerationType';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseRemunerationType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum EmployeeemploymentworkingHoursSchemeApiApiKeys {
}

export class EmployeeemploymentworkingHoursSchemeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: EmployeeemploymentworkingHoursSchemeApiApiKeys, value: string) {
        this.authentications[EmployeeemploymentworkingHoursSchemeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Find working hours scheme ID.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseWorkingHoursScheme;  }> {
        const localVarPath = this.basePath + '/employee/employment/workingHoursScheme';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseWorkingHoursScheme;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum EmployeeentitlementApiApiKeys {
}

export class EmployeeentitlementApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: EmployeeentitlementApiApiKeys, value: string) {
        this.authentications[EmployeeentitlementApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Find all entitlements at client for user.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param customerId Client ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public client (employeeId?: number, customerId?: number, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseEntitlement;  }> {
        const localVarPath = this.basePath + '/employee/entitlement/client';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseEntitlement;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Get entitlement by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperEntitlement;  }> {
        const localVarPath = this.basePath + '/employee/entitlement/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperEntitlement;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update employee entitlements in client account.
     * @param employeeId Employee ID
     * @param customerId Client ID
     * @param template Template
     */
    public grantClientEntitlementsByTemplate (employeeId: number, customerId: number, template: string) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/employee/entitlement/:grantClientEntitlementsByTemplate';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'employeeId' is not null or undefined
        if (employeeId === null || employeeId === undefined) {
            throw new Error('Required parameter employeeId was null or undefined when calling grantClientEntitlementsByTemplate.');
        }

        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling grantClientEntitlementsByTemplate.');
        }

        // verify required parameter 'template' is not null or undefined
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling grantClientEntitlementsByTemplate.');
        }

        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }

        if (customerId !== undefined) {
            queryParameters['customerId'] = customerId;
        }

        if (template !== undefined) {
            queryParameters['template'] = template;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * The user will only receive the entitlements which are possible with the registered user type
     * @summary [BETA] Update employee entitlements.
     * @param employeeId Employee ID
     * @param template Template
     */
    public grantEntitlementsByTemplate (employeeId: number, template: string) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/employee/entitlement/:grantEntitlementsByTemplate';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'employeeId' is not null or undefined
        if (employeeId === null || employeeId === undefined) {
            throw new Error('Required parameter employeeId was null or undefined when calling grantEntitlementsByTemplate.');
        }

        // verify required parameter 'template' is not null or undefined
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling grantEntitlementsByTemplate.');
        }

        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }

        if (template !== undefined) {
            queryParameters['template'] = template;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find all entitlements for user.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseEntitlement;  }> {
        const localVarPath = this.basePath + '/employee/entitlement';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseEntitlement;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum EmployeestandardTimeApiApiKeys {
}

export class EmployeestandardTimeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: EmployeestandardTimeApiApiKeys, value: string) {
        this.authentications[EmployeestandardTimeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Find standard time by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperStandardTime;  }> {
        const localVarPath = this.basePath + '/employee/standardTime/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperStandardTime;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create standard time.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: StandardTime) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperStandardTime;  }> {
        const localVarPath = this.basePath + '/employee/standardTime';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperStandardTime;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update standard time. 
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: StandardTime) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperStandardTime;  }> {
        const localVarPath = this.basePath + '/employee/standardTime/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperStandardTime;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find all standard times for employee.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseStandardTime;  }> {
        const localVarPath = this.basePath + '/employee/standardTime';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseStandardTime;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum EventApiApiKeys {
}

export class EventApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: EventApiApiKeys, value: string) {
        this.authentications[EventApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Get all (WebHook) event keys.
     * @param fields Fields filter pattern
     */
    public get (fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperMapStringEventInfoDescription;  }> {
        const localVarPath = this.basePath + '/event';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperMapStringEventInfoDescription;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum EventsubscriptionApiApiKeys {
}

export class EventsubscriptionApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: EventsubscriptionApiApiKeys, value: string) {
        this.authentications[EventsubscriptionApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete the given subscription.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/event/subscription/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Get subscription by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperSubscription;  }> {
        const localVarPath = this.basePath + '/event/subscription/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperSubscription;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create a new subscription for current EmployeeToken.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: Subscription) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperSubscription;  }> {
        const localVarPath = this.basePath + '/event/subscription';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperSubscription;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Change a current subscription, based on id.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: Subscription) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperSubscription;  }> {
        const localVarPath = this.basePath + '/event/subscription/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperSubscription;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find all ongoing subscriptions.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseSubscription;  }> {
        const localVarPath = this.basePath + '/event/subscription';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseSubscription;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum InventoryApiApiKeys {
}

export class InventoryApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: InventoryApiApiKeys, value: string) {
        this.authentications[InventoryApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get inventory by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperInventory;  }> {
        const localVarPath = this.basePath + '/inventory/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperInventory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, name?: string, isMainInventory?: boolean, isInactive?: boolean, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseInventory;  }> {
        const localVarPath = this.basePath + '/inventory';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseInventory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum InvoiceApiApiKeys {
}

export class InvoiceApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: InvoiceApiApiKeys, value: string) {
        this.authentications[InvoiceApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get invoice document by invoice ID.
     * @param invoiceId Invoice ID from which PDF is downloaded.
     */
    public downloadPdf (invoiceId: number) : Promise<{ response: http.IncomingMessage; body: string;  }> {
        const localVarPath = this.basePath + '/invoice/{invoiceId}/pdf'
            .replace('{' + 'invoiceId' + '}', String(invoiceId));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new Error('Required parameter invoiceId was null or undefined when calling downloadPdf.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: string;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Get invoice by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperInvoice;  }> {
        const localVarPath = this.basePath + '/invoice/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperInvoice;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Update invoice. The invoice is updated with payment information. The amount is in the invoice’s currency.
     * @param id Invoice id
     * @param paymentDate Payment date
     * @param paymentTypeId PaymentType id
     * @param paidAmount Amount paid by customer
     */
    public payment (id: number, paymentDate: string, paymentTypeId: number, paidAmount: number) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperInvoice;  }> {
        const localVarPath = this.basePath + '/invoice/{id}/:payment'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperInvoice;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Create invoice.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     * @param sendToCustomer Equals
     */
    public post (body?: Invoice, sendToCustomer?: boolean) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperInvoice;  }> {
        const localVarPath = this.basePath + '/invoice';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (sendToCustomer !== undefined) {
            queryParameters['sendToCustomer'] = sendToCustomer;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperInvoice;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (invoiceDateFrom: string, invoiceDateTo: string, id?: string, invoiceNumber?: string, kid?: string, voucherId?: string, customerId?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseInvoice;  }> {
        const localVarPath = this.basePath + '/invoice';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseInvoice;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Send invoice by ID and sendType. Optionally override email recipient.
     * @param id Element ID
     * @param sendType SendType
     * @param overrideEmailAddress Will override email address if sendType &#x3D; EMAIL
     */
    public send (id: number, sendType: string, overrideEmailAddress?: string) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/invoice/{id}/:send'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling send.');
        }

        // verify required parameter 'sendType' is not null or undefined
        if (sendType === null || sendType === undefined) {
            throw new Error('Required parameter sendType was null or undefined when calling send.');
        }

        if (sendType !== undefined) {
            queryParameters['sendType'] = sendType;
        }

        if (overrideEmailAddress !== undefined) {
            queryParameters['overrideEmailAddress'] = overrideEmailAddress;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum InvoicepaymentTypeApiApiKeys {
}

export class InvoicepaymentTypeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: InvoicepaymentTypeApiApiKeys, value: string) {
        this.authentications[InvoicepaymentTypeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get payment type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperPaymentType;  }> {
        const localVarPath = this.basePath + '/invoice/paymentType/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperPaymentType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponsePaymentType;  }> {
        const localVarPath = this.basePath + '/invoice/paymentType';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponsePaymentType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum LedgerApiApiKeys {
}

export class LedgerApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: LedgerApiApiKeys, value: string) {
        this.authentications[LedgerApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Find open posts corresponding with sent data.
     * @param date Invoice date. Format is yyyy-MM-dd (to and excl.).
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
    public openPost (date: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, fields?: string, from?: number, count?: number, sorting?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseLedgerAccount;  }> {
        const localVarPath = this.basePath + '/ledger/openPost';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseLedgerAccount;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (dateFrom: string, dateTo: string, openPostings?: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, fields?: string, from?: number, count?: number, sorting?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseLedgerAccount;  }> {
        const localVarPath = this.basePath + '/ledger';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseLedgerAccount;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum LedgeraccountApiApiKeys {
}

export class LedgeraccountApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: LedgeraccountApiApiKeys, value: string) {
        this.authentications[LedgeraccountApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete account.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/ledger/account/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Delete multiple accounts.
     * @param ids ID of the elements
     */
    public deleteByIds (ids: string) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/ledger/account/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'ids' is not null or undefined
        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling deleteByIds.');
        }

        if (ids !== undefined) {
            queryParameters['ids'] = ids;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Get account by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccount;  }> {
        const localVarPath = this.basePath + '/ledger/account/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccount;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create a new account.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: Account) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccount;  }> {
        const localVarPath = this.basePath + '/ledger/account';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccount;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create several accounts.
     * @param body JSON representing a list of new object to be created. Should not have ID and version set.
     */
    public postList (body?: Array<Account>) : Promise<{ response: http.IncomingMessage; body: ListResponseAccount;  }> {
        const localVarPath = this.basePath + '/ledger/account/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseAccount;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update account.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: Account) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccount;  }> {
        const localVarPath = this.basePath + '/ledger/account/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccount;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update multiple accounts.
     * @param body JSON representing updates to object. Should have ID and version set.
     */
    public putList (body?: Array<Account>) : Promise<{ response: http.IncomingMessage; body: ListResponseAccount;  }> {
        const localVarPath = this.basePath + '/ledger/account/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseAccount;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find accounts corresponding with sent data.
     * @param id List of IDs
     * @param number List of IDs
     * @param isBankAccount Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (id?: string, number?: string, isBankAccount?: boolean, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseAccount;  }> {
        const localVarPath = this.basePath + '/ledger/account';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        if (number !== undefined) {
            queryParameters['number'] = number;
        }

        if (isBankAccount !== undefined) {
            queryParameters['isBankAccount'] = isBankAccount;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseAccount;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum LedgeraccountingPeriodApiApiKeys {
}

export class LedgeraccountingPeriodApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: LedgeraccountingPeriodApiApiKeys, value: string) {
        this.authentications[LedgeraccountingPeriodApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get accounting period by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccountingPeriod;  }> {
        const localVarPath = this.basePath + '/ledger/accountingPeriod/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccountingPeriod;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, numberFrom?: number, numberTo?: number, startFrom?: string, startTo?: string, endFrom?: string, endTo?: string, count?: number, from?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseAccountingPeriod;  }> {
        const localVarPath = this.basePath + '/ledger/accountingPeriod';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseAccountingPeriod;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum LedgerannualAccountApiApiKeys {
}

export class LedgerannualAccountApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: LedgerannualAccountApiApiKeys, value: string) {
        this.authentications[LedgerannualAccountApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get annual account by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperAnnualAccount;  }> {
        const localVarPath = this.basePath + '/ledger/annualAccount/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperAnnualAccount;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, yearFrom?: number, yearTo?: number, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseAnnualAccount;  }> {
        const localVarPath = this.basePath + '/ledger/annualAccount';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseAnnualAccount;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum LedgercloseGroupApiApiKeys {
}

export class LedgercloseGroupApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: LedgercloseGroupApiApiKeys, value: string) {
        this.authentications[LedgercloseGroupApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get close group by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperCloseGroup;  }> {
        const localVarPath = this.basePath + '/ledger/closeGroup/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperCloseGroup;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (dateFrom: string, dateTo: string, id?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseCloseGroup;  }> {
        const localVarPath = this.basePath + '/ledger/closeGroup';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseCloseGroup;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum LedgerpaymentTypeOutApiApiKeys {
}

export class LedgerpaymentTypeOutApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: LedgerpaymentTypeOutApiApiKeys, value: string) {
        this.authentications[LedgerpaymentTypeOutApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete payment type for outgoing payments by ID.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/ledger/paymentTypeOut/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Get payment type for outgoing payments by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperPaymentTypeOut;  }> {
        const localVarPath = this.basePath + '/ledger/paymentTypeOut/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperPaymentTypeOut;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create new payment type for outgoing payments
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: PaymentTypeOut) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperPaymentTypeOut;  }> {
        const localVarPath = this.basePath + '/ledger/paymentTypeOut';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperPaymentTypeOut;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create multiple payment types for outgoing payments at once
     * @param body JSON representing a list of new object to be created. Should not have ID and version set.
     */
    public postList (body?: Array<PaymentTypeOut>) : Promise<{ response: http.IncomingMessage; body: ListResponsePaymentTypeOut;  }> {
        const localVarPath = this.basePath + '/ledger/paymentTypeOut/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponsePaymentTypeOut;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update existing payment type for outgoing payments
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: PaymentTypeOut) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperPaymentTypeOut;  }> {
        const localVarPath = this.basePath + '/ledger/paymentTypeOut/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperPaymentTypeOut;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update multiple payment types for outgoing payments at once
     * @param body JSON representing updates to object. Should have ID and version set.
     */
    public putList (body?: Array<PaymentTypeOut>) : Promise<{ response: http.IncomingMessage; body: ListResponsePaymentTypeOut;  }> {
        const localVarPath = this.basePath + '/ledger/paymentTypeOut/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponsePaymentTypeOut;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * This is an API endpoint for getting payment types for outgoing payments. This is equivalent to the section 'Outgoing Payments' under Accounts Settings in Tripletex. These are the payment types listed in supplier invoices, vat returns, salary payments and Tax/ENI
     * @summary [BETA] Gets payment types for outgoing payments
     * @param id List of IDs
     * @param description Containing
     * @param isInactive Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (id?: string, description?: string, isInactive?: boolean, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponsePaymentTypeOut;  }> {
        const localVarPath = this.basePath + '/ledger/paymentTypeOut';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        if (description !== undefined) {
            queryParameters['description'] = description;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponsePaymentTypeOut;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum LedgerpostingApiApiKeys {
}

export class LedgerpostingApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: LedgerpostingApiApiKeys, value: string) {
        this.authentications[LedgerpostingApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Find postings by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperPosting;  }> {
        const localVarPath = this.basePath + '/ledger/posting/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperPosting;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find open posts corresponding with sent data.
     * @param date Invoice date. Format is yyyy-MM-dd (to and excl.).
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
    public openPost (date: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponsePosting;  }> {
        const localVarPath = this.basePath + '/ledger/posting/openPost';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponsePosting;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (dateFrom: string, dateTo: string, openPostings?: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponsePosting;  }> {
        const localVarPath = this.basePath + '/ledger/posting';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponsePosting;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum LedgervatTypeApiApiKeys {
}

export class LedgervatTypeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: LedgervatTypeApiApiKeys, value: string) {
        this.authentications[LedgervatTypeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get vat type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperVatType;  }> {
        const localVarPath = this.basePath + '/ledger/vatType/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperVatType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, number?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseVatType;  }> {
        const localVarPath = this.basePath + '/ledger/vatType';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseVatType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum LedgervoucherApiApiKeys {
}

export class LedgervoucherApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: LedgervoucherApiApiKeys, value: string) {
        this.authentications[LedgervoucherApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get attachment by voucher ID.
     * @param voucherId Voucher ID from which PDF is downloaded.
     */
    public downloadPdf (voucherId: number) : Promise<{ response: http.IncomingMessage; body: string;  }> {
        const localVarPath = this.basePath + '/ledger/voucher/{voucherId}/pdf'
            .replace('{' + 'voucherId' + '}', String(voucherId));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'voucherId' is not null or undefined
        if (voucherId === null || voucherId === undefined) {
            throw new Error('Required parameter voucherId was null or undefined when calling downloadPdf.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: string;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Get voucher by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperVoucher;  }> {
        const localVarPath = this.basePath + '/ledger/voucher/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperVoucher;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Import GBAT10. Send as multipart form.
     * @param generateVatPostings If the import should generate VAT postings
     * @param file The file
     * @param encoding The file encoding
     */
    public importGbat10 (generateVatPostings: boolean, file: Buffer, encoding?: string) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/ledger/voucher/importGbat10';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'generateVatPostings' is not null or undefined
        if (generateVatPostings === null || generateVatPostings === undefined) {
            throw new Error('Required parameter generateVatPostings was null or undefined when calling importGbat10.');
        }

        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling importGbat10.');
        }

        let useFormData = false;

        if (generateVatPostings !== undefined) {
            formParams['generateVatPostings'] = generateVatPostings;
        }

        if (file !== undefined) {
            formParams['file'] = file;
        }
        useFormData = true;

        if (encoding !== undefined) {
            formParams['encoding'] = encoding;
        }

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find non-posted vouchers.
     * @param includeNonApproved Include non-approved vouchers in the result.
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param changedSince Only return elements that have changed since this date and time
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public nonPosted (includeNonApproved: boolean, dateFrom?: string, dateTo?: string, changedSince?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseVoucher;  }> {
        const localVarPath = this.basePath + '/ledger/voucher/>nonPosted';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'includeNonApproved' is not null or undefined
        if (includeNonApproved === null || includeNonApproved === undefined) {
            throw new Error('Required parameter includeNonApproved was null or undefined when calling nonPosted.');
        }

        if (dateFrom !== undefined) {
            queryParameters['dateFrom'] = dateFrom;
        }

        if (dateTo !== undefined) {
            queryParameters['dateTo'] = dateTo;
        }

        if (includeNonApproved !== undefined) {
            queryParameters['includeNonApproved'] = includeNonApproved;
        }

        if (changedSince !== undefined) {
            queryParameters['changedSince'] = changedSince;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseVoucher;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Add new voucher. IMPORTANT: Also creates postings. Only the gross amounts will be used
     * @param sendToLedger Should the voucher be sent to ledger? Requires the \&quot;Advanced Voucher\&quot; permission.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (sendToLedger?: boolean, body?: Voucher) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperVoucher;  }> {
        const localVarPath = this.basePath + '/ledger/voucher';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (sendToLedger !== undefined) {
            queryParameters['sendToLedger'] = sendToLedger;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperVoucher;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Update voucher. Postings with guiRow==0 will be deleted and regenerated.
     * @param id Element ID
     * @param sendToLedger Should the voucher be sent to ledger? Requires the \&quot;Advanced Voucher\&quot; permission.
     * @param body Partial object describing what should be updated
     */
    public put (id: number, sendToLedger?: boolean, body?: Voucher) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperVoucher;  }> {
        const localVarPath = this.basePath + '/ledger/voucher/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        if (sendToLedger !== undefined) {
            queryParameters['sendToLedger'] = sendToLedger;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperVoucher;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (dateFrom: string, dateTo: string, id?: string, number?: string, numberFrom?: number, numberTo?: number, typeId?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: VoucherSearchResponse;  }> {
        const localVarPath = this.basePath + '/ledger/voucher';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: VoucherSearchResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Send voucher to inbox.
     * @param id ID of voucher that should be sent to inbox.
     * @param version Version of voucher that should be sent to inbox.
     * @param comment Description of why the voucher was rejected. This parameter is only used if the approval feature is enabled.
     */
    public sendToInbox (id: number, version?: number, comment?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperVoucher;  }> {
        const localVarPath = this.basePath + '/ledger/voucher/{id}/:sendToInbox'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling sendToInbox.');
        }

        if (version !== undefined) {
            queryParameters['version'] = version;
        }

        if (comment !== undefined) {
            queryParameters['comment'] = comment;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperVoucher;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Send voucher to ledger.
     * @param id ID of voucher that should be sent to ledger.
     * @param version Version of voucher that should be sent to ledger.
     * @param number Voucher number to use. If omitted or 0 the system will assign the number.
     */
    public sendToLedger (id: number, version?: number, number?: number) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperVoucher;  }> {
        const localVarPath = this.basePath + '/ledger/voucher/{id}/:sendToLedger'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling sendToLedger.');
        }

        if (version !== undefined) {
            queryParameters['version'] = version;
        }

        if (number !== undefined) {
            queryParameters['number'] = number;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperVoucher;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Upload attachment to voucher. Send as multipart form.
     * @param voucherId Voucher ID to upload PDF to.
     * @param fileName File name to store the pdf under. Will not be the same as the filename on the file returned.
     * @param file The file
     */
    public uploadPdf (voucherId: number, fileName: string, file: Buffer) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/ledger/voucher/{voucherId}/pdf/{fileName}'
            .replace('{' + 'voucherId' + '}', String(voucherId))
            .replace('{' + 'fileName' + '}', String(fileName));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        if (file !== undefined) {
            formParams['file'] = file;
        }
        useFormData = true;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum LedgervoucherTypeApiApiKeys {
}

export class LedgervoucherTypeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: LedgervoucherTypeApiApiKeys, value: string) {
        this.authentications[LedgervoucherTypeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get voucher type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperVoucherType;  }> {
        const localVarPath = this.basePath + '/ledger/voucherType/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperVoucherType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find voucher types corresponding with sent data.
     * @param name Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (name?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseVoucherType;  }> {
        const localVarPath = this.basePath + '/ledger/voucherType';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseVoucherType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum OrderApiApiKeys {
}

export class OrderApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: OrderApiApiKeys, value: string) {
        this.authentications[OrderApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get order by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperOrder;  }> {
        const localVarPath = this.basePath + '/order/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperOrder;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Create new invoice from order.
     * @param id ID of order to invoice.
     * @param invoiceDate To and excluding
     * @param sendToCustomer Send invoice to customer
     */
    public invoice (id: number, invoiceDate: string, sendToCustomer?: boolean) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperInvoice;  }> {
        const localVarPath = this.basePath + '/order/{id}/:invoice'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperInvoice;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Create order.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: Order) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperOrder;  }> {
        const localVarPath = this.basePath + '/order';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperOrder;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Update order.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: Order) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperOrder;  }> {
        const localVarPath = this.basePath + '/order/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperOrder;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (orderDateFrom: string, orderDateTo: string, id?: string, number?: string, customerId?: string, isClosed?: boolean, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseOrder;  }> {
        const localVarPath = this.basePath + '/order';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseOrder;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum OrderorderlineApiApiKeys {
}

export class OrderorderlineApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: OrderorderlineApiApiKeys, value: string) {
        this.authentications[OrderorderlineApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete order line by ID.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/order/orderline/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Get order line by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperOrderLine;  }> {
        const localVarPath = this.basePath + '/order/orderline/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperOrderLine;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Create order line. When creating several order lines, use /list for better performance.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: OrderLine) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperOrderLine;  }> {
        const localVarPath = this.basePath + '/order/orderline';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperOrderLine;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Create multiple order lines.
     * @param body JSON representing a list of new object to be created. Should not have ID and version set.
     */
    public postList (body?: Array<OrderLine>) : Promise<{ response: http.IncomingMessage; body: ListResponseOrderLine;  }> {
        const localVarPath = this.basePath + '/order/orderline/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseOrderLine;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum ProductApiApiKeys {
}

export class ProductApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: ProductApiApiKeys, value: string) {
        this.authentications[ProductApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get product by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperProduct;  }> {
        const localVarPath = this.basePath + '/product/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperProduct;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Create new product.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: Product) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperProduct;  }> {
        const localVarPath = this.basePath + '/product';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperProduct;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Update product.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: Product) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperProduct;  }> {
        const localVarPath = this.basePath + '/product/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperProduct;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (number?: string, productNumber?: Array<string>, name?: string, isInactive?: boolean, isStockItem?: boolean, currencyId?: string, vatTypeId?: string, productUnitId?: string, departmentId?: string, accountId?: string, costExcludingVatCurrencyFrom?: number, costExcludingVatCurrencyTo?: number, priceExcludingVatCurrencyFrom?: number, priceExcludingVatCurrencyTo?: number, priceIncludingVatCurrencyFrom?: number, priceIncludingVatCurrencyTo?: number, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseProduct;  }> {
        const localVarPath = this.basePath + '/product';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseProduct;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum ProductunitApiApiKeys {
}

export class ProductunitApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: ProductunitApiApiKeys, value: string) {
        this.authentications[ProductunitApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get product unit by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperProductUnit;  }> {
        const localVarPath = this.basePath + '/product/unit/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperProductUnit;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, name?: string, nameShort?: string, commonCode?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseProductUnit;  }> {
        const localVarPath = this.basePath + '/product/unit';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseProductUnit;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum ProjectApiApiKeys {
}

export class ProjectApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: ProjectApiApiKeys, value: string) {
        this.authentications[ProjectApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete projects.
     * @param ids ID of the elements
     */
    public deleteByIds (ids: string) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/project/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'ids' is not null or undefined
        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling deleteByIds.');
        }

        if (ids !== undefined) {
            queryParameters['ids'] = ids;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find project by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperProject;  }> {
        const localVarPath = this.basePath + '/project/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperProject;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public getForTimeSheet (employeeId?: number, date?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseProject;  }> {
        const localVarPath = this.basePath + '/project/>forTimeSheet';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseProject;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Add new project.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: Project) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperProject;  }> {
        const localVarPath = this.basePath + '/project';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperProject;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Register new projects. Multiple projects for different users can be sent in the same request.
     * @param body JSON representing a list of new object to be created. Should not have ID and version set.
     */
    public postList (body?: Array<Project>) : Promise<{ response: http.IncomingMessage; body: ListResponseProject;  }> {
        const localVarPath = this.basePath + '/project/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseProject;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update project.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: Project) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperProject;  }> {
        const localVarPath = this.basePath + '/project/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperProject;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find projects corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param number Equals
     * @param isOffer Equals
     * @param projectManagerId List of IDs
     * @param employeeInProjectId List of IDs
     * @param departmentId List of IDs
     * @param startDateFrom From and including
     * @param startDateTo To and excluding
     * @param endDateFrom From and including
     * @param endDateTo To and excluding
     * @param isClosed Equals
     * @param customerId Equals
     * @param externalAccountsNumber Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (id?: string, name?: string, number?: string, isOffer?: boolean, projectManagerId?: string, employeeInProjectId?: string, departmentId?: string, startDateFrom?: string, startDateTo?: string, endDateFrom?: string, endDateTo?: string, isClosed?: boolean, customerId?: string, externalAccountsNumber?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseProject;  }> {
        const localVarPath = this.basePath + '/project';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        if (name !== undefined) {
            queryParameters['name'] = name;
        }

        if (number !== undefined) {
            queryParameters['number'] = number;
        }

        if (isOffer !== undefined) {
            queryParameters['isOffer'] = isOffer;
        }

        if (projectManagerId !== undefined) {
            queryParameters['projectManagerId'] = projectManagerId;
        }

        if (employeeInProjectId !== undefined) {
            queryParameters['employeeInProjectId'] = employeeInProjectId;
        }

        if (departmentId !== undefined) {
            queryParameters['departmentId'] = departmentId;
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

        if (externalAccountsNumber !== undefined) {
            queryParameters['externalAccountsNumber'] = externalAccountsNumber;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseProject;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum ProjectcategoryApiApiKeys {
}

export class ProjectcategoryApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: ProjectcategoryApiApiKeys, value: string) {
        this.authentications[ProjectcategoryApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Find project category by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperProjectCategory;  }> {
        const localVarPath = this.basePath + '/project/category/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperProjectCategory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Add new project category.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: ProjectCategory) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperProjectCategory;  }> {
        const localVarPath = this.basePath + '/project/category';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperProjectCategory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Update project category.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: ProjectCategory) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperProjectCategory;  }> {
        const localVarPath = this.basePath + '/project/category/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperProjectCategory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, name?: string, number?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseProjectCategory;  }> {
        const localVarPath = this.basePath + '/project/category';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseProjectCategory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum SalarypayslipApiApiKeys {
}

export class SalarypayslipApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: SalarypayslipApiApiKeys, value: string) {
        this.authentications[SalarypayslipApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Find payslip (PDF document) by ID.
     * @param id Element ID
     */
    public downloadPdf (id: number) : Promise<{ response: http.IncomingMessage; body: string;  }> {
        const localVarPath = this.basePath + '/salary/payslip/{id}/pdf'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling downloadPdf.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: string;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find payslip by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperPayslip;  }> {
        const localVarPath = this.basePath + '/salary/payslip/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperPayslip;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, employeeId?: string, wageTransactionId?: string, activityId?: string, yearFrom?: number, yearTo?: number, monthFrom?: number, monthTo?: number, voucherDateFrom?: string, voucherDateTo?: string, comment?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponsePayslip;  }> {
        const localVarPath = this.basePath + '/salary/payslip';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponsePayslip;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum SalarytransactionApiApiKeys {
}

export class SalarytransactionApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: SalarytransactionApiApiKeys, value: string) {
        this.authentications[SalarytransactionApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete salary transaction by ID.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/salary/transaction/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find salary transaction by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperSalaryTransaction;  }> {
        const localVarPath = this.basePath + '/salary/transaction/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperSalaryTransaction;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create a new salary transaction.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: SalaryTransaction) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperSalaryTransaction;  }> {
        const localVarPath = this.basePath + '/salary/transaction';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperSalaryTransaction;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum SalarytypeApiApiKeys {
}

export class SalarytypeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: SalarytypeApiApiKeys, value: string) {
        this.authentications[SalarytypeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Find salary type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperSalaryType;  }> {
        const localVarPath = this.basePath + '/salary/type/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperSalaryType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, number?: string, name?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseSalaryType;  }> {
        const localVarPath = this.basePath + '/salary/type';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseSalaryType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum SupplierApiApiKeys {
}

export class SupplierApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: SupplierApiApiKeys, value: string) {
        this.authentications[SupplierApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get supplier by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperSupplier;  }> {
        const localVarPath = this.basePath + '/supplier/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperSupplier;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Create supplier. Related supplier addresses may also be created.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: Supplier) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperSupplier;  }> {
        const localVarPath = this.basePath + '/supplier';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperSupplier;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create multiple suppliers. Related supplier addresses may also be created.
     * @param body JSON representing a list of new object to be created. Should not have ID and version set.
     */
    public postList (body?: Array<Supplier>) : Promise<{ response: http.IncomingMessage; body: ListResponseSupplier;  }> {
        const localVarPath = this.basePath + '/supplier/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseSupplier;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Update supplier. 
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: Supplier) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperSupplier;  }> {
        const localVarPath = this.basePath + '/supplier/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperSupplier;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update multiple suppliers. Addresses can also be updated.
     * @param body JSON representing updates to object. Should have ID and version set.
     */
    public putList (body?: Array<Supplier>) : Promise<{ response: http.IncomingMessage; body: ListResponseSupplier;  }> {
        const localVarPath = this.basePath + '/supplier/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseSupplier;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find suppliers corresponding with sent data.
     * @param id List of IDs
     * @param supplierNumber List of IDs
     * @param email Equals
     * @param invoiceEmail Equals
     * @param isInactive Equals
     * @param accountManagerId List of IDs
     * @param changedSince Only return elements that have changed since this date and time
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (id?: string, supplierNumber?: string, email?: string, invoiceEmail?: string, isInactive?: boolean, accountManagerId?: string, changedSince?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseSupplier;  }> {
        const localVarPath = this.basePath + '/supplier';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        if (changedSince !== undefined) {
            queryParameters['changedSince'] = changedSince;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseSupplier;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TimesheetentryApiApiKeys {
}

export class TimesheetentryApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TimesheetentryApiApiKeys, value: string) {
        this.authentications[TimesheetentryApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Delete timesheet entry by ID.
     * @param id Element ID
     * @param version Number of current version
     */
    public _delete (id: number, version?: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/timesheet/entry/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        if (version !== undefined) {
            queryParameters['version'] = version;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find timesheet entry by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimesheetEntry;  }> {
        const localVarPath = this.basePath + '/timesheet/entry/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimesheetEntry;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public getRecentActivities (projectId: number, employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseActivity;  }> {
        const localVarPath = this.basePath + '/timesheet/entry/>recentActivities';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseActivity;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find projects with recent activities (timesheet entry registered).
     * @param employeeId ID of employee with recent project hours Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public getRecentProjects (employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseProject;  }> {
        const localVarPath = this.basePath + '/timesheet/entry/>recentProjects';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseProject;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find total hours registered on an employee in a specific period.
     * @param employeeId ID of employee to find hours for. Defaults to ID of token owner.
     * @param startDate Format is yyyy-MM-dd (from and incl.). Defaults to today.
     * @param endDate Format is yyyy-MM-dd (to and excl.). Defaults to tomorrow.
     * @param fields Fields filter pattern
     */
    public getTotalHours (employeeId?: number, startDate?: string, endDate?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperDouble;  }> {
        const localVarPath = this.basePath + '/timesheet/entry/>totalHours';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperDouble;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Add new timesheet entry. Only one entry per employee/date/activity/project combination is supported.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: TimesheetEntry) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimesheetEntry;  }> {
        const localVarPath = this.basePath + '/timesheet/entry';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimesheetEntry;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Add new timesheet entry. Multiple objects for several users can be sent in the same request.
     * @param body List of timesheet entry objects
     */
    public postList (body?: Array<TimesheetEntry>) : Promise<{ response: http.IncomingMessage; body: ListResponseTimesheetEntry;  }> {
        const localVarPath = this.basePath + '/timesheet/entry/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseTimesheetEntry;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Update timesheet entry by ID. Note: Timesheet entry object fields which are present but not set, or set to 0, will be nulled.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: TimesheetEntry) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimesheetEntry;  }> {
        const localVarPath = this.basePath + '/timesheet/entry/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimesheetEntry;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Update timesheet entry. Multiple objects for different users can be sent in the same request.
     * @param body List of timesheet entry objects to update
     */
    public putList (body?: Array<TimesheetEntry>) : Promise<{ response: http.IncomingMessage; body: ListResponseTimesheetEntry;  }> {
        const localVarPath = this.basePath + '/timesheet/entry/list';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseTimesheetEntry;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (dateFrom: string, dateTo: string, id?: string, employeeId?: string, projectId?: string, activityId?: string, comment?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: TimesheetEntrySearchResponse;  }> {
        const localVarPath = this.basePath + '/timesheet/entry';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: TimesheetEntrySearchResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TimesheettimeClockApiApiKeys {
}

export class TimesheettimeClockApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TimesheettimeClockApiApiKeys, value: string) {
        this.authentications[TimesheettimeClockApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Find time clock entry by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimeClock;  }> {
        const localVarPath = this.basePath + '/timesheet/timeClock/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimeClock;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find a user’s present running time clock.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param fields Fields filter pattern
     */
    public getPresent (employeeId?: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimeClock;  }> {
        const localVarPath = this.basePath + '/timesheet/timeClock/present';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimeClock;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Update time clock by ID.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: TimeClock) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimeClock;  }> {
        const localVarPath = this.basePath + '/timesheet/timeClock/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimeClock;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
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
    public search (id?: string, employeeId?: string, projectId?: string, activityId?: string, dateFrom?: string, dateTo?: string, hourId?: string, isRunning?: boolean, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseTimeClock;  }> {
        const localVarPath = this.basePath + '/timesheet/timeClock';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseTimeClock;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Start time clock.
     * @param activityId Activity ID
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param projectId Project ID
     * @param date Optional. Default is today’s date
     */
    public start (activityId: number, employeeId?: number, projectId?: number, date?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimeClock;  }> {
        const localVarPath = this.basePath + '/timesheet/timeClock/:start';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTimeClock;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Stop time clock.
     * @param id Element ID
     * @param version Number of current version
     */
    public stop (id: number, version?: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/timesheet/timeClock/{id}/:stop'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling stop.');
        }

        if (version !== undefined) {
            queryParameters['version'] = version;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TokenconsumerApiApiKeys {
}

export class TokenconsumerApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TokenconsumerApiApiKeys, value: string) {
        this.authentications[TokenconsumerApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Get consumer token by token string.
     * @param token Element ID
     * @param fields Fields filter pattern
     */
    public getByToken (token: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperConsumerToken;  }> {
        const localVarPath = this.basePath + '/token/consumer/byToken';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperConsumerToken;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TokenemployeeApiApiKeys {
}

export class TokenemployeeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TokenemployeeApiApiKeys, value: string) {
        this.authentications[TokenemployeeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Create an employee token. Only selected consumers are allowed
     * @param tokenName A user defined name for the new token
     * @param consumerName The name of the consumer
     * @param employeeId The id of the employee
     * @param companyOwned Is the key company owned
     * @param expirationDate Expiration date for the employeeToken
     */
    public create (tokenName: string, consumerName: string, employeeId: number, companyOwned: boolean, expirationDate: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployeeToken;  }> {
        const localVarPath = this.basePath + '/token/employee/:create';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'tokenName' is not null or undefined
        if (tokenName === null || tokenName === undefined) {
            throw new Error('Required parameter tokenName was null or undefined when calling create.');
        }

        // verify required parameter 'consumerName' is not null or undefined
        if (consumerName === null || consumerName === undefined) {
            throw new Error('Required parameter consumerName was null or undefined when calling create.');
        }

        // verify required parameter 'employeeId' is not null or undefined
        if (employeeId === null || employeeId === undefined) {
            throw new Error('Required parameter employeeId was null or undefined when calling create.');
        }

        // verify required parameter 'companyOwned' is not null or undefined
        if (companyOwned === null || companyOwned === undefined) {
            throw new Error('Required parameter companyOwned was null or undefined when calling create.');
        }

        // verify required parameter 'expirationDate' is not null or undefined
        if (expirationDate === null || expirationDate === undefined) {
            throw new Error('Required parameter expirationDate was null or undefined when calling create.');
        }

        if (tokenName !== undefined) {
            queryParameters['tokenName'] = tokenName;
        }

        if (consumerName !== undefined) {
            queryParameters['consumerName'] = consumerName;
        }

        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }

        if (companyOwned !== undefined) {
            queryParameters['companyOwned'] = companyOwned;
        }

        if (expirationDate !== undefined) {
            queryParameters['expirationDate'] = expirationDate;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperEmployeeToken;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TokensessionApiApiKeys {
}

export class TokensessionApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TokensessionApiApiKeys, value: string) {
        this.authentications[TokensessionApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary Delete session token.
     * @param token The login token string to delete
     */
    public _delete (token: string) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/token/session/{token}'
            .replace('{' + 'token' + '}', String(token));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Create session token.
     * @param consumerToken Token of the API consumer
     * @param employeeToken The employees token
     * @param expirationDate Expiration date for the combined token
     */
    public create (consumerToken: string, employeeToken: string, expirationDate: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperSessionToken;  }> {
        const localVarPath = this.basePath + '/token/session/:create';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperSessionToken;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Find information about the current user.
     * @param fields Fields filter pattern
     */
    public whoAmI (fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperLoggedInUserInfoDTO;  }> {
        const localVarPath = this.basePath + '/token/session/>whoAmI';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperLoggedInUserInfoDTO;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TravelExpenseApiApiKeys {
}

export class TravelExpenseApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TravelExpenseApiApiKeys, value: string) {
        this.authentications[TravelExpenseApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete travel expense.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/travelExpense/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Approve travel expenses.
     * @param id ID of the elements
     */
    public approve (id?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpense;  }> {
        const localVarPath = this.basePath + '/travelExpense/:approve';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpense;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Copy travel expense.
     * @param id Element ID
     */
    public copy (id: number) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpense;  }> {
        const localVarPath = this.basePath + '/travelExpense/:copy';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling copy.');
        }

        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpense;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Deliver travel expenses.
     * @param id ID of the elements
     */
    public deliver (id?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpense;  }> {
        const localVarPath = this.basePath + '/travelExpense/:deliver';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpense;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Get travel expense by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpense;  }> {
        const localVarPath = this.basePath + '/travelExpense/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpense;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create travel expense.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: TravelExpense) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpense;  }> {
        const localVarPath = this.basePath + '/travelExpense';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpense;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update travel expense.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: TravelExpense) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpense;  }> {
        const localVarPath = this.basePath + '/travelExpense/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpense;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find travel expenses corresponding with sent data.
     * @param employeeId Equals
     * @param departmentId Equals
     * @param projectId Equals
     * @param projectManagerId Equals
     * @param departureDateFrom From and including
     * @param returnDateTo To and excluding
     * @param state category
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (employeeId?: string, departmentId?: string, projectId?: string, projectManagerId?: string, departureDateFrom?: string, returnDateTo?: string, state?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpense;  }> {
        const localVarPath = this.basePath + '/travelExpense';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (employeeId !== undefined) {
            queryParameters['employeeId'] = employeeId;
        }

        if (departmentId !== undefined) {
            queryParameters['departmentId'] = departmentId;
        }

        if (projectId !== undefined) {
            queryParameters['projectId'] = projectId;
        }

        if (projectManagerId !== undefined) {
            queryParameters['projectManagerId'] = projectManagerId;
        }

        if (departureDateFrom !== undefined) {
            queryParameters['departureDateFrom'] = departureDateFrom;
        }

        if (returnDateTo !== undefined) {
            queryParameters['returnDateTo'] = returnDateTo;
        }

        if (state !== undefined) {
            queryParameters['state'] = state;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpense;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Unapprove travel expenses.
     * @param id ID of the elements
     */
    public unapprove (id?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpense;  }> {
        const localVarPath = this.basePath + '/travelExpense/:unapprove';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpense;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Undeliver travel expenses.
     * @param id ID of the elements
     */
    public undeliver (id?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpense;  }> {
        const localVarPath = this.basePath + '/travelExpense/:undeliver';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (id !== undefined) {
            queryParameters['id'] = id;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpense;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TravelExpenseaccommodationAllowanceApiApiKeys {
}

export class TravelExpenseaccommodationAllowanceApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TravelExpenseaccommodationAllowanceApiApiKeys, value: string) {
        this.authentications[TravelExpenseaccommodationAllowanceApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete accommodation allowance.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/travelExpense/accommodationAllowance/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Get travel accommodation allowance by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccommodationAllowance;  }> {
        const localVarPath = this.basePath + '/travelExpense/accommodationAllowance/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccommodationAllowance;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create accommodation allowance.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: AccommodationAllowance) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccommodationAllowance;  }> {
        const localVarPath = this.basePath + '/travelExpense/accommodationAllowance';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccommodationAllowance;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update accommodation allowance.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: AccommodationAllowance) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccommodationAllowance;  }> {
        const localVarPath = this.basePath + '/travelExpense/accommodationAllowance/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperAccommodationAllowance;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find accommodation allowances corresponding with sent data.
     * @param travelExpenseId Equals
     * @param rateTypeId Equals
     * @param rateCategoryId Equals
     * @param rateFrom From and including
     * @param rateTo To and excluding
     * @param countFrom From and including
     * @param countTo To and excluding
     * @param amountFrom From and including
     * @param amountTo To and excluding
     * @param location Containing
     * @param address Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, rateFrom?: number, rateTo?: number, countFrom?: number, countTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseAccommodationAllowance;  }> {
        const localVarPath = this.basePath + '/travelExpense/accommodationAllowance';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (travelExpenseId !== undefined) {
            queryParameters['travelExpenseId'] = travelExpenseId;
        }

        if (rateTypeId !== undefined) {
            queryParameters['rateTypeId'] = rateTypeId;
        }

        if (rateCategoryId !== undefined) {
            queryParameters['rateCategoryId'] = rateCategoryId;
        }

        if (rateFrom !== undefined) {
            queryParameters['rateFrom'] = rateFrom;
        }

        if (rateTo !== undefined) {
            queryParameters['rateTo'] = rateTo;
        }

        if (countFrom !== undefined) {
            queryParameters['countFrom'] = countFrom;
        }

        if (countTo !== undefined) {
            queryParameters['countTo'] = countTo;
        }

        if (amountFrom !== undefined) {
            queryParameters['amountFrom'] = amountFrom;
        }

        if (amountTo !== undefined) {
            queryParameters['amountTo'] = amountTo;
        }

        if (location !== undefined) {
            queryParameters['location'] = location;
        }

        if (address !== undefined) {
            queryParameters['address'] = address;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseAccommodationAllowance;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TravelExpensecostApiApiKeys {
}

export class TravelExpensecostApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TravelExpensecostApiApiKeys, value: string) {
        this.authentications[TravelExpensecostApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete cost.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/travelExpense/cost/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Get cost by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperCost;  }> {
        const localVarPath = this.basePath + '/travelExpense/cost/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperCost;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create cost.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: Cost) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperCost;  }> {
        const localVarPath = this.basePath + '/travelExpense/cost';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperCost;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update cost.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: Cost) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperCost;  }> {
        const localVarPath = this.basePath + '/travelExpense/cost/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperCost;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find costs corresponding with sent data.
     * @param travelExpenseId Equals
     * @param vatTypeId Equals
     * @param currencyId Equals
     * @param rateFrom From and including
     * @param rateTo To and excluding
     * @param countFrom From and including
     * @param countTo To and excluding
     * @param amountFrom From and including
     * @param amountTo To and excluding
     * @param location Containing
     * @param address Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (travelExpenseId?: string, vatTypeId?: string, currencyId?: string, rateFrom?: number, rateTo?: number, countFrom?: number, countTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseCost;  }> {
        const localVarPath = this.basePath + '/travelExpense/cost';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (travelExpenseId !== undefined) {
            queryParameters['travelExpenseId'] = travelExpenseId;
        }

        if (vatTypeId !== undefined) {
            queryParameters['vatTypeId'] = vatTypeId;
        }

        if (currencyId !== undefined) {
            queryParameters['currencyId'] = currencyId;
        }

        if (rateFrom !== undefined) {
            queryParameters['rateFrom'] = rateFrom;
        }

        if (rateTo !== undefined) {
            queryParameters['rateTo'] = rateTo;
        }

        if (countFrom !== undefined) {
            queryParameters['countFrom'] = countFrom;
        }

        if (countTo !== undefined) {
            queryParameters['countTo'] = countTo;
        }

        if (amountFrom !== undefined) {
            queryParameters['amountFrom'] = amountFrom;
        }

        if (amountTo !== undefined) {
            queryParameters['amountTo'] = amountTo;
        }

        if (location !== undefined) {
            queryParameters['location'] = location;
        }

        if (address !== undefined) {
            queryParameters['address'] = address;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseCost;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TravelExpensecostCategoryApiApiKeys {
}

export class TravelExpensecostCategoryApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TravelExpensecostCategoryApiApiKeys, value: string) {
        this.authentications[TravelExpensecostCategoryApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Get cost category by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelCostCategory;  }> {
        const localVarPath = this.basePath + '/travelExpense/costCategory/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelCostCategory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find cost category corresponding with sent data.
     * @param id List of IDs
     * @param description Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseTravelCostCategory;  }> {
        const localVarPath = this.basePath + '/travelExpense/costCategory';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseTravelCostCategory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TravelExpensemileageAllowanceApiApiKeys {
}

export class TravelExpensemileageAllowanceApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TravelExpensemileageAllowanceApiApiKeys, value: string) {
        this.authentications[TravelExpensemileageAllowanceApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete mileage allowance.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/travelExpense/mileageAllowance/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Get mileage allowance by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperMileageAllowance;  }> {
        const localVarPath = this.basePath + '/travelExpense/mileageAllowance/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperMileageAllowance;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create mileage allowance.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: MileageAllowance) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperMileageAllowance;  }> {
        const localVarPath = this.basePath + '/travelExpense/mileageAllowance';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperMileageAllowance;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update mileage allowance.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: MileageAllowance) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperMileageAllowance;  }> {
        const localVarPath = this.basePath + '/travelExpense/mileageAllowance/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperMileageAllowance;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find mileage allowances corresponding with sent data.
     * @param travelExpenseId Equals
     * @param rateTypeId Equals
     * @param rateCategoryId Equals
     * @param kmFrom From and including
     * @param kmTo To and excluding
     * @param rateFrom From and including
     * @param rateTo To and excluding
     * @param amountFrom From and including
     * @param amountTo To and excluding
     * @param departureLocation Containing
     * @param destination Containing
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param isCompanyCar Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, kmFrom?: number, kmTo?: number, rateFrom?: number, rateTo?: number, amountFrom?: number, amountTo?: number, departureLocation?: string, destination?: string, dateFrom?: string, dateTo?: string, isCompanyCar?: boolean, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseMileageAllowance;  }> {
        const localVarPath = this.basePath + '/travelExpense/mileageAllowance';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (travelExpenseId !== undefined) {
            queryParameters['travelExpenseId'] = travelExpenseId;
        }

        if (rateTypeId !== undefined) {
            queryParameters['rateTypeId'] = rateTypeId;
        }

        if (rateCategoryId !== undefined) {
            queryParameters['rateCategoryId'] = rateCategoryId;
        }

        if (kmFrom !== undefined) {
            queryParameters['kmFrom'] = kmFrom;
        }

        if (kmTo !== undefined) {
            queryParameters['kmTo'] = kmTo;
        }

        if (rateFrom !== undefined) {
            queryParameters['rateFrom'] = rateFrom;
        }

        if (rateTo !== undefined) {
            queryParameters['rateTo'] = rateTo;
        }

        if (amountFrom !== undefined) {
            queryParameters['amountFrom'] = amountFrom;
        }

        if (amountTo !== undefined) {
            queryParameters['amountTo'] = amountTo;
        }

        if (departureLocation !== undefined) {
            queryParameters['departureLocation'] = departureLocation;
        }

        if (destination !== undefined) {
            queryParameters['destination'] = destination;
        }

        if (dateFrom !== undefined) {
            queryParameters['dateFrom'] = dateFrom;
        }

        if (dateTo !== undefined) {
            queryParameters['dateTo'] = dateTo;
        }

        if (isCompanyCar !== undefined) {
            queryParameters['isCompanyCar'] = isCompanyCar;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseMileageAllowance;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TravelExpensepassengerApiApiKeys {
}

export class TravelExpensepassengerApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TravelExpensepassengerApiApiKeys, value: string) {
        this.authentications[TravelExpensepassengerApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete passenger.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/travelExpense/passenger/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Get passenger by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperPassenger;  }> {
        const localVarPath = this.basePath + '/travelExpense/passenger/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperPassenger;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create passenger.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: Passenger) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperPassenger;  }> {
        const localVarPath = this.basePath + '/travelExpense/passenger';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperPassenger;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update passenger.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: Passenger) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperPassenger;  }> {
        const localVarPath = this.basePath + '/travelExpense/passenger/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperPassenger;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find passengers corresponding with sent data.
     * @param mileageAllowance Equals
     * @param name Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (mileageAllowance?: string, name?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponsePassenger;  }> {
        const localVarPath = this.basePath + '/travelExpense/passenger';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (mileageAllowance !== undefined) {
            queryParameters['mileageAllowance'] = mileageAllowance;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponsePassenger;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TravelExpensepaymentTypeApiApiKeys {
}

export class TravelExpensepaymentTypeApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TravelExpensepaymentTypeApiApiKeys, value: string) {
        this.authentications[TravelExpensepaymentTypeApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Get payment type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelPaymentType;  }> {
        const localVarPath = this.basePath + '/travelExpense/paymentType/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelPaymentType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find payment type corresponding with sent data.
     * @param id List of IDs
     * @param description Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseTravelPaymentType;  }> {
        const localVarPath = this.basePath + '/travelExpense/paymentType';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseTravelPaymentType;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TravelExpenseperDiemCompensationApiApiKeys {
}

export class TravelExpenseperDiemCompensationApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TravelExpenseperDiemCompensationApiApiKeys, value: string) {
        this.authentications[TravelExpenseperDiemCompensationApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Delete per diem compensation.
     * @param id Element ID
     */
    public _delete (id: number) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/travelExpense/perDiemCompensation/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Get per diem compensation by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperPerDiemCompensation;  }> {
        const localVarPath = this.basePath + '/travelExpense/perDiemCompensation/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperPerDiemCompensation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Create per diem compensation.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    public post (body?: PerDiemCompensation) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperPerDiemCompensation;  }> {
        const localVarPath = this.basePath + '/travelExpense/perDiemCompensation';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperPerDiemCompensation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Update per diem compensation.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    public put (id: number, body?: PerDiemCompensation) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperPerDiemCompensation;  }> {
        const localVarPath = this.basePath + '/travelExpense/perDiemCompensation/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperPerDiemCompensation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find per diem compensations corresponding with sent data.
     * @param travelExpenseId Equals
     * @param rateTypeId Equals
     * @param rateCategoryId Equals
     * @param overnightAccommodation Equals
     * @param countFrom From and including
     * @param countTo To and excluding
     * @param rateFrom From and including
     * @param rateTo To and excluding
     * @param amountFrom From and including
     * @param amountTo To and excluding
     * @param location Containing
     * @param address Containing
     * @param isDeductionForBreakfast Equals
     * @param isLunchDeduction Equals
     * @param isDinnerDeduction Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, overnightAccommodation?: string, countFrom?: number, countTo?: number, rateFrom?: number, rateTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, isDeductionForBreakfast?: boolean, isLunchDeduction?: boolean, isDinnerDeduction?: boolean, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponsePerDiemCompensation;  }> {
        const localVarPath = this.basePath + '/travelExpense/perDiemCompensation';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (travelExpenseId !== undefined) {
            queryParameters['travelExpenseId'] = travelExpenseId;
        }

        if (rateTypeId !== undefined) {
            queryParameters['rateTypeId'] = rateTypeId;
        }

        if (rateCategoryId !== undefined) {
            queryParameters['rateCategoryId'] = rateCategoryId;
        }

        if (overnightAccommodation !== undefined) {
            queryParameters['overnightAccommodation'] = overnightAccommodation;
        }

        if (countFrom !== undefined) {
            queryParameters['countFrom'] = countFrom;
        }

        if (countTo !== undefined) {
            queryParameters['countTo'] = countTo;
        }

        if (rateFrom !== undefined) {
            queryParameters['rateFrom'] = rateFrom;
        }

        if (rateTo !== undefined) {
            queryParameters['rateTo'] = rateTo;
        }

        if (amountFrom !== undefined) {
            queryParameters['amountFrom'] = amountFrom;
        }

        if (amountTo !== undefined) {
            queryParameters['amountTo'] = amountTo;
        }

        if (location !== undefined) {
            queryParameters['location'] = location;
        }

        if (address !== undefined) {
            queryParameters['address'] = address;
        }

        if (isDeductionForBreakfast !== undefined) {
            queryParameters['isDeductionForBreakfast'] = isDeductionForBreakfast;
        }

        if (isLunchDeduction !== undefined) {
            queryParameters['isLunchDeduction'] = isLunchDeduction;
        }

        if (isDinnerDeduction !== undefined) {
            queryParameters['isDinnerDeduction'] = isDinnerDeduction;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponsePerDiemCompensation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TravelExpenserateApiApiKeys {
}

export class TravelExpenserateApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TravelExpenserateApiApiKeys, value: string) {
        this.authentications[TravelExpenserateApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Get travel expense rate by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpenseRate;  }> {
        const localVarPath = this.basePath + '/travelExpense/rate/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpenseRate;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find rates corresponding with sent data.
     * @param rateCategoryId Equals
     * @param type Equals
     * @param isValidDayTrip Equals
     * @param isValidAccommodation Equals
     * @param isValidDomestic Equals
     * @param isValidForeignTravel Equals
     * @param requiresZone Equals
     * @param requiresOvernightAccommodation Equals
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (rateCategoryId?: string, type?: string, isValidDayTrip?: boolean, isValidAccommodation?: boolean, isValidDomestic?: boolean, isValidForeignTravel?: boolean, requiresZone?: boolean, requiresOvernightAccommodation?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpenseRate;  }> {
        const localVarPath = this.basePath + '/travelExpense/rate';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (rateCategoryId !== undefined) {
            queryParameters['rateCategoryId'] = rateCategoryId;
        }

        if (type !== undefined) {
            queryParameters['type'] = type;
        }

        if (isValidDayTrip !== undefined) {
            queryParameters['isValidDayTrip'] = isValidDayTrip;
        }

        if (isValidAccommodation !== undefined) {
            queryParameters['isValidAccommodation'] = isValidAccommodation;
        }

        if (isValidDomestic !== undefined) {
            queryParameters['isValidDomestic'] = isValidDomestic;
        }

        if (isValidForeignTravel !== undefined) {
            queryParameters['isValidForeignTravel'] = isValidForeignTravel;
        }

        if (requiresZone !== undefined) {
            queryParameters['requiresZone'] = requiresZone;
        }

        if (requiresOvernightAccommodation !== undefined) {
            queryParameters['requiresOvernightAccommodation'] = requiresOvernightAccommodation;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpenseRate;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TravelExpenserateCategoryApiApiKeys {
}

export class TravelExpenserateCategoryApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TravelExpenserateCategoryApiApiKeys, value: string) {
        this.authentications[TravelExpenserateCategoryApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Get travel expense rate category by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpenseRateCategory;  }> {
        const localVarPath = this.basePath + '/travelExpense/rateCategory/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpenseRateCategory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find rate categories corresponding with sent data.
     * @param type Equals
     * @param name Containing
     * @param travelReportRateCategoryGroupId Equals
     * @param ameldingWageCode Containing
     * @param wageCodeNumber Equals
     * @param isValidDayTrip Equals
     * @param isValidAccommodation Equals
     * @param isValidDomestic Equals
     * @param requiresZone Equals
     * @param isRequiresOvernightAccommodation Equals
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (type?: string, name?: string, travelReportRateCategoryGroupId?: number, ameldingWageCode?: string, wageCodeNumber?: string, isValidDayTrip?: boolean, isValidAccommodation?: boolean, isValidDomestic?: boolean, requiresZone?: boolean, isRequiresOvernightAccommodation?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpenseRateCategory;  }> {
        const localVarPath = this.basePath + '/travelExpense/rateCategory';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (type !== undefined) {
            queryParameters['type'] = type;
        }

        if (name !== undefined) {
            queryParameters['name'] = name;
        }

        if (travelReportRateCategoryGroupId !== undefined) {
            queryParameters['travelReportRateCategoryGroupId'] = travelReportRateCategoryGroupId;
        }

        if (ameldingWageCode !== undefined) {
            queryParameters['ameldingWageCode'] = ameldingWageCode;
        }

        if (wageCodeNumber !== undefined) {
            queryParameters['wageCodeNumber'] = wageCodeNumber;
        }

        if (isValidDayTrip !== undefined) {
            queryParameters['isValidDayTrip'] = isValidDayTrip;
        }

        if (isValidAccommodation !== undefined) {
            queryParameters['isValidAccommodation'] = isValidAccommodation;
        }

        if (isValidDomestic !== undefined) {
            queryParameters['isValidDomestic'] = isValidDomestic;
        }

        if (requiresZone !== undefined) {
            queryParameters['requiresZone'] = requiresZone;
        }

        if (isRequiresOvernightAccommodation !== undefined) {
            queryParameters['isRequiresOvernightAccommodation'] = isRequiresOvernightAccommodation;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpenseRateCategory;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum TravelExpenserateCategoryGroupApiApiKeys {
}

export class TravelExpenserateCategoryGroupApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuthScheme': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
    }

    public setApiKey(key: TravelExpenserateCategoryGroupApiApiKeys, value: string) {
        this.authentications[TravelExpenserateCategoryGroupApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.tokenAuthScheme.username = username;
    }

    set password(password: string) {
        this.authentications.tokenAuthScheme.password = password;
    }
    /**
     * 
     * @summary [BETA] Get travel report rate category group by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    public get (id: number, fields?: string) : Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpenseRateCategoryGroup;  }> {
        const localVarPath = this.basePath + '/travelExpense/rateCategoryGroup/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        if (fields !== undefined) {
            queryParameters['fields'] = fields;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResponseWrapperTravelExpenseRateCategoryGroup;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary [BETA] Find rate categoriy groups corresponding with sent data.
     * @param name Containing
     * @param isForeignTravel Equals
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    public search (name?: string, isForeignTravel?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string) : Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpenseRateCategoryGroup;  }> {
        const localVarPath = this.basePath + '/travelExpense/rateCategoryGroup';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        if (name !== undefined) {
            queryParameters['name'] = name;
        }

        if (isForeignTravel !== undefined) {
            queryParameters['isForeignTravel'] = isForeignTravel;
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

        let useFormData = false;

        let requestOptions: request.Options = {
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
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ListResponseTravelExpenseRateCategoryGroup;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
