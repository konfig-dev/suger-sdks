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
 * @interface AzurePricingUnit
 */
export interface AzurePricingUnit {
    /**
     * 
     * @type {boolean}
     * @memberof AzurePricingUnit
     */
    'isUnlimitedUnit'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AzurePricingUnit
     */
    'lowerUnit'?: number;
    /**
     * 
     * @type {string}
     * @memberof AzurePricingUnit
     */
    'name'?: AzurePricingUnitNameEnum;
    /**
     * 
     * @type {string}
     * @memberof AzurePricingUnit
     */
    'unitType'?: string;
    /**
     * 
     * @type {number}
     * @memberof AzurePricingUnit
     */
    'upperUnit'?: number;
}

type AzurePricingUnitNameEnum = 'sharedcore' | 'transactions'

