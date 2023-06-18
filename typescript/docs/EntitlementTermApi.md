# EntitlementTermApi

All URIs are relative to *http://https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get**](EntitlementTermApi.md#get) | **GET** /org/{orgId}/entitlement/{entitlementId}/entitlementTerm/{entitlementTermId} | get entitlement term
[**list**](EntitlementTermApi.md#list) | **GET** /org/{orgId}/entitlement/{entitlementId}/entitlementTerm | list entitlement terms


# **get**

#### **GET** /org/{orgId}/entitlement/{entitlementId}/entitlementTerm/{entitlementTermId}

### Description
Get the entitlement term by ID

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const getResponse = await suger.entitlementTerm.get({
  orgId: "orgId_example",
  entitlementId: "entitlementId_example",
  entitlementTermId: "entitlementTermId_example",
});

console.log(getResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined
 **entitlementTermId** | [**string**] | Entitlement Term ID | defaults to undefined


### Return type

**WorkloadEntitlementTerm**

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

# **list**

#### **GET** /org/{orgId}/entitlement/{entitlementId}/entitlementTerm

### Description
List all Entitlement Terms of the given Entitlement

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listResponse = await suger.entitlementTerm.list({
  orgId: "orgId_example",
  entitlementId: "entitlementId_example",
});

console.log(listResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**Array<WorkloadEntitlementTerm>**

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


