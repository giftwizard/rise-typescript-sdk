# RecipientApi

All URIs are relative to *https://platform.rise.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createRecipient**](#createrecipient) | **POST** /v1/rise/recipients | |
|[**deleteRecipient**](#deleterecipient) | **DELETE** /v1/rise/recipients/{recipientId} | |
|[**getRecipient**](#getrecipient) | **GET** /v1/rise/recipients/{recipientId} | |
|[**queryRecipients**](#queryrecipients) | **POST** /v1/rise/recipients/query | |

# **createRecipient**
> CreateRecipientResponse1 createRecipient(recipientGiftCardRecipientServiceV1RiseRecipientsPostCreateRecipientRequestBody)

Creates a Recipient. Note: This method is already called by GiftCardOrderService when an order is fulfilled.

### Example

```typescript
import {
    RecipientApi,
    Configuration,
    RecipientGiftCardRecipientServiceV1RiseRecipientsPostCreateRecipientRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new RecipientApi(configuration);

let recipientGiftCardRecipientServiceV1RiseRecipientsPostCreateRecipientRequestBody: RecipientGiftCardRecipientServiceV1RiseRecipientsPostCreateRecipientRequestBody; //

const { status, data } = await apiInstance.createRecipient(
    recipientGiftCardRecipientServiceV1RiseRecipientsPostCreateRecipientRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recipientGiftCardRecipientServiceV1RiseRecipientsPostCreateRecipientRequestBody** | **RecipientGiftCardRecipientServiceV1RiseRecipientsPostCreateRecipientRequestBody**|  | |


### Return type

**CreateRecipientResponse1**

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

# **deleteRecipient**
> deleteRecipient()

Deletes a Recipient by ID.

### Example

```typescript
import {
    RecipientApi,
    Configuration
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new RecipientApi(configuration);

let recipientId: string; //Id of the Recipient to delete. (default to undefined)

const { status, data } = await apiInstance.deleteRecipient(
    recipientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recipientId** | [**string**] | Id of the Recipient to delete. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns an empty object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRecipient**
> GetRecipientResponse getRecipient()

Retrieves a Recipient by ID.

### Example

```typescript
import {
    RecipientApi,
    Configuration
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new RecipientApi(configuration);

let recipientId: string; //ID of the Recipient to retrieve. (default to undefined)

const { status, data } = await apiInstance.getRecipient(
    recipientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recipientId** | [**string**] | ID of the Recipient to retrieve. | defaults to undefined|


### Return type

**GetRecipientResponse**

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

# **queryRecipients**
> QueryRecipientsResponse1 queryRecipients(recipientGiftCardRecipientServiceV1RiseRecipientsQueryPostQueryRecipientsRequestBody)

Retrieves a list of Recipients, given the provided paging, filtering, and sorting. To learn how to query Recipients, see [API Query Language](https://platform.rise.ai/docs/#tag/About-API-Query-Language).

### Example

```typescript
import {
    RecipientApi,
    Configuration,
    RecipientGiftCardRecipientServiceV1RiseRecipientsQueryPostQueryRecipientsRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new RecipientApi(configuration);

let recipientGiftCardRecipientServiceV1RiseRecipientsQueryPostQueryRecipientsRequestBody: RecipientGiftCardRecipientServiceV1RiseRecipientsQueryPostQueryRecipientsRequestBody; //

const { status, data } = await apiInstance.queryRecipients(
    recipientGiftCardRecipientServiceV1RiseRecipientsQueryPostQueryRecipientsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recipientGiftCardRecipientServiceV1RiseRecipientsQueryPostQueryRecipientsRequestBody** | **RecipientGiftCardRecipientServiceV1RiseRecipientsQueryPostQueryRecipientsRequestBody**|  | |


### Return type

**QueryRecipientsResponse1**

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

