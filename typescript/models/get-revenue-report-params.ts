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
import { RevenueReportType } from './revenue-report-type';

/**
 * 
 * @export
 * @interface GetRevenueReportParams
 */
export interface GetRevenueReportParams {
    /**
     * Optional, if available, return the report for the Buyer.
     * @type {string}
     * @memberof GetRevenueReportParams
     */
    'buyerID'?: string;
    /**
     * Optional, if available, return the report for the Entitlement.
     * @type {string}
     * @memberof GetRevenueReportParams
     */
    'entitlementID'?: string;
    /**
     * Required. If the productID & entitlementID are emtpy, return the report for the entire Organization.
     * @type {string}
     * @memberof GetRevenueReportParams
     */
    'organizationID': string;
    /**
     * Required.
     * @type {string}
     * @memberof GetRevenueReportParams
     */
    'partner': GetRevenueReportParamsPartnerEnum;
    /**
     * Optional, if available, return the report for the Product.
     * @type {string}
     * @memberof GetRevenueReportParams
     */
    'productID'?: string;
    /**
     * 
     * @type {RevenueReportType}
     * @memberof GetRevenueReportParams
     */
    'reportType': RevenueReportType;
    /**
     * Required.
     * @type {string}
     * @memberof GetRevenueReportParams
     */
    'service': GetRevenueReportParamsServiceEnum;
}

type GetRevenueReportParamsPartnerEnum = 'AWS' | 'AZURE' | 'GCP'
type GetRevenueReportParamsServiceEnum = 'MARKETPLACE'


