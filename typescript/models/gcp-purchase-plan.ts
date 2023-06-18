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
import { GcpCommerceProducerPriceInfo } from './gcp-commerce-producer-price-info';

/**
 * 
 * @export
 * @interface GcpPurchasePlan
 */
export interface GcpPurchasePlan {
    /**
     * The Plan title
     * @type {string}
     * @memberof GcpPurchasePlan
     */
    'title'?: string;
    /**
     * The Plan key.
     * @type {string}
     * @memberof GcpPurchasePlan
     */
    'name'?: string;
    /**
     * 
     * @type {GcpCommerceProducerPriceInfo}
     * @memberof GcpPurchasePlan
     */
    'priceInfo'?: GcpCommerceProducerPriceInfo;
    /**
     * 
     * @type {string}
     * @memberof GcpPurchasePlan
     */
    'purchaseMode'?: GcpPurchasePlanPurchaseModeEnum;
}

type GcpPurchasePlanPurchaseModeEnum = 'PURCHASE_MODE_PUBLIC'


