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
 * @interface AwsIntegrationCredential
 */
export interface AwsIntegrationCredential {
    /**
     * The access key ID of the IAM user for Suger service to access the client\'s AWS services.
     * @type {string}
     * @memberof AwsIntegrationCredential
     */
    'accessKeyId'?: string;
    /**
     * The ARN of the IAM user for Suger service to access the client\'s AWS services.
     * @type {string}
     * @memberof AwsIntegrationCredential
     */
    'iamUserArn'?: string;
    /**
     * The secret access key of the IAM user for Suger service to access the client\'s AWS services.
     * @type {string}
     * @memberof AwsIntegrationCredential
     */
    'secretAccessKey'?: string;
}

