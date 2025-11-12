# WalletActionApi

All URIs are relative to *https://platform.rise.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWalletAction**](#createwalletaction) | **POST** /v1/rise/wallet_actions | |
|[**createWalletActionByCustomerReference**](#createwalletactionbycustomerreference) | **POST** /v1/rise/wallet_actions/by_customer_reference | |
|[**disableWalletAction**](#disablewalletaction) | **POST** /v1/rise/wallet_actions/{walletActionId}/disable | |
|[**getRefundableAmounts**](#getrefundableamounts) | **GET** /v1/rise/wallet_actions/refund/amounts | |
|[**queryUnredeemedWalletActions**](#queryunredeemedwalletactions) | **POST** /v1/rise/wallet_actions/query/unredeemed | |
|[**queryWalletActions**](#querywalletactions) | **POST** /v1/rise/wallet_actions/query | |
|[**queryWalletActionsBalances**](#querywalletactionsbalances) | **POST** /v1/rise/wallet_actions/query/balances | |
|[**updateWalletAction**](#updatewalletaction) | **PATCH** /v1/rise/wallet_actions/{walletActionId} | |

# **createWalletAction**
> CreateWalletActionResponse createWalletAction(walletActionWalletActionServiceV1RiseWalletActionsPostCreateWalletActionRequestBody)

Creates a new WalletAction.

### Example

```typescript
import {
    WalletActionApi,
    Configuration,
    WalletActionWalletActionServiceV1RiseWalletActionsPostCreateWalletActionRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletActionApi(configuration);

let walletActionWalletActionServiceV1RiseWalletActionsPostCreateWalletActionRequestBody: WalletActionWalletActionServiceV1RiseWalletActionsPostCreateWalletActionRequestBody; //

const { status, data } = await apiInstance.createWalletAction(
    walletActionWalletActionServiceV1RiseWalletActionsPostCreateWalletActionRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletActionWalletActionServiceV1RiseWalletActionsPostCreateWalletActionRequestBody** | **WalletActionWalletActionServiceV1RiseWalletActionsPostCreateWalletActionRequestBody**|  | |


### Return type

**CreateWalletActionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |
|**400** | Bad Request - Invalid input or parameters  Possible error codes: &#x60;EXPIRATION_DATE_IN_THE_PAST&#x60;, &#x60;START_LATER_THAN_EXPIRATION&#x60;, &#x60;DISABLED_AT_DATE_SET&#x60; |  -  |
|**409** | Conflict - Request conflicts with current state  Possible error codes: &#x60;EXISTING_IDEMPOTENCY_KEY&#x60; |  -  |
|**428** | Precondition Required - Precondition failed  Possible error codes: &#x60;WALLET_ACTION_EXCEEDS_MAXIMUM_BALANCE&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWalletActionByCustomerReference**
> CreateWalletActionByCustomerReferenceResponse1 createWalletActionByCustomerReference(walletActionWalletActionServiceV1RiseWalletActionsByCustomerReferencePostCreateWalletActionByCustomerReferenceRequestBody)

Creates a new WalletAction by customer reference instead of wallet ID. If the customer already has a wallet, the action will be created on that wallet. If the customer does not have a wallet, a new wallet will be created for them.

### Example

```typescript
import {
    WalletActionApi,
    Configuration,
    WalletActionWalletActionServiceV1RiseWalletActionsByCustomerReferencePostCreateWalletActionByCustomerReferenceRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletActionApi(configuration);

let walletActionWalletActionServiceV1RiseWalletActionsByCustomerReferencePostCreateWalletActionByCustomerReferenceRequestBody: WalletActionWalletActionServiceV1RiseWalletActionsByCustomerReferencePostCreateWalletActionByCustomerReferenceRequestBody; //

const { status, data } = await apiInstance.createWalletActionByCustomerReference(
    walletActionWalletActionServiceV1RiseWalletActionsByCustomerReferencePostCreateWalletActionByCustomerReferenceRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletActionWalletActionServiceV1RiseWalletActionsByCustomerReferencePostCreateWalletActionByCustomerReferenceRequestBody** | **WalletActionWalletActionServiceV1RiseWalletActionsByCustomerReferencePostCreateWalletActionByCustomerReferenceRequestBody**|  | |


### Return type

**CreateWalletActionByCustomerReferenceResponse1**

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

# **disableWalletAction**
> DisableWalletActionResponse disableWalletAction(walletActionWalletActionServiceV1RiseWalletActionsWalletActionIdDisablePostDisableWalletActionRequestBody)

Disable a WalletAction immediately and deduct the remaining balance from the wallet.

### Example

```typescript
import {
    WalletActionApi,
    Configuration,
    WalletActionWalletActionServiceV1RiseWalletActionsWalletActionIdDisablePostDisableWalletActionRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletActionApi(configuration);

let walletActionId: string; //ID of the WalletAction to delete. (default to undefined)
let walletActionWalletActionServiceV1RiseWalletActionsWalletActionIdDisablePostDisableWalletActionRequestBody: WalletActionWalletActionServiceV1RiseWalletActionsWalletActionIdDisablePostDisableWalletActionRequestBody; //

const { status, data } = await apiInstance.disableWalletAction(
    walletActionId,
    walletActionWalletActionServiceV1RiseWalletActionsWalletActionIdDisablePostDisableWalletActionRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletActionWalletActionServiceV1RiseWalletActionsWalletActionIdDisablePostDisableWalletActionRequestBody** | **WalletActionWalletActionServiceV1RiseWalletActionsWalletActionIdDisablePostDisableWalletActionRequestBody**|  | |
| **walletActionId** | [**string**] | ID of the WalletAction to delete. | defaults to undefined|


### Return type

**DisableWalletActionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |
|**428** | Precondition Required - Precondition failed  Possible error codes: &#x60;WALLET_ACTION_ALREADY_EXPIRED&#x60;, &#x60;WALLET_ACTION_NOT_ACTIVE&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRefundableAmounts**
> GetRefundableAmountsResponse1 getRefundableAmounts()



### Example

```typescript
import {
    WalletActionApi,
    Configuration
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletActionApi(configuration);

let transactionId: string; //ID of the transaction to get refundable amounts for (default to undefined)

const { status, data } = await apiInstance.getRefundableAmounts(
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionId** | [**string**] | ID of the transaction to get refundable amounts for | defaults to undefined|


### Return type

**GetRefundableAmountsResponse1**

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

# **queryUnredeemedWalletActions**
> QueryUnredeemedWalletActionsResponse queryUnredeemedWalletActions(walletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody)

Query wallet actions that have not been entirely redeemed using [API Query Language](https://platform.rise.ai/docs/#tag/About-API-Query-Language). Results are enriched with the remaining balance of each wallet action. Note: The returned result may contain fewer items than the requested page limit—or even be empty—while still providing a next cursor, because of in memory filtering. Always check the next cursor to determine if there are more items to fetch.

### Example

```typescript
import {
    WalletActionApi,
    Configuration,
    WalletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletActionApi(configuration);

let walletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody: WalletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody; //

const { status, data } = await apiInstance.queryUnredeemedWalletActions(
    walletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody** | **WalletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody**|  | |


### Return type

**QueryUnredeemedWalletActionsResponse**

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

# **queryWalletActions**
> QueryWalletActionResponse1 queryWalletActions(walletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody)

Query WalletActions using [API Query Language](https://platform.rise.ai/docs/#tag/About-API-Query-Language).

### Example

```typescript
import {
    WalletActionApi,
    Configuration,
    WalletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletActionApi(configuration);

let walletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody: WalletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody; //

const { status, data } = await apiInstance.queryWalletActions(
    walletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody** | **WalletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody**|  | |


### Return type

**QueryWalletActionResponse1**

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

# **queryWalletActionsBalances**
> QueryWalletActionBalancesResponse1 queryWalletActionsBalances(walletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody)

Query all WalletActions using [API Query Language](https://platform.rise.ai/docs/#tag/About-API-Query-Language). Results are enriched with the remaining balance of each WalletAction.

### Example

```typescript
import {
    WalletActionApi,
    Configuration,
    WalletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletActionApi(configuration);

let walletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody: WalletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody; //

const { status, data } = await apiInstance.queryWalletActionsBalances(
    walletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody** | **WalletActionWalletActionServiceV1RiseWalletActionsQueryPostQueryWalletActionsRequestBody**|  | |


### Return type

**QueryWalletActionBalancesResponse1**

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

# **updateWalletAction**
> UpdateWalletActionResponse updateWalletAction(walletActionWalletActionServiceV1RiseWalletActionsWalletActionIdPatchUpdateWalletActionRequestBody)

Update a WalletAction, supports partial update. Pass the latest `revision` for a successful update.

### Example

```typescript
import {
    WalletActionApi,
    Configuration,
    WalletActionWalletActionServiceV1RiseWalletActionsWalletActionIdPatchUpdateWalletActionRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WalletActionApi(configuration);

let walletActionId: string; //WalletAction ID. (default to undefined)
let walletActionWalletActionServiceV1RiseWalletActionsWalletActionIdPatchUpdateWalletActionRequestBody: WalletActionWalletActionServiceV1RiseWalletActionsWalletActionIdPatchUpdateWalletActionRequestBody; //

const { status, data } = await apiInstance.updateWalletAction(
    walletActionId,
    walletActionWalletActionServiceV1RiseWalletActionsWalletActionIdPatchUpdateWalletActionRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletActionWalletActionServiceV1RiseWalletActionsWalletActionIdPatchUpdateWalletActionRequestBody** | **WalletActionWalletActionServiceV1RiseWalletActionsWalletActionIdPatchUpdateWalletActionRequestBody**|  | |
| **walletActionId** | [**string**] | WalletAction ID. | defaults to undefined|


### Return type

**UpdateWalletActionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |
|**400** | Bad Request - Invalid input or parameters  Possible error codes: &#x60;START_DATE_IN_THE_PAST&#x60;, &#x60;EXPIRATION_DATE_IN_THE_PAST&#x60;, &#x60;START_LATER_THAN_EXPIRATION&#x60; |  -  |
|**428** | Precondition Required - Precondition failed  Possible error codes: &#x60;WALLET_ACTION_ALREADY_ACTIVE&#x60;, &#x60;WALLET_ACTION_ALREADY_EXPIRED&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

