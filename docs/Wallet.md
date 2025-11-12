# Wallet

A wallet represents a customer who has Store Credits. It contains information about the Gift Card associated with this wallet. It also contains a list of references to the customer in specific source channels (see CustomerReference object definition below).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Wallet ID. | [optional] [readonly] [default to undefined]
**revision** | **string** | Represents the current state of an item. Each time the item is modified, its &#x60;revision&#x60; changes. for an update operation to succeed, you MUST pass the latest revision. | [optional] [readonly] [default to undefined]
**giftCardId** | **string** | ID of the Gift Card associated with this Wallet. | [optional] [readonly] [default to undefined]
**customerReferences** | **Array&lt;object&gt;** | List of references to the customer in specific source channels. See definition below. | [optional] [readonly] [default to undefined]
**createdDate** | **string** | The time this Wallet was created. | [optional] [readonly] [default to undefined]
**updatedDate** | **string** | The time this Wallet was last updated. | [optional] [readonly] [default to undefined]
**giftCardInfo** | **object** | Information about the Gift Card associated with this Wallet. | [optional] [readonly] [default to undefined]
**primaryContactDetails** | **object** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Wallet } from 'rise-typescript-sdk';

const instance: Wallet = {
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
