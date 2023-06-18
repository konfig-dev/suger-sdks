# OfferApi

All URIs are relative to *http://https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel**](OfferApi.md#cancel) | **POST** /org/{orgId}/offer/{offerId}/cancel | cancel offer
[**create**](OfferApi.md#create) | **POST** /org/{orgId}/offer | create offer
[**delete**](OfferApi.md#delete) | **DELETE** /org/{orgId}/offer/{offerId} | delete offer
[**draft**](OfferApi.md#draft) | **POST** /org/{orgId}/draftOffer | create or update draft offer
[**get**](OfferApi.md#get) | **GET** /org/{orgId}/offer/{offerId} | get offer
[**getEula**](OfferApi.md#getEula) | **GET** /org/{orgId}/offer/{offerId}/eula | get offer EULA
[**listByOrganization**](OfferApi.md#listByOrganization) | **GET** /org/{orgId}/offer | list offers by organization
[**listByPartner**](OfferApi.md#listByPartner) | **GET** /org/{orgId}/partner/{partner}/offer | list offers by partner
[**listByProduct**](OfferApi.md#listByProduct) | **GET** /org/{orgId}/product/{productId}/offer | list offers by product
[**updateMetaInfo**](OfferApi.md#updateMetaInfo) | **PATCH** /org/{orgId}/offer/{offerId}/metaInfo | update offer meta info


# **cancel**

#### **POST** /org/{orgId}/offer/{offerId}/cancel

### Description
Only the offer with status = "PENDING_ACCEPTANCE" or "PENDING_CANCEL" is allowed to cancel.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const cancelResponse = await suger.offer.cancel({
  orgId: "orgId_example",
  offerId: "offerId_example",
});

console.log(cancelResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined


### Return type

**string**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Empty string if cancellation is successful |  -  |
**400** | Bad request error description |  -  |
**500** | internal error description |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **create**

#### **POST** /org/{orgId}/offer

### Description
Create a private offer under the given organization.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const createResponse = await suger.offer.create({
  orgId: "orgId_example",
  offer_type: "DEFAULT",
  partner: "AWS",
  service: "MARKETPLACE",
  status: "ACCEPTED",
});

console.log(createResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workloadOffer** | **WorkloadOffer**| Offer to create |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**WorkloadOffer**

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

#### **DELETE** /org/{orgId}/offer/{offerId}

### Description
Only the offer with status = "DRAFT" or "CREATE_FAILED" is allowed to be deleted.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const deleteResponse = await suger.offer.delete({
  orgId: "orgId_example",
  offerId: "offerId_example",
});

console.log(deleteResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined


### Return type

**string**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Empty string if deletion is successful |  -  |
**400** | Bad request error description |  -  |
**500** | internal error description |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **draft**

#### **POST** /org/{orgId}/draftOffer

### Description
Create a new draft offer or update the existing draft offer. When updating draft offer, the offer.ID is required.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const draftResponse = await suger.offer.draft({
  orgId: "orgId_example",
  offer_type: "DEFAULT",
  partner: "AWS",
  service: "MARKETPLACE",
  status: "ACCEPTED",
});

console.log(draftResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workloadOffer** | **WorkloadOffer**| the draft offer to create |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**WorkloadOffer**

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

# **get**

#### **GET** /org/{orgId}/offer/{offerId}

### Description
Get the offer by the given offer ID.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const getResponse = await suger.offer.get({
  orgId: "orgId_example",
  offerId: "offerId_example",
});

console.log(getResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined


### Return type

**WorkloadOffer**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the Offer Object |  -  |
**400** | Bad request error description |  -  |
**500** | internal error description |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **getEula**

#### **GET** /org/{orgId}/offer/{offerId}/eula

### Description
Get the EULA file of the given offer ID.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const getEulaResponse = await suger.offer.getEula({
  orgId: "orgId_example",
  offerId: "offerId_example",
});

console.log(getEulaResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined


### Return type

**string**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AWS S3 signed URL with 10 minutes expiration time |  -  |
**400** | Bad request error description |  -  |
**500** | internal error description |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listByOrganization**

#### **GET** /org/{orgId}/offer

### Description
List all offers under the given organization.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listByOrganizationResponse = await suger.offer.listByOrganization({
  orgId: "orgId_example",
});

console.log(listByOrganizationResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**Array<WorkloadOffer>**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error description |  -  |
**500** | internal error description |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listByPartner**

#### **GET** /org/{orgId}/partner/{partner}/offer

### Description
List all offers under the given organization & cloud partner.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listByPartnerResponse = await suger.offer.listByPartner({
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

**Array<WorkloadOffer>**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error description |  -  |
**500** | internal error description |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listByProduct**

#### **GET** /org/{orgId}/product/{productId}/offer

### Description
List all offers under the given organization & product.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listByProductResponse = await suger.offer.listByProduct({
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

**Array<WorkloadOffer>**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error description |  -  |
**500** | internal error description |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **updateMetaInfo**

#### **PATCH** /org/{orgId}/offer/{offerId}/metaInfo

### Description
Update the meta info of the given offer.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const updateMetaInfoResponse = await suger.offer.updateMetaInfo({
  orgId: "orgId_example",
  offerId: "offerId_example",
});

console.log(updateMetaInfoResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workloadMetaInfo** | **WorkloadMetaInfo**| Offer meta info to update |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined


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


