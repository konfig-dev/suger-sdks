/* tslint:disable */
/* eslint-disable */
/**
 * Suger API
 * CRUD operations on a set of resources, including organizations, products, offers, entitlements, usage record groups for meterting, etc.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@suger.io
 *
 * NOTE: This file is auto generated by Konfig (https://konfigthis.com).
 * https://konfigthis.com
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { SqlNullTime } from './sql-null-time';

/**
 * 
 * @export
 * @interface GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
 */
export interface GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent {
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'action'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'agreementID'?: string;
    /**
     * 
     * @type {number}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'amount'?: number;
    /**
     * 
     * @type {number}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'balanceImpacting'?: number;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'bankTraceID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'billingAddressID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'brokerID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'buyerID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'currency'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'dataFeedProductID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'disbursementBillingEventID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'endUserAccountID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'entitlementID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'fromAccountID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'id'?: string;
    /**
     * 
     * @type {SqlNullTime}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'insertDate'?: SqlNullTime;
    /**
     * 
     * @type {SqlNullTime}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'invoiceDate'?: SqlNullTime;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'invoiceID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'offerID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'organizationID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'parentBillingEventID'?: string;
    /**
     * 
     * @type {SqlNullTime}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'paymentDueDate'?: SqlNullTime;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'productID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'toAccountID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'transactionReferenceID'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'transactionType'?: string;
    /**
     * 
     * @type {SqlNullTime}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'usagePeriodEndDate'?: SqlNullTime;
    /**
     * 
     * @type {SqlNullTime}
     * @memberof GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent
     */
    'usagePeriodStartDate'?: SqlNullTime;
}

