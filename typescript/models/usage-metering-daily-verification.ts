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
import { Partner } from './partner';

/**
 * 
 * @export
 * @interface UsageMeteringDailyVerification
 */
export interface UsageMeteringDailyVerification {
    /**
     * The amount of the usage metering billed by the cloud marketplace metering service.
     * @type {number}
     * @memberof UsageMeteringDailyVerification
     */
    'billedAmount'?: number;
    /**
     * The date when the usage metering is billed by the cloud marketplace metering service.
     * @type {string}
     * @memberof UsageMeteringDailyVerification
     */
    'billedDate'?: string;
    /**
     * The quantity of the usage metering billed by the cloud marketplace metering service.
     * @type {number}
     * @memberof UsageMeteringDailyVerification
     */
    'billedQuantity'?: number;
    /**
     * Whether the amount is matched between reported & billed usage metering.
     * @type {boolean}
     * @memberof UsageMeteringDailyVerification
     */
    'isAmountMatched'?: boolean;
    /**
     * Whether the quantity is matched between reported & billed usage metering.
     * @type {boolean}
     * @memberof UsageMeteringDailyVerification
     */
    'isQuantityMatched'?: boolean;
    /**
     * The dimension key of the usage metering.
     * @type {string}
     * @memberof UsageMeteringDailyVerification
     */
    'key'?: string;
    /**
     * The partner where this usage metering daily record is from. Such as AWS, AZURE or GCP.
     * @type {Partner}
     * @memberof UsageMeteringDailyVerification
     */
    'partner'?: Partner;
    /**
     * The amount of the usage metering reported to the cloud marketplace.
     * @type {number}
     * @memberof UsageMeteringDailyVerification
     */
    'reportedAmount'?: number;
    /**
     * The date when the usage metering is reported to the cloud marketplace.
     * @type {string}
     * @memberof UsageMeteringDailyVerification
     */
    'reportedDate'?: string;
    /**
     * The quantity of the usage metering reported to the cloud marketplace.
     * @type {number}
     * @memberof UsageMeteringDailyVerification
     */
    'reportedQuantity'?: number;
}

