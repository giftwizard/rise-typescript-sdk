# BulkCancelEventResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggerKey** | **string** | Trigger key related to the canceled event. | [optional] [default to undefined]
**results** | **Array&lt;object&gt;** | List of results for each item in the bulk cancel event request. | [optional] [default to undefined]
**bulkActionMetadata** | **object** | Metadata for the overall bulk action, including success and failure counts. | [optional] [default to undefined]

## Example

```typescript
import { BulkCancelEventResponse } from 'rise-typescript-sdk';

const instance: BulkCancelEventResponse = {
    triggerKey,
    results,
    bulkActionMetadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
