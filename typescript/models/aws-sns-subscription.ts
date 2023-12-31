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
import { AwsSnsSubscriptionStatus } from './aws-sns-subscription-status';

/**
 * 
 * @export
 * @interface AwsSnsSubscription
 */
export interface AwsSnsSubscription {
    /**
     * 
     * @type {string}
     * @memberof AwsSnsSubscription
     */
    'Endpoint'?: string;
    /**
     * 
     * @type {string}
     * @memberof AwsSnsSubscription
     */
    'Protocol'?: string;
    /**
     * 
     * @type {AwsSnsSubscriptionStatus}
     * @memberof AwsSnsSubscription
     */
    'Status'?: AwsSnsSubscriptionStatus;
    /**
     * 
     * @type {string}
     * @memberof AwsSnsSubscription
     */
    'SubscriptionArn'?: string;
    /**
     * 
     * @type {string}
     * @memberof AwsSnsSubscription
     */
    'TopicArn'?: string;
}

