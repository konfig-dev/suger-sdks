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
import { CommitDimensionTimeUnit } from './commit-dimension-time-unit';
// May contain unused imports in some cases
// @ts-ignore
import { CommitDimensionType } from './commit-dimension-type';

/**
 * The commit dimension. There may be one or more commit dimensions defined in single product, offer or entitlement.
 * @export
 * @interface CommitDimension
 */
export interface CommitDimension {
    /**
     * 
     * @type {string}
     * @memberof CommitDimension
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommitDimension
     */
    'category'?: string;
    /**
     * Whether this commit dimension is newly created by user when creating AWS Marketplace Contract private offer.
     * @type {boolean}
     * @memberof CommitDimension
     */
    'isUserCreated'?: boolean;
    /**
     * API name of the dimension
     * @type {string}
     * @memberof CommitDimension
     */
    'key'?: string;
    /**
     * The term length for the commit amount, such as 6 months, or 1 year. length is used together with timeUnit
     * @type {number}
     * @memberof CommitDimension
     */
    'length'?: number;
    /**
     * The maximum number of users for PER_USER commit
     * @type {number}
     * @memberof CommitDimension
     */
    'maximumUsers'?: number;
    /**
     * The minimum number of users for PER_USER commit
     * @type {number}
     * @memberof CommitDimension
     */
    'minimumUsers'?: number;
    /**
     * Display name of the dimension
     * @type {string}
     * @memberof CommitDimension
     */
    'name'?: string;
    /**
     * The quantity of this commit.
     * @type {number}
     * @memberof CommitDimension
     */
    'quantity'?: number;
    /**
     * The commit amount.
     * @type {number}
     * @memberof CommitDimension
     */
    'rate'?: number;
    /**
     * The term unit for the commit amount.
     * @type {CommitDimensionTimeUnit}
     * @memberof CommitDimension
     */
    'timeUnit'?: CommitDimensionTimeUnit;
    /**
     * 
     * @type {CommitDimensionType}
     * @memberof CommitDimension
     */
    'type'?: CommitDimensionType;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommitDimension
     */
    'types'?: Array<string>;
}

