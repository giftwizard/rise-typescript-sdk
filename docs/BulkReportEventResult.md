# BulkReportEventResult



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemMetadata** | **object** | Metadata for the individual item in the request. | [optional] [default to undefined]
**eventInfo** | **object** | Event details for the item in the request. | [optional] [default to undefined]
**activationIds** | **Array&lt;string&gt;** | The activation IDs of triggered ReportEvents. | [optional] [default to undefined]

## Example

```typescript
import { BulkReportEventResult } from 'rise-typescript-sdk';

const instance: BulkReportEventResult = {
    itemMetadata,
    eventInfo,
    activationIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
