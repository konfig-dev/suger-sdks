# suger-typescript-sdk@1.0.0

CRUD operations on a set of resources, including organizations, products, offers, entitlements, usage record groups for meterting, etc.
## Installing

### npm
```
npm install suger-typescript-sdk --save
```

### yarn
```
yarn add suger-typescript-sdk
```

**Important note: this library is can be used in both the client-side or server-side, but using it
in client-side browser code is not recommended as you would expose security credentials.**



## Getting Started

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

## Documentation for API Endpoints

All URIs are relative to *https://api.suger.cloud*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApiApi* | [**create**](docs/ApiApi.md#create) | **POST** /org/{orgId}/apiClient | create api client
*ApiApi* | [**get**](docs/ApiApi.md#get) | **GET** /org/{orgId}/apiClient/{apiClientId} | get api client
*ApiApi* | [**getAccessToken**](docs/ApiApi.md#getAccessToken) | **POST** /public/apiClient/accessToken | get api access token
*ApiApi* | [**list**](docs/ApiApi.md#list) | **GET** /org/{orgId}/apiClient | list api clients
*BuyerApi* | [**get**](docs/BuyerApi.md#get) | **GET** /org/{orgId}/buyer/{buyerId} | get buyer
*BuyerApi* | [**listByOrganization**](docs/BuyerApi.md#listByOrganization) | **GET** /org/{orgId}/buyer | list buyers by organization
*BuyerApi* | [**listByPartner**](docs/BuyerApi.md#listByPartner) | **GET** /org/{orgId}/partner/{partner}/buyer | list buyers by partner
*BuyerApi* | [**update**](docs/BuyerApi.md#update) | **PATCH** /org/{orgId}/buyer/{buyerId} | update buyer name and description
*EntitlementApi* | [**addCredit**](docs/EntitlementApi.md#addCredit) | **POST** /org/{orgId}/entitlement/{entitlementId}/addCredit | add entitlement credit
*EntitlementApi* | [**get**](docs/EntitlementApi.md#get) | **GET** /org/{orgId}/entitlement/{entitlementId} | get entitlement
*EntitlementApi* | [**list**](docs/EntitlementApi.md#list) | **GET** /org/{orgId}/entitlement | list entitlements
*EntitlementApi* | [**listByBuyer**](docs/EntitlementApi.md#listByBuyer) | **GET** /org/{orgId}/buyer/{buyerId}/entitlement | list entitlements by buyer
*EntitlementApi* | [**listByOffer**](docs/EntitlementApi.md#listByOffer) | **GET** /org/{orgId}/offer/{offerId}/entitlement | list entitlements by offer
*EntitlementApi* | [**listByPartner**](docs/EntitlementApi.md#listByPartner) | **GET** /org/{orgId}/partner/{partner}/entitlement | list entitlements by partner
*EntitlementApi* | [**listByProduct**](docs/EntitlementApi.md#listByProduct) | **GET** /org/{orgId}/product/{productId}/entitlement | list entitlements by product
*EntitlementApi* | [**updateMetaInfo**](docs/EntitlementApi.md#updateMetaInfo) | **PATCH** /org/{orgId}/entitlement/{entitlementId}/metaInfo | update entitlement meta info
*EntitlementApi* | [**updateName**](docs/EntitlementApi.md#updateName) | **PATCH** /org/{orgId}/entitlement/{entitlementId}/entitlementName | update entitlement name
*EntitlementTermApi* | [**get**](docs/EntitlementTermApi.md#get) | **GET** /org/{orgId}/entitlement/{entitlementId}/entitlementTerm/{entitlementTermId} | get entitlement term
*EntitlementTermApi* | [**list**](docs/EntitlementTermApi.md#list) | **GET** /org/{orgId}/entitlement/{entitlementId}/entitlementTerm | list entitlement terms
*IntegrationApi* | [**create**](docs/IntegrationApi.md#create) | **POST** /org/{orgId}/integration | create integration
*IntegrationApi* | [**delete**](docs/IntegrationApi.md#delete) | **DELETE** /org/{orgId}/integration/{partner}/{service} | delete integration
*IntegrationApi* | [**get**](docs/IntegrationApi.md#get) | **GET** /org/{orgId}/integration/{partner}/{service} | get integration
*IntegrationApi* | [**listByOrganization**](docs/IntegrationApi.md#listByOrganization) | **GET** /org/{orgId}/integration | list integrations by organization
*IntegrationApi* | [**update**](docs/IntegrationApi.md#update) | **PATCH** /org/{orgId}/integration/{partner}/{service} | update integration
*IntegrationApi* | [**verify**](docs/IntegrationApi.md#verify) | **POST** /org/{orgId}/integration/{partner}/{service}/verify | verify integration
*MeteringApi* | [**deleteUsageRecordGroups**](docs/MeteringApi.md#deleteUsageRecordGroups) | **DELETE** /org/{orgId}/usageRecordGroup/{usageRecordGroupId} | delete usageRecordGroup
*MeteringApi* | [**getUsageConfigInfo**](docs/MeteringApi.md#getUsageConfigInfo) | **GET** /org/{orgId}/usageMeteringConfigInfo | get usage metering config info
*MeteringApi* | [**getUsageRecordGroups**](docs/MeteringApi.md#getUsageRecordGroups) | **GET** /org/{orgId}/usageRecordGroup/{usageRecordGroupId} | get usageRecordGroup
*MeteringApi* | [**getUsageRecordReport**](docs/MeteringApi.md#getUsageRecordReport) | **GET** /org/{orgId}/usageRecordReport/{usageRecordReportId} | get usageRecordReport
*MeteringApi* | [**listUsageRecordGroups**](docs/MeteringApi.md#listUsageRecordGroups) | **GET** /org/{orgId}/usageRecordGroup | list usageRecordGroups
*MeteringApi* | [**listUsageRecordReports**](docs/MeteringApi.md#listUsageRecordReports) | **GET** /org/{orgId}/usageRecordReport | list usageRecordReports
*MeteringApi* | [**reportUsageRecordGroup**](docs/MeteringApi.md#reportUsageRecordGroup) | **POST** /org/{orgId}/entitlement/{entitlementId}/usageRecordGroup | report usageRecordGroup
*MeteringApi* | [**updateUsageConfigInfo**](docs/MeteringApi.md#updateUsageConfigInfo) | **PATCH** /org/{orgId}/usageMeteringConfigInfo | update usage metering config info
*OfferApi* | [**cancel**](docs/OfferApi.md#cancel) | **POST** /org/{orgId}/offer/{offerId}/cancel | cancel offer
*OfferApi* | [**create**](docs/OfferApi.md#create) | **POST** /org/{orgId}/offer | create offer
*OfferApi* | [**delete**](docs/OfferApi.md#delete) | **DELETE** /org/{orgId}/offer/{offerId} | delete offer
*OfferApi* | [**draft**](docs/OfferApi.md#draft) | **POST** /org/{orgId}/draftOffer | create or update draft offer
*OfferApi* | [**get**](docs/OfferApi.md#get) | **GET** /org/{orgId}/offer/{offerId} | get offer
*OfferApi* | [**getEula**](docs/OfferApi.md#getEula) | **GET** /org/{orgId}/offer/{offerId}/eula | get offer EULA
*OfferApi* | [**listByOrganization**](docs/OfferApi.md#listByOrganization) | **GET** /org/{orgId}/offer | list offers by organization
*OfferApi* | [**listByPartner**](docs/OfferApi.md#listByPartner) | **GET** /org/{orgId}/partner/{partner}/offer | list offers by partner
*OfferApi* | [**listByProduct**](docs/OfferApi.md#listByProduct) | **GET** /org/{orgId}/product/{productId}/offer | list offers by product
*OfferApi* | [**updateMetaInfo**](docs/OfferApi.md#updateMetaInfo) | **PATCH** /org/{orgId}/offer/{offerId}/metaInfo | update offer meta info
*OperationApi* | [**list**](docs/OperationApi.md#list) | **GET** /org/{orgId}/operation | list operations
*ProductApi* | [**delete**](docs/ProductApi.md#delete) | **DELETE** /org/{orgId}/product/{productId} | delete product
*ProductApi* | [**get**](docs/ProductApi.md#get) | **GET** /org/{orgId}/product/{productId} | get product
*ProductApi* | [**listByOrganization**](docs/ProductApi.md#listByOrganization) | **GET** /org/{orgId}/product | list products by organization
*ProductApi* | [**listByPartner**](docs/ProductApi.md#listByPartner) | **GET** /org/{orgId}/partner/{partner}/product | list products by partner
*ProductApi* | [**listMeteringDimensions**](docs/ProductApi.md#listMeteringDimensions) | **GET** /org/{orgId}/product/{productId}/dimension | list metering dimensions of product
*ProductApi* | [**update**](docs/ProductApi.md#update) | **PATCH** /org/{orgId}/product/{productId} | update product
*ReportApi* | [**getRevenueReport**](docs/ReportApi.md#getRevenueReport) | **POST** /org/{orgId}/revenueReport | get revenue report
*ReportApi* | [**listRevenueRecordDetails**](docs/ReportApi.md#listRevenueRecordDetails) | **GET** /org/{orgId}/partner/{partner}/revenueRecordDetail | list revenue record details
*ReportApi* | [**listRevenueRecords**](docs/ReportApi.md#listRevenueRecords) | **GET** /org/{orgId}/partner/{partner}/revenueRecord | list revenue records
*ReportApi* | [**listUsageMeteringDailyRecords**](docs/ReportApi.md#listUsageMeteringDailyRecords) | **GET** /org/{orgId}/partner/{partner}/usageMeteringDailyRecord | list usage metering daily records
*ReportApi* | [**listUsageMeteringDailyVerifications**](docs/ReportApi.md#listUsageMeteringDailyVerifications) | **GET** /org/{orgId}/partner/{partner}/usageMeteringDailyVerification | list usage metering daily verifications

