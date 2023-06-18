# EntitlementApi

All URIs are relative to *https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCredit**](EntitlementApi.md#addCredit) | **POST** /org/{orgId}/entitlement/{entitlementId}/addCredit | add entitlement credit
[**get**](EntitlementApi.md#get) | **GET** /org/{orgId}/entitlement/{entitlementId} | get entitlement
[**list**](EntitlementApi.md#list) | **GET** /org/{orgId}/entitlement | list entitlements
[**listByBuyer**](EntitlementApi.md#listByBuyer) | **GET** /org/{orgId}/buyer/{buyerId}/entitlement | list entitlements by buyer
[**listByOffer**](EntitlementApi.md#listByOffer) | **GET** /org/{orgId}/offer/{offerId}/entitlement | list entitlements by offer
[**listByPartner**](EntitlementApi.md#listByPartner) | **GET** /org/{orgId}/partner/{partner}/entitlement | list entitlements by partner
[**listByProduct**](EntitlementApi.md#listByProduct) | **GET** /org/{orgId}/product/{productId}/entitlement | list entitlements by product
[**updateMetaInfo**](EntitlementApi.md#updateMetaInfo) | **PATCH** /org/{orgId}/entitlement/{entitlementId}/metaInfo | update entitlement meta info
[**updateName**](EntitlementApi.md#updateName) | **PATCH** /org/{orgId}/entitlement/{entitlementId}/entitlementName | update entitlement name


# **addCredit**

#### **POST** /org/{orgId}/entitlement/{entitlementId}/addCredit

### Description
Add the credit amount to the given Entitlement. The credit amount is accumulated & saved in the current Entitlement Term of the gvien Entitlement.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const addCreditResponse = await suger.entitlement.addCredit({
  orgId: "orgId_example",
  entitlementId: "entitlementId_example",
  credit_amount_increment: 3.14,
  entitlement_id: "entitlement_id_example",
  organization_id: "organization_id_example",
});

console.log(addCreditResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addEntitlementCreditParams** | **AddEntitlementCreditParams**| RequestBody |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**AddEntitlementCreditResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request Error |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **get**

#### **GET** /org/{orgId}/entitlement/{entitlementId}

### Description
Get the entitlement by ID

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const getResponse = await suger.entitlement.get({
  orgId: "orgId_example",
  entitlementId: "entitlementId_example",
});

console.log(getResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**WorkloadEntitlement**

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

#### **GET** /org/{orgId}/entitlement

### Description
List all entitlements under the organization

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listResponse = await suger.entitlement.list({
  orgId: "orgId_example",
});

console.log(listResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**Array<WorkloadEntitlement>**

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

# **listByBuyer**

#### **GET** /org/{orgId}/buyer/{buyerId}/entitlement

### Description
List all entitlements of the given buyer

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listByBuyerResponse = await suger.entitlement.listByBuyer({
  orgId: "orgId_example",
  buyerId: "buyerId_example",
});

console.log(listByBuyerResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined


### Return type

**Array<WorkloadEntitlement>**

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

# **listByOffer**

#### **GET** /org/{orgId}/offer/{offerId}/entitlement

### Description
List all entitlements under the given offer

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listByOfferResponse = await suger.entitlement.listByOffer({
  orgId: "orgId_example",
  offerId: "offerId_example",
});

console.log(listByOfferResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined


### Return type

**Array<WorkloadEntitlement>**

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

# **listByPartner**

#### **GET** /org/{orgId}/partner/{partner}/entitlement

### Description
List all entitlements under the given partner

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listByPartnerResponse = await suger.entitlement.listByPartner({
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

**Array<WorkloadEntitlement>**

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

# **listByProduct**

#### **GET** /org/{orgId}/product/{productId}/entitlement

### Description
List all entitlements under the given product

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listByProductResponse = await suger.entitlement.listByProduct({
  orgId: "orgId_example",
  productId: "productId_example",
});

console.log(listByProductResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **productId** | [**string**] | Product ID | defaults to undefined


### Return type

**Array<WorkloadEntitlement>**

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

# **updateMetaInfo**

#### **PATCH** /org/{orgId}/entitlement/{entitlementId}/metaInfo

### Description
Update the meta info of the given entitlement.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const updateMetaInfoResponse = await suger.entitlement.updateMetaInfo({
  orgId: "orgId_example",
  entitlementId: "entitlementId_example",
});

console.log(updateMetaInfoResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workloadMetaInfo** | **WorkloadMetaInfo**| Entitlement meta info to update |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**WorkloadMetaInfo**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **updateName**

#### **PATCH** /org/{orgId}/entitlement/{entitlementId}/entitlementName

### Description
Update the name of the given Entitlement

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to https://api.suger.cloud
  // basePath: "https://api.suger.cloud",
  apiKey: "API_KEY",
});

const updateNameResponse = await suger.entitlement.updateName({
  orgId: "orgId_example",
  entitlementId: "entitlementId_example",
});

console.log(updateNameResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **githubComSugerioMarketplaceServiceRdsDbLibUpdateEntitlementNameParams** | **GithubComSugerioMarketplaceServiceRdsDbLibUpdateEntitlementNameParams**| UpdateEntitlementNameParams |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**WorkloadEntitlement**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


