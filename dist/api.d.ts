/**
 * Tripletex API
 * The Tripletex API is a **RESTful API**, which does not implement PATCH, but uses a PUT with optional fields.  **Actions** or commands are represented in our RESTful path with a prefixed **\":\"**. Example: **\"/v2/hours/123/:approve\"**.  **Summaries** or aggregated results are represented in our RESTful path with a prefixed **\"&gt;\"**. Example: **\"/v2/hours/&gt;thisWeeksBillables\"**.  **\"requestID\"** is a key found in all validation and error responses. If additional log information is absolutely necessary, our support division can locate the key value.  **HTTPS** is used by the entire API and will throw an error on HTTP.  **Download** the [swagger.json](/v2/swagger.json) file [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification) to [generate code](https://github.com/swagger-api/swagger-codegen). This document was generated from the Swagger JSON file.  **version:** This is a versioning number found on all DB records. If included, it will prevent your PUT/POST from overriding any updates to the record since your GET.  **Date & DateTime** follows the **ISO 8601** standard. Date: YYYY-MM-DD. DateTime: YYYY-MM-DDThh:mm:ssZ  **Sorting** is done by specifying a comma separated list, where a \"-\" prefix denotes descending. You can sort by sub object with the following format: 'project.name, -date'.  **Searching:** is done by entering values in the optional fields for each API call. The values fall into the following categories: range, in, exact and like.  **Missing fields or even no response data** can occur because result objects and fields are filtered on authorization.  **See [FAQ](https://tripletex.no/execute/docViewer?articleId=906&language=0) for more additional information.**   ##Authentication: - **Tokens:** The Tripletex API uses 3 different tokens - **consumerToken**, **employeeToken** and **sessionToken**.  - **consumerToken** is a token provided to the consumer by Tripletex after the API 2.0 registration is completed.  - **employeeToken** is a token created by an administrator in your Tripletex account via the user settings and the tab \"API access\". Each employee token must be given a set of entitlements. [Read more here.](https://tripletex.no/execute/docViewer?articleId=853&language=0)  - **sessionToken** is the token from \"/tokens/session/:create\" which requires a consumerToken and an employeeToken created with the same consumer token, but not an authentication header. See how to create a sessionToken [here](https://tripletex.no/execute/docViewer?articleId=855&language=0). - The session token is used as the password in \"Basic Authentication Header\" for API calls.  - Use blank or 0 as username for accessing the account with regular employee token, or if a company owned employee token accesses \"/company/&gt;withLoginAccess\" or \"/token/session/&gt;whoAmI\".  - For company owned employee tokens (accounting offices) the ID from \"/company/&gt;withLoginAccess\" can be used as username for accessing client accounts.  - If you need to create the header yourself use \"Authorization: Basic &lt;base64encode('0:sessionToken')&gt;\".   ##Tags: - <div class=\"tag-icon-beta\"></div> **[BETA]** This is a beta endpoint and can be subject to change. - <div class=\"tag-icon-deprecated\"></div> **[DEPRECATED]** Deprecated means that we intend to remove/change this feature or capability in a future \"major\" API release. We therefore discourage all use of this feature/capability.  ##Fields: - **project,activity,hours**  returns _{project:..., activity:...., hours:...}_. - just **project** returns _\"project\" : { \"id\": 12345, \"url\": \"tripletex.no/v2/projects/12345\"  }_. - **project(*)** returns _\"project\" : { \"id\": 12345 \"name\":\"ProjectName\" \"number.....startDate\": \"2013-01-07\" }_. - **project(name)** returns _*\"project\" : { \"name\":\"ProjectName\" }*_. - All elements and some subElements :  _*,activity(name),employee(*)_.  ##Changelog: - To get the changelog for a resource, 'changes' have to be explicitly specified as part of the fields parameter, I.E '*,changes'. - There are two types of change available:  -- 'CREATE' for when the resource was created -- 'UPDATE' for when the resource was last updated   ##Rate limiting in each response header: - **X-Rate-Limit-Limit** - The number of allowed requests in the current period. - **X-Rate-Limit-Remaining** - The number of remaining requests. - **X-Rate-Limit-Reset** - The number of seconds left in the current period.   ##Response envelope: ``` {   \"fullResultSize\": ###,   \"from\": ###, // Paging starting from   \"count\": ###, // Paging count   \"versionDigest\": \"Hash of full result\",   \"values\": [...list of objects...] } {   \"value\": {...single object...} } ```   ##WebHook envelope: ``` {   \"subscriptionId\": ###,   \"key\": \"object.verb\", // As listed from /v2/event/   \"id\": ###, // Object id   \"value\": {... single object, null if object.deleted ...} } ```    ##Error/Warning envelope: ``` {   \"status\": ###, // HTTP status code   \"code\": #####, // internal status code of event   \"message\": \"Basic feedback message in your language\",   \"link\": \"Link to doc\",   \"developerMessage\": \"More technical message\",   \"validationMessages\": [ // Will be null if Error     {       \"field\": \"Name of field\",       \"message\": \"Validation failure information\"     }   ],   \"requestId\": \"UUID used in any logs\" } ```   ##Status codes / Error codes: - **200 OK** - **201 Created** - From POSTs that create something new. - **204 No Content** - When there is no answer, ex: \"/:anAction\" or DELETE. - **400 Bad request** -   - **4000** Bad Request Exception   - **11000** Illegal Filter Exception   - **12000** Path Param Exception   - **24000**   Cryptography Exception - **401 Unauthorized** - When authentication is required and has failed or has not yet been provided   -  **3000** Authentication Exception   -  **9000** Security Exception - **403 Forbidden** - When AuthorisationManager says no. - **404 Not Found** - For content/IDs that does not exist.   -  **6000** Not Found Exception - **409 Conflict** - Such as an edit conflict between multiple simultaneous updates   -  **7000** Object Exists Exception   -  **8000** Revision Exception   - **10000** Locked Exception   - **14000** Duplicate entry - **422 Bad Request** - For Required fields or things like malformed payload.   - **15000** Value Validation Exception   - **16000** Mapping Exception   - **17000** Sorting Exception   - **18000** Validation Exception   - **21000** Param Exception   - **22000** Invalid JSON Exception   - **23000**   Result Set Too Large Exception - **500 Internal Error** -  Unexpected condition was encountered and no more specific message is suitable   -  **1000** Exception
 *
 * OpenAPI spec version: 2.15.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/// <reference path="../custom.d.ts" />
import { Configuration } from "./configuration";
/**
 *
 * @export
 */
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}
/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}
/**
 *
 * @export
 * @class BaseAPI
 */
export declare class BaseAPI {
    protected basePath: string;
    protected fetch: FetchAPI;
    protected configuration: Configuration;
    constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
/**
 *
 * @export
 * @interface AbstractDTO
 */
export interface AbstractDTO {
    /**
     *
     * @type {string}
     * @memberof AbstractDTO
     */
    number?: string;
    /**
     *
     * @type {string}
     * @memberof AbstractDTO
     */
    description?: string;
}
/**
 *
 * @export
 * @interface AccommodationAllowance
 */
export interface AccommodationAllowance {
    /**
     *
     * @type {number}
     * @memberof AccommodationAllowance
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof AccommodationAllowance
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof AccommodationAllowance
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof AccommodationAllowance
     */
    url?: string;
    /**
     *
     * @type {TravelExpense}
     * @memberof AccommodationAllowance
     */
    travelExpense?: TravelExpense;
    /**
     *
     * @type {TravelExpenseRate}
     * @memberof AccommodationAllowance
     */
    rateType?: TravelExpenseRate;
    /**
     *
     * @type {TravelExpenseRateCategory}
     * @memberof AccommodationAllowance
     */
    rateCategory?: TravelExpenseRateCategory;
    /**
     *
     * @type {string}
     * @memberof AccommodationAllowance
     */
    zone?: string;
    /**
     *
     * @type {string}
     * @memberof AccommodationAllowance
     */
    location: string;
    /**
     *
     * @type {string}
     * @memberof AccommodationAllowance
     */
    address?: string;
    /**
     *
     * @type {number}
     * @memberof AccommodationAllowance
     */
    count?: number;
    /**
     *
     * @type {number}
     * @memberof AccommodationAllowance
     */
    rate?: number;
    /**
     *
     * @type {number}
     * @memberof AccommodationAllowance
     */
    amount?: number;
}
/**
 *
 * @export
 * @interface Account
 */
export interface Account {
    /**
     *
     * @type {number}
     * @memberof Account
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Account
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Account
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Account
     */
    url?: string;
    /**
     *
     * @type {number}
     * @memberof Account
     */
    number: number;
    /**
     *
     * @type {string}
     * @memberof Account
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Account
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof Account
     */
    type?: Account.TypeEnum;
    /**
     * The default vat type for this account.
     * @type {VatType}
     * @memberof Account
     */
    vatType?: VatType;
    /**
     * True if all entries on this account must have the vat type given by vatType.
     * @type {boolean}
     * @memberof Account
     */
    vatLocked?: boolean;
    /**
     * If given, all entries on this account must have this currency.
     * @type {Currency}
     * @memberof Account
     */
    currency?: Currency;
    /**
     * True if it should be possible to close entries on this account and it is possible to filter on open entries.
     * @type {boolean}
     * @memberof Account
     */
    isCloseable?: boolean;
    /**
     * True if this account is applicable for supplier invoice registration.
     * @type {boolean}
     * @memberof Account
     */
    isApplicableForSupplierInvoice?: boolean;
    /**
     * True if this account must be reconciled before the accounting period closure.
     * @type {boolean}
     * @memberof Account
     */
    requireReconciliation?: boolean;
    /**
     * Inactive accounts will not show up in UI lists.
     * @type {boolean}
     * @memberof Account
     */
    isInactive?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Account
     */
    isBankAccount?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Account
     */
    isInvoiceAccount?: boolean;
    /**
     *
     * @type {string}
     * @memberof Account
     */
    bankAccountNumber?: string;
    /**
     *
     * @type {Country}
     * @memberof Account
     */
    bankAccountCountry?: Country;
    /**
     *
     * @type {string}
     * @memberof Account
     */
    bankName?: string;
    /**
     *
     * @type {string}
     * @memberof Account
     */
    bankAccountIBAN?: string;
    /**
     *
     * @type {string}
     * @memberof Account
     */
    bankAccountSWIFT?: string;
}
/**
 * @export
 * @namespace Account
 */
export declare namespace Account {
    /**
     * @export
     * @enum {string}
     */
    enum TypeEnum {
        ASSETS,
        EQUITY,
        LIABILITIES,
        OPERATINGREVENUES,
        OPERATINGEXPENSES,
        INVESTMENTINCOME,
        COSTOFCAPITAL,
        TAXONORDINARYACTIVITIES,
        EXTRAORDINARYINCOME,
        EXTRAORDINARYCOST,
        TAXONEXTRAORDINARYACTIVITIES,
        ANNUALRESULT,
        TRANSFERSANDALLOCATIONS
    }
}
/**
 *
 * @export
 * @interface AccountingPeriod
 */
export interface AccountingPeriod {
    /**
     *
     * @type {number}
     * @memberof AccountingPeriod
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof AccountingPeriod
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof AccountingPeriod
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof AccountingPeriod
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof AccountingPeriod
     */
    name?: string;
    /**
     *
     * @type {number}
     * @memberof AccountingPeriod
     */
    number?: number;
    /**
     *
     * @type {string}
     * @memberof AccountingPeriod
     */
    start?: string;
    /**
     *
     * @type {string}
     * @memberof AccountingPeriod
     */
    end?: string;
}
/**
 *
 * @export
 * @interface Activity
 */
export interface Activity {
    /**
     *
     * @type {number}
     * @memberof Activity
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Activity
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Activity
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Activity
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Activity
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Activity
     */
    number?: string;
    /**
     *
     * @type {string}
     * @memberof Activity
     */
    description?: string;
    /**
     *
     * @type {boolean}
     * @memberof Activity
     */
    isProjectActivity?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Activity
     */
    isGeneral?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Activity
     */
    isChargeable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Activity
     */
    isTask?: boolean;
}
/**
 *
 * @export
 * @interface Address
 */
export interface Address {
    /**
     *
     * @type {number}
     * @memberof Address
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Address
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Address
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Address
     */
    url?: string;
    /**
     *
     * @type {Employee}
     * @memberof Address
     */
    employee?: Employee;
    /**
     *
     * @type {string}
     * @memberof Address
     */
    addressLine1?: string;
    /**
     *
     * @type {string}
     * @memberof Address
     */
    addressLine2?: string;
    /**
     *
     * @type {string}
     * @memberof Address
     */
    postalCode?: string;
    /**
     *
     * @type {string}
     * @memberof Address
     */
    city?: string;
    /**
     *
     * @type {Country}
     * @memberof Address
     */
    country?: Country;
    /**
     *
     * @type {string}
     * @memberof Address
     */
    name?: string;
}
/**
 *
 * @export
 * @interface AnnualAccount
 */
export interface AnnualAccount {
    /**
     *
     * @type {number}
     * @memberof AnnualAccount
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof AnnualAccount
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof AnnualAccount
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof AnnualAccount
     */
    url?: string;
    /**
     *
     * @type {number}
     * @memberof AnnualAccount
     */
    year?: number;
    /**
     *
     * @type {string}
     * @memberof AnnualAccount
     */
    start?: string;
    /**
     *
     * @type {string}
     * @memberof AnnualAccount
     */
    end?: string;
}
/**
 *
 * @export
 * @interface ApiConsumer
 */
export interface ApiConsumer {
    /**
     *
     * @type {number}
     * @memberof ApiConsumer
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof ApiConsumer
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof ApiConsumer
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof ApiConsumer
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof ApiConsumer
     */
    consumerName: string;
    /**
     *
     * @type {string}
     * @memberof ApiConsumer
     */
    emails: string;
}
/**
 *
 * @export
 * @interface ApiError
 */
export interface ApiError {
    /**
     *
     * @type {number}
     * @memberof ApiError
     */
    status?: number;
    /**
     *
     * @type {number}
     * @memberof ApiError
     */
    code?: number;
    /**
     *
     * @type {string}
     * @memberof ApiError
     */
    message?: string;
    /**
     *
     * @type {string}
     * @memberof ApiError
     */
    link?: string;
    /**
     *
     * @type {string}
     * @memberof ApiError
     */
    developerMessage?: string;
    /**
     *
     * @type {Array&lt;ApiValidationMessage&gt;}
     * @memberof ApiError
     */
    validationMessages?: Array<ApiValidationMessage>;
    /**
     *
     * @type {string}
     * @memberof ApiError
     */
    requestId?: string;
}
/**
 *
 * @export
 * @interface ApiValidationMessage
 */
export interface ApiValidationMessage {
    /**
     *
     * @type {string}
     * @memberof ApiValidationMessage
     */
    field?: string;
    /**
     *
     * @type {string}
     * @memberof ApiValidationMessage
     */
    message?: string;
}
/**
 *
 * @export
 * @interface AppSpecific
 */
export interface AppSpecific {
    /**
     *
     * @type {boolean}
     * @memberof AppSpecific
     */
    hourRegistrationEnabled?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AppSpecific
     */
    projectEnabled?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AppSpecific
     */
    userIsAllowedToRegisterHours?: boolean;
}
/**
 *
 * @export
 * @interface Bank
 */
export interface Bank {
    /**
     *
     * @type {number}
     * @memberof Bank
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Bank
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Bank
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Bank
     */
    url?: string;
    /**
     * Bank name
     * @type {string}
     * @memberof Bank
     */
    name?: string;
    /**
     * Bank statement file formats supported.
     * @type {Array&lt;string&gt;}
     * @memberof Bank
     */
    bankStatementFileFormatSupport?: Array<Bank.BankStatementFileFormatSupportEnum>;
    /**
     * Register numbers belonging to bank.
     * @type {Array&lt;number&gt;}
     * @memberof Bank
     */
    registerNumbers?: Array<number>;
}
/**
 * @export
 * @namespace Bank
 */
export declare namespace Bank {
    /**
     * @export
     * @enum {string}
     */
    enum BankStatementFileFormatSupportEnum {
        DANSKEBANKCSV,
        EIKATELEPAY
    }
}
/**
 *
 * @export
 * @interface BankReconciliation
 */
export interface BankReconciliation {
    /**
     *
     * @type {number}
     * @memberof BankReconciliation
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof BankReconciliation
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof BankReconciliation
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof BankReconciliation
     */
    url?: string;
    /**
     *
     * @type {Account}
     * @memberof BankReconciliation
     */
    account: Account;
    /**
     *
     * @type {AccountingPeriod}
     * @memberof BankReconciliation
     */
    accountingPeriod: AccountingPeriod;
    /**
     *
     * @type {Voucher}
     * @memberof BankReconciliation
     */
    voucher?: Voucher;
    /**
     *
     * @type {BankStatement}
     * @memberof BankReconciliation
     */
    bankStatement?: BankStatement;
    /**
     *
     * @type {boolean}
     * @memberof BankReconciliation
     */
    isClosed?: boolean;
    /**
     *
     * @type {number}
     * @memberof BankReconciliation
     */
    outgoingBankAccountBalanceCurrency?: number;
    /**
     *
     * @type {string}
     * @memberof BankReconciliation
     */
    closedDate?: string;
    /**
     *
     * @type {Contact}
     * @memberof BankReconciliation
     */
    closedByContact?: Contact;
    /**
     *
     * @type {Employee}
     * @memberof BankReconciliation
     */
    closedByEmployee?: Employee;
}
/**
 *
 * @export
 * @interface BankReconciliationMatch
 */
export interface BankReconciliationMatch {
    /**
     *
     * @type {number}
     * @memberof BankReconciliationMatch
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof BankReconciliationMatch
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof BankReconciliationMatch
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof BankReconciliationMatch
     */
    url?: string;
    /**
     *
     * @type {BankReconciliation}
     * @memberof BankReconciliationMatch
     */
    bankReconciliation: BankReconciliation;
    /**
     * Match transactions
     * @type {Array&lt;BankTransaction&gt;}
     * @memberof BankReconciliationMatch
     */
    transactions?: Array<BankTransaction>;
    /**
     * Match postings
     * @type {Array&lt;Posting&gt;}
     * @memberof BankReconciliationMatch
     */
    postings?: Array<Posting>;
}
/**
 *
 * @export
 * @interface BankReconciliationPaymentType
 */
export interface BankReconciliationPaymentType {
    /**
     *
     * @type {number}
     * @memberof BankReconciliationPaymentType
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof BankReconciliationPaymentType
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof BankReconciliationPaymentType
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof BankReconciliationPaymentType
     */
    url?: string;
    /**
     * Description
     * @type {string}
     * @memberof BankReconciliationPaymentType
     */
    description?: string;
    /**
     * Debit account
     * @type {Account}
     * @memberof BankReconciliationPaymentType
     */
    debitAccount?: Account;
    /**
     * Credit account
     * @type {Account}
     * @memberof BankReconciliationPaymentType
     */
    creditAccount?: Account;
}
/**
 *
 * @export
 * @interface BankStatement
 */
export interface BankStatement {
    /**
     *
     * @type {number}
     * @memberof BankStatement
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof BankStatement
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof BankStatement
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof BankStatement
     */
    url?: string;
    /**
     * Balance on the account.
     * @type {number}
     * @memberof BankStatement
     */
    balanceCurrency?: number;
    /**
     * Bank statement file name.
     * @type {string}
     * @memberof BankStatement
     */
    fileName?: string;
    /**
     * Bank transactions tied to the bank statement
     * @type {Array&lt;BankTransaction&gt;}
     * @memberof BankStatement
     */
    transactions?: Array<BankTransaction>;
}
/**
 *
 * @export
 * @interface BankTransaction
 */
export interface BankTransaction {
    /**
     *
     * @type {number}
     * @memberof BankTransaction
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof BankTransaction
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof BankTransaction
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof BankTransaction
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof BankTransaction
     */
    postedDate?: string;
    /**
     *
     * @type {string}
     * @memberof BankTransaction
     */
    description?: string;
    /**
     *
     * @type {number}
     * @memberof BankTransaction
     */
    amountCurrency?: number;
    /**
     *
     * @type {BankReconciliation}
     * @memberof BankTransaction
     */
    bankStatement?: BankReconciliation;
}
/**
 *
 * @export
 * @interface Banner
 */
export interface Banner {
    /**
     *
     * @type {number}
     * @memberof Banner
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Banner
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Banner
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Banner
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Banner
     */
    bannerType: string;
    /**
     *
     * @type {string}
     * @memberof Banner
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof Banner
     */
    message: string;
    /**
     *
     * @type {string}
     * @memberof Banner
     */
    button: string;
    /**
     *
     * @type {string}
     * @memberof Banner
     */
    link: string;
    /**
     *
     * @type {string}
     * @memberof Banner
     */
    tag: string;
    /**
     *
     * @type {boolean}
     * @memberof Banner
     */
    done: boolean;
}
/**
 *
 * @export
 * @interface CSVRecord
 */
export interface CSVRecord {
    /**
     *
     * @type {string}
     * @memberof CSVRecord
     */
    comment?: string;
    /**
     *
     * @type {number}
     * @memberof CSVRecord
     */
    recordNumber?: number;
    /**
     *
     * @type {boolean}
     * @memberof CSVRecord
     */
    consistent?: boolean;
}
/**
 *
 * @export
 * @interface Change
 */
export interface Change {
    /**
     *
     * @type {number}
     * @memberof Change
     */
    employeeId?: number;
    /**
     *
     * @type {Date}
     * @memberof Change
     */
    timestamp?: Date;
    /**
     *
     * @type {string}
     * @memberof Change
     */
    changeType?: Change.ChangeTypeEnum;
}
/**
 * @export
 * @namespace Change
 */
export declare namespace Change {
    /**
     * @export
     * @enum {string}
     */
    enum ChangeTypeEnum {
        CREATE,
        UPDATE,
        DELETE
    }
}
/**
 *
 * @export
 * @interface CloseGroup
 */
export interface CloseGroup {
    /**
     *
     * @type {number}
     * @memberof CloseGroup
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof CloseGroup
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof CloseGroup
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof CloseGroup
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof CloseGroup
     */
    date?: string;
    /**
     *
     * @type {Array&lt;Posting&gt;}
     * @memberof CloseGroup
     */
    postings?: Array<Posting>;
}
/**
 *
 * @export
 * @interface Company
 */
export interface Company {
    /**
     *
     * @type {number}
     * @memberof Company
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Company
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Company
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    startDate?: string;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    endDate?: string;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    organizationNumber?: string;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    phoneNumber?: string;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    phoneNumberMobile?: string;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    faxNumber?: string;
    /**
     *
     * @type {Address}
     * @memberof Company
     */
    address: Address;
    /**
     *
     * @type {string}
     * @memberof Company
     */
    type: Company.TypeEnum;
}
/**
 * @export
 * @namespace Company
 */
export declare namespace Company {
    /**
     * @export
     * @enum {string}
     */
    enum TypeEnum {
        NONE,
        ENK,
        AS,
        NUF,
        ANS,
        DA,
        PRE,
        KS,
        ASA,
        BBL,
        BRL,
        GFS,
        SPA,
        SF,
        IKS,
        KFFKF,
        FCD,
        EOFG,
        BA,
        STI,
        ORG,
        ESEK,
        SAM,
        BO,
        VPFO,
        OS,
        Other
    }
}
/**
 *
 * @export
 * @interface ConsumerToken
 */
export interface ConsumerToken {
    /**
     *
     * @type {number}
     * @memberof ConsumerToken
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof ConsumerToken
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof ConsumerToken
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof ConsumerToken
     */
    url?: string;
    /**
     *
     * @type {ApiConsumer}
     * @memberof ConsumerToken
     */
    apiConsumer?: ApiConsumer;
    /**
     *
     * @type {string}
     * @memberof ConsumerToken
     */
    token?: string;
    /**
     *
     * @type {string}
     * @memberof ConsumerToken
     */
    expirationDate?: string;
}
/**
 *
 * @export
 * @interface Contact
 */
export interface Contact {
    /**
     *
     * @type {number}
     * @memberof Contact
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Contact
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Contact
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    firstName: string;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    lastName: string;
    /**
     *
     * @type {string}
     * @memberof Contact
     */
    email?: string;
    /**
     *
     * @type {Customer}
     * @memberof Contact
     */
    customer?: Customer;
}
/**
 *
 * @export
 * @interface Cost
 */
export interface Cost {
    /**
     *
     * @type {number}
     * @memberof Cost
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Cost
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Cost
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Cost
     */
    url?: string;
    /**
     *
     * @type {TravelExpense}
     * @memberof Cost
     */
    travelExpense?: TravelExpense;
    /**
     *
     * @type {VatType}
     * @memberof Cost
     */
    vatType?: VatType;
    /**
     *
     * @type {Currency}
     * @memberof Cost
     */
    currency?: Currency;
    /**
     *
     * @type {PaymentType}
     * @memberof Cost
     */
    costCategory: PaymentType;
    /**
     *
     * @type {PaymentType}
     * @memberof Cost
     */
    paymentType: PaymentType;
    /**
     *
     * @type {string}
     * @memberof Cost
     */
    category?: string;
    /**
     *
     * @type {string}
     * @memberof Cost
     */
    comments?: string;
    /**
     *
     * @type {number}
     * @memberof Cost
     */
    rate?: number;
    /**
     *
     * @type {number}
     * @memberof Cost
     */
    amountCurrencyIncVat: number;
    /**
     *
     * @type {number}
     * @memberof Cost
     */
    amountNOKInclVAT?: number;
    /**
     *
     * @type {number}
     * @memberof Cost
     */
    amountNOKInclVATLow?: number;
    /**
     *
     * @type {number}
     * @memberof Cost
     */
    amountNOKInclVATMedium?: number;
    /**
     *
     * @type {number}
     * @memberof Cost
     */
    amountNOKInclVATHigh?: number;
    /**
     *
     * @type {boolean}
     * @memberof Cost
     */
    isPaidByEmployee?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Cost
     */
    isChargeable?: boolean;
    /**
     *
     * @type {string}
     * @memberof Cost
     */
    date: string;
}
/**
 *
 * @export
 * @interface Country
 */
export interface Country {
    /**
     *
     * @type {number}
     * @memberof Country
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Country
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Country
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Country
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Country
     */
    name?: string;
}
/**
 *
 * @export
 * @interface Currency
 */
export interface Currency {
    /**
     *
     * @type {number}
     * @memberof Currency
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Currency
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Currency
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    code?: string;
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    description?: string;
}
/**
 *
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     *
     * @type {number}
     * @memberof Customer
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Customer
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Customer
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    organizationNumber?: string;
    /**
     *
     * @type {number}
     * @memberof Customer
     */
    supplierNumber?: number;
    /**
     *
     * @type {number}
     * @memberof Customer
     */
    customerNumber?: number;
    /**
     *
     * @type {boolean}
     * @memberof Customer
     */
    isSupplier?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Customer
     */
    isCustomer?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Customer
     */
    isInactive?: boolean;
    /**
     *
     * @type {Employee}
     * @memberof Customer
     */
    accountManager?: Employee;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    invoiceEmail?: string;
    /**
     * List of the bank account numbers for this customer. Norwegian bank account numbers only.
     * @type {Array&lt;string&gt;}
     * @memberof Customer
     */
    bankAccounts?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    phoneNumber?: string;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    phoneNumberMobile?: string;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    description?: string;
    /**
     *
     * @type {boolean}
     * @memberof Customer
     */
    isPrivateIndividual?: boolean;
    /**
     *
     * @type {Address}
     * @memberof Customer
     */
    postalAddress?: Address;
    /**
     *
     * @type {Address}
     * @memberof Customer
     */
    physicalAddress?: Address;
    /**
     *
     * @type {Address}
     * @memberof Customer
     */
    deliveryAddress?: Address;
    /**
     * Category 1 of this customer
     * @type {CustomerCategory}
     * @memberof Customer
     */
    category1?: CustomerCategory;
    /**
     * Category 2 of this customer
     * @type {CustomerCategory}
     * @memberof Customer
     */
    category2?: CustomerCategory;
    /**
     * Category 3 of this customer
     * @type {CustomerCategory}
     * @memberof Customer
     */
    category3?: CustomerCategory;
}
/**
 *
 * @export
 * @interface CustomerCategory
 */
export interface CustomerCategory {
    /**
     *
     * @type {number}
     * @memberof CustomerCategory
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof CustomerCategory
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof CustomerCategory
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof CustomerCategory
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerCategory
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof CustomerCategory
     */
    number?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerCategory
     */
    description?: string;
    /**
     *
     * @type {number}
     * @memberof CustomerCategory
     */
    type?: number;
}
/**
 *
 * @export
 * @interface CustomerTripletexAccount
 */
export interface CustomerTripletexAccount {
    /**
     * Administrator user to create in the new company. Leave empty if calling this enpoint as an auditor og accountant company
     * @type {Employee}
     * @memberof CustomerTripletexAccount
     */
    administrator?: Employee;
    /**
     * The customer id to an already created customer to create a Tripletex account for.
     * @type {number}
     * @memberof CustomerTripletexAccount
     */
    customerId?: number;
    /**
     *
     * @type {string}
     * @memberof CustomerTripletexAccount
     */
    accountType: CustomerTripletexAccount.AccountTypeEnum;
    /**
     *
     * @type {Modules}
     * @memberof CustomerTripletexAccount
     */
    modules: Modules;
    /**
     *
     * @type {string}
     * @memberof CustomerTripletexAccount
     */
    type: CustomerTripletexAccount.TypeEnum;
    /**
     * Should the emails normally sent during creation be sent in this case?
     * @type {boolean}
     * @memberof CustomerTripletexAccount
     */
    sendEmails?: boolean;
    /**
     * Should the user be automatically validated?
     * @type {boolean}
     * @memberof CustomerTripletexAccount
     */
    autoValidateUserLogin?: boolean;
    /**
     * Creates a token for the admin user. The accounting office could also use their tokens so you might not need this.
     * @type {boolean}
     * @memberof CustomerTripletexAccount
     */
    createApiToken?: boolean;
    /**
     * Should the invoices for this account be sent to the customer?
     * @type {boolean}
     * @memberof CustomerTripletexAccount
     */
    sendInvoiceToCustomer?: boolean;
    /**
     * The address to send the invoice to at the customer.
     * @type {string}
     * @memberof CustomerTripletexAccount
     */
    customerInvoiceEmail?: string;
    /**
     * The number of employees in the customer company. Is used for calculating prices and setting some default settings, i.e. approval settings for timesheet.
     * @type {number}
     * @memberof CustomerTripletexAccount
     */
    numberOfEmployees?: number;
    /**
     * Number of vouchers each year. Used to calculate prices.
     * @type {string}
     * @memberof CustomerTripletexAccount
     */
    numberOfVouchers: CustomerTripletexAccount.NumberOfVouchersEnum;
    /**
     * The password of the administrator user.
     * @type {string}
     * @memberof CustomerTripletexAccount
     */
    administratorPassword?: string;
}
/**
 * @export
 * @namespace CustomerTripletexAccount
 */
export declare namespace CustomerTripletexAccount {
    /**
     * @export
     * @enum {string}
     */
    enum AccountTypeEnum {
        TEST,
        PAYING
    }
    /**
     * @export
     * @enum {string}
     */
    enum TypeEnum {
        NONE,
        ENK,
        AS,
        NUF,
        ANS,
        DA,
        PRE,
        KS,
        ASA,
        BBL,
        BRL,
        GFS,
        SPA,
        SF,
        IKS,
        KFFKF,
        FCD,
        EOFG,
        BA,
        STI,
        ORG,
        ESEK,
        SAM,
        BO,
        VPFO,
        OS,
        Other
    }
    /**
     * @export
     * @enum {string}
     */
    enum NumberOfVouchersEnum {
        _0100,
        _101500,
        _0500,
        _5011000,
        _10012000,
        _20013500,
        _35015000,
        _500110000,
        UNLIMITED
    }
}
/**
 *
 * @export
 * @interface Department
 */
export interface Department {
    /**
     *
     * @type {number}
     * @memberof Department
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Department
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Department
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Department
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Department
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Department
     */
    departmentNumber?: string;
    /**
     *
     * @type {Employee}
     * @memberof Department
     */
    departmentManager?: Employee;
}
/**
 *
 * @export
 * @interface Employee
 */
export interface Employee {
    /**
     *
     * @type {number}
     * @memberof Employee
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Employee
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Employee
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Employee
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Employee
     */
    firstName: string;
    /**
     *
     * @type {string}
     * @memberof Employee
     */
    lastName: string;
    /**
     *
     * @type {string}
     * @memberof Employee
     */
    employeeNumber?: string;
    /**
     *
     * @type {string}
     * @memberof Employee
     */
    dateOfBirth?: string;
    /**
     *
     * @type {string}
     * @memberof Employee
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof Employee
     */
    phoneNumberMobile?: string;
    /**
     *
     * @type {string}
     * @memberof Employee
     */
    nationalIdentityNumber?: string;
    /**
     *
     * @type {string}
     * @memberof Employee
     */
    dnumber?: string;
    /**
     *
     * @type {string}
     * @memberof Employee
     */
    bankAccountNumber?: string;
    /**
     * Define the employee's user type.<br>STANDARD: Reduced access. Users with limited system entitlements.<br>EXTENDED: Users can be given all system entitlements.<br>NO_ACCESS: User with no log on access.<br>Users with access to Tripletex must confirm the email address.
     * @type {string}
     * @memberof Employee
     */
    userType?: Employee.UserTypeEnum;
    /**
     * Determines if salary information can be registered on the user including hours, travel expenses and employee expenses. The user may also be selected as a project member on projects.
     * @type {boolean}
     * @memberof Employee
     */
    allowInformationRegistration?: boolean;
    /**
     * Address tied to the employee
     * @type {Address}
     * @memberof Employee
     */
    address?: Address;
    /**
     *
     * @type {Department}
     * @memberof Employee
     */
    department?: Department;
    /**
     * Employments tied to the employee
     * @type {Array&lt;Employment&gt;}
     * @memberof Employee
     */
    employments?: Array<Employment>;
}
/**
 * @export
 * @namespace Employee
 */
export declare namespace Employee {
    /**
     * @export
     * @enum {string}
     */
    enum UserTypeEnum {
        STANDARD,
        EXTENDED,
        NOACCESS
    }
}
/**
 *
 * @export
 * @interface EmployeeToken
 */
export interface EmployeeToken {
    /**
     *
     * @type {number}
     * @memberof EmployeeToken
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof EmployeeToken
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof EmployeeToken
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof EmployeeToken
     */
    url?: string;
    /**
     *
     * @type {Employee}
     * @memberof EmployeeToken
     */
    employee?: Employee;
    /**
     *
     * @type {ApiConsumer}
     * @memberof EmployeeToken
     */
    apiConsumer?: ApiConsumer;
    /**
     *
     * @type {string}
     * @memberof EmployeeToken
     */
    token?: string;
    /**
     *
     * @type {string}
     * @memberof EmployeeToken
     */
    expirationDate?: string;
}
/**
 *
 * @export
 * @interface Employment
 */
export interface Employment {
    /**
     *
     * @type {number}
     * @memberof Employment
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Employment
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Employment
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Employment
     */
    url?: string;
    /**
     *
     * @type {Employee}
     * @memberof Employment
     */
    employee?: Employee;
    /**
     * Existing employment ID used by the current accounting system
     * @type {string}
     * @memberof Employment
     */
    employmentId?: string;
    /**
     *
     * @type {string}
     * @memberof Employment
     */
    startDate: string;
    /**
     *
     * @type {string}
     * @memberof Employment
     */
    endDate?: string;
    /**
     *
     * @type {number}
     * @memberof Employment
     */
    division?: number;
    /**
     *
     * @type {string}
     * @memberof Employment
     */
    lastSalaryChangeDate?: string;
    /**
     * Employment types tied to the employment
     * @type {Array&lt;EmploymentDetails&gt;}
     * @memberof Employment
     */
    employmentDetails?: Array<EmploymentDetails>;
}
/**
 *
 * @export
 * @interface EmploymentDetails
 */
export interface EmploymentDetails {
    /**
     *
     * @type {number}
     * @memberof EmploymentDetails
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof EmploymentDetails
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof EmploymentDetails
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof EmploymentDetails
     */
    url?: string;
    /**
     *
     * @type {Employment}
     * @memberof EmploymentDetails
     */
    employment?: Employment;
    /**
     *
     * @type {string}
     * @memberof EmploymentDetails
     */
    date?: string;
    /**
     * To find the right value to enter in this field, you could go to <br>GET /employee/employment/employmentType and select TYPE_OF_EMPLOYMENT_RELATIONSHIP in the dropdown.
     * @type {number}
     * @memberof EmploymentDetails
     */
    employmentType?: number;
    /**
     * To find the right value to enter in this field, you could go to <br> GET /employee/employment/remunerationType and select REMUNERATION_TYPE in the dropdown.
     * @type {number}
     * @memberof EmploymentDetails
     */
    remunerationType?: number;
    /**
     * To find the right value to enter in this field, you could go to GET /employee/employment/workingHoursScheme and select WORKING_HOURS_SCHEME in the dropdown.
     * @type {number}
     * @memberof EmploymentDetails
     */
    workingHoursScheme?: number;
    /**
     * To find the right value to enter in this field, you could go to GET /employee/employment/occupationCode to get a list of valid ID's.
     * @type {number}
     * @memberof EmploymentDetails
     */
    occupationCode?: number;
    /**
     *
     * @type {number}
     * @memberof EmploymentDetails
     */
    percentageOfFullTimeEquivalent: number;
    /**
     *
     * @type {number}
     * @memberof EmploymentDetails
     */
    annualSalary?: number;
    /**
     *
     * @type {number}
     * @memberof EmploymentDetails
     */
    hourlyWage?: number;
}
/**
 *
 * @export
 * @interface EmploymentType
 */
export interface EmploymentType {
    /**
     *
     * @type {number}
     * @memberof EmploymentType
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof EmploymentType
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof EmploymentType
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof EmploymentType
     */
    url?: string;
    /**
     * Defines the employment type option.
     * @type {string}
     * @memberof EmploymentType
     */
    employmentType: EmploymentType.EmploymentTypeEnum;
    /**
     *
     * @type {string}
     * @memberof EmploymentType
     */
    nameNO?: string;
    /**
     *
     * @type {string}
     * @memberof EmploymentType
     */
    code?: string;
}
/**
 * @export
 * @namespace EmploymentType
 */
export declare namespace EmploymentType {
    /**
     * @export
     * @enum {string}
     */
    enum EmploymentTypeEnum {
        RELATIONSHIP
    }
}
/**
 *
 * @export
 * @interface Entitlement
 */
export interface Entitlement {
    /**
     *
     * @type {number}
     * @memberof Entitlement
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Entitlement
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Entitlement
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Entitlement
     */
    url?: string;
    /**
     * Employee which has this privilege
     * @type {Employee}
     * @memberof Entitlement
     */
    employee: Employee;
    /**
     * Descriptive name for the privilege. Might change between releases.
     * @type {string}
     * @memberof Entitlement
     */
    name?: string;
    /**
     * Unique id for the type of privilege.
     * @type {number}
     * @memberof Entitlement
     */
    entitlementId: number;
    /**
     * The company this role applies for
     * @type {Company}
     * @memberof Entitlement
     */
    customer: Company;
}
/**
 *
 * @export
 * @interface EventInfoDescription
 */
export interface EventInfoDescription {
    /**
     *
     * @type {string}
     * @memberof EventInfoDescription
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof EventInfoDescription
     */
    payloadModel?: string;
}
/**
 *
 * @export
 * @interface ImportConfigDTO
 */
export interface ImportConfigDTO {
    /**
     *
     * @type {boolean}
     * @memberof ImportConfigDTO
     */
    onlyUsers?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ImportConfigDTO
     */
    skipUsers?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ImportConfigDTO
     */
    skipAccounts?: boolean;
}
/**
 *
 * @export
 * @interface ImportReportDTO
 */
export interface ImportReportDTO {
    /**
     *
     * @type {number}
     * @memberof ImportReportDTO
     */
    companyId?: number;
    /**
     *
     * @type {string}
     * @memberof ImportReportDTO
     */
    companyName?: string;
    /**
     *
     * @type {string}
     * @memberof ImportReportDTO
     */
    agreementNumber?: string;
    /**
     *
     * @type {string}
     * @memberof ImportReportDTO
     */
    agreementType?: string;
    /**
     *
     * @type {number}
     * @memberof ImportReportDTO
     */
    accountantCompanyId?: number;
    /**
     *
     * @type {string}
     * @memberof ImportReportDTO
     */
    accountantAgreementNumber?: string;
    /**
     *
     * @type {Date}
     * @memberof ImportReportDTO
     */
    startDate?: Date;
    /**
     *
     * @type {Date}
     * @memberof ImportReportDTO
     */
    endDate?: Date;
    /**
     *
     * @type {boolean}
     * @memberof ImportReportDTO
     */
    success?: boolean;
    /**
     *
     * @type {ImportConfigDTO}
     * @memberof ImportReportDTO
     */
    config?: ImportConfigDTO;
    /**
     *
     * @type {Array&lt;string&gt;}
     * @memberof ImportReportDTO
     */
    admins?: Array<string>;
    /**
     *
     * @type {{ [key: string]: { [key: string]: number; }; }}
     * @memberof ImportReportDTO
     */
    summary?: {
        [key: string]: {
            [key: string]: number;
        };
    };
    /**
     *
     * @type {Array&lt;Result&gt;}
     * @memberof ImportReportDTO
     */
    errors?: Array<Result>;
    /**
     *
     * @type {Array&lt;string&gt;}
     * @memberof ImportReportDTO
     */
    messages?: Array<string>;
    /**
     *
     * @type {Array&lt;Result&gt;}
     * @memberof ImportReportDTO
     */
    results?: Array<Result>;
}
/**
 *
 * @export
 * @interface Inventory
 */
export interface Inventory {
    /**
     *
     * @type {number}
     * @memberof Inventory
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Inventory
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Inventory
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Inventory
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Inventory
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Inventory
     */
    number?: string;
    /**
     *
     * @type {boolean}
     * @memberof Inventory
     */
    isMainInventory?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Inventory
     */
    isInactive?: boolean;
}
/**
 *
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     *
     * @type {number}
     * @memberof Invoice
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Invoice
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Invoice
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Invoice
     */
    url?: string;
    /**
     * If value is set to 0, the invoice number will be generated.
     * @type {number}
     * @memberof Invoice
     */
    invoiceNumber?: number;
    /**
     *
     * @type {string}
     * @memberof Invoice
     */
    invoiceDate: string;
    /**
     * The invoice customer
     * @type {Customer}
     * @memberof Invoice
     */
    customer?: Customer;
    /**
     *
     * @type {string}
     * @memberof Invoice
     */
    invoiceDueDate: string;
    /**
     * KID - Kundeidentifikasjonsnummer.
     * @type {string}
     * @memberof Invoice
     */
    kid?: string;
    /**
     *
     * @type {string}
     * @memberof Invoice
     */
    comment?: string;
    /**
     * Related orders. Only one order per invoice is supported at the moment.
     * @type {Array&lt;Order&gt;}
     * @memberof Invoice
     */
    orders: Array<Order>;
    /**
     * The invoice voucher.
     * @type {Voucher}
     * @memberof Invoice
     */
    voucher?: Voucher;
    /**
     * The delivery date.
     * @type {string}
     * @memberof Invoice
     */
    deliveryDate?: string;
    /**
     * In the company’s currency, typically NOK.
     * @type {number}
     * @memberof Invoice
     */
    amount?: number;
    /**
     * In the specified currency.
     * @type {number}
     * @memberof Invoice
     */
    amountCurrency?: number;
    /**
     * Amount excluding VAT (NOK).
     * @type {number}
     * @memberof Invoice
     */
    amountExcludingVat?: number;
    /**
     * Amount excluding VAT in the specified currency.
     * @type {number}
     * @memberof Invoice
     */
    amountExcludingVatCurrency?: number;
    /**
     *
     * @type {Currency}
     * @memberof Invoice
     */
    currency?: Currency;
    /**
     *
     * @type {boolean}
     * @memberof Invoice
     */
    isCreditNote?: boolean;
    /**
     *
     * @type {string}
     * @memberof Invoice
     */
    ehfSendStatus?: Invoice.EhfSendStatusEnum;
}
/**
 * @export
 * @namespace Invoice
 */
export declare namespace Invoice {
    /**
     * @export
     * @enum {string}
     */
    enum EhfSendStatusEnum {
        DONOTSEND,
        SEND,
        SENT,
        SENDFAILURERECIPIENTNOTFOUND
    }
}
/**
 *
 * @export
 * @interface Job
 */
export interface Job {
    /**
     *
     * @type {string}
     * @memberof Job
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Job
     */
    group?: string;
    /**
     *
     * @type {boolean}
     * @memberof Job
     */
    stateful?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Job
     */
    interruptable?: boolean;
    /**
     *
     * @type {JobDetailDTO}
     * @memberof Job
     */
    jobDetail?: JobDetailDTO;
    /**
     *
     * @type {Array&lt;TriggerDTO&gt;}
     * @memberof Job
     */
    triggers?: Array<TriggerDTO>;
}
/**
 *
 * @export
 * @interface JobDetailDTO
 */
export interface JobDetailDTO {
    /**
     *
     * @type {string}
     * @memberof JobDetailDTO
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof JobDetailDTO
     */
    group?: string;
    /**
     *
     * @type {string}
     * @memberof JobDetailDTO
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof JobDetailDTO
     */
    jobclass?: string;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof JobDetailDTO
     */
    jobData?: {
        [key: string]: any;
    };
}
/**
 *
 * @export
 * @interface LeaveOfAbsence
 */
export interface LeaveOfAbsence {
    /**
     *
     * @type {number}
     * @memberof LeaveOfAbsence
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof LeaveOfAbsence
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof LeaveOfAbsence
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof LeaveOfAbsence
     */
    url?: string;
    /**
     *
     * @type {Employment}
     * @memberof LeaveOfAbsence
     */
    employment?: Employment;
    /**
     * Existing leave of absence ID used by the current accounting system
     * @type {string}
     * @memberof LeaveOfAbsence
     */
    leaveOfAbsenceId?: string;
    /**
     *
     * @type {string}
     * @memberof LeaveOfAbsence
     */
    startDate: string;
    /**
     *
     * @type {string}
     * @memberof LeaveOfAbsence
     */
    endDate?: string;
    /**
     *
     * @type {number}
     * @memberof LeaveOfAbsence
     */
    percentage: number;
    /**
     *
     * @type {boolean}
     * @memberof LeaveOfAbsence
     */
    isWageDeduction?: boolean;
    /**
     *
     * @type {number}
     * @memberof LeaveOfAbsence
     */
    type: number;
}
/**
 *
 * @export
 * @interface LeaveOfAbsenceType
 */
export interface LeaveOfAbsenceType {
    /**
     *
     * @type {number}
     * @memberof LeaveOfAbsenceType
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof LeaveOfAbsenceType
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof LeaveOfAbsenceType
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof LeaveOfAbsenceType
     */
    url?: string;
    /**
     * Defines the leave of absence type option.
     * @type {string}
     * @memberof LeaveOfAbsenceType
     */
    leaveOfAbsenceType: LeaveOfAbsenceType.LeaveOfAbsenceTypeEnum;
    /**
     *
     * @type {string}
     * @memberof LeaveOfAbsenceType
     */
    nameNO?: string;
    /**
     *
     * @type {string}
     * @memberof LeaveOfAbsenceType
     */
    code?: string;
}
/**
 * @export
 * @namespace LeaveOfAbsenceType
 */
export declare namespace LeaveOfAbsenceType {
    /**
     * @export
     * @enum {string}
     */
    enum LeaveOfAbsenceTypeEnum {
        TYPE
    }
}
/**
 *
 * @export
 * @interface LedgerAccount
 */
export interface LedgerAccount {
    /**
     *
     * @type {Account}
     * @memberof LedgerAccount
     */
    account?: Account;
    /**
     *
     * @type {number}
     * @memberof LedgerAccount
     */
    sumAmount?: number;
    /**
     *
     * @type {Currency}
     * @memberof LedgerAccount
     */
    currency?: Currency;
    /**
     *
     * @type {number}
     * @memberof LedgerAccount
     */
    sumAmountCurrency?: number;
    /**
     *
     * @type {number}
     * @memberof LedgerAccount
     */
    openingBalance?: number;
    /**
     *
     * @type {number}
     * @memberof LedgerAccount
     */
    openingBalanceCurrency?: number;
    /**
     *
     * @type {number}
     * @memberof LedgerAccount
     */
    closingBalance?: number;
    /**
     *
     * @type {number}
     * @memberof LedgerAccount
     */
    closingBalanceCurrency?: number;
    /**
     * Link to postings on this account.
     * @type {Array&lt;Posting&gt;}
     * @memberof LedgerAccount
     */
    postings?: Array<Posting>;
}
/**
 *
 * @export
 * @interface Link
 */
export interface Link {
    /**
     *
     * @type {string}
     * @memberof Link
     */
    rel?: string;
    /**
     *
     * @type {string}
     * @memberof Link
     */
    type?: Link.TypeEnum;
    /**
     *
     * @type {string}
     * @memberof Link
     */
    href?: string;
}
/**
 * @export
 * @namespace Link
 */
export declare namespace Link {
    /**
     * @export
     * @enum {string}
     */
    enum TypeEnum {
        POST,
        PUT,
        GET,
        DELETE
    }
}
/**
 *
 * @export
 * @interface ListResponseAccommodationAllowance
 */
export interface ListResponseAccommodationAllowance {
    /**
     *
     * @type {number}
     * @memberof ListResponseAccommodationAllowance
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseAccommodationAllowance
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseAccommodationAllowance
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseAccommodationAllowance
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;AccommodationAllowance&gt;}
     * @memberof ListResponseAccommodationAllowance
     */
    values?: Array<AccommodationAllowance>;
}
/**
 *
 * @export
 * @interface ListResponseAccount
 */
export interface ListResponseAccount {
    /**
     *
     * @type {number}
     * @memberof ListResponseAccount
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseAccount
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseAccount
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseAccount
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Account&gt;}
     * @memberof ListResponseAccount
     */
    values?: Array<Account>;
}
/**
 *
 * @export
 * @interface ListResponseAccountingPeriod
 */
export interface ListResponseAccountingPeriod {
    /**
     *
     * @type {number}
     * @memberof ListResponseAccountingPeriod
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseAccountingPeriod
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseAccountingPeriod
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseAccountingPeriod
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;AccountingPeriod&gt;}
     * @memberof ListResponseAccountingPeriod
     */
    values?: Array<AccountingPeriod>;
}
/**
 *
 * @export
 * @interface ListResponseActivity
 */
export interface ListResponseActivity {
    /**
     *
     * @type {number}
     * @memberof ListResponseActivity
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseActivity
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseActivity
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseActivity
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Activity&gt;}
     * @memberof ListResponseActivity
     */
    values?: Array<Activity>;
}
/**
 *
 * @export
 * @interface ListResponseAddress
 */
export interface ListResponseAddress {
    /**
     *
     * @type {number}
     * @memberof ListResponseAddress
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseAddress
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseAddress
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseAddress
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Address&gt;}
     * @memberof ListResponseAddress
     */
    values?: Array<Address>;
}
/**
 *
 * @export
 * @interface ListResponseAnnualAccount
 */
export interface ListResponseAnnualAccount {
    /**
     *
     * @type {number}
     * @memberof ListResponseAnnualAccount
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseAnnualAccount
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseAnnualAccount
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseAnnualAccount
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;AnnualAccount&gt;}
     * @memberof ListResponseAnnualAccount
     */
    values?: Array<AnnualAccount>;
}
/**
 *
 * @export
 * @interface ListResponseBank
 */
export interface ListResponseBank {
    /**
     *
     * @type {number}
     * @memberof ListResponseBank
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBank
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBank
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseBank
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Bank&gt;}
     * @memberof ListResponseBank
     */
    values?: Array<Bank>;
}
/**
 *
 * @export
 * @interface ListResponseBankReconciliation
 */
export interface ListResponseBankReconciliation {
    /**
     *
     * @type {number}
     * @memberof ListResponseBankReconciliation
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBankReconciliation
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBankReconciliation
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseBankReconciliation
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;BankReconciliation&gt;}
     * @memberof ListResponseBankReconciliation
     */
    values?: Array<BankReconciliation>;
}
/**
 *
 * @export
 * @interface ListResponseBankReconciliationMatch
 */
export interface ListResponseBankReconciliationMatch {
    /**
     *
     * @type {number}
     * @memberof ListResponseBankReconciliationMatch
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBankReconciliationMatch
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBankReconciliationMatch
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseBankReconciliationMatch
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;BankReconciliationMatch&gt;}
     * @memberof ListResponseBankReconciliationMatch
     */
    values?: Array<BankReconciliationMatch>;
}
/**
 *
 * @export
 * @interface ListResponseBankReconciliationPaymentType
 */
export interface ListResponseBankReconciliationPaymentType {
    /**
     *
     * @type {number}
     * @memberof ListResponseBankReconciliationPaymentType
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBankReconciliationPaymentType
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBankReconciliationPaymentType
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseBankReconciliationPaymentType
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;BankReconciliationPaymentType&gt;}
     * @memberof ListResponseBankReconciliationPaymentType
     */
    values?: Array<BankReconciliationPaymentType>;
}
/**
 *
 * @export
 * @interface ListResponseBankStatement
 */
export interface ListResponseBankStatement {
    /**
     *
     * @type {number}
     * @memberof ListResponseBankStatement
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBankStatement
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBankStatement
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseBankStatement
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;BankStatement&gt;}
     * @memberof ListResponseBankStatement
     */
    values?: Array<BankStatement>;
}
/**
 *
 * @export
 * @interface ListResponseBankTransaction
 */
export interface ListResponseBankTransaction {
    /**
     *
     * @type {number}
     * @memberof ListResponseBankTransaction
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBankTransaction
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBankTransaction
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseBankTransaction
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;BankTransaction&gt;}
     * @memberof ListResponseBankTransaction
     */
    values?: Array<BankTransaction>;
}
/**
 *
 * @export
 * @interface ListResponseBanner
 */
export interface ListResponseBanner {
    /**
     *
     * @type {number}
     * @memberof ListResponseBanner
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBanner
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseBanner
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseBanner
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Banner&gt;}
     * @memberof ListResponseBanner
     */
    values?: Array<Banner>;
}
/**
 *
 * @export
 * @interface ListResponseCloseGroup
 */
export interface ListResponseCloseGroup {
    /**
     *
     * @type {number}
     * @memberof ListResponseCloseGroup
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCloseGroup
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCloseGroup
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseCloseGroup
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;CloseGroup&gt;}
     * @memberof ListResponseCloseGroup
     */
    values?: Array<CloseGroup>;
}
/**
 *
 * @export
 * @interface ListResponseCompany
 */
export interface ListResponseCompany {
    /**
     *
     * @type {number}
     * @memberof ListResponseCompany
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCompany
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCompany
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseCompany
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Company&gt;}
     * @memberof ListResponseCompany
     */
    values?: Array<Company>;
}
/**
 *
 * @export
 * @interface ListResponseContact
 */
export interface ListResponseContact {
    /**
     *
     * @type {number}
     * @memberof ListResponseContact
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseContact
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseContact
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseContact
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Contact&gt;}
     * @memberof ListResponseContact
     */
    values?: Array<Contact>;
}
/**
 *
 * @export
 * @interface ListResponseCost
 */
export interface ListResponseCost {
    /**
     *
     * @type {number}
     * @memberof ListResponseCost
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCost
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCost
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseCost
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Cost&gt;}
     * @memberof ListResponseCost
     */
    values?: Array<Cost>;
}
/**
 *
 * @export
 * @interface ListResponseCountry
 */
export interface ListResponseCountry {
    /**
     *
     * @type {number}
     * @memberof ListResponseCountry
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCountry
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCountry
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseCountry
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Country&gt;}
     * @memberof ListResponseCountry
     */
    values?: Array<Country>;
}
/**
 *
 * @export
 * @interface ListResponseCurrency
 */
export interface ListResponseCurrency {
    /**
     *
     * @type {number}
     * @memberof ListResponseCurrency
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCurrency
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCurrency
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseCurrency
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Currency&gt;}
     * @memberof ListResponseCurrency
     */
    values?: Array<Currency>;
}
/**
 *
 * @export
 * @interface ListResponseCustomer
 */
export interface ListResponseCustomer {
    /**
     *
     * @type {number}
     * @memberof ListResponseCustomer
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCustomer
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCustomer
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseCustomer
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Customer&gt;}
     * @memberof ListResponseCustomer
     */
    values?: Array<Customer>;
}
/**
 *
 * @export
 * @interface ListResponseCustomerCategory
 */
export interface ListResponseCustomerCategory {
    /**
     *
     * @type {number}
     * @memberof ListResponseCustomerCategory
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCustomerCategory
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseCustomerCategory
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseCustomerCategory
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;CustomerCategory&gt;}
     * @memberof ListResponseCustomerCategory
     */
    values?: Array<CustomerCategory>;
}
/**
 *
 * @export
 * @interface ListResponseDepartment
 */
export interface ListResponseDepartment {
    /**
     *
     * @type {number}
     * @memberof ListResponseDepartment
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseDepartment
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseDepartment
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseDepartment
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Department&gt;}
     * @memberof ListResponseDepartment
     */
    values?: Array<Department>;
}
/**
 *
 * @export
 * @interface ListResponseEmployee
 */
export interface ListResponseEmployee {
    /**
     *
     * @type {number}
     * @memberof ListResponseEmployee
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseEmployee
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseEmployee
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseEmployee
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Employee&gt;}
     * @memberof ListResponseEmployee
     */
    values?: Array<Employee>;
}
/**
 *
 * @export
 * @interface ListResponseEmployment
 */
export interface ListResponseEmployment {
    /**
     *
     * @type {number}
     * @memberof ListResponseEmployment
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseEmployment
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseEmployment
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseEmployment
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Employment&gt;}
     * @memberof ListResponseEmployment
     */
    values?: Array<Employment>;
}
/**
 *
 * @export
 * @interface ListResponseEmploymentDetails
 */
export interface ListResponseEmploymentDetails {
    /**
     *
     * @type {number}
     * @memberof ListResponseEmploymentDetails
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseEmploymentDetails
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseEmploymentDetails
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseEmploymentDetails
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;EmploymentDetails&gt;}
     * @memberof ListResponseEmploymentDetails
     */
    values?: Array<EmploymentDetails>;
}
/**
 *
 * @export
 * @interface ListResponseEmploymentType
 */
export interface ListResponseEmploymentType {
    /**
     *
     * @type {number}
     * @memberof ListResponseEmploymentType
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseEmploymentType
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseEmploymentType
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseEmploymentType
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;EmploymentType&gt;}
     * @memberof ListResponseEmploymentType
     */
    values?: Array<EmploymentType>;
}
/**
 *
 * @export
 * @interface ListResponseEntitlement
 */
export interface ListResponseEntitlement {
    /**
     *
     * @type {number}
     * @memberof ListResponseEntitlement
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseEntitlement
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseEntitlement
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseEntitlement
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Entitlement&gt;}
     * @memberof ListResponseEntitlement
     */
    values?: Array<Entitlement>;
}
/**
 *
 * @export
 * @interface ListResponseInventory
 */
export interface ListResponseInventory {
    /**
     *
     * @type {number}
     * @memberof ListResponseInventory
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseInventory
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseInventory
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseInventory
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Inventory&gt;}
     * @memberof ListResponseInventory
     */
    values?: Array<Inventory>;
}
/**
 *
 * @export
 * @interface ListResponseInvoice
 */
export interface ListResponseInvoice {
    /**
     *
     * @type {number}
     * @memberof ListResponseInvoice
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseInvoice
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseInvoice
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseInvoice
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Invoice&gt;}
     * @memberof ListResponseInvoice
     */
    values?: Array<Invoice>;
}
/**
 *
 * @export
 * @interface ListResponseLeaveOfAbsenceType
 */
export interface ListResponseLeaveOfAbsenceType {
    /**
     *
     * @type {number}
     * @memberof ListResponseLeaveOfAbsenceType
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseLeaveOfAbsenceType
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseLeaveOfAbsenceType
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseLeaveOfAbsenceType
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;LeaveOfAbsenceType&gt;}
     * @memberof ListResponseLeaveOfAbsenceType
     */
    values?: Array<LeaveOfAbsenceType>;
}
/**
 *
 * @export
 * @interface ListResponseLedgerAccount
 */
export interface ListResponseLedgerAccount {
    /**
     *
     * @type {number}
     * @memberof ListResponseLedgerAccount
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseLedgerAccount
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseLedgerAccount
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseLedgerAccount
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;LedgerAccount&gt;}
     * @memberof ListResponseLedgerAccount
     */
    values?: Array<LedgerAccount>;
}
/**
 *
 * @export
 * @interface ListResponseMileageAllowance
 */
export interface ListResponseMileageAllowance {
    /**
     *
     * @type {number}
     * @memberof ListResponseMileageAllowance
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseMileageAllowance
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseMileageAllowance
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseMileageAllowance
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;MileageAllowance&gt;}
     * @memberof ListResponseMileageAllowance
     */
    values?: Array<MileageAllowance>;
}
/**
 *
 * @export
 * @interface ListResponseNotification
 */
export interface ListResponseNotification {
    /**
     *
     * @type {number}
     * @memberof ListResponseNotification
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseNotification
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseNotification
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseNotification
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Notification&gt;}
     * @memberof ListResponseNotification
     */
    values?: Array<Notification>;
}
/**
 *
 * @export
 * @interface ListResponseOccupationCode
 */
export interface ListResponseOccupationCode {
    /**
     *
     * @type {number}
     * @memberof ListResponseOccupationCode
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseOccupationCode
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseOccupationCode
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseOccupationCode
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;OccupationCode&gt;}
     * @memberof ListResponseOccupationCode
     */
    values?: Array<OccupationCode>;
}
/**
 *
 * @export
 * @interface ListResponseOrder
 */
export interface ListResponseOrder {
    /**
     *
     * @type {number}
     * @memberof ListResponseOrder
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseOrder
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseOrder
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseOrder
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Order&gt;}
     * @memberof ListResponseOrder
     */
    values?: Array<Order>;
}
/**
 *
 * @export
 * @interface ListResponseOrderLine
 */
export interface ListResponseOrderLine {
    /**
     *
     * @type {number}
     * @memberof ListResponseOrderLine
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseOrderLine
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseOrderLine
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseOrderLine
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;OrderLine&gt;}
     * @memberof ListResponseOrderLine
     */
    values?: Array<OrderLine>;
}
/**
 *
 * @export
 * @interface ListResponsePassenger
 */
export interface ListResponsePassenger {
    /**
     *
     * @type {number}
     * @memberof ListResponsePassenger
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponsePassenger
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponsePassenger
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponsePassenger
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Passenger&gt;}
     * @memberof ListResponsePassenger
     */
    values?: Array<Passenger>;
}
/**
 *
 * @export
 * @interface ListResponsePaymentType
 */
export interface ListResponsePaymentType {
    /**
     *
     * @type {number}
     * @memberof ListResponsePaymentType
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponsePaymentType
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponsePaymentType
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponsePaymentType
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;PaymentType&gt;}
     * @memberof ListResponsePaymentType
     */
    values?: Array<PaymentType>;
}
/**
 *
 * @export
 * @interface ListResponsePaymentTypeOut
 */
export interface ListResponsePaymentTypeOut {
    /**
     *
     * @type {number}
     * @memberof ListResponsePaymentTypeOut
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponsePaymentTypeOut
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponsePaymentTypeOut
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponsePaymentTypeOut
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;PaymentTypeOut&gt;}
     * @memberof ListResponsePaymentTypeOut
     */
    values?: Array<PaymentTypeOut>;
}
/**
 *
 * @export
 * @interface ListResponsePayslip
 */
export interface ListResponsePayslip {
    /**
     *
     * @type {number}
     * @memberof ListResponsePayslip
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponsePayslip
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponsePayslip
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponsePayslip
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Payslip&gt;}
     * @memberof ListResponsePayslip
     */
    values?: Array<Payslip>;
}
/**
 *
 * @export
 * @interface ListResponsePerDiemCompensation
 */
export interface ListResponsePerDiemCompensation {
    /**
     *
     * @type {number}
     * @memberof ListResponsePerDiemCompensation
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponsePerDiemCompensation
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponsePerDiemCompensation
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponsePerDiemCompensation
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;PerDiemCompensation&gt;}
     * @memberof ListResponsePerDiemCompensation
     */
    values?: Array<PerDiemCompensation>;
}
/**
 *
 * @export
 * @interface ListResponsePosting
 */
export interface ListResponsePosting {
    /**
     *
     * @type {number}
     * @memberof ListResponsePosting
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponsePosting
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponsePosting
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponsePosting
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Posting&gt;}
     * @memberof ListResponsePosting
     */
    values?: Array<Posting>;
}
/**
 *
 * @export
 * @interface ListResponseProduct
 */
export interface ListResponseProduct {
    /**
     *
     * @type {number}
     * @memberof ListResponseProduct
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseProduct
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseProduct
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseProduct
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Product&gt;}
     * @memberof ListResponseProduct
     */
    values?: Array<Product>;
}
/**
 *
 * @export
 * @interface ListResponseProductUnit
 */
export interface ListResponseProductUnit {
    /**
     *
     * @type {number}
     * @memberof ListResponseProductUnit
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseProductUnit
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseProductUnit
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseProductUnit
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;ProductUnit&gt;}
     * @memberof ListResponseProductUnit
     */
    values?: Array<ProductUnit>;
}
/**
 *
 * @export
 * @interface ListResponseProject
 */
export interface ListResponseProject {
    /**
     *
     * @type {number}
     * @memberof ListResponseProject
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseProject
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseProject
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseProject
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Project&gt;}
     * @memberof ListResponseProject
     */
    values?: Array<Project>;
}
/**
 *
 * @export
 * @interface ListResponseProjectCategory
 */
export interface ListResponseProjectCategory {
    /**
     *
     * @type {number}
     * @memberof ListResponseProjectCategory
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseProjectCategory
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseProjectCategory
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseProjectCategory
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;ProjectCategory&gt;}
     * @memberof ListResponseProjectCategory
     */
    values?: Array<ProjectCategory>;
}
/**
 *
 * @export
 * @interface ListResponseProspect
 */
export interface ListResponseProspect {
    /**
     *
     * @type {number}
     * @memberof ListResponseProspect
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseProspect
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseProspect
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseProspect
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Prospect&gt;}
     * @memberof ListResponseProspect
     */
    values?: Array<Prospect>;
}
/**
 *
 * @export
 * @interface ListResponseRemunerationType
 */
export interface ListResponseRemunerationType {
    /**
     *
     * @type {number}
     * @memberof ListResponseRemunerationType
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseRemunerationType
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseRemunerationType
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseRemunerationType
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;RemunerationType&gt;}
     * @memberof ListResponseRemunerationType
     */
    values?: Array<RemunerationType>;
}
/**
 *
 * @export
 * @interface ListResponseSalarySpecification
 */
export interface ListResponseSalarySpecification {
    /**
     *
     * @type {number}
     * @memberof ListResponseSalarySpecification
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseSalarySpecification
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseSalarySpecification
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseSalarySpecification
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;SalarySpecification&gt;}
     * @memberof ListResponseSalarySpecification
     */
    values?: Array<SalarySpecification>;
}
/**
 *
 * @export
 * @interface ListResponseSalaryTransaction
 */
export interface ListResponseSalaryTransaction {
    /**
     *
     * @type {number}
     * @memberof ListResponseSalaryTransaction
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseSalaryTransaction
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseSalaryTransaction
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseSalaryTransaction
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;SalaryTransaction&gt;}
     * @memberof ListResponseSalaryTransaction
     */
    values?: Array<SalaryTransaction>;
}
/**
 *
 * @export
 * @interface ListResponseSalaryType
 */
export interface ListResponseSalaryType {
    /**
     *
     * @type {number}
     * @memberof ListResponseSalaryType
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseSalaryType
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseSalaryType
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseSalaryType
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;SalaryType&gt;}
     * @memberof ListResponseSalaryType
     */
    values?: Array<SalaryType>;
}
/**
 *
 * @export
 * @interface ListResponseStandardTime
 */
export interface ListResponseStandardTime {
    /**
     *
     * @type {number}
     * @memberof ListResponseStandardTime
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseStandardTime
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseStandardTime
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseStandardTime
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;StandardTime&gt;}
     * @memberof ListResponseStandardTime
     */
    values?: Array<StandardTime>;
}
/**
 *
 * @export
 * @interface ListResponseSubscription
 */
export interface ListResponseSubscription {
    /**
     *
     * @type {number}
     * @memberof ListResponseSubscription
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseSubscription
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseSubscription
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseSubscription
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Subscription&gt;}
     * @memberof ListResponseSubscription
     */
    values?: Array<Subscription>;
}
/**
 *
 * @export
 * @interface ListResponseSupplier
 */
export interface ListResponseSupplier {
    /**
     *
     * @type {number}
     * @memberof ListResponseSupplier
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseSupplier
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseSupplier
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseSupplier
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Supplier&gt;}
     * @memberof ListResponseSupplier
     */
    values?: Array<Supplier>;
}
/**
 *
 * @export
 * @interface ListResponseSupplierBalance
 */
export interface ListResponseSupplierBalance {
    /**
     *
     * @type {number}
     * @memberof ListResponseSupplierBalance
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseSupplierBalance
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseSupplierBalance
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseSupplierBalance
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;SupplierBalance&gt;}
     * @memberof ListResponseSupplierBalance
     */
    values?: Array<SupplierBalance>;
}
/**
 *
 * @export
 * @interface ListResponseTimeClock
 */
export interface ListResponseTimeClock {
    /**
     *
     * @type {number}
     * @memberof ListResponseTimeClock
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTimeClock
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTimeClock
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseTimeClock
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;TimeClock&gt;}
     * @memberof ListResponseTimeClock
     */
    values?: Array<TimeClock>;
}
/**
 *
 * @export
 * @interface ListResponseTimesheetEntry
 */
export interface ListResponseTimesheetEntry {
    /**
     *
     * @type {number}
     * @memberof ListResponseTimesheetEntry
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTimesheetEntry
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTimesheetEntry
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseTimesheetEntry
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;TimesheetEntry&gt;}
     * @memberof ListResponseTimesheetEntry
     */
    values?: Array<TimesheetEntry>;
}
/**
 *
 * @export
 * @interface ListResponseTravelCostCategory
 */
export interface ListResponseTravelCostCategory {
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelCostCategory
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelCostCategory
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelCostCategory
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseTravelCostCategory
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;TravelCostCategory&gt;}
     * @memberof ListResponseTravelCostCategory
     */
    values?: Array<TravelCostCategory>;
}
/**
 *
 * @export
 * @interface ListResponseTravelExpense
 */
export interface ListResponseTravelExpense {
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelExpense
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelExpense
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelExpense
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseTravelExpense
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;TravelExpense&gt;}
     * @memberof ListResponseTravelExpense
     */
    values?: Array<TravelExpense>;
}
/**
 *
 * @export
 * @interface ListResponseTravelExpenseRate
 */
export interface ListResponseTravelExpenseRate {
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelExpenseRate
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelExpenseRate
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelExpenseRate
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseTravelExpenseRate
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;TravelExpenseRate&gt;}
     * @memberof ListResponseTravelExpenseRate
     */
    values?: Array<TravelExpenseRate>;
}
/**
 *
 * @export
 * @interface ListResponseTravelExpenseRateCategory
 */
export interface ListResponseTravelExpenseRateCategory {
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelExpenseRateCategory
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelExpenseRateCategory
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelExpenseRateCategory
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseTravelExpenseRateCategory
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;TravelExpenseRateCategory&gt;}
     * @memberof ListResponseTravelExpenseRateCategory
     */
    values?: Array<TravelExpenseRateCategory>;
}
/**
 *
 * @export
 * @interface ListResponseTravelExpenseRateCategoryGroup
 */
export interface ListResponseTravelExpenseRateCategoryGroup {
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelExpenseRateCategoryGroup
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelExpenseRateCategoryGroup
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelExpenseRateCategoryGroup
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseTravelExpenseRateCategoryGroup
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;TravelExpenseRateCategoryGroup&gt;}
     * @memberof ListResponseTravelExpenseRateCategoryGroup
     */
    values?: Array<TravelExpenseRateCategoryGroup>;
}
/**
 *
 * @export
 * @interface ListResponseTravelPaymentType
 */
export interface ListResponseTravelPaymentType {
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelPaymentType
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelPaymentType
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseTravelPaymentType
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseTravelPaymentType
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;TravelPaymentType&gt;}
     * @memberof ListResponseTravelPaymentType
     */
    values?: Array<TravelPaymentType>;
}
/**
 *
 * @export
 * @interface ListResponseVatType
 */
export interface ListResponseVatType {
    /**
     *
     * @type {number}
     * @memberof ListResponseVatType
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseVatType
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseVatType
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseVatType
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;VatType&gt;}
     * @memberof ListResponseVatType
     */
    values?: Array<VatType>;
}
/**
 *
 * @export
 * @interface ListResponseVoucher
 */
export interface ListResponseVoucher {
    /**
     *
     * @type {number}
     * @memberof ListResponseVoucher
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseVoucher
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseVoucher
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseVoucher
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Voucher&gt;}
     * @memberof ListResponseVoucher
     */
    values?: Array<Voucher>;
}
/**
 *
 * @export
 * @interface ListResponseVoucherType
 */
export interface ListResponseVoucherType {
    /**
     *
     * @type {number}
     * @memberof ListResponseVoucherType
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseVoucherType
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseVoucherType
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseVoucherType
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;VoucherType&gt;}
     * @memberof ListResponseVoucherType
     */
    values?: Array<VoucherType>;
}
/**
 *
 * @export
 * @interface ListResponseWeeklyStatus
 */
export interface ListResponseWeeklyStatus {
    /**
     *
     * @type {number}
     * @memberof ListResponseWeeklyStatus
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseWeeklyStatus
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseWeeklyStatus
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseWeeklyStatus
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;WeeklyStatus&gt;}
     * @memberof ListResponseWeeklyStatus
     */
    values?: Array<WeeklyStatus>;
}
/**
 *
 * @export
 * @interface ListResponseWorkingHoursScheme
 */
export interface ListResponseWorkingHoursScheme {
    /**
     *
     * @type {number}
     * @memberof ListResponseWorkingHoursScheme
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseWorkingHoursScheme
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof ListResponseWorkingHoursScheme
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof ListResponseWorkingHoursScheme
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;WorkingHoursScheme&gt;}
     * @memberof ListResponseWorkingHoursScheme
     */
    values?: Array<WorkingHoursScheme>;
}
/**
 *
 * @export
 * @interface LoggedInUserInfoDTO
 */
export interface LoggedInUserInfoDTO {
    /**
     *
     * @type {number}
     * @memberof LoggedInUserInfoDTO
     */
    employeeId?: number;
    /**
     *
     * @type {Employee}
     * @memberof LoggedInUserInfoDTO
     */
    employee?: Employee;
    /**
     *
     * @type {number}
     * @memberof LoggedInUserInfoDTO
     */
    companyId?: number;
    /**
     *
     * @type {Company}
     * @memberof LoggedInUserInfoDTO
     */
    company?: Company;
    /**
     *
     * @type {string}
     * @memberof LoggedInUserInfoDTO
     */
    language?: string;
}
/**
 *
 * @export
 * @interface MaventaEventDataDTO
 */
export interface MaventaEventDataDTO {
    /**
     *
     * @type {string}
     * @memberof MaventaEventDataDTO
     */
    invoiceId: string;
    /**
     *
     * @type {string}
     * @memberof MaventaEventDataDTO
     */
    invoiceNumber: string;
    /**
     *
     * @type {string}
     * @memberof MaventaEventDataDTO
     */
    destination: string;
    /**
     *
     * @type {string}
     * @memberof MaventaEventDataDTO
     */
    recipientName: string;
    /**
     *
     * @type {string}
     * @memberof MaventaEventDataDTO
     */
    recipientBid: string;
    /**
     *
     * @type {string}
     * @memberof MaventaEventDataDTO
     */
    errorMessage?: string;
}
/**
 *
 * @export
 * @interface MaventaStatusDTO
 */
export interface MaventaStatusDTO {
    /**
     *
     * @type {string}
     * @memberof MaventaStatusDTO
     */
    event: string;
    /**
     *
     * @type {string}
     * @memberof MaventaStatusDTO
     */
    companyId: string;
    /**
     *
     * @type {Date}
     * @memberof MaventaStatusDTO
     */
    eventTimestamp: Date;
    /**
     *
     * @type {MaventaEventDataDTO}
     * @memberof MaventaStatusDTO
     */
    eventData: MaventaEventDataDTO;
}
/**
 *
 * @export
 * @interface MileageAllowance
 */
export interface MileageAllowance {
    /**
     *
     * @type {number}
     * @memberof MileageAllowance
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof MileageAllowance
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof MileageAllowance
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof MileageAllowance
     */
    url?: string;
    /**
     *
     * @type {TravelExpense}
     * @memberof MileageAllowance
     */
    travelExpense?: TravelExpense;
    /**
     *
     * @type {TravelExpenseRate}
     * @memberof MileageAllowance
     */
    rateType?: TravelExpenseRate;
    /**
     *
     * @type {TravelExpenseRateCategory}
     * @memberof MileageAllowance
     */
    rateCategory?: TravelExpenseRateCategory;
    /**
     *
     * @type {string}
     * @memberof MileageAllowance
     */
    date: string;
    /**
     *
     * @type {string}
     * @memberof MileageAllowance
     */
    departureLocation: string;
    /**
     *
     * @type {string}
     * @memberof MileageAllowance
     */
    destination: string;
    /**
     *
     * @type {number}
     * @memberof MileageAllowance
     */
    km?: number;
    /**
     *
     * @type {number}
     * @memberof MileageAllowance
     */
    rate?: number;
    /**
     *
     * @type {number}
     * @memberof MileageAllowance
     */
    amount?: number;
    /**
     *
     * @type {boolean}
     * @memberof MileageAllowance
     */
    isCompanyCar?: boolean;
    /**
     * Link to individual passengers.
     * @type {Array&lt;Passenger&gt;}
     * @memberof MileageAllowance
     */
    passengers?: Array<Passenger>;
}
/**
 *
 * @export
 * @interface MobileAppLogin
 */
export interface MobileAppLogin {
    /**
     * Users username (email)
     * @type {string}
     * @memberof MobileAppLogin
     */
    username: string;
    /**
     * Users password
     * @type {string}
     * @memberof MobileAppLogin
     */
    password: string;
    /**
     * App secret (temporary security mechanism during testing)
     * @type {string}
     * @memberof MobileAppLogin
     */
    appSecret: string;
    /**
     * Expiration date for the combined token
     * @type {string}
     * @memberof MobileAppLogin
     */
    expirationDate: string;
}
/**
 *
 * @export
 * @interface Modules
 */
export interface Modules {
    /**
     * Not readable. Only for input.
     * @type {boolean}
     * @memberof Modules
     */
    accounting?: boolean;
    /**
     * Not readable. Only for input.
     * @type {boolean}
     * @memberof Modules
     */
    invoice?: boolean;
    /**
     * Not readable. Only for input.
     * @type {boolean}
     * @memberof Modules
     */
    salary?: boolean;
    /**
     * Not readable. Only for input.
     * @type {boolean}
     * @memberof Modules
     */
    project?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Modules
     */
    ocr?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Modules
     */
    remit?: boolean;
    /**
     * Not readable. Only for input.
     * @type {boolean}
     * @memberof Modules
     */
    electronicVouchers?: boolean;
    /**
     * Not readable. Only for input.
     * @type {boolean}
     * @memberof Modules
     */
    electro?: boolean;
    /**
     * Not readable. Only for input.
     * @type {boolean}
     * @memberof Modules
     */
    vvs?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Modules
     */
    agro?: boolean;
    /**
     * Only readable for now
     * @type {boolean}
     * @memberof Modules
     */
    approveVoucher?: boolean;
}
/**
 *
 * @export
 * @interface MonthlyStatus
 */
export interface MonthlyStatus {
    /**
     *
     * @type {number}
     * @memberof MonthlyStatus
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof MonthlyStatus
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof MonthlyStatus
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof MonthlyStatus
     */
    url?: string;
    /**
     *
     * @type {Employee}
     * @memberof MonthlyStatus
     */
    employee: Employee;
    /**
     *
     * @type {string}
     * @memberof MonthlyStatus
     */
    date?: string;
    /**
     *
     * @type {number}
     * @memberof MonthlyStatus
     */
    hoursPaid?: number;
    /**
     *
     * @type {number}
     * @memberof MonthlyStatus
     */
    vacationTransferred?: number;
    /**
     *
     * @type {number}
     * @memberof MonthlyStatus
     */
    vacationPaid?: number;
    /**
     *
     * @type {Payslip}
     * @memberof MonthlyStatus
     */
    wagePayment?: Payslip;
    /**
     *
     * @type {boolean}
     * @memberof MonthlyStatus
     */
    completed?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof MonthlyStatus
     */
    approved?: boolean;
    /**
     *
     * @type {Employee}
     * @memberof MonthlyStatus
     */
    approvedBy?: Employee;
    /**
     *
     * @type {string}
     * @memberof MonthlyStatus
     */
    approvedDate?: string;
}
/**
 *
 * @export
 * @interface Notification
 */
export interface Notification {
    /**
     *
     * @type {number}
     * @memberof Notification
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Notification
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Notification
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Notification
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Notification
     */
    date: string;
    /**
     *
     * @type {string}
     * @memberof Notification
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof Notification
     */
    message: string;
    /**
     *
     * @type {string}
     * @memberof Notification
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof Notification
     */
    link?: string;
}
/**
 *
 * @export
 * @interface OccupationCode
 */
export interface OccupationCode {
    /**
     *
     * @type {number}
     * @memberof OccupationCode
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof OccupationCode
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof OccupationCode
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof OccupationCode
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof OccupationCode
     */
    nameNO?: string;
    /**
     *
     * @type {string}
     * @memberof OccupationCode
     */
    code?: string;
}
/**
 *
 * @export
 * @interface Order
 */
export interface Order {
    /**
     *
     * @type {number}
     * @memberof Order
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Order
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Order
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    url?: string;
    /**
     *
     * @type {Customer}
     * @memberof Order
     */
    customer: Customer;
    /**
     *
     * @type {Contact}
     * @memberof Order
     */
    contact?: Contact;
    /**
     *
     * @type {Contact}
     * @memberof Order
     */
    attn?: Contact;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    receiverEmail?: string;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    overdueNoticeEmail?: string;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    number?: string;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    reference?: string;
    /**
     * If the contact is not an employee
     * @type {Contact}
     * @memberof Order
     */
    ourContact?: Contact;
    /**
     * If the contact is an employee
     * @type {Employee}
     * @memberof Order
     */
    ourContactEmployee?: Employee;
    /**
     *
     * @type {Department}
     * @memberof Order
     */
    department?: Department;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    orderDate: string;
    /**
     *
     * @type {Project}
     * @memberof Order
     */
    project?: Project;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    invoiceComment?: string;
    /**
     *
     * @type {Currency}
     * @memberof Order
     */
    currency?: Currency;
    /**
     * Number of days/months in which invoices created from this order is due
     * @type {number}
     * @memberof Order
     */
    invoicesDueIn?: number;
    /**
     * Set the time unit of invoicesDueIn. The special case RECURRING_DAY_OF_MONTH enables the due date to be fixed to a specific day of the month, in this case the fixed due date will automatically be set as standard on all invoices created from this order. Note that when RECURRING_DAY_OF_MONTH is set, the due date will be set to the last day of month if \"31\" is set in invoicesDueIn.
     * @type {string}
     * @memberof Order
     */
    invoicesDueInType?: Order.InvoicesDueInTypeEnum;
    /**
     * Show account statement - open posts on invoices created from this order
     * @type {boolean}
     * @memberof Order
     */
    isShowOpenPostsOnInvoices?: boolean;
    /**
     * Denotes if this order is closed. A closed order can no longer be invoiced unless it is opened again.
     * @type {boolean}
     * @memberof Order
     */
    isClosed?: boolean;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    deliveryDate: string;
    /**
     * Delivery address of this order. This can be a new or existing address
     * @type {Address}
     * @memberof Order
     */
    deliveryAddress?: Address;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    deliveryComment?: string;
    /**
     *
     * @type {boolean}
     * @memberof Order
     */
    isPrioritizeAmountsIncludingVat?: boolean;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    orderLineSorting?: Order.OrderLineSortingEnum;
    /**
     * Order lines tied to the order
     * @type {Array&lt;OrderLine&gt;}
     * @memberof Order
     */
    orderLines?: Array<OrderLine>;
    /**
     * If true, the order is a subscription, which enables periodical invoicing of order lines
     * @type {boolean}
     * @memberof Order
     */
    isSubscription?: boolean;
    /**
     * Number of months/years the subscription shall run
     * @type {number}
     * @memberof Order
     */
    subscriptionDuration?: number;
    /**
     * The time unit of subscriptionDuration
     * @type {string}
     * @memberof Order
     */
    subscriptionDurationType?: Order.SubscriptionDurationTypeEnum;
    /**
     * Number of periods on each invoice
     * @type {number}
     * @memberof Order
     */
    subscriptionPeriodsOnInvoice?: number;
    /**
     * The time unit of subscriptionPeriodsOnInvoice
     * @type {string}
     * @memberof Order
     */
    subscriptionPeriodsOnInvoiceType?: Order.SubscriptionPeriodsOnInvoiceTypeEnum;
    /**
     * Invoicing in advance/in arrears
     * @type {string}
     * @memberof Order
     */
    subscriptionInvoicingTimeInAdvanceOrArrears?: Order.SubscriptionInvoicingTimeInAdvanceOrArrearsEnum;
    /**
     * Number of days/months invoicing in advance/in arrears
     * @type {number}
     * @memberof Order
     */
    subscriptionInvoicingTime?: number;
    /**
     * The time unit of subscriptionInvoicingTime
     * @type {string}
     * @memberof Order
     */
    subscriptionInvoicingTimeType?: Order.SubscriptionInvoicingTimeTypeEnum;
    /**
     * Automatic invoicing. Starts when the subscription is approved
     * @type {boolean}
     * @memberof Order
     */
    isSubscriptionAutoInvoicing?: boolean;
}
/**
 * @export
 * @namespace Order
 */
export declare namespace Order {
    /**
     * @export
     * @enum {string}
     */
    enum InvoicesDueInTypeEnum {
        DAYS,
        MONTHS,
        RECURRINGDAYOFMONTH
    }
    /**
     * @export
     * @enum {string}
     */
    enum OrderLineSortingEnum {
        ID,
        PRODUCT,
        CUSTOM
    }
    /**
     * @export
     * @enum {string}
     */
    enum SubscriptionDurationTypeEnum {
        MONTHS,
        YEAR
    }
    /**
     * @export
     * @enum {string}
     */
    enum SubscriptionPeriodsOnInvoiceTypeEnum {
        MONTHS
    }
    /**
     * @export
     * @enum {string}
     */
    enum SubscriptionInvoicingTimeInAdvanceOrArrearsEnum {
        ADVANCE,
        ARREARS
    }
    /**
     * @export
     * @enum {string}
     */
    enum SubscriptionInvoicingTimeTypeEnum {
        DAYS,
        MONTHS
    }
}
/**
 *
 * @export
 * @interface OrderLine
 */
export interface OrderLine {
    /**
     *
     * @type {number}
     * @memberof OrderLine
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof OrderLine
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof OrderLine
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof OrderLine
     */
    url?: string;
    /**
     *
     * @type {Order}
     * @memberof OrderLine
     */
    order: Order;
    /**
     *
     * @type {Product}
     * @memberof OrderLine
     */
    product?: Product;
    /**
     *
     * @type {Inventory}
     * @memberof OrderLine
     */
    inventory?: Inventory;
    /**
     *
     * @type {string}
     * @memberof OrderLine
     */
    description?: string;
    /**
     *
     * @type {number}
     * @memberof OrderLine
     */
    count?: number;
    /**
     * Unit price purchase (cost) excluding VAT in the order's currency
     * @type {number}
     * @memberof OrderLine
     */
    unitCostCurrency?: number;
    /**
     * Unit price of purchase excluding VAT in the order's currency
     * @type {number}
     * @memberof OrderLine
     */
    unitPriceExcludingVatCurrency?: number;
    /**
     * Unit price of purchase including VAT in the order's currency
     * @type {number}
     * @memberof OrderLine
     */
    unitPriceIncludingVatCurrency?: number;
    /**
     * The order line's currency. Determined by the order's currency.
     * @type {Currency}
     * @memberof OrderLine
     */
    currency?: Currency;
    /**
     * Markup given as a percentage (%)
     * @type {number}
     * @memberof OrderLine
     */
    markup?: number;
    /**
     * Discount given as a percentage (%)
     * @type {number}
     * @memberof OrderLine
     */
    discount?: number;
    /**
     *
     * @type {VatType}
     * @memberof OrderLine
     */
    vatType?: VatType;
    /**
     * Total amount on order line excluding VAT in the order's currency
     * @type {number}
     * @memberof OrderLine
     */
    amountExcludingVatCurrency?: number;
    /**
     * Total amount on order line including VAT in the order's currency
     * @type {number}
     * @memberof OrderLine
     */
    amountIncludingVatCurrency?: number;
    /**
     *
     * @type {boolean}
     * @memberof OrderLine
     */
    isSubscription?: boolean;
    /**
     *
     * @type {string}
     * @memberof OrderLine
     */
    subscriptionPeriodStart?: string;
    /**
     *
     * @type {string}
     * @memberof OrderLine
     */
    subscriptionPeriodEnd?: string;
}
/**
 *
 * @export
 * @interface Passenger
 */
export interface Passenger {
    /**
     *
     * @type {number}
     * @memberof Passenger
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Passenger
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Passenger
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Passenger
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Passenger
     */
    name: string;
    /**
     *
     * @type {MileageAllowance}
     * @memberof Passenger
     */
    mileageAllowance?: MileageAllowance;
}
/**
 *
 * @export
 * @interface PaymentType
 */
export interface PaymentType {
    /**
     *
     * @type {number}
     * @memberof PaymentType
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof PaymentType
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof PaymentType
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof PaymentType
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentType
     */
    description: string;
    /**
     *
     * @type {Account}
     * @memberof PaymentType
     */
    debitAccount?: Account;
    /**
     *
     * @type {Account}
     * @memberof PaymentType
     */
    creditAccount?: Account;
    /**
     *
     * @type {VatType}
     * @memberof PaymentType
     */
    vatType?: VatType;
    /**
     *
     * @type {Customer}
     * @memberof PaymentType
     */
    customer?: Customer;
    /**
     *
     * @type {Supplier}
     * @memberof PaymentType
     */
    supplier?: Supplier;
}
/**
 *
 * @export
 * @interface PaymentTypeOut
 */
export interface PaymentTypeOut {
    /**
     *
     * @type {number}
     * @memberof PaymentTypeOut
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof PaymentTypeOut
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof PaymentTypeOut
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof PaymentTypeOut
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentTypeOut
     */
    description: string;
    /**
     * true if it should be a deduction from the wage. The module PROVISIONSALARY is required to both view and change this setting
     * @type {boolean}
     * @memberof PaymentTypeOut
     */
    isBruttoWageDeduction?: boolean;
    /**
     *
     * @type {Account}
     * @memberof PaymentTypeOut
     */
    creditAccount: Account;
    /**
     * true if the payment type should be available in supplier invoices
     * @type {boolean}
     * @memberof PaymentTypeOut
     */
    showIncomingInvoice?: boolean;
    /**
     * true if the payment type should be available in wage payments. The wage module is required to both view and change this setting
     * @type {boolean}
     * @memberof PaymentTypeOut
     */
    showWagePayment?: boolean;
    /**
     * true if the payment type should be available in vat returns
     * @type {boolean}
     * @memberof PaymentTypeOut
     */
    showVatReturns?: boolean;
    /**
     * true if the payment type should be available in period transactionsThe wage module is required to both view and change this setting
     * @type {boolean}
     * @memberof PaymentTypeOut
     */
    showWagePeriodTransaction?: boolean;
    /**
     * true if a separate voucher is required
     * @type {boolean}
     * @memberof PaymentTypeOut
     */
    requiresSeparateVoucher?: boolean;
    /**
     * determines in which order the types should be listed. No 1 is listed first
     * @type {number}
     * @memberof PaymentTypeOut
     */
    sequence?: number;
    /**
     * true if the payment type should be hidden from available payment types
     * @type {boolean}
     * @memberof PaymentTypeOut
     */
    isInactive?: boolean;
}
/**
 *
 * @export
 * @interface Payslip
 */
export interface Payslip {
    /**
     *
     * @type {number}
     * @memberof Payslip
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Payslip
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Payslip
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Payslip
     */
    url?: string;
    /**
     *
     * @type {SalaryTransaction}
     * @memberof Payslip
     */
    transaction?: SalaryTransaction;
    /**
     *
     * @type {Employee}
     * @memberof Payslip
     */
    employee: Employee;
    /**
     * Voucher date.
     * @type {string}
     * @memberof Payslip
     */
    date?: string;
    /**
     *
     * @type {number}
     * @memberof Payslip
     */
    year?: number;
    /**
     *
     * @type {number}
     * @memberof Payslip
     */
    month?: number;
    /**
     * Link to salary specifications.
     * @type {Array&lt;SalarySpecification&gt;}
     * @memberof Payslip
     */
    specifications?: Array<SalarySpecification>;
    /**
     *
     * @type {number}
     * @memberof Payslip
     */
    vacationAllowanceAmount?: number;
    /**
     *
     * @type {number}
     * @memberof Payslip
     */
    grossAmount?: number;
    /**
     *
     * @type {number}
     * @memberof Payslip
     */
    amount?: number;
}
/**
 *
 * @export
 * @interface PerDiemCompensation
 */
export interface PerDiemCompensation {
    /**
     *
     * @type {number}
     * @memberof PerDiemCompensation
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof PerDiemCompensation
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof PerDiemCompensation
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof PerDiemCompensation
     */
    url?: string;
    /**
     *
     * @type {TravelExpense}
     * @memberof PerDiemCompensation
     */
    travelExpense?: TravelExpense;
    /**
     *
     * @type {TravelExpenseRate}
     * @memberof PerDiemCompensation
     */
    rateType?: TravelExpenseRate;
    /**
     *
     * @type {TravelExpenseRateCategory}
     * @memberof PerDiemCompensation
     */
    rateCategory?: TravelExpenseRateCategory;
    /**
     *
     * @type {string}
     * @memberof PerDiemCompensation
     */
    zone?: string;
    /**
     * Set what sort of accommodation was had overnight.
     * @type {string}
     * @memberof PerDiemCompensation
     */
    overnightAccommodation?: PerDiemCompensation.OvernightAccommodationEnum;
    /**
     *
     * @type {string}
     * @memberof PerDiemCompensation
     */
    location: string;
    /**
     *
     * @type {string}
     * @memberof PerDiemCompensation
     */
    address?: string;
    /**
     *
     * @type {number}
     * @memberof PerDiemCompensation
     */
    count?: number;
    /**
     *
     * @type {number}
     * @memberof PerDiemCompensation
     */
    rate?: number;
    /**
     *
     * @type {number}
     * @memberof PerDiemCompensation
     */
    amount?: number;
    /**
     *
     * @type {boolean}
     * @memberof PerDiemCompensation
     */
    isDeductionForBreakfast?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PerDiemCompensation
     */
    isDeductionForLunch?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PerDiemCompensation
     */
    isDeductionForDinner?: boolean;
}
/**
 * @export
 * @namespace PerDiemCompensation
 */
export declare namespace PerDiemCompensation {
    /**
     * @export
     * @enum {string}
     */
    enum OvernightAccommodationEnum {
        NONE,
        HOTEL,
        BOARDINGHOUSEWITHOUTCOOKING,
        BOARDINGHOUSEWITHCOOKING
    }
}
/**
 *
 * @export
 * @interface Posting
 */
export interface Posting {
    /**
     *
     * @type {number}
     * @memberof Posting
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Posting
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Posting
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Posting
     */
    url?: string;
    /**
     *
     * @type {Voucher}
     * @memberof Posting
     */
    voucher?: Voucher;
    /**
     *
     * @type {string}
     * @memberof Posting
     */
    date?: string;
    /**
     *
     * @type {string}
     * @memberof Posting
     */
    description?: string;
    /**
     *
     * @type {Account}
     * @memberof Posting
     */
    account?: Account;
    /**
     *
     * @type {Customer}
     * @memberof Posting
     */
    customer?: Customer;
    /**
     *
     * @type {Supplier}
     * @memberof Posting
     */
    supplier?: Supplier;
    /**
     *
     * @type {Employee}
     * @memberof Posting
     */
    employee?: Employee;
    /**
     *
     * @type {Project}
     * @memberof Posting
     */
    project?: Project;
    /**
     *
     * @type {Product}
     * @memberof Posting
     */
    product?: Product;
    /**
     *
     * @type {Department}
     * @memberof Posting
     */
    department?: Department;
    /**
     *
     * @type {VatType}
     * @memberof Posting
     */
    vatType?: VatType;
    /**
     *
     * @type {number}
     * @memberof Posting
     */
    amount?: number;
    /**
     *
     * @type {number}
     * @memberof Posting
     */
    amountCurrency?: number;
    /**
     *
     * @type {number}
     * @memberof Posting
     */
    amountGross?: number;
    /**
     *
     * @type {number}
     * @memberof Posting
     */
    amountGrossCurrency?: number;
    /**
     *
     * @type {Currency}
     * @memberof Posting
     */
    currency?: Currency;
    /**
     *
     * @type {CloseGroup}
     * @memberof Posting
     */
    closeGroup?: CloseGroup;
    /**
     *
     * @type {string}
     * @memberof Posting
     */
    invoiceNumber?: string;
    /**
     *
     * @type {string}
     * @memberof Posting
     */
    termOfPayment?: string;
    /**
     *
     * @type {number}
     * @memberof Posting
     */
    row?: number;
    /**
     *
     * @type {boolean}
     * @memberof Posting
     */
    systemGenerated?: boolean;
}
/**
 *
 * @export
 * @interface Product
 */
export interface Product {
    /**
     *
     * @type {number}
     * @memberof Product
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Product
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Product
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Product
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Product
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Product
     */
    number?: string;
    /**
     * Price purchase (cost) excluding VAT in the product's currency
     * @type {number}
     * @memberof Product
     */
    costExcludingVatCurrency?: number;
    /**
     * Price of purchase excluding VAT in the product's currency
     * @type {number}
     * @memberof Product
     */
    priceExcludingVatCurrency?: number;
    /**
     * Price of purchase including VAT in the product's currency
     * @type {number}
     * @memberof Product
     */
    priceIncludingVatCurrency?: number;
    /**
     *
     * @type {boolean}
     * @memberof Product
     */
    isInactive?: boolean;
    /**
     *
     * @type {ProductUnit}
     * @memberof Product
     */
    productUnit?: ProductUnit;
    /**
     *
     * @type {boolean}
     * @memberof Product
     */
    isStockItem?: boolean;
    /**
     *
     * @type {number}
     * @memberof Product
     */
    stockOfGoods?: number;
    /**
     *
     * @type {VatType}
     * @memberof Product
     */
    vatType?: VatType;
    /**
     *
     * @type {Currency}
     * @memberof Product
     */
    currency?: Currency;
    /**
     *
     * @type {Department}
     * @memberof Product
     */
    department?: Department;
    /**
     *
     * @type {Account}
     * @memberof Product
     */
    account?: Account;
}
/**
 *
 * @export
 * @interface ProductUnit
 */
export interface ProductUnit {
    /**
     *
     * @type {number}
     * @memberof ProductUnit
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof ProductUnit
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof ProductUnit
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof ProductUnit
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof ProductUnit
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ProductUnit
     */
    nameShort?: string;
    /**
     *
     * @type {string}
     * @memberof ProductUnit
     */
    commonCode?: string;
}
/**
 *
 * @export
 * @interface Project
 */
export interface Project {
    /**
     *
     * @type {number}
     * @memberof Project
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Project
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Project
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    number?: string;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    description?: string;
    /**
     *
     * @type {Employee}
     * @memberof Project
     */
    projectManager: Employee;
    /**
     *
     * @type {Department}
     * @memberof Project
     */
    department?: Department;
    /**
     *
     * @type {Project}
     * @memberof Project
     */
    mainProject?: Project;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    startDate?: string;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    endDate?: string;
    /**
     * The project's customer
     * @type {Customer}
     * @memberof Project
     */
    customer?: Customer;
    /**
     *
     * @type {boolean}
     * @memberof Project
     */
    isClosed?: boolean;
    /**
     * Must be set to true.
     * @type {boolean}
     * @memberof Project
     */
    isInternal: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Project
     */
    isOffer?: boolean;
    /**
     *
     * @type {ProjectCategory}
     * @memberof Project
     */
    projectCategory?: ProjectCategory;
    /**
     * Defines project name presentation in overviews.
     * @type {string}
     * @memberof Project
     */
    displayNameFormat?: Project.DisplayNameFormatEnum;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    externalAccountsNumber?: string;
}
/**
 * @export
 * @namespace Project
 */
export declare namespace Project {
    /**
     * @export
     * @enum {string}
     */
    enum DisplayNameFormatEnum {
        STANDARD,
        INCLCUSTOMERNAME,
        INCLPARENTNAME,
        INCLPARENTNUMBER,
        INCLPARENTNAMEANDNUMBER
    }
}
/**
 *
 * @export
 * @interface ProjectCategory
 */
export interface ProjectCategory {
    /**
     *
     * @type {number}
     * @memberof ProjectCategory
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof ProjectCategory
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof ProjectCategory
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof ProjectCategory
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof ProjectCategory
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ProjectCategory
     */
    number?: string;
    /**
     *
     * @type {string}
     * @memberof ProjectCategory
     */
    description?: string;
}
/**
 *
 * @export
 * @interface Prospect
 */
export interface Prospect {
    /**
     *
     * @type {number}
     * @memberof Prospect
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Prospect
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Prospect
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Prospect
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Prospect
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Prospect
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof Prospect
     */
    createdDate: string;
    /**
     *
     * @type {Customer}
     * @memberof Prospect
     */
    customer?: Customer;
    /**
     *
     * @type {Employee}
     * @memberof Prospect
     */
    salesEmployee?: Employee;
    /**
     *
     * @type {boolean}
     * @memberof Prospect
     */
    isClosed?: boolean;
    /**
     *
     * @type {number}
     * @memberof Prospect
     */
    closedReason?: number;
    /**
     *
     * @type {string}
     * @memberof Prospect
     */
    closedDate?: string;
    /**
     *
     * @type {string}
     * @memberof Prospect
     */
    competitor?: string;
    /**
     *
     * @type {number}
     * @memberof Prospect
     */
    prospectType?: number;
    /**
     * The project connected to this prospect.
     * @type {Project}
     * @memberof Prospect
     */
    project?: Project;
    /**
     * The project offer connected to this prospect.
     * @type {Project}
     * @memberof Prospect
     */
    projectOffer?: Project;
    /**
     * The estimated start date for income on the prospect.
     * @type {string}
     * @memberof Prospect
     */
    finalIncomeDate?: string;
    /**
     * The estimated startup fee on this prospect.
     * @type {number}
     * @memberof Prospect
     */
    finalInitialValue?: number;
    /**
     * The estimated monthly fee on this prospect.
     * @type {number}
     * @memberof Prospect
     */
    finalMonthlyValue?: number;
    /**
     * Tripletex specific.
     * @type {number}
     * @memberof Prospect
     */
    finalAdditionalServicesValue?: number;
    /**
     * The estimated total fee on this prospect.
     * @type {number}
     * @memberof Prospect
     */
    totalValue?: number;
}
/**
 *
 * @export
 * @interface RemunerationType
 */
export interface RemunerationType {
    /**
     *
     * @type {number}
     * @memberof RemunerationType
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof RemunerationType
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof RemunerationType
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof RemunerationType
     */
    url?: string;
    /**
     * Defines the remuneration type option.
     * @type {string}
     * @memberof RemunerationType
     */
    remunerationType: RemunerationType.RemunerationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof RemunerationType
     */
    nameNO?: string;
    /**
     *
     * @type {string}
     * @memberof RemunerationType
     */
    code?: string;
}
/**
 * @export
 * @namespace RemunerationType
 */
export declare namespace RemunerationType {
    /**
     * @export
     * @enum {string}
     */
    enum RemunerationTypeEnum {
        TYPE
    }
}
/**
 *
 * @export
 * @interface ResponseWrapperAccommodationAllowance
 */
export interface ResponseWrapperAccommodationAllowance {
    /**
     *
     * @type {AccommodationAllowance}
     * @memberof ResponseWrapperAccommodationAllowance
     */
    value?: AccommodationAllowance;
}
/**
 *
 * @export
 * @interface ResponseWrapperAccount
 */
export interface ResponseWrapperAccount {
    /**
     *
     * @type {Account}
     * @memberof ResponseWrapperAccount
     */
    value?: Account;
}
/**
 *
 * @export
 * @interface ResponseWrapperAccountingPeriod
 */
export interface ResponseWrapperAccountingPeriod {
    /**
     *
     * @type {AccountingPeriod}
     * @memberof ResponseWrapperAccountingPeriod
     */
    value?: AccountingPeriod;
}
/**
 *
 * @export
 * @interface ResponseWrapperActivity
 */
export interface ResponseWrapperActivity {
    /**
     *
     * @type {Activity}
     * @memberof ResponseWrapperActivity
     */
    value?: Activity;
}
/**
 *
 * @export
 * @interface ResponseWrapperAddress
 */
export interface ResponseWrapperAddress {
    /**
     *
     * @type {Address}
     * @memberof ResponseWrapperAddress
     */
    value?: Address;
}
/**
 *
 * @export
 * @interface ResponseWrapperAnnualAccount
 */
export interface ResponseWrapperAnnualAccount {
    /**
     *
     * @type {AnnualAccount}
     * @memberof ResponseWrapperAnnualAccount
     */
    value?: AnnualAccount;
}
/**
 *
 * @export
 * @interface ResponseWrapperApiConsumer
 */
export interface ResponseWrapperApiConsumer {
    /**
     *
     * @type {ApiConsumer}
     * @memberof ResponseWrapperApiConsumer
     */
    value?: ApiConsumer;
}
/**
 *
 * @export
 * @interface ResponseWrapperAppSpecific
 */
export interface ResponseWrapperAppSpecific {
    /**
     *
     * @type {AppSpecific}
     * @memberof ResponseWrapperAppSpecific
     */
    value?: AppSpecific;
}
/**
 *
 * @export
 * @interface ResponseWrapperBankReconciliation
 */
export interface ResponseWrapperBankReconciliation {
    /**
     *
     * @type {BankReconciliation}
     * @memberof ResponseWrapperBankReconciliation
     */
    value?: BankReconciliation;
}
/**
 *
 * @export
 * @interface ResponseWrapperBankReconciliationMatch
 */
export interface ResponseWrapperBankReconciliationMatch {
    /**
     *
     * @type {BankReconciliationMatch}
     * @memberof ResponseWrapperBankReconciliationMatch
     */
    value?: BankReconciliationMatch;
}
/**
 *
 * @export
 * @interface ResponseWrapperBankReconciliationPaymentType
 */
export interface ResponseWrapperBankReconciliationPaymentType {
    /**
     *
     * @type {BankReconciliationPaymentType}
     * @memberof ResponseWrapperBankReconciliationPaymentType
     */
    value?: BankReconciliationPaymentType;
}
/**
 *
 * @export
 * @interface ResponseWrapperBankStatement
 */
export interface ResponseWrapperBankStatement {
    /**
     *
     * @type {BankStatement}
     * @memberof ResponseWrapperBankStatement
     */
    value?: BankStatement;
}
/**
 *
 * @export
 * @interface ResponseWrapperBankTransaction
 */
export interface ResponseWrapperBankTransaction {
    /**
     *
     * @type {BankTransaction}
     * @memberof ResponseWrapperBankTransaction
     */
    value?: BankTransaction;
}
/**
 *
 * @export
 * @interface ResponseWrapperBanner
 */
export interface ResponseWrapperBanner {
    /**
     *
     * @type {Banner}
     * @memberof ResponseWrapperBanner
     */
    value?: Banner;
}
/**
 *
 * @export
 * @interface ResponseWrapperBoolean
 */
export interface ResponseWrapperBoolean {
    /**
     *
     * @type {boolean}
     * @memberof ResponseWrapperBoolean
     */
    value?: boolean;
}
/**
 *
 * @export
 * @interface ResponseWrapperCloseGroup
 */
export interface ResponseWrapperCloseGroup {
    /**
     *
     * @type {CloseGroup}
     * @memberof ResponseWrapperCloseGroup
     */
    value?: CloseGroup;
}
/**
 *
 * @export
 * @interface ResponseWrapperCompany
 */
export interface ResponseWrapperCompany {
    /**
     *
     * @type {Company}
     * @memberof ResponseWrapperCompany
     */
    value?: Company;
}
/**
 *
 * @export
 * @interface ResponseWrapperConsumerToken
 */
export interface ResponseWrapperConsumerToken {
    /**
     *
     * @type {ConsumerToken}
     * @memberof ResponseWrapperConsumerToken
     */
    value?: ConsumerToken;
}
/**
 *
 * @export
 * @interface ResponseWrapperContact
 */
export interface ResponseWrapperContact {
    /**
     *
     * @type {Contact}
     * @memberof ResponseWrapperContact
     */
    value?: Contact;
}
/**
 *
 * @export
 * @interface ResponseWrapperCost
 */
export interface ResponseWrapperCost {
    /**
     *
     * @type {Cost}
     * @memberof ResponseWrapperCost
     */
    value?: Cost;
}
/**
 *
 * @export
 * @interface ResponseWrapperCountry
 */
export interface ResponseWrapperCountry {
    /**
     *
     * @type {Country}
     * @memberof ResponseWrapperCountry
     */
    value?: Country;
}
/**
 *
 * @export
 * @interface ResponseWrapperCurrency
 */
export interface ResponseWrapperCurrency {
    /**
     *
     * @type {Currency}
     * @memberof ResponseWrapperCurrency
     */
    value?: Currency;
}
/**
 *
 * @export
 * @interface ResponseWrapperCustomer
 */
export interface ResponseWrapperCustomer {
    /**
     *
     * @type {Customer}
     * @memberof ResponseWrapperCustomer
     */
    value?: Customer;
}
/**
 *
 * @export
 * @interface ResponseWrapperCustomerCategory
 */
export interface ResponseWrapperCustomerCategory {
    /**
     *
     * @type {CustomerCategory}
     * @memberof ResponseWrapperCustomerCategory
     */
    value?: CustomerCategory;
}
/**
 *
 * @export
 * @interface ResponseWrapperDepartment
 */
export interface ResponseWrapperDepartment {
    /**
     *
     * @type {Department}
     * @memberof ResponseWrapperDepartment
     */
    value?: Department;
}
/**
 *
 * @export
 * @interface ResponseWrapperDouble
 */
export interface ResponseWrapperDouble {
    /**
     *
     * @type {number}
     * @memberof ResponseWrapperDouble
     */
    value?: number;
}
/**
 *
 * @export
 * @interface ResponseWrapperEmployee
 */
export interface ResponseWrapperEmployee {
    /**
     *
     * @type {Employee}
     * @memberof ResponseWrapperEmployee
     */
    value?: Employee;
}
/**
 *
 * @export
 * @interface ResponseWrapperEmployeeToken
 */
export interface ResponseWrapperEmployeeToken {
    /**
     *
     * @type {EmployeeToken}
     * @memberof ResponseWrapperEmployeeToken
     */
    value?: EmployeeToken;
}
/**
 *
 * @export
 * @interface ResponseWrapperEmployment
 */
export interface ResponseWrapperEmployment {
    /**
     *
     * @type {Employment}
     * @memberof ResponseWrapperEmployment
     */
    value?: Employment;
}
/**
 *
 * @export
 * @interface ResponseWrapperEmploymentDetails
 */
export interface ResponseWrapperEmploymentDetails {
    /**
     *
     * @type {EmploymentDetails}
     * @memberof ResponseWrapperEmploymentDetails
     */
    value?: EmploymentDetails;
}
/**
 *
 * @export
 * @interface ResponseWrapperEntitlement
 */
export interface ResponseWrapperEntitlement {
    /**
     *
     * @type {Entitlement}
     * @memberof ResponseWrapperEntitlement
     */
    value?: Entitlement;
}
/**
 *
 * @export
 * @interface ResponseWrapperInteger
 */
export interface ResponseWrapperInteger {
    /**
     *
     * @type {number}
     * @memberof ResponseWrapperInteger
     */
    value?: number;
}
/**
 *
 * @export
 * @interface ResponseWrapperInventory
 */
export interface ResponseWrapperInventory {
    /**
     *
     * @type {Inventory}
     * @memberof ResponseWrapperInventory
     */
    value?: Inventory;
}
/**
 *
 * @export
 * @interface ResponseWrapperInvoice
 */
export interface ResponseWrapperInvoice {
    /**
     *
     * @type {Invoice}
     * @memberof ResponseWrapperInvoice
     */
    value?: Invoice;
}
/**
 *
 * @export
 * @interface ResponseWrapperLeaveOfAbsence
 */
export interface ResponseWrapperLeaveOfAbsence {
    /**
     *
     * @type {LeaveOfAbsence}
     * @memberof ResponseWrapperLeaveOfAbsence
     */
    value?: LeaveOfAbsence;
}
/**
 *
 * @export
 * @interface ResponseWrapperListJob
 */
export interface ResponseWrapperListJob {
    /**
     *
     * @type {Array&lt;Job&gt;}
     * @memberof ResponseWrapperListJob
     */
    value?: Array<Job>;
}
/**
 *
 * @export
 * @interface ResponseWrapperLoggedInUserInfoDTO
 */
export interface ResponseWrapperLoggedInUserInfoDTO {
    /**
     *
     * @type {LoggedInUserInfoDTO}
     * @memberof ResponseWrapperLoggedInUserInfoDTO
     */
    value?: LoggedInUserInfoDTO;
}
/**
 *
 * @export
 * @interface ResponseWrapperMapStringEventInfoDescription
 */
export interface ResponseWrapperMapStringEventInfoDescription {
    /**
     *
     * @type {{ [key: string]: EventInfoDescription; }}
     * @memberof ResponseWrapperMapStringEventInfoDescription
     */
    value?: {
        [key: string]: EventInfoDescription;
    };
}
/**
 *
 * @export
 * @interface ResponseWrapperMileageAllowance
 */
export interface ResponseWrapperMileageAllowance {
    /**
     *
     * @type {MileageAllowance}
     * @memberof ResponseWrapperMileageAllowance
     */
    value?: MileageAllowance;
}
/**
 *
 * @export
 * @interface ResponseWrapperModules
 */
export interface ResponseWrapperModules {
    /**
     *
     * @type {Modules}
     * @memberof ResponseWrapperModules
     */
    value?: Modules;
}
/**
 *
 * @export
 * @interface ResponseWrapperMonthlyStatus
 */
export interface ResponseWrapperMonthlyStatus {
    /**
     *
     * @type {MonthlyStatus}
     * @memberof ResponseWrapperMonthlyStatus
     */
    value?: MonthlyStatus;
}
/**
 *
 * @export
 * @interface ResponseWrapperNotification
 */
export interface ResponseWrapperNotification {
    /**
     *
     * @type {Notification}
     * @memberof ResponseWrapperNotification
     */
    value?: Notification;
}
/**
 *
 * @export
 * @interface ResponseWrapperObject
 */
export interface ResponseWrapperObject {
    /**
     *
     * @type {any}
     * @memberof ResponseWrapperObject
     */
    value?: any;
}
/**
 *
 * @export
 * @interface ResponseWrapperOrder
 */
export interface ResponseWrapperOrder {
    /**
     *
     * @type {Order}
     * @memberof ResponseWrapperOrder
     */
    value?: Order;
}
/**
 *
 * @export
 * @interface ResponseWrapperOrderLine
 */
export interface ResponseWrapperOrderLine {
    /**
     *
     * @type {OrderLine}
     * @memberof ResponseWrapperOrderLine
     */
    value?: OrderLine;
}
/**
 *
 * @export
 * @interface ResponseWrapperPassenger
 */
export interface ResponseWrapperPassenger {
    /**
     *
     * @type {Passenger}
     * @memberof ResponseWrapperPassenger
     */
    value?: Passenger;
}
/**
 *
 * @export
 * @interface ResponseWrapperPaymentType
 */
export interface ResponseWrapperPaymentType {
    /**
     *
     * @type {PaymentType}
     * @memberof ResponseWrapperPaymentType
     */
    value?: PaymentType;
}
/**
 *
 * @export
 * @interface ResponseWrapperPaymentTypeOut
 */
export interface ResponseWrapperPaymentTypeOut {
    /**
     *
     * @type {PaymentTypeOut}
     * @memberof ResponseWrapperPaymentTypeOut
     */
    value?: PaymentTypeOut;
}
/**
 *
 * @export
 * @interface ResponseWrapperPayslip
 */
export interface ResponseWrapperPayslip {
    /**
     *
     * @type {Payslip}
     * @memberof ResponseWrapperPayslip
     */
    value?: Payslip;
}
/**
 *
 * @export
 * @interface ResponseWrapperPerDiemCompensation
 */
export interface ResponseWrapperPerDiemCompensation {
    /**
     *
     * @type {PerDiemCompensation}
     * @memberof ResponseWrapperPerDiemCompensation
     */
    value?: PerDiemCompensation;
}
/**
 *
 * @export
 * @interface ResponseWrapperPosting
 */
export interface ResponseWrapperPosting {
    /**
     *
     * @type {Posting}
     * @memberof ResponseWrapperPosting
     */
    value?: Posting;
}
/**
 *
 * @export
 * @interface ResponseWrapperProduct
 */
export interface ResponseWrapperProduct {
    /**
     *
     * @type {Product}
     * @memberof ResponseWrapperProduct
     */
    value?: Product;
}
/**
 *
 * @export
 * @interface ResponseWrapperProductUnit
 */
export interface ResponseWrapperProductUnit {
    /**
     *
     * @type {ProductUnit}
     * @memberof ResponseWrapperProductUnit
     */
    value?: ProductUnit;
}
/**
 *
 * @export
 * @interface ResponseWrapperProject
 */
export interface ResponseWrapperProject {
    /**
     *
     * @type {Project}
     * @memberof ResponseWrapperProject
     */
    value?: Project;
}
/**
 *
 * @export
 * @interface ResponseWrapperProjectCategory
 */
export interface ResponseWrapperProjectCategory {
    /**
     *
     * @type {ProjectCategory}
     * @memberof ResponseWrapperProjectCategory
     */
    value?: ProjectCategory;
}
/**
 *
 * @export
 * @interface ResponseWrapperProspect
 */
export interface ResponseWrapperProspect {
    /**
     *
     * @type {Prospect}
     * @memberof ResponseWrapperProspect
     */
    value?: Prospect;
}
/**
 *
 * @export
 * @interface ResponseWrapperSalarySpecification
 */
export interface ResponseWrapperSalarySpecification {
    /**
     *
     * @type {SalarySpecification}
     * @memberof ResponseWrapperSalarySpecification
     */
    value?: SalarySpecification;
}
/**
 *
 * @export
 * @interface ResponseWrapperSalaryTransaction
 */
export interface ResponseWrapperSalaryTransaction {
    /**
     *
     * @type {SalaryTransaction}
     * @memberof ResponseWrapperSalaryTransaction
     */
    value?: SalaryTransaction;
}
/**
 *
 * @export
 * @interface ResponseWrapperSalaryType
 */
export interface ResponseWrapperSalaryType {
    /**
     *
     * @type {SalaryType}
     * @memberof ResponseWrapperSalaryType
     */
    value?: SalaryType;
}
/**
 *
 * @export
 * @interface ResponseWrapperSessionToken
 */
export interface ResponseWrapperSessionToken {
    /**
     *
     * @type {SessionToken}
     * @memberof ResponseWrapperSessionToken
     */
    value?: SessionToken;
}
/**
 *
 * @export
 * @interface ResponseWrapperStandardTime
 */
export interface ResponseWrapperStandardTime {
    /**
     *
     * @type {StandardTime}
     * @memberof ResponseWrapperStandardTime
     */
    value?: StandardTime;
}
/**
 *
 * @export
 * @interface ResponseWrapperString
 */
export interface ResponseWrapperString {
    /**
     *
     * @type {string}
     * @memberof ResponseWrapperString
     */
    value?: string;
}
/**
 *
 * @export
 * @interface ResponseWrapperSubscription
 */
export interface ResponseWrapperSubscription {
    /**
     *
     * @type {Subscription}
     * @memberof ResponseWrapperSubscription
     */
    value?: Subscription;
}
/**
 *
 * @export
 * @interface ResponseWrapperSupplier
 */
export interface ResponseWrapperSupplier {
    /**
     *
     * @type {Supplier}
     * @memberof ResponseWrapperSupplier
     */
    value?: Supplier;
}
/**
 *
 * @export
 * @interface ResponseWrapperSystemMessage
 */
export interface ResponseWrapperSystemMessage {
    /**
     *
     * @type {SystemMessage}
     * @memberof ResponseWrapperSystemMessage
     */
    value?: SystemMessage;
}
/**
 *
 * @export
 * @interface ResponseWrapperTimeClock
 */
export interface ResponseWrapperTimeClock {
    /**
     *
     * @type {TimeClock}
     * @memberof ResponseWrapperTimeClock
     */
    value?: TimeClock;
}
/**
 *
 * @export
 * @interface ResponseWrapperTimesheetEntry
 */
export interface ResponseWrapperTimesheetEntry {
    /**
     *
     * @type {TimesheetEntry}
     * @memberof ResponseWrapperTimesheetEntry
     */
    value?: TimesheetEntry;
}
/**
 *
 * @export
 * @interface ResponseWrapperTravelCostCategory
 */
export interface ResponseWrapperTravelCostCategory {
    /**
     *
     * @type {TravelCostCategory}
     * @memberof ResponseWrapperTravelCostCategory
     */
    value?: TravelCostCategory;
}
/**
 *
 * @export
 * @interface ResponseWrapperTravelExpense
 */
export interface ResponseWrapperTravelExpense {
    /**
     *
     * @type {TravelExpense}
     * @memberof ResponseWrapperTravelExpense
     */
    value?: TravelExpense;
}
/**
 *
 * @export
 * @interface ResponseWrapperTravelExpenseRate
 */
export interface ResponseWrapperTravelExpenseRate {
    /**
     *
     * @type {TravelExpenseRate}
     * @memberof ResponseWrapperTravelExpenseRate
     */
    value?: TravelExpenseRate;
}
/**
 *
 * @export
 * @interface ResponseWrapperTravelExpenseRateCategory
 */
export interface ResponseWrapperTravelExpenseRateCategory {
    /**
     *
     * @type {TravelExpenseRateCategory}
     * @memberof ResponseWrapperTravelExpenseRateCategory
     */
    value?: TravelExpenseRateCategory;
}
/**
 *
 * @export
 * @interface ResponseWrapperTravelExpenseRateCategoryGroup
 */
export interface ResponseWrapperTravelExpenseRateCategoryGroup {
    /**
     *
     * @type {TravelExpenseRateCategoryGroup}
     * @memberof ResponseWrapperTravelExpenseRateCategoryGroup
     */
    value?: TravelExpenseRateCategoryGroup;
}
/**
 *
 * @export
 * @interface ResponseWrapperTravelPaymentType
 */
export interface ResponseWrapperTravelPaymentType {
    /**
     *
     * @type {TravelPaymentType}
     * @memberof ResponseWrapperTravelPaymentType
     */
    value?: TravelPaymentType;
}
/**
 *
 * @export
 * @interface ResponseWrapperTripletexAccountReturn
 */
export interface ResponseWrapperTripletexAccountReturn {
    /**
     *
     * @type {TripletexAccountReturn}
     * @memberof ResponseWrapperTripletexAccountReturn
     */
    value?: TripletexAccountReturn;
}
/**
 *
 * @export
 * @interface ResponseWrapperUnreadCountDTO
 */
export interface ResponseWrapperUnreadCountDTO {
    /**
     *
     * @type {UnreadCountDTO}
     * @memberof ResponseWrapperUnreadCountDTO
     */
    value?: UnreadCountDTO;
}
/**
 *
 * @export
 * @interface ResponseWrapperVatType
 */
export interface ResponseWrapperVatType {
    /**
     *
     * @type {VatType}
     * @memberof ResponseWrapperVatType
     */
    value?: VatType;
}
/**
 *
 * @export
 * @interface ResponseWrapperVoucher
 */
export interface ResponseWrapperVoucher {
    /**
     *
     * @type {Voucher}
     * @memberof ResponseWrapperVoucher
     */
    value?: Voucher;
}
/**
 *
 * @export
 * @interface ResponseWrapperVoucherType
 */
export interface ResponseWrapperVoucherType {
    /**
     *
     * @type {VoucherType}
     * @memberof ResponseWrapperVoucherType
     */
    value?: VoucherType;
}
/**
 *
 * @export
 * @interface ResponseWrapperWeeklyStatus
 */
export interface ResponseWrapperWeeklyStatus {
    /**
     *
     * @type {WeeklyStatus}
     * @memberof ResponseWrapperWeeklyStatus
     */
    value?: WeeklyStatus;
}
/**
 *
 * @export
 * @interface Result
 */
export interface Result {
    /**
     *
     * @type {string}
     * @memberof Result
     */
    file?: Result.FileEnum;
    /**
     *
     * @type {number}
     * @memberof Result
     */
    line?: number;
    /**
     *
     * @type {string}
     * @memberof Result
     */
    type?: Result.TypeEnum;
    /**
     *
     * @type {string}
     * @memberof Result
     */
    number?: string;
    /**
     *
     * @type {number}
     * @memberof Result
     */
    dbId?: number;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof Result
     */
    input?: {
        [key: string]: any;
    };
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof Result
     */
    output?: {
        [key: string]: any;
    };
    /**
     *
     * @type {Array&lt;string&gt;}
     * @memberof Result
     */
    log?: Array<string>;
    /**
     *
     * @type {CSVRecord}
     * @memberof Result
     */
    record?: CSVRecord;
    /**
     *
     * @type {AbstractDTO}
     * @memberof Result
     */
    dto?: AbstractDTO;
}
/**
 * @export
 * @namespace Result
 */
export declare namespace Result {
    /**
     * @export
     * @enum {string}
     */
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
        PROJECTSCATEGORIES
    }
    /**
     * @export
     * @enum {string}
     */
    enum TypeEnum {
        IGNORED,
        UPDATED,
        CREATED,
        ERROR
    }
}
/**
 *
 * @export
 * @interface SalarySpecification
 */
export interface SalarySpecification {
    /**
     *
     * @type {number}
     * @memberof SalarySpecification
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof SalarySpecification
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof SalarySpecification
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof SalarySpecification
     */
    url?: string;
    /**
     *
     * @type {number}
     * @memberof SalarySpecification
     */
    rate: number;
    /**
     *
     * @type {number}
     * @memberof SalarySpecification
     */
    count: number;
    /**
     *
     * @type {Project}
     * @memberof SalarySpecification
     */
    project?: Project;
    /**
     *
     * @type {Department}
     * @memberof SalarySpecification
     */
    department?: Department;
    /**
     *
     * @type {SalaryType}
     * @memberof SalarySpecification
     */
    salaryType: SalaryType;
    /**
     *
     * @type {Payslip}
     * @memberof SalarySpecification
     */
    payslip?: Payslip;
    /**
     *
     * @type {Employee}
     * @memberof SalarySpecification
     */
    employee?: Employee;
    /**
     *
     * @type {string}
     * @memberof SalarySpecification
     */
    description?: string;
    /**
     *
     * @type {number}
     * @memberof SalarySpecification
     */
    year?: number;
    /**
     *
     * @type {number}
     * @memberof SalarySpecification
     */
    month?: number;
    /**
     *
     * @type {number}
     * @memberof SalarySpecification
     */
    amount?: number;
}
/**
 *
 * @export
 * @interface SalaryTransaction
 */
export interface SalaryTransaction {
    /**
     *
     * @type {number}
     * @memberof SalaryTransaction
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof SalaryTransaction
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof SalaryTransaction
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof SalaryTransaction
     */
    url?: string;
    /**
     * Voucher date.
     * @type {string}
     * @memberof SalaryTransaction
     */
    date?: string;
    /**
     *
     * @type {number}
     * @memberof SalaryTransaction
     */
    year: number;
    /**
     *
     * @type {number}
     * @memberof SalaryTransaction
     */
    month: number;
    /**
     * Link to individual payslip objects.
     * @type {Array&lt;Payslip&gt;}
     * @memberof SalaryTransaction
     */
    payslips: Array<Payslip>;
}
/**
 *
 * @export
 * @interface SalaryType
 */
export interface SalaryType {
    /**
     *
     * @type {number}
     * @memberof SalaryType
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof SalaryType
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof SalaryType
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof SalaryType
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof SalaryType
     */
    number?: string;
    /**
     *
     * @type {string}
     * @memberof SalaryType
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof SalaryType
     */
    description?: string;
}
/**
 *
 * @export
 * @interface SessionToken
 */
export interface SessionToken {
    /**
     *
     * @type {number}
     * @memberof SessionToken
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof SessionToken
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof SessionToken
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof SessionToken
     */
    url?: string;
    /**
     *
     * @type {ConsumerToken}
     * @memberof SessionToken
     */
    consumerToken?: ConsumerToken;
    /**
     *
     * @type {EmployeeToken}
     * @memberof SessionToken
     */
    employeeToken?: EmployeeToken;
    /**
     *
     * @type {string}
     * @memberof SessionToken
     */
    expirationDate: string;
    /**
     *
     * @type {string}
     * @memberof SessionToken
     */
    token?: string;
    /**
     *
     * @type {string}
     * @memberof SessionToken
     */
    encryptionKey?: string;
}
/**
 *
 * @export
 * @interface SmartScanWebhook
 */
export interface SmartScanWebhook {
    /**
     *
     * @type {string}
     * @memberof SmartScanWebhook
     */
    self?: string;
    /**
     *
     * @type {string}
     * @memberof SmartScanWebhook
     */
    documentId?: string;
    /**
     *
     * @type {string}
     * @memberof SmartScanWebhook
     */
    clientDocumentId?: string;
}
/**
 *
 * @export
 * @interface StandardTime
 */
export interface StandardTime {
    /**
     *
     * @type {number}
     * @memberof StandardTime
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof StandardTime
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof StandardTime
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof StandardTime
     */
    url?: string;
    /**
     *
     * @type {Employee}
     * @memberof StandardTime
     */
    employee?: Employee;
    /**
     *
     * @type {string}
     * @memberof StandardTime
     */
    fromDate: string;
    /**
     *
     * @type {number}
     * @memberof StandardTime
     */
    hoursPerDay: number;
}
/**
 *
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Subscription
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    url?: string;
    /**
     * Event name (from v2/event) you wish to subscribe to. Form should be: *subject.verb*.
     * @type {string}
     * @memberof Subscription
     */
    event: string;
    /**
     * The callback URL used for subscriptions (including authentication tokens). Must be absolute and use HTTPS.
     * @type {string}
     * @memberof Subscription
     */
    targetUrl: string;
    /**
     * The fields in the object delivered with the notification callback, nested as in other API calls.
     * @type {string}
     * @memberof Subscription
     */
    fields?: string;
    /**
     * The status of the subscription.
     * @type {string}
     * @memberof Subscription
     */
    status?: Subscription.StatusEnum;
}
/**
 * @export
 * @namespace Subscription
 */
export declare namespace Subscription {
    /**
     * @export
     * @enum {string}
     */
    enum StatusEnum {
        ACTIVE,
        DISABLED,
        DISABLEDTOOMANYERRORS,
        DISABLEDRATELIMITEXCEEDED,
        DISABLEDMISUSE
    }
}
/**
 *
 * @export
 * @interface Supplier
 */
export interface Supplier {
    /**
     *
     * @type {number}
     * @memberof Supplier
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Supplier
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Supplier
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Supplier
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Supplier
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Supplier
     */
    organizationNumber?: string;
    /**
     *
     * @type {number}
     * @memberof Supplier
     */
    supplierNumber?: number;
    /**
     *
     * @type {number}
     * @memberof Supplier
     */
    customerNumber?: number;
    /**
     *
     * @type {boolean}
     * @memberof Supplier
     */
    isSupplier?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Supplier
     */
    isCustomer?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Supplier
     */
    isInactive?: boolean;
    /**
     *
     * @type {string}
     * @memberof Supplier
     */
    email?: string;
    /**
     * List of the bank account numbers for this supplier.  Norwegian bank account numbers only.
     * @type {Array&lt;string&gt;}
     * @memberof Supplier
     */
    bankAccounts?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof Supplier
     */
    invoiceEmail?: string;
    /**
     *
     * @type {string}
     * @memberof Supplier
     */
    phoneNumber?: string;
    /**
     *
     * @type {string}
     * @memberof Supplier
     */
    phoneNumberMobile?: string;
    /**
     *
     * @type {string}
     * @memberof Supplier
     */
    description?: string;
    /**
     *
     * @type {boolean}
     * @memberof Supplier
     */
    isPrivateIndividual?: boolean;
    /**
     *
     * @type {Employee}
     * @memberof Supplier
     */
    accountManager?: Employee;
    /**
     *
     * @type {Address}
     * @memberof Supplier
     */
    postalAddress?: Address;
    /**
     *
     * @type {Address}
     * @memberof Supplier
     */
    physicalAddress?: Address;
    /**
     *
     * @type {Address}
     * @memberof Supplier
     */
    deliveryAddress?: Address;
    /**
     * Category 1 of this supplier
     * @type {CustomerCategory}
     * @memberof Supplier
     */
    category1?: CustomerCategory;
    /**
     * Category 2 of this supplier
     * @type {CustomerCategory}
     * @memberof Supplier
     */
    category2?: CustomerCategory;
    /**
     * Category 3 of this supplier
     * @type {CustomerCategory}
     * @memberof Supplier
     */
    category3?: CustomerCategory;
}
/**
 *
 * @export
 * @interface SupplierBalance
 */
export interface SupplierBalance {
    /**
     *
     * @type {Supplier}
     * @memberof SupplierBalance
     */
    supplier?: Supplier;
    /**
     *
     * @type {number}
     * @memberof SupplierBalance
     */
    balanceIn?: number;
    /**
     *
     * @type {number}
     * @memberof SupplierBalance
     */
    balanceChange?: number;
    /**
     *
     * @type {number}
     * @memberof SupplierBalance
     */
    balanceOut?: number;
    /**
     * Currencies that have been used prior to this period, for the given filter
     * @type {Array&lt;Currency&gt;}
     * @memberof SupplierBalance
     */
    balanceInCurrencies?: Array<Currency>;
    /**
     *
     * @type {number}
     * @memberof SupplierBalance
     */
    sumAmountNegative?: number;
}
/**
 *
 * @export
 * @interface SystemMessage
 */
export interface SystemMessage {
    /**
     *
     * @type {string}
     * @memberof SystemMessage
     */
    message?: string;
}
/**
 *
 * @export
 * @interface TimeClock
 */
export interface TimeClock {
    /**
     *
     * @type {number}
     * @memberof TimeClock
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof TimeClock
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof TimeClock
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof TimeClock
     */
    url?: string;
    /**
     *
     * @type {Employee}
     * @memberof TimeClock
     */
    employee: Employee;
    /**
     *
     * @type {Project}
     * @memberof TimeClock
     */
    project?: Project;
    /**
     *
     * @type {Activity}
     * @memberof TimeClock
     */
    activity?: Activity;
    /**
     *
     * @type {TimesheetEntry}
     * @memberof TimeClock
     */
    timesheetEntry?: TimesheetEntry;
    /**
     *
     * @type {string}
     * @memberof TimeClock
     */
    date: string;
    /**
     *
     * @type {string}
     * @memberof TimeClock
     */
    timeStart: string;
    /**
     *
     * @type {string}
     * @memberof TimeClock
     */
    timeStop?: string;
    /**
     *
     * @type {number}
     * @memberof TimeClock
     */
    hoursStart?: number;
}
/**
 *
 * @export
 * @interface TimesheetEntry
 */
export interface TimesheetEntry {
    /**
     *
     * @type {number}
     * @memberof TimesheetEntry
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof TimesheetEntry
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof TimesheetEntry
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof TimesheetEntry
     */
    url?: string;
    /**
     *
     * @type {Project}
     * @memberof TimesheetEntry
     */
    project?: Project;
    /**
     *
     * @type {Activity}
     * @memberof TimesheetEntry
     */
    activity: Activity;
    /**
     *
     * @type {string}
     * @memberof TimesheetEntry
     */
    date: string;
    /**
     *
     * @type {number}
     * @memberof TimesheetEntry
     */
    hours: number;
    /**
     *
     * @type {number}
     * @memberof TimesheetEntry
     */
    chargeableHours: number;
    /**
     *
     * @type {Employee}
     * @memberof TimesheetEntry
     */
    employee: Employee;
    /**
     * Link to stop watches on this hour.
     * @type {Array&lt;TimeClock&gt;}
     * @memberof TimesheetEntry
     */
    timeClocks?: Array<TimeClock>;
    /**
     *
     * @type {string}
     * @memberof TimesheetEntry
     */
    comment?: string;
    /**
     * Indicates if the hour can be changed.
     * @type {boolean}
     * @memberof TimesheetEntry
     */
    locked?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TimesheetEntry
     */
    chargeable?: boolean;
}
/**
 *
 * @export
 * @interface TimesheetEntrySearchResponse
 */
export interface TimesheetEntrySearchResponse {
    /**
     *
     * @type {number}
     * @memberof TimesheetEntrySearchResponse
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof TimesheetEntrySearchResponse
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof TimesheetEntrySearchResponse
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof TimesheetEntrySearchResponse
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;TimesheetEntry&gt;}
     * @memberof TimesheetEntrySearchResponse
     */
    values?: Array<TimesheetEntry>;
    /**
     *
     * @type {number}
     * @memberof TimesheetEntrySearchResponse
     */
    sumAllHours?: number;
}
/**
 *
 * @export
 * @interface TravelCostCategory
 */
export interface TravelCostCategory {
    /**
     *
     * @type {number}
     * @memberof TravelCostCategory
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof TravelCostCategory
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof TravelCostCategory
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof TravelCostCategory
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof TravelCostCategory
     */
    description: string;
    /**
     *
     * @type {Account}
     * @memberof TravelCostCategory
     */
    account?: Account;
    /**
     *
     * @type {VatType}
     * @memberof TravelCostCategory
     */
    vatType?: VatType;
    /**
     *
     * @type {boolean}
     * @memberof TravelCostCategory
     */
    isVatLocked?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelCostCategory
     */
    showOnTravelExpenses?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelCostCategory
     */
    showOnEmployeeExpenses?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelCostCategory
     */
    isInactive?: boolean;
}
/**
 *
 * @export
 * @interface TravelDetails
 */
export interface TravelDetails {
    /**
     *
     * @type {boolean}
     * @memberof TravelDetails
     */
    isForeignTravel?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelDetails
     */
    isDayTrip?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelDetails
     */
    isCompensationFromRates?: boolean;
    /**
     *
     * @type {string}
     * @memberof TravelDetails
     */
    departureDate?: string;
    /**
     *
     * @type {string}
     * @memberof TravelDetails
     */
    returnDate?: string;
    /**
     *
     * @type {string}
     * @memberof TravelDetails
     */
    detailedJourneyDescription?: string;
    /**
     *
     * @type {string}
     * @memberof TravelDetails
     */
    departureFrom?: string;
    /**
     *
     * @type {string}
     * @memberof TravelDetails
     */
    destination?: string;
    /**
     *
     * @type {string}
     * @memberof TravelDetails
     */
    departureTime?: string;
    /**
     *
     * @type {string}
     * @memberof TravelDetails
     */
    returnTime?: string;
    /**
     *
     * @type {string}
     * @memberof TravelDetails
     */
    purpose?: string;
}
/**
 *
 * @export
 * @interface TravelExpense
 */
export interface TravelExpense {
    /**
     *
     * @type {number}
     * @memberof TravelExpense
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpense
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof TravelExpense
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof TravelExpense
     */
    url?: string;
    /**
     *
     * @type {Project}
     * @memberof TravelExpense
     */
    project?: Project;
    /**
     *
     * @type {Employee}
     * @memberof TravelExpense
     */
    employee: Employee;
    /**
     *
     * @type {Employee}
     * @memberof TravelExpense
     */
    approvedBy?: Employee;
    /**
     *
     * @type {Employee}
     * @memberof TravelExpense
     */
    completedBy?: Employee;
    /**
     *
     * @type {Department}
     * @memberof TravelExpense
     */
    department?: Department;
    /**
     *
     * @type {Payslip}
     * @memberof TravelExpense
     */
    payslip?: Payslip;
    /**
     *
     * @type {VatType}
     * @memberof TravelExpense
     */
    vatType?: VatType;
    /**
     *
     * @type {Currency}
     * @memberof TravelExpense
     */
    paymentCurrency?: Currency;
    /**
     *
     * @type {TravelDetails}
     * @memberof TravelExpense
     */
    travelDetails?: TravelDetails;
    /**
     *
     * @type {boolean}
     * @memberof TravelExpense
     */
    isCompleted?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelExpense
     */
    isApproved?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelExpense
     */
    isChargeable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelExpense
     */
    isFixedInvoicedAmount?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelExpense
     */
    isIncludeAttachedReceiptsWhenReinvoicing?: boolean;
    /**
     *
     * @type {string}
     * @memberof TravelExpense
     */
    completedDate?: string;
    /**
     *
     * @type {string}
     * @memberof TravelExpense
     */
    approvedDate?: string;
    /**
     *
     * @type {string}
     * @memberof TravelExpense
     */
    date?: string;
    /**
     *
     * @type {number}
     * @memberof TravelExpense
     */
    travelAdvance?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpense
     */
    fixedInvoicedAmount?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpense
     */
    amount?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpense
     */
    lowRateVAT?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpense
     */
    mediumRateVAT?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpense
     */
    highRateVAT?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpense
     */
    paymentAmount?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpense
     */
    paymentAmountCurrency?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpense
     */
    number?: number;
    /**
     *
     * @type {string}
     * @memberof TravelExpense
     */
    title?: string;
    /**
     * Link to individual per diem compensations.
     * @type {Array&lt;PerDiemCompensation&gt;}
     * @memberof TravelExpense
     */
    perDiemCompensations?: Array<PerDiemCompensation>;
    /**
     * Link to individual mileage allowances.
     * @type {Array&lt;MileageAllowance&gt;}
     * @memberof TravelExpense
     */
    mileageAllowances?: Array<MileageAllowance>;
    /**
     * Link to individual accommodation allowances.
     * @type {Array&lt;AccommodationAllowance&gt;}
     * @memberof TravelExpense
     */
    accommodationAllowances?: Array<AccommodationAllowance>;
    /**
     * Link to individual costs.
     * @type {Array&lt;Cost&gt;}
     * @memberof TravelExpense
     */
    costs?: Array<Cost>;
    /**
     *
     * @type {number}
     * @memberof TravelExpense
     */
    attachmentCount?: number;
    /**
     *
     * @type {string}
     * @memberof TravelExpense
     */
    state?: TravelExpense.StateEnum;
    /**
     *
     * @type {Array&lt;Link&gt;}
     * @memberof TravelExpense
     */
    actions?: Array<Link>;
}
/**
 * @export
 * @namespace TravelExpense
 */
export declare namespace TravelExpense {
    /**
     * @export
     * @enum {string}
     */
    enum StateEnum {
        ALL,
        OPEN,
        APPROVED,
        SALARYPAID,
        DELIVERED
    }
}
/**
 *
 * @export
 * @interface TravelExpenseRate
 */
export interface TravelExpenseRate {
    /**
     *
     * @type {number}
     * @memberof TravelExpenseRate
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpenseRate
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof TravelExpenseRate
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof TravelExpenseRate
     */
    url?: string;
    /**
     *
     * @type {TravelExpenseRateCategory}
     * @memberof TravelExpenseRate
     */
    rateCategory: TravelExpenseRateCategory;
    /**
     *
     * @type {string}
     * @memberof TravelExpenseRate
     */
    zone: string;
    /**
     *
     * @type {number}
     * @memberof TravelExpenseRate
     */
    rate?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpenseRate
     */
    breakfastDeductionRate?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpenseRate
     */
    lunchDeductionRate?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpenseRate
     */
    dinnerDeductionRate?: number;
}
/**
 *
 * @export
 * @interface TravelExpenseRateCategory
 */
export interface TravelExpenseRateCategory {
    /**
     *
     * @type {number}
     * @memberof TravelExpenseRateCategory
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpenseRateCategory
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof TravelExpenseRateCategory
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof TravelExpenseRateCategory
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof TravelExpenseRateCategory
     */
    name?: string;
    /**
     *
     * @type {number}
     * @memberof TravelExpenseRateCategory
     */
    ameldingWageCode?: number;
    /**
     *
     * @type {string}
     * @memberof TravelExpenseRateCategory
     */
    wageCodeNumber?: string;
    /**
     *
     * @type {boolean}
     * @memberof TravelExpenseRateCategory
     */
    isValidDayTrip?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelExpenseRateCategory
     */
    isValidAccommodation?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelExpenseRateCategory
     */
    isValidForeignTravel?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelExpenseRateCategory
     */
    isRequiresZone?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelExpenseRateCategory
     */
    isRequiresOvernightAccommodation?: boolean;
    /**
     *
     * @type {string}
     * @memberof TravelExpenseRateCategory
     */
    fromDate: string;
    /**
     *
     * @type {string}
     * @memberof TravelExpenseRateCategory
     */
    toDate: string;
    /**
     *
     * @type {string}
     * @memberof TravelExpenseRateCategory
     */
    type?: TravelExpenseRateCategory.TypeEnum;
    /**
     *
     * @type {boolean}
     * @memberof TravelExpenseRateCategory
     */
    validDomestic?: boolean;
}
/**
 * @export
 * @namespace TravelExpenseRateCategory
 */
export declare namespace TravelExpenseRateCategory {
    /**
     * @export
     * @enum {string}
     */
    enum TypeEnum {
        PERDIEM,
        ACCOMMODATIONALLOWANCE,
        MILEAGEALLOWANCE
    }
}
/**
 *
 * @export
 * @interface TravelExpenseRateCategoryGroup
 */
export interface TravelExpenseRateCategoryGroup {
    /**
     *
     * @type {number}
     * @memberof TravelExpenseRateCategoryGroup
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof TravelExpenseRateCategoryGroup
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof TravelExpenseRateCategoryGroup
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof TravelExpenseRateCategoryGroup
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof TravelExpenseRateCategoryGroup
     */
    name?: string;
    /**
     *
     * @type {boolean}
     * @memberof TravelExpenseRateCategoryGroup
     */
    isForeignTravel?: boolean;
    /**
     *
     * @type {string}
     * @memberof TravelExpenseRateCategoryGroup
     */
    fromDate: string;
    /**
     *
     * @type {string}
     * @memberof TravelExpenseRateCategoryGroup
     */
    toDate: string;
}
/**
 *
 * @export
 * @interface TravelPaymentType
 */
export interface TravelPaymentType {
    /**
     *
     * @type {number}
     * @memberof TravelPaymentType
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof TravelPaymentType
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof TravelPaymentType
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof TravelPaymentType
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof TravelPaymentType
     */
    description: string;
    /**
     *
     * @type {Account}
     * @memberof TravelPaymentType
     */
    account?: Account;
    /**
     *
     * @type {boolean}
     * @memberof TravelPaymentType
     */
    showOnTravelExpenses?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelPaymentType
     */
    showOnEmployeeExpenses?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TravelPaymentType
     */
    isInactive?: boolean;
}
/**
 *
 * @export
 * @interface TriggerDTO
 */
export interface TriggerDTO {
    /**
     *
     * @type {string}
     * @memberof TriggerDTO
     */
    calendarName?: string;
    /**
     *
     * @type {string}
     * @memberof TriggerDTO
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof TriggerDTO
     */
    name?: string;
    /**
     *
     * @type {Date}
     * @memberof TriggerDTO
     */
    nextFireTime?: Date;
    /**
     *
     * @type {Date}
     * @memberof TriggerDTO
     */
    previousFireTime?: Date;
    /**
     *
     * @type {string}
     * @memberof TriggerDTO
     */
    state?: string;
}
/**
 *
 * @export
 * @interface TripletexAccount
 */
export interface TripletexAccount {
    /**
     * Information about the company to create. Supply as much info as you have, but at least name, type and address.
     * @type {Company}
     * @memberof TripletexAccount
     */
    company: Company;
    /**
     * Employee to create. Department on this object will also be created if supplied. If null a dummy user and department will be created instead
     * @type {Employee}
     * @memberof TripletexAccount
     */
    administrator?: Employee;
    /**
     * Is this a test account or a paying account?
     * @type {string}
     * @memberof TripletexAccount
     */
    accountType: TripletexAccount.AccountTypeEnum;
    /**
     * Modules (functionality in the application) to activate for the newly created account. Some modules have extra costs.
     * @type {Modules}
     * @memberof TripletexAccount
     */
    modules: Modules;
    /**
     * Password for the administrator user to create. Not a part of the administrator employee object since this is a value that never can be read (it is salted and hashed before storing)
     * @type {string}
     * @memberof TripletexAccount
     */
    administratorPassword: string;
    /**
     * Should the regular creation emails be sent to the company created and its users? If false you probably want to set autoValidateUserLogin to true
     * @type {boolean}
     * @memberof TripletexAccount
     */
    sendEmails?: boolean;
    /**
     * If true, the users created will be allowed to log in without validating their email address. ONLY USE THIS IF YOU ALREADY HAVE VALIDATED THE USER EMAILS.
     * @type {boolean}
     * @memberof TripletexAccount
     */
    autoValidateUserLogin?: boolean;
    /**
     * Create an API token for the administrator user for the consumer token used during this call. The token will be returned in the response.
     * @type {boolean}
     * @memberof TripletexAccount
     */
    createAdministratorApiToken?: boolean;
    /**
     * Create an API token for the company to use to call their clients, only possible for accounting and auditor accounts. The token will be returned in the response.
     * @type {boolean}
     * @memberof TripletexAccount
     */
    createCompanyOwnedApiToken?: boolean;
    /**
     * Should the company we are creating be able to create new Tripletex accounts?
     * @type {boolean}
     * @memberof TripletexAccount
     */
    mayCreateTripletexAccounts?: boolean;
    /**
     * Used to calculate prices.
     * @type {string}
     * @memberof TripletexAccount
     */
    numberOfVouchers: TripletexAccount.NumberOfVouchersEnum;
    /**
     *
     * @type {boolean}
     * @memberof TripletexAccount
     */
    auditor?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TripletexAccount
     */
    reseller?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TripletexAccount
     */
    accountingOffice?: boolean;
}
/**
 * @export
 * @namespace TripletexAccount
 */
export declare namespace TripletexAccount {
    /**
     * @export
     * @enum {string}
     */
    enum AccountTypeEnum {
        TEST,
        PAYING
    }
    /**
     * @export
     * @enum {string}
     */
    enum NumberOfVouchersEnum {
        _0100,
        _101500,
        _0500,
        _5011000,
        _10012000,
        _20013500,
        _35015000,
        _500110000,
        UNLIMITED
    }
}
/**
 *
 * @export
 * @interface TripletexAccountReturn
 */
export interface TripletexAccountReturn {
    /**
     *
     * @type {Company}
     * @memberof TripletexAccountReturn
     */
    company?: Company;
    /**
     *
     * @type {Employee}
     * @memberof TripletexAccountReturn
     */
    administrator?: Employee;
    /**
     *
     * @type {EmployeeToken}
     * @memberof TripletexAccountReturn
     */
    administratorApiToken?: EmployeeToken;
    /**
     *
     * @type {EmployeeToken}
     * @memberof TripletexAccountReturn
     */
    companyOwnedApiToken?: EmployeeToken;
    /**
     *
     * @type {number}
     * @memberof TripletexAccountReturn
     */
    companyOwnedApiTokenRobotId?: number;
}
/**
 *
 * @export
 * @interface UnreadCountDTO
 */
export interface UnreadCountDTO {
    /**
     *
     * @type {number}
     * @memberof UnreadCountDTO
     */
    count?: number;
    /**
     *
     * @type {number}
     * @memberof UnreadCountDTO
     */
    readCursor?: number;
}
/**
 *
 * @export
 * @interface VNTCStatusDTO
 */
export interface VNTCStatusDTO {
    /**
     *
     * @type {string}
     * @memberof VNTCStatusDTO
     */
    messageId: string;
    /**
     *
     * @type {string}
     * @memberof VNTCStatusDTO
     */
    externalSenderId: string;
    /**
     *
     * @type {string}
     * @memberof VNTCStatusDTO
     */
    externalMessageId: string;
    /**
     *
     * @type {number}
     * @memberof VNTCStatusDTO
     */
    partCount?: number;
    /**
     *
     * @type {string}
     * @memberof VNTCStatusDTO
     */
    messageStatus: string;
}
/**
 *
 * @export
 * @interface VatType
 */
export interface VatType {
    /**
     *
     * @type {number}
     * @memberof VatType
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof VatType
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof VatType
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof VatType
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof VatType
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof VatType
     */
    number?: string;
    /**
     *
     * @type {number}
     * @memberof VatType
     */
    percentage?: number;
}
/**
 *
 * @export
 * @interface Voucher
 */
export interface Voucher {
    /**
     *
     * @type {number}
     * @memberof Voucher
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Voucher
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof Voucher
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof Voucher
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Voucher
     */
    date: string;
    /**
     * System generated number that cannot be changed.
     * @type {number}
     * @memberof Voucher
     */
    number?: number;
    /**
     *
     * @type {number}
     * @memberof Voucher
     */
    year?: number;
    /**
     *
     * @type {string}
     * @memberof Voucher
     */
    description: string;
    /**
     *
     * @type {VoucherType}
     * @memberof Voucher
     */
    voucherType?: VoucherType;
    /**
     *
     * @type {Voucher}
     * @memberof Voucher
     */
    reverseVoucher?: Voucher;
    /**
     *
     * @type {Array&lt;Posting&gt;}
     * @memberof Voucher
     */
    postings: Array<Posting>;
}
/**
 *
 * @export
 * @interface VoucherSearchResponse
 */
export interface VoucherSearchResponse {
    /**
     *
     * @type {number}
     * @memberof VoucherSearchResponse
     */
    fullResultSize?: number;
    /**
     *
     * @type {number}
     * @memberof VoucherSearchResponse
     */
    from?: number;
    /**
     *
     * @type {number}
     * @memberof VoucherSearchResponse
     */
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     * @type {string}
     * @memberof VoucherSearchResponse
     */
    versionDigest?: string;
    /**
     *
     * @type {Array&lt;Voucher&gt;}
     * @memberof VoucherSearchResponse
     */
    values?: Array<Voucher>;
    /**
     *
     * @type {number}
     * @memberof VoucherSearchResponse
     */
    totalNumberOfPostings?: number;
}
/**
 *
 * @export
 * @interface VoucherType
 */
export interface VoucherType {
    /**
     *
     * @type {number}
     * @memberof VoucherType
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof VoucherType
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof VoucherType
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof VoucherType
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof VoucherType
     */
    name?: string;
}
/**
 *
 * @export
 * @interface WeeklyStatus
 */
export interface WeeklyStatus {
    /**
     *
     * @type {number}
     * @memberof WeeklyStatus
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof WeeklyStatus
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof WeeklyStatus
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof WeeklyStatus
     */
    url?: string;
    /**
     *
     * @type {Employee}
     * @memberof WeeklyStatus
     */
    employee: Employee;
    /**
     *
     * @type {number}
     * @memberof WeeklyStatus
     */
    year?: number;
    /**
     *
     * @type {number}
     * @memberof WeeklyStatus
     */
    week?: number;
    /**
     *
     * @type {boolean}
     * @memberof WeeklyStatus
     */
    completed?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof WeeklyStatus
     */
    approved?: boolean;
    /**
     *
     * @type {Employee}
     * @memberof WeeklyStatus
     */
    approvedBy?: Employee;
    /**
     *
     * @type {string}
     * @memberof WeeklyStatus
     */
    approvedDate?: string;
}
/**
 *
 * @export
 * @interface WorkingHoursScheme
 */
export interface WorkingHoursScheme {
    /**
     *
     * @type {number}
     * @memberof WorkingHoursScheme
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof WorkingHoursScheme
     */
    version?: number;
    /**
     *
     * @type {Array&lt;Change&gt;}
     * @memberof WorkingHoursScheme
     */
    changes?: Array<Change>;
    /**
     *
     * @type {string}
     * @memberof WorkingHoursScheme
     */
    url?: string;
    /**
     * Defines the working hours scheme option.
     * @type {string}
     * @memberof WorkingHoursScheme
     */
    workingHoursScheme: WorkingHoursScheme.WorkingHoursSchemeEnum;
    /**
     *
     * @type {string}
     * @memberof WorkingHoursScheme
     */
    nameNO?: string;
    /**
     *
     * @type {string}
     * @memberof WorkingHoursScheme
     */
    code?: string;
}
/**
 * @export
 * @namespace WorkingHoursScheme
 */
export declare namespace WorkingHoursScheme {
    /**
     * @export
     * @enum {string}
     */
    enum WorkingHoursSchemeEnum {
        SCHEME
    }
}
/**
 * ActivityApi - fetch parameter creator
 * @export
 */
export declare const ActivityApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Find activity by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find applicable time sheet activities for an employee on a specific day.
     * @param {number} projectId Project ID
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {string} [date] yyyy-MM-dd. Defaults to today.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getForTimeSheet(projectId: number, employeeId?: number, date?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find activities corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [number] Equals
     * @param {string} [description] Containing
     * @param {boolean} [isProjectActivity] Equals
     * @param {boolean} [isGeneral] Equals
     * @param {boolean} [isChargeable] Equals
     * @param {boolean} [isTask] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, number?: string, description?: string, isProjectActivity?: boolean, isGeneral?: boolean, isChargeable?: boolean, isTask?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * ActivityApi - functional programming interface
 * @export
 */
export declare const ActivityApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Find activity by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperActivity>;
    /**
     *
     * @summary Find applicable time sheet activities for an employee on a specific day.
     * @param {number} projectId Project ID
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {string} [date] yyyy-MM-dd. Defaults to today.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getForTimeSheet(projectId: number, employeeId?: number, date?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseActivity>;
    /**
     *
     * @summary Find activities corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [number] Equals
     * @param {string} [description] Containing
     * @param {boolean} [isProjectActivity] Equals
     * @param {boolean} [isGeneral] Equals
     * @param {boolean} [isChargeable] Equals
     * @param {boolean} [isTask] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, number?: string, description?: string, isProjectActivity?: boolean, isGeneral?: boolean, isChargeable?: boolean, isTask?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseActivity>;
};
/**
 * ActivityApi - factory interface
 * @export
 */
export declare const ActivityApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Find activity by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperActivity>;
    /**
     *
     * @summary Find applicable time sheet activities for an employee on a specific day.
     * @param {number} projectId Project ID
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {string} [date] yyyy-MM-dd. Defaults to today.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getForTimeSheet(projectId: number, employeeId?: number, date?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseActivity>;
    /**
     *
     * @summary Find activities corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [number] Equals
     * @param {string} [description] Containing
     * @param {boolean} [isProjectActivity] Equals
     * @param {boolean} [isGeneral] Equals
     * @param {boolean} [isChargeable] Equals
     * @param {boolean} [isTask] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, number?: string, description?: string, isProjectActivity?: boolean, isGeneral?: boolean, isChargeable?: boolean, isTask?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseActivity>;
};
/**
 * ActivityApi - object-oriented interface
 * @export
 * @class ActivityApi
 * @extends {BaseAPI}
 */
export declare class ActivityApi extends BaseAPI {
    /**
     *
     * @summary Find activity by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperActivity>;
    /**
     *
     * @summary Find applicable time sheet activities for an employee on a specific day.
     * @param {} projectId Project ID
     * @param {} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {} [date] yyyy-MM-dd. Defaults to today.
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityApi
     */
    getForTimeSheet(projectId: number, employeeId?: number, date?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseActivity>;
    /**
     *
     * @summary Find activities corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [name] Containing
     * @param {} [number] Equals
     * @param {} [description] Containing
     * @param {} [isProjectActivity] Equals
     * @param {} [isGeneral] Equals
     * @param {} [isChargeable] Equals
     * @param {} [isTask] Equals
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityApi
     */
    search(id?: string, name?: string, number?: string, description?: string, isProjectActivity?: boolean, isGeneral?: boolean, isChargeable?: boolean, isTask?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseActivity>;
}
/**
 * AddressApi - fetch parameter creator
 * @export
 */
export declare const AddressApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get address by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Update address.
     * @param {number} id Element ID
     * @param {Address} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Address, options?: any): FetchArgs;
    /**
     *
     * @summary Find addresses corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [addressLine1] List of IDs
     * @param {string} [addressLine2] List of IDs
     * @param {string} [postalCode] List of IDs
     * @param {string} [city] List of IDs
     * @param {string} [name] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, addressLine1?: string, addressLine2?: string, postalCode?: string, city?: string, name?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * AddressApi - functional programming interface
 * @export
 */
export declare const AddressApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get address by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperAddress>;
    /**
     *
     * @summary Update address.
     * @param {number} id Element ID
     * @param {Address} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Address, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperAddress>;
    /**
     *
     * @summary Find addresses corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [addressLine1] List of IDs
     * @param {string} [addressLine2] List of IDs
     * @param {string} [postalCode] List of IDs
     * @param {string} [city] List of IDs
     * @param {string} [name] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, addressLine1?: string, addressLine2?: string, postalCode?: string, city?: string, name?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseAddress>;
};
/**
 * AddressApi - factory interface
 * @export
 */
export declare const AddressApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get address by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperAddress>;
    /**
     *
     * @summary Update address.
     * @param {number} id Element ID
     * @param {Address} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Address, options?: any): Promise<ResponseWrapperAddress>;
    /**
     *
     * @summary Find addresses corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [addressLine1] List of IDs
     * @param {string} [addressLine2] List of IDs
     * @param {string} [postalCode] List of IDs
     * @param {string} [city] List of IDs
     * @param {string} [name] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, addressLine1?: string, addressLine2?: string, postalCode?: string, city?: string, name?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseAddress>;
};
/**
 * AddressApi - object-oriented interface
 * @export
 * @class AddressApi
 * @extends {BaseAPI}
 */
export declare class AddressApi extends BaseAPI {
    /**
     *
     * @summary Get address by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperAddress>;
    /**
     *
     * @summary Update address.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressApi
     */
    put(id: number, body?: Address, options?: any): Promise<ResponseWrapperAddress>;
    /**
     *
     * @summary Find addresses corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [addressLine1] List of IDs
     * @param {} [addressLine2] List of IDs
     * @param {} [postalCode] List of IDs
     * @param {} [city] List of IDs
     * @param {} [name] List of IDs
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressApi
     */
    search(id?: string, addressLine1?: string, addressLine2?: string, postalCode?: string, city?: string, name?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseAddress>;
}
/**
 * BankApi - fetch parameter creator
 * @export
 */
export declare const BankApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find bank corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [registerNumbers] Bank register number (four digits)
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, registerNumbers?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * BankApi - functional programming interface
 * @export
 */
export declare const BankApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find bank corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [registerNumbers] Bank register number (four digits)
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, registerNumbers?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseBank>;
};
/**
 * BankApi - factory interface
 * @export
 */
export declare const BankApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Find bank corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [registerNumbers] Bank register number (four digits)
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, registerNumbers?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseBank>;
};
/**
 * BankApi - object-oriented interface
 * @export
 * @class BankApi
 * @extends {BaseAPI}
 */
export declare class BankApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Find bank corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [registerNumbers] Bank register number (four digits)
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankApi
     */
    search(id?: string, registerNumbers?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseBank>;
}
/**
 * BankreconciliationApi - fetch parameter creator
 * @export
 */
export declare const BankreconciliationApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete bank reconciliation by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Add an adjustment to reconciliation by ID.
     * @param {number} id Element ID
     * @param {number} paymentTypeId Bank reconciliation PaymentType ID.
     * @param {string} postingDate Format is yyyy-MM-dd
     * @param {number} amount Amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    adjustment(id: number, paymentTypeId: number, postingDate: string, amount: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Get bank reconciliation.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Get last closed reconciliation by account ID.
     * @param {number} accountId Account ID
     * @param {string} [after] Format is yyyy-MM-dd
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    lastClosed(accountId: number, after?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Post a bank reconciliation.
     * @param {BankReconciliation} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: BankReconciliation, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update a bank reconciliation.
     * @param {number} id Element ID
     * @param {BankReconciliation} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: BankReconciliation, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find bank reconciliation corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [accountingPeriodId] List of IDs
     * @param {string} [accountId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, accountingPeriodId?: string, accountId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * BankreconciliationApi - functional programming interface
 * @export
 */
export declare const BankreconciliationApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete bank reconciliation by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Add an adjustment to reconciliation by ID.
     * @param {number} id Element ID
     * @param {number} paymentTypeId Bank reconciliation PaymentType ID.
     * @param {string} postingDate Format is yyyy-MM-dd
     * @param {number} amount Amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    adjustment(id: number, paymentTypeId: number, postingDate: string, amount: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponsePosting>;
    /**
     *
     * @summary [BETA] Get bank reconciliation.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperBankReconciliation>;
    /**
     *
     * @summary [BETA] Get last closed reconciliation by account ID.
     * @param {number} accountId Account ID
     * @param {string} [after] Format is yyyy-MM-dd
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    lastClosed(accountId: number, after?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperBankReconciliation>;
    /**
     *
     * @summary [BETA] Post a bank reconciliation.
     * @param {BankReconciliation} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: BankReconciliation, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperBankReconciliation>;
    /**
     *
     * @summary [BETA] Update a bank reconciliation.
     * @param {number} id Element ID
     * @param {BankReconciliation} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: BankReconciliation, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperBankReconciliation>;
    /**
     *
     * @summary [BETA] Find bank reconciliation corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [accountingPeriodId] List of IDs
     * @param {string} [accountId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, accountingPeriodId?: string, accountId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseBankReconciliation>;
};
/**
 * BankreconciliationApi - factory interface
 * @export
 */
export declare const BankreconciliationApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete bank reconciliation by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Add an adjustment to reconciliation by ID.
     * @param {number} id Element ID
     * @param {number} paymentTypeId Bank reconciliation PaymentType ID.
     * @param {string} postingDate Format is yyyy-MM-dd
     * @param {number} amount Amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    adjustment(id: number, paymentTypeId: number, postingDate: string, amount: number, options?: any): Promise<ListResponsePosting>;
    /**
     *
     * @summary [BETA] Get bank reconciliation.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperBankReconciliation>;
    /**
     *
     * @summary [BETA] Get last closed reconciliation by account ID.
     * @param {number} accountId Account ID
     * @param {string} [after] Format is yyyy-MM-dd
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    lastClosed(accountId: number, after?: string, fields?: string, options?: any): Promise<ResponseWrapperBankReconciliation>;
    /**
     *
     * @summary [BETA] Post a bank reconciliation.
     * @param {BankReconciliation} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: BankReconciliation, options?: any): Promise<ResponseWrapperBankReconciliation>;
    /**
     *
     * @summary [BETA] Update a bank reconciliation.
     * @param {number} id Element ID
     * @param {BankReconciliation} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: BankReconciliation, options?: any): Promise<ResponseWrapperBankReconciliation>;
    /**
     *
     * @summary [BETA] Find bank reconciliation corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [accountingPeriodId] List of IDs
     * @param {string} [accountId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, accountingPeriodId?: string, accountId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseBankReconciliation>;
};
/**
 * BankreconciliationApi - object-oriented interface
 * @export
 * @class BankreconciliationApi
 * @extends {BaseAPI}
 */
export declare class BankreconciliationApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete bank reconciliation by ID.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Add an adjustment to reconciliation by ID.
     * @param {} id Element ID
     * @param {} paymentTypeId Bank reconciliation PaymentType ID.
     * @param {} postingDate Format is yyyy-MM-dd
     * @param {} amount Amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationApi
     */
    adjustment(id: number, paymentTypeId: number, postingDate: string, amount: number, options?: any): Promise<ListResponsePosting>;
    /**
     *
     * @summary [BETA] Get bank reconciliation.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperBankReconciliation>;
    /**
     *
     * @summary [BETA] Get last closed reconciliation by account ID.
     * @param {} accountId Account ID
     * @param {} [after] Format is yyyy-MM-dd
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationApi
     */
    lastClosed(accountId: number, after?: string, fields?: string, options?: any): Promise<ResponseWrapperBankReconciliation>;
    /**
     *
     * @summary [BETA] Post a bank reconciliation.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationApi
     */
    post(body?: BankReconciliation, options?: any): Promise<ResponseWrapperBankReconciliation>;
    /**
     *
     * @summary [BETA] Update a bank reconciliation.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationApi
     */
    put(id: number, body?: BankReconciliation, options?: any): Promise<ResponseWrapperBankReconciliation>;
    /**
     *
     * @summary [BETA] Find bank reconciliation corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [accountingPeriodId] List of IDs
     * @param {} [accountId] List of IDs
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationApi
     */
    search(id?: string, accountingPeriodId?: string, accountId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseBankReconciliation>;
}
/**
 * BankreconciliationmatchApi - fetch parameter creator
 * @export
 */
export declare const BankreconciliationmatchApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete a bank reconciliation match by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Get bank reconciliation match by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create a bank reconciliation match.
     * @param {BankReconciliationMatch} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: BankReconciliationMatch, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update a bank reconciliation match by ID.
     * @param {number} id Element ID
     * @param {BankReconciliationMatch} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: BankReconciliationMatch, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find bank reconciliation match corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [bankReconciliationId] List of bank reconciliation IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, bankReconciliationId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * BankreconciliationmatchApi - functional programming interface
 * @export
 */
export declare const BankreconciliationmatchApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete a bank reconciliation match by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Get bank reconciliation match by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperBankReconciliationMatch>;
    /**
     *
     * @summary [BETA] Create a bank reconciliation match.
     * @param {BankReconciliationMatch} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: BankReconciliationMatch, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperBankReconciliationMatch>;
    /**
     *
     * @summary [BETA] Update a bank reconciliation match by ID.
     * @param {number} id Element ID
     * @param {BankReconciliationMatch} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: BankReconciliationMatch, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperBankReconciliationMatch>;
    /**
     *
     * @summary [BETA] Find bank reconciliation match corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [bankReconciliationId] List of bank reconciliation IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, bankReconciliationId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseBankReconciliationMatch>;
};
/**
 * BankreconciliationmatchApi - factory interface
 * @export
 */
export declare const BankreconciliationmatchApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete a bank reconciliation match by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get bank reconciliation match by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperBankReconciliationMatch>;
    /**
     *
     * @summary [BETA] Create a bank reconciliation match.
     * @param {BankReconciliationMatch} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: BankReconciliationMatch, options?: any): Promise<ResponseWrapperBankReconciliationMatch>;
    /**
     *
     * @summary [BETA] Update a bank reconciliation match by ID.
     * @param {number} id Element ID
     * @param {BankReconciliationMatch} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: BankReconciliationMatch, options?: any): Promise<ResponseWrapperBankReconciliationMatch>;
    /**
     *
     * @summary [BETA] Find bank reconciliation match corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [bankReconciliationId] List of bank reconciliation IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, bankReconciliationId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseBankReconciliationMatch>;
};
/**
 * BankreconciliationmatchApi - object-oriented interface
 * @export
 * @class BankreconciliationmatchApi
 * @extends {BaseAPI}
 */
export declare class BankreconciliationmatchApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete a bank reconciliation match by ID.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationmatchApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get bank reconciliation match by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationmatchApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperBankReconciliationMatch>;
    /**
     *
     * @summary [BETA] Create a bank reconciliation match.
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationmatchApi
     */
    post(body?: BankReconciliationMatch, options?: any): Promise<ResponseWrapperBankReconciliationMatch>;
    /**
     *
     * @summary [BETA] Update a bank reconciliation match by ID.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationmatchApi
     */
    put(id: number, body?: BankReconciliationMatch, options?: any): Promise<ResponseWrapperBankReconciliationMatch>;
    /**
     *
     * @summary [BETA] Find bank reconciliation match corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [bankReconciliationId] List of bank reconciliation IDs
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationmatchApi
     */
    search(id?: string, bankReconciliationId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseBankReconciliationMatch>;
}
/**
 * BankreconciliationpaymentTypeApi - fetch parameter creator
 * @export
 */
export declare const BankreconciliationpaymentTypeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get payment type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find payment type corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * BankreconciliationpaymentTypeApi - functional programming interface
 * @export
 */
export declare const BankreconciliationpaymentTypeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get payment type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperBankReconciliationPaymentType>;
    /**
     *
     * @summary [BETA] Find payment type corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseBankReconciliationPaymentType>;
};
/**
 * BankreconciliationpaymentTypeApi - factory interface
 * @export
 */
export declare const BankreconciliationpaymentTypeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Get payment type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperBankReconciliationPaymentType>;
    /**
     *
     * @summary [BETA] Find payment type corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseBankReconciliationPaymentType>;
};
/**
 * BankreconciliationpaymentTypeApi - object-oriented interface
 * @export
 * @class BankreconciliationpaymentTypeApi
 * @extends {BaseAPI}
 */
export declare class BankreconciliationpaymentTypeApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Get payment type by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationpaymentTypeApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperBankReconciliationPaymentType>;
    /**
     *
     * @summary [BETA] Find payment type corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [description] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankreconciliationpaymentTypeApi
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseBankReconciliationPaymentType>;
}
/**
 * BankstatementApi - fetch parameter creator
 * @export
 */
export declare const BankstatementApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete bank statement by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Get bank statement.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Upload bank statement file.
     * @param {string} fileFormat File format
     * @param {any} file The bank statement file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importBankStatement(fileFormat: string, file: any, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find bank statement corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * BankstatementApi - functional programming interface
 * @export
 */
export declare const BankstatementApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete bank statement by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Get bank statement.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperBankStatement>;
    /**
     *
     * @summary [BETA] Upload bank statement file.
     * @param {string} fileFormat File format
     * @param {any} file The bank statement file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importBankStatement(fileFormat: string, file: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperBankStatement>;
    /**
     *
     * @summary [BETA] Find bank statement corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseBankStatement>;
};
/**
 * BankstatementApi - factory interface
 * @export
 */
export declare const BankstatementApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete bank statement by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get bank statement.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperBankStatement>;
    /**
     *
     * @summary [BETA] Upload bank statement file.
     * @param {string} fileFormat File format
     * @param {any} file The bank statement file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importBankStatement(fileFormat: string, file: any, options?: any): Promise<ResponseWrapperBankStatement>;
    /**
     *
     * @summary [BETA] Find bank statement corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseBankStatement>;
};
/**
 * BankstatementApi - object-oriented interface
 * @export
 * @class BankstatementApi
 * @extends {BaseAPI}
 */
export declare class BankstatementApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete bank statement by ID.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankstatementApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get bank statement.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankstatementApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperBankStatement>;
    /**
     *
     * @summary [BETA] Upload bank statement file.
     * @param {} fileFormat File format
     * @param {} file The bank statement file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankstatementApi
     */
    importBankStatement(fileFormat: string, file: any, options?: any): Promise<ResponseWrapperBankStatement>;
    /**
     *
     * @summary [BETA] Find bank statement corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankstatementApi
     */
    search(id?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseBankStatement>;
}
/**
 * BankstatementtransactionApi - fetch parameter creator
 * @export
 */
export declare const BankstatementtransactionApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get bank transaction by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Get additional details about transaction by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDetails(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find bank transaction corresponding with sent data.
     * @param {number} bankStatementId Bank statement ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(bankStatementId: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * BankstatementtransactionApi - functional programming interface
 * @export
 */
export declare const BankstatementtransactionApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get bank transaction by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperBankTransaction>;
    /**
     *
     * @summary [BETA] Get additional details about transaction by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDetails(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperObject>;
    /**
     *
     * @summary [BETA] Find bank transaction corresponding with sent data.
     * @param {number} bankStatementId Bank statement ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(bankStatementId: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseBankTransaction>;
};
/**
 * BankstatementtransactionApi - factory interface
 * @export
 */
export declare const BankstatementtransactionApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Get bank transaction by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperBankTransaction>;
    /**
     *
     * @summary [BETA] Get additional details about transaction by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDetails(id: number, fields?: string, options?: any): Promise<ResponseWrapperObject>;
    /**
     *
     * @summary [BETA] Find bank transaction corresponding with sent data.
     * @param {number} bankStatementId Bank statement ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(bankStatementId: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseBankTransaction>;
};
/**
 * BankstatementtransactionApi - object-oriented interface
 * @export
 * @class BankstatementtransactionApi
 * @extends {BaseAPI}
 */
export declare class BankstatementtransactionApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Get bank transaction by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankstatementtransactionApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperBankTransaction>;
    /**
     *
     * @summary [BETA] Get additional details about transaction by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankstatementtransactionApi
     */
    getDetails(id: number, fields?: string, options?: any): Promise<ResponseWrapperObject>;
    /**
     *
     * @summary [BETA] Find bank transaction corresponding with sent data.
     * @param {} bankStatementId Bank statement ID
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankstatementtransactionApi
     */
    search(bankStatementId: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseBankTransaction>;
}
/**
 * CompanyApi - fetch parameter creator
 * @export
 */
export declare const CompanyApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Find company by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find divisions.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDivisions(from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Returns client customers (with accountant/auditor relation) where the current user has login access (proxy login).
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWithLoginAccess(from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * CompanyApi - functional programming interface
 * @export
 */
export declare const CompanyApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Find company by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperCompany>;
    /**
     *
     * @summary Find divisions.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDivisions(from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseCompany>;
    /**
     *
     * @summary Returns client customers (with accountant/auditor relation) where the current user has login access (proxy login).
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWithLoginAccess(from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseCompany>;
};
/**
 * CompanyApi - factory interface
 * @export
 */
export declare const CompanyApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Find company by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCompany>;
    /**
     *
     * @summary Find divisions.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDivisions(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCompany>;
    /**
     *
     * @summary Returns client customers (with accountant/auditor relation) where the current user has login access (proxy login).
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWithLoginAccess(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCompany>;
};
/**
 * CompanyApi - object-oriented interface
 * @export
 * @class CompanyApi
 * @extends {BaseAPI}
 */
export declare class CompanyApi extends BaseAPI {
    /**
     *
     * @summary Find company by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCompany>;
    /**
     *
     * @summary Find divisions.
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    getDivisions(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCompany>;
    /**
     *
     * @summary Returns client customers (with accountant/auditor relation) where the current user has login access (proxy login).
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    getWithLoginAccess(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCompany>;
}
/**
 * ContactApi - fetch parameter creator
 * @export
 */
export declare const ContactApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get contact by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Create contact.
     * @param {Contact} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Contact, options?: any): FetchArgs;
    /**
     *
     * @summary Find contacts corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [firstName] Containing
     * @param {string} [lastName] Containing
     * @param {string} [email] Containing
     * @param {string} [customerId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, firstName?: string, lastName?: string, email?: string, customerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * ContactApi - functional programming interface
 * @export
 */
export declare const ContactApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get contact by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperContact>;
    /**
     *
     * @summary Create contact.
     * @param {Contact} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Contact, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperContact>;
    /**
     *
     * @summary Find contacts corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [firstName] Containing
     * @param {string} [lastName] Containing
     * @param {string} [email] Containing
     * @param {string} [customerId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, firstName?: string, lastName?: string, email?: string, customerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseContact>;
};
/**
 * ContactApi - factory interface
 * @export
 */
export declare const ContactApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get contact by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperContact>;
    /**
     *
     * @summary Create contact.
     * @param {Contact} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Contact, options?: any): Promise<ResponseWrapperContact>;
    /**
     *
     * @summary Find contacts corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [firstName] Containing
     * @param {string} [lastName] Containing
     * @param {string} [email] Containing
     * @param {string} [customerId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, firstName?: string, lastName?: string, email?: string, customerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseContact>;
};
/**
 * ContactApi - object-oriented interface
 * @export
 * @class ContactApi
 * @extends {BaseAPI}
 */
export declare class ContactApi extends BaseAPI {
    /**
     *
     * @summary Get contact by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperContact>;
    /**
     *
     * @summary Create contact.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactApi
     */
    post(body?: Contact, options?: any): Promise<ResponseWrapperContact>;
    /**
     *
     * @summary Find contacts corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [firstName] Containing
     * @param {} [lastName] Containing
     * @param {} [email] Containing
     * @param {} [customerId] List of IDs
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactApi
     */
    search(id?: string, firstName?: string, lastName?: string, email?: string, customerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseContact>;
}
/**
 * CountryApi - fetch parameter creator
 * @export
 */
export declare const CountryApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get country by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find countries corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [code] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, code?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * CountryApi - functional programming interface
 * @export
 */
export declare const CountryApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get country by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperCountry>;
    /**
     *
     * @summary Find countries corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [code] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, code?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseCountry>;
};
/**
 * CountryApi - factory interface
 * @export
 */
export declare const CountryApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get country by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCountry>;
    /**
     *
     * @summary Find countries corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [code] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, code?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCountry>;
};
/**
 * CountryApi - object-oriented interface
 * @export
 * @class CountryApi
 * @extends {BaseAPI}
 */
export declare class CountryApi extends BaseAPI {
    /**
     *
     * @summary Get country by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCountry>;
    /**
     *
     * @summary Find countries corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [code] List of IDs
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApi
     */
    search(id?: string, code?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCountry>;
}
/**
 * CrmprospectApi - fetch parameter creator
 * @export
 */
export declare const CrmprospectApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get prospect by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find prospects corresponding with sent data.
     * @param {string} [name] Containing
     * @param {string} [description] Containing
     * @param {string} [createdDateFrom] From and including
     * @param {string} [createdDateTo] To and excluding
     * @param {string} [customerId] Equals
     * @param {string} [salesEmployeeId] Equals
     * @param {boolean} [isClosed] Equals
     * @param {string} [closedReason] Equals
     * @param {string} [closedDateFrom] From and including
     * @param {string} [closedDateTo] To and excluding
     * @param {string} [competitor] Containing
     * @param {string} [prospectType] Equals
     * @param {string} [projectId] Equals
     * @param {string} [projectOfferId] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(name?: string, description?: string, createdDateFrom?: string, createdDateTo?: string, customerId?: string, salesEmployeeId?: string, isClosed?: boolean, closedReason?: string, closedDateFrom?: string, closedDateTo?: string, competitor?: string, prospectType?: string, projectId?: string, projectOfferId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * CrmprospectApi - functional programming interface
 * @export
 */
export declare const CrmprospectApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get prospect by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperProspect>;
    /**
     *
     * @summary Find prospects corresponding with sent data.
     * @param {string} [name] Containing
     * @param {string} [description] Containing
     * @param {string} [createdDateFrom] From and including
     * @param {string} [createdDateTo] To and excluding
     * @param {string} [customerId] Equals
     * @param {string} [salesEmployeeId] Equals
     * @param {boolean} [isClosed] Equals
     * @param {string} [closedReason] Equals
     * @param {string} [closedDateFrom] From and including
     * @param {string} [closedDateTo] To and excluding
     * @param {string} [competitor] Containing
     * @param {string} [prospectType] Equals
     * @param {string} [projectId] Equals
     * @param {string} [projectOfferId] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(name?: string, description?: string, createdDateFrom?: string, createdDateTo?: string, customerId?: string, salesEmployeeId?: string, isClosed?: boolean, closedReason?: string, closedDateFrom?: string, closedDateTo?: string, competitor?: string, prospectType?: string, projectId?: string, projectOfferId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseProspect>;
};
/**
 * CrmprospectApi - factory interface
 * @export
 */
export declare const CrmprospectApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get prospect by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperProspect>;
    /**
     *
     * @summary Find prospects corresponding with sent data.
     * @param {string} [name] Containing
     * @param {string} [description] Containing
     * @param {string} [createdDateFrom] From and including
     * @param {string} [createdDateTo] To and excluding
     * @param {string} [customerId] Equals
     * @param {string} [salesEmployeeId] Equals
     * @param {boolean} [isClosed] Equals
     * @param {string} [closedReason] Equals
     * @param {string} [closedDateFrom] From and including
     * @param {string} [closedDateTo] To and excluding
     * @param {string} [competitor] Containing
     * @param {string} [prospectType] Equals
     * @param {string} [projectId] Equals
     * @param {string} [projectOfferId] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(name?: string, description?: string, createdDateFrom?: string, createdDateTo?: string, customerId?: string, salesEmployeeId?: string, isClosed?: boolean, closedReason?: string, closedDateFrom?: string, closedDateTo?: string, competitor?: string, prospectType?: string, projectId?: string, projectOfferId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProspect>;
};
/**
 * CrmprospectApi - object-oriented interface
 * @export
 * @class CrmprospectApi
 * @extends {BaseAPI}
 */
export declare class CrmprospectApi extends BaseAPI {
    /**
     *
     * @summary Get prospect by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CrmprospectApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperProspect>;
    /**
     *
     * @summary Find prospects corresponding with sent data.
     * @param {} [name] Containing
     * @param {} [description] Containing
     * @param {} [createdDateFrom] From and including
     * @param {} [createdDateTo] To and excluding
     * @param {} [customerId] Equals
     * @param {} [salesEmployeeId] Equals
     * @param {} [isClosed] Equals
     * @param {} [closedReason] Equals
     * @param {} [closedDateFrom] From and including
     * @param {} [closedDateTo] To and excluding
     * @param {} [competitor] Containing
     * @param {} [prospectType] Equals
     * @param {} [projectId] Equals
     * @param {} [projectOfferId] Equals
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CrmprospectApi
     */
    search(name?: string, description?: string, createdDateFrom?: string, createdDateTo?: string, customerId?: string, salesEmployeeId?: string, isClosed?: boolean, closedReason?: string, closedDateFrom?: string, closedDateTo?: string, competitor?: string, prospectType?: string, projectId?: string, projectOfferId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProspect>;
}
/**
 * CurrencyApi - fetch parameter creator
 * @export
 */
export declare const CurrencyApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get currency by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find currencies corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [code] Currency codes
     * @param {string} [fields] Fields filter pattern
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, code?: string, fields?: string, from?: number, count?: number, sorting?: string, options?: any): FetchArgs;
};
/**
 * CurrencyApi - functional programming interface
 * @export
 */
export declare const CurrencyApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get currency by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperCurrency>;
    /**
     *
     * @summary Find currencies corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [code] Currency codes
     * @param {string} [fields] Fields filter pattern
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, code?: string, fields?: string, from?: number, count?: number, sorting?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseCurrency>;
};
/**
 * CurrencyApi - factory interface
 * @export
 */
export declare const CurrencyApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get currency by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCurrency>;
    /**
     *
     * @summary Find currencies corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [code] Currency codes
     * @param {string} [fields] Fields filter pattern
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, code?: string, fields?: string, from?: number, count?: number, sorting?: string, options?: any): Promise<ListResponseCurrency>;
};
/**
 * CurrencyApi - object-oriented interface
 * @export
 * @class CurrencyApi
 * @extends {BaseAPI}
 */
export declare class CurrencyApi extends BaseAPI {
    /**
     *
     * @summary Get currency by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CurrencyApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCurrency>;
    /**
     *
     * @summary Find currencies corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [code] Currency codes
     * @param {} [fields] Fields filter pattern
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CurrencyApi
     */
    search(id?: string, code?: string, fields?: string, from?: number, count?: number, sorting?: string, options?: any): Promise<ListResponseCurrency>;
}
/**
 * CustomerApi - fetch parameter creator
 * @export
 */
export declare const CustomerApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get customer by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Create customer. Related customer addresses may also be created.
     * @param {Customer} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Customer, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create multiple customers. Related supplier addresses may also be created.
     * @param {Array&lt;Customer&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Customer[], options?: any): FetchArgs;
    /**
     *
     * @summary Update customer.
     * @param {number} id Element ID
     * @param {Customer} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Customer, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update multiple customers. Addresses can also be updated.
     * @param {Array&lt;Customer&gt;} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: Customer[], options?: any): FetchArgs;
    /**
     *
     * @summary Find customers corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [customerAccountNumber] List of IDs
     * @param {string} [email] Equals
     * @param {string} [invoiceEmail] Equals
     * @param {boolean} [isInactive] Equals
     * @param {string} [accountManagerId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, customerAccountNumber?: string, email?: string, invoiceEmail?: string, isInactive?: boolean, accountManagerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * CustomerApi - functional programming interface
 * @export
 */
export declare const CustomerApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get customer by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperCustomer>;
    /**
     *
     * @summary Create customer. Related customer addresses may also be created.
     * @param {Customer} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Customer, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperCustomer>;
    /**
     *
     * @summary [BETA] Create multiple customers. Related supplier addresses may also be created.
     * @param {Array&lt;Customer&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Customer[], options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseCustomer>;
    /**
     *
     * @summary Update customer.
     * @param {number} id Element ID
     * @param {Customer} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Customer, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperCustomer>;
    /**
     *
     * @summary [BETA] Update multiple customers. Addresses can also be updated.
     * @param {Array&lt;Customer&gt;} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: Customer[], options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseCustomer>;
    /**
     *
     * @summary Find customers corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [customerAccountNumber] List of IDs
     * @param {string} [email] Equals
     * @param {string} [invoiceEmail] Equals
     * @param {boolean} [isInactive] Equals
     * @param {string} [accountManagerId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, customerAccountNumber?: string, email?: string, invoiceEmail?: string, isInactive?: boolean, accountManagerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseCustomer>;
};
/**
 * CustomerApi - factory interface
 * @export
 */
export declare const CustomerApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get customer by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCustomer>;
    /**
     *
     * @summary Create customer. Related customer addresses may also be created.
     * @param {Customer} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Customer, options?: any): Promise<ResponseWrapperCustomer>;
    /**
     *
     * @summary [BETA] Create multiple customers. Related supplier addresses may also be created.
     * @param {Array&lt;Customer&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Customer[], options?: any): Promise<ListResponseCustomer>;
    /**
     *
     * @summary Update customer.
     * @param {number} id Element ID
     * @param {Customer} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Customer, options?: any): Promise<ResponseWrapperCustomer>;
    /**
     *
     * @summary [BETA] Update multiple customers. Addresses can also be updated.
     * @param {Array&lt;Customer&gt;} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: Customer[], options?: any): Promise<ListResponseCustomer>;
    /**
     *
     * @summary Find customers corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [customerAccountNumber] List of IDs
     * @param {string} [email] Equals
     * @param {string} [invoiceEmail] Equals
     * @param {boolean} [isInactive] Equals
     * @param {string} [accountManagerId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, customerAccountNumber?: string, email?: string, invoiceEmail?: string, isInactive?: boolean, accountManagerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCustomer>;
};
/**
 * CustomerApi - object-oriented interface
 * @export
 * @class CustomerApi
 * @extends {BaseAPI}
 */
export declare class CustomerApi extends BaseAPI {
    /**
     *
     * @summary Get customer by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCustomer>;
    /**
     *
     * @summary Create customer. Related customer addresses may also be created.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerApi
     */
    post(body?: Customer, options?: any): Promise<ResponseWrapperCustomer>;
    /**
     *
     * @summary [BETA] Create multiple customers. Related supplier addresses may also be created.
     * @param {} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerApi
     */
    postList(body?: Array<Customer>, options?: any): Promise<ListResponseCustomer>;
    /**
     *
     * @summary Update customer.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerApi
     */
    put(id: number, body?: Customer, options?: any): Promise<ResponseWrapperCustomer>;
    /**
     *
     * @summary [BETA] Update multiple customers. Addresses can also be updated.
     * @param {} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerApi
     */
    putList(body?: Array<Customer>, options?: any): Promise<ListResponseCustomer>;
    /**
     *
     * @summary Find customers corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [customerAccountNumber] List of IDs
     * @param {} [email] Equals
     * @param {} [invoiceEmail] Equals
     * @param {} [isInactive] Equals
     * @param {} [accountManagerId] List of IDs
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerApi
     */
    search(id?: string, customerAccountNumber?: string, email?: string, invoiceEmail?: string, isInactive?: boolean, accountManagerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCustomer>;
}
/**
 * CustomercategoryApi - fetch parameter creator
 * @export
 */
export declare const CustomercategoryApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Find customer/supplier category by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Add new customer/supplier category.
     * @param {CustomerCategory} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: CustomerCategory, options?: any): FetchArgs;
    /**
     *
     * @summary Update customer/supplier category.
     * @param {number} id Element ID
     * @param {CustomerCategory} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: CustomerCategory, options?: any): FetchArgs;
    /**
     *
     * @summary Find customer/supplier categories corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [number] Equals
     * @param {string} [description] Containing
     * @param {string} [type] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, number?: string, description?: string, type?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * CustomercategoryApi - functional programming interface
 * @export
 */
export declare const CustomercategoryApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Find customer/supplier category by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperCustomerCategory>;
    /**
     *
     * @summary Add new customer/supplier category.
     * @param {CustomerCategory} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: CustomerCategory, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperCustomerCategory>;
    /**
     *
     * @summary Update customer/supplier category.
     * @param {number} id Element ID
     * @param {CustomerCategory} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: CustomerCategory, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperCustomerCategory>;
    /**
     *
     * @summary Find customer/supplier categories corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [number] Equals
     * @param {string} [description] Containing
     * @param {string} [type] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, number?: string, description?: string, type?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseCustomerCategory>;
};
/**
 * CustomercategoryApi - factory interface
 * @export
 */
export declare const CustomercategoryApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Find customer/supplier category by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCustomerCategory>;
    /**
     *
     * @summary Add new customer/supplier category.
     * @param {CustomerCategory} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: CustomerCategory, options?: any): Promise<ResponseWrapperCustomerCategory>;
    /**
     *
     * @summary Update customer/supplier category.
     * @param {number} id Element ID
     * @param {CustomerCategory} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: CustomerCategory, options?: any): Promise<ResponseWrapperCustomerCategory>;
    /**
     *
     * @summary Find customer/supplier categories corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [number] Equals
     * @param {string} [description] Containing
     * @param {string} [type] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, number?: string, description?: string, type?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCustomerCategory>;
};
/**
 * CustomercategoryApi - object-oriented interface
 * @export
 * @class CustomercategoryApi
 * @extends {BaseAPI}
 */
export declare class CustomercategoryApi extends BaseAPI {
    /**
     *
     * @summary Find customer/supplier category by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomercategoryApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCustomerCategory>;
    /**
     *
     * @summary Add new customer/supplier category.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomercategoryApi
     */
    post(body?: CustomerCategory, options?: any): Promise<ResponseWrapperCustomerCategory>;
    /**
     *
     * @summary Update customer/supplier category.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomercategoryApi
     */
    put(id: number, body?: CustomerCategory, options?: any): Promise<ResponseWrapperCustomerCategory>;
    /**
     *
     * @summary Find customer/supplier categories corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [name] Containing
     * @param {} [number] Equals
     * @param {} [description] Containing
     * @param {} [type] List of IDs
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomercategoryApi
     */
    search(id?: string, name?: string, number?: string, description?: string, type?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCustomerCategory>;
}
/**
 * DepartmentApi - fetch parameter creator
 * @export
 */
export declare const DepartmentApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get department by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find department corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [departmentNumber] Containing
     * @param {string} [departmentManagerId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, departmentNumber?: string, departmentManagerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * DepartmentApi - functional programming interface
 * @export
 */
export declare const DepartmentApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get department by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperDepartment>;
    /**
     *
     * @summary Find department corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [departmentNumber] Containing
     * @param {string} [departmentManagerId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, departmentNumber?: string, departmentManagerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseDepartment>;
};
/**
 * DepartmentApi - factory interface
 * @export
 */
export declare const DepartmentApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get department by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperDepartment>;
    /**
     *
     * @summary Find department corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [departmentNumber] Containing
     * @param {string} [departmentManagerId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, departmentNumber?: string, departmentManagerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseDepartment>;
};
/**
 * DepartmentApi - object-oriented interface
 * @export
 * @class DepartmentApi
 * @extends {BaseAPI}
 */
export declare class DepartmentApi extends BaseAPI {
    /**
     *
     * @summary Get department by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DepartmentApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperDepartment>;
    /**
     *
     * @summary Find department corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [name] Containing
     * @param {} [departmentNumber] Containing
     * @param {} [departmentManagerId] List of IDs
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DepartmentApi
     */
    search(id?: string, name?: string, departmentNumber?: string, departmentManagerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseDepartment>;
}
/**
 * EmployeeApi - fetch parameter creator
 * @export
 */
export declare const EmployeeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get employee by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create one employee.
     * @param {Employee} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Employee, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create several employees.
     * @param {Array&lt;Employee&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Employee[], options?: any): FetchArgs;
    /**
     *
     * @summary Update employee.
     * @param {number} id Element ID
     * @param {Employee} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Employee, options?: any): FetchArgs;
    /**
     *
     * @summary Find employees corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [firstName] Containing
     * @param {string} [lastName] Containing
     * @param {string} [employeeNumber] Containing
     * @param {boolean} [allowInformationRegistration] Equals
     * @param {string} [departmentId] List of IDs
     * @param {string} [fields] Fields filter pattern
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, firstName?: string, lastName?: string, employeeNumber?: string, allowInformationRegistration?: boolean, departmentId?: string, fields?: string, from?: number, count?: number, sorting?: string, options?: any): FetchArgs;
};
/**
 * EmployeeApi - functional programming interface
 * @export
 */
export declare const EmployeeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get employee by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperEmployee>;
    /**
     *
     * @summary [BETA] Create one employee.
     * @param {Employee} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Employee, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperEmployee>;
    /**
     *
     * @summary [BETA] Create several employees.
     * @param {Array&lt;Employee&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Employee[], options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseEmployee>;
    /**
     *
     * @summary Update employee.
     * @param {number} id Element ID
     * @param {Employee} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Employee, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperEmployee>;
    /**
     *
     * @summary Find employees corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [firstName] Containing
     * @param {string} [lastName] Containing
     * @param {string} [employeeNumber] Containing
     * @param {boolean} [allowInformationRegistration] Equals
     * @param {string} [departmentId] List of IDs
     * @param {string} [fields] Fields filter pattern
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, firstName?: string, lastName?: string, employeeNumber?: string, allowInformationRegistration?: boolean, departmentId?: string, fields?: string, from?: number, count?: number, sorting?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseEmployee>;
};
/**
 * EmployeeApi - factory interface
 * @export
 */
export declare const EmployeeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get employee by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperEmployee>;
    /**
     *
     * @summary [BETA] Create one employee.
     * @param {Employee} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Employee, options?: any): Promise<ResponseWrapperEmployee>;
    /**
     *
     * @summary [BETA] Create several employees.
     * @param {Array&lt;Employee&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Employee[], options?: any): Promise<ListResponseEmployee>;
    /**
     *
     * @summary Update employee.
     * @param {number} id Element ID
     * @param {Employee} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Employee, options?: any): Promise<ResponseWrapperEmployee>;
    /**
     *
     * @summary Find employees corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [firstName] Containing
     * @param {string} [lastName] Containing
     * @param {string} [employeeNumber] Containing
     * @param {boolean} [allowInformationRegistration] Equals
     * @param {string} [departmentId] List of IDs
     * @param {string} [fields] Fields filter pattern
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, firstName?: string, lastName?: string, employeeNumber?: string, allowInformationRegistration?: boolean, departmentId?: string, fields?: string, from?: number, count?: number, sorting?: string, options?: any): Promise<ListResponseEmployee>;
};
/**
 * EmployeeApi - object-oriented interface
 * @export
 * @class EmployeeApi
 * @extends {BaseAPI}
 */
export declare class EmployeeApi extends BaseAPI {
    /**
     *
     * @summary Get employee by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperEmployee>;
    /**
     *
     * @summary [BETA] Create one employee.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApi
     */
    post(body?: Employee, options?: any): Promise<ResponseWrapperEmployee>;
    /**
     *
     * @summary [BETA] Create several employees.
     * @param {} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApi
     */
    postList(body?: Array<Employee>, options?: any): Promise<ListResponseEmployee>;
    /**
     *
     * @summary Update employee.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApi
     */
    put(id: number, body?: Employee, options?: any): Promise<ResponseWrapperEmployee>;
    /**
     *
     * @summary Find employees corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [firstName] Containing
     * @param {} [lastName] Containing
     * @param {} [employeeNumber] Containing
     * @param {} [allowInformationRegistration] Equals
     * @param {} [departmentId] List of IDs
     * @param {} [fields] Fields filter pattern
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApi
     */
    search(id?: string, firstName?: string, lastName?: string, employeeNumber?: string, allowInformationRegistration?: boolean, departmentId?: string, fields?: string, from?: number, count?: number, sorting?: string, options?: any): Promise<ListResponseEmployee>;
}
/**
 * EmployeeemploymentApi - fetch parameter creator
 * @export
 */
export declare const EmployeeemploymentApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Find employment by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create employment.
     * @param {Employment} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Employment, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update employemnt.
     * @param {number} id Element ID
     * @param {Employment} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Employment, options?: any): FetchArgs;
    /**
     *
     * @summary Find all employments for employee.
     * @param {number} [employeeId] Element ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * EmployeeemploymentApi - functional programming interface
 * @export
 */
export declare const EmployeeemploymentApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Find employment by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperEmployment>;
    /**
     *
     * @summary [BETA] Create employment.
     * @param {Employment} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Employment, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperEmployment>;
    /**
     *
     * @summary [BETA] Update employemnt.
     * @param {number} id Element ID
     * @param {Employment} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Employment, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperEmployment>;
    /**
     *
     * @summary Find all employments for employee.
     * @param {number} [employeeId] Element ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseEmployment>;
};
/**
 * EmployeeemploymentApi - factory interface
 * @export
 */
export declare const EmployeeemploymentApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Find employment by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperEmployment>;
    /**
     *
     * @summary [BETA] Create employment.
     * @param {Employment} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Employment, options?: any): Promise<ResponseWrapperEmployment>;
    /**
     *
     * @summary [BETA] Update employemnt.
     * @param {number} id Element ID
     * @param {Employment} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Employment, options?: any): Promise<ResponseWrapperEmployment>;
    /**
     *
     * @summary Find all employments for employee.
     * @param {number} [employeeId] Element ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseEmployment>;
};
/**
 * EmployeeemploymentApi - object-oriented interface
 * @export
 * @class EmployeeemploymentApi
 * @extends {BaseAPI}
 */
export declare class EmployeeemploymentApi extends BaseAPI {
    /**
     *
     * @summary Find employment by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperEmployment>;
    /**
     *
     * @summary [BETA] Create employment.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentApi
     */
    post(body?: Employment, options?: any): Promise<ResponseWrapperEmployment>;
    /**
     *
     * @summary [BETA] Update employemnt.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentApi
     */
    put(id: number, body?: Employment, options?: any): Promise<ResponseWrapperEmployment>;
    /**
     *
     * @summary Find all employments for employee.
     * @param {} [employeeId] Element ID
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentApi
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseEmployment>;
}
/**
 * EmployeeemploymentdetailsApi - fetch parameter creator
 * @export
 */
export declare const EmployeeemploymentdetailsApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find employment details by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create employment details.
     * @param {EmploymentDetails} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: EmploymentDetails, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update employment details.
     * @param {number} id Element ID
     * @param {EmploymentDetails} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: EmploymentDetails, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find all employmentdetails for employment.
     * @param {number} [employmentId] Element ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employmentId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * EmployeeemploymentdetailsApi - functional programming interface
 * @export
 */
export declare const EmployeeemploymentdetailsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find employment details by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperEmploymentDetails>;
    /**
     *
     * @summary [BETA] Create employment details.
     * @param {EmploymentDetails} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: EmploymentDetails, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperEmploymentDetails>;
    /**
     *
     * @summary [BETA] Update employment details.
     * @param {number} id Element ID
     * @param {EmploymentDetails} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: EmploymentDetails, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperEmploymentDetails>;
    /**
     *
     * @summary [BETA] Find all employmentdetails for employment.
     * @param {number} [employmentId] Element ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employmentId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseEmploymentDetails>;
};
/**
 * EmployeeemploymentdetailsApi - factory interface
 * @export
 */
export declare const EmployeeemploymentdetailsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Find employment details by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperEmploymentDetails>;
    /**
     *
     * @summary [BETA] Create employment details.
     * @param {EmploymentDetails} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: EmploymentDetails, options?: any): Promise<ResponseWrapperEmploymentDetails>;
    /**
     *
     * @summary [BETA] Update employment details.
     * @param {number} id Element ID
     * @param {EmploymentDetails} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: EmploymentDetails, options?: any): Promise<ResponseWrapperEmploymentDetails>;
    /**
     *
     * @summary [BETA] Find all employmentdetails for employment.
     * @param {number} [employmentId] Element ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employmentId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseEmploymentDetails>;
};
/**
 * EmployeeemploymentdetailsApi - object-oriented interface
 * @export
 * @class EmployeeemploymentdetailsApi
 * @extends {BaseAPI}
 */
export declare class EmployeeemploymentdetailsApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Find employment details by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentdetailsApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperEmploymentDetails>;
    /**
     *
     * @summary [BETA] Create employment details.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentdetailsApi
     */
    post(body?: EmploymentDetails, options?: any): Promise<ResponseWrapperEmploymentDetails>;
    /**
     *
     * @summary [BETA] Update employment details.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentdetailsApi
     */
    put(id: number, body?: EmploymentDetails, options?: any): Promise<ResponseWrapperEmploymentDetails>;
    /**
     *
     * @summary [BETA] Find all employmentdetails for employment.
     * @param {} [employmentId] Element ID
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentdetailsApi
     */
    search(employmentId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseEmploymentDetails>;
}
/**
 * EmployeeemploymentemploymentTypeApi - fetch parameter creator
 * @export
 */
export declare const EmployeeemploymentemploymentTypeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find all employment type IDs.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * EmployeeemploymentemploymentTypeApi - functional programming interface
 * @export
 */
export declare const EmployeeemploymentemploymentTypeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find all employment type IDs.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseEmploymentType>;
};
/**
 * EmployeeemploymentemploymentTypeApi - factory interface
 * @export
 */
export declare const EmployeeemploymentemploymentTypeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Find all employment type IDs.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseEmploymentType>;
};
/**
 * EmployeeemploymentemploymentTypeApi - object-oriented interface
 * @export
 * @class EmployeeemploymentemploymentTypeApi
 * @extends {BaseAPI}
 */
export declare class EmployeeemploymentemploymentTypeApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Find all employment type IDs.
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentemploymentTypeApi
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseEmploymentType>;
}
/**
 * EmployeeemploymentleaveOfAbsenceApi - fetch parameter creator
 * @export
 */
export declare const EmployeeemploymentleaveOfAbsenceApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find leave of absence by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create leave of absence.
     * @param {LeaveOfAbsence} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: LeaveOfAbsence, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update leave of absence.
     * @param {number} id Element ID
     * @param {LeaveOfAbsence} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: LeaveOfAbsence, options?: any): FetchArgs;
};
/**
 * EmployeeemploymentleaveOfAbsenceApi - functional programming interface
 * @export
 */
export declare const EmployeeemploymentleaveOfAbsenceApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find leave of absence by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperLeaveOfAbsence>;
    /**
     *
     * @summary [BETA] Create leave of absence.
     * @param {LeaveOfAbsence} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: LeaveOfAbsence, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperLeaveOfAbsence>;
    /**
     *
     * @summary [BETA] Update leave of absence.
     * @param {number} id Element ID
     * @param {LeaveOfAbsence} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: LeaveOfAbsence, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperLeaveOfAbsence>;
};
/**
 * EmployeeemploymentleaveOfAbsenceApi - factory interface
 * @export
 */
export declare const EmployeeemploymentleaveOfAbsenceApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Find leave of absence by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperLeaveOfAbsence>;
    /**
     *
     * @summary [BETA] Create leave of absence.
     * @param {LeaveOfAbsence} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: LeaveOfAbsence, options?: any): Promise<ResponseWrapperLeaveOfAbsence>;
    /**
     *
     * @summary [BETA] Update leave of absence.
     * @param {number} id Element ID
     * @param {LeaveOfAbsence} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: LeaveOfAbsence, options?: any): Promise<ResponseWrapperLeaveOfAbsence>;
};
/**
 * EmployeeemploymentleaveOfAbsenceApi - object-oriented interface
 * @export
 * @class EmployeeemploymentleaveOfAbsenceApi
 * @extends {BaseAPI}
 */
export declare class EmployeeemploymentleaveOfAbsenceApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Find leave of absence by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentleaveOfAbsenceApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperLeaveOfAbsence>;
    /**
     *
     * @summary [BETA] Create leave of absence.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentleaveOfAbsenceApi
     */
    post(body?: LeaveOfAbsence, options?: any): Promise<ResponseWrapperLeaveOfAbsence>;
    /**
     *
     * @summary [BETA] Update leave of absence.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentleaveOfAbsenceApi
     */
    put(id: number, body?: LeaveOfAbsence, options?: any): Promise<ResponseWrapperLeaveOfAbsence>;
}
/**
 * EmployeeemploymentleaveOfAbsenceTypeApi - fetch parameter creator
 * @export
 */
export declare const EmployeeemploymentleaveOfAbsenceTypeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find all leave of absence type IDs.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * EmployeeemploymentleaveOfAbsenceTypeApi - functional programming interface
 * @export
 */
export declare const EmployeeemploymentleaveOfAbsenceTypeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find all leave of absence type IDs.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseLeaveOfAbsenceType>;
};
/**
 * EmployeeemploymentleaveOfAbsenceTypeApi - factory interface
 * @export
 */
export declare const EmployeeemploymentleaveOfAbsenceTypeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Find all leave of absence type IDs.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseLeaveOfAbsenceType>;
};
/**
 * EmployeeemploymentleaveOfAbsenceTypeApi - object-oriented interface
 * @export
 * @class EmployeeemploymentleaveOfAbsenceTypeApi
 * @extends {BaseAPI}
 */
export declare class EmployeeemploymentleaveOfAbsenceTypeApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Find all leave of absence type IDs.
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentleaveOfAbsenceTypeApi
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseLeaveOfAbsenceType>;
}
/**
 * EmployeeemploymentoccupationCodeApi - fetch parameter creator
 * @export
 */
export declare const EmployeeemploymentoccupationCodeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find all profession codes.
     * @param {string} [nameNO] Containing
     * @param {string} [code] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(nameNO?: string, code?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * EmployeeemploymentoccupationCodeApi - functional programming interface
 * @export
 */
export declare const EmployeeemploymentoccupationCodeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find all profession codes.
     * @param {string} [nameNO] Containing
     * @param {string} [code] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(nameNO?: string, code?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseOccupationCode>;
};
/**
 * EmployeeemploymentoccupationCodeApi - factory interface
 * @export
 */
export declare const EmployeeemploymentoccupationCodeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Find all profession codes.
     * @param {string} [nameNO] Containing
     * @param {string} [code] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(nameNO?: string, code?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseOccupationCode>;
};
/**
 * EmployeeemploymentoccupationCodeApi - object-oriented interface
 * @export
 * @class EmployeeemploymentoccupationCodeApi
 * @extends {BaseAPI}
 */
export declare class EmployeeemploymentoccupationCodeApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Find all profession codes.
     * @param {} [nameNO] Containing
     * @param {} [code] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentoccupationCodeApi
     */
    search(nameNO?: string, code?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseOccupationCode>;
}
/**
 * EmployeeemploymentremunerationTypeApi - fetch parameter creator
 * @export
 */
export declare const EmployeeemploymentremunerationTypeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find all remuneration type IDs.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * EmployeeemploymentremunerationTypeApi - functional programming interface
 * @export
 */
export declare const EmployeeemploymentremunerationTypeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find all remuneration type IDs.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseRemunerationType>;
};
/**
 * EmployeeemploymentremunerationTypeApi - factory interface
 * @export
 */
export declare const EmployeeemploymentremunerationTypeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Find all remuneration type IDs.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseRemunerationType>;
};
/**
 * EmployeeemploymentremunerationTypeApi - object-oriented interface
 * @export
 * @class EmployeeemploymentremunerationTypeApi
 * @extends {BaseAPI}
 */
export declare class EmployeeemploymentremunerationTypeApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Find all remuneration type IDs.
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentremunerationTypeApi
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseRemunerationType>;
}
/**
 * EmployeeemploymentworkingHoursSchemeApi - fetch parameter creator
 * @export
 */
export declare const EmployeeemploymentworkingHoursSchemeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find working hours scheme ID.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * EmployeeemploymentworkingHoursSchemeApi - functional programming interface
 * @export
 */
export declare const EmployeeemploymentworkingHoursSchemeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find working hours scheme ID.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseWorkingHoursScheme>;
};
/**
 * EmployeeemploymentworkingHoursSchemeApi - factory interface
 * @export
 */
export declare const EmployeeemploymentworkingHoursSchemeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Find working hours scheme ID.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseWorkingHoursScheme>;
};
/**
 * EmployeeemploymentworkingHoursSchemeApi - object-oriented interface
 * @export
 * @class EmployeeemploymentworkingHoursSchemeApi
 * @extends {BaseAPI}
 */
export declare class EmployeeemploymentworkingHoursSchemeApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Find working hours scheme ID.
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeemploymentworkingHoursSchemeApi
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseWorkingHoursScheme>;
}
/**
 * EmployeeentitlementApi - fetch parameter creator
 * @export
 */
export declare const EmployeeentitlementApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find all entitlements at client for user.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {number} [customerId] Client ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    client(employeeId?: number, customerId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Get entitlement by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update employee entitlements in client account.
     * @param {number} employeeId Employee ID
     * @param {number} customerId Client ID
     * @param {string} template Template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    grantClientEntitlementsByTemplate(employeeId: number, customerId: number, template: string, options?: any): FetchArgs;
    /**
     * The user will only receive the entitlements which are possible with the registered user type
     * @summary [BETA] Update employee entitlements.
     * @param {number} employeeId Employee ID
     * @param {string} template Template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    grantEntitlementsByTemplate(employeeId: number, template: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find all entitlements for user.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * EmployeeentitlementApi - functional programming interface
 * @export
 */
export declare const EmployeeentitlementApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find all entitlements at client for user.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {number} [customerId] Client ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    client(employeeId?: number, customerId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseEntitlement>;
    /**
     *
     * @summary Get entitlement by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperEntitlement>;
    /**
     *
     * @summary [BETA] Update employee entitlements in client account.
     * @param {number} employeeId Employee ID
     * @param {number} customerId Client ID
     * @param {string} template Template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    grantClientEntitlementsByTemplate(employeeId: number, customerId: number, template: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * The user will only receive the entitlements which are possible with the registered user type
     * @summary [BETA] Update employee entitlements.
     * @param {number} employeeId Employee ID
     * @param {string} template Template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    grantEntitlementsByTemplate(employeeId: number, template: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary Find all entitlements for user.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseEntitlement>;
};
/**
 * EmployeeentitlementApi - factory interface
 * @export
 */
export declare const EmployeeentitlementApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Find all entitlements at client for user.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {number} [customerId] Client ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    client(employeeId?: number, customerId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseEntitlement>;
    /**
     *
     * @summary Get entitlement by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperEntitlement>;
    /**
     *
     * @summary [BETA] Update employee entitlements in client account.
     * @param {number} employeeId Employee ID
     * @param {number} customerId Client ID
     * @param {string} template Template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    grantClientEntitlementsByTemplate(employeeId: number, customerId: number, template: string, options?: any): Promise<Response>;
    /**
     * The user will only receive the entitlements which are possible with the registered user type
     * @summary [BETA] Update employee entitlements.
     * @param {number} employeeId Employee ID
     * @param {string} template Template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    grantEntitlementsByTemplate(employeeId: number, template: string, options?: any): Promise<Response>;
    /**
     *
     * @summary Find all entitlements for user.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseEntitlement>;
};
/**
 * EmployeeentitlementApi - object-oriented interface
 * @export
 * @class EmployeeentitlementApi
 * @extends {BaseAPI}
 */
export declare class EmployeeentitlementApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Find all entitlements at client for user.
     * @param {} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {} [customerId] Client ID
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeentitlementApi
     */
    client(employeeId?: number, customerId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseEntitlement>;
    /**
     *
     * @summary Get entitlement by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeentitlementApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperEntitlement>;
    /**
     *
     * @summary [BETA] Update employee entitlements in client account.
     * @param {} employeeId Employee ID
     * @param {} customerId Client ID
     * @param {} template Template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeentitlementApi
     */
    grantClientEntitlementsByTemplate(employeeId: number, customerId: number, template: string, options?: any): Promise<Response>;
    /**
     * The user will only receive the entitlements which are possible with the registered user type
     * @summary [BETA] Update employee entitlements.
     * @param {} employeeId Employee ID
     * @param {} template Template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeentitlementApi
     */
    grantEntitlementsByTemplate(employeeId: number, template: string, options?: any): Promise<Response>;
    /**
     *
     * @summary Find all entitlements for user.
     * @param {} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeentitlementApi
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseEntitlement>;
}
/**
 * EmployeestandardTimeApi - fetch parameter creator
 * @export
 */
export declare const EmployeestandardTimeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find standard time by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create standard time.
     * @param {StandardTime} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: StandardTime, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update standard time.
     * @param {number} id Element ID
     * @param {StandardTime} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: StandardTime, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find all standard times for employee.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * EmployeestandardTimeApi - functional programming interface
 * @export
 */
export declare const EmployeestandardTimeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find standard time by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperStandardTime>;
    /**
     *
     * @summary [BETA] Create standard time.
     * @param {StandardTime} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: StandardTime, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperStandardTime>;
    /**
     *
     * @summary [BETA] Update standard time.
     * @param {number} id Element ID
     * @param {StandardTime} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: StandardTime, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperStandardTime>;
    /**
     *
     * @summary [BETA] Find all standard times for employee.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseStandardTime>;
};
/**
 * EmployeestandardTimeApi - factory interface
 * @export
 */
export declare const EmployeestandardTimeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Find standard time by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperStandardTime>;
    /**
     *
     * @summary [BETA] Create standard time.
     * @param {StandardTime} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: StandardTime, options?: any): Promise<ResponseWrapperStandardTime>;
    /**
     *
     * @summary [BETA] Update standard time.
     * @param {number} id Element ID
     * @param {StandardTime} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: StandardTime, options?: any): Promise<ResponseWrapperStandardTime>;
    /**
     *
     * @summary [BETA] Find all standard times for employee.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseStandardTime>;
};
/**
 * EmployeestandardTimeApi - object-oriented interface
 * @export
 * @class EmployeestandardTimeApi
 * @extends {BaseAPI}
 */
export declare class EmployeestandardTimeApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Find standard time by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeestandardTimeApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperStandardTime>;
    /**
     *
     * @summary [BETA] Create standard time.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeestandardTimeApi
     */
    post(body?: StandardTime, options?: any): Promise<ResponseWrapperStandardTime>;
    /**
     *
     * @summary [BETA] Update standard time.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeestandardTimeApi
     */
    put(id: number, body?: StandardTime, options?: any): Promise<ResponseWrapperStandardTime>;
    /**
     *
     * @summary [BETA] Find all standard times for employee.
     * @param {} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeestandardTimeApi
     */
    search(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseStandardTime>;
}
/**
 * EventApi - fetch parameter creator
 * @export
 */
export declare const EventApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get all (WebHook) event keys.
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(fields?: string, options?: any): FetchArgs;
};
/**
 * EventApi - functional programming interface
 * @export
 */
export declare const EventApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get all (WebHook) event keys.
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperMapStringEventInfoDescription>;
};
/**
 * EventApi - factory interface
 * @export
 */
export declare const EventApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Get all (WebHook) event keys.
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(fields?: string, options?: any): Promise<ResponseWrapperMapStringEventInfoDescription>;
};
/**
 * EventApi - object-oriented interface
 * @export
 * @class EventApi
 * @extends {BaseAPI}
 */
export declare class EventApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Get all (WebHook) event keys.
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApi
     */
    get(fields?: string, options?: any): Promise<ResponseWrapperMapStringEventInfoDescription>;
}
/**
 * EventsubscriptionApi - fetch parameter creator
 * @export
 */
export declare const EventsubscriptionApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete the given subscription.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Get subscription by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create a new subscription for current EmployeeToken.
     * @param {Subscription} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Subscription, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Change a current subscription, based on id.
     * @param {number} id Element ID
     * @param {Subscription} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Subscription, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find all ongoing subscriptions.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * EventsubscriptionApi - functional programming interface
 * @export
 */
export declare const EventsubscriptionApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete the given subscription.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Get subscription by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperSubscription>;
    /**
     *
     * @summary [BETA] Create a new subscription for current EmployeeToken.
     * @param {Subscription} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Subscription, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperSubscription>;
    /**
     *
     * @summary [BETA] Change a current subscription, based on id.
     * @param {number} id Element ID
     * @param {Subscription} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Subscription, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperSubscription>;
    /**
     *
     * @summary [BETA] Find all ongoing subscriptions.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseSubscription>;
};
/**
 * EventsubscriptionApi - factory interface
 * @export
 */
export declare const EventsubscriptionApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete the given subscription.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get subscription by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperSubscription>;
    /**
     *
     * @summary [BETA] Create a new subscription for current EmployeeToken.
     * @param {Subscription} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Subscription, options?: any): Promise<ResponseWrapperSubscription>;
    /**
     *
     * @summary [BETA] Change a current subscription, based on id.
     * @param {number} id Element ID
     * @param {Subscription} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Subscription, options?: any): Promise<ResponseWrapperSubscription>;
    /**
     *
     * @summary [BETA] Find all ongoing subscriptions.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseSubscription>;
};
/**
 * EventsubscriptionApi - object-oriented interface
 * @export
 * @class EventsubscriptionApi
 * @extends {BaseAPI}
 */
export declare class EventsubscriptionApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete the given subscription.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsubscriptionApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get subscription by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsubscriptionApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperSubscription>;
    /**
     *
     * @summary [BETA] Create a new subscription for current EmployeeToken.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsubscriptionApi
     */
    post(body?: Subscription, options?: any): Promise<ResponseWrapperSubscription>;
    /**
     *
     * @summary [BETA] Change a current subscription, based on id.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsubscriptionApi
     */
    put(id: number, body?: Subscription, options?: any): Promise<ResponseWrapperSubscription>;
    /**
     *
     * @summary [BETA] Find all ongoing subscriptions.
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsubscriptionApi
     */
    search(from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseSubscription>;
}
/**
 * InventoryApi - fetch parameter creator
 * @export
 */
export declare const InventoryApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get inventory by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find inventory corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {boolean} [isMainInventory] Equals
     * @param {boolean} [isInactive] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, isMainInventory?: boolean, isInactive?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * InventoryApi - functional programming interface
 * @export
 */
export declare const InventoryApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get inventory by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperInventory>;
    /**
     *
     * @summary Find inventory corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {boolean} [isMainInventory] Equals
     * @param {boolean} [isInactive] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, isMainInventory?: boolean, isInactive?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseInventory>;
};
/**
 * InventoryApi - factory interface
 * @export
 */
export declare const InventoryApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get inventory by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperInventory>;
    /**
     *
     * @summary Find inventory corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {boolean} [isMainInventory] Equals
     * @param {boolean} [isInactive] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, isMainInventory?: boolean, isInactive?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseInventory>;
};
/**
 * InventoryApi - object-oriented interface
 * @export
 * @class InventoryApi
 * @extends {BaseAPI}
 */
export declare class InventoryApi extends BaseAPI {
    /**
     *
     * @summary Get inventory by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperInventory>;
    /**
     *
     * @summary Find inventory corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [name] Containing
     * @param {} [isMainInventory] Equals
     * @param {} [isInactive] Equals
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryApi
     */
    search(id?: string, name?: string, isMainInventory?: boolean, isInactive?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseInventory>;
}
/**
 * InvoiceApi - fetch parameter creator
 * @export
 */
export declare const InvoiceApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get invoice document by invoice ID.
     * @param {number} invoiceId Invoice ID from which PDF is downloaded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadPdf(invoiceId: number, options?: any): FetchArgs;
    /**
     *
     * @summary Get invoice by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Update invoice. The invoice is updated with payment information. The amount is in the invoice’s currency.
     * @param {number} id Invoice id
     * @param {string} paymentDate Payment date
     * @param {number} paymentTypeId PaymentType id
     * @param {number} paidAmount Amount paid by customer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    payment(id: number, paymentDate: string, paymentTypeId: number, paidAmount: number, options?: any): FetchArgs;
    /**
     *
     * @summary Create invoice.
     * @param {Invoice} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {boolean} [sendToCustomer] Equals
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Invoice, sendToCustomer?: boolean, options?: any): FetchArgs;
    /**
     *
     * @summary Find invoices corresponding with sent data.
     * @param {string} invoiceDateFrom From and including
     * @param {string} invoiceDateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {string} [invoiceNumber] Equals
     * @param {string} [kid] Equals
     * @param {string} [voucherId] Equals
     * @param {string} [customerId] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(invoiceDateFrom: string, invoiceDateTo: string, id?: string, invoiceNumber?: string, kid?: string, voucherId?: string, customerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Send invoice by ID and sendType. Optionally override email recipient.
     * @param {number} id Element ID
     * @param {string} sendType SendType
     * @param {string} [overrideEmailAddress] Will override email address if sendType &#x3D; EMAIL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    send(id: number, sendType: string, overrideEmailAddress?: string, options?: any): FetchArgs;
};
/**
 * InvoiceApi - functional programming interface
 * @export
 */
export declare const InvoiceApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get invoice document by invoice ID.
     * @param {number} invoiceId Invoice ID from which PDF is downloaded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadPdf(invoiceId: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
    /**
     *
     * @summary Get invoice by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperInvoice>;
    /**
     *
     * @summary Update invoice. The invoice is updated with payment information. The amount is in the invoice’s currency.
     * @param {number} id Invoice id
     * @param {string} paymentDate Payment date
     * @param {number} paymentTypeId PaymentType id
     * @param {number} paidAmount Amount paid by customer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    payment(id: number, paymentDate: string, paymentTypeId: number, paidAmount: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperInvoice>;
    /**
     *
     * @summary Create invoice.
     * @param {Invoice} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {boolean} [sendToCustomer] Equals
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Invoice, sendToCustomer?: boolean, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperInvoice>;
    /**
     *
     * @summary Find invoices corresponding with sent data.
     * @param {string} invoiceDateFrom From and including
     * @param {string} invoiceDateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {string} [invoiceNumber] Equals
     * @param {string} [kid] Equals
     * @param {string} [voucherId] Equals
     * @param {string} [customerId] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(invoiceDateFrom: string, invoiceDateTo: string, id?: string, invoiceNumber?: string, kid?: string, voucherId?: string, customerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseInvoice>;
    /**
     *
     * @summary [BETA] Send invoice by ID and sendType. Optionally override email recipient.
     * @param {number} id Element ID
     * @param {string} sendType SendType
     * @param {string} [overrideEmailAddress] Will override email address if sendType &#x3D; EMAIL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    send(id: number, sendType: string, overrideEmailAddress?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
};
/**
 * InvoiceApi - factory interface
 * @export
 */
export declare const InvoiceApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get invoice document by invoice ID.
     * @param {number} invoiceId Invoice ID from which PDF is downloaded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadPdf(invoiceId: number, options?: any): Promise<string>;
    /**
     *
     * @summary Get invoice by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperInvoice>;
    /**
     *
     * @summary Update invoice. The invoice is updated with payment information. The amount is in the invoice’s currency.
     * @param {number} id Invoice id
     * @param {string} paymentDate Payment date
     * @param {number} paymentTypeId PaymentType id
     * @param {number} paidAmount Amount paid by customer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    payment(id: number, paymentDate: string, paymentTypeId: number, paidAmount: number, options?: any): Promise<ResponseWrapperInvoice>;
    /**
     *
     * @summary Create invoice.
     * @param {Invoice} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {boolean} [sendToCustomer] Equals
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Invoice, sendToCustomer?: boolean, options?: any): Promise<ResponseWrapperInvoice>;
    /**
     *
     * @summary Find invoices corresponding with sent data.
     * @param {string} invoiceDateFrom From and including
     * @param {string} invoiceDateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {string} [invoiceNumber] Equals
     * @param {string} [kid] Equals
     * @param {string} [voucherId] Equals
     * @param {string} [customerId] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(invoiceDateFrom: string, invoiceDateTo: string, id?: string, invoiceNumber?: string, kid?: string, voucherId?: string, customerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseInvoice>;
    /**
     *
     * @summary [BETA] Send invoice by ID and sendType. Optionally override email recipient.
     * @param {number} id Element ID
     * @param {string} sendType SendType
     * @param {string} [overrideEmailAddress] Will override email address if sendType &#x3D; EMAIL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    send(id: number, sendType: string, overrideEmailAddress?: string, options?: any): Promise<Response>;
};
/**
 * InvoiceApi - object-oriented interface
 * @export
 * @class InvoiceApi
 * @extends {BaseAPI}
 */
export declare class InvoiceApi extends BaseAPI {
    /**
     *
     * @summary Get invoice document by invoice ID.
     * @param {} invoiceId Invoice ID from which PDF is downloaded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApi
     */
    downloadPdf(invoiceId: number, options?: any): Promise<string>;
    /**
     *
     * @summary Get invoice by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperInvoice>;
    /**
     *
     * @summary Update invoice. The invoice is updated with payment information. The amount is in the invoice’s currency.
     * @param {} id Invoice id
     * @param {} paymentDate Payment date
     * @param {} paymentTypeId PaymentType id
     * @param {} paidAmount Amount paid by customer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApi
     */
    payment(id: number, paymentDate: string, paymentTypeId: number, paidAmount: number, options?: any): Promise<ResponseWrapperInvoice>;
    /**
     *
     * @summary Create invoice.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {} [sendToCustomer] Equals
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApi
     */
    post(body?: Invoice, sendToCustomer?: boolean, options?: any): Promise<ResponseWrapperInvoice>;
    /**
     *
     * @summary Find invoices corresponding with sent data.
     * @param {} invoiceDateFrom From and including
     * @param {} invoiceDateTo To and excluding
     * @param {} [id] List of IDs
     * @param {} [invoiceNumber] Equals
     * @param {} [kid] Equals
     * @param {} [voucherId] Equals
     * @param {} [customerId] Equals
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApi
     */
    search(invoiceDateFrom: string, invoiceDateTo: string, id?: string, invoiceNumber?: string, kid?: string, voucherId?: string, customerId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseInvoice>;
    /**
     *
     * @summary [BETA] Send invoice by ID and sendType. Optionally override email recipient.
     * @param {} id Element ID
     * @param {} sendType SendType
     * @param {} [overrideEmailAddress] Will override email address if sendType &#x3D; EMAIL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApi
     */
    send(id: number, sendType: string, overrideEmailAddress?: string, options?: any): Promise<Response>;
}
/**
 * InvoicepaymentTypeApi - fetch parameter creator
 * @export
 */
export declare const InvoicepaymentTypeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get payment type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find payment type corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * InvoicepaymentTypeApi - functional programming interface
 * @export
 */
export declare const InvoicepaymentTypeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get payment type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperPaymentType>;
    /**
     *
     * @summary Find payment type corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponsePaymentType>;
};
/**
 * InvoicepaymentTypeApi - factory interface
 * @export
 */
export declare const InvoicepaymentTypeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get payment type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperPaymentType>;
    /**
     *
     * @summary Find payment type corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePaymentType>;
};
/**
 * InvoicepaymentTypeApi - object-oriented interface
 * @export
 * @class InvoicepaymentTypeApi
 * @extends {BaseAPI}
 */
export declare class InvoicepaymentTypeApi extends BaseAPI {
    /**
     *
     * @summary Get payment type by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoicepaymentTypeApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperPaymentType>;
    /**
     *
     * @summary Find payment type corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [description] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoicepaymentTypeApi
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePaymentType>;
}
/**
 * LedgerApi - fetch parameter creator
 * @export
 */
export declare const LedgerApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Find open posts corresponding with sent data.
     * @param {string} date Invoice date. Format is yyyy-MM-dd (to and excl.).
     * @param {number} [accountId] Element ID
     * @param {number} [supplierId] Element ID
     * @param {number} [customerId] Element ID
     * @param {number} [employeeId] Element ID
     * @param {number} [departmentId] Element ID
     * @param {number} [projectId] Element ID
     * @param {number} [productId] Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    openPost(date: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, fields?: string, from?: number, count?: number, sorting?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Get ledger (hovedbok).
     * @param {string} dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param {string} dateTo Format is yyyy-MM-dd (to and excl.).
     * @param {string} [openPostings] Deprecated
     * @param {number} [accountId] Element ID
     * @param {number} [supplierId] Element ID
     * @param {number} [customerId] Element ID
     * @param {number} [employeeId] Element ID
     * @param {number} [departmentId] Element ID
     * @param {number} [projectId] Element ID
     * @param {number} [productId] Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, openPostings?: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, fields?: string, from?: number, count?: number, sorting?: string, options?: any): FetchArgs;
};
/**
 * LedgerApi - functional programming interface
 * @export
 */
export declare const LedgerApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Find open posts corresponding with sent data.
     * @param {string} date Invoice date. Format is yyyy-MM-dd (to and excl.).
     * @param {number} [accountId] Element ID
     * @param {number} [supplierId] Element ID
     * @param {number} [customerId] Element ID
     * @param {number} [employeeId] Element ID
     * @param {number} [departmentId] Element ID
     * @param {number} [projectId] Element ID
     * @param {number} [productId] Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    openPost(date: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, fields?: string, from?: number, count?: number, sorting?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseLedgerAccount>;
    /**
     *
     * @summary Get ledger (hovedbok).
     * @param {string} dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param {string} dateTo Format is yyyy-MM-dd (to and excl.).
     * @param {string} [openPostings] Deprecated
     * @param {number} [accountId] Element ID
     * @param {number} [supplierId] Element ID
     * @param {number} [customerId] Element ID
     * @param {number} [employeeId] Element ID
     * @param {number} [departmentId] Element ID
     * @param {number} [projectId] Element ID
     * @param {number} [productId] Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, openPostings?: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, fields?: string, from?: number, count?: number, sorting?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseLedgerAccount>;
};
/**
 * LedgerApi - factory interface
 * @export
 */
export declare const LedgerApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Find open posts corresponding with sent data.
     * @param {string} date Invoice date. Format is yyyy-MM-dd (to and excl.).
     * @param {number} [accountId] Element ID
     * @param {number} [supplierId] Element ID
     * @param {number} [customerId] Element ID
     * @param {number} [employeeId] Element ID
     * @param {number} [departmentId] Element ID
     * @param {number} [projectId] Element ID
     * @param {number} [productId] Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    openPost(date: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, fields?: string, from?: number, count?: number, sorting?: string, options?: any): Promise<ListResponseLedgerAccount>;
    /**
     *
     * @summary Get ledger (hovedbok).
     * @param {string} dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param {string} dateTo Format is yyyy-MM-dd (to and excl.).
     * @param {string} [openPostings] Deprecated
     * @param {number} [accountId] Element ID
     * @param {number} [supplierId] Element ID
     * @param {number} [customerId] Element ID
     * @param {number} [employeeId] Element ID
     * @param {number} [departmentId] Element ID
     * @param {number} [projectId] Element ID
     * @param {number} [productId] Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, openPostings?: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, fields?: string, from?: number, count?: number, sorting?: string, options?: any): Promise<ListResponseLedgerAccount>;
};
/**
 * LedgerApi - object-oriented interface
 * @export
 * @class LedgerApi
 * @extends {BaseAPI}
 */
export declare class LedgerApi extends BaseAPI {
    /**
     *
     * @summary Find open posts corresponding with sent data.
     * @param {} date Invoice date. Format is yyyy-MM-dd (to and excl.).
     * @param {} [accountId] Element ID
     * @param {} [supplierId] Element ID
     * @param {} [customerId] Element ID
     * @param {} [employeeId] Element ID
     * @param {} [departmentId] Element ID
     * @param {} [projectId] Element ID
     * @param {} [productId] Element ID
     * @param {} [fields] Fields filter pattern
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerApi
     */
    openPost(date: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, fields?: string, from?: number, count?: number, sorting?: string, options?: any): Promise<ListResponseLedgerAccount>;
    /**
     *
     * @summary Get ledger (hovedbok).
     * @param {} dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param {} dateTo Format is yyyy-MM-dd (to and excl.).
     * @param {} [openPostings] Deprecated
     * @param {} [accountId] Element ID
     * @param {} [supplierId] Element ID
     * @param {} [customerId] Element ID
     * @param {} [employeeId] Element ID
     * @param {} [departmentId] Element ID
     * @param {} [projectId] Element ID
     * @param {} [productId] Element ID
     * @param {} [fields] Fields filter pattern
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerApi
     */
    search(dateFrom: string, dateTo: string, openPostings?: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, fields?: string, from?: number, count?: number, sorting?: string, options?: any): Promise<ListResponseLedgerAccount>;
}
/**
 * LedgeraccountApi - fetch parameter creator
 * @export
 */
export declare const LedgeraccountApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete account.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Delete multiple accounts.
     * @param {string} ids ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteByIds(ids: string, options?: any): FetchArgs;
    /**
     *
     * @summary Get account by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create a new account.
     * @param {Account} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Account, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create several accounts.
     * @param {Array&lt;Account&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Account[], options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update account.
     * @param {number} id Element ID
     * @param {Account} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Account, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update multiple accounts.
     * @param {Array&lt;Account&gt;} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: Account[], options?: any): FetchArgs;
    /**
     *
     * @summary Find accounts corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [number] List of IDs
     * @param {boolean} [isBankAccount] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, number?: string, isBankAccount?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * LedgeraccountApi - functional programming interface
 * @export
 */
export declare const LedgeraccountApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete account.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Delete multiple accounts.
     * @param {string} ids ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteByIds(ids: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary Get account by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperAccount>;
    /**
     *
     * @summary [BETA] Create a new account.
     * @param {Account} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Account, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperAccount>;
    /**
     *
     * @summary [BETA] Create several accounts.
     * @param {Array&lt;Account&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Account[], options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseAccount>;
    /**
     *
     * @summary [BETA] Update account.
     * @param {number} id Element ID
     * @param {Account} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Account, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperAccount>;
    /**
     *
     * @summary [BETA] Update multiple accounts.
     * @param {Array&lt;Account&gt;} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: Account[], options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseAccount>;
    /**
     *
     * @summary Find accounts corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [number] List of IDs
     * @param {boolean} [isBankAccount] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, number?: string, isBankAccount?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseAccount>;
};
/**
 * LedgeraccountApi - factory interface
 * @export
 */
export declare const LedgeraccountApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete account.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Delete multiple accounts.
     * @param {string} ids ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteByIds(ids: string, options?: any): Promise<Response>;
    /**
     *
     * @summary Get account by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperAccount>;
    /**
     *
     * @summary [BETA] Create a new account.
     * @param {Account} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Account, options?: any): Promise<ResponseWrapperAccount>;
    /**
     *
     * @summary [BETA] Create several accounts.
     * @param {Array&lt;Account&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Account[], options?: any): Promise<ListResponseAccount>;
    /**
     *
     * @summary [BETA] Update account.
     * @param {number} id Element ID
     * @param {Account} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Account, options?: any): Promise<ResponseWrapperAccount>;
    /**
     *
     * @summary [BETA] Update multiple accounts.
     * @param {Array&lt;Account&gt;} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: Account[], options?: any): Promise<ListResponseAccount>;
    /**
     *
     * @summary Find accounts corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [number] List of IDs
     * @param {boolean} [isBankAccount] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, number?: string, isBankAccount?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseAccount>;
};
/**
 * LedgeraccountApi - object-oriented interface
 * @export
 * @class LedgeraccountApi
 * @extends {BaseAPI}
 */
export declare class LedgeraccountApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete account.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgeraccountApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Delete multiple accounts.
     * @param {} ids ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgeraccountApi
     */
    deleteByIds(ids: string, options?: any): Promise<Response>;
    /**
     *
     * @summary Get account by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgeraccountApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperAccount>;
    /**
     *
     * @summary [BETA] Create a new account.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgeraccountApi
     */
    post(body?: Account, options?: any): Promise<ResponseWrapperAccount>;
    /**
     *
     * @summary [BETA] Create several accounts.
     * @param {} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgeraccountApi
     */
    postList(body?: Array<Account>, options?: any): Promise<ListResponseAccount>;
    /**
     *
     * @summary [BETA] Update account.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgeraccountApi
     */
    put(id: number, body?: Account, options?: any): Promise<ResponseWrapperAccount>;
    /**
     *
     * @summary [BETA] Update multiple accounts.
     * @param {} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgeraccountApi
     */
    putList(body?: Array<Account>, options?: any): Promise<ListResponseAccount>;
    /**
     *
     * @summary Find accounts corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [number] List of IDs
     * @param {} [isBankAccount] Equals
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgeraccountApi
     */
    search(id?: string, number?: string, isBankAccount?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseAccount>;
}
/**
 * LedgeraccountingPeriodApi - fetch parameter creator
 * @export
 */
export declare const LedgeraccountingPeriodApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get accounting period by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find accounting periods corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {number} [numberFrom] From and including
     * @param {number} [numberTo] To and excluding
     * @param {string} [startFrom] From and including
     * @param {string} [startTo] To and excluding
     * @param {string} [endFrom] From and including
     * @param {string} [endTo] To and excluding
     * @param {number} [count] Number of elements to return
     * @param {number} [from] From index
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, numberFrom?: number, numberTo?: number, startFrom?: string, startTo?: string, endFrom?: string, endTo?: string, count?: number, from?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * LedgeraccountingPeriodApi - functional programming interface
 * @export
 */
export declare const LedgeraccountingPeriodApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get accounting period by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperAccountingPeriod>;
    /**
     *
     * @summary Find accounting periods corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {number} [numberFrom] From and including
     * @param {number} [numberTo] To and excluding
     * @param {string} [startFrom] From and including
     * @param {string} [startTo] To and excluding
     * @param {string} [endFrom] From and including
     * @param {string} [endTo] To and excluding
     * @param {number} [count] Number of elements to return
     * @param {number} [from] From index
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, numberFrom?: number, numberTo?: number, startFrom?: string, startTo?: string, endFrom?: string, endTo?: string, count?: number, from?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseAccountingPeriod>;
};
/**
 * LedgeraccountingPeriodApi - factory interface
 * @export
 */
export declare const LedgeraccountingPeriodApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get accounting period by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperAccountingPeriod>;
    /**
     *
     * @summary Find accounting periods corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {number} [numberFrom] From and including
     * @param {number} [numberTo] To and excluding
     * @param {string} [startFrom] From and including
     * @param {string} [startTo] To and excluding
     * @param {string} [endFrom] From and including
     * @param {string} [endTo] To and excluding
     * @param {number} [count] Number of elements to return
     * @param {number} [from] From index
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, numberFrom?: number, numberTo?: number, startFrom?: string, startTo?: string, endFrom?: string, endTo?: string, count?: number, from?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseAccountingPeriod>;
};
/**
 * LedgeraccountingPeriodApi - object-oriented interface
 * @export
 * @class LedgeraccountingPeriodApi
 * @extends {BaseAPI}
 */
export declare class LedgeraccountingPeriodApi extends BaseAPI {
    /**
     *
     * @summary Get accounting period by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgeraccountingPeriodApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperAccountingPeriod>;
    /**
     *
     * @summary Find accounting periods corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [numberFrom] From and including
     * @param {} [numberTo] To and excluding
     * @param {} [startFrom] From and including
     * @param {} [startTo] To and excluding
     * @param {} [endFrom] From and including
     * @param {} [endTo] To and excluding
     * @param {} [count] Number of elements to return
     * @param {} [from] From index
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgeraccountingPeriodApi
     */
    search(id?: string, numberFrom?: number, numberTo?: number, startFrom?: string, startTo?: string, endFrom?: string, endTo?: string, count?: number, from?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseAccountingPeriod>;
}
/**
 * LedgerannualAccountApi - fetch parameter creator
 * @export
 */
export declare const LedgerannualAccountApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get annual account by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find annual accounts corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {number} [yearFrom] From and including
     * @param {number} [yearTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, yearFrom?: number, yearTo?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * LedgerannualAccountApi - functional programming interface
 * @export
 */
export declare const LedgerannualAccountApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get annual account by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperAnnualAccount>;
    /**
     *
     * @summary Find annual accounts corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {number} [yearFrom] From and including
     * @param {number} [yearTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, yearFrom?: number, yearTo?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseAnnualAccount>;
};
/**
 * LedgerannualAccountApi - factory interface
 * @export
 */
export declare const LedgerannualAccountApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get annual account by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperAnnualAccount>;
    /**
     *
     * @summary Find annual accounts corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {number} [yearFrom] From and including
     * @param {number} [yearTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, yearFrom?: number, yearTo?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseAnnualAccount>;
};
/**
 * LedgerannualAccountApi - object-oriented interface
 * @export
 * @class LedgerannualAccountApi
 * @extends {BaseAPI}
 */
export declare class LedgerannualAccountApi extends BaseAPI {
    /**
     *
     * @summary Get annual account by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerannualAccountApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperAnnualAccount>;
    /**
     *
     * @summary Find annual accounts corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [yearFrom] From and including
     * @param {} [yearTo] To and excluding
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerannualAccountApi
     */
    search(id?: string, yearFrom?: number, yearTo?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseAnnualAccount>;
}
/**
 * LedgercloseGroupApi - fetch parameter creator
 * @export
 */
export declare const LedgercloseGroupApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get close group by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find close groups corresponding with sent data.
     * @param {string} dateFrom From and including
     * @param {string} dateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, id?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * LedgercloseGroupApi - functional programming interface
 * @export
 */
export declare const LedgercloseGroupApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get close group by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperCloseGroup>;
    /**
     *
     * @summary Find close groups corresponding with sent data.
     * @param {string} dateFrom From and including
     * @param {string} dateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, id?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseCloseGroup>;
};
/**
 * LedgercloseGroupApi - factory interface
 * @export
 */
export declare const LedgercloseGroupApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get close group by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCloseGroup>;
    /**
     *
     * @summary Find close groups corresponding with sent data.
     * @param {string} dateFrom From and including
     * @param {string} dateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, id?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCloseGroup>;
};
/**
 * LedgercloseGroupApi - object-oriented interface
 * @export
 * @class LedgercloseGroupApi
 * @extends {BaseAPI}
 */
export declare class LedgercloseGroupApi extends BaseAPI {
    /**
     *
     * @summary Get close group by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgercloseGroupApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCloseGroup>;
    /**
     *
     * @summary Find close groups corresponding with sent data.
     * @param {} dateFrom From and including
     * @param {} dateTo To and excluding
     * @param {} [id] List of IDs
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgercloseGroupApi
     */
    search(dateFrom: string, dateTo: string, id?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCloseGroup>;
}
/**
 * LedgerpaymentTypeOutApi - fetch parameter creator
 * @export
 */
export declare const LedgerpaymentTypeOutApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete payment type for outgoing payments by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Get payment type for outgoing payments by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create new payment type for outgoing payments
     * @param {PaymentTypeOut} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: PaymentTypeOut, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create multiple payment types for outgoing payments at once
     * @param {Array&lt;PaymentTypeOut&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: PaymentTypeOut[], options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update existing payment type for outgoing payments
     * @param {number} id Element ID
     * @param {PaymentTypeOut} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: PaymentTypeOut, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update multiple payment types for outgoing payments at once
     * @param {Array&lt;PaymentTypeOut&gt;} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: PaymentTypeOut[], options?: any): FetchArgs;
    /**
     * This is an API endpoint for getting payment types for outgoing payments. This is equivalent to the section 'Outgoing Payments' under Accounts Settings in Tripletex. These are the payment types listed in supplier invoices, vat returns, salary payments and Tax/ENI
     * @summary [BETA] Gets payment types for outgoing payments
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {boolean} [isInactive] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, isInactive?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * LedgerpaymentTypeOutApi - functional programming interface
 * @export
 */
export declare const LedgerpaymentTypeOutApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete payment type for outgoing payments by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Get payment type for outgoing payments by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperPaymentTypeOut>;
    /**
     *
     * @summary [BETA] Create new payment type for outgoing payments
     * @param {PaymentTypeOut} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: PaymentTypeOut, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperPaymentTypeOut>;
    /**
     *
     * @summary [BETA] Create multiple payment types for outgoing payments at once
     * @param {Array&lt;PaymentTypeOut&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: PaymentTypeOut[], options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponsePaymentTypeOut>;
    /**
     *
     * @summary [BETA] Update existing payment type for outgoing payments
     * @param {number} id Element ID
     * @param {PaymentTypeOut} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: PaymentTypeOut, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperPaymentTypeOut>;
    /**
     *
     * @summary [BETA] Update multiple payment types for outgoing payments at once
     * @param {Array&lt;PaymentTypeOut&gt;} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: PaymentTypeOut[], options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponsePaymentTypeOut>;
    /**
     * This is an API endpoint for getting payment types for outgoing payments. This is equivalent to the section 'Outgoing Payments' under Accounts Settings in Tripletex. These are the payment types listed in supplier invoices, vat returns, salary payments and Tax/ENI
     * @summary [BETA] Gets payment types for outgoing payments
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {boolean} [isInactive] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, isInactive?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponsePaymentTypeOut>;
};
/**
 * LedgerpaymentTypeOutApi - factory interface
 * @export
 */
export declare const LedgerpaymentTypeOutApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete payment type for outgoing payments by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get payment type for outgoing payments by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperPaymentTypeOut>;
    /**
     *
     * @summary [BETA] Create new payment type for outgoing payments
     * @param {PaymentTypeOut} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: PaymentTypeOut, options?: any): Promise<ResponseWrapperPaymentTypeOut>;
    /**
     *
     * @summary [BETA] Create multiple payment types for outgoing payments at once
     * @param {Array&lt;PaymentTypeOut&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: PaymentTypeOut[], options?: any): Promise<ListResponsePaymentTypeOut>;
    /**
     *
     * @summary [BETA] Update existing payment type for outgoing payments
     * @param {number} id Element ID
     * @param {PaymentTypeOut} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: PaymentTypeOut, options?: any): Promise<ResponseWrapperPaymentTypeOut>;
    /**
     *
     * @summary [BETA] Update multiple payment types for outgoing payments at once
     * @param {Array&lt;PaymentTypeOut&gt;} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: PaymentTypeOut[], options?: any): Promise<ListResponsePaymentTypeOut>;
    /**
     * This is an API endpoint for getting payment types for outgoing payments. This is equivalent to the section 'Outgoing Payments' under Accounts Settings in Tripletex. These are the payment types listed in supplier invoices, vat returns, salary payments and Tax/ENI
     * @summary [BETA] Gets payment types for outgoing payments
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {boolean} [isInactive] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, isInactive?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePaymentTypeOut>;
};
/**
 * LedgerpaymentTypeOutApi - object-oriented interface
 * @export
 * @class LedgerpaymentTypeOutApi
 * @extends {BaseAPI}
 */
export declare class LedgerpaymentTypeOutApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete payment type for outgoing payments by ID.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerpaymentTypeOutApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get payment type for outgoing payments by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerpaymentTypeOutApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperPaymentTypeOut>;
    /**
     *
     * @summary [BETA] Create new payment type for outgoing payments
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerpaymentTypeOutApi
     */
    post(body?: PaymentTypeOut, options?: any): Promise<ResponseWrapperPaymentTypeOut>;
    /**
     *
     * @summary [BETA] Create multiple payment types for outgoing payments at once
     * @param {} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerpaymentTypeOutApi
     */
    postList(body?: Array<PaymentTypeOut>, options?: any): Promise<ListResponsePaymentTypeOut>;
    /**
     *
     * @summary [BETA] Update existing payment type for outgoing payments
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerpaymentTypeOutApi
     */
    put(id: number, body?: PaymentTypeOut, options?: any): Promise<ResponseWrapperPaymentTypeOut>;
    /**
     *
     * @summary [BETA] Update multiple payment types for outgoing payments at once
     * @param {} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerpaymentTypeOutApi
     */
    putList(body?: Array<PaymentTypeOut>, options?: any): Promise<ListResponsePaymentTypeOut>;
    /**
     * This is an API endpoint for getting payment types for outgoing payments. This is equivalent to the section 'Outgoing Payments' under Accounts Settings in Tripletex. These are the payment types listed in supplier invoices, vat returns, salary payments and Tax/ENI
     * @summary [BETA] Gets payment types for outgoing payments
     * @param {} [id] List of IDs
     * @param {} [description] Containing
     * @param {} [isInactive] Equals
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerpaymentTypeOutApi
     */
    search(id?: string, description?: string, isInactive?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePaymentTypeOut>;
}
/**
 * LedgerpostingApi - fetch parameter creator
 * @export
 */
export declare const LedgerpostingApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Find postings by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find open posts corresponding with sent data.
     * @param {string} date Invoice date. Format is yyyy-MM-dd (to and excl.).
     * @param {number} [accountId] Element ID
     * @param {number} [supplierId] Element ID
     * @param {number} [customerId] Element ID
     * @param {number} [employeeId] Element ID
     * @param {number} [departmentId] Element ID
     * @param {number} [projectId] Element ID
     * @param {number} [productId] Element ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    openPost(date: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find postings corresponding with sent data.
     * @param {string} dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param {string} dateTo Format is yyyy-MM-dd (to and excl.).
     * @param {string} [openPostings] Deprecated
     * @param {number} [accountId] Element ID
     * @param {number} [supplierId] Element ID
     * @param {number} [customerId] Element ID
     * @param {number} [employeeId] Element ID
     * @param {number} [departmentId] Element ID
     * @param {number} [projectId] Element ID
     * @param {number} [productId] Element ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, openPostings?: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * LedgerpostingApi - functional programming interface
 * @export
 */
export declare const LedgerpostingApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Find postings by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperPosting>;
    /**
     *
     * @summary Find open posts corresponding with sent data.
     * @param {string} date Invoice date. Format is yyyy-MM-dd (to and excl.).
     * @param {number} [accountId] Element ID
     * @param {number} [supplierId] Element ID
     * @param {number} [customerId] Element ID
     * @param {number} [employeeId] Element ID
     * @param {number} [departmentId] Element ID
     * @param {number} [projectId] Element ID
     * @param {number} [productId] Element ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    openPost(date: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponsePosting>;
    /**
     *
     * @summary Find postings corresponding with sent data.
     * @param {string} dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param {string} dateTo Format is yyyy-MM-dd (to and excl.).
     * @param {string} [openPostings] Deprecated
     * @param {number} [accountId] Element ID
     * @param {number} [supplierId] Element ID
     * @param {number} [customerId] Element ID
     * @param {number} [employeeId] Element ID
     * @param {number} [departmentId] Element ID
     * @param {number} [projectId] Element ID
     * @param {number} [productId] Element ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, openPostings?: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponsePosting>;
};
/**
 * LedgerpostingApi - factory interface
 * @export
 */
export declare const LedgerpostingApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Find postings by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperPosting>;
    /**
     *
     * @summary Find open posts corresponding with sent data.
     * @param {string} date Invoice date. Format is yyyy-MM-dd (to and excl.).
     * @param {number} [accountId] Element ID
     * @param {number} [supplierId] Element ID
     * @param {number} [customerId] Element ID
     * @param {number} [employeeId] Element ID
     * @param {number} [departmentId] Element ID
     * @param {number} [projectId] Element ID
     * @param {number} [productId] Element ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    openPost(date: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePosting>;
    /**
     *
     * @summary Find postings corresponding with sent data.
     * @param {string} dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param {string} dateTo Format is yyyy-MM-dd (to and excl.).
     * @param {string} [openPostings] Deprecated
     * @param {number} [accountId] Element ID
     * @param {number} [supplierId] Element ID
     * @param {number} [customerId] Element ID
     * @param {number} [employeeId] Element ID
     * @param {number} [departmentId] Element ID
     * @param {number} [projectId] Element ID
     * @param {number} [productId] Element ID
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, openPostings?: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePosting>;
};
/**
 * LedgerpostingApi - object-oriented interface
 * @export
 * @class LedgerpostingApi
 * @extends {BaseAPI}
 */
export declare class LedgerpostingApi extends BaseAPI {
    /**
     *
     * @summary Find postings by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerpostingApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperPosting>;
    /**
     *
     * @summary Find open posts corresponding with sent data.
     * @param {} date Invoice date. Format is yyyy-MM-dd (to and excl.).
     * @param {} [accountId] Element ID
     * @param {} [supplierId] Element ID
     * @param {} [customerId] Element ID
     * @param {} [employeeId] Element ID
     * @param {} [departmentId] Element ID
     * @param {} [projectId] Element ID
     * @param {} [productId] Element ID
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerpostingApi
     */
    openPost(date: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePosting>;
    /**
     *
     * @summary Find postings corresponding with sent data.
     * @param {} dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param {} dateTo Format is yyyy-MM-dd (to and excl.).
     * @param {} [openPostings] Deprecated
     * @param {} [accountId] Element ID
     * @param {} [supplierId] Element ID
     * @param {} [customerId] Element ID
     * @param {} [employeeId] Element ID
     * @param {} [departmentId] Element ID
     * @param {} [projectId] Element ID
     * @param {} [productId] Element ID
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgerpostingApi
     */
    search(dateFrom: string, dateTo: string, openPostings?: string, accountId?: number, supplierId?: number, customerId?: number, employeeId?: number, departmentId?: number, projectId?: number, productId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePosting>;
}
/**
 * LedgervatTypeApi - fetch parameter creator
 * @export
 */
export declare const LedgervatTypeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get vat type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find vat types corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [number] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, number?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * LedgervatTypeApi - functional programming interface
 * @export
 */
export declare const LedgervatTypeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get vat type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperVatType>;
    /**
     *
     * @summary Find vat types corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [number] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, number?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseVatType>;
};
/**
 * LedgervatTypeApi - factory interface
 * @export
 */
export declare const LedgervatTypeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get vat type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperVatType>;
    /**
     *
     * @summary Find vat types corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [number] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, number?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseVatType>;
};
/**
 * LedgervatTypeApi - object-oriented interface
 * @export
 * @class LedgervatTypeApi
 * @extends {BaseAPI}
 */
export declare class LedgervatTypeApi extends BaseAPI {
    /**
     *
     * @summary Get vat type by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervatTypeApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperVatType>;
    /**
     *
     * @summary Find vat types corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [number] List of IDs
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervatTypeApi
     */
    search(id?: string, number?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseVatType>;
}
/**
 * LedgervoucherApi - fetch parameter creator
 * @export
 */
export declare const LedgervoucherApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get attachment by voucher ID.
     * @param {number} voucherId Voucher ID from which PDF is downloaded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadPdf(voucherId: number, options?: any): FetchArgs;
    /**
     *
     * @summary Get voucher by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Import GBAT10. Send as multipart form.
     * @param {boolean} generateVatPostings If the import should generate VAT postings
     * @param {any} file The file
     * @param {string} [encoding] The file encoding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importGbat10(generateVatPostings: boolean, file: any, encoding?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find non-posted vouchers.
     * @param {boolean} includeNonApproved Include non-approved vouchers in the result.
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {string} [changedSince] Only return elements that have changed since this date and time
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    nonPosted(includeNonApproved: boolean, dateFrom?: string, dateTo?: string, changedSince?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Add new voucher. IMPORTANT: Also creates postings. Only the gross amounts will be used
     * @param {boolean} [sendToLedger] Should the voucher be sent to ledger? Requires the \&quot;Advanced Voucher\&quot; permission.
     * @param {Voucher} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(sendToLedger?: boolean, body?: Voucher, options?: any): FetchArgs;
    /**
     *
     * @summary Update voucher. Postings with guiRow==0 will be deleted and regenerated.
     * @param {number} id Element ID
     * @param {boolean} [sendToLedger] Should the voucher be sent to ledger? Requires the \&quot;Advanced Voucher\&quot; permission.
     * @param {Voucher} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, sendToLedger?: boolean, body?: Voucher, options?: any): FetchArgs;
    /**
     *
     * @summary Find vouchers corresponding with sent data.
     * @param {string} dateFrom From and including
     * @param {string} dateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {string} [number] List of IDs
     * @param {number} [numberFrom] From and including
     * @param {number} [numberTo] To and excluding
     * @param {string} [typeId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, id?: string, number?: string, numberFrom?: number, numberTo?: number, typeId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Send voucher to inbox.
     * @param {number} id ID of voucher that should be sent to inbox.
     * @param {number} [version] Version of voucher that should be sent to inbox.
     * @param {string} [comment] Description of why the voucher was rejected. This parameter is only used if the approval feature is enabled.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendToInbox(id: number, version?: number, comment?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Send voucher to ledger.
     * @param {number} id ID of voucher that should be sent to ledger.
     * @param {number} [version] Version of voucher that should be sent to ledger.
     * @param {number} [number] Voucher number to use. If omitted or 0 the system will assign the number.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendToLedger(id: number, version?: number, number?: number, options?: any): FetchArgs;
    /**
     *
     * @summary Upload attachment to voucher. Send as multipart form.
     * @param {number} voucherId Voucher ID to upload PDF to.
     * @param {string} fileName File name to store the pdf under. Will not be the same as the filename on the file returned.
     * @param {any} file The file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadPdf(voucherId: number, fileName: string, file: any, options?: any): FetchArgs;
};
/**
 * LedgervoucherApi - functional programming interface
 * @export
 */
export declare const LedgervoucherApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get attachment by voucher ID.
     * @param {number} voucherId Voucher ID from which PDF is downloaded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadPdf(voucherId: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
    /**
     *
     * @summary Get voucher by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary Import GBAT10. Send as multipart form.
     * @param {boolean} generateVatPostings If the import should generate VAT postings
     * @param {any} file The file
     * @param {string} [encoding] The file encoding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importGbat10(generateVatPostings: boolean, file: any, encoding?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Find non-posted vouchers.
     * @param {boolean} includeNonApproved Include non-approved vouchers in the result.
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {string} [changedSince] Only return elements that have changed since this date and time
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    nonPosted(includeNonApproved: boolean, dateFrom?: string, dateTo?: string, changedSince?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseVoucher>;
    /**
     *
     * @summary Add new voucher. IMPORTANT: Also creates postings. Only the gross amounts will be used
     * @param {boolean} [sendToLedger] Should the voucher be sent to ledger? Requires the \&quot;Advanced Voucher\&quot; permission.
     * @param {Voucher} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(sendToLedger?: boolean, body?: Voucher, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary Update voucher. Postings with guiRow==0 will be deleted and regenerated.
     * @param {number} id Element ID
     * @param {boolean} [sendToLedger] Should the voucher be sent to ledger? Requires the \&quot;Advanced Voucher\&quot; permission.
     * @param {Voucher} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, sendToLedger?: boolean, body?: Voucher, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary Find vouchers corresponding with sent data.
     * @param {string} dateFrom From and including
     * @param {string} dateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {string} [number] List of IDs
     * @param {number} [numberFrom] From and including
     * @param {number} [numberTo] To and excluding
     * @param {string} [typeId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, id?: string, number?: string, numberFrom?: number, numberTo?: number, typeId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<VoucherSearchResponse>;
    /**
     *
     * @summary [BETA] Send voucher to inbox.
     * @param {number} id ID of voucher that should be sent to inbox.
     * @param {number} [version] Version of voucher that should be sent to inbox.
     * @param {string} [comment] Description of why the voucher was rejected. This parameter is only used if the approval feature is enabled.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendToInbox(id: number, version?: number, comment?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary [BETA] Send voucher to ledger.
     * @param {number} id ID of voucher that should be sent to ledger.
     * @param {number} [version] Version of voucher that should be sent to ledger.
     * @param {number} [number] Voucher number to use. If omitted or 0 the system will assign the number.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendToLedger(id: number, version?: number, number?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary Upload attachment to voucher. Send as multipart form.
     * @param {number} voucherId Voucher ID to upload PDF to.
     * @param {string} fileName File name to store the pdf under. Will not be the same as the filename on the file returned.
     * @param {any} file The file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadPdf(voucherId: number, fileName: string, file: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
};
/**
 * LedgervoucherApi - factory interface
 * @export
 */
export declare const LedgervoucherApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get attachment by voucher ID.
     * @param {number} voucherId Voucher ID from which PDF is downloaded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadPdf(voucherId: number, options?: any): Promise<string>;
    /**
     *
     * @summary Get voucher by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary Import GBAT10. Send as multipart form.
     * @param {boolean} generateVatPostings If the import should generate VAT postings
     * @param {any} file The file
     * @param {string} [encoding] The file encoding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importGbat10(generateVatPostings: boolean, file: any, encoding?: string, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Find non-posted vouchers.
     * @param {boolean} includeNonApproved Include non-approved vouchers in the result.
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {string} [changedSince] Only return elements that have changed since this date and time
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    nonPosted(includeNonApproved: boolean, dateFrom?: string, dateTo?: string, changedSince?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseVoucher>;
    /**
     *
     * @summary Add new voucher. IMPORTANT: Also creates postings. Only the gross amounts will be used
     * @param {boolean} [sendToLedger] Should the voucher be sent to ledger? Requires the \&quot;Advanced Voucher\&quot; permission.
     * @param {Voucher} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(sendToLedger?: boolean, body?: Voucher, options?: any): Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary Update voucher. Postings with guiRow==0 will be deleted and regenerated.
     * @param {number} id Element ID
     * @param {boolean} [sendToLedger] Should the voucher be sent to ledger? Requires the \&quot;Advanced Voucher\&quot; permission.
     * @param {Voucher} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, sendToLedger?: boolean, body?: Voucher, options?: any): Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary Find vouchers corresponding with sent data.
     * @param {string} dateFrom From and including
     * @param {string} dateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {string} [number] List of IDs
     * @param {number} [numberFrom] From and including
     * @param {number} [numberTo] To and excluding
     * @param {string} [typeId] List of IDs
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, id?: string, number?: string, numberFrom?: number, numberTo?: number, typeId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<VoucherSearchResponse>;
    /**
     *
     * @summary [BETA] Send voucher to inbox.
     * @param {number} id ID of voucher that should be sent to inbox.
     * @param {number} [version] Version of voucher that should be sent to inbox.
     * @param {string} [comment] Description of why the voucher was rejected. This parameter is only used if the approval feature is enabled.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendToInbox(id: number, version?: number, comment?: string, options?: any): Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary [BETA] Send voucher to ledger.
     * @param {number} id ID of voucher that should be sent to ledger.
     * @param {number} [version] Version of voucher that should be sent to ledger.
     * @param {number} [number] Voucher number to use. If omitted or 0 the system will assign the number.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendToLedger(id: number, version?: number, number?: number, options?: any): Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary Upload attachment to voucher. Send as multipart form.
     * @param {number} voucherId Voucher ID to upload PDF to.
     * @param {string} fileName File name to store the pdf under. Will not be the same as the filename on the file returned.
     * @param {any} file The file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadPdf(voucherId: number, fileName: string, file: any, options?: any): Promise<Response>;
};
/**
 * LedgervoucherApi - object-oriented interface
 * @export
 * @class LedgervoucherApi
 * @extends {BaseAPI}
 */
export declare class LedgervoucherApi extends BaseAPI {
    /**
     *
     * @summary Get attachment by voucher ID.
     * @param {} voucherId Voucher ID from which PDF is downloaded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervoucherApi
     */
    downloadPdf(voucherId: number, options?: any): Promise<string>;
    /**
     *
     * @summary Get voucher by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervoucherApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary Import GBAT10. Send as multipart form.
     * @param {} generateVatPostings If the import should generate VAT postings
     * @param {} file The file
     * @param {} [encoding] The file encoding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervoucherApi
     */
    importGbat10(generateVatPostings: boolean, file: any, encoding?: string, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Find non-posted vouchers.
     * @param {} includeNonApproved Include non-approved vouchers in the result.
     * @param {} [dateFrom] From and including
     * @param {} [dateTo] To and excluding
     * @param {} [changedSince] Only return elements that have changed since this date and time
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervoucherApi
     */
    nonPosted(includeNonApproved: boolean, dateFrom?: string, dateTo?: string, changedSince?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseVoucher>;
    /**
     *
     * @summary Add new voucher. IMPORTANT: Also creates postings. Only the gross amounts will be used
     * @param {} [sendToLedger] Should the voucher be sent to ledger? Requires the \&quot;Advanced Voucher\&quot; permission.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervoucherApi
     */
    post(sendToLedger?: boolean, body?: Voucher, options?: any): Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary Update voucher. Postings with guiRow==0 will be deleted and regenerated.
     * @param {} id Element ID
     * @param {} [sendToLedger] Should the voucher be sent to ledger? Requires the \&quot;Advanced Voucher\&quot; permission.
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervoucherApi
     */
    put(id: number, sendToLedger?: boolean, body?: Voucher, options?: any): Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary Find vouchers corresponding with sent data.
     * @param {} dateFrom From and including
     * @param {} dateTo To and excluding
     * @param {} [id] List of IDs
     * @param {} [number] List of IDs
     * @param {} [numberFrom] From and including
     * @param {} [numberTo] To and excluding
     * @param {} [typeId] List of IDs
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervoucherApi
     */
    search(dateFrom: string, dateTo: string, id?: string, number?: string, numberFrom?: number, numberTo?: number, typeId?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<VoucherSearchResponse>;
    /**
     *
     * @summary [BETA] Send voucher to inbox.
     * @param {} id ID of voucher that should be sent to inbox.
     * @param {} [version] Version of voucher that should be sent to inbox.
     * @param {} [comment] Description of why the voucher was rejected. This parameter is only used if the approval feature is enabled.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervoucherApi
     */
    sendToInbox(id: number, version?: number, comment?: string, options?: any): Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary [BETA] Send voucher to ledger.
     * @param {} id ID of voucher that should be sent to ledger.
     * @param {} [version] Version of voucher that should be sent to ledger.
     * @param {} [number] Voucher number to use. If omitted or 0 the system will assign the number.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervoucherApi
     */
    sendToLedger(id: number, version?: number, number?: number, options?: any): Promise<ResponseWrapperVoucher>;
    /**
     *
     * @summary Upload attachment to voucher. Send as multipart form.
     * @param {} voucherId Voucher ID to upload PDF to.
     * @param {} fileName File name to store the pdf under. Will not be the same as the filename on the file returned.
     * @param {} file The file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervoucherApi
     */
    uploadPdf(voucherId: number, fileName: string, file: any, options?: any): Promise<Response>;
}
/**
 * LedgervoucherTypeApi - fetch parameter creator
 * @export
 */
export declare const LedgervoucherTypeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get voucher type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find voucher types corresponding with sent data.
     * @param {string} [name] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(name?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * LedgervoucherTypeApi - functional programming interface
 * @export
 */
export declare const LedgervoucherTypeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get voucher type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperVoucherType>;
    /**
     *
     * @summary Find voucher types corresponding with sent data.
     * @param {string} [name] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(name?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseVoucherType>;
};
/**
 * LedgervoucherTypeApi - factory interface
 * @export
 */
export declare const LedgervoucherTypeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get voucher type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperVoucherType>;
    /**
     *
     * @summary Find voucher types corresponding with sent data.
     * @param {string} [name] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(name?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseVoucherType>;
};
/**
 * LedgervoucherTypeApi - object-oriented interface
 * @export
 * @class LedgervoucherTypeApi
 * @extends {BaseAPI}
 */
export declare class LedgervoucherTypeApi extends BaseAPI {
    /**
     *
     * @summary Get voucher type by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervoucherTypeApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperVoucherType>;
    /**
     *
     * @summary Find voucher types corresponding with sent data.
     * @param {} [name] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LedgervoucherTypeApi
     */
    search(name?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseVoucherType>;
}
/**
 * OrderApi - fetch parameter creator
 * @export
 */
export declare const OrderApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get order by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Create new invoice from order.
     * @param {number} id ID of order to invoice.
     * @param {string} invoiceDate To and excluding
     * @param {boolean} [sendToCustomer] Send invoice to customer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    invoice(id: number, invoiceDate: string, sendToCustomer?: boolean, options?: any): FetchArgs;
    /**
     *
     * @summary Create order.
     * @param {Order} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Order, options?: any): FetchArgs;
    /**
     *
     * @summary Update order.
     * @param {number} id Element ID
     * @param {Order} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Order, options?: any): FetchArgs;
    /**
     *
     * @summary Find orders corresponding with sent data.
     * @param {string} orderDateFrom From and including
     * @param {string} orderDateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {string} [number] Equals
     * @param {string} [customerId] List of IDs
     * @param {boolean} [isClosed] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(orderDateFrom: string, orderDateTo: string, id?: string, number?: string, customerId?: string, isClosed?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * OrderApi - functional programming interface
 * @export
 */
export declare const OrderApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get order by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperOrder>;
    /**
     *
     * @summary Create new invoice from order.
     * @param {number} id ID of order to invoice.
     * @param {string} invoiceDate To and excluding
     * @param {boolean} [sendToCustomer] Send invoice to customer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    invoice(id: number, invoiceDate: string, sendToCustomer?: boolean, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperInvoice>;
    /**
     *
     * @summary Create order.
     * @param {Order} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Order, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperOrder>;
    /**
     *
     * @summary Update order.
     * @param {number} id Element ID
     * @param {Order} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Order, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperOrder>;
    /**
     *
     * @summary Find orders corresponding with sent data.
     * @param {string} orderDateFrom From and including
     * @param {string} orderDateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {string} [number] Equals
     * @param {string} [customerId] List of IDs
     * @param {boolean} [isClosed] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(orderDateFrom: string, orderDateTo: string, id?: string, number?: string, customerId?: string, isClosed?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseOrder>;
};
/**
 * OrderApi - factory interface
 * @export
 */
export declare const OrderApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get order by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperOrder>;
    /**
     *
     * @summary Create new invoice from order.
     * @param {number} id ID of order to invoice.
     * @param {string} invoiceDate To and excluding
     * @param {boolean} [sendToCustomer] Send invoice to customer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    invoice(id: number, invoiceDate: string, sendToCustomer?: boolean, options?: any): Promise<ResponseWrapperInvoice>;
    /**
     *
     * @summary Create order.
     * @param {Order} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Order, options?: any): Promise<ResponseWrapperOrder>;
    /**
     *
     * @summary Update order.
     * @param {number} id Element ID
     * @param {Order} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Order, options?: any): Promise<ResponseWrapperOrder>;
    /**
     *
     * @summary Find orders corresponding with sent data.
     * @param {string} orderDateFrom From and including
     * @param {string} orderDateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {string} [number] Equals
     * @param {string} [customerId] List of IDs
     * @param {boolean} [isClosed] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(orderDateFrom: string, orderDateTo: string, id?: string, number?: string, customerId?: string, isClosed?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseOrder>;
};
/**
 * OrderApi - object-oriented interface
 * @export
 * @class OrderApi
 * @extends {BaseAPI}
 */
export declare class OrderApi extends BaseAPI {
    /**
     *
     * @summary Get order by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperOrder>;
    /**
     *
     * @summary Create new invoice from order.
     * @param {} id ID of order to invoice.
     * @param {} invoiceDate To and excluding
     * @param {} [sendToCustomer] Send invoice to customer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderApi
     */
    invoice(id: number, invoiceDate: string, sendToCustomer?: boolean, options?: any): Promise<ResponseWrapperInvoice>;
    /**
     *
     * @summary Create order.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderApi
     */
    post(body?: Order, options?: any): Promise<ResponseWrapperOrder>;
    /**
     *
     * @summary Update order.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderApi
     */
    put(id: number, body?: Order, options?: any): Promise<ResponseWrapperOrder>;
    /**
     *
     * @summary Find orders corresponding with sent data.
     * @param {} orderDateFrom From and including
     * @param {} orderDateTo To and excluding
     * @param {} [id] List of IDs
     * @param {} [number] Equals
     * @param {} [customerId] List of IDs
     * @param {} [isClosed] Equals
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderApi
     */
    search(orderDateFrom: string, orderDateTo: string, id?: string, number?: string, customerId?: string, isClosed?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseOrder>;
}
/**
 * OrderorderlineApi - fetch parameter creator
 * @export
 */
export declare const OrderorderlineApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete order line by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary Get order line by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Create order line. When creating several order lines, use /list for better performance.
     * @param {OrderLine} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: OrderLine, options?: any): FetchArgs;
    /**
     *
     * @summary Create multiple order lines.
     * @param {Array&lt;OrderLine&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: OrderLine[], options?: any): FetchArgs;
};
/**
 * OrderorderlineApi - functional programming interface
 * @export
 */
export declare const OrderorderlineApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete order line by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary Get order line by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperOrderLine>;
    /**
     *
     * @summary Create order line. When creating several order lines, use /list for better performance.
     * @param {OrderLine} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: OrderLine, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperOrderLine>;
    /**
     *
     * @summary Create multiple order lines.
     * @param {Array&lt;OrderLine&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: OrderLine[], options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseOrderLine>;
};
/**
 * OrderorderlineApi - factory interface
 * @export
 */
export declare const OrderorderlineApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete order line by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary Get order line by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperOrderLine>;
    /**
     *
     * @summary Create order line. When creating several order lines, use /list for better performance.
     * @param {OrderLine} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: OrderLine, options?: any): Promise<ResponseWrapperOrderLine>;
    /**
     *
     * @summary Create multiple order lines.
     * @param {Array&lt;OrderLine&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: OrderLine[], options?: any): Promise<ListResponseOrderLine>;
};
/**
 * OrderorderlineApi - object-oriented interface
 * @export
 * @class OrderorderlineApi
 * @extends {BaseAPI}
 */
export declare class OrderorderlineApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete order line by ID.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderorderlineApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary Get order line by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderorderlineApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperOrderLine>;
    /**
     *
     * @summary Create order line. When creating several order lines, use /list for better performance.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderorderlineApi
     */
    post(body?: OrderLine, options?: any): Promise<ResponseWrapperOrderLine>;
    /**
     *
     * @summary Create multiple order lines.
     * @param {} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderorderlineApi
     */
    postList(body?: Array<OrderLine>, options?: any): Promise<ListResponseOrderLine>;
}
/**
 * ProductApi - fetch parameter creator
 * @export
 */
export declare const ProductApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get product by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Create new product.
     * @param {Product} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Product, options?: any): FetchArgs;
    /**
     *
     * @summary Update product.
     * @param {number} id Element ID
     * @param {Product} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Product, options?: any): FetchArgs;
    /**
     *
     * @summary Find products corresponding with sent data.
     * @param {string} [number] DEPRECATED. List of product numbers (Integer only)
     * @param {Array&lt;string&gt;} [productNumber] List of valid product numbers
     * @param {string} [name] Containing
     * @param {boolean} [isInactive] Equals
     * @param {boolean} [isStockItem] Equals
     * @param {string} [currencyId] Equals
     * @param {string} [vatTypeId] Equals
     * @param {string} [productUnitId] Equals
     * @param {string} [departmentId] Equals
     * @param {string} [accountId] Equals
     * @param {number} [costExcludingVatCurrencyFrom] From and including
     * @param {number} [costExcludingVatCurrencyTo] To and excluding
     * @param {number} [priceExcludingVatCurrencyFrom] From and including
     * @param {number} [priceExcludingVatCurrencyTo] To and excluding
     * @param {number} [priceIncludingVatCurrencyFrom] From and including
     * @param {number} [priceIncludingVatCurrencyTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(number?: string, productNumber?: string[], name?: string, isInactive?: boolean, isStockItem?: boolean, currencyId?: string, vatTypeId?: string, productUnitId?: string, departmentId?: string, accountId?: string, costExcludingVatCurrencyFrom?: number, costExcludingVatCurrencyTo?: number, priceExcludingVatCurrencyFrom?: number, priceExcludingVatCurrencyTo?: number, priceIncludingVatCurrencyFrom?: number, priceIncludingVatCurrencyTo?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * ProductApi - functional programming interface
 * @export
 */
export declare const ProductApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get product by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperProduct>;
    /**
     *
     * @summary Create new product.
     * @param {Product} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Product, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperProduct>;
    /**
     *
     * @summary Update product.
     * @param {number} id Element ID
     * @param {Product} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Product, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperProduct>;
    /**
     *
     * @summary Find products corresponding with sent data.
     * @param {string} [number] DEPRECATED. List of product numbers (Integer only)
     * @param {Array&lt;string&gt;} [productNumber] List of valid product numbers
     * @param {string} [name] Containing
     * @param {boolean} [isInactive] Equals
     * @param {boolean} [isStockItem] Equals
     * @param {string} [currencyId] Equals
     * @param {string} [vatTypeId] Equals
     * @param {string} [productUnitId] Equals
     * @param {string} [departmentId] Equals
     * @param {string} [accountId] Equals
     * @param {number} [costExcludingVatCurrencyFrom] From and including
     * @param {number} [costExcludingVatCurrencyTo] To and excluding
     * @param {number} [priceExcludingVatCurrencyFrom] From and including
     * @param {number} [priceExcludingVatCurrencyTo] To and excluding
     * @param {number} [priceIncludingVatCurrencyFrom] From and including
     * @param {number} [priceIncludingVatCurrencyTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(number?: string, productNumber?: string[], name?: string, isInactive?: boolean, isStockItem?: boolean, currencyId?: string, vatTypeId?: string, productUnitId?: string, departmentId?: string, accountId?: string, costExcludingVatCurrencyFrom?: number, costExcludingVatCurrencyTo?: number, priceExcludingVatCurrencyFrom?: number, priceExcludingVatCurrencyTo?: number, priceIncludingVatCurrencyFrom?: number, priceIncludingVatCurrencyTo?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseProduct>;
};
/**
 * ProductApi - factory interface
 * @export
 */
export declare const ProductApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get product by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperProduct>;
    /**
     *
     * @summary Create new product.
     * @param {Product} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Product, options?: any): Promise<ResponseWrapperProduct>;
    /**
     *
     * @summary Update product.
     * @param {number} id Element ID
     * @param {Product} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Product, options?: any): Promise<ResponseWrapperProduct>;
    /**
     *
     * @summary Find products corresponding with sent data.
     * @param {string} [number] DEPRECATED. List of product numbers (Integer only)
     * @param {Array&lt;string&gt;} [productNumber] List of valid product numbers
     * @param {string} [name] Containing
     * @param {boolean} [isInactive] Equals
     * @param {boolean} [isStockItem] Equals
     * @param {string} [currencyId] Equals
     * @param {string} [vatTypeId] Equals
     * @param {string} [productUnitId] Equals
     * @param {string} [departmentId] Equals
     * @param {string} [accountId] Equals
     * @param {number} [costExcludingVatCurrencyFrom] From and including
     * @param {number} [costExcludingVatCurrencyTo] To and excluding
     * @param {number} [priceExcludingVatCurrencyFrom] From and including
     * @param {number} [priceExcludingVatCurrencyTo] To and excluding
     * @param {number} [priceIncludingVatCurrencyFrom] From and including
     * @param {number} [priceIncludingVatCurrencyTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(number?: string, productNumber?: string[], name?: string, isInactive?: boolean, isStockItem?: boolean, currencyId?: string, vatTypeId?: string, productUnitId?: string, departmentId?: string, accountId?: string, costExcludingVatCurrencyFrom?: number, costExcludingVatCurrencyTo?: number, priceExcludingVatCurrencyFrom?: number, priceExcludingVatCurrencyTo?: number, priceIncludingVatCurrencyFrom?: number, priceIncludingVatCurrencyTo?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProduct>;
};
/**
 * ProductApi - object-oriented interface
 * @export
 * @class ProductApi
 * @extends {BaseAPI}
 */
export declare class ProductApi extends BaseAPI {
    /**
     *
     * @summary Get product by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperProduct>;
    /**
     *
     * @summary Create new product.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    post(body?: Product, options?: any): Promise<ResponseWrapperProduct>;
    /**
     *
     * @summary Update product.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    put(id: number, body?: Product, options?: any): Promise<ResponseWrapperProduct>;
    /**
     *
     * @summary Find products corresponding with sent data.
     * @param {} [number] DEPRECATED. List of product numbers (Integer only)
     * @param {} [productNumber] List of valid product numbers
     * @param {} [name] Containing
     * @param {} [isInactive] Equals
     * @param {} [isStockItem] Equals
     * @param {} [currencyId] Equals
     * @param {} [vatTypeId] Equals
     * @param {} [productUnitId] Equals
     * @param {} [departmentId] Equals
     * @param {} [accountId] Equals
     * @param {} [costExcludingVatCurrencyFrom] From and including
     * @param {} [costExcludingVatCurrencyTo] To and excluding
     * @param {} [priceExcludingVatCurrencyFrom] From and including
     * @param {} [priceExcludingVatCurrencyTo] To and excluding
     * @param {} [priceIncludingVatCurrencyFrom] From and including
     * @param {} [priceIncludingVatCurrencyTo] To and excluding
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    search(number?: string, productNumber?: Array<string>, name?: string, isInactive?: boolean, isStockItem?: boolean, currencyId?: string, vatTypeId?: string, productUnitId?: string, departmentId?: string, accountId?: string, costExcludingVatCurrencyFrom?: number, costExcludingVatCurrencyTo?: number, priceExcludingVatCurrencyFrom?: number, priceExcludingVatCurrencyTo?: number, priceIncludingVatCurrencyFrom?: number, priceIncludingVatCurrencyTo?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProduct>;
}
/**
 * ProductunitApi - fetch parameter creator
 * @export
 */
export declare const ProductunitApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get product unit by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find product units corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Names
     * @param {string} [nameShort] Short names
     * @param {string} [commonCode] Common codes
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, nameShort?: string, commonCode?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * ProductunitApi - functional programming interface
 * @export
 */
export declare const ProductunitApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get product unit by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperProductUnit>;
    /**
     *
     * @summary Find product units corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Names
     * @param {string} [nameShort] Short names
     * @param {string} [commonCode] Common codes
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, nameShort?: string, commonCode?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseProductUnit>;
};
/**
 * ProductunitApi - factory interface
 * @export
 */
export declare const ProductunitApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get product unit by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperProductUnit>;
    /**
     *
     * @summary Find product units corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Names
     * @param {string} [nameShort] Short names
     * @param {string} [commonCode] Common codes
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, nameShort?: string, commonCode?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProductUnit>;
};
/**
 * ProductunitApi - object-oriented interface
 * @export
 * @class ProductunitApi
 * @extends {BaseAPI}
 */
export declare class ProductunitApi extends BaseAPI {
    /**
     *
     * @summary Get product unit by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductunitApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperProductUnit>;
    /**
     *
     * @summary Find product units corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [name] Names
     * @param {} [nameShort] Short names
     * @param {} [commonCode] Common codes
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductunitApi
     */
    search(id?: string, name?: string, nameShort?: string, commonCode?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProductUnit>;
}
/**
 * ProjectApi - fetch parameter creator
 * @export
 */
export declare const ProjectApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete projects.
     * @param {string} ids ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteByIds(ids: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find project by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find projects applicable for time sheet registration on a specific day.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {string} [date] yyyy-MM-dd. Defaults to today.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getForTimeSheet(employeeId?: number, date?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Add new project.
     * @param {Project} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Project, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Register new projects. Multiple projects for different users can be sent in the same request.
     * @param {Array&lt;Project&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Project[], options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update project.
     * @param {number} id Element ID
     * @param {Project} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Project, options?: any): FetchArgs;
    /**
     *
     * @summary Find projects corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [number] Equals
     * @param {boolean} [isOffer] Equals
     * @param {string} [projectManagerId] List of IDs
     * @param {string} [employeeInProjectId] List of IDs
     * @param {string} [departmentId] List of IDs
     * @param {string} [startDateFrom] From and including
     * @param {string} [startDateTo] To and excluding
     * @param {string} [endDateFrom] From and including
     * @param {string} [endDateTo] To and excluding
     * @param {boolean} [isClosed] Equals
     * @param {string} [customerId] Equals
     * @param {string} [externalAccountsNumber] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, number?: string, isOffer?: boolean, projectManagerId?: string, employeeInProjectId?: string, departmentId?: string, startDateFrom?: string, startDateTo?: string, endDateFrom?: string, endDateTo?: string, isClosed?: boolean, customerId?: string, externalAccountsNumber?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * ProjectApi - functional programming interface
 * @export
 */
export declare const ProjectApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete projects.
     * @param {string} ids ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteByIds(ids: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary Find project by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperProject>;
    /**
     *
     * @summary Find projects applicable for time sheet registration on a specific day.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {string} [date] yyyy-MM-dd. Defaults to today.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getForTimeSheet(employeeId?: number, date?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseProject>;
    /**
     *
     * @summary [BETA] Add new project.
     * @param {Project} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Project, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperProject>;
    /**
     *
     * @summary [BETA] Register new projects. Multiple projects for different users can be sent in the same request.
     * @param {Array&lt;Project&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Project[], options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseProject>;
    /**
     *
     * @summary [BETA] Update project.
     * @param {number} id Element ID
     * @param {Project} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Project, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperProject>;
    /**
     *
     * @summary Find projects corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [number] Equals
     * @param {boolean} [isOffer] Equals
     * @param {string} [projectManagerId] List of IDs
     * @param {string} [employeeInProjectId] List of IDs
     * @param {string} [departmentId] List of IDs
     * @param {string} [startDateFrom] From and including
     * @param {string} [startDateTo] To and excluding
     * @param {string} [endDateFrom] From and including
     * @param {string} [endDateTo] To and excluding
     * @param {boolean} [isClosed] Equals
     * @param {string} [customerId] Equals
     * @param {string} [externalAccountsNumber] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, number?: string, isOffer?: boolean, projectManagerId?: string, employeeInProjectId?: string, departmentId?: string, startDateFrom?: string, startDateTo?: string, endDateFrom?: string, endDateTo?: string, isClosed?: boolean, customerId?: string, externalAccountsNumber?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseProject>;
};
/**
 * ProjectApi - factory interface
 * @export
 */
export declare const ProjectApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete projects.
     * @param {string} ids ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteByIds(ids: string, options?: any): Promise<Response>;
    /**
     *
     * @summary Find project by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperProject>;
    /**
     *
     * @summary Find projects applicable for time sheet registration on a specific day.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {string} [date] yyyy-MM-dd. Defaults to today.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getForTimeSheet(employeeId?: number, date?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProject>;
    /**
     *
     * @summary [BETA] Add new project.
     * @param {Project} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Project, options?: any): Promise<ResponseWrapperProject>;
    /**
     *
     * @summary [BETA] Register new projects. Multiple projects for different users can be sent in the same request.
     * @param {Array&lt;Project&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Project[], options?: any): Promise<ListResponseProject>;
    /**
     *
     * @summary [BETA] Update project.
     * @param {number} id Element ID
     * @param {Project} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Project, options?: any): Promise<ResponseWrapperProject>;
    /**
     *
     * @summary Find projects corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [number] Equals
     * @param {boolean} [isOffer] Equals
     * @param {string} [projectManagerId] List of IDs
     * @param {string} [employeeInProjectId] List of IDs
     * @param {string} [departmentId] List of IDs
     * @param {string} [startDateFrom] From and including
     * @param {string} [startDateTo] To and excluding
     * @param {string} [endDateFrom] From and including
     * @param {string} [endDateTo] To and excluding
     * @param {boolean} [isClosed] Equals
     * @param {string} [customerId] Equals
     * @param {string} [externalAccountsNumber] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, number?: string, isOffer?: boolean, projectManagerId?: string, employeeInProjectId?: string, departmentId?: string, startDateFrom?: string, startDateTo?: string, endDateFrom?: string, endDateTo?: string, isClosed?: boolean, customerId?: string, externalAccountsNumber?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProject>;
};
/**
 * ProjectApi - object-oriented interface
 * @export
 * @class ProjectApi
 * @extends {BaseAPI}
 */
export declare class ProjectApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete projects.
     * @param {} ids ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    deleteByIds(ids: string, options?: any): Promise<Response>;
    /**
     *
     * @summary Find project by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperProject>;
    /**
     *
     * @summary Find projects applicable for time sheet registration on a specific day.
     * @param {} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {} [date] yyyy-MM-dd. Defaults to today.
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    getForTimeSheet(employeeId?: number, date?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProject>;
    /**
     *
     * @summary [BETA] Add new project.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    post(body?: Project, options?: any): Promise<ResponseWrapperProject>;
    /**
     *
     * @summary [BETA] Register new projects. Multiple projects for different users can be sent in the same request.
     * @param {} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    postList(body?: Array<Project>, options?: any): Promise<ListResponseProject>;
    /**
     *
     * @summary [BETA] Update project.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    put(id: number, body?: Project, options?: any): Promise<ResponseWrapperProject>;
    /**
     *
     * @summary Find projects corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [name] Containing
     * @param {} [number] Equals
     * @param {} [isOffer] Equals
     * @param {} [projectManagerId] List of IDs
     * @param {} [employeeInProjectId] List of IDs
     * @param {} [departmentId] List of IDs
     * @param {} [startDateFrom] From and including
     * @param {} [startDateTo] To and excluding
     * @param {} [endDateFrom] From and including
     * @param {} [endDateTo] To and excluding
     * @param {} [isClosed] Equals
     * @param {} [customerId] Equals
     * @param {} [externalAccountsNumber] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    search(id?: string, name?: string, number?: string, isOffer?: boolean, projectManagerId?: string, employeeInProjectId?: string, departmentId?: string, startDateFrom?: string, startDateTo?: string, endDateFrom?: string, endDateTo?: string, isClosed?: boolean, customerId?: string, externalAccountsNumber?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProject>;
}
/**
 * ProjectcategoryApi - fetch parameter creator
 * @export
 */
export declare const ProjectcategoryApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Find project category by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Add new project category.
     * @param {ProjectCategory} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: ProjectCategory, options?: any): FetchArgs;
    /**
     *
     * @summary Update project category.
     * @param {number} id Element ID
     * @param {ProjectCategory} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: ProjectCategory, options?: any): FetchArgs;
    /**
     *
     * @summary Find project categories corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [number] Equals
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, number?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * ProjectcategoryApi - functional programming interface
 * @export
 */
export declare const ProjectcategoryApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Find project category by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperProjectCategory>;
    /**
     *
     * @summary Add new project category.
     * @param {ProjectCategory} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: ProjectCategory, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperProjectCategory>;
    /**
     *
     * @summary Update project category.
     * @param {number} id Element ID
     * @param {ProjectCategory} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: ProjectCategory, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperProjectCategory>;
    /**
     *
     * @summary Find project categories corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [number] Equals
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, number?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseProjectCategory>;
};
/**
 * ProjectcategoryApi - factory interface
 * @export
 */
export declare const ProjectcategoryApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Find project category by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperProjectCategory>;
    /**
     *
     * @summary Add new project category.
     * @param {ProjectCategory} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: ProjectCategory, options?: any): Promise<ResponseWrapperProjectCategory>;
    /**
     *
     * @summary Update project category.
     * @param {number} id Element ID
     * @param {ProjectCategory} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: ProjectCategory, options?: any): Promise<ResponseWrapperProjectCategory>;
    /**
     *
     * @summary Find project categories corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [name] Containing
     * @param {string} [number] Equals
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, name?: string, number?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProjectCategory>;
};
/**
 * ProjectcategoryApi - object-oriented interface
 * @export
 * @class ProjectcategoryApi
 * @extends {BaseAPI}
 */
export declare class ProjectcategoryApi extends BaseAPI {
    /**
     *
     * @summary Find project category by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectcategoryApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperProjectCategory>;
    /**
     *
     * @summary Add new project category.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectcategoryApi
     */
    post(body?: ProjectCategory, options?: any): Promise<ResponseWrapperProjectCategory>;
    /**
     *
     * @summary Update project category.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectcategoryApi
     */
    put(id: number, body?: ProjectCategory, options?: any): Promise<ResponseWrapperProjectCategory>;
    /**
     *
     * @summary Find project categories corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [name] Containing
     * @param {} [number] Equals
     * @param {} [description] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectcategoryApi
     */
    search(id?: string, name?: string, number?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProjectCategory>;
}
/**
 * SalarypayslipApi - fetch parameter creator
 * @export
 */
export declare const SalarypayslipApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find payslip (PDF document) by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadPdf(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find payslip by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find payslips corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [employeeId] List of IDs
     * @param {string} [wageTransactionId] List of IDs
     * @param {string} [activityId] List of IDs
     * @param {number} [yearFrom] From and including
     * @param {number} [yearTo] To and excluding
     * @param {number} [monthFrom] From and including
     * @param {number} [monthTo] To and excluding
     * @param {string} [voucherDateFrom] From and including
     * @param {string} [voucherDateTo] To and excluding
     * @param {string} [comment] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, employeeId?: string, wageTransactionId?: string, activityId?: string, yearFrom?: number, yearTo?: number, monthFrom?: number, monthTo?: number, voucherDateFrom?: string, voucherDateTo?: string, comment?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * SalarypayslipApi - functional programming interface
 * @export
 */
export declare const SalarypayslipApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find payslip (PDF document) by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadPdf(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
    /**
     *
     * @summary [BETA] Find payslip by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperPayslip>;
    /**
     *
     * @summary [BETA] Find payslips corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [employeeId] List of IDs
     * @param {string} [wageTransactionId] List of IDs
     * @param {string} [activityId] List of IDs
     * @param {number} [yearFrom] From and including
     * @param {number} [yearTo] To and excluding
     * @param {number} [monthFrom] From and including
     * @param {number} [monthTo] To and excluding
     * @param {string} [voucherDateFrom] From and including
     * @param {string} [voucherDateTo] To and excluding
     * @param {string} [comment] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, employeeId?: string, wageTransactionId?: string, activityId?: string, yearFrom?: number, yearTo?: number, monthFrom?: number, monthTo?: number, voucherDateFrom?: string, voucherDateTo?: string, comment?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponsePayslip>;
};
/**
 * SalarypayslipApi - factory interface
 * @export
 */
export declare const SalarypayslipApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Find payslip (PDF document) by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadPdf(id: number, options?: any): Promise<string>;
    /**
     *
     * @summary [BETA] Find payslip by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperPayslip>;
    /**
     *
     * @summary [BETA] Find payslips corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [employeeId] List of IDs
     * @param {string} [wageTransactionId] List of IDs
     * @param {string} [activityId] List of IDs
     * @param {number} [yearFrom] From and including
     * @param {number} [yearTo] To and excluding
     * @param {number} [monthFrom] From and including
     * @param {number} [monthTo] To and excluding
     * @param {string} [voucherDateFrom] From and including
     * @param {string} [voucherDateTo] To and excluding
     * @param {string} [comment] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, employeeId?: string, wageTransactionId?: string, activityId?: string, yearFrom?: number, yearTo?: number, monthFrom?: number, monthTo?: number, voucherDateFrom?: string, voucherDateTo?: string, comment?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePayslip>;
};
/**
 * SalarypayslipApi - object-oriented interface
 * @export
 * @class SalarypayslipApi
 * @extends {BaseAPI}
 */
export declare class SalarypayslipApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Find payslip (PDF document) by ID.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SalarypayslipApi
     */
    downloadPdf(id: number, options?: any): Promise<string>;
    /**
     *
     * @summary [BETA] Find payslip by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SalarypayslipApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperPayslip>;
    /**
     *
     * @summary [BETA] Find payslips corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [employeeId] List of IDs
     * @param {} [wageTransactionId] List of IDs
     * @param {} [activityId] List of IDs
     * @param {} [yearFrom] From and including
     * @param {} [yearTo] To and excluding
     * @param {} [monthFrom] From and including
     * @param {} [monthTo] To and excluding
     * @param {} [voucherDateFrom] From and including
     * @param {} [voucherDateTo] To and excluding
     * @param {} [comment] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SalarypayslipApi
     */
    search(id?: string, employeeId?: string, wageTransactionId?: string, activityId?: string, yearFrom?: number, yearTo?: number, monthFrom?: number, monthTo?: number, voucherDateFrom?: string, voucherDateTo?: string, comment?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePayslip>;
}
/**
 * SalarytransactionApi - fetch parameter creator
 * @export
 */
export declare const SalarytransactionApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete salary transaction by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find salary transaction by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create a new salary transaction.
     * @param {SalaryTransaction} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: SalaryTransaction, options?: any): FetchArgs;
};
/**
 * SalarytransactionApi - functional programming interface
 * @export
 */
export declare const SalarytransactionApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete salary transaction by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Find salary transaction by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperSalaryTransaction>;
    /**
     *
     * @summary [BETA] Create a new salary transaction.
     * @param {SalaryTransaction} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: SalaryTransaction, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperSalaryTransaction>;
};
/**
 * SalarytransactionApi - factory interface
 * @export
 */
export declare const SalarytransactionApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete salary transaction by ID.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Find salary transaction by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperSalaryTransaction>;
    /**
     *
     * @summary [BETA] Create a new salary transaction.
     * @param {SalaryTransaction} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: SalaryTransaction, options?: any): Promise<ResponseWrapperSalaryTransaction>;
};
/**
 * SalarytransactionApi - object-oriented interface
 * @export
 * @class SalarytransactionApi
 * @extends {BaseAPI}
 */
export declare class SalarytransactionApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete salary transaction by ID.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SalarytransactionApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Find salary transaction by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SalarytransactionApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperSalaryTransaction>;
    /**
     *
     * @summary [BETA] Create a new salary transaction.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SalarytransactionApi
     */
    post(body?: SalaryTransaction, options?: any): Promise<ResponseWrapperSalaryTransaction>;
}
/**
 * SalarytypeApi - fetch parameter creator
 * @export
 */
export declare const SalarytypeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find salary type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find salary type corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [number] Containing
     * @param {string} [name] Containing
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, number?: string, name?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * SalarytypeApi - functional programming interface
 * @export
 */
export declare const SalarytypeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Find salary type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperSalaryType>;
    /**
     *
     * @summary [BETA] Find salary type corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [number] Containing
     * @param {string} [name] Containing
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, number?: string, name?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseSalaryType>;
};
/**
 * SalarytypeApi - factory interface
 * @export
 */
export declare const SalarytypeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Find salary type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperSalaryType>;
    /**
     *
     * @summary [BETA] Find salary type corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [number] Containing
     * @param {string} [name] Containing
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, number?: string, name?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseSalaryType>;
};
/**
 * SalarytypeApi - object-oriented interface
 * @export
 * @class SalarytypeApi
 * @extends {BaseAPI}
 */
export declare class SalarytypeApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Find salary type by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SalarytypeApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperSalaryType>;
    /**
     *
     * @summary [BETA] Find salary type corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [number] Containing
     * @param {} [name] Containing
     * @param {} [description] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SalarytypeApi
     */
    search(id?: string, number?: string, name?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseSalaryType>;
}
/**
 * SupplierApi - fetch parameter creator
 * @export
 */
export declare const SupplierApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get supplier by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Create supplier. Related supplier addresses may also be created.
     * @param {Supplier} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Supplier, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create multiple suppliers. Related supplier addresses may also be created.
     * @param {Array&lt;Supplier&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Supplier[], options?: any): FetchArgs;
    /**
     *
     * @summary Update supplier.
     * @param {number} id Element ID
     * @param {Supplier} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Supplier, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update multiple suppliers. Addresses can also be updated.
     * @param {Array&lt;Supplier&gt;} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: Supplier[], options?: any): FetchArgs;
    /**
     *
     * @summary Find suppliers corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [supplierNumber] List of IDs
     * @param {string} [email] Equals
     * @param {string} [invoiceEmail] Equals
     * @param {boolean} [isInactive] Equals
     * @param {string} [accountManagerId] List of IDs
     * @param {string} [changedSince] Only return elements that have changed since this date and time
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, supplierNumber?: string, email?: string, invoiceEmail?: string, isInactive?: boolean, accountManagerId?: string, changedSince?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * SupplierApi - functional programming interface
 * @export
 */
export declare const SupplierApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get supplier by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperSupplier>;
    /**
     *
     * @summary Create supplier. Related supplier addresses may also be created.
     * @param {Supplier} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Supplier, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperSupplier>;
    /**
     *
     * @summary [BETA] Create multiple suppliers. Related supplier addresses may also be created.
     * @param {Array&lt;Supplier&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Supplier[], options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseSupplier>;
    /**
     *
     * @summary Update supplier.
     * @param {number} id Element ID
     * @param {Supplier} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Supplier, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperSupplier>;
    /**
     *
     * @summary [BETA] Update multiple suppliers. Addresses can also be updated.
     * @param {Array&lt;Supplier&gt;} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: Supplier[], options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseSupplier>;
    /**
     *
     * @summary Find suppliers corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [supplierNumber] List of IDs
     * @param {string} [email] Equals
     * @param {string} [invoiceEmail] Equals
     * @param {boolean} [isInactive] Equals
     * @param {string} [accountManagerId] List of IDs
     * @param {string} [changedSince] Only return elements that have changed since this date and time
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, supplierNumber?: string, email?: string, invoiceEmail?: string, isInactive?: boolean, accountManagerId?: string, changedSince?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseSupplier>;
};
/**
 * SupplierApi - factory interface
 * @export
 */
export declare const SupplierApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get supplier by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperSupplier>;
    /**
     *
     * @summary Create supplier. Related supplier addresses may also be created.
     * @param {Supplier} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Supplier, options?: any): Promise<ResponseWrapperSupplier>;
    /**
     *
     * @summary [BETA] Create multiple suppliers. Related supplier addresses may also be created.
     * @param {Array&lt;Supplier&gt;} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: Supplier[], options?: any): Promise<ListResponseSupplier>;
    /**
     *
     * @summary Update supplier.
     * @param {number} id Element ID
     * @param {Supplier} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Supplier, options?: any): Promise<ResponseWrapperSupplier>;
    /**
     *
     * @summary [BETA] Update multiple suppliers. Addresses can also be updated.
     * @param {Array&lt;Supplier&gt;} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: Supplier[], options?: any): Promise<ListResponseSupplier>;
    /**
     *
     * @summary Find suppliers corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [supplierNumber] List of IDs
     * @param {string} [email] Equals
     * @param {string} [invoiceEmail] Equals
     * @param {boolean} [isInactive] Equals
     * @param {string} [accountManagerId] List of IDs
     * @param {string} [changedSince] Only return elements that have changed since this date and time
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, supplierNumber?: string, email?: string, invoiceEmail?: string, isInactive?: boolean, accountManagerId?: string, changedSince?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseSupplier>;
};
/**
 * SupplierApi - object-oriented interface
 * @export
 * @class SupplierApi
 * @extends {BaseAPI}
 */
export declare class SupplierApi extends BaseAPI {
    /**
     *
     * @summary Get supplier by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SupplierApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperSupplier>;
    /**
     *
     * @summary Create supplier. Related supplier addresses may also be created.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SupplierApi
     */
    post(body?: Supplier, options?: any): Promise<ResponseWrapperSupplier>;
    /**
     *
     * @summary [BETA] Create multiple suppliers. Related supplier addresses may also be created.
     * @param {} [body] JSON representing a list of new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SupplierApi
     */
    postList(body?: Array<Supplier>, options?: any): Promise<ListResponseSupplier>;
    /**
     *
     * @summary Update supplier.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SupplierApi
     */
    put(id: number, body?: Supplier, options?: any): Promise<ResponseWrapperSupplier>;
    /**
     *
     * @summary [BETA] Update multiple suppliers. Addresses can also be updated.
     * @param {} [body] JSON representing updates to object. Should have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SupplierApi
     */
    putList(body?: Array<Supplier>, options?: any): Promise<ListResponseSupplier>;
    /**
     *
     * @summary Find suppliers corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [supplierNumber] List of IDs
     * @param {} [email] Equals
     * @param {} [invoiceEmail] Equals
     * @param {} [isInactive] Equals
     * @param {} [accountManagerId] List of IDs
     * @param {} [changedSince] Only return elements that have changed since this date and time
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SupplierApi
     */
    search(id?: string, supplierNumber?: string, email?: string, invoiceEmail?: string, isInactive?: boolean, accountManagerId?: string, changedSince?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseSupplier>;
}
/**
 * TimesheetentryApi - fetch parameter creator
 * @export
 */
export declare const TimesheetentryApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Delete timesheet entry by ID.
     * @param {number} id Element ID
     * @param {number} [version] Number of current version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, version?: number, options?: any): FetchArgs;
    /**
     *
     * @summary Find timesheet entry by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find recently used timesheet activities.
     * @param {number} projectId ID of project to find activities for
     * @param {number} [employeeId] ID of employee to find activities for. Defaults to ID of token owner.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecentActivities(projectId: number, employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find projects with recent activities (timesheet entry registered).
     * @param {number} [employeeId] ID of employee with recent project hours Defaults to ID of token owner.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecentProjects(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find total hours registered on an employee in a specific period.
     * @param {number} [employeeId] ID of employee to find hours for. Defaults to ID of token owner.
     * @param {string} [startDate] Format is yyyy-MM-dd (from and incl.). Defaults to today.
     * @param {string} [endDate] Format is yyyy-MM-dd (to and excl.). Defaults to tomorrow.
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTotalHours(employeeId?: number, startDate?: string, endDate?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Add new timesheet entry. Only one entry per employee/date/activity/project combination is supported.
     * @param {TimesheetEntry} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: TimesheetEntry, options?: any): FetchArgs;
    /**
     *
     * @summary Add new timesheet entry. Multiple objects for several users can be sent in the same request.
     * @param {Array&lt;TimesheetEntry&gt;} [body] List of timesheet entry objects
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: TimesheetEntry[], options?: any): FetchArgs;
    /**
     *
     * @summary Update timesheet entry by ID. Note: Timesheet entry object fields which are present but not set, or set to 0, will be nulled.
     * @param {number} id Element ID
     * @param {TimesheetEntry} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: TimesheetEntry, options?: any): FetchArgs;
    /**
     *
     * @summary Update timesheet entry. Multiple objects for different users can be sent in the same request.
     * @param {Array&lt;TimesheetEntry&gt;} [body] List of timesheet entry objects to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: TimesheetEntry[], options?: any): FetchArgs;
    /**
     *
     * @summary Find timesheet entry corresponding with sent data.
     * @param {string} dateFrom From and including
     * @param {string} dateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {string} [employeeId] List of IDs
     * @param {string} [projectId] List of IDs
     * @param {string} [activityId] List of IDs
     * @param {string} [comment] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, id?: string, employeeId?: string, projectId?: string, activityId?: string, comment?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * TimesheetentryApi - functional programming interface
 * @export
 */
export declare const TimesheetentryApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Delete timesheet entry by ID.
     * @param {number} id Element ID
     * @param {number} [version] Number of current version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, version?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary Find timesheet entry by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTimesheetEntry>;
    /**
     *
     * @summary Find recently used timesheet activities.
     * @param {number} projectId ID of project to find activities for
     * @param {number} [employeeId] ID of employee to find activities for. Defaults to ID of token owner.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecentActivities(projectId: number, employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseActivity>;
    /**
     *
     * @summary Find projects with recent activities (timesheet entry registered).
     * @param {number} [employeeId] ID of employee with recent project hours Defaults to ID of token owner.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecentProjects(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseProject>;
    /**
     *
     * @summary Find total hours registered on an employee in a specific period.
     * @param {number} [employeeId] ID of employee to find hours for. Defaults to ID of token owner.
     * @param {string} [startDate] Format is yyyy-MM-dd (from and incl.). Defaults to today.
     * @param {string} [endDate] Format is yyyy-MM-dd (to and excl.). Defaults to tomorrow.
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTotalHours(employeeId?: number, startDate?: string, endDate?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperDouble>;
    /**
     *
     * @summary Add new timesheet entry. Only one entry per employee/date/activity/project combination is supported.
     * @param {TimesheetEntry} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: TimesheetEntry, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTimesheetEntry>;
    /**
     *
     * @summary Add new timesheet entry. Multiple objects for several users can be sent in the same request.
     * @param {Array&lt;TimesheetEntry&gt;} [body] List of timesheet entry objects
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: TimesheetEntry[], options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseTimesheetEntry>;
    /**
     *
     * @summary Update timesheet entry by ID. Note: Timesheet entry object fields which are present but not set, or set to 0, will be nulled.
     * @param {number} id Element ID
     * @param {TimesheetEntry} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: TimesheetEntry, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTimesheetEntry>;
    /**
     *
     * @summary Update timesheet entry. Multiple objects for different users can be sent in the same request.
     * @param {Array&lt;TimesheetEntry&gt;} [body] List of timesheet entry objects to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: TimesheetEntry[], options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseTimesheetEntry>;
    /**
     *
     * @summary Find timesheet entry corresponding with sent data.
     * @param {string} dateFrom From and including
     * @param {string} dateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {string} [employeeId] List of IDs
     * @param {string} [projectId] List of IDs
     * @param {string} [activityId] List of IDs
     * @param {string} [comment] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, id?: string, employeeId?: string, projectId?: string, activityId?: string, comment?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TimesheetEntrySearchResponse>;
};
/**
 * TimesheetentryApi - factory interface
 * @export
 */
export declare const TimesheetentryApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Delete timesheet entry by ID.
     * @param {number} id Element ID
     * @param {number} [version] Number of current version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, version?: number, options?: any): Promise<Response>;
    /**
     *
     * @summary Find timesheet entry by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTimesheetEntry>;
    /**
     *
     * @summary Find recently used timesheet activities.
     * @param {number} projectId ID of project to find activities for
     * @param {number} [employeeId] ID of employee to find activities for. Defaults to ID of token owner.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecentActivities(projectId: number, employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseActivity>;
    /**
     *
     * @summary Find projects with recent activities (timesheet entry registered).
     * @param {number} [employeeId] ID of employee with recent project hours Defaults to ID of token owner.
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecentProjects(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProject>;
    /**
     *
     * @summary Find total hours registered on an employee in a specific period.
     * @param {number} [employeeId] ID of employee to find hours for. Defaults to ID of token owner.
     * @param {string} [startDate] Format is yyyy-MM-dd (from and incl.). Defaults to today.
     * @param {string} [endDate] Format is yyyy-MM-dd (to and excl.). Defaults to tomorrow.
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTotalHours(employeeId?: number, startDate?: string, endDate?: string, fields?: string, options?: any): Promise<ResponseWrapperDouble>;
    /**
     *
     * @summary Add new timesheet entry. Only one entry per employee/date/activity/project combination is supported.
     * @param {TimesheetEntry} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: TimesheetEntry, options?: any): Promise<ResponseWrapperTimesheetEntry>;
    /**
     *
     * @summary Add new timesheet entry. Multiple objects for several users can be sent in the same request.
     * @param {Array&lt;TimesheetEntry&gt;} [body] List of timesheet entry objects
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postList(body?: TimesheetEntry[], options?: any): Promise<ListResponseTimesheetEntry>;
    /**
     *
     * @summary Update timesheet entry by ID. Note: Timesheet entry object fields which are present but not set, or set to 0, will be nulled.
     * @param {number} id Element ID
     * @param {TimesheetEntry} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: TimesheetEntry, options?: any): Promise<ResponseWrapperTimesheetEntry>;
    /**
     *
     * @summary Update timesheet entry. Multiple objects for different users can be sent in the same request.
     * @param {Array&lt;TimesheetEntry&gt;} [body] List of timesheet entry objects to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putList(body?: TimesheetEntry[], options?: any): Promise<ListResponseTimesheetEntry>;
    /**
     *
     * @summary Find timesheet entry corresponding with sent data.
     * @param {string} dateFrom From and including
     * @param {string} dateTo To and excluding
     * @param {string} [id] List of IDs
     * @param {string} [employeeId] List of IDs
     * @param {string} [projectId] List of IDs
     * @param {string} [activityId] List of IDs
     * @param {string} [comment] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(dateFrom: string, dateTo: string, id?: string, employeeId?: string, projectId?: string, activityId?: string, comment?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<TimesheetEntrySearchResponse>;
};
/**
 * TimesheetentryApi - object-oriented interface
 * @export
 * @class TimesheetentryApi
 * @extends {BaseAPI}
 */
export declare class TimesheetentryApi extends BaseAPI {
    /**
     *
     * @summary Delete timesheet entry by ID.
     * @param {} id Element ID
     * @param {} [version] Number of current version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheetentryApi
     */
    _delete(id: number, version?: number, options?: any): Promise<Response>;
    /**
     *
     * @summary Find timesheet entry by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheetentryApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTimesheetEntry>;
    /**
     *
     * @summary Find recently used timesheet activities.
     * @param {} projectId ID of project to find activities for
     * @param {} [employeeId] ID of employee to find activities for. Defaults to ID of token owner.
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheetentryApi
     */
    getRecentActivities(projectId: number, employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseActivity>;
    /**
     *
     * @summary Find projects with recent activities (timesheet entry registered).
     * @param {} [employeeId] ID of employee with recent project hours Defaults to ID of token owner.
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheetentryApi
     */
    getRecentProjects(employeeId?: number, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseProject>;
    /**
     *
     * @summary Find total hours registered on an employee in a specific period.
     * @param {} [employeeId] ID of employee to find hours for. Defaults to ID of token owner.
     * @param {} [startDate] Format is yyyy-MM-dd (from and incl.). Defaults to today.
     * @param {} [endDate] Format is yyyy-MM-dd (to and excl.). Defaults to tomorrow.
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheetentryApi
     */
    getTotalHours(employeeId?: number, startDate?: string, endDate?: string, fields?: string, options?: any): Promise<ResponseWrapperDouble>;
    /**
     *
     * @summary Add new timesheet entry. Only one entry per employee/date/activity/project combination is supported.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheetentryApi
     */
    post(body?: TimesheetEntry, options?: any): Promise<ResponseWrapperTimesheetEntry>;
    /**
     *
     * @summary Add new timesheet entry. Multiple objects for several users can be sent in the same request.
     * @param {} [body] List of timesheet entry objects
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheetentryApi
     */
    postList(body?: Array<TimesheetEntry>, options?: any): Promise<ListResponseTimesheetEntry>;
    /**
     *
     * @summary Update timesheet entry by ID. Note: Timesheet entry object fields which are present but not set, or set to 0, will be nulled.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheetentryApi
     */
    put(id: number, body?: TimesheetEntry, options?: any): Promise<ResponseWrapperTimesheetEntry>;
    /**
     *
     * @summary Update timesheet entry. Multiple objects for different users can be sent in the same request.
     * @param {} [body] List of timesheet entry objects to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheetentryApi
     */
    putList(body?: Array<TimesheetEntry>, options?: any): Promise<ListResponseTimesheetEntry>;
    /**
     *
     * @summary Find timesheet entry corresponding with sent data.
     * @param {} dateFrom From and including
     * @param {} dateTo To and excluding
     * @param {} [id] List of IDs
     * @param {} [employeeId] List of IDs
     * @param {} [projectId] List of IDs
     * @param {} [activityId] List of IDs
     * @param {} [comment] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheetentryApi
     */
    search(dateFrom: string, dateTo: string, id?: string, employeeId?: string, projectId?: string, activityId?: string, comment?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<TimesheetEntrySearchResponse>;
}
/**
 * TimesheettimeClockApi - fetch parameter creator
 * @export
 */
export declare const TimesheettimeClockApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Find time clock entry by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find a user’s present running time clock.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPresent(employeeId?: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Update time clock by ID.
     * @param {number} id Element ID
     * @param {TimeClock} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: TimeClock, options?: any): FetchArgs;
    /**
     *
     * @summary Find time clock entries corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [employeeId] List of IDs
     * @param {string} [projectId] List of IDs
     * @param {string} [activityId] List of IDs
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {string} [hourId] List of IDs
     * @param {boolean} [isRunning] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, employeeId?: string, projectId?: string, activityId?: string, dateFrom?: string, dateTo?: string, hourId?: string, isRunning?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Start time clock.
     * @param {number} activityId Activity ID
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {number} [projectId] Project ID
     * @param {string} [date] Optional. Default is today’s date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    start(activityId: number, employeeId?: number, projectId?: number, date?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Stop time clock.
     * @param {number} id Element ID
     * @param {number} [version] Number of current version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    stop(id: number, version?: number, options?: any): FetchArgs;
};
/**
 * TimesheettimeClockApi - functional programming interface
 * @export
 */
export declare const TimesheettimeClockApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Find time clock entry by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTimeClock>;
    /**
     *
     * @summary Find a user’s present running time clock.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPresent(employeeId?: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTimeClock>;
    /**
     *
     * @summary Update time clock by ID.
     * @param {number} id Element ID
     * @param {TimeClock} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: TimeClock, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTimeClock>;
    /**
     *
     * @summary Find time clock entries corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [employeeId] List of IDs
     * @param {string} [projectId] List of IDs
     * @param {string} [activityId] List of IDs
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {string} [hourId] List of IDs
     * @param {boolean} [isRunning] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, employeeId?: string, projectId?: string, activityId?: string, dateFrom?: string, dateTo?: string, hourId?: string, isRunning?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseTimeClock>;
    /**
     *
     * @summary Start time clock.
     * @param {number} activityId Activity ID
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {number} [projectId] Project ID
     * @param {string} [date] Optional. Default is today’s date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    start(activityId: number, employeeId?: number, projectId?: number, date?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTimeClock>;
    /**
     *
     * @summary Stop time clock.
     * @param {number} id Element ID
     * @param {number} [version] Number of current version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    stop(id: number, version?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
};
/**
 * TimesheettimeClockApi - factory interface
 * @export
 */
export declare const TimesheettimeClockApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Find time clock entry by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTimeClock>;
    /**
     *
     * @summary Find a user’s present running time clock.
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPresent(employeeId?: number, fields?: string, options?: any): Promise<ResponseWrapperTimeClock>;
    /**
     *
     * @summary Update time clock by ID.
     * @param {number} id Element ID
     * @param {TimeClock} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: TimeClock, options?: any): Promise<ResponseWrapperTimeClock>;
    /**
     *
     * @summary Find time clock entries corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [employeeId] List of IDs
     * @param {string} [projectId] List of IDs
     * @param {string} [activityId] List of IDs
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {string} [hourId] List of IDs
     * @param {boolean} [isRunning] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, employeeId?: string, projectId?: string, activityId?: string, dateFrom?: string, dateTo?: string, hourId?: string, isRunning?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTimeClock>;
    /**
     *
     * @summary Start time clock.
     * @param {number} activityId Activity ID
     * @param {number} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {number} [projectId] Project ID
     * @param {string} [date] Optional. Default is today’s date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    start(activityId: number, employeeId?: number, projectId?: number, date?: string, options?: any): Promise<ResponseWrapperTimeClock>;
    /**
     *
     * @summary Stop time clock.
     * @param {number} id Element ID
     * @param {number} [version] Number of current version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    stop(id: number, version?: number, options?: any): Promise<Response>;
};
/**
 * TimesheettimeClockApi - object-oriented interface
 * @export
 * @class TimesheettimeClockApi
 * @extends {BaseAPI}
 */
export declare class TimesheettimeClockApi extends BaseAPI {
    /**
     *
     * @summary Find time clock entry by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheettimeClockApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTimeClock>;
    /**
     *
     * @summary Find a user’s present running time clock.
     * @param {} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheettimeClockApi
     */
    getPresent(employeeId?: number, fields?: string, options?: any): Promise<ResponseWrapperTimeClock>;
    /**
     *
     * @summary Update time clock by ID.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheettimeClockApi
     */
    put(id: number, body?: TimeClock, options?: any): Promise<ResponseWrapperTimeClock>;
    /**
     *
     * @summary Find time clock entries corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [employeeId] List of IDs
     * @param {} [projectId] List of IDs
     * @param {} [activityId] List of IDs
     * @param {} [dateFrom] From and including
     * @param {} [dateTo] To and excluding
     * @param {} [hourId] List of IDs
     * @param {} [isRunning] Equals
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheettimeClockApi
     */
    search(id?: string, employeeId?: string, projectId?: string, activityId?: string, dateFrom?: string, dateTo?: string, hourId?: string, isRunning?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTimeClock>;
    /**
     *
     * @summary Start time clock.
     * @param {} activityId Activity ID
     * @param {} [employeeId] Employee ID. Defaults to ID of token owner.
     * @param {} [projectId] Project ID
     * @param {} [date] Optional. Default is today’s date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheettimeClockApi
     */
    start(activityId: number, employeeId?: number, projectId?: number, date?: string, options?: any): Promise<ResponseWrapperTimeClock>;
    /**
     *
     * @summary Stop time clock.
     * @param {} id Element ID
     * @param {} [version] Number of current version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheettimeClockApi
     */
    stop(id: number, version?: number, options?: any): Promise<Response>;
}
/**
 * TokenconsumerApi - fetch parameter creator
 * @export
 */
export declare const TokenconsumerApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get consumer token by token string.
     * @param {string} token Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByToken(token: string, fields?: string, options?: any): FetchArgs;
};
/**
 * TokenconsumerApi - functional programming interface
 * @export
 */
export declare const TokenconsumerApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get consumer token by token string.
     * @param {string} token Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByToken(token: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperConsumerToken>;
};
/**
 * TokenconsumerApi - factory interface
 * @export
 */
export declare const TokenconsumerApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get consumer token by token string.
     * @param {string} token Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByToken(token: string, fields?: string, options?: any): Promise<ResponseWrapperConsumerToken>;
};
/**
 * TokenconsumerApi - object-oriented interface
 * @export
 * @class TokenconsumerApi
 * @extends {BaseAPI}
 */
export declare class TokenconsumerApi extends BaseAPI {
    /**
     *
     * @summary Get consumer token by token string.
     * @param {} token Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenconsumerApi
     */
    getByToken(token: string, fields?: string, options?: any): Promise<ResponseWrapperConsumerToken>;
}
/**
 * TokenemployeeApi - fetch parameter creator
 * @export
 */
export declare const TokenemployeeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create an employee token. Only selected consumers are allowed
     * @param {string} tokenName A user defined name for the new token
     * @param {string} consumerName The name of the consumer
     * @param {number} employeeId The id of the employee
     * @param {boolean} companyOwned Is the key company owned
     * @param {string} expirationDate Expiration date for the employeeToken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    create(tokenName: string, consumerName: string, employeeId: number, companyOwned: boolean, expirationDate: string, options?: any): FetchArgs;
};
/**
 * TokenemployeeApi - functional programming interface
 * @export
 */
export declare const TokenemployeeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create an employee token. Only selected consumers are allowed
     * @param {string} tokenName A user defined name for the new token
     * @param {string} consumerName The name of the consumer
     * @param {number} employeeId The id of the employee
     * @param {boolean} companyOwned Is the key company owned
     * @param {string} expirationDate Expiration date for the employeeToken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    create(tokenName: string, consumerName: string, employeeId: number, companyOwned: boolean, expirationDate: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperEmployeeToken>;
};
/**
 * TokenemployeeApi - factory interface
 * @export
 */
export declare const TokenemployeeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Create an employee token. Only selected consumers are allowed
     * @param {string} tokenName A user defined name for the new token
     * @param {string} consumerName The name of the consumer
     * @param {number} employeeId The id of the employee
     * @param {boolean} companyOwned Is the key company owned
     * @param {string} expirationDate Expiration date for the employeeToken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    create(tokenName: string, consumerName: string, employeeId: number, companyOwned: boolean, expirationDate: string, options?: any): Promise<ResponseWrapperEmployeeToken>;
};
/**
 * TokenemployeeApi - object-oriented interface
 * @export
 * @class TokenemployeeApi
 * @extends {BaseAPI}
 */
export declare class TokenemployeeApi extends BaseAPI {
    /**
     *
     * @summary Create an employee token. Only selected consumers are allowed
     * @param {} tokenName A user defined name for the new token
     * @param {} consumerName The name of the consumer
     * @param {} employeeId The id of the employee
     * @param {} companyOwned Is the key company owned
     * @param {} expirationDate Expiration date for the employeeToken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenemployeeApi
     */
    create(tokenName: string, consumerName: string, employeeId: number, companyOwned: boolean, expirationDate: string, options?: any): Promise<ResponseWrapperEmployeeToken>;
}
/**
 * TokensessionApi - fetch parameter creator
 * @export
 */
export declare const TokensessionApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Delete session token.
     * @param {string} token The login token string to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(token: string, options?: any): FetchArgs;
    /**
     *
     * @summary Create session token.
     * @param {string} consumerToken Token of the API consumer
     * @param {string} employeeToken The employees token
     * @param {string} expirationDate Expiration date for the combined token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    create(consumerToken: string, employeeToken: string, expirationDate: string, options?: any): FetchArgs;
    /**
     *
     * @summary Find information about the current user.
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    whoAmI(fields?: string, options?: any): FetchArgs;
};
/**
 * TokensessionApi - functional programming interface
 * @export
 */
export declare const TokensessionApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Delete session token.
     * @param {string} token The login token string to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(token: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary Create session token.
     * @param {string} consumerToken Token of the API consumer
     * @param {string} employeeToken The employees token
     * @param {string} expirationDate Expiration date for the combined token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    create(consumerToken: string, employeeToken: string, expirationDate: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperSessionToken>;
    /**
     *
     * @summary Find information about the current user.
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    whoAmI(fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperLoggedInUserInfoDTO>;
};
/**
 * TokensessionApi - factory interface
 * @export
 */
export declare const TokensessionApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Delete session token.
     * @param {string} token The login token string to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(token: string, options?: any): Promise<Response>;
    /**
     *
     * @summary Create session token.
     * @param {string} consumerToken Token of the API consumer
     * @param {string} employeeToken The employees token
     * @param {string} expirationDate Expiration date for the combined token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    create(consumerToken: string, employeeToken: string, expirationDate: string, options?: any): Promise<ResponseWrapperSessionToken>;
    /**
     *
     * @summary Find information about the current user.
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    whoAmI(fields?: string, options?: any): Promise<ResponseWrapperLoggedInUserInfoDTO>;
};
/**
 * TokensessionApi - object-oriented interface
 * @export
 * @class TokensessionApi
 * @extends {BaseAPI}
 */
export declare class TokensessionApi extends BaseAPI {
    /**
     *
     * @summary Delete session token.
     * @param {} token The login token string to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensessionApi
     */
    _delete(token: string, options?: any): Promise<Response>;
    /**
     *
     * @summary Create session token.
     * @param {} consumerToken Token of the API consumer
     * @param {} employeeToken The employees token
     * @param {} expirationDate Expiration date for the combined token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensessionApi
     */
    create(consumerToken: string, employeeToken: string, expirationDate: string, options?: any): Promise<ResponseWrapperSessionToken>;
    /**
     *
     * @summary Find information about the current user.
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensessionApi
     */
    whoAmI(fields?: string, options?: any): Promise<ResponseWrapperLoggedInUserInfoDTO>;
}
/**
 * TravelExpenseApi - fetch parameter creator
 * @export
 */
export declare const TravelExpenseApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete travel expense.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Approve travel expenses.
     * @param {string} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    approve(id?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Copy travel expense.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    copy(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Deliver travel expenses.
     * @param {string} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deliver(id?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Get travel expense by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create travel expense.
     * @param {TravelExpense} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: TravelExpense, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update travel expense.
     * @param {number} id Element ID
     * @param {TravelExpense} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: TravelExpense, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find travel expenses corresponding with sent data.
     * @param {string} [employeeId] Equals
     * @param {string} [departmentId] Equals
     * @param {string} [projectId] Equals
     * @param {string} [projectManagerId] Equals
     * @param {string} [departureDateFrom] From and including
     * @param {string} [returnDateTo] To and excluding
     * @param {string} [state] category
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employeeId?: string, departmentId?: string, projectId?: string, projectManagerId?: string, departureDateFrom?: string, returnDateTo?: string, state?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Unapprove travel expenses.
     * @param {string} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unapprove(id?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Undeliver travel expenses.
     * @param {string} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    undeliver(id?: string, options?: any): FetchArgs;
};
/**
 * TravelExpenseApi - functional programming interface
 * @export
 */
export declare const TravelExpenseApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete travel expense.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Approve travel expenses.
     * @param {string} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    approve(id?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseTravelExpense>;
    /**
     *
     * @summary [BETA] Copy travel expense.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    copy(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTravelExpense>;
    /**
     *
     * @summary [BETA] Deliver travel expenses.
     * @param {string} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deliver(id?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseTravelExpense>;
    /**
     *
     * @summary [BETA] Get travel expense by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTravelExpense>;
    /**
     *
     * @summary [BETA] Create travel expense.
     * @param {TravelExpense} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: TravelExpense, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTravelExpense>;
    /**
     *
     * @summary [BETA] Update travel expense.
     * @param {number} id Element ID
     * @param {TravelExpense} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: TravelExpense, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTravelExpense>;
    /**
     *
     * @summary [BETA] Find travel expenses corresponding with sent data.
     * @param {string} [employeeId] Equals
     * @param {string} [departmentId] Equals
     * @param {string} [projectId] Equals
     * @param {string} [projectManagerId] Equals
     * @param {string} [departureDateFrom] From and including
     * @param {string} [returnDateTo] To and excluding
     * @param {string} [state] category
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employeeId?: string, departmentId?: string, projectId?: string, projectManagerId?: string, departureDateFrom?: string, returnDateTo?: string, state?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseTravelExpense>;
    /**
     *
     * @summary [BETA] Unapprove travel expenses.
     * @param {string} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unapprove(id?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseTravelExpense>;
    /**
     *
     * @summary [BETA] Undeliver travel expenses.
     * @param {string} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    undeliver(id?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseTravelExpense>;
};
/**
 * TravelExpenseApi - factory interface
 * @export
 */
export declare const TravelExpenseApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete travel expense.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Approve travel expenses.
     * @param {string} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    approve(id?: string, options?: any): Promise<ListResponseTravelExpense>;
    /**
     *
     * @summary [BETA] Copy travel expense.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    copy(id: number, options?: any): Promise<ResponseWrapperTravelExpense>;
    /**
     *
     * @summary [BETA] Deliver travel expenses.
     * @param {string} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deliver(id?: string, options?: any): Promise<ListResponseTravelExpense>;
    /**
     *
     * @summary [BETA] Get travel expense by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTravelExpense>;
    /**
     *
     * @summary [BETA] Create travel expense.
     * @param {TravelExpense} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: TravelExpense, options?: any): Promise<ResponseWrapperTravelExpense>;
    /**
     *
     * @summary [BETA] Update travel expense.
     * @param {number} id Element ID
     * @param {TravelExpense} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: TravelExpense, options?: any): Promise<ResponseWrapperTravelExpense>;
    /**
     *
     * @summary [BETA] Find travel expenses corresponding with sent data.
     * @param {string} [employeeId] Equals
     * @param {string} [departmentId] Equals
     * @param {string} [projectId] Equals
     * @param {string} [projectManagerId] Equals
     * @param {string} [departureDateFrom] From and including
     * @param {string} [returnDateTo] To and excluding
     * @param {string} [state] category
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(employeeId?: string, departmentId?: string, projectId?: string, projectManagerId?: string, departureDateFrom?: string, returnDateTo?: string, state?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTravelExpense>;
    /**
     *
     * @summary [BETA] Unapprove travel expenses.
     * @param {string} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unapprove(id?: string, options?: any): Promise<ListResponseTravelExpense>;
    /**
     *
     * @summary [BETA] Undeliver travel expenses.
     * @param {string} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    undeliver(id?: string, options?: any): Promise<ListResponseTravelExpense>;
};
/**
 * TravelExpenseApi - object-oriented interface
 * @export
 * @class TravelExpenseApi
 * @extends {BaseAPI}
 */
export declare class TravelExpenseApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete travel expense.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Approve travel expenses.
     * @param {} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseApi
     */
    approve(id?: string, options?: any): Promise<ListResponseTravelExpense>;
    /**
     *
     * @summary [BETA] Copy travel expense.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseApi
     */
    copy(id: number, options?: any): Promise<ResponseWrapperTravelExpense>;
    /**
     *
     * @summary [BETA] Deliver travel expenses.
     * @param {} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseApi
     */
    deliver(id?: string, options?: any): Promise<ListResponseTravelExpense>;
    /**
     *
     * @summary [BETA] Get travel expense by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTravelExpense>;
    /**
     *
     * @summary [BETA] Create travel expense.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseApi
     */
    post(body?: TravelExpense, options?: any): Promise<ResponseWrapperTravelExpense>;
    /**
     *
     * @summary [BETA] Update travel expense.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseApi
     */
    put(id: number, body?: TravelExpense, options?: any): Promise<ResponseWrapperTravelExpense>;
    /**
     *
     * @summary [BETA] Find travel expenses corresponding with sent data.
     * @param {} [employeeId] Equals
     * @param {} [departmentId] Equals
     * @param {} [projectId] Equals
     * @param {} [projectManagerId] Equals
     * @param {} [departureDateFrom] From and including
     * @param {} [returnDateTo] To and excluding
     * @param {} [state] category
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseApi
     */
    search(employeeId?: string, departmentId?: string, projectId?: string, projectManagerId?: string, departureDateFrom?: string, returnDateTo?: string, state?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTravelExpense>;
    /**
     *
     * @summary [BETA] Unapprove travel expenses.
     * @param {} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseApi
     */
    unapprove(id?: string, options?: any): Promise<ListResponseTravelExpense>;
    /**
     *
     * @summary [BETA] Undeliver travel expenses.
     * @param {} [id] ID of the elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseApi
     */
    undeliver(id?: string, options?: any): Promise<ListResponseTravelExpense>;
}
/**
 * TravelExpenseaccommodationAllowanceApi - fetch parameter creator
 * @export
 */
export declare const TravelExpenseaccommodationAllowanceApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete accommodation allowance.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Get travel accommodation allowance by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create accommodation allowance.
     * @param {AccommodationAllowance} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: AccommodationAllowance, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update accommodation allowance.
     * @param {number} id Element ID
     * @param {AccommodationAllowance} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: AccommodationAllowance, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find accommodation allowances corresponding with sent data.
     * @param {string} [travelExpenseId] Equals
     * @param {string} [rateTypeId] Equals
     * @param {string} [rateCategoryId] Equals
     * @param {number} [rateFrom] From and including
     * @param {number} [rateTo] To and excluding
     * @param {number} [countFrom] From and including
     * @param {number} [countTo] To and excluding
     * @param {number} [amountFrom] From and including
     * @param {number} [amountTo] To and excluding
     * @param {string} [location] Containing
     * @param {string} [address] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, rateFrom?: number, rateTo?: number, countFrom?: number, countTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * TravelExpenseaccommodationAllowanceApi - functional programming interface
 * @export
 */
export declare const TravelExpenseaccommodationAllowanceApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete accommodation allowance.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Get travel accommodation allowance by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperAccommodationAllowance>;
    /**
     *
     * @summary [BETA] Create accommodation allowance.
     * @param {AccommodationAllowance} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: AccommodationAllowance, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperAccommodationAllowance>;
    /**
     *
     * @summary [BETA] Update accommodation allowance.
     * @param {number} id Element ID
     * @param {AccommodationAllowance} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: AccommodationAllowance, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperAccommodationAllowance>;
    /**
     *
     * @summary [BETA] Find accommodation allowances corresponding with sent data.
     * @param {string} [travelExpenseId] Equals
     * @param {string} [rateTypeId] Equals
     * @param {string} [rateCategoryId] Equals
     * @param {number} [rateFrom] From and including
     * @param {number} [rateTo] To and excluding
     * @param {number} [countFrom] From and including
     * @param {number} [countTo] To and excluding
     * @param {number} [amountFrom] From and including
     * @param {number} [amountTo] To and excluding
     * @param {string} [location] Containing
     * @param {string} [address] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, rateFrom?: number, rateTo?: number, countFrom?: number, countTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseAccommodationAllowance>;
};
/**
 * TravelExpenseaccommodationAllowanceApi - factory interface
 * @export
 */
export declare const TravelExpenseaccommodationAllowanceApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete accommodation allowance.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get travel accommodation allowance by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperAccommodationAllowance>;
    /**
     *
     * @summary [BETA] Create accommodation allowance.
     * @param {AccommodationAllowance} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: AccommodationAllowance, options?: any): Promise<ResponseWrapperAccommodationAllowance>;
    /**
     *
     * @summary [BETA] Update accommodation allowance.
     * @param {number} id Element ID
     * @param {AccommodationAllowance} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: AccommodationAllowance, options?: any): Promise<ResponseWrapperAccommodationAllowance>;
    /**
     *
     * @summary [BETA] Find accommodation allowances corresponding with sent data.
     * @param {string} [travelExpenseId] Equals
     * @param {string} [rateTypeId] Equals
     * @param {string} [rateCategoryId] Equals
     * @param {number} [rateFrom] From and including
     * @param {number} [rateTo] To and excluding
     * @param {number} [countFrom] From and including
     * @param {number} [countTo] To and excluding
     * @param {number} [amountFrom] From and including
     * @param {number} [amountTo] To and excluding
     * @param {string} [location] Containing
     * @param {string} [address] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, rateFrom?: number, rateTo?: number, countFrom?: number, countTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseAccommodationAllowance>;
};
/**
 * TravelExpenseaccommodationAllowanceApi - object-oriented interface
 * @export
 * @class TravelExpenseaccommodationAllowanceApi
 * @extends {BaseAPI}
 */
export declare class TravelExpenseaccommodationAllowanceApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete accommodation allowance.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseaccommodationAllowanceApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get travel accommodation allowance by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseaccommodationAllowanceApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperAccommodationAllowance>;
    /**
     *
     * @summary [BETA] Create accommodation allowance.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseaccommodationAllowanceApi
     */
    post(body?: AccommodationAllowance, options?: any): Promise<ResponseWrapperAccommodationAllowance>;
    /**
     *
     * @summary [BETA] Update accommodation allowance.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseaccommodationAllowanceApi
     */
    put(id: number, body?: AccommodationAllowance, options?: any): Promise<ResponseWrapperAccommodationAllowance>;
    /**
     *
     * @summary [BETA] Find accommodation allowances corresponding with sent data.
     * @param {} [travelExpenseId] Equals
     * @param {} [rateTypeId] Equals
     * @param {} [rateCategoryId] Equals
     * @param {} [rateFrom] From and including
     * @param {} [rateTo] To and excluding
     * @param {} [countFrom] From and including
     * @param {} [countTo] To and excluding
     * @param {} [amountFrom] From and including
     * @param {} [amountTo] To and excluding
     * @param {} [location] Containing
     * @param {} [address] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseaccommodationAllowanceApi
     */
    search(travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, rateFrom?: number, rateTo?: number, countFrom?: number, countTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseAccommodationAllowance>;
}
/**
 * TravelExpensecostApi - fetch parameter creator
 * @export
 */
export declare const TravelExpensecostApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete cost.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Get cost by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create cost.
     * @param {Cost} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Cost, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update cost.
     * @param {number} id Element ID
     * @param {Cost} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Cost, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find costs corresponding with sent data.
     * @param {string} [travelExpenseId] Equals
     * @param {string} [vatTypeId] Equals
     * @param {string} [currencyId] Equals
     * @param {number} [rateFrom] From and including
     * @param {number} [rateTo] To and excluding
     * @param {number} [countFrom] From and including
     * @param {number} [countTo] To and excluding
     * @param {number} [amountFrom] From and including
     * @param {number} [amountTo] To and excluding
     * @param {string} [location] Containing
     * @param {string} [address] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(travelExpenseId?: string, vatTypeId?: string, currencyId?: string, rateFrom?: number, rateTo?: number, countFrom?: number, countTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * TravelExpensecostApi - functional programming interface
 * @export
 */
export declare const TravelExpensecostApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete cost.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Get cost by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperCost>;
    /**
     *
     * @summary [BETA] Create cost.
     * @param {Cost} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Cost, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperCost>;
    /**
     *
     * @summary [BETA] Update cost.
     * @param {number} id Element ID
     * @param {Cost} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Cost, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperCost>;
    /**
     *
     * @summary [BETA] Find costs corresponding with sent data.
     * @param {string} [travelExpenseId] Equals
     * @param {string} [vatTypeId] Equals
     * @param {string} [currencyId] Equals
     * @param {number} [rateFrom] From and including
     * @param {number} [rateTo] To and excluding
     * @param {number} [countFrom] From and including
     * @param {number} [countTo] To and excluding
     * @param {number} [amountFrom] From and including
     * @param {number} [amountTo] To and excluding
     * @param {string} [location] Containing
     * @param {string} [address] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(travelExpenseId?: string, vatTypeId?: string, currencyId?: string, rateFrom?: number, rateTo?: number, countFrom?: number, countTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseCost>;
};
/**
 * TravelExpensecostApi - factory interface
 * @export
 */
export declare const TravelExpensecostApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete cost.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get cost by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCost>;
    /**
     *
     * @summary [BETA] Create cost.
     * @param {Cost} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Cost, options?: any): Promise<ResponseWrapperCost>;
    /**
     *
     * @summary [BETA] Update cost.
     * @param {number} id Element ID
     * @param {Cost} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Cost, options?: any): Promise<ResponseWrapperCost>;
    /**
     *
     * @summary [BETA] Find costs corresponding with sent data.
     * @param {string} [travelExpenseId] Equals
     * @param {string} [vatTypeId] Equals
     * @param {string} [currencyId] Equals
     * @param {number} [rateFrom] From and including
     * @param {number} [rateTo] To and excluding
     * @param {number} [countFrom] From and including
     * @param {number} [countTo] To and excluding
     * @param {number} [amountFrom] From and including
     * @param {number} [amountTo] To and excluding
     * @param {string} [location] Containing
     * @param {string} [address] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(travelExpenseId?: string, vatTypeId?: string, currencyId?: string, rateFrom?: number, rateTo?: number, countFrom?: number, countTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCost>;
};
/**
 * TravelExpensecostApi - object-oriented interface
 * @export
 * @class TravelExpensecostApi
 * @extends {BaseAPI}
 */
export declare class TravelExpensecostApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete cost.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensecostApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get cost by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensecostApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperCost>;
    /**
     *
     * @summary [BETA] Create cost.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensecostApi
     */
    post(body?: Cost, options?: any): Promise<ResponseWrapperCost>;
    /**
     *
     * @summary [BETA] Update cost.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensecostApi
     */
    put(id: number, body?: Cost, options?: any): Promise<ResponseWrapperCost>;
    /**
     *
     * @summary [BETA] Find costs corresponding with sent data.
     * @param {} [travelExpenseId] Equals
     * @param {} [vatTypeId] Equals
     * @param {} [currencyId] Equals
     * @param {} [rateFrom] From and including
     * @param {} [rateTo] To and excluding
     * @param {} [countFrom] From and including
     * @param {} [countTo] To and excluding
     * @param {} [amountFrom] From and including
     * @param {} [amountTo] To and excluding
     * @param {} [location] Containing
     * @param {} [address] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensecostApi
     */
    search(travelExpenseId?: string, vatTypeId?: string, currencyId?: string, rateFrom?: number, rateTo?: number, countFrom?: number, countTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseCost>;
}
/**
 * TravelExpensecostCategoryApi - fetch parameter creator
 * @export
 */
export declare const TravelExpensecostCategoryApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get cost category by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find cost category corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * TravelExpensecostCategoryApi - functional programming interface
 * @export
 */
export declare const TravelExpensecostCategoryApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get cost category by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTravelCostCategory>;
    /**
     *
     * @summary [BETA] Find cost category corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseTravelCostCategory>;
};
/**
 * TravelExpensecostCategoryApi - factory interface
 * @export
 */
export declare const TravelExpensecostCategoryApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Get cost category by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTravelCostCategory>;
    /**
     *
     * @summary [BETA] Find cost category corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTravelCostCategory>;
};
/**
 * TravelExpensecostCategoryApi - object-oriented interface
 * @export
 * @class TravelExpensecostCategoryApi
 * @extends {BaseAPI}
 */
export declare class TravelExpensecostCategoryApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Get cost category by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensecostCategoryApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTravelCostCategory>;
    /**
     *
     * @summary [BETA] Find cost category corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [description] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensecostCategoryApi
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTravelCostCategory>;
}
/**
 * TravelExpensemileageAllowanceApi - fetch parameter creator
 * @export
 */
export declare const TravelExpensemileageAllowanceApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete mileage allowance.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Get mileage allowance by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create mileage allowance.
     * @param {MileageAllowance} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: MileageAllowance, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update mileage allowance.
     * @param {number} id Element ID
     * @param {MileageAllowance} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: MileageAllowance, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find mileage allowances corresponding with sent data.
     * @param {string} [travelExpenseId] Equals
     * @param {string} [rateTypeId] Equals
     * @param {string} [rateCategoryId] Equals
     * @param {number} [kmFrom] From and including
     * @param {number} [kmTo] To and excluding
     * @param {number} [rateFrom] From and including
     * @param {number} [rateTo] To and excluding
     * @param {number} [amountFrom] From and including
     * @param {number} [amountTo] To and excluding
     * @param {string} [departureLocation] Containing
     * @param {string} [destination] Containing
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {boolean} [isCompanyCar] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, kmFrom?: number, kmTo?: number, rateFrom?: number, rateTo?: number, amountFrom?: number, amountTo?: number, departureLocation?: string, destination?: string, dateFrom?: string, dateTo?: string, isCompanyCar?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * TravelExpensemileageAllowanceApi - functional programming interface
 * @export
 */
export declare const TravelExpensemileageAllowanceApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete mileage allowance.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Get mileage allowance by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperMileageAllowance>;
    /**
     *
     * @summary [BETA] Create mileage allowance.
     * @param {MileageAllowance} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: MileageAllowance, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperMileageAllowance>;
    /**
     *
     * @summary [BETA] Update mileage allowance.
     * @param {number} id Element ID
     * @param {MileageAllowance} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: MileageAllowance, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperMileageAllowance>;
    /**
     *
     * @summary [BETA] Find mileage allowances corresponding with sent data.
     * @param {string} [travelExpenseId] Equals
     * @param {string} [rateTypeId] Equals
     * @param {string} [rateCategoryId] Equals
     * @param {number} [kmFrom] From and including
     * @param {number} [kmTo] To and excluding
     * @param {number} [rateFrom] From and including
     * @param {number} [rateTo] To and excluding
     * @param {number} [amountFrom] From and including
     * @param {number} [amountTo] To and excluding
     * @param {string} [departureLocation] Containing
     * @param {string} [destination] Containing
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {boolean} [isCompanyCar] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, kmFrom?: number, kmTo?: number, rateFrom?: number, rateTo?: number, amountFrom?: number, amountTo?: number, departureLocation?: string, destination?: string, dateFrom?: string, dateTo?: string, isCompanyCar?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseMileageAllowance>;
};
/**
 * TravelExpensemileageAllowanceApi - factory interface
 * @export
 */
export declare const TravelExpensemileageAllowanceApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete mileage allowance.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get mileage allowance by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperMileageAllowance>;
    /**
     *
     * @summary [BETA] Create mileage allowance.
     * @param {MileageAllowance} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: MileageAllowance, options?: any): Promise<ResponseWrapperMileageAllowance>;
    /**
     *
     * @summary [BETA] Update mileage allowance.
     * @param {number} id Element ID
     * @param {MileageAllowance} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: MileageAllowance, options?: any): Promise<ResponseWrapperMileageAllowance>;
    /**
     *
     * @summary [BETA] Find mileage allowances corresponding with sent data.
     * @param {string} [travelExpenseId] Equals
     * @param {string} [rateTypeId] Equals
     * @param {string} [rateCategoryId] Equals
     * @param {number} [kmFrom] From and including
     * @param {number} [kmTo] To and excluding
     * @param {number} [rateFrom] From and including
     * @param {number} [rateTo] To and excluding
     * @param {number} [amountFrom] From and including
     * @param {number} [amountTo] To and excluding
     * @param {string} [departureLocation] Containing
     * @param {string} [destination] Containing
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {boolean} [isCompanyCar] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, kmFrom?: number, kmTo?: number, rateFrom?: number, rateTo?: number, amountFrom?: number, amountTo?: number, departureLocation?: string, destination?: string, dateFrom?: string, dateTo?: string, isCompanyCar?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseMileageAllowance>;
};
/**
 * TravelExpensemileageAllowanceApi - object-oriented interface
 * @export
 * @class TravelExpensemileageAllowanceApi
 * @extends {BaseAPI}
 */
export declare class TravelExpensemileageAllowanceApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete mileage allowance.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensemileageAllowanceApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get mileage allowance by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensemileageAllowanceApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperMileageAllowance>;
    /**
     *
     * @summary [BETA] Create mileage allowance.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensemileageAllowanceApi
     */
    post(body?: MileageAllowance, options?: any): Promise<ResponseWrapperMileageAllowance>;
    /**
     *
     * @summary [BETA] Update mileage allowance.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensemileageAllowanceApi
     */
    put(id: number, body?: MileageAllowance, options?: any): Promise<ResponseWrapperMileageAllowance>;
    /**
     *
     * @summary [BETA] Find mileage allowances corresponding with sent data.
     * @param {} [travelExpenseId] Equals
     * @param {} [rateTypeId] Equals
     * @param {} [rateCategoryId] Equals
     * @param {} [kmFrom] From and including
     * @param {} [kmTo] To and excluding
     * @param {} [rateFrom] From and including
     * @param {} [rateTo] To and excluding
     * @param {} [amountFrom] From and including
     * @param {} [amountTo] To and excluding
     * @param {} [departureLocation] Containing
     * @param {} [destination] Containing
     * @param {} [dateFrom] From and including
     * @param {} [dateTo] To and excluding
     * @param {} [isCompanyCar] Equals
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensemileageAllowanceApi
     */
    search(travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, kmFrom?: number, kmTo?: number, rateFrom?: number, rateTo?: number, amountFrom?: number, amountTo?: number, departureLocation?: string, destination?: string, dateFrom?: string, dateTo?: string, isCompanyCar?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseMileageAllowance>;
}
/**
 * TravelExpensepassengerApi - fetch parameter creator
 * @export
 */
export declare const TravelExpensepassengerApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete passenger.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Get passenger by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create passenger.
     * @param {Passenger} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Passenger, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update passenger.
     * @param {number} id Element ID
     * @param {Passenger} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Passenger, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find passengers corresponding with sent data.
     * @param {string} [mileageAllowance] Equals
     * @param {string} [name] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(mileageAllowance?: string, name?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * TravelExpensepassengerApi - functional programming interface
 * @export
 */
export declare const TravelExpensepassengerApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete passenger.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Get passenger by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperPassenger>;
    /**
     *
     * @summary [BETA] Create passenger.
     * @param {Passenger} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Passenger, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperPassenger>;
    /**
     *
     * @summary [BETA] Update passenger.
     * @param {number} id Element ID
     * @param {Passenger} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Passenger, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperPassenger>;
    /**
     *
     * @summary [BETA] Find passengers corresponding with sent data.
     * @param {string} [mileageAllowance] Equals
     * @param {string} [name] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(mileageAllowance?: string, name?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponsePassenger>;
};
/**
 * TravelExpensepassengerApi - factory interface
 * @export
 */
export declare const TravelExpensepassengerApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete passenger.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get passenger by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperPassenger>;
    /**
     *
     * @summary [BETA] Create passenger.
     * @param {Passenger} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: Passenger, options?: any): Promise<ResponseWrapperPassenger>;
    /**
     *
     * @summary [BETA] Update passenger.
     * @param {number} id Element ID
     * @param {Passenger} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: Passenger, options?: any): Promise<ResponseWrapperPassenger>;
    /**
     *
     * @summary [BETA] Find passengers corresponding with sent data.
     * @param {string} [mileageAllowance] Equals
     * @param {string} [name] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(mileageAllowance?: string, name?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePassenger>;
};
/**
 * TravelExpensepassengerApi - object-oriented interface
 * @export
 * @class TravelExpensepassengerApi
 * @extends {BaseAPI}
 */
export declare class TravelExpensepassengerApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete passenger.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensepassengerApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get passenger by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensepassengerApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperPassenger>;
    /**
     *
     * @summary [BETA] Create passenger.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensepassengerApi
     */
    post(body?: Passenger, options?: any): Promise<ResponseWrapperPassenger>;
    /**
     *
     * @summary [BETA] Update passenger.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensepassengerApi
     */
    put(id: number, body?: Passenger, options?: any): Promise<ResponseWrapperPassenger>;
    /**
     *
     * @summary [BETA] Find passengers corresponding with sent data.
     * @param {} [mileageAllowance] Equals
     * @param {} [name] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensepassengerApi
     */
    search(mileageAllowance?: string, name?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePassenger>;
}
/**
 * TravelExpensepaymentTypeApi - fetch parameter creator
 * @export
 */
export declare const TravelExpensepaymentTypeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get payment type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find payment type corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * TravelExpensepaymentTypeApi - functional programming interface
 * @export
 */
export declare const TravelExpensepaymentTypeApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get payment type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTravelPaymentType>;
    /**
     *
     * @summary [BETA] Find payment type corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseTravelPaymentType>;
};
/**
 * TravelExpensepaymentTypeApi - factory interface
 * @export
 */
export declare const TravelExpensepaymentTypeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Get payment type by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTravelPaymentType>;
    /**
     *
     * @summary [BETA] Find payment type corresponding with sent data.
     * @param {string} [id] List of IDs
     * @param {string} [description] Containing
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTravelPaymentType>;
};
/**
 * TravelExpensepaymentTypeApi - object-oriented interface
 * @export
 * @class TravelExpensepaymentTypeApi
 * @extends {BaseAPI}
 */
export declare class TravelExpensepaymentTypeApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Get payment type by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensepaymentTypeApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTravelPaymentType>;
    /**
     *
     * @summary [BETA] Find payment type corresponding with sent data.
     * @param {} [id] List of IDs
     * @param {} [description] Containing
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpensepaymentTypeApi
     */
    search(id?: string, description?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTravelPaymentType>;
}
/**
 * TravelExpenseperDiemCompensationApi - fetch parameter creator
 * @export
 */
export declare const TravelExpenseperDiemCompensationApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete per diem compensation.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Get per diem compensation by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Create per diem compensation.
     * @param {PerDiemCompensation} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: PerDiemCompensation, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Update per diem compensation.
     * @param {number} id Element ID
     * @param {PerDiemCompensation} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: PerDiemCompensation, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find per diem compensations corresponding with sent data.
     * @param {string} [travelExpenseId] Equals
     * @param {string} [rateTypeId] Equals
     * @param {string} [rateCategoryId] Equals
     * @param {string} [overnightAccommodation] Equals
     * @param {number} [countFrom] From and including
     * @param {number} [countTo] To and excluding
     * @param {number} [rateFrom] From and including
     * @param {number} [rateTo] To and excluding
     * @param {number} [amountFrom] From and including
     * @param {number} [amountTo] To and excluding
     * @param {string} [location] Containing
     * @param {string} [address] Containing
     * @param {boolean} [isDeductionForBreakfast] Equals
     * @param {boolean} [isLunchDeduction] Equals
     * @param {boolean} [isDinnerDeduction] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, overnightAccommodation?: string, countFrom?: number, countTo?: number, rateFrom?: number, rateTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, isDeductionForBreakfast?: boolean, isLunchDeduction?: boolean, isDinnerDeduction?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * TravelExpenseperDiemCompensationApi - functional programming interface
 * @export
 */
export declare const TravelExpenseperDiemCompensationApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Delete per diem compensation.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary [BETA] Get per diem compensation by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperPerDiemCompensation>;
    /**
     *
     * @summary [BETA] Create per diem compensation.
     * @param {PerDiemCompensation} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: PerDiemCompensation, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperPerDiemCompensation>;
    /**
     *
     * @summary [BETA] Update per diem compensation.
     * @param {number} id Element ID
     * @param {PerDiemCompensation} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: PerDiemCompensation, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperPerDiemCompensation>;
    /**
     *
     * @summary [BETA] Find per diem compensations corresponding with sent data.
     * @param {string} [travelExpenseId] Equals
     * @param {string} [rateTypeId] Equals
     * @param {string} [rateCategoryId] Equals
     * @param {string} [overnightAccommodation] Equals
     * @param {number} [countFrom] From and including
     * @param {number} [countTo] To and excluding
     * @param {number} [rateFrom] From and including
     * @param {number} [rateTo] To and excluding
     * @param {number} [amountFrom] From and including
     * @param {number} [amountTo] To and excluding
     * @param {string} [location] Containing
     * @param {string} [address] Containing
     * @param {boolean} [isDeductionForBreakfast] Equals
     * @param {boolean} [isLunchDeduction] Equals
     * @param {boolean} [isDinnerDeduction] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, overnightAccommodation?: string, countFrom?: number, countTo?: number, rateFrom?: number, rateTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, isDeductionForBreakfast?: boolean, isLunchDeduction?: boolean, isDinnerDeduction?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponsePerDiemCompensation>;
};
/**
 * TravelExpenseperDiemCompensationApi - factory interface
 * @export
 */
export declare const TravelExpenseperDiemCompensationApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Delete per diem compensation.
     * @param {number} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get per diem compensation by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperPerDiemCompensation>;
    /**
     *
     * @summary [BETA] Create per diem compensation.
     * @param {PerDiemCompensation} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    post(body?: PerDiemCompensation, options?: any): Promise<ResponseWrapperPerDiemCompensation>;
    /**
     *
     * @summary [BETA] Update per diem compensation.
     * @param {number} id Element ID
     * @param {PerDiemCompensation} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    put(id: number, body?: PerDiemCompensation, options?: any): Promise<ResponseWrapperPerDiemCompensation>;
    /**
     *
     * @summary [BETA] Find per diem compensations corresponding with sent data.
     * @param {string} [travelExpenseId] Equals
     * @param {string} [rateTypeId] Equals
     * @param {string} [rateCategoryId] Equals
     * @param {string} [overnightAccommodation] Equals
     * @param {number} [countFrom] From and including
     * @param {number} [countTo] To and excluding
     * @param {number} [rateFrom] From and including
     * @param {number} [rateTo] To and excluding
     * @param {number} [amountFrom] From and including
     * @param {number} [amountTo] To and excluding
     * @param {string} [location] Containing
     * @param {string} [address] Containing
     * @param {boolean} [isDeductionForBreakfast] Equals
     * @param {boolean} [isLunchDeduction] Equals
     * @param {boolean} [isDinnerDeduction] Equals
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, overnightAccommodation?: string, countFrom?: number, countTo?: number, rateFrom?: number, rateTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, isDeductionForBreakfast?: boolean, isLunchDeduction?: boolean, isDinnerDeduction?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePerDiemCompensation>;
};
/**
 * TravelExpenseperDiemCompensationApi - object-oriented interface
 * @export
 * @class TravelExpenseperDiemCompensationApi
 * @extends {BaseAPI}
 */
export declare class TravelExpenseperDiemCompensationApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Delete per diem compensation.
     * @param {} id Element ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseperDiemCompensationApi
     */
    _delete(id: number, options?: any): Promise<Response>;
    /**
     *
     * @summary [BETA] Get per diem compensation by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseperDiemCompensationApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperPerDiemCompensation>;
    /**
     *
     * @summary [BETA] Create per diem compensation.
     * @param {} [body] JSON representing the new object to be created. Should not have ID and version set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseperDiemCompensationApi
     */
    post(body?: PerDiemCompensation, options?: any): Promise<ResponseWrapperPerDiemCompensation>;
    /**
     *
     * @summary [BETA] Update per diem compensation.
     * @param {} id Element ID
     * @param {} [body] Partial object describing what should be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseperDiemCompensationApi
     */
    put(id: number, body?: PerDiemCompensation, options?: any): Promise<ResponseWrapperPerDiemCompensation>;
    /**
     *
     * @summary [BETA] Find per diem compensations corresponding with sent data.
     * @param {} [travelExpenseId] Equals
     * @param {} [rateTypeId] Equals
     * @param {} [rateCategoryId] Equals
     * @param {} [overnightAccommodation] Equals
     * @param {} [countFrom] From and including
     * @param {} [countTo] To and excluding
     * @param {} [rateFrom] From and including
     * @param {} [rateTo] To and excluding
     * @param {} [amountFrom] From and including
     * @param {} [amountTo] To and excluding
     * @param {} [location] Containing
     * @param {} [address] Containing
     * @param {} [isDeductionForBreakfast] Equals
     * @param {} [isLunchDeduction] Equals
     * @param {} [isDinnerDeduction] Equals
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenseperDiemCompensationApi
     */
    search(travelExpenseId?: string, rateTypeId?: string, rateCategoryId?: string, overnightAccommodation?: string, countFrom?: number, countTo?: number, rateFrom?: number, rateTo?: number, amountFrom?: number, amountTo?: number, location?: string, address?: string, isDeductionForBreakfast?: boolean, isLunchDeduction?: boolean, isDinnerDeduction?: boolean, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponsePerDiemCompensation>;
}
/**
 * TravelExpenserateApi - fetch parameter creator
 * @export
 */
export declare const TravelExpenserateApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get travel expense rate by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find rates corresponding with sent data.
     * @param {string} [rateCategoryId] Equals
     * @param {string} [type] Equals
     * @param {boolean} [isValidDayTrip] Equals
     * @param {boolean} [isValidAccommodation] Equals
     * @param {boolean} [isValidDomestic] Equals
     * @param {boolean} [isValidForeignTravel] Equals
     * @param {boolean} [requiresZone] Equals
     * @param {boolean} [requiresOvernightAccommodation] Equals
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(rateCategoryId?: string, type?: string, isValidDayTrip?: boolean, isValidAccommodation?: boolean, isValidDomestic?: boolean, isValidForeignTravel?: boolean, requiresZone?: boolean, requiresOvernightAccommodation?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * TravelExpenserateApi - functional programming interface
 * @export
 */
export declare const TravelExpenserateApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get travel expense rate by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTravelExpenseRate>;
    /**
     *
     * @summary [BETA] Find rates corresponding with sent data.
     * @param {string} [rateCategoryId] Equals
     * @param {string} [type] Equals
     * @param {boolean} [isValidDayTrip] Equals
     * @param {boolean} [isValidAccommodation] Equals
     * @param {boolean} [isValidDomestic] Equals
     * @param {boolean} [isValidForeignTravel] Equals
     * @param {boolean} [requiresZone] Equals
     * @param {boolean} [requiresOvernightAccommodation] Equals
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(rateCategoryId?: string, type?: string, isValidDayTrip?: boolean, isValidAccommodation?: boolean, isValidDomestic?: boolean, isValidForeignTravel?: boolean, requiresZone?: boolean, requiresOvernightAccommodation?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseTravelExpenseRate>;
};
/**
 * TravelExpenserateApi - factory interface
 * @export
 */
export declare const TravelExpenserateApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Get travel expense rate by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTravelExpenseRate>;
    /**
     *
     * @summary [BETA] Find rates corresponding with sent data.
     * @param {string} [rateCategoryId] Equals
     * @param {string} [type] Equals
     * @param {boolean} [isValidDayTrip] Equals
     * @param {boolean} [isValidAccommodation] Equals
     * @param {boolean} [isValidDomestic] Equals
     * @param {boolean} [isValidForeignTravel] Equals
     * @param {boolean} [requiresZone] Equals
     * @param {boolean} [requiresOvernightAccommodation] Equals
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(rateCategoryId?: string, type?: string, isValidDayTrip?: boolean, isValidAccommodation?: boolean, isValidDomestic?: boolean, isValidForeignTravel?: boolean, requiresZone?: boolean, requiresOvernightAccommodation?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTravelExpenseRate>;
};
/**
 * TravelExpenserateApi - object-oriented interface
 * @export
 * @class TravelExpenserateApi
 * @extends {BaseAPI}
 */
export declare class TravelExpenserateApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Get travel expense rate by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenserateApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTravelExpenseRate>;
    /**
     *
     * @summary [BETA] Find rates corresponding with sent data.
     * @param {} [rateCategoryId] Equals
     * @param {} [type] Equals
     * @param {} [isValidDayTrip] Equals
     * @param {} [isValidAccommodation] Equals
     * @param {} [isValidDomestic] Equals
     * @param {} [isValidForeignTravel] Equals
     * @param {} [requiresZone] Equals
     * @param {} [requiresOvernightAccommodation] Equals
     * @param {} [dateFrom] From and including
     * @param {} [dateTo] To and excluding
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenserateApi
     */
    search(rateCategoryId?: string, type?: string, isValidDayTrip?: boolean, isValidAccommodation?: boolean, isValidDomestic?: boolean, isValidForeignTravel?: boolean, requiresZone?: boolean, requiresOvernightAccommodation?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTravelExpenseRate>;
}
/**
 * TravelExpenserateCategoryApi - fetch parameter creator
 * @export
 */
export declare const TravelExpenserateCategoryApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get travel expense rate category by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find rate categories corresponding with sent data.
     * @param {string} [type] Equals
     * @param {string} [name] Containing
     * @param {number} [travelReportRateCategoryGroupId] Equals
     * @param {string} [ameldingWageCode] Containing
     * @param {string} [wageCodeNumber] Equals
     * @param {boolean} [isValidDayTrip] Equals
     * @param {boolean} [isValidAccommodation] Equals
     * @param {boolean} [isValidDomestic] Equals
     * @param {boolean} [requiresZone] Equals
     * @param {boolean} [isRequiresOvernightAccommodation] Equals
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(type?: string, name?: string, travelReportRateCategoryGroupId?: number, ameldingWageCode?: string, wageCodeNumber?: string, isValidDayTrip?: boolean, isValidAccommodation?: boolean, isValidDomestic?: boolean, requiresZone?: boolean, isRequiresOvernightAccommodation?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * TravelExpenserateCategoryApi - functional programming interface
 * @export
 */
export declare const TravelExpenserateCategoryApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get travel expense rate category by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTravelExpenseRateCategory>;
    /**
     *
     * @summary [BETA] Find rate categories corresponding with sent data.
     * @param {string} [type] Equals
     * @param {string} [name] Containing
     * @param {number} [travelReportRateCategoryGroupId] Equals
     * @param {string} [ameldingWageCode] Containing
     * @param {string} [wageCodeNumber] Equals
     * @param {boolean} [isValidDayTrip] Equals
     * @param {boolean} [isValidAccommodation] Equals
     * @param {boolean} [isValidDomestic] Equals
     * @param {boolean} [requiresZone] Equals
     * @param {boolean} [isRequiresOvernightAccommodation] Equals
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(type?: string, name?: string, travelReportRateCategoryGroupId?: number, ameldingWageCode?: string, wageCodeNumber?: string, isValidDayTrip?: boolean, isValidAccommodation?: boolean, isValidDomestic?: boolean, requiresZone?: boolean, isRequiresOvernightAccommodation?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseTravelExpenseRateCategory>;
};
/**
 * TravelExpenserateCategoryApi - factory interface
 * @export
 */
export declare const TravelExpenserateCategoryApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Get travel expense rate category by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTravelExpenseRateCategory>;
    /**
     *
     * @summary [BETA] Find rate categories corresponding with sent data.
     * @param {string} [type] Equals
     * @param {string} [name] Containing
     * @param {number} [travelReportRateCategoryGroupId] Equals
     * @param {string} [ameldingWageCode] Containing
     * @param {string} [wageCodeNumber] Equals
     * @param {boolean} [isValidDayTrip] Equals
     * @param {boolean} [isValidAccommodation] Equals
     * @param {boolean} [isValidDomestic] Equals
     * @param {boolean} [requiresZone] Equals
     * @param {boolean} [isRequiresOvernightAccommodation] Equals
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(type?: string, name?: string, travelReportRateCategoryGroupId?: number, ameldingWageCode?: string, wageCodeNumber?: string, isValidDayTrip?: boolean, isValidAccommodation?: boolean, isValidDomestic?: boolean, requiresZone?: boolean, isRequiresOvernightAccommodation?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTravelExpenseRateCategory>;
};
/**
 * TravelExpenserateCategoryApi - object-oriented interface
 * @export
 * @class TravelExpenserateCategoryApi
 * @extends {BaseAPI}
 */
export declare class TravelExpenserateCategoryApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Get travel expense rate category by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenserateCategoryApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTravelExpenseRateCategory>;
    /**
     *
     * @summary [BETA] Find rate categories corresponding with sent data.
     * @param {} [type] Equals
     * @param {} [name] Containing
     * @param {} [travelReportRateCategoryGroupId] Equals
     * @param {} [ameldingWageCode] Containing
     * @param {} [wageCodeNumber] Equals
     * @param {} [isValidDayTrip] Equals
     * @param {} [isValidAccommodation] Equals
     * @param {} [isValidDomestic] Equals
     * @param {} [requiresZone] Equals
     * @param {} [isRequiresOvernightAccommodation] Equals
     * @param {} [dateFrom] From and including
     * @param {} [dateTo] To and excluding
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenserateCategoryApi
     */
    search(type?: string, name?: string, travelReportRateCategoryGroupId?: number, ameldingWageCode?: string, wageCodeNumber?: string, isValidDayTrip?: boolean, isValidAccommodation?: boolean, isValidDomestic?: boolean, requiresZone?: boolean, isRequiresOvernightAccommodation?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTravelExpenseRateCategory>;
}
/**
 * TravelExpenserateCategoryGroupApi - fetch parameter creator
 * @export
 */
export declare const TravelExpenserateCategoryGroupApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get travel report rate category group by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): FetchArgs;
    /**
     *
     * @summary [BETA] Find rate categoriy groups corresponding with sent data.
     * @param {string} [name] Containing
     * @param {boolean} [isForeignTravel] Equals
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(name?: string, isForeignTravel?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): FetchArgs;
};
/**
 * TravelExpenserateCategoryGroupApi - functional programming interface
 * @export
 */
export declare const TravelExpenserateCategoryGroupApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary [BETA] Get travel report rate category group by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseWrapperTravelExpenseRateCategoryGroup>;
    /**
     *
     * @summary [BETA] Find rate categoriy groups corresponding with sent data.
     * @param {string} [name] Containing
     * @param {boolean} [isForeignTravel] Equals
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(name?: string, isForeignTravel?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ListResponseTravelExpenseRateCategoryGroup>;
};
/**
 * TravelExpenserateCategoryGroupApi - factory interface
 * @export
 */
export declare const TravelExpenserateCategoryGroupApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary [BETA] Get travel report rate category group by ID.
     * @param {number} id Element ID
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTravelExpenseRateCategoryGroup>;
    /**
     *
     * @summary [BETA] Find rate categoriy groups corresponding with sent data.
     * @param {string} [name] Containing
     * @param {boolean} [isForeignTravel] Equals
     * @param {string} [dateFrom] From and including
     * @param {string} [dateTo] To and excluding
     * @param {number} [from] From index
     * @param {number} [count] Number of elements to return
     * @param {string} [sorting] Sorting pattern
     * @param {string} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(name?: string, isForeignTravel?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTravelExpenseRateCategoryGroup>;
};
/**
 * TravelExpenserateCategoryGroupApi - object-oriented interface
 * @export
 * @class TravelExpenserateCategoryGroupApi
 * @extends {BaseAPI}
 */
export declare class TravelExpenserateCategoryGroupApi extends BaseAPI {
    /**
     *
     * @summary [BETA] Get travel report rate category group by ID.
     * @param {} id Element ID
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenserateCategoryGroupApi
     */
    get(id: number, fields?: string, options?: any): Promise<ResponseWrapperTravelExpenseRateCategoryGroup>;
    /**
     *
     * @summary [BETA] Find rate categoriy groups corresponding with sent data.
     * @param {} [name] Containing
     * @param {} [isForeignTravel] Equals
     * @param {} [dateFrom] From and including
     * @param {} [dateTo] To and excluding
     * @param {} [from] From index
     * @param {} [count] Number of elements to return
     * @param {} [sorting] Sorting pattern
     * @param {} [fields] Fields filter pattern
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TravelExpenserateCategoryGroupApi
     */
    search(name?: string, isForeignTravel?: boolean, dateFrom?: string, dateTo?: string, from?: number, count?: number, sorting?: string, fields?: string, options?: any): Promise<ListResponseTravelExpenseRateCategoryGroup>;
}
