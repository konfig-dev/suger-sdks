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
 * @interface GcpCommerceProducerServiceBilling
 */
export interface GcpCommerceProducerServiceBilling {
    /**
     * in format of [\"{product-name}.endpoints.{provider-id}.cloud.goog/{plan_key}_{usage_dimension_key}\"]
     * @type {Array<string>}
     * @memberof GcpCommerceProducerServiceBilling
     */
    'metrics'?: Array<string>;
}

