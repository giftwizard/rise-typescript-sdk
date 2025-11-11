# GiftingInfo

Optional Gifting Information for the Gift Card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipientFirstName** | **string** | First Name of the recipient. | [optional] [default to undefined]
**recipientLastName** | **string** | Last Name of the recipient. | [optional] [default to undefined]
**recipientEmail** | **string** | Email address of the recipient. | [optional] [default to undefined]
**sendAt** | **string** | Date and time the Gift Card is scheduled to be sent. Default is now. | [optional] [default to undefined]
**message** | **string** | Message to be added to the gift card email. | [optional] [default to undefined]
**mediaUrl** | **string** | Media to be added to the gift card email. | [optional] [default to undefined]

## Example

```typescript
import { GiftingInfo } from 'rise-typescript-sdk';

const instance: GiftingInfo = {
    recipientFirstName,
    recipientLastName,
    recipientEmail,
    sendAt,
    message,
    mediaUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
