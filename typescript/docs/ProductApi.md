# ProductApi

All URIs are relative to *http://https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](ProductApi.md#delete) | **DELETE** /org/{orgId}/product/{productId} | delete product
[**get**](ProductApi.md#get) | **GET** /org/{orgId}/product/{productId} | get product
[**listByOrganization**](ProductApi.md#listByOrganization) | **GET** /org/{orgId}/product | list products by organization
[**listByPartner**](ProductApi.md#listByPartner) | **GET** /org/{orgId}/partner/{partner}/product | list products by partner
[**listMeteringDimensions**](ProductApi.md#listMeteringDimensions) | **GET** /org/{orgId}/product/{productId}/dimension | list metering dimensions of product
[**update**](ProductApi.md#update) | **PATCH** /org/{orgId}/product/{productId} | update product


# **delete**

#### **DELETE** /org/{orgId}/product/{productId}

### Description
only the product with status = "CREATE_FAILED" is allowed to be deleted.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const deleteResponse = await suger.product.delete({
  orgId: "orgId_example",
  productId: "productId_example",
});

console.log(deleteResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **productId** | [**string**] | Product ID | defaults to undefined


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

#### **GET** /org/{orgId}/product/{productId}

### Description
get product by product id

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const getResponse = await suger.product.get({
  orgId: "orgId_example",
  productId: "productId_example",
});

console.log(getResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **productId** | [**string**] | Product ID | defaults to undefined


### Return type

**WorkloadProduct**

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

#### **GET** /org/{orgId}/product

### Description
list all products under the given organization

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listByOrganizationResponse = await suger.product.listByOrganization({
  orgId: "orgId_example",
});

console.log(listByOrganizationResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**Array<WorkloadProduct>**

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

#### **GET** /org/{orgId}/partner/{partner}/product

### Description
list all products under the given organization and cloud partner

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listByPartnerResponse = await suger.product.listByPartner({
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

**Array<WorkloadProduct>**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listMeteringDimensions**

#### **GET** /org/{orgId}/product/{productId}/dimension

### Description
list all metering dimensions of the given product

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listMeteringDimensionsResponse =
  await suger.product.listMeteringDimensions({
    orgId: "orgId_example",
    productId: "productId_example",
  });

console.log(listMeteringDimensionsResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **productId** | [**string**] | Product ID | defaults to undefined


### Return type

**Array<AwsSaasProductDimension>**

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

#### **PATCH** /org/{orgId}/product/{productId}

### Description
currently only the Fulfillment URL is allowed to update via this API.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const updateResponse = await suger.product.update({
  orgId: "orgId_example",
  productId: "productId_example",
  fulfillment_url: "fulfillment_url_example",
  id: "id_example",
  organization_id: "organization_id_example",
});

console.log(updateResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductParams** | **UpdateProductParams**| Update Product Params |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **productId** | [**string**] | Product ID | defaults to undefined


### Return type

**WorkloadProduct**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


