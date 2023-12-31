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
import { AzurePriceAndAvailabilityRecurrentPriceItem } from './azure-price-and-availability-recurrent-price-item';

/**
 * 
 * @export
 * @interface AzurePriceAndAvailabilityRecurrentPrice
 */
export interface AzurePriceAndAvailabilityRecurrentPrice {
    /**
     * default \"usd\"
     * @type {string}
     * @memberof AzurePriceAndAvailabilityRecurrentPrice
     */
    'priceInputOption'?: AzurePriceAndAvailabilityRecurrentPricePriceInputOptionEnum;
    /**
     * 
     * @type {Array<AzurePriceAndAvailabilityRecurrentPriceItem>}
     * @memberof AzurePriceAndAvailabilityRecurrentPrice
     */
    'prices'?: Array<AzurePriceAndAvailabilityRecurrentPriceItem>;
}

type AzurePriceAndAvailabilityRecurrentPricePriceInputOptionEnum = 'perMarket' | 'usd'


