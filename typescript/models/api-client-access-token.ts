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
 * @interface ApiClientAccessToken
 */
export interface ApiClientAccessToken {
    /**
     * 
     * @type {string}
     * @memberof ApiClientAccessToken
     */
    'access_token'?: string;
    /**
     * The token expires in 1 hour
     * @type {number}
     * @memberof ApiClientAccessToken
     */
    'expires_in'?: number;
    /**
     * The UTC timestamp when the token expires
     * @type {string}
     * @memberof ApiClientAccessToken
     */
    'expires_on'?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiClientAccessToken
     */
    'token_type'?: string;
}

