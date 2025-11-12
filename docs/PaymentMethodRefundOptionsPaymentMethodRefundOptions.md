# PaymentMethodRefundOptionsPaymentMethodRefundOptions

Information about a transaction whose source is a refunding a payment method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | ID of the order associated with the refund. | [optional] [default to undefined]
**liability** | **boolean** | Indicates whether the payment method refund is a liability. | [optional] [default to undefined]
**orderNumber** | **string** | Order number associated with the refund. | [optional] [default to undefined]
**activeFundingTransaction** | [**PaymentMethodRefundWalletActionDetails1**](PaymentMethodRefundWalletActionDetails1.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodRefundOptionsPaymentMethodRefundOptions } from 'rise-typescript-sdk';

const instance: PaymentMethodRefundOptionsPaymentMethodRefundOptions = {
    orderId,
    liability,
    orderNumber,
    activeFundingTransaction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
