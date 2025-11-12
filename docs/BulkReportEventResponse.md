# BulkReportEventResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggerKey** | **string** | Trigger key associated with the event. | [optional] [default to undefined]
**results** | **Array&lt;object&gt;** | List of results for each item in the bulk report event request. | [optional] [default to undefined]
**bulkActionMetadata** | **object** | Metadata for the overall bulk action, including success and failure counts. | [optional] [default to undefined]

## Example

```typescript
import { BulkReportEventResponse } from 'rise-typescript-sdk';

const instance: BulkReportEventResponse = {
    triggerKey,
    results,
    bulkActionMetadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
