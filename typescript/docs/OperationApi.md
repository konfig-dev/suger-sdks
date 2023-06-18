# OperationApi

All URIs are relative to *https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list**](OperationApi.md#list) | **GET** /org/{orgId}/operation | list operations


# **list**

#### **GET** /org/{orgId}/operation

### Description
List all long running operations under the given organization, offer, entitlement, crmOpportunity or partnerOpportunity. Only provide one filter on a request.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listResponse = await suger.operation.list({
  orgId: "orgId_example",
});

console.log(listResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerId** | [**string**] | filter by offerId | (optional) defaults to undefined
 **entitlementId** | [**string**] | filter by entitlementId | (optional) defaults to undefined
 **crmOpportunityId** | [**string**] | filter by crmOpportunityId | (optional) defaults to undefined
 **partnerOpportunityId** | [**string**] | filter by partnerOpportunityId | (optional) defaults to undefined


### Return type

**Array<Operation>**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


