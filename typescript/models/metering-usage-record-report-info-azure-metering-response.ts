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
import { GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1BatchUsageEventOkResponse } from './github-com-sugerio-marketplace-service-azure-sdk-marketplacemeteringv1-batch-usage-event-ok-response';
// May contain unused imports in some cases
// @ts-ignore
import { GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1UsageBatchEventOkMessage } from './github-com-sugerio-marketplace-service-azure-sdk-marketplacemeteringv1-usage-batch-event-ok-message';

/**
 * The raw response from Azure metering service.
 * @export
 * @interface MeteringUsageRecordReportInfoAzureMeteringResponse
 */
export interface MeteringUsageRecordReportInfoAzureMeteringResponse {
    /**
     * 
     * @type {number}
     * @memberof MeteringUsageRecordReportInfoAzureMeteringResponse
     */
    'count'?: number;
    /**
     * 
     * @type {Array<GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1UsageBatchEventOkMessage>}
     * @memberof MeteringUsageRecordReportInfoAzureMeteringResponse
     */
    'result'?: Array<GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1UsageBatchEventOkMessage>;
}

