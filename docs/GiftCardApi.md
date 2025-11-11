# GiftCardApi

All URIs are relative to *https://platform.rise.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**countGiftCards**](#countgiftcards) | **POST** /v1/rise/gift-cards/count | |
|[**createGiftCard**](#creategiftcard) | **POST** /v1/rise/gift-cards | |
|[**decreaseBalance**](#decreasebalance) | **POST** /v1/rise/gift-cards/{transactionGiftCardId}/decrease | |
|[**disableGiftCard**](#disablegiftcard) | **POST** /v1/rise/gift-cards/{giftCardId}/disable | |
|[**getGiftCard**](#getgiftcard) | **GET** /v1/rise/gift-cards/{giftCardId} | |
|[**increaseBalance**](#increasebalance) | **POST** /v1/rise/gift-cards/{transactionGiftCardId}/increase | |
|[**queryGiftCards**](#querygiftcards) | **POST** /v1/rise/gift-cards/query | |
|[**searchGiftCards**](#searchgiftcards) | **POST** /v1/rise/gift-cards/search | |
|[**updateGiftCard**](#updategiftcard) | **PATCH** /v1/rise/gift-cards/{giftCardId} | |

# **countGiftCards**
> CountGiftCardsResponse1 countGiftCards(giftCardGiftCardServiceV1RiseGiftCardsCountPostCountGiftCardsRequestBody)

TODO: change to Rise domain when it\'s ready Count GiftCards that match the given [API Query Language](https://platform.rise.ai/docs/#tag/About-API-Query-Language) filter.

### Example

```typescript
import {
    GiftCardApi,
    Configuration,
    GiftCardGiftCardServiceV1RiseGiftCardsCountPostCountGiftCardsRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardApi(configuration);

let giftCardGiftCardServiceV1RiseGiftCardsCountPostCountGiftCardsRequestBody: GiftCardGiftCardServiceV1RiseGiftCardsCountPostCountGiftCardsRequestBody; //

const { status, data } = await apiInstance.countGiftCards(
    giftCardGiftCardServiceV1RiseGiftCardsCountPostCountGiftCardsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **giftCardGiftCardServiceV1RiseGiftCardsCountPostCountGiftCardsRequestBody** | **GiftCardGiftCardServiceV1RiseGiftCardsCountPostCountGiftCardsRequestBody**|  | |


### Return type

**CountGiftCardsResponse1**

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

# **createGiftCard**
> CreateGiftCardResponse1 createGiftCard(giftCardGiftCardServiceV1RiseGiftCardsPostCreateGiftCardRequestBody)

Creates a new GiftCard.

### Example

```typescript
import {
    GiftCardApi,
    Configuration,
    GiftCardGiftCardServiceV1RiseGiftCardsPostCreateGiftCardRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardApi(configuration);

let giftCardGiftCardServiceV1RiseGiftCardsPostCreateGiftCardRequestBody: GiftCardGiftCardServiceV1RiseGiftCardsPostCreateGiftCardRequestBody; //

const { status, data } = await apiInstance.createGiftCard(
    giftCardGiftCardServiceV1RiseGiftCardsPostCreateGiftCardRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **giftCardGiftCardServiceV1RiseGiftCardsPostCreateGiftCardRequestBody** | **GiftCardGiftCardServiceV1RiseGiftCardsPostCreateGiftCardRequestBody**|  | |


### Return type

**CreateGiftCardResponse1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |
|**428** | Precondition Required - Precondition failed  Possible error codes: &#x60;INVALID_CODE&#x60;, &#x60;INVALID_EXPIRATION_DATE&#x60;, &#x60;EXISTING_IDEMPOTENCY_KEY&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **decreaseBalance**
> DecreaseBalanceResponse1 decreaseBalance(giftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdDecreasePostDecreaseBalanceRequestBody)

Subtracts from the GiftCard balance and creates a balance Transaction.

### Example

```typescript
import {
    GiftCardApi,
    Configuration,
    GiftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdDecreasePostDecreaseBalanceRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardApi(configuration);

let transactionGiftCardId: string; //Unique ID of the gift card associated with this transaction. (default to undefined)
let giftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdDecreasePostDecreaseBalanceRequestBody: GiftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdDecreasePostDecreaseBalanceRequestBody; //

const { status, data } = await apiInstance.decreaseBalance(
    transactionGiftCardId,
    giftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdDecreasePostDecreaseBalanceRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **giftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdDecreasePostDecreaseBalanceRequestBody** | **GiftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdDecreasePostDecreaseBalanceRequestBody**|  | |
| **transactionGiftCardId** | [**string**] | Unique ID of the gift card associated with this transaction. | defaults to undefined|


### Return type

**DecreaseBalanceResponse1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |
|**428** | Precondition Required - Precondition failed  Possible error codes: &#x60;EXISTING_IDEMPOTENCY_KEY&#x60;, &#x60;INSUFFICIENT_FUNDS&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disableGiftCard**
> DisableGiftCardResponse1 disableGiftCard(body)

Disable a GiftCard. It cannot be re-enabled.

### Example

```typescript
import {
    GiftCardApi,
    Configuration
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardApi(configuration);

let giftCardId: string; //The ID of the GiftCard to disable. (default to undefined)
let body: object; //

const { status, data } = await apiInstance.disableGiftCard(
    giftCardId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **giftCardId** | [**string**] | The ID of the GiftCard to disable. | defaults to undefined|


### Return type

**DisableGiftCardResponse1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |
|**404** | Not Found - Resource not found  Possible error codes: &#x60;GIFT_CARD_NOT_FOUND&#x60; |  -  |
|**428** | Precondition Required - Precondition failed  Possible error codes: &#x60;GIFT_CARD_DISABLED&#x60;, &#x60;GIFT_CARD_EXPIRED&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGiftCard**
> GetGiftCardResponse1 getGiftCard()

Get a GiftCard by ID.

### Example

```typescript
import {
    GiftCardApi,
    Configuration
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardApi(configuration);

let giftCardId: string; //The ID of the GiftCard to retrieve. (default to undefined)

const { status, data } = await apiInstance.getGiftCard(
    giftCardId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **giftCardId** | [**string**] | The ID of the GiftCard to retrieve. | defaults to undefined|


### Return type

**GetGiftCardResponse1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |
|**404** | Not Found - Resource not found  Possible error codes: &#x60;GIFT_CARD_NOT_FOUND&#x60; |  -  |
|**428** | Precondition Required - Precondition failed  Possible error codes: &#x60;GIFT_CARD_DISABLED&#x60;, &#x60;GIFT_CARD_EXPIRED&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **increaseBalance**
> IncreaseBalanceResponse1 increaseBalance(giftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdIncreasePostIncreaseBalanceRequestBody)

Adds to the GiftCard balance and creates a balance Transaction.

### Example

```typescript
import {
    GiftCardApi,
    Configuration,
    GiftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdIncreasePostIncreaseBalanceRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardApi(configuration);

let transactionGiftCardId: string; //Unique ID of the gift card associated with this transaction. (default to undefined)
let giftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdIncreasePostIncreaseBalanceRequestBody: GiftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdIncreasePostIncreaseBalanceRequestBody; //

const { status, data } = await apiInstance.increaseBalance(
    transactionGiftCardId,
    giftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdIncreasePostIncreaseBalanceRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **giftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdIncreasePostIncreaseBalanceRequestBody** | **GiftCardGiftCardServiceV1RiseGiftCardsTransactionGiftCardIdIncreasePostIncreaseBalanceRequestBody**|  | |
| **transactionGiftCardId** | [**string**] | Unique ID of the gift card associated with this transaction. | defaults to undefined|


### Return type

**IncreaseBalanceResponse1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |
|**428** | Precondition Required - Precondition failed  Possible error codes: &#x60;EXISTING_IDEMPOTENCY_KEY&#x60;, &#x60;INVALID_GIFT_CARD_BALANCE&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryGiftCards**
> QueryGiftCardsResponse1 queryGiftCards(giftCardGiftCardServiceV1RiseGiftCardsQueryPostQueryGiftCardsRequestBody)

Query GiftCards using [API Query Language](https://platform.rise.ai/docs/#tag/About-API-Query-Language).

### Example

```typescript
import {
    GiftCardApi,
    Configuration,
    GiftCardGiftCardServiceV1RiseGiftCardsQueryPostQueryGiftCardsRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardApi(configuration);

let giftCardGiftCardServiceV1RiseGiftCardsQueryPostQueryGiftCardsRequestBody: GiftCardGiftCardServiceV1RiseGiftCardsQueryPostQueryGiftCardsRequestBody; //

const { status, data } = await apiInstance.queryGiftCards(
    giftCardGiftCardServiceV1RiseGiftCardsQueryPostQueryGiftCardsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **giftCardGiftCardServiceV1RiseGiftCardsQueryPostQueryGiftCardsRequestBody** | **GiftCardGiftCardServiceV1RiseGiftCardsQueryPostQueryGiftCardsRequestBody**|  | |


### Return type

**QueryGiftCardsResponse1**

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

# **searchGiftCards**
> SearchGiftCardsResponse1 searchGiftCards(giftCardGiftCardServiceV1RiseGiftCardsSearchPostSearchGiftCardsRequestBody)

Search for GiftCards by field.

### Example

```typescript
import {
    GiftCardApi,
    Configuration,
    GiftCardGiftCardServiceV1RiseGiftCardsSearchPostSearchGiftCardsRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardApi(configuration);

let giftCardGiftCardServiceV1RiseGiftCardsSearchPostSearchGiftCardsRequestBody: GiftCardGiftCardServiceV1RiseGiftCardsSearchPostSearchGiftCardsRequestBody; //

const { status, data } = await apiInstance.searchGiftCards(
    giftCardGiftCardServiceV1RiseGiftCardsSearchPostSearchGiftCardsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **giftCardGiftCardServiceV1RiseGiftCardsSearchPostSearchGiftCardsRequestBody** | **GiftCardGiftCardServiceV1RiseGiftCardsSearchPostSearchGiftCardsRequestBody**|  | |


### Return type

**SearchGiftCardsResponse1**

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

# **updateGiftCard**
> UpdateGiftCardResponse1 updateGiftCard(giftCardGiftCardServiceV1RiseGiftCardsGiftCardIdPatchUpdateGiftCardRequestBody)

Update a GiftCard, supports partial update. Pass the latest `revision` for a successful update.

### Example

```typescript
import {
    GiftCardApi,
    Configuration,
    GiftCardGiftCardServiceV1RiseGiftCardsGiftCardIdPatchUpdateGiftCardRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardApi(configuration);

let giftCardId: string; //The ID of the GiftCard to update. (default to undefined)
let giftCardGiftCardServiceV1RiseGiftCardsGiftCardIdPatchUpdateGiftCardRequestBody: GiftCardGiftCardServiceV1RiseGiftCardsGiftCardIdPatchUpdateGiftCardRequestBody; //

const { status, data } = await apiInstance.updateGiftCard(
    giftCardId,
    giftCardGiftCardServiceV1RiseGiftCardsGiftCardIdPatchUpdateGiftCardRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **giftCardGiftCardServiceV1RiseGiftCardsGiftCardIdPatchUpdateGiftCardRequestBody** | **GiftCardGiftCardServiceV1RiseGiftCardsGiftCardIdPatchUpdateGiftCardRequestBody**|  | |
| **giftCardId** | [**string**] | The ID of the GiftCard to update. | defaults to undefined|


### Return type

**UpdateGiftCardResponse1**

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

