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
import { AzureIncludedBaseQuantity } from './azure-included-base-quantity';
// May contain unused imports in some cases
// @ts-ignore
import { MeteringDimensionUsageCount } from './metering-dimension-usage-count';
// May contain unused imports in some cases
// @ts-ignore
import { SharedValueType } from './shared-value-type';

/**
 * The dimension to meter usage in entitlement.
 * @export
 * @interface MeteringDimension
 */
export interface MeteringDimension {
    /**
     * 
     * @type {string}
     * @memberof MeteringDimension
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof MeteringDimension
     */
    'category'?: string;
    /**
     * how many quantities of this dimension are included in the commit.
     * @type {Array<AzureIncludedBaseQuantity>}
     * @memberof MeteringDimension
     */
    'includedBaseQuantities'?: Array<AzureIncludedBaseQuantity>;
    /**
     * 
     * @type {string}
     * @memberof MeteringDimension
     */
    'key'?: string;
    /**
     * Display name of the dimension
     * @type {string}
     * @memberof MeteringDimension
     */
    'name'?: string;
    /**
     * The unit price of this usage metering dimension.
     * @type {number}
     * @memberof MeteringDimension
     */
    'rate'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof MeteringDimension
     */
    'types'?: Array<string>;
    /**
     * 
     * @type {MeteringDimensionUsageCount}
     * @memberof MeteringDimension
     */
    'usageCount'?: MeteringDimensionUsageCount;
    /**
     * 
     * @type {SharedValueType}
     * @memberof MeteringDimension
     */
    'valueType'?: SharedValueType;
}

