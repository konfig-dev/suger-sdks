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
import { SalesforceCrmCredential } from './salesforce-crm-credential';

/**
 * System created
 * @export
 * @interface SalesforceCrmIntegrationCredential
 */
export interface SalesforceCrmIntegrationCredential {
    /**
     * 
     * @type {string}
     * @memberof SalesforceCrmIntegrationCredential
     */
    'access_token'?: string;
    /**
     * 
     * @type {number}
     * @memberof SalesforceCrmIntegrationCredential
     */
    'exp'?: number;
    /**
     * 
     * @type {string}
     * @memberof SalesforceCrmIntegrationCredential
     */
    'instance_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof SalesforceCrmIntegrationCredential
     */
    'refresh_token'?: string;
}

