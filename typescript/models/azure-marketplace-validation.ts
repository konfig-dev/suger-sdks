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
 * @interface AzureMarketplaceValidation
 */
export interface AzureMarketplaceValidation {
    /**
     * 
     * @type {string}
     * @memberof AzureMarketplaceValidation
     */
    '$schema'?: string;
    /**
     * 
     * @type {string}
     * @memberof AzureMarketplaceValidation
     */
    'code'?: AzureMarketplaceValidationCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof AzureMarketplaceValidation
     */
    'level'?: AzureMarketplaceValidationLevelEnum;
    /**
     * 
     * @type {string}
     * @memberof AzureMarketplaceValidation
     */
    'message'?: string;
    /**
     * 
     * @type {string}
     * @memberof AzureMarketplaceValidation
     */
    'resourceId'?: string;
}

type AzureMarketplaceValidationCodeEnum = 'businessValidationError' | 'collectionLimitExceeded' | 'invalidId' | 'invalidEntityStatus' | 'invalidRequest' | 'invalidResource' | 'invalidState' | 'notDeployed' | 'notSupported' | 'operationCanceled' | 'productLocked' | 'resourceNotFound' | 'schemaValidationError'
type AzureMarketplaceValidationLevelEnum = 'informational' | 'warning'


