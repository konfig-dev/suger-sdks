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
import { BuyerInfoAwsBuyer } from './buyer-info-aws-buyer';
// May contain unused imports in some cases
// @ts-ignore
import { BuyerInfoAzureBuyer } from './buyer-info-azure-buyer';
// May contain unused imports in some cases
// @ts-ignore
import { BuyerInfoGcpBuyer } from './buyer-info-gcp-buyer';

/**
 * 
 * @export
 * @interface BuyerInfo
 */
export interface BuyerInfo {
    /**
     * 
     * @type {BuyerInfoAwsBuyer}
     * @memberof BuyerInfo
     */
    'awsBuyer'?: BuyerInfoAwsBuyer;
    /**
     * 
     * @type {BuyerInfoAzureBuyer}
     * @memberof BuyerInfo
     */
    'azureBuyer'?: BuyerInfoAzureBuyer;
    /**
     * The amount that the seller can collect. It excludes the marketplace commision fee.
     * @type {number}
     * @memberof BuyerInfo
     */
    'collectableAmount'?: number;
    /**
     * The amount that has been disbursed to the seller account.
     * @type {number}
     * @memberof BuyerInfo
     */
    'disbursedAmount'?: number;
    /**
     * 
     * @type {BuyerInfoGcpBuyer}
     * @memberof BuyerInfo
     */
    'gcpBuyer'?: BuyerInfoGcpBuyer;
    /**
     * The amount that the buyer has got invoiced.
     * @type {number}
     * @memberof BuyerInfo
     */
    'invoicedAmount'?: number;
}
