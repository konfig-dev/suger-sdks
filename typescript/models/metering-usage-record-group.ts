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
 * 
 * @export
 * @interface MeteringUsageRecordGroup
 */
export interface MeteringUsageRecordGroup {
    /**
     * 
     * @type {string}
     * @memberof MeteringUsageRecordGroup
     */
    'buyerID'?: string;
    /**
     * 
     * @type {string}
     * @memberof MeteringUsageRecordGroup
     */
    'creationTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof MeteringUsageRecordGroup
     */
    'entitlementID'?: string;
    /**
     * 
     * @type {string}
     * @memberof MeteringUsageRecordGroup
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof MeteringUsageRecordGroup
     */
    'lastUpdateTime'?: string;
    /**
     * 
     * @type {MeteringUsageRecordGroupMetaInfo}
     * @memberof MeteringUsageRecordGroup
     */
    'metaInfo'?: MeteringUsageRecordGroupMetaInfo;
    /**
     * 
     * @type {string}
     * @memberof MeteringUsageRecordGroup
     */
    'organizationID'?: string;
    /**
     * 
     * @type {string}
     * @memberof MeteringUsageRecordGroup
     */
    'partner'?: MeteringUsageRecordGroupPartnerEnum;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof MeteringUsageRecordGroup
     */
    'records'?: { [key: string]: number; };
    /**
     * 
     * @type {number}
     * @memberof MeteringUsageRecordGroup
     */
    'serialID'?: number;
    /**
     * 
     * @type {string}
     * @memberof MeteringUsageRecordGroup
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof MeteringUsageRecordGroup
     */
    'usageRecordReportID'?: string;
}

type MeteringUsageRecordGroupPartnerEnum = 'AWS' | 'AZURE' | 'GCP'


