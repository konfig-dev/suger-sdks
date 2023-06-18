# BuyerApi

All URIs are relative to *http://https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get**](BuyerApi.md#get) | **GET** /org/{orgId}/buyer/{buyerId} | get buyer
[**listByOrganization**](BuyerApi.md#listByOrganization) | **GET** /org/{orgId}/buyer | list buyers by organization
[**listByPartner**](BuyerApi.md#listByPartner) | **GET** /org/{orgId}/partner/{partner}/buyer | list buyers by partner
[**update**](BuyerApi.md#update) | **PATCH** /org/{orgId}/buyer/{buyerId} | update buyer name and description


# **get**

#### **GET** /org/{orgId}/buyer/{buyerId}

### Description
get buyer by the given organization and buyer id

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const getResponse = await suger.buyer.get({
  orgId: "orgId_example",
  buyerId: "buyerId_example",
});

console.log(getResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined


### Return type

**IdentityBuyer**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listByOrganization**

#### **GET** /org/{orgId}/buyer

### Description
list all buyers by the given organization

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listByOrganizationResponse = await suger.buyer.listByOrganization({
  orgId: "orgId_example",
});

console.log(listByOrganizationResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**Array<IdentityBuyer>**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listByPartner**

#### **GET** /org/{orgId}/partner/{partner}/buyer

### Description
list all buyers by the given organization and partner

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listByPartnerResponse = await suger.buyer.listByPartner({
  orgId: "orgId_example",
  partner: "AWS",
});

console.log(listByPartnerResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | 'AWS', 'AZURE', 'GCP' | Cloud Partner | defaults to undefined


### Return type

**Array<IdentityBuyer>**

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

# **update**

#### **PATCH** /org/{orgId}/buyer/{buyerId}

### Description
update buyer name and description by the given organization and buyer id

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const updateResponse = await suger.buyer.update({
  orgId: "orgId_example",
  buyerId: "buyerId_example",
});

console.log(updateResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **githubComSugerioMarketplaceServiceRdsDbLibUpdateBuyerNameDescriptionParams** | **GithubComSugerioMarketplaceServiceRdsDbLibUpdateBuyerNameDescriptionParams**| UpdateBuyerNameDescriptionParams |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined


### Return type

**IdentityBuyer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


