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
import { AwsAceIntegration } from './aws-ace-integration';
// May contain unused imports in some cases
// @ts-ignore
import { AwsIntegrationCredential } from './aws-integration-credential';

/**
 * AWS ACE Integration
 * @export
 * @interface IntegrationInfoAwsAceIntegration
 */
export interface IntegrationInfoAwsAceIntegration {
    /**
     * 
     * @type {AwsIntegrationCredential}
     * @memberof IntegrationInfoAwsAceIntegration
     */
    'credential'?: AwsIntegrationCredential;
    /**
     * The partner ID of the ISV/Seller in AWS Partner Network.
     * @type {string}
     * @memberof IntegrationInfoAwsAceIntegration
     */
    'partnerId'?: string;
    /**
     * The Name of the S3 bucket for AWS APN Customer Engagement Program (ACE) to sync the leads & opportunities.
     * @type {string}
     * @memberof IntegrationInfoAwsAceIntegration
     */
    's3BucketName'?: string;
    /**
     * The region of the S3 bucket for AWS APN Customer Engagement Program (ACE) to sync the leads & opportunities.
     * @type {string}
     * @memberof IntegrationInfoAwsAceIntegration
     */
    's3BucketRegion'?: string;
    /**
     * The secret key used to store the AzureIntegrationCredential in AWS Secret manager. for internal usage only.
     * @type {string}
     * @memberof IntegrationInfoAwsAceIntegration
     */
    'secretKey'?: string;
}
