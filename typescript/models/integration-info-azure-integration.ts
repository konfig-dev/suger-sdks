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
import { AzureIntegration } from './azure-integration';
// May contain unused imports in some cases
// @ts-ignore
import { AzureIntegrationCredential } from './azure-integration-credential';

/**
 * Azure Marketplace Integration
 * @export
 * @interface IntegrationInfoAzureIntegration
 */
export interface IntegrationInfoAzureIntegration {
    /**
     * Is Azure Commercial Marketplace Analytics (CMA) full-sync done.
     * @type {boolean}
     * @memberof IntegrationInfoAzureIntegration
     */
    'cmaFullSyncDone'?: boolean;
    /**
     * 
     * @type {AzureIntegrationCredential}
     * @memberof IntegrationInfoAzureIntegration
     */
    'credential'?: AzureIntegrationCredential;
    /**
     * The secret key used to store the AzureIntegrationCredential in AWS Secret manager. for internal usage only.
     * @type {string}
     * @memberof IntegrationInfoAzureIntegration
     */
    'secretKey'?: string;
}
