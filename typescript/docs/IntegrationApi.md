# IntegrationApi

All URIs are relative to *https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](IntegrationApi.md#create) | **POST** /org/{orgId}/integration | create integration
[**delete**](IntegrationApi.md#delete) | **DELETE** /org/{orgId}/integration/{partner}/{service} | delete integration
[**get**](IntegrationApi.md#get) | **GET** /org/{orgId}/integration/{partner}/{service} | get integration
[**listByOrganization**](IntegrationApi.md#listByOrganization) | **GET** /org/{orgId}/integration | list integrations by organization
[**update**](IntegrationApi.md#update) | **PATCH** /org/{orgId}/integration/{partner}/{service} | update integration
[**verify**](IntegrationApi.md#verify) | **POST** /org/{orgId}/integration/{partner}/{service}/verify | verify integration


# **create**

#### **POST** /org/{orgId}/integration

### Description
For each organization, partner & service, there should be at most one integration.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const createResponse = await suger.integration.create({
  orgId: "orgId_example",
  info: {},
  organization_id: "organization_id_example",
  partner: "AWS",
  service: "MARKETPLACE",
});

console.log(createResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createIntegrationParams** | **CreateIntegrationParams**| Create Integration Params |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**IdentityIntegration**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error description |  -  |
**500** | internal error description |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **delete**

#### **DELETE** /org/{orgId}/integration/{partner}/{service}

### Description
delete the integration for the given orgId, partner and service.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const deleteResponse = await suger.integration.delete({
  orgId: "orgId_example",
  partner: "AWS",
  service: "MARKETPLACE",
});

console.log(deleteResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | 'AWS', 'AZURE', 'GCP' | Cloud Partner | defaults to undefined
 **service** | 'MARKETPLACE', 'CRM' | Partner Service | defaults to undefined


### Return type

**string**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Empty string if deletion is successful |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **get**

#### **GET** /org/{orgId}/integration/{partner}/{service}

### Description
Get the integration for the given organization, partner & service.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const getResponse = await suger.integration.get({
  orgId: "orgId_example",
  partner: "AWS",
  service: "MARKETPLACE",
});

console.log(getResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | 'AWS', 'AZURE', 'GCP' | Cloud Partner | defaults to undefined
 **service** | 'MARKETPLACE', 'CRM' | Partner Service | defaults to undefined


### Return type

**IdentityIntegration**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Integration not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listByOrganization**

#### **GET** /org/{orgId}/integration

### Description
List all integrations for the given organization.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listByOrganizationResponse = await suger.integration.listByOrganization({
  orgId: "orgId_example",
});

console.log(listByOrganizationResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**Array<IdentityIntegration>**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **update**

#### **PATCH** /org/{orgId}/integration/{partner}/{service}

### Description
Update the given integration.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const updateResponse = await suger.integration.update({
  orgId: "orgId_example",
  partner: "AWS",
  service: "MARKETPLACE",
  requestBody: {
    info: {},
    organization_id: "organization_id_example",
    partner: "AWS",
    service: "MARKETPLACE",
  },
});

console.log(updateResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateIntegrationParams** | **UpdateIntegrationParams**| Update Integration Params |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | 'AWS', 'AZURE', 'GCP' | Cloud Partner | defaults to undefined
 **service** | 'MARKETPLACE', 'CRM' | Partner Service | defaults to undefined


### Return type

**IdentityIntegration**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error description |  -  |
**500** | internal error description |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **verify**

#### **POST** /org/{orgId}/integration/{partner}/{service}/verify

### Description
Verify the given integration, check whether it works correctly.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const verifyResponse = await suger.integration.verify({
  orgId: "orgId_example",
  partner: "AWS",
  service: "MARKETPLACE",
});

console.log(verifyResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | 'AWS', 'AZURE', 'GCP' | Cloud Partner | defaults to undefined
 **service** | 'MARKETPLACE', 'CRM' | Partner Service | defaults to undefined


### Return type

**boolean**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | whether it is verified or not |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


