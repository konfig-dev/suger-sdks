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
import { GcpCommerceProducerPriceTierPrice } from './gcp-commerce-producer-price-tier-price';

/**
 * 
 * @export
 * @interface GcpCommerceProducerPriceTier
 */
export interface GcpCommerceProducerPriceTier {
    /**
     * The usage amount below which this tier is effective.
     * @type {number}
     * @memberof GcpCommerceProducerPriceTier
     */
    'endUsageAmount'?: number;
    /**
     * 
     * @type {GcpCommerceProducerPriceTierPrice}
     * @memberof GcpCommerceProducerPriceTier
     */
    'price'?: GcpCommerceProducerPriceTierPrice;
    /**
     * The usage amount beyond which this tier is effective.
     * @type {number}
     * @memberof GcpCommerceProducerPriceTier
     */
    'startUsageAmount'?: number;
}
