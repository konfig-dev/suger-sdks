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


/**
 * 
 * @export
 * @interface GcpIntegration
 */
export interface GcpIntegration {
    /**
     * 
     * @type {string}
     * @memberof GcpIntegration
     */
    'gcpProjectId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GcpIntegration
     */
    'gcpProjectNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof GcpIntegration
     */
    'identityProviderId'?: string;
    /**
     * The GCP Marketplace Partner ID, it is also called as Provider ID somewhere.
     * @type {string}
     * @memberof GcpIntegration
     */
    'partnerId'?: string;
    /**
     * The resource name of the Pub/Sub topic to receive notifications from Google when a user signs up for your service, purchases a plan, or changes an existing plan.
     * @type {string}
     * @memberof GcpIntegration
     */
    'pubsubTopic'?: string;
    /**
     * The GCP storage bucket name to store the GCP Marketplace reports.
     * @type {string}
     * @memberof GcpIntegration
     */
    'reportBucket'?: string;
    /**
     * Is GCP Marketplace Report full-sync done.
     * @type {boolean}
     * @memberof GcpIntegration
     */
    'reportFullSyncDone'?: boolean;
    /**
     * The UTC date when GCP Marketplace reprots start to generate.
     * @type {string}
     * @memberof GcpIntegration
     */
    'reportStartDate'?: string;
    /**
     * Disable GCP Marketplace Report sync. If true, Suger stop to sync GCP Marketplace reports.
     * @type {boolean}
     * @memberof GcpIntegration
     */
    'reportSyncDisabled'?: boolean;
    /**
     * Is GCP Marketplace Revenue Record full-sync done.
     * @type {boolean}
     * @memberof GcpIntegration
     */
    'revenueRecordFullSyncDone'?: boolean;
    /**
     * Disable GCP Marketplace Revenue Record sync. If true, Suger stop to sync GCP Marketplace Revenue Records.
     * @type {boolean}
     * @memberof GcpIntegration
     */
    'revenueRecordSyncDisabled'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GcpIntegration
     */
    'serviceAccountEmail'?: string;
    /**
     * The array of service resource names of the listings in GCP Marketplace.
     * @type {Array<string>}
     * @memberof GcpIntegration
     */
    'serviceNames'?: Array<string>;
    /**
     * Disable Usage Metering to GCP Marketplace. If true, Suger stop to report usage records to GCP Marketplace.
     * @type {boolean}
     * @memberof GcpIntegration
     */
    'usageMeteringDisabled'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GcpIntegration
     */
    'workloadIdentityPoolId'?: string;
}

