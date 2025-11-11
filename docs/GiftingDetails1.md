# GiftingDetails1

Optional gifting details to add to the email.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sendDate** | **string** | Optional date for when to send the email. Leave it empty for immediate dispatch. | [optional] [readonly] [default to undefined]
**greeting** | **string** | Optional custom text to add to the email. | [optional] [default to undefined]
**imageUrl** | **string** | Optional image to add to the email. | [optional] [default to undefined]
**senderName** | **string** | The name of the sender. | [optional] [default to undefined]
**senderEmail** | **string** | The email of the sender. | [optional] [default to undefined]

## Example

```typescript
import { GiftingDetails1 } from 'rise-typescript-sdk';

const instance: GiftingDetails1 = {
    sendDate,
    greeting,
    imageUrl,
    senderName,
    senderEmail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
