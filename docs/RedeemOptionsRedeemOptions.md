# RedeemOptionsRedeemOptions

Information about a transaction whose source is a gift card redemption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | ID of the order associated with the redemption. | [optional] [default to undefined]
**liability** | **boolean** | Indicates whether the redemption is a liability. | [optional] [default to undefined]
**totalPrice** | **string** | Total price of the order. | [optional] [default to undefined]
**orderNumber** | **string** | Order number associated with the redemption. | [optional] [default to undefined]

## Example

```typescript
import { RedeemOptionsRedeemOptions } from 'rise-typescript-sdk';

const instance: RedeemOptionsRedeemOptions = {
    orderId,
    liability,
    totalPrice,
    orderNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
