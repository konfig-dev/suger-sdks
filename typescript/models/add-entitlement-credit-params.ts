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


/**
 * 
 * @export
 * @interface AddEntitlementCreditParams
 */
export interface AddEntitlementCreditParams {
    /**
     * The amount to be added to the credit amount.
     * @type {number}
     * @memberof AddEntitlementCreditParams
     */
    'creditAmountIncrement': number;
    /**
     * 
     * @type {string}
     * @memberof AddEntitlementCreditParams
     */
    'entitlementID': string;
    /**
     * 
     * @type {string}
     * @memberof AddEntitlementCreditParams
     */
    'organizationID': string;
}

