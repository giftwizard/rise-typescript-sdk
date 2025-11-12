# BuyerInfo

Information about the buyer of a GiftCard Order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** | The buyer\&#39;s first name. | [optional] [default to undefined]
**lastName** | **string** | The buyer\&#39;s last name. | [optional] [default to undefined]
**email** | **string** | The buyer\&#39;s email address. | [optional] [default to undefined]
**billingAddress** | **string** | deprecated | [optional] [default to undefined]
**sourceCustomerId** | **string** | The buyer\&#39;s customer ID in the source sales channel (if it exists). | [optional] [default to undefined]
**billingInfo** | **object** | Billing information of the buyer. | [optional] [default to undefined]

## Example

```typescript
import { BuyerInfo } from 'rise-typescript-sdk';

const instance: BuyerInfo = {
    firstName,
    lastName,
    email,
    billingAddress,
    sourceCustomerId,
    billingInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
