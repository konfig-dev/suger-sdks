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
import { AzureAudience } from './azure-audience';

/**
 * 
 * @export
 * @interface AzureProductAvailability
 */
export interface AzureProductAvailability {
    /**
     * 
     * @type {Array<AzureAudience>}
     * @memberof AzureProductAvailability
     */
    'emailAudiences'?: Array<AzureAudience>;
    /**
     * 
     * @type {string}
     * @memberof AzureProductAvailability
     */
    'enterpriseLicensing'?: string;
    /**
     * 
     * @type {string}
     * @memberof AzureProductAvailability
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AzureProductAvailability
     */
    'resourceType'?: string;
    /**
     * 
     * @type {Array<AzureAudience>}
     * @memberof AzureProductAvailability
     */
    'subscriptionAudiences'?: Array<AzureAudience>;
    /**
     * 
     * @type {string}
     * @memberof AzureProductAvailability
     */
    'visibility'?: string;
}

