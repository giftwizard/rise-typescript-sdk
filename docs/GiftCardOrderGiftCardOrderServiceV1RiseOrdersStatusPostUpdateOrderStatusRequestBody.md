# GiftCardOrderGiftCardOrderServiceV1RiseOrdersStatusPostUpdateOrderStatusRequestBody



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**OrderQuery2**](OrderQuery2.md) |  | [default to undefined]
**paymentStatus** | **string** | The new payment status of the order. | [default to undefined]
**skipAutoFulfillment** | **boolean** | Skip auto fulfillment of the gift card. Default is false. | [optional] [default to undefined]

## Example

```typescript
import { GiftCardOrderGiftCardOrderServiceV1RiseOrdersStatusPostUpdateOrderStatusRequestBody } from 'rise-typescript-sdk';

const instance: GiftCardOrderGiftCardOrderServiceV1RiseOrdersStatusPostUpdateOrderStatusRequestBody = {
    query,
    paymentStatus,
    skipAutoFulfillment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
