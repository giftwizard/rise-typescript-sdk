# GiftCardOrderApi

All URIs are relative to *https://platform.rise.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createOrder**](#createorder) | **POST** /v1/rise/orders | |
|[**fulfillOrder**](#fulfillorder) | **POST** /v1/rise/orders/fulfill | |
|[**queryOrders**](#queryorders) | **POST** /v1/rise/orders/query | |
|[**updateOrder**](#updateorder) | **PATCH** /v1/rise/orders/{orderId} | |
|[**updateOrderStatus**](#updateorderstatus) | **POST** /v1/rise/orders/status | |

# **createOrder**
> CreateOrderResponse1 createOrder(giftCardOrderGiftCardOrderServiceV1RiseOrdersPostCreateOrderRequestBody)

Creates an Order for a Rise Gift Card.

### Example

```typescript
import {
    GiftCardOrderApi,
    Configuration,
    GiftCardOrderGiftCardOrderServiceV1RiseOrdersPostCreateOrderRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardOrderApi(configuration);

let giftCardOrderGiftCardOrderServiceV1RiseOrdersPostCreateOrderRequestBody: GiftCardOrderGiftCardOrderServiceV1RiseOrdersPostCreateOrderRequestBody; //

const { status, data } = await apiInstance.createOrder(
    giftCardOrderGiftCardOrderServiceV1RiseOrdersPostCreateOrderRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **giftCardOrderGiftCardOrderServiceV1RiseOrdersPostCreateOrderRequestBody** | **GiftCardOrderGiftCardOrderServiceV1RiseOrdersPostCreateOrderRequestBody**|  | |


### Return type

**CreateOrderResponse1**

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

# **fulfillOrder**
> fulfillOrder(giftCardOrderGiftCardOrderServiceV1RiseOrdersFulfillPostFulfillOrderRequestBody)

Fulfills an order in an async manner.

### Example

```typescript
import {
    GiftCardOrderApi,
    Configuration,
    GiftCardOrderGiftCardOrderServiceV1RiseOrdersFulfillPostFulfillOrderRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardOrderApi(configuration);

let giftCardOrderGiftCardOrderServiceV1RiseOrdersFulfillPostFulfillOrderRequestBody: GiftCardOrderGiftCardOrderServiceV1RiseOrdersFulfillPostFulfillOrderRequestBody; //

const { status, data } = await apiInstance.fulfillOrder(
    giftCardOrderGiftCardOrderServiceV1RiseOrdersFulfillPostFulfillOrderRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **giftCardOrderGiftCardOrderServiceV1RiseOrdersFulfillPostFulfillOrderRequestBody** | **GiftCardOrderGiftCardOrderServiceV1RiseOrdersFulfillPostFulfillOrderRequestBody**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns an empty object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryOrders**
> QueryOrdersResponse1 queryOrders(giftCardOrderGiftCardOrderServiceV1RiseOrdersQueryPostQueryOrdersRequestBody)

Retrieves a list of Orders, given the provided paging, filtering, and sorting]. Up to 1,000 Orders can be returned per request. To learn how to query Orders, see [API Query Language](https://platform.rise.ai/docs/#tag/About-API-Query-Language).

### Example

```typescript
import {
    GiftCardOrderApi,
    Configuration,
    GiftCardOrderGiftCardOrderServiceV1RiseOrdersQueryPostQueryOrdersRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardOrderApi(configuration);

let giftCardOrderGiftCardOrderServiceV1RiseOrdersQueryPostQueryOrdersRequestBody: GiftCardOrderGiftCardOrderServiceV1RiseOrdersQueryPostQueryOrdersRequestBody; //

const { status, data } = await apiInstance.queryOrders(
    giftCardOrderGiftCardOrderServiceV1RiseOrdersQueryPostQueryOrdersRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **giftCardOrderGiftCardOrderServiceV1RiseOrdersQueryPostQueryOrdersRequestBody** | **GiftCardOrderGiftCardOrderServiceV1RiseOrdersQueryPostQueryOrdersRequestBody**|  | |


### Return type

**QueryOrdersResponse1**

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

# **updateOrder**
> UpdateOrderResponse1 updateOrder(giftCardOrderGiftCardOrderServiceV1RiseOrdersOrderIdPatchUpdateOrderRequestBody)

Updates a Rise Gift Card Order.

### Example

```typescript
import {
    GiftCardOrderApi,
    Configuration,
    GiftCardOrderGiftCardOrderServiceV1RiseOrdersOrderIdPatchUpdateOrderRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardOrderApi(configuration);

let orderId: string; //Order ID. (default to undefined)
let giftCardOrderGiftCardOrderServiceV1RiseOrdersOrderIdPatchUpdateOrderRequestBody: GiftCardOrderGiftCardOrderServiceV1RiseOrdersOrderIdPatchUpdateOrderRequestBody; //

const { status, data } = await apiInstance.updateOrder(
    orderId,
    giftCardOrderGiftCardOrderServiceV1RiseOrdersOrderIdPatchUpdateOrderRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **giftCardOrderGiftCardOrderServiceV1RiseOrdersOrderIdPatchUpdateOrderRequestBody** | **GiftCardOrderGiftCardOrderServiceV1RiseOrdersOrderIdPatchUpdateOrderRequestBody**|  | |
| **orderId** | [**string**] | Order ID. | defaults to undefined|


### Return type

**UpdateOrderResponse1**

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

# **updateOrderStatus**
> updateOrderStatus(giftCardOrderGiftCardOrderServiceV1RiseOrdersStatusPostUpdateOrderStatusRequestBody)

Updates order payment status and fulfills it accordingly, in an async manner.

### Example

```typescript
import {
    GiftCardOrderApi,
    Configuration,
    GiftCardOrderGiftCardOrderServiceV1RiseOrdersStatusPostUpdateOrderStatusRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new GiftCardOrderApi(configuration);

let giftCardOrderGiftCardOrderServiceV1RiseOrdersStatusPostUpdateOrderStatusRequestBody: GiftCardOrderGiftCardOrderServiceV1RiseOrdersStatusPostUpdateOrderStatusRequestBody; //

const { status, data } = await apiInstance.updateOrderStatus(
    giftCardOrderGiftCardOrderServiceV1RiseOrdersStatusPostUpdateOrderStatusRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **giftCardOrderGiftCardOrderServiceV1RiseOrdersStatusPostUpdateOrderStatusRequestBody** | **GiftCardOrderGiftCardOrderServiceV1RiseOrdersStatusPostUpdateOrderStatusRequestBody**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns an empty object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

