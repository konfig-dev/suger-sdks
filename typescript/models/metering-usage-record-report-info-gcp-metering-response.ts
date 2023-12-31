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
import { ServicecontrolReportError } from './servicecontrol-report-error';
// May contain unused imports in some cases
// @ts-ignore
import { ServicecontrolReportResponse } from './servicecontrol-report-response';

/**
 * The raw response from GCP metering service.
 * @export
 * @interface MeteringUsageRecordReportInfoGcpMeteringResponse
 */
export interface MeteringUsageRecordReportInfoGcpMeteringResponse {
    /**
     * ReportErrors: Partial failures, one for each `Operation` in the request that failed processing. There are three possible combinations of the RPC status: 1. The combination of a successful RPC status and an empty `report_errors` list indicates a complete success where all `Operations` in the request are processed successfully. 2. The combination of a successful RPC status and a non-empty `report_errors` list indicates a partial success where some `Operations` in the request succeeded. Each `Operation` that failed processing has a corresponding item in this list. 3. A failed RPC status indicates a general non-deterministic failure. When this happens, it\'s impossible to know which of the \'Operations\' in the request succeeded or failed.
     * @type {Array<ServicecontrolReportError>}
     * @memberof MeteringUsageRecordReportInfoGcpMeteringResponse
     */
    'reportErrors'?: Array<ServicecontrolReportError>;
    /**
     * ServiceConfigId: The actual config id used to process the request.
     * @type {string}
     * @memberof MeteringUsageRecordReportInfoGcpMeteringResponse
     */
    'serviceConfigId'?: string;
    /**
     * ServiceRolloutId: The current service rollout id used to process the request.
     * @type {string}
     * @memberof MeteringUsageRecordReportInfoGcpMeteringResponse
     */
    'serviceRolloutId'?: string;
}

