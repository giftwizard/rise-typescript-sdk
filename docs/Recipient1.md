# Recipient1

The created Recipient.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Recipient ID. | [optional] [readonly] [default to undefined]
**revision** | **string** | Revision number, which increments by 1 each time the Recipient is updated. To prevent conflicting changes, the current revision must be passed when updating the Recipient.  Ignored when creating a Recipient. | [optional] [readonly] [default to undefined]
**createdDate** | **string** | Date and time the Recipient was created. | [optional] [readonly] [default to undefined]
**updatedDate** | **string** | Date and time the Recipient was last updated. | [optional] [readonly] [default to undefined]
**name** | **string** | The name of the recipient. | [optional] [default to undefined]
**email** | **string** | The email of the recipient. | [optional] [default to undefined]
**giftCardId** | **string** | The ID of the gift card that was sent to the recipient. | [optional] [default to undefined]
**giftingDetails** | [**GiftingDetails1**](GiftingDetails1.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Recipient1 } from 'rise-typescript-sdk';

const instance: Recipient1 = {
    id,
    revision,
    createdDate,
    updatedDate,
    name,
    email,
    giftCardId,
    giftingDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
