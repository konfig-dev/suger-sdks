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
import { AzureAudience } from './azure-audience';
// May contain unused imports in some cases
// @ts-ignore
import { AzureMarket } from './azure-market';
// May contain unused imports in some cases
// @ts-ignore
import { AzureMarketState } from './azure-market-state';
// May contain unused imports in some cases
// @ts-ignore
import { AzureProductVariantCustomMeter } from './azure-product-variant-custom-meter';
// May contain unused imports in some cases
// @ts-ignore
import { AzureProductVariantPriceSchedule } from './azure-product-variant-price-schedule';
// May contain unused imports in some cases
// @ts-ignore
import { AzureProductVariantTrial } from './azure-product-variant-trial';
// May contain unused imports in some cases
// @ts-ignore
import { AzureTypeValue } from './azure-type-value';

/**
 * 
 * @export
 * @interface AzureProductFeatureAvailability
 */
export interface AzureProductFeatureAvailability {
    /**
     * 
     * @type {Array<AzureProductVariantCustomMeter>}
     * @memberof AzureProductFeatureAvailability
     */
    'customMeters'?: Array<AzureProductVariantCustomMeter>;
    /**
     * 
     * @type {string}
     * @memberof AzureProductFeatureAvailability
     */
    'id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AzureProductFeatureAvailability
     */
    'isHidden'?: boolean;
    /**
     * 
     * @type {Array<AzureMarketState>}
     * @memberof AzureProductFeatureAvailability
     */
    'marketStates'?: Array<AzureMarketState>;
    /**
     * 
     * @type {Array<AzureMarket>}
     * @memberof AzureProductFeatureAvailability
     */
    'markets'?: Array<AzureMarket>;
    /**
     * 
     * @type {Array<AzureProductVariantPriceSchedule>}
     * @memberof AzureProductFeatureAvailability
     */
    'priceSchedules'?: Array<AzureProductVariantPriceSchedule>;
    /**
     * 
     * @type {Array<AzureTypeValue>}
     * @memberof AzureProductFeatureAvailability
     */
    'properties'?: Array<AzureTypeValue>;
    /**
     * ResourceType = FeatureAvailability
     * @type {string}
     * @memberof AzureProductFeatureAvailability
     */
    'resourceType'?: string;
    /**
     * 
     * @type {Array<AzureAudience>}
     * @memberof AzureProductFeatureAvailability
     */
    'subscriptionAudiences'?: Array<AzureAudience>;
    /**
     * 
     * @type {Array<AzureAudience>}
     * @memberof AzureProductFeatureAvailability
     */
    'tenantAudiences'?: Array<AzureAudience>;
    /**
     * 
     * @type {AzureProductVariantTrial}
     * @memberof AzureProductFeatureAvailability
     */
    'trial'?: AzureProductVariantTrial;
    /**
     * 
     * @type {string}
     * @memberof AzureProductFeatureAvailability
     */
    'visibility'?: AzureProductFeatureAvailabilityVisibilityEnum;
}

type AzureProductFeatureAvailabilityVisibilityEnum = 'Public' | 'Private'


