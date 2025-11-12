# UpdateOrderStatusRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **object** | Order ID or Source Identifiers of the Order whose status is to be updated. | [optional] [default to undefined]
**paymentStatus** | **string** | The new payment status of the order. | [optional] [default to undefined]
**skipAutoFulfillment** | **boolean** | Skip auto fulfillment of the gift card. Default is false. | [optional] [default to undefined]

## Example

```typescript
import { UpdateOrderStatusRequest } from 'rise-typescript-sdk';

const instance: UpdateOrderStatusRequest = {
    query,
    paymentStatus,
    skipAutoFulfillment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
