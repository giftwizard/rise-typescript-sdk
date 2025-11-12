# BulkReportEventRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggerKey** | **string** | ey as defined in your app\&#39;s trigger configuration in the app dashboard. For example, &#x60;form_submitted&#x60; or &#x60;invoice_due&#x60;. | [optional] [default to undefined]
**eventsInfo** | **Array&lt;object&gt;** | Repeated list of event details for bulk reporting. | [optional] [default to undefined]

## Example

```typescript
import { BulkReportEventRequest } from 'rise-typescript-sdk';

const instance: BulkReportEventRequest = {
    triggerKey,
    eventsInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
