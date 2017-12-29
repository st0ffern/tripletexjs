/// <reference types="node" />
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
import request = require('request');
import http = require('http');
import Promise = require('bluebird');
export declare class AbstractDTO {
    'number': string;
    'description': string;
}
export declare class Account {
    'id': number;
    'version': number;
    'url': string;
    'number': number;
    'name': string;
    'description': string;
    'vatType': VatType;
    'vatLocked': boolean;
    'currency': Currency;
    'isCloseable': boolean;
}
export declare class AccountingPeriod {
    'id': number;
    'version': number;
    'url': string;
    'name': string;
    'number': number;
    'start': string;
    'end': string;
}
export declare class Activity {
    'id': number;
    'version': number;
    'url': string;
    'name': string;
    'number': string;
    'description': string;
    'isProjectActivity': boolean;
    'isGeneral': boolean;
    'isChargeable': boolean;
    'isTask': boolean;
}
export declare class Address {
    'id': number;
    'version': number;
    'url': string;
    'employee': Employee;
    'addressLine1': string;
    'addressLine2': string;
    'postalCode': string;
    'city': string;
    'country': Country;
}
export declare class AnnualAccount {
    'id': number;
    'version': number;
    'url': string;
    'year': number;
    'start': string;
    'end': string;
}
export declare class ApiConsumer {
    'id': number;
    'version': number;
    'url': string;
    'consumerName': string;
    'emails': string;
}
export declare class ApiError {
    'status': number;
    'code': number;
    'message': string;
    'link': string;
    'developerMessage': string;
    'validationMessages': Array<ApiValidationMessage>;
    'requestId': string;
}
export declare class ApiValidationMessage {
    'field': string;
    'message': string;
}
export declare class AppSpecific {
    'hourRegistrationEnabled': boolean;
    'projectEnabled': boolean;
    'userIsAllowedToRegisterHours': boolean;
}
export declare class Beacon {
    'id': number;
    'version': number;
    'url': string;
    'uuid': string;
    'major': string;
    'minor': string;
    'isActive': boolean;
    'name': string;
}
export declare class CSVRecord {
    'comment': string;
    'recordNumber': number;
    'consistent': boolean;
}
export declare class CloseGroup {
    'id': number;
    'version': number;
    'url': string;
    'date': string;
    'postings': Array<Posting>;
}
export declare class Company {
    'id': number;
    'version': number;
    'url': string;
    'name': string;
    'startDate': string;
    'endDate': string;
}
export declare class ConsumerToken {
    'id': number;
    'version': number;
    'url': string;
    'apiConsumer': ApiConsumer;
    'token': string;
    'expirationDate': string;
}
export declare class Contact {
    'id': number;
    'version': number;
    'url': string;
    'firstName': string;
    'lastName': string;
    'email': string;
    'customer': Customer;
}
export declare class Country {
    'id': number;
    'version': number;
    'url': string;
    'name': string;
}
export declare class Currency {
    'id': number;
    'version': number;
    'url': string;
    'code': string;
    'description': string;
}
export declare class Customer {
    'id': number;
    'version': number;
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
export declare class CustomerCategory {
    'id': number;
    'version': number;
    'url': string;
    'name': string;
    'number': string;
    'description': string;
}
export declare class Department {
    'id': number;
    'version': number;
    'url': string;
    'name': string;
    'departmentNumber': string;
    'departmentManager': Employee;
}
export declare class Employee {
    'id': number;
    'version': number;
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
    * Address tied to the employee
    */
    'address': Address;
    'department': Department;
    /**
    * Employments tied to the employee
    */
    'employments': Array<Employment>;
}
export declare namespace Employee {
    enum UserTypeEnum {
        STANDARD,
        EXTENDED,
        NOACCESS,
    }
}
export declare class EmployeeToken {
    'id': number;
    'version': number;
    'url': string;
    'employee': Employee;
    'apiConsumer': ApiConsumer;
    'token': string;
    'expirationDate': string;
}
export declare class Employment {
    'id': number;
    'version': number;
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
export declare class EmploymentDetails {
    'id': number;
    'version': number;
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
export declare class EmploymentType {
    'id': number;
    'version': number;
    'url': string;
    /**
    * Defines the employment type option.
    */
    'employmentType': EmploymentType.EmploymentTypeEnum;
    'nameNO': string;
    'code': string;
}
export declare namespace EmploymentType {
    enum EmploymentTypeEnum {
        RELATIONSHIP,
    }
}
export declare class Entitlement {
    'id': number;
    'version': number;
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
export declare class ImportConfigDTO {
    'onlyUsers': boolean;
    'skipUsers': boolean;
    'skipAccounts': boolean;
}
export declare class ImportReportDTO {
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
    'summary': {
        [key: string]: {
            [key: string]: number;
        };
    };
    'errors': Array<Result>;
    'messages': Array<string>;
    'results': Array<Result>;
}
export declare class Inventory {
    'id': number;
    'version': number;
    'url': string;
    'name': string;
    'number': string;
    'isMainInventory': boolean;
    'isInactive': boolean;
}
export declare class Invoice {
    'id': number;
    'version': number;
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
export declare namespace Invoice {
    enum EhfSendStatusEnum {
        DONOTSEND,
        SEND,
        SENT,
        SENDFAILURERECIPIENTNOTFOUND,
    }
}
export declare class LeaveOfAbsence {
    'id': number;
    'version': number;
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
export declare class LeaveOfAbsenceType {
    'id': number;
    'version': number;
    'url': string;
    /**
    * Defines the leave of absence type option.
    */
    'leaveOfAbsenceType': LeaveOfAbsenceType.LeaveOfAbsenceTypeEnum;
    'nameNO': string;
    'code': string;
}
export declare namespace LeaveOfAbsenceType {
    enum LeaveOfAbsenceTypeEnum {
        TYPE,
    }
}
export declare class LedgerAccount {
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
export declare class ListResponseAccount {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Account>;
}
export declare class ListResponseAccountingPeriod {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<AccountingPeriod>;
}
export declare class ListResponseActivity {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Activity>;
}
export declare class ListResponseAddress {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Address>;
}
export declare class ListResponseAnnualAccount {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<AnnualAccount>;
}
export declare class ListResponseBeacon {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Beacon>;
}
export declare class ListResponseCloseGroup {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<CloseGroup>;
}
export declare class ListResponseCompany {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Company>;
}
export declare class ListResponseContact {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Contact>;
}
export declare class ListResponseCountry {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Country>;
}
export declare class ListResponseCurrency {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Currency>;
}
export declare class ListResponseCustomer {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Customer>;
}
export declare class ListResponseCustomerCategory {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<CustomerCategory>;
}
export declare class ListResponseDepartment {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Department>;
}
export declare class ListResponseEmployee {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Employee>;
}
export declare class ListResponseEmployment {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Employment>;
}
export declare class ListResponseEmploymentDetails {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<EmploymentDetails>;
}
export declare class ListResponseEmploymentType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<EmploymentType>;
}
export declare class ListResponseEntitlement {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Entitlement>;
}
export declare class ListResponseInventory {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Inventory>;
}
export declare class ListResponseInvoice {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Invoice>;
}
export declare class ListResponseLeaveOfAbsenceType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<LeaveOfAbsenceType>;
}
export declare class ListResponseLedgerAccount {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<LedgerAccount>;
}
export declare class ListResponseNotification {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Notification>;
}
export declare class ListResponseOccupationCode {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<OccupationCode>;
}
export declare class ListResponseOrder {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Order>;
}
export declare class ListResponseOrderLine {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<OrderLine>;
}
export declare class ListResponsePaymentType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<PaymentType>;
}
export declare class ListResponsePayslip {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Payslip>;
}
export declare class ListResponsePosting {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Posting>;
}
export declare class ListResponseProduct {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Product>;
}
export declare class ListResponseProductUnit {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<ProductUnit>;
}
export declare class ListResponseProject {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Project>;
}
export declare class ListResponseProjectCategory {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<ProjectCategory>;
}
export declare class ListResponseProspect {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Prospect>;
}
export declare class ListResponseRemunerationType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<RemunerationType>;
}
export declare class ListResponseSalarySpecification {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<SalarySpecification>;
}
export declare class ListResponseSalaryTransaction {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<SalaryTransaction>;
}
export declare class ListResponseSalaryType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<SalaryType>;
}
export declare class ListResponseStandardTime {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<StandardTime>;
}
export declare class ListResponseSupplier {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<Supplier>;
}
export declare class ListResponseSupplierBalance {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<SupplierBalance>;
}
export declare class ListResponseTimeClock {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<TimeClock>;
}
export declare class ListResponseTimesheetEntry {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<TimesheetEntry>;
}
export declare class ListResponseVatType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<VatType>;
}
export declare class ListResponseVoucherType {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<VoucherType>;
}
export declare class ListResponseWeeklyStatus {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<WeeklyStatus>;
}
export declare class ListResponseWorkingHoursScheme {
    'fullResultSize': number;
    'from': number;
    'count': number;
    /**
    * Used to know if the paginated list has changed.
    */
    'versionDigest': string;
    'values': Array<WorkingHoursScheme>;
}
export declare class LoggedInUserInfoDTO {
    'employeeId': number;
    'companyId': number;
    'language': string;
}
export declare class MaventaEventDataDTO {
    'invoiceId': string;
    'invoiceNumber': string;
    'destination': string;
    'recipientName': string;
    'recipientBid': string;
    'errorMessage': string;
}
export declare class MaventaStatusDTO {
    'event': string;
    'companyId': string;
    'eventTimestamp': Date;
    'eventData': MaventaEventDataDTO;
}
export declare class MonthlyStatus {
    'id': number;
    'version': number;
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
export declare class Notification {
    'id': number;
    'version': number;
    'url': string;
    'date': string;
    'title': string;
    'message': string;
    'type': string;
    'link': string;
}
export declare class OccupationCode {
    'id': number;
    'version': number;
    'url': string;
    'nameNO': string;
    'code': string;
}
export declare class Order {
    'id': number;
    'version': number;
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
export declare namespace Order {
    enum InvoicesDueInTypeEnum {
        DAYS,
        MONTHS,
        RECURRINGDAYOFMONTH,
    }
    enum OrderLineSortingEnum {
        ID,
        PRODUCT,
        CUSTOM,
    }
    enum SubscriptionDurationTypeEnum {
        MONTHS,
        YEAR,
    }
    enum SubscriptionPeriodsOnInvoiceTypeEnum {
        MONTHS,
    }
    enum SubscriptionInvoicingTimeInAdvanceOrArrearsEnum {
        ADVANCE,
        ARREARS,
    }
    enum SubscriptionInvoicingTimeTypeEnum {
        DAYS,
        MONTHS,
    }
}
export declare class OrderLine {
    'id': number;
    'version': number;
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
export declare class PaymentType {
    'id': number;
    'version': number;
    'url': string;
    'description': string;
    'debitAccount': Account;
    'creditAccount': Account;
    'vatType': VatType;
    'customer': Customer;
    'supplier': Supplier;
}
export declare class Payslip {
    'id': number;
    'version': number;
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
}
export declare class Posting {
    'id': number;
    'version': number;
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
export declare class Product {
    'id': number;
    'version': number;
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
export declare class ProductUnit {
    'id': number;
    'version': number;
    'url': string;
    'name': string;
    'nameShort': string;
    'commonCode': string;
}
export declare class Project {
    'id': number;
    'version': number;
    'url': string;
    'name': string;
    'number': string;
    'projectManager': Employee;
    'startDate': string;
    'endDate': string;
    /**
    * The project's customer
    */
    'customer': Customer;
    'isClosed': boolean;
    'projectCategory': ProjectCategory;
}
export declare class ProjectCategory {
    'id': number;
    'version': number;
    'url': string;
    'name': string;
    'number': string;
    'description': string;
}
export declare class Prospect {
    'id': number;
    'version': number;
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
export declare class RemunerationType {
    'id': number;
    'version': number;
    'url': string;
    /**
    * Defines the remuneration type option.
    */
    'remunerationType': RemunerationType.RemunerationTypeEnum;
    'nameNO': string;
    'code': string;
}
export declare namespace RemunerationType {
    enum RemunerationTypeEnum {
        TYPE,
    }
}
export declare class ResponseWrapperAccount {
    'value': Account;
}
export declare class ResponseWrapperAccountingPeriod {
    'value': AccountingPeriod;
}
export declare class ResponseWrapperActivity {
    'value': Activity;
}
export declare class ResponseWrapperAddress {
    'value': Address;
}
export declare class ResponseWrapperAnnualAccount {
    'value': AnnualAccount;
}
export declare class ResponseWrapperApiConsumer {
    'value': ApiConsumer;
}
export declare class ResponseWrapperAppSpecific {
    'value': AppSpecific;
}
export declare class ResponseWrapperBeacon {
    'value': Beacon;
}
export declare class ResponseWrapperBoolean {
    'value': boolean;
}
export declare class ResponseWrapperCloseGroup {
    'value': CloseGroup;
}
export declare class ResponseWrapperCompany {
    'value': Company;
}
export declare class ResponseWrapperConsumerToken {
    'value': ConsumerToken;
}
export declare class ResponseWrapperContact {
    'value': Contact;
}
export declare class ResponseWrapperCountry {
    'value': Country;
}
export declare class ResponseWrapperCurrency {
    'value': Currency;
}
export declare class ResponseWrapperCustomer {
    'value': Customer;
}
export declare class ResponseWrapperCustomerCategory {
    'value': CustomerCategory;
}
export declare class ResponseWrapperDepartment {
    'value': Department;
}
export declare class ResponseWrapperDouble {
    'value': number;
}
export declare class ResponseWrapperEmployee {
    'value': Employee;
}
export declare class ResponseWrapperEmployeeToken {
    'value': EmployeeToken;
}
export declare class ResponseWrapperEmployment {
    'value': Employment;
}
export declare class ResponseWrapperEmploymentDetails {
    'value': EmploymentDetails;
}
export declare class ResponseWrapperEntitlement {
    'value': Entitlement;
}
export declare class ResponseWrapperInteger {
    'value': number;
}
export declare class ResponseWrapperInventory {
    'value': Inventory;
}
export declare class ResponseWrapperInvoice {
    'value': Invoice;
}
export declare class ResponseWrapperLeaveOfAbsence {
    'value': LeaveOfAbsence;
}
export declare class ResponseWrapperLoggedInUserInfoDTO {
    'value': LoggedInUserInfoDTO;
}
export declare class ResponseWrapperMonthlyStatus {
    'value': MonthlyStatus;
}
export declare class ResponseWrapperNotification {
    'value': Notification;
}
export declare class ResponseWrapperOrder {
    'value': Order;
}
export declare class ResponseWrapperOrderLine {
    'value': OrderLine;
}
export declare class ResponseWrapperPaymentType {
    'value': PaymentType;
}
export declare class ResponseWrapperPayslip {
    'value': Payslip;
}
export declare class ResponseWrapperPosting {
    'value': Posting;
}
export declare class ResponseWrapperProduct {
    'value': Product;
}
export declare class ResponseWrapperProductUnit {
    'value': ProductUnit;
}
export declare class ResponseWrapperProject {
    'value': Project;
}
export declare class ResponseWrapperProjectCategory {
    'value': ProjectCategory;
}
export declare class ResponseWrapperProspect {
    'value': Prospect;
}
export declare class ResponseWrapperSalarySpecification {
    'value': SalarySpecification;
}
export declare class ResponseWrapperSalaryTransaction {
    'value': SalaryTransaction;
}
export declare class ResponseWrapperSalaryType {
    'value': SalaryType;
}
export declare class ResponseWrapperSessionToken {
    'value': SessionToken;
}
export declare class ResponseWrapperStandardTime {
    'value': StandardTime;
}
export declare class ResponseWrapperString {
    'value': string;
}
export declare class ResponseWrapperSupplier {
    'value': Supplier;
}
export declare class ResponseWrapperTimeClock {
    'value': TimeClock;
}
export declare class ResponseWrapperTimesheetEntry {
    'value': TimesheetEntry;
}
export declare class ResponseWrapperTripletexAccountReturn {
    'value': TripletexAccountReturn;
}
export declare class ResponseWrapperUnreadCountDTO {
    'value': UnreadCountDTO;
}
export declare class ResponseWrapperVatType {
    'value': VatType;
}
export declare class ResponseWrapperVoucher {
    'value': Voucher;
}
export declare class ResponseWrapperVoucherType {
    'value': VoucherType;
}
export declare class ResponseWrapperWeeklyStatus {
    'value': WeeklyStatus;
}
export declare class Result {
    'file': Result.FileEnum;
    'line': number;
    'type': Result.TypeEnum;
    'number': string;
    'dbId': number;
    'input': {
        [key: string]: any;
    };
    'output': {
        [key: string]: any;
    };
    'log': Array<string>;
    'record': CSVRecord;
    'dto': AbstractDTO;
}
export declare namespace Result {
    enum FileEnum {
        DEPARTMENTS,
        EMPLOYEES,
        VATCODES,
        ACCOUNTS,
        CUSTOMERS,
        CUSTOMERSCATEGORIES,
        VENDORS,
        VENDORSCATEGORIES,
        CONTACTS,
        DELIVERYADDRESSES,
        PRODUCTS,
        PRODUCTSCATEGORIES,
        PROJECTS,
        PROJECTSCATEGORIES,
    }
    enum TypeEnum {
        IGNORED,
        UPDATED,
        CREATED,
        ERROR,
    }
}
export declare class SalarySpecification {
    'id': number;
    'version': number;
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
}
export declare class SalaryTransaction {
    'id': number;
    'version': number;
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
export declare class SalaryType {
    'id': number;
    'version': number;
    'url': string;
    'number': string;
    'name': string;
    'description': string;
}
export declare class SessionToken {
    'id': number;
    'version': number;
    'url': string;
    'consumerToken': ConsumerToken;
    'employeeToken': EmployeeToken;
    'expirationDate': string;
    'token': string;
    'encryptionKey': string;
}
export declare class StandardTime {
    'id': number;
    'version': number;
    'url': string;
    'employee': Employee;
    'fromDate': string;
    'hoursPerDay': number;
}
export declare class Supplier {
    'id': number;
    'version': number;
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
export declare class SupplierBalance {
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
export declare class TimeClock {
    'id': number;
    'version': number;
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
export declare class TimesheetEntry {
    'id': number;
    'version': number;
    'url': string;
    'project': Project;
    'activity': Activity;
    'date': string;
    'hours': number;
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
export declare class TimesheetEntrySearchResponse {
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
export declare class TripletexAccount {
    'companyName': string;
    'companyNumber': string;
    'companyEmail': string;
    'companyPhoneNumber': string;
    'companyPhoneNumberMobile': string;
    'companyFaxNumber': string;
    'companyType': number;
    'companyCustomerCategoryId3': number;
    'companyAddress1': string;
    'companyAddress2': string;
    'companyPostalCode': string;
    'companyCity': string;
    'employeeFirstName': string;
    'employeeLastName': string;
    'employeePassword': string;
    'employeeEmail': string;
    'wageModule': boolean;
}
export declare class TripletexAccountReturn {
    'company': Company;
    'employee': Employee;
}
export declare class UnreadCountDTO {
    'count': number;
    'readCursor': number;
}
export declare class VatType {
    'id': number;
    'version': number;
    'url': string;
    'name': string;
    'number': string;
    'percentage': number;
}
export declare class Voucher {
    'id': number;
    'version': number;
    'url': string;
    'date': string;
    /**
    * System generated number that cannot be changed.
    */
    'number': number;
    'year': number;
    'description': string;
    'voucherType': VoucherType;
    'postings': Array<Posting>;
}
export declare class VoucherSearchResponse {
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
export declare class VoucherType {
    'id': number;
    'version': number;
    'url': string;
    'name': string;
}
export declare class WeeklyStatus {
    'id': number;
    'version': number;
    'url': string;
    'employee': Employee;
    'year': number;
    'week': number;
    'completed': boolean;
    'approved': boolean;
    'approvedBy': Employee;
    'approvedDate': string;
}
export declare class WorkingHoursScheme {
    'id': number;
    'version': number;
    'url': string;
    /**
    * Defines the working hours scheme option.
    */
    'workingHoursScheme': WorkingHoursScheme.WorkingHoursSchemeEnum;
    'nameNO': string;
    'code': string;
}
export declare namespace WorkingHoursScheme {
    enum WorkingHoursSchemeEnum {
        SCHEME,
    }
}
export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: request.Options): void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: request.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: request.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: request.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: request.Options): void;
}
export declare enum ActivityApiApiKeys {
}
export declare class ActivityApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ActivityApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Find activity by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperActivity;
    }>;
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
    getForTimeSheet(projectId: number, employeeId?: number, date?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseActivity;
    }>;
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
    search(id?: string, name?: string, number?: string, description?: string, isProjectActivity?: boolean, isGeneral?: boolean, isChargeable?: boolean, isTask?: boolean, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseActivity;
    }>;
}
export declare enum AddressApiApiKeys {
}
export declare class AddressApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AddressApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get address by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperAddress;
    }>;
    /**
     *
     * @summary Update address.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: Address): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperAddress;
    }>;
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
    search(id?: string, addressLine1?: string, addressLine2?: string, postalCode?: string, city?: string, name?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseAddress;
    }>;
}
export declare enum CompanyApiApiKeys {
}
export declare class CompanyApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CompanyApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Find company by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperCompany;
    }>;
    /**
     *
     * @summary Find divisions.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    getDivisions(from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseCompany;
    }>;
    /**
     *
     * @summary Returns client customers (with accountant/auditor relation) where the current user has login access (proxy login).
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    getWithLoginAccess(from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseCompany;
    }>;
}
export declare enum ContactApiApiKeys {
}
export declare class ContactApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ContactApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get contact by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperContact;
    }>;
    /**
     *
     * @summary Create contact.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: Contact): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperContact;
    }>;
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
    search(id?: string, firstName?: string, lastName?: string, email?: string, customerId?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseContact;
    }>;
}
export declare enum CountryApiApiKeys {
}
export declare class CountryApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CountryApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get country by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperCountry;
    }>;
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
    search(id?: string, code?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseCountry;
    }>;
}
export declare enum CrmprospectApiApiKeys {
}
export declare class CrmprospectApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CrmprospectApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get prospect by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperProspect;
    }>;
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
    search(name?: string, description?: string, createdDateFrom?: string, createdDateTo?: string, customerId?: string, salesEmployeeId?: string, isClosed?: boolean, closedReason?: string, closedDateFrom?: string, closedDateTo?: string, competitor?: string, prospectType?: string, projectId?: string, projectOfferId?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseProspect;
    }>;
}
export declare enum CurrencyApiApiKeys {
}
export declare class CurrencyApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CurrencyApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get currency by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperCurrency;
    }>;
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
    search(id?: string, code?: string, fields?: string, from?: number, count?: number, sorting?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseCurrency;
    }>;
}
export declare enum CustomerApiApiKeys {
}
export declare class CustomerApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CustomerApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get customer by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperCustomer;
    }>;
    /**
     *
     * @summary Create customer. Related customer addresses may also be created.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: Customer): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperCustomer;
    }>;
    /**
     *
     * @summary Update customer.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: Customer): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperCustomer;
    }>;
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
    search(id?: string, customerAccountNumber?: string, email?: string, invoiceEmail?: string, isInactive?: boolean, accountManagerId?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseCustomer;
    }>;
}
export declare enum CustomercategoryApiApiKeys {
}
export declare class CustomercategoryApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CustomercategoryApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Find customer/supplier category by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperCustomerCategory;
    }>;
    /**
     *
     * @summary Add new customer/supplier category.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: CustomerCategory): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperCustomerCategory;
    }>;
    /**
     *
     * @summary Update customer/supplier category.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: CustomerCategory): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperCustomerCategory;
    }>;
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
    search(id?: string, name?: string, number?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseCustomerCategory;
    }>;
}
export declare enum DepartmentApiApiKeys {
}
export declare class DepartmentApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: DepartmentApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get department by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperDepartment;
    }>;
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
    search(id?: string, name?: string, departmentNumber?: string, departmentManagerId?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseDepartment;
    }>;
}
export declare enum EmployeeApiApiKeys {
}
export declare class EmployeeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmployeeApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get employee by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperEmployee;
    }>;
    /**
     *
     * @summary [BETA] Create one employee.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: Employee): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperEmployee;
    }>;
    /**
     *
     * @summary [BETA] Create several employees.
     * @param body JSON representing a list of new object to be created. Should not have ID and version set.
     */
    postList(body?: Array<Employee>): Promise<{
        response: http.ClientResponse;
        body: ListResponseEmployee;
    }>;
    /**
     *
     * @summary Update employee.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: Employee): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperEmployee;
    }>;
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
    search(id?: string, firstName?: string, lastName?: string, employeeNumber?: string, fields?: string, from?: number, count?: number, sorting?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseEmployee;
    }>;
}
export declare enum EmployeeemploymentApiApiKeys {
}
export declare class EmployeeemploymentApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmployeeemploymentApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Find employment by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperEmployment;
    }>;
    /**
     *
     * @summary [BETA] Create employment.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: Employment): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperEmployment;
    }>;
    /**
     *
     * @summary [BETA] Update employemnt.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: Employment): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperEmployment;
    }>;
    /**
     *
     * @summary Find all employments for employee.
     * @param employeeId Element ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseEmployment;
    }>;
}
export declare enum EmployeeemploymentdetailsApiApiKeys {
}
export declare class EmployeeemploymentdetailsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmployeeemploymentdetailsApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary [BETA] Find employment details by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperEmploymentDetails;
    }>;
    /**
     *
     * @summary [BETA] Create employment details.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: EmploymentDetails): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperEmploymentDetails;
    }>;
    /**
     *
     * @summary [BETA] Update employment details.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: EmploymentDetails): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperEmploymentDetails;
    }>;
    /**
     *
     * @summary [BETA] Find all employmentdetails for employment.
     * @param employmentId Element ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    search(employmentId?: number, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseEmploymentDetails;
    }>;
}
export declare enum EmployeeemploymentemploymentTypeApiApiKeys {
}
export declare class EmployeeemploymentemploymentTypeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmployeeemploymentemploymentTypeApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary [BETA] Find all employment type IDs.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    search(from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseEmploymentType;
    }>;
}
export declare enum EmployeeemploymentleaveOfAbsenceApiApiKeys {
}
export declare class EmployeeemploymentleaveOfAbsenceApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmployeeemploymentleaveOfAbsenceApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary [BETA] Find leave of absence by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperLeaveOfAbsence;
    }>;
    /**
     *
     * @summary [BETA] Create leave of absence.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: LeaveOfAbsence): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperLeaveOfAbsence;
    }>;
    /**
     *
     * @summary [BETA] Update leave of absence.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: LeaveOfAbsence): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperLeaveOfAbsence;
    }>;
}
export declare enum EmployeeemploymentleaveOfAbsenceTypeApiApiKeys {
}
export declare class EmployeeemploymentleaveOfAbsenceTypeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmployeeemploymentleaveOfAbsenceTypeApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary [BETA] Find all leave of absence type IDs.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    search(from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseLeaveOfAbsenceType;
    }>;
}
export declare enum EmployeeemploymentoccupationCodeApiApiKeys {
}
export declare class EmployeeemploymentoccupationCodeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmployeeemploymentoccupationCodeApiApiKeys, value: string): void;
    username: string;
    password: string;
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
    search(nameNO?: string, code?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseOccupationCode;
    }>;
}
export declare enum EmployeeemploymentremunerationTypeApiApiKeys {
}
export declare class EmployeeemploymentremunerationTypeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmployeeemploymentremunerationTypeApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary [BETA] Find all remuneration type IDs.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    search(from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseRemunerationType;
    }>;
}
export declare enum EmployeeemploymentworkingHoursSchemeApiApiKeys {
}
export declare class EmployeeemploymentworkingHoursSchemeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmployeeemploymentworkingHoursSchemeApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary [BETA] Find working hours scheme ID.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    search(from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseWorkingHoursScheme;
    }>;
}
export declare enum EmployeeentitlementApiApiKeys {
}
export declare class EmployeeentitlementApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmployeeentitlementApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get entitlement by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperEntitlement;
    }>;
    /**
     *
     * @summary Find all entitlements for user.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseEntitlement;
    }>;
}
export declare enum EmployeestandardTimeApiApiKeys {
}
export declare class EmployeestandardTimeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmployeestandardTimeApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary [BETA] Find standard time by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperStandardTime;
    }>;
    /**
     *
     * @summary [BETA] Create standard time.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: StandardTime): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperStandardTime;
    }>;
    /**
     *
     * @summary [BETA] Update standard time.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: StandardTime): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperStandardTime;
    }>;
    /**
     *
     * @summary [BETA] Find all standard times for employee.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseStandardTime;
    }>;
}
export declare enum InventoryApiApiKeys {
}
export declare class InventoryApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: InventoryApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get inventory by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperInventory;
    }>;
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
    search(id?: string, name?: string, isMainInventory?: boolean, isInactive?: boolean, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseInventory;
    }>;
}
export declare enum InvoiceApiApiKeys {
}
export declare class InvoiceApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: InvoiceApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get invoice document by invoice ID.
     * @param invoiceId Invoice ID from which PDF is downloaded.
     */
    downloadPdf(invoiceId: number): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    /**
     *
     * @summary Get invoice by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperInvoice;
    }>;
    /**
     *
     * @summary Update invoice. The invoice is updated with payment information. The amount is in the invoice’s currency.
     * @param id Invoice id
     * @param paymentDate Payment date
     * @param paymentTypeId PaymentType id
     * @param paidAmount Amount paid by customer
     */
    payment(id: number, paymentDate: string, paymentTypeId: number, paidAmount: number): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperInvoice;
    }>;
    /**
     *
     * @summary Create invoice.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     * @param sendToCustomer Equals
     */
    post(body?: Invoice, sendToCustomer?: boolean): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperInvoice;
    }>;
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
    search(invoiceDateFrom: string, invoiceDateTo: string, id?: string, invoiceNumber?: string, kid?: string, voucherId?: string, customerId?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseInvoice;
    }>;
}
export declare enum InvoicepaymentTypeApiApiKeys {
}
export declare class InvoicepaymentTypeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: InvoicepaymentTypeApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get payment type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperPaymentType;
    }>;
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
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponsePaymentType;
    }>;
}
export declare enum LedgerApiApiKeys {
}
export declare class LedgerApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: LedgerApiApiKeys, value: string): void;
    username: string;
    password: string;
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
    openPost(date: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, fields?: string, from?: number, count?: number, sorting?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseLedgerAccount;
    }>;
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
    search(dateFrom: string, dateTo: string, openPostings?: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, fields?: string, from?: number, count?: number, sorting?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseLedgerAccount;
    }>;
}
export declare enum LedgeraccountApiApiKeys {
}
export declare class LedgeraccountApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: LedgeraccountApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get account by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperAccount;
    }>;
    /**
     *
     * @summary Find accounts corresponding with sent data.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    search(from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseAccount;
    }>;
}
export declare enum LedgeraccountingPeriodApiApiKeys {
}
export declare class LedgeraccountingPeriodApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: LedgeraccountingPeriodApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get accounting period by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperAccountingPeriod;
    }>;
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
    search(id?: string, numberFrom?: number, numberTo?: number, startFrom?: string, startTo?: string, endFrom?: string, endTo?: string, count?: number, from?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseAccountingPeriod;
    }>;
}
export declare enum LedgerannualAccountApiApiKeys {
}
export declare class LedgerannualAccountApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: LedgerannualAccountApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get annual account by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperAnnualAccount;
    }>;
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
    search(id?: string, yearFrom?: number, yearTo?: number, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseAnnualAccount;
    }>;
}
export declare enum LedgercloseGroupApiApiKeys {
}
export declare class LedgercloseGroupApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: LedgercloseGroupApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get close group by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperCloseGroup;
    }>;
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
    search(dateFrom: string, dateTo: string, id?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseCloseGroup;
    }>;
}
export declare enum LedgerpostingApiApiKeys {
}
export declare class LedgerpostingApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: LedgerpostingApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Find postings by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperPosting;
    }>;
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
    openPost(date: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponsePosting;
    }>;
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
    search(dateFrom: string, dateTo: string, openPostings?: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponsePosting;
    }>;
}
export declare enum LedgervatTypeApiApiKeys {
}
export declare class LedgervatTypeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: LedgervatTypeApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get vat type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperVatType;
    }>;
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
    search(id?: string, number?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseVatType;
    }>;
}
export declare enum LedgervoucherApiApiKeys {
}
export declare class LedgervoucherApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: LedgervoucherApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get attachment by voucher ID.
     * @param voucherId Voucher ID from which PDF is downloaded.
     */
    downloadPdf(voucherId: number): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    /**
     *
     * @summary Get voucher by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperVoucher;
    }>;
    /**
     *
     * @summary Add new voucher. IMPORTANT: Also creates postings. Only the gross amounts will be used
     * @param sendToLedger Should the voucher be sent to ledger?
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(sendToLedger?: boolean, body?: Voucher): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperVoucher;
    }>;
    /**
     *
     * @summary Update voucher. Postings with guiRow==0 will be deleted and regenerated.
     * @param id Element ID
     * @param sendToLedger Should the voucher be sent to ledger?
     * @param body Partial object describing what should be updated
     */
    put(id: number, sendToLedger?: boolean, body?: Voucher): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperVoucher;
    }>;
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
    search(dateFrom: string, dateTo: string, id?: string, number?: string, numberFrom?: number, numberTo?: number, typeId?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: VoucherSearchResponse;
    }>;
    /**
     *
     * @summary Upload attachment to voucher. Send as multipart form.
     * @param voucherId Voucher ID to upload PDF to.
     * @param fileName File name to store the pdf under. Will not be the same as the filename on the file returned.
     * @param file The file
     */
    uploadPdf(voucherId: number, fileName: string, file: Buffer): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
export declare enum LedgervoucherTypeApiApiKeys {
}
export declare class LedgervoucherTypeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: LedgervoucherTypeApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get voucher type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperVoucherType;
    }>;
    /**
     *
     * @summary Find voucher types corresponding with sent data.
     * @param name Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    search(name?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseVoucherType;
    }>;
}
export declare enum OrderApiApiKeys {
}
export declare class OrderApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: OrderApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get order by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperOrder;
    }>;
    /**
     *
     * @summary Create new invoice from order.
     * @param id ID of order to invoice.
     * @param invoiceDate To and excluding
     * @param sendToCustomer Send invoice to customer
     */
    invoice(id: number, invoiceDate: string, sendToCustomer?: boolean): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperInvoice;
    }>;
    /**
     *
     * @summary Create order.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: Order): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperOrder;
    }>;
    /**
     *
     * @summary Update order.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: Order): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperOrder;
    }>;
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
    search(orderDateFrom: string, orderDateTo: string, id?: string, number?: string, customerId?: string, isClosed?: boolean, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseOrder;
    }>;
}
export declare enum OrderorderlineApiApiKeys {
}
export declare class OrderorderlineApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: OrderorderlineApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get order line by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperOrderLine;
    }>;
    /**
     *
     * @summary Create order line. When creating several order lines, use /list for better performance.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: OrderLine): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperOrderLine;
    }>;
    /**
     *
     * @summary Create multiple order lines.
     * @param body JSON representing a list of new object to be created. Should not have ID and version set.
     */
    postList(body?: Array<OrderLine>): Promise<{
        response: http.ClientResponse;
        body: ListResponseOrderLine;
    }>;
}
export declare enum ProductApiApiKeys {
}
export declare class ProductApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ProductApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get product by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperProduct;
    }>;
    /**
     *
     * @summary Create new product.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: Product): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperProduct;
    }>;
    /**
     *
     * @summary Update product.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: Product): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperProduct;
    }>;
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
    search(number?: string, productNumber?: Array<string>, name?: string, isInactive?: boolean, isStockItem?: boolean, currencyId?: string, vatTypeId?: string, productUnitId?: string, departmentId?: string, accountId?: string, costExcludingVatCurrencyFrom?: number, costExcludingVatCurrencyTo?: number, priceExcludingVatCurrencyFrom?: number, priceExcludingVatCurrencyTo?: number, priceIncludingVatCurrencyFrom?: number, priceIncludingVatCurrencyTo?: number, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseProduct;
    }>;
}
export declare enum ProductunitApiApiKeys {
}
export declare class ProductunitApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ProductunitApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get product unit by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperProductUnit;
    }>;
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
    search(id?: string, name?: string, nameShort?: string, commonCode?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseProductUnit;
    }>;
}
export declare enum ProjectApiApiKeys {
}
export declare class ProjectApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ProjectApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Find project by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperProject;
    }>;
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
    getForTimeSheet(employeeId?: number, date?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseProject;
    }>;
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
    search(id?: string, name?: string, number?: string, projectManagerId?: string, startDateFrom?: string, startDateTo?: string, endDateFrom?: string, endDateTo?: string, isClosed?: boolean, customerId?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseProject;
    }>;
}
export declare enum ProjectcategoryApiApiKeys {
}
export declare class ProjectcategoryApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ProjectcategoryApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Find project category by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperProjectCategory;
    }>;
    /**
     *
     * @summary Add new project category.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: ProjectCategory): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperProjectCategory;
    }>;
    /**
     *
     * @summary Update project category.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: ProjectCategory): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperProjectCategory;
    }>;
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
    search(id?: string, name?: string, number?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseProjectCategory;
    }>;
}
export declare enum SalarypayslipApiApiKeys {
}
export declare class SalarypayslipApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SalarypayslipApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary [BETA] Find payslip (PDF document) by ID.
     * @param id Element ID
     */
    downloadPdf(id: number): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    /**
     *
     * @summary [BETA] Find payslip by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperPayslip;
    }>;
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
    search(id?: string, employeeId?: string, wageTransactionId?: string, activityId?: string, yearFrom?: number, yearTo?: number, monthFrom?: number, monthTo?: number, voucherDateFrom?: string, voucherDateTo?: string, comment?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponsePayslip;
    }>;
}
export declare enum SalaryspecificationApiApiKeys {
}
export declare class SalaryspecificationApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SalaryspecificationApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary [BETA] Find salary specification entry by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperSalarySpecification;
    }>;
}
export declare enum SalarytransactionApiApiKeys {
}
export declare class SalarytransactionApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SalarytransactionApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary [BETA] Delete salary transaction by ID.
     * @param id Element ID
     */
    _delete(id: number): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    /**
     *
     * @summary [BETA] Find salary transaction by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperSalaryTransaction;
    }>;
    /**
     *
     * @summary [BETA] Create a new salary transaction.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: SalaryTransaction): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperSalaryTransaction;
    }>;
}
export declare enum SalarytypeApiApiKeys {
}
export declare class SalarytypeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SalarytypeApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary [BETA] Find salary type by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperSalaryType;
    }>;
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
    search(id?: string, number?: string, name?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseSalaryType;
    }>;
}
export declare enum SupplierApiApiKeys {
}
export declare class SupplierApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SupplierApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get supplier by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperSupplier;
    }>;
    /**
     *
     * @summary Create supplier. Related supplier addresses may also be created.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: Supplier): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperSupplier;
    }>;
    /**
     *
     * @summary Update supplier.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: Supplier): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperSupplier;
    }>;
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
    search(id?: string, supplierNumber?: string, email?: string, invoiceEmail?: string, isInactive?: boolean, accountManagerId?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseSupplier;
    }>;
}
export declare enum TimesheetentryApiApiKeys {
}
export declare class TimesheetentryApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TimesheetentryApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Delete timesheet entry by ID.
     * @param id Element ID
     * @param version Number of current version
     */
    _delete(id: number, version?: number): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    /**
     *
     * @summary Find timesheet entry by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperTimesheetEntry;
    }>;
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
    getRecentActivities(projectId: number, employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseActivity;
    }>;
    /**
     *
     * @summary Find projects with recent activities (timesheet entry registered).
     * @param employeeId ID of employee with recent project hours Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     */
    getRecentProjects(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseProject;
    }>;
    /**
     *
     * @summary Find total hours registered on an employee in a specific period.
     * @param employeeId ID of employee to find hours for. Defaults to ID of token owner.
     * @param startDate Format is yyyy-MM-dd (from and incl.). Defaults to today.
     * @param endDate Format is yyyy-MM-dd (to and excl.). Defaults to tomorrow.
     * @param fields Fields filter pattern
     */
    getTotalHours(employeeId?: number, startDate?: string, endDate?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperDouble;
    }>;
    /**
     *
     * @summary Add new timesheet entry. Only one entry per employee/date/activity/project combination is supported.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     */
    post(body?: TimesheetEntry): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperTimesheetEntry;
    }>;
    /**
     *
     * @summary Add new timesheet entry. Multiple objects for several users can be sent in the same request.
     * @param body List of timesheet entry objects
     */
    postList(body?: Array<TimesheetEntry>): Promise<{
        response: http.ClientResponse;
        body: ListResponseTimesheetEntry;
    }>;
    /**
     *
     * @summary Update timesheet entry by ID. Note: Timesheet entry object fields which are present but not set, or set to 0, will be nulled.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: TimesheetEntry): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperTimesheetEntry;
    }>;
    /**
     *
     * @summary Update timesheet entry. Multiple objects for different users can be sent in the same request.
     * @param body List of timesheet entry objects to update
     */
    putList(body?: Array<TimesheetEntry>): Promise<{
        response: http.ClientResponse;
        body: ListResponseTimesheetEntry;
    }>;
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
    search(dateFrom: string, dateTo: string, id?: string, employeeId?: string, projectId?: string, activityId?: string, comment?: string, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: TimesheetEntrySearchResponse;
    }>;
}
export declare enum TimesheettimeClockApiApiKeys {
}
export declare class TimesheettimeClockApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TimesheettimeClockApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Find time clock entry by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     */
    get(id: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperTimeClock;
    }>;
    /**
     *
     * @summary Find a user’s present running time clock.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param fields Fields filter pattern
     */
    getPresent(employeeId?: number, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperTimeClock;
    }>;
    /**
     *
     * @summary Update time clock by ID.
     * @param id Element ID
     * @param body Partial object describing what should be updated
     */
    put(id: number, body?: TimeClock): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperTimeClock;
    }>;
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
    search(id?: string, employeeId?: string, projectId?: string, activityId?: string, dateFrom?: string, dateTo?: string, hourId?: string, isRunning?: boolean, from?: number, count?: number, sorting?: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ListResponseTimeClock;
    }>;
    /**
     *
     * @summary Start time clock.
     * @param activityId Activity ID
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param projectId Project ID
     * @param date Optional. Default is today’s date
     */
    start(activityId: number, employeeId?: number, projectId?: number, date?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperTimeClock;
    }>;
    /**
     *
     * @summary Stop time clock.
     * @param id Element ID
     * @param version Number of current version
     */
    stop(id: number, version?: number): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
export declare enum TokenconsumerApiApiKeys {
}
export declare class TokenconsumerApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TokenconsumerApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Get consumer token by token string.
     * @param token Element ID
     * @param fields Fields filter pattern
     */
    getByToken(token: string, fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperConsumerToken;
    }>;
}
export declare enum TokensessionApiApiKeys {
}
export declare class TokensessionApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuthScheme': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TokensessionApiApiKeys, value: string): void;
    username: string;
    password: string;
    /**
     *
     * @summary Delete session token.
     * @param token The login token string to delete
     */
    _delete(token: string): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    /**
     *
     * @summary Create session token.
     * @param consumerToken Token of the API consumer
     * @param employeeToken The employees token
     * @param expirationDate Expiration date for the combined token
     */
    create(consumerToken: string, employeeToken: string, expirationDate: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperSessionToken;
    }>;
    /**
     *
     * @summary Find information about the current user.
     * @param fields Fields filter pattern
     */
    whoAmI(fields?: string): Promise<{
        response: http.ClientResponse;
        body: ResponseWrapperLoggedInUserInfoDTO;
    }>;
}
