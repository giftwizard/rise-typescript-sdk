# BulkCancelEventRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggerKey** | **string** | gger key whose events you want to cancel. For example, &#x60;form_submitted&#x60; or &#x60;invoice_due&#x60;. | [optional] [default to undefined]
**externalEntityIds** | **Array&lt;string&gt;** | Repeated list of external_entity_id, representing the related resources\&#39; IDs. | [optional] [default to undefined]

## Example

```typescript
import { BulkCancelEventRequest } from 'rise-typescript-sdk';

const instance: BulkCancelEventRequest = {
    triggerKey,
    externalEntityIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
