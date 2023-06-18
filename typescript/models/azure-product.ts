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
import { AzureProductAvailability } from './azure-product-availability';
// May contain unused imports in some cases
// @ts-ignore
import { AzureProductBranch } from './azure-product-branch';
// May contain unused imports in some cases
// @ts-ignore
import { AzureProductListing } from './azure-product-listing';
// May contain unused imports in some cases
// @ts-ignore
import { AzureProductPackageConfiguration } from './azure-product-package-configuration';
// May contain unused imports in some cases
// @ts-ignore
import { AzureProductProperty } from './azure-product-property';
// May contain unused imports in some cases
// @ts-ignore
import { AzureProductSetup } from './azure-product-setup';
// May contain unused imports in some cases
// @ts-ignore
import { AzureProductSubmission } from './azure-product-submission';
// May contain unused imports in some cases
// @ts-ignore
import { AzureProductVariant } from './azure-product-variant';
// May contain unused imports in some cases
// @ts-ignore
import { AzureTypeValue } from './azure-type-value';

/**
 * 
 * @export
 * @interface AzureProduct
 */
export interface AzureProduct {
    /**
     * 
     * @type {Array<AzureProductAvailability>}
     * @memberof AzureProduct
     */
    'availabilities'?: Array<AzureProductAvailability>;
    /**
     * 
     * @type {Array<AzureProductBranch>}
     * @memberof AzureProduct
     */
    'branches'?: Array<AzureProductBranch>;
    /**
     * 
     * @type {Array<AzureTypeValue>}
     * @memberof AzureProduct
     */
    'externalIDs'?: Array<AzureTypeValue>;
    /**
     * 
     * @type {string}
     * @memberof AzureProduct
     */
    'id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AzureProduct
     */
    'isModularPublishing'?: boolean;
    /**
     * 
     * @type {Array<AzureProductListing>}
     * @memberof AzureProduct
     */
    'listings'?: Array<AzureProductListing>;
    /**
     * 
     * @type {string}
     * @memberof AzureProduct
     */
    'name'?: string;
    /**
     * 
     * @type {Array<AzureProductPackageConfiguration>}
     * @memberof AzureProduct
     */
    'packageConfigurations'?: Array<AzureProductPackageConfiguration>;
    /**
     * 
     * @type {Array<AzureProductProperty>}
     * @memberof AzureProduct
     */
    'properties'?: Array<AzureProductProperty>;
    /**
     * 
     * @type {string}
     * @memberof AzureProduct
     */
    'resourceType'?: string;
    /**
     * 
     * @type {AzureProductSetup}
     * @memberof AzureProduct
     */
    'setup'?: AzureProductSetup;
    /**
     * 
     * @type {Array<AzureProductSubmission>}
     * @memberof AzureProduct
     */
    'submissions'?: Array<AzureProductSubmission>;
    /**
     * 
     * @type {Array<AzureProductVariant>}
     * @memberof AzureProduct
     */
    'variants'?: Array<AzureProductVariant>;
}
