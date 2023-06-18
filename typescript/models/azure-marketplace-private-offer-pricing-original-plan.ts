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
import { AzureMarketplaceValidation } from './azure-marketplace-validation';
// May contain unused imports in some cases
// @ts-ignore
import { AzurePriceAndAvailabilityPrivateOfferPlan } from './azure-price-and-availability-private-offer-plan';
// May contain unused imports in some cases
// @ts-ignore
import { AzurePriceAndAvailabilityPrivateOfferPrice } from './azure-price-and-availability-private-offer-price';

/**
 * the pricing plan of the original plan.
 * @export
 * @interface AzureMarketplacePrivateOfferPricingOriginalPlan
 */
export interface AzureMarketplacePrivateOfferPricingOriginalPlan {
    /**
     * 
     * @type {string}
     * @memberof AzureMarketplacePrivateOfferPricingOriginalPlan
     */
    '$schema'?: string;
    /**
     * 
     * @type {string}
     * @memberof AzureMarketplacePrivateOfferPricingOriginalPlan
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AzureMarketplacePrivateOfferPricingOriginalPlan
     */
    'plan'?: string;
    /**
     * 
     * @type {AzurePriceAndAvailabilityPrivateOfferPrice}
     * @memberof AzureMarketplacePrivateOfferPricingOriginalPlan
     */
    'pricing'?: AzurePriceAndAvailabilityPrivateOfferPrice;
    /**
     * 
     * @type {string}
     * @memberof AzureMarketplacePrivateOfferPricingOriginalPlan
     */
    'product'?: string;
    /**
     * 
     * @type {string}
     * @memberof AzureMarketplacePrivateOfferPricingOriginalPlan
     */
    'resourceName'?: string;
    /**
     * 
     * @type {Array<AzureMarketplaceValidation>}
     * @memberof AzureMarketplacePrivateOfferPricingOriginalPlan
     */
    'validations'?: Array<AzureMarketplaceValidation>;
}

