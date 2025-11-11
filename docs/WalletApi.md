# WalletApi

All URIs are relative to *https://platform.rise.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**countWallets**](#countwallets) | **POST** /v1/rise/wallets/count | |
|[**createWallet**](#createwallet) | **POST** /v1/rise/wallets | |
|[**getCustomerReference**](#getcustomerreference) | **GET** /v1/rise/customers | |
|[**getOrCreateWallet**](#getorcreatewallet) | **POST** /v1/rise/wallets/issue | |
|[**getWallet**](#getwallet) | **GET** /v1/rise/wallets | |
|[**queryWallets**](#querywallets) | **POST** /v1/rise/wallets/query | |
|[**queryWalletsByContact**](#querywalletsbycontact) | **POST** /v1/rise/wallets/query_by_contact | |

# **countWallets**
> CountWalletsResponse1 countWallets(walletWalletServiceV1RiseWalletsCountPostCountWalletsRequestBody)

Count wallets based on the given filter.

### Example

```typescript
import {
    WalletApi,
    Configuration,
    WalletWalletServiceV1RiseWalletsCountPostCountWalletsRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let walletWalletServiceV1RiseWalletsCountPostCountWalletsRequestBody: WalletWalletServiceV1RiseWalletsCountPostCountWalletsRequestBody; //

const { status, data } = await apiInstance.countWallets(
    walletWalletServiceV1RiseWalletsCountPostCountWalletsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletWalletServiceV1RiseWalletsCountPostCountWalletsRequestBody** | **WalletWalletServiceV1RiseWalletsCountPostCountWalletsRequestBody**|  | |


### Return type

**CountWalletsResponse1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWallet**
> CreateWalletResponse1 createWallet(walletWalletServiceV1RiseWalletsPostCreateWalletRequestBody)

Creates a new Wallet.

### Example

```typescript
import {
    WalletApi,
    Configuration,
    WalletWalletServiceV1RiseWalletsPostCreateWalletRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let walletWalletServiceV1RiseWalletsPostCreateWalletRequestBody: WalletWalletServiceV1RiseWalletsPostCreateWalletRequestBody; //

const { status, data } = await apiInstance.createWallet(
    walletWalletServiceV1RiseWalletsPostCreateWalletRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletWalletServiceV1RiseWalletsPostCreateWalletRequestBody** | **WalletWalletServiceV1RiseWalletsPostCreateWalletRequestBody**|  | |


### Return type

**CreateWalletResponse1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomerReference**
> GetCustomerReferenceResponse1 getCustomerReference()

Get a CustomerReference by source (i.e. source channel, tenant, and customer IDs).

### Example

```typescript
import {
    WalletApi,
    Configuration,
    CustomerReferenceQuery
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let query: CustomerReferenceQuery; //Customer Reference query object. (default to undefined)

const { status, data } = await apiInstance.getCustomerReference(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | **CustomerReferenceQuery** | Customer Reference query object. | defaults to undefined|


### Return type

**GetCustomerReferenceResponse1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrCreateWallet**
> GetOrCreateWalletResponse1 getOrCreateWallet(walletWalletServiceV1RiseWalletsIssuePostGetOrCreateWalletRequestBody)

Retrieves or creates a Wallet for the provided customer reference.  - In case the Wallet doesn\'t exist - creates a new Wallet with the provided customer reference. - In case the Wallet already exists - returns the existing Wallet. - If the provided customer reference doesn\'t exist yet - adds it to the wallet. - If the provided customer reference already exists - doesn\'t update anything.

### Example

```typescript
import {
    WalletApi,
    Configuration,
    WalletWalletServiceV1RiseWalletsIssuePostGetOrCreateWalletRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let walletWalletServiceV1RiseWalletsIssuePostGetOrCreateWalletRequestBody: WalletWalletServiceV1RiseWalletsIssuePostGetOrCreateWalletRequestBody; //

const { status, data } = await apiInstance.getOrCreateWallet(
    walletWalletServiceV1RiseWalletsIssuePostGetOrCreateWalletRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletWalletServiceV1RiseWalletsIssuePostGetOrCreateWalletRequestBody** | **WalletWalletServiceV1RiseWalletsIssuePostGetOrCreateWalletRequestBody**|  | |


### Return type

**GetOrCreateWalletResponse1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWallet**
> GetWalletResponse1 getWallet()

Get a Wallet by ID, email, or a customer reference in the wallet.

### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let query: object; //Query object. (default to undefined)

const { status, data } = await apiInstance.getWallet(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | **object** | Query object. | defaults to undefined|


### Return type

**GetWalletResponse1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryWallets**
> QueryWalletsResponse1 queryWallets(walletWalletServiceV1RiseWalletsQueryPostQueryWalletsRequestBody)

Query wallets enriched with gift card and contact information. See [API Query Language](https://platform.rise.ai/docs/#tag/About-API-Query-Language).

### Example

```typescript
import {
    WalletApi,
    Configuration,
    WalletWalletServiceV1RiseWalletsQueryPostQueryWalletsRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let walletWalletServiceV1RiseWalletsQueryPostQueryWalletsRequestBody: WalletWalletServiceV1RiseWalletsQueryPostQueryWalletsRequestBody; //

const { status, data } = await apiInstance.queryWallets(
    walletWalletServiceV1RiseWalletsQueryPostQueryWalletsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletWalletServiceV1RiseWalletsQueryPostQueryWalletsRequestBody** | **WalletWalletServiceV1RiseWalletsQueryPostQueryWalletsRequestBody**|  | |


### Return type

**QueryWalletsResponse1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryWalletsByContact**
> QueryWalletsByContactResponse1 queryWalletsByContact(walletWalletServiceV1RiseWalletsQueryByContactPostQueryWalletsByContactRequestBody)

Query wallets by contact using [API Query Language](https://platform.rise.ai/docs/#tag/About-API-Query-Language). The result is a list of wallets with gift card and contact information.

### Example

```typescript
import {
    WalletApi,
    Configuration,
    WalletWalletServiceV1RiseWalletsQueryByContactPostQueryWalletsByContactRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let walletWalletServiceV1RiseWalletsQueryByContactPostQueryWalletsByContactRequestBody: WalletWalletServiceV1RiseWalletsQueryByContactPostQueryWalletsByContactRequestBody; //

const { status, data } = await apiInstance.queryWalletsByContact(
    walletWalletServiceV1RiseWalletsQueryByContactPostQueryWalletsByContactRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletWalletServiceV1RiseWalletsQueryByContactPostQueryWalletsByContactRequestBody** | **WalletWalletServiceV1RiseWalletsQueryByContactPostQueryWalletsByContactRequestBody**|  | |


### Return type

**QueryWalletsByContactResponse1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

