# ReportApi

All URIs are relative to *http://https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRevenueReport**](ReportApi.md#getRevenueReport) | **POST** /org/{orgId}/revenueReport | get revenue report
[**listRevenueRecordDetails**](ReportApi.md#listRevenueRecordDetails) | **GET** /org/{orgId}/partner/{partner}/revenueRecordDetail | list revenue record details
[**listRevenueRecords**](ReportApi.md#listRevenueRecords) | **GET** /org/{orgId}/partner/{partner}/revenueRecord | list revenue records
[**listUsageMeteringDailyRecords**](ReportApi.md#listUsageMeteringDailyRecords) | **GET** /org/{orgId}/partner/{partner}/usageMeteringDailyRecord | list usage metering daily records
[**listUsageMeteringDailyVerifications**](ReportApi.md#listUsageMeteringDailyVerifications) | **GET** /org/{orgId}/partner/{partner}/usageMeteringDailyVerification | list usage metering daily verifications


# **getRevenueReport**

#### **POST** /org/{orgId}/revenueReport

### Description
Get the revenue report of the given organization, product, entitlement, or buyer.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const getRevenueReportResponse = await suger.report.getRevenueReport({
  orgId: "orgId_example",
  organization_id: "organization_id_example",
  partner: "AWS",
  report_type: "InvoicedAmount",
  service: "MARKETPLACE",
});

console.log(getRevenueReportResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getRevenueReportParams** | **GetRevenueReportParams**| Get Revenue Report Params |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**RevenueReport**

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

# **listRevenueRecordDetails**

#### **GET** /org/{orgId}/partner/{partner}/revenueRecordDetail

### Description
list the raw revenue record details for the given organization, product, entitlement, or buyer.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listRevenueRecordDetailsResponse =
  await suger.report.listRevenueRecordDetails({
    orgId: "orgId_example",
    partner: "AWS",
  });

console.log(listRevenueRecordDetailsResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | 'AWS', 'AZURE', 'GCP' | Cloud Partner | defaults to undefined
 **productId** | [**string**] | Filter revenue record details by the given product ID | (optional) defaults to undefined
 **entitlementId** | [**string**] | Filter revenue record details by the given entitlement ID | (optional) defaults to undefined
 **buyerId** | [**string**] | Filter revenue record details by the given buyer ID | (optional) defaults to undefined
 **startDate** | [**string**] | start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate | (optional) defaults to undefined
 **endDate** | [**string**] | end date (UTC) in YYYY-MM-DD format, default is today | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 20, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListRevenueRecordDetailsResponse**

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

# **listRevenueRecords**

#### **GET** /org/{orgId}/partner/{partner}/revenueRecord

### Description
list the revenue records for the given organization, product, entitlement, or buyer.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listRevenueRecordsResponse = await suger.report.listRevenueRecords({
  orgId: "orgId_example",
  partner: "AWS",
});

console.log(listRevenueRecordsResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | 'AWS', 'AZURE', 'GCP' | Cloud Partner | defaults to undefined
 **productId** | [**string**] | Filter revenue record details by the given product ID | (optional) defaults to undefined
 **entitlementId** | [**string**] | Filter revenue record details by the given entitlement ID | (optional) defaults to undefined
 **buyerId** | [**string**] | Filter revenue record details by the given buyer ID | (optional) defaults to undefined
 **startDate** | [**string**] | start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate | (optional) defaults to undefined
 **endDate** | [**string**] | end date (UTC) in YYYY-MM-DD format, default is today | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 20, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListRevenueRecordsResponse**

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

# **listUsageMeteringDailyRecords**

#### **GET** /org/{orgId}/partner/{partner}/usageMeteringDailyRecord

### Description
list the daily records of the usage metering from the cloud marketplace for the given organization, product, entitlement, or buyer.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listUsageMeteringDailyRecordsResponse =
  await suger.report.listUsageMeteringDailyRecords({
    orgId: "orgId_example",
    partner: "AWS",
  });

console.log(listUsageMeteringDailyRecordsResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | 'AWS', 'AZURE', 'GCP' | Cloud Partner | defaults to undefined
 **productId** | [**string**] | Filter revenue record details by the given product ID | (optional) defaults to undefined
 **entitlementId** | [**string**] | Filter revenue record details by the given entitlement ID | (optional) defaults to undefined
 **buyerId** | [**string**] | Filter revenue record details by the given buyer ID | (optional) defaults to undefined
 **startDate** | [**string**] | start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate | (optional) defaults to undefined
 **endDate** | [**string**] | end date (UTC) in YYYY-MM-DD format, default is today | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 20, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListUsageMeteringDailyRecordsResponse**

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

# **listUsageMeteringDailyVerifications**

#### **GET** /org/{orgId}/partner/{partner}/usageMeteringDailyVerification

### Description
list the daily verifications between the usage records reported to cloud marketplace & the usage metering from the cloud marketplace for the given organization, product, entitlement, or buyer.

### Example


```typescript
import { Suger } from "suger-typescript-sdk";

const suger = new Suger({
  // Defining the base path is optional and defaults to http://https://api.suger.cloud
  // basePath: "http://https://api.suger.cloud",
  apiKey: "API_KEY",
});

const listUsageMeteringDailyVerificationsResponse =
  await suger.report.listUsageMeteringDailyVerifications({
    orgId: "orgId_example",
    partner: "AWS",
  });

console.log(listUsageMeteringDailyVerificationsResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | 'AWS', 'AZURE', 'GCP' | Cloud Partner | defaults to undefined
 **productId** | [**string**] | Filter usage metering daily verifications by the given product ID | (optional) defaults to undefined
 **entitlementId** | [**string**] | Filter usage metering daily verifications by the given entitlement ID | (optional) defaults to undefined
 **buyerId** | [**string**] | Filter usage metering daily verifications by the given buyer ID | (optional) defaults to undefined
 **startDate** | [**string**] | start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate | (optional) defaults to undefined
 **endDate** | [**string**] | end date (UTC) in YYYY-MM-DD format, default is today | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 20, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListUsageMeteringDailyVerificationsResponse**

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


