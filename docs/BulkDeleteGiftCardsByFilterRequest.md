# BulkDeleteGiftCardsByFilterRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **object** | WQL expression | [optional] [default to undefined]
**metaSiteId** | **string** | MSID from which to delete the gift cards | [optional] [default to undefined]
**expectedAmount** | **number** | Expected gift card amount to delete | [optional] [default to undefined]

## Example

```typescript
import { BulkDeleteGiftCardsByFilterRequest } from 'rise-typescript-sdk';

const instance: BulkDeleteGiftCardsByFilterRequest = {
    query,
    metaSiteId,
    expectedAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
