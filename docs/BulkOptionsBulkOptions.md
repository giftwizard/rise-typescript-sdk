# BulkOptionsBulkOptions

Bulk Options. (**Deprecated**: Use `wallet_action_start_options` instead.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bulkId** | **string** | ID of the bulk that issued the gift card or transaction. | [optional] [default to undefined]
**liability** | **boolean** | Indicates whether the gift card or transaction is a liability. | [optional] [default to undefined]
**note** | **string** | Internal note about the bulk | [optional] [default to undefined]

## Example

```typescript
import { BulkOptionsBulkOptions } from 'rise-typescript-sdk';

const instance: BulkOptionsBulkOptions = {
    bulkId,
    liability,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
