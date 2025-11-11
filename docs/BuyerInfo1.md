# BuyerInfo1

Information about the buyer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** | The buyer\&#39;s first name. | [optional] [default to undefined]
**lastName** | **string** | The buyer\&#39;s last name. | [optional] [default to undefined]
**email** | **string** | The buyer\&#39;s email address. | [optional] [default to undefined]
**billingAddress** | **string** | deprecated (**Deprecated**: Use &#x60;billing_info&#x60; instead.) | [optional] [default to undefined]
**sourceCustomerId** | **string** | The buyer\&#39;s customer ID in the source sales channel (if it exists). | [optional] [default to undefined]
**billingInfo** | [**BillingInfo1**](BillingInfo1.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BuyerInfo1 } from 'rise-typescript-sdk';

const instance: BuyerInfo1 = {
    firstName,
    lastName,
    email,
    billingAddress,
    sourceCustomerId,
    billingInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
