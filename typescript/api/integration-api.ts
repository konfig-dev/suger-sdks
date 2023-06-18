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

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateIntegrationParams } from '../models';
// @ts-ignore
import { IdentityIntegration } from '../models';
// @ts-ignore
import { IntegrationInfo } from '../models';
// @ts-ignore
import { UpdateIntegrationParams } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
import { IntegrationApiCustom } from "./integration-api-custom";
/**
 * IntegrationApi - axios parameter creator
 * @export
 */
export const IntegrationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * For each organization, partner & service, there should be at most one integration.
         * @summary create integration
         * @param {string} orgId Organization ID
         * @param {CreateIntegrationParams} createIntegrationParams Create Integration Params
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (orgId: string, createIntegrationParams: CreateIntegrationParams, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('create', 'orgId', orgId)
            // verify required parameter 'createIntegrationParams' is not null or undefined
            assertParamExists('create', 'createIntegrationParams', createIntegrationParams)
            const localVarPath = `/org/{orgId}/integration`
                .replace(`{${"orgId"}}`, encodeURIComponent(String(orgId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerTokenAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "Authorization", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createIntegrationParams,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createIntegrationParams, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * delete the integration for the given orgId, partner and service.
         * @summary delete integration
         * @param {string} orgId Organization ID
         * @param {'AWS' | 'AZURE' | 'GCP'} partner Cloud Partner
         * @param {'MARKETPLACE' | 'CRM'} service Partner Service
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete: async (orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', service: 'MARKETPLACE' | 'CRM', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('delete', 'orgId', orgId)
            // verify required parameter 'partner' is not null or undefined
            assertParamExists('delete', 'partner', partner)
            // verify required parameter 'service' is not null or undefined
            assertParamExists('delete', 'service', service)
            const localVarPath = `/org/{orgId}/integration/{partner}/{service}`
                .replace(`{${"orgId"}}`, encodeURIComponent(String(orgId)))
                .replace(`{${"partner"}}`, encodeURIComponent(String(partner)))
                .replace(`{${"service"}}`, encodeURIComponent(String(service)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerTokenAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "Authorization", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the integration for the given organization, partner & service.
         * @summary get integration
         * @param {string} orgId Organization ID
         * @param {'AWS' | 'AZURE' | 'GCP'} partner Cloud Partner
         * @param {'MARKETPLACE' | 'CRM'} service Partner Service
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', service: 'MARKETPLACE' | 'CRM', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('get', 'orgId', orgId)
            // verify required parameter 'partner' is not null or undefined
            assertParamExists('get', 'partner', partner)
            // verify required parameter 'service' is not null or undefined
            assertParamExists('get', 'service', service)
            const localVarPath = `/org/{orgId}/integration/{partner}/{service}`
                .replace(`{${"orgId"}}`, encodeURIComponent(String(orgId)))
                .replace(`{${"partner"}}`, encodeURIComponent(String(partner)))
                .replace(`{${"service"}}`, encodeURIComponent(String(service)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerTokenAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "Authorization", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all integrations for the given organization.
         * @summary list integrations by organization
         * @param {string} orgId Organization ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listByOrganization: async (orgId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('listByOrganization', 'orgId', orgId)
            const localVarPath = `/org/{orgId}/integration`
                .replace(`{${"orgId"}}`, encodeURIComponent(String(orgId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerTokenAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "Authorization", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update the given integration.
         * @summary update integration
         * @param {string} orgId Organization ID
         * @param {'AWS' | 'AZURE' | 'GCP'} partner Cloud Partner
         * @param {'MARKETPLACE' | 'CRM'} service Partner Service
         * @param {UpdateIntegrationParams} updateIntegrationParams Update Integration Params
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update: async (orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', service: 'MARKETPLACE' | 'CRM', updateIntegrationParams: UpdateIntegrationParams, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('update', 'orgId', orgId)
            // verify required parameter 'partner' is not null or undefined
            assertParamExists('update', 'partner', partner)
            // verify required parameter 'service' is not null or undefined
            assertParamExists('update', 'service', service)
            // verify required parameter 'updateIntegrationParams' is not null or undefined
            assertParamExists('update', 'updateIntegrationParams', updateIntegrationParams)
            const localVarPath = `/org/{orgId}/integration/{partner}/{service}`
                .replace(`{${"orgId"}}`, encodeURIComponent(String(orgId)))
                .replace(`{${"partner"}}`, encodeURIComponent(String(partner)))
                .replace(`{${"service"}}`, encodeURIComponent(String(service)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerTokenAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "Authorization", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: updateIntegrationParams,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateIntegrationParams, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Verify the given integration, check whether it works correctly.
         * @summary verify integration
         * @param {string} orgId Organization ID
         * @param {'AWS' | 'AZURE' | 'GCP'} partner Cloud Partner
         * @param {'MARKETPLACE' | 'CRM'} service Partner Service
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verify: async (orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', service: 'MARKETPLACE' | 'CRM', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('verify', 'orgId', orgId)
            // verify required parameter 'partner' is not null or undefined
            assertParamExists('verify', 'partner', partner)
            // verify required parameter 'service' is not null or undefined
            assertParamExists('verify', 'service', service)
            const localVarPath = `/org/{orgId}/integration/{partner}/{service}/verify`
                .replace(`{${"orgId"}}`, encodeURIComponent(String(orgId)))
                .replace(`{${"partner"}}`, encodeURIComponent(String(partner)))
                .replace(`{${"service"}}`, encodeURIComponent(String(service)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerTokenAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "Authorization", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * IntegrationApi - functional programming interface
 * @export
 */
export const IntegrationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = IntegrationApiAxiosParamCreator(configuration)
    return {
        /**
         * For each organization, partner & service, there should be at most one integration.
         * @summary create integration
         * @param {IntegrationApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: IntegrationApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdentityIntegration>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(requestParameters.orgId, requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * delete the integration for the given orgId, partner and service.
         * @summary delete integration
         * @param {IntegrationApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete(requestParameters: IntegrationApiDeleteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete(requestParameters.orgId, requestParameters.partner, requestParameters.service, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the integration for the given organization, partner & service.
         * @summary get integration
         * @param {IntegrationApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: IntegrationApiGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdentityIntegration>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.orgId, requestParameters.partner, requestParameters.service, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all integrations for the given organization.
         * @summary list integrations by organization
         * @param {IntegrationApiListByOrganizationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listByOrganization(requestParameters: IntegrationApiListByOrganizationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<IdentityIntegration>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listByOrganization(requestParameters.orgId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update the given integration.
         * @summary update integration
         * @param {IntegrationApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(requestParameters: IntegrationApiUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdentityIntegration>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update(requestParameters.orgId, requestParameters.partner, requestParameters.service, requestParameters.requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Verify the given integration, check whether it works correctly.
         * @summary verify integration
         * @param {IntegrationApiVerifyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verify(requestParameters: IntegrationApiVerifyRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verify(requestParameters.orgId, requestParameters.partner, requestParameters.service, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * IntegrationApi - factory interface
 * @export
 */
export const IntegrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = IntegrationApiFp(configuration)
    return {
        /**
         * For each organization, partner & service, there should be at most one integration.
         * @summary create integration
         * @param {IntegrationApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: IntegrationApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<IdentityIntegration> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * delete the integration for the given orgId, partner and service.
         * @summary delete integration
         * @param {IntegrationApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete(requestParameters: IntegrationApiDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.delete(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the integration for the given organization, partner & service.
         * @summary get integration
         * @param {IntegrationApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: IntegrationApiGetRequest, options?: AxiosRequestConfig): AxiosPromise<IdentityIntegration> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List all integrations for the given organization.
         * @summary list integrations by organization
         * @param {IntegrationApiListByOrganizationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listByOrganization(requestParameters: IntegrationApiListByOrganizationRequest, options?: AxiosRequestConfig): AxiosPromise<Array<IdentityIntegration>> {
            return localVarFp.listByOrganization(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update the given integration.
         * @summary update integration
         * @param {IntegrationApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update(requestParameters: IntegrationApiUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<IdentityIntegration> {
            return localVarFp.update(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Verify the given integration, check whether it works correctly.
         * @summary verify integration
         * @param {IntegrationApiVerifyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verify(requestParameters: IntegrationApiVerifyRequest, options?: AxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.verify(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in IntegrationApi.
 * @export
 * @interface IntegrationApiCreateRequest
 */
export type IntegrationApiCreateRequest = {
    
    /**
    * Organization ID
    * @type {string}
    * @memberof IntegrationApiCreate
    */
    readonly orgId: string
    
} & CreateIntegrationParams

/**
 * Request parameters for delete operation in IntegrationApi.
 * @export
 * @interface IntegrationApiDeleteRequest
 */
export type IntegrationApiDeleteRequest = {
    
    /**
    * Organization ID
    * @type {string}
    * @memberof IntegrationApiDelete
    */
    readonly orgId: string
    
    /**
    * Cloud Partner
    * @type {'AWS' | 'AZURE' | 'GCP'}
    * @memberof IntegrationApiDelete
    */
    readonly partner: 'AWS' | 'AZURE' | 'GCP'
    
    /**
    * Partner Service
    * @type {'MARKETPLACE' | 'CRM'}
    * @memberof IntegrationApiDelete
    */
    readonly service: 'MARKETPLACE' | 'CRM'
    
}

/**
 * Request parameters for get operation in IntegrationApi.
 * @export
 * @interface IntegrationApiGetRequest
 */
export type IntegrationApiGetRequest = {
    
    /**
    * Organization ID
    * @type {string}
    * @memberof IntegrationApiGet
    */
    readonly orgId: string
    
    /**
    * Cloud Partner
    * @type {'AWS' | 'AZURE' | 'GCP'}
    * @memberof IntegrationApiGet
    */
    readonly partner: 'AWS' | 'AZURE' | 'GCP'
    
    /**
    * Partner Service
    * @type {'MARKETPLACE' | 'CRM'}
    * @memberof IntegrationApiGet
    */
    readonly service: 'MARKETPLACE' | 'CRM'
    
}

/**
 * Request parameters for listByOrganization operation in IntegrationApi.
 * @export
 * @interface IntegrationApiListByOrganizationRequest
 */
export type IntegrationApiListByOrganizationRequest = {
    
    /**
    * Organization ID
    * @type {string}
    * @memberof IntegrationApiListByOrganization
    */
    readonly orgId: string
    
}

/**
 * Request parameters for update operation in IntegrationApi.
 * @export
 * @interface IntegrationApiUpdateRequest
 */
export type IntegrationApiUpdateRequest = {
    /**
    * Organization ID
    * @type {string}
    * @memberof IntegrationApiUpdate
    */
    readonly orgId: string
    /**
    * Cloud Partner
    * @type {'AWS' | 'AZURE' | 'GCP'}
    * @memberof IntegrationApiUpdate
    */
    readonly partner: 'AWS' | 'AZURE' | 'GCP'
    /**
    * Partner Service
    * @type {'MARKETPLACE' | 'CRM'}
    * @memberof IntegrationApiUpdate
    */
    readonly service: 'MARKETPLACE' | 'CRM'
    /**
    * Update Integration Params
    * @type {UpdateIntegrationParams}
    * @memberof IntegrationApiUpdate
    */
    readonly requestBody: UpdateIntegrationParams
}

/**
 * Request parameters for verify operation in IntegrationApi.
 * @export
 * @interface IntegrationApiVerifyRequest
 */
export type IntegrationApiVerifyRequest = {
    
    /**
    * Organization ID
    * @type {string}
    * @memberof IntegrationApiVerify
    */
    readonly orgId: string
    
    /**
    * Cloud Partner
    * @type {'AWS' | 'AZURE' | 'GCP'}
    * @memberof IntegrationApiVerify
    */
    readonly partner: 'AWS' | 'AZURE' | 'GCP'
    
    /**
    * Partner Service
    * @type {'MARKETPLACE' | 'CRM'}
    * @memberof IntegrationApiVerify
    */
    readonly service: 'MARKETPLACE' | 'CRM'
    
}

/**
 * IntegrationApi - object-oriented interface
 * @export
 * @class IntegrationApi
 * @extends {BaseAPI}
 */
export class IntegrationApi extends IntegrationApiCustom {
    /**
     * For each organization, partner & service, there should be at most one integration.
     * @summary create integration
     * @param {IntegrationApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    public create(requestParameters: IntegrationApiCreateRequest, options?: AxiosRequestConfig) {
        return IntegrationApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * delete the integration for the given orgId, partner and service.
     * @summary delete integration
     * @param {IntegrationApiDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    public delete(requestParameters: IntegrationApiDeleteRequest, options?: AxiosRequestConfig) {
        return IntegrationApiFp(this.configuration).delete(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the integration for the given organization, partner & service.
     * @summary get integration
     * @param {IntegrationApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    public get(requestParameters: IntegrationApiGetRequest, options?: AxiosRequestConfig) {
        return IntegrationApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all integrations for the given organization.
     * @summary list integrations by organization
     * @param {IntegrationApiListByOrganizationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    public listByOrganization(requestParameters: IntegrationApiListByOrganizationRequest, options?: AxiosRequestConfig) {
        return IntegrationApiFp(this.configuration).listByOrganization(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update the given integration.
     * @summary update integration
     * @param {IntegrationApiUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    public update(requestParameters: IntegrationApiUpdateRequest, options?: AxiosRequestConfig) {
        return IntegrationApiFp(this.configuration).update(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Verify the given integration, check whether it works correctly.
     * @summary verify integration
     * @param {IntegrationApiVerifyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    public verify(requestParameters: IntegrationApiVerifyRequest, options?: AxiosRequestConfig) {
        return IntegrationApiFp(this.configuration).verify(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
