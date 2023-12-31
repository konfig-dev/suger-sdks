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
 * @interface AzureIntegrationCredential
 */
export interface AzureIntegrationCredential {
    /**
     * 
     * @type {string}
     * @memberof AzureIntegrationCredential
     */
    'accessToken'?: string;
    /**
     * 
     * @type {string}
     * @memberof AzureIntegrationCredential
     */
    'clientID'?: string;
    /**
     * 
     * @type {string}
     * @memberof AzureIntegrationCredential
     */
    'clientSecret'?: string;
    /**
     * The time when the access token expires.
     * @type {string}
     * @memberof AzureIntegrationCredential
     */
    'expiresOn'?: string;
    /**
     * The refresh token used to refresh the access token.
     * @type {string}
     * @memberof AzureIntegrationCredential
     */
    'refreshToken'?: string;
    /**
     * 
     * @type {string}
     * @memberof AzureIntegrationCredential
     */
    'tenantID'?: string;
    /**
     * 
     * @type {string}
     * @memberof AzureIntegrationCredential
     */
    'tokenScope'?: string;
    /**
     * 
     * @type {string}
     * @memberof AzureIntegrationCredential
     */
    'tokenType'?: string;
}

