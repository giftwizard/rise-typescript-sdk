# PaymentMethodRefundOptions



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | ID of the order associated with the refund. | [optional] [default to undefined]
**liability** | **boolean** | Indicates whether the payment method refund is a liability. | [optional] [default to undefined]
**orderNumber** | **string** | Order number associated with the refund. | [optional] [default to undefined]
**activeFundingTransaction** | **object** | Optional details for the refund that is based of a specific store credit. | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodRefundOptions } from 'rise-typescript-sdk';

const instance: PaymentMethodRefundOptions = {
    orderId,
    liability,
    orderNumber,
    activeFundingTransaction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
