# ApiApi

All URIs are relative to *https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ApiApi.md#create) | **POST** /org/{orgId}/apiClient | create api client
[**get**](ApiApi.md#get) | **GET** /org/{orgId}/apiClient/{apiClientId} | get api client
[**getAccessToken**](ApiApi.md#getAccessToken) | **POST** /public/apiClient/accessToken | get api access token
[**list**](ApiApi.md#list) | **GET** /org/{orgId}/apiClient | list api clients


# **create**

#### **POST** /org/{orgId}/apiClient

### Description
Create an API client to access Suger API. Please note that only one API client is permitted per organization at this moment.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const createResponse = await suger.api.create({
  orgId: "orgId_example",
  type: "BEARER_TOKEN",
});

console.log(createResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **type** | 'BEARER_TOKEN', 'API_KEY' | API client type, the default is BEARER_TOKEN if not provided | (optional) defaults to undefined


### Return type

**GithubComSugerioMarketplaceServiceRdsDbLibIdentityApiClient**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **get**

#### **GET** /org/{orgId}/apiClient/{apiClientId}

### Description
Get the API client by ID.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const getResponse = await suger.api.get({
  orgId: "orgId_example",
  apiClientId: "apiClientId_example",
});

console.log(getResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **apiClientId** | [**string**] | API client ID | defaults to undefined


### Return type

**GithubComSugerioMarketplaceServiceRdsDbLibIdentityApiClient**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **getAccessToken**

#### **POST** /public/apiClient/accessToken

### Description
Get the Bearer Access Token by giving the Suger API Client ID & Client Secret.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
});

const getAccessTokenResponse = await suger.api.getAccessToken({
  id: "id_example",
  organization_id: "organization_id_example",
  secret: "secret_example",
});

console.log(getAccessTokenResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getApiClientAccessTokenParams** | **GetApiClientAccessTokenParams**| Suger API Client |


### Return type

**ApiClientAccessToken**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **list**

#### **GET** /org/{orgId}/apiClient

### Description
List all API clients in the given organization.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listResponse = await suger.api.list({
  orgId: "orgId_example",
});

console.log(listResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**Array<GithubComSugerioMarketplaceServiceRdsDbLibIdentityApiClient>**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


