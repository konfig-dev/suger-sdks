# MeteringApi

All URIs are relative to *http://https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUsageRecordGroups**](MeteringApi.md#deleteUsageRecordGroups) | **DELETE** /org/{orgId}/usageRecordGroup/{usageRecordGroupId} | delete usageRecordGroup
[**getUsageConfigInfo**](MeteringApi.md#getUsageConfigInfo) | **GET** /org/{orgId}/usageMeteringConfigInfo | get usage metering config info
[**getUsageRecordGroups**](MeteringApi.md#getUsageRecordGroups) | **GET** /org/{orgId}/usageRecordGroup/{usageRecordGroupId} | get usageRecordGroup
[**getUsageRecordReport**](MeteringApi.md#getUsageRecordReport) | **GET** /org/{orgId}/usageRecordReport/{usageRecordReportId} | get usageRecordReport
[**listUsageRecordGroups**](MeteringApi.md#listUsageRecordGroups) | **GET** /org/{orgId}/usageRecordGroup | list usageRecordGroups
[**listUsageRecordReports**](MeteringApi.md#listUsageRecordReports) | **GET** /org/{orgId}/usageRecordReport | list usageRecordReports
[**reportUsageRecordGroup**](MeteringApi.md#reportUsageRecordGroup) | **POST** /org/{orgId}/entitlement/{entitlementId}/usageRecordGroup | report usageRecordGroup
[**updateUsageConfigInfo**](MeteringApi.md#updateUsageConfigInfo) | **PATCH** /org/{orgId}/usageMeteringConfigInfo | update usage metering config info


# **deleteUsageRecordGroups**

#### **DELETE** /org/{orgId}/usageRecordGroup/{usageRecordGroupId}

### Description
delete the UsageRecordGroup for the given organization and usageRecordGroup ID. Only usageRecordGroup with status "CREATED" or "INVALID" can be deleted.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const deleteUsageRecordGroupsResponse =
  await suger.metering.deleteUsageRecordGroups({
    orgId: "orgId_example",
    usageRecordGroupId: "usageRecordGroupId_example",
  });

console.log(deleteUsageRecordGroupsResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **usageRecordGroupId** | [**string**] | UsageRecordGroup ID | defaults to undefined


### Return type

**MeteringUsageRecordGroup**

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

# **getUsageConfigInfo**

#### **GET** /org/{orgId}/usageMeteringConfigInfo

### Description
Get the usage metering config info of the given organization.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
});

const getUsageConfigInfoResponse = await suger.metering.getUsageConfigInfo({
  orgId: "orgId_example",
});

console.log(getUsageConfigInfoResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**UsageMeteringConfigInfo**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Usage metering config info |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **getUsageRecordGroups**

#### **GET** /org/{orgId}/usageRecordGroup/{usageRecordGroupId}

### Description
get UsageRecordGroup for the given organization and usageRecordGroup ID

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const getUsageRecordGroupsResponse = await suger.metering.getUsageRecordGroups({
  orgId: "orgId_example",
  usageRecordGroupId: "usageRecordGroupId_example",
});

console.log(getUsageRecordGroupsResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **usageRecordGroupId** | [**string**] | UsageRecordGroup ID | defaults to undefined


### Return type

**MeteringUsageRecordGroup**

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

# **getUsageRecordReport**

#### **GET** /org/{orgId}/usageRecordReport/{usageRecordReportId}

### Description
get the usageRecordReport for a given organization and usageRecordReport ID.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const getUsageRecordReportResponse = await suger.metering.getUsageRecordReport({
  orgId: "orgId_example",
  usageRecordReportId: "usageRecordReportId_example",
});

console.log(getUsageRecordReportResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **usageRecordReportId** | [**string**] | UsageRecordReport ID | defaults to undefined


### Return type

**MeteringUsageRecordReport**

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

# **listUsageRecordGroups**

#### **GET** /org/{orgId}/usageRecordGroup

### Description
List UsageRecordGroups by the given organization, partner, product, entitlement or buyer. Only provide one or none of the optional query parameters: partner, productId, entitlementId & buyerId .

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listUsageRecordGroupsResponse =
  await suger.metering.listUsageRecordGroups({
    orgId: "orgId_example",
    partner: "AWS",
  });

console.log(listUsageRecordGroupsResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | 'AWS', 'AZURE', 'GCP' | Cloud Partner | (optional) defaults to undefined
 **productId** | [**string**] | product ID | (optional) defaults to undefined
 **entitlementId** | [**string**] | entitlement ID | (optional) defaults to undefined
 **buyerId** | [**string**] | buyer ID | (optional) defaults to undefined
 **startDate** | [**string**] | start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate | (optional) defaults to undefined
 **endDate** | [**string**] | end date (UTC) in YYYY-MM-DD format, default is today | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 20, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListUsageRecordGroupsResponse**

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

# **listUsageRecordReports**

#### **GET** /org/{orgId}/usageRecordReport

### Description
List usageRecordReports under the given organization, partner, product, entitlement or buyer. Only provide one or none of the following parameters: partner, product, entitlement or buyer.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listUsageRecordReportsResponse =
  await suger.metering.listUsageRecordReports({
    orgId: "orgId_example",
    partner: "AWS",
  });

console.log(listUsageRecordReportsResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | 'AWS', 'AZURE', 'GCP' | Cloud Partner | (optional) defaults to undefined
 **productId** | [**string**] | product ID | (optional) defaults to undefined
 **entitlementId** | [**string**] | entitlement ID | (optional) defaults to undefined
 **buyerId** | [**string**] | buyer ID | (optional) defaults to undefined
 **startDate** | [**string**] | start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate | (optional) defaults to undefined
 **endDate** | [**string**] | end date (UTC) in YYYY-MM-DD format, default is today | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 20, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListUsageRecordReportsResponse**

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

# **reportUsageRecordGroup**

#### **POST** /org/{orgId}/entitlement/{entitlementId}/usageRecordGroup

### Description
It is recommended to provide the ID in the request body CreateUsageRecordGroupParams, so the report can be deduplicated. All duplicate report will return error code 409.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const reportUsageRecordGroupResponse =
  await suger.metering.reportUsageRecordGroup({
    orgId: "orgId_example",
    entitlementId: "entitlementId_example",
    entitlement_id: "entitlement_id_example",
    organization_id: "organization_id_example",
    records: {
      key: 3.14,
    },
  });

console.log(reportUsageRecordGroupResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUsageRecordGroupParams** | **CreateUsageRecordGroupParams**| RequestBody |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**MeteringUsageRecordGroup**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | all the quantity of usage records are zero |  -  |
**409** | Conflict request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **updateUsageConfigInfo**

#### **PATCH** /org/{orgId}/usageMeteringConfigInfo

### Description
Update the usage metering config info of the given organization.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
});

const updateUsageConfigInfoResponse =
  await suger.metering.updateUsageConfigInfo({
    orgId: "orgId_example",
  });

console.log(updateUsageConfigInfoResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usageMeteringConfigInfo** | **UsageMeteringConfigInfo**| The usage metering config info to be updated |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**UsageMeteringConfigInfo**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Usage metering config info |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


