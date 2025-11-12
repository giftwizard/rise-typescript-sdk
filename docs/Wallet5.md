# Wallet5

A wallet represents a customer who has Store Credits. It contains information about the Gift Card associated with this wallet. It also contains a list of references to the customer in specific source channels (see CustomerReference object definition below).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Wallet ID. | [optional] [readonly] [default to undefined]
**revision** | **string** | Represents the current state of an item. Each time the item is modified, its &#x60;revision&#x60; changes. for an update operation to succeed, you MUST pass the latest revision. | [optional] [readonly] [default to undefined]
**giftCardId** | **string** | ID of the Gift Card associated with this Wallet. | [optional] [readonly] [default to undefined]
**customerReferences** | [**Array&lt;CustomerReference1&gt;**](CustomerReference1.md) | List of references to the customer in specific source channels. See definition below. | [optional] [readonly] [default to undefined]
**createdDate** | **string** | The time this Wallet was created. | [optional] [readonly] [default to undefined]
**updatedDate** | **string** | The time this Wallet was last updated. | [optional] [readonly] [default to undefined]
**giftCardInfo** | [**GiftCardInfo1**](GiftCardInfo1.md) |  | [optional] [default to undefined]
**primaryContactDetails** | [**ContactDetails1**](ContactDetails1.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Wallet5 } from 'rise-typescript-sdk';

const instance: Wallet5 = {
    id,
    revision,
    giftCardId,
    customerReferences,
    createdDate,
    updatedDate,
    giftCardInfo,
    primaryContactDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
