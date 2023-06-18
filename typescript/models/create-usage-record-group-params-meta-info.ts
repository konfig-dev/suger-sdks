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
import { MeteringUsageRecordGroupMetaInfo } from './metering-usage-record-group-meta-info';

/**
 * read-only, don\'t set it when reporting the usage record group.
 * @export
 * @interface CreateUsageRecordGroupParamsMetaInfo
 */
export interface CreateUsageRecordGroupParamsMetaInfo {
    /**
     * The original records reported by the customer before convertion. If no dimension mapping is applied, this field is the same as the records field.
     * @type {{ [key: string]: number; }}
     * @memberof CreateUsageRecordGroupParamsMetaInfo
     */
    'originRecords'?: { [key: string]: number; };
}
