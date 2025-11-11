# GiftCard3

The updated GiftCard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique ID of the Gift Card. | [optional] [readonly] [default to undefined]
**code** | **string** | Gift Card code for redemption. | [optional] [default to undefined]
**initialValue** | **string** | Initial value of the Gift Card. | [optional] [default to undefined]
**balance** | **string** | Current balance of the Gift Card. | [optional] [readonly] [default to undefined]
**sourceInfo** | [**GiftCardSourceInfo1**](GiftCardSourceInfo1.md) |  | [optional] [default to undefined]
**revision** | **string** | Gift Card revision. | [optional] [readonly] [default to undefined]
**currency** | **string** | Gift Card currency. | [optional] [default to undefined]
**expirationDate** | **string** | Gift Card expiration date. | [optional] [default to undefined]
**createdDate** | **string** | Gift Card creation date. | [optional] [readonly] [default to undefined]
**updatedDate** | **string** | Gift Card last update date. | [optional] [readonly] [default to undefined]
**lastTransactionId** | **string** | ID of the last transaction that modified the gift card balance. (**Deprecated**: Use &#x60;id&#x60; instead.) | [optional] [readonly] [default to undefined]
**disableDate** | **string** | Gift Card disable date, if the gift card was disabled. | [optional] [readonly] [default to undefined]
**idempotencyKey** | **string** | Gift Card idempotency key, to prevent duplicate creation. | [optional] [default to undefined]
**codeSuffix** | **string** | Last 4 characters of the gift card code for easier reference and searching. | [optional] [readonly] [default to undefined]
**transactionDetails** | [**TransactionDetails1**](TransactionDetails1.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GiftCard3 } from 'rise-typescript-sdk';

const instance: GiftCard3 = {
    id,
    code,
    initialValue,
    balance,
    sourceInfo,
    revision,
    currency,
    expirationDate,
    createdDate,
    updatedDate,
    lastTransactionId,
    disableDate,
    idempotencyKey,
    codeSuffix,
    transactionDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
