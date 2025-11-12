# WorkflowsEsbConfigResolverWorkflowsV1EventsReportPostReportEventRequestBody



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggerKey** | **string** | Trigger key as defined in your app\&#39;s trigger configuration. For example, &#x60;order_returned&#x60; or &#x60;order_paid&#x60;. | [default to undefined]
**payload** | **object** | Event payload, formatted as key:value pairs. Must comply with the payload schema if you provided one when configuring your trigger.  Key names can include only alphanumeric characters or underscores (&#x60;A-Z&#x60;, &#x60;a-z&#x60;, &#x60;0-9&#x60;, &#x60;_&#x60;). They cannot start with an underscore.  Values can be strings, numbers, integers, booleans, or arrays. If a value is an array, the array items must be objects, and nested object properties must be strings, numbers, integers, or booleans only. | [optional] [default to undefined]
**externalEntityId** | **string** | ID of the related resource in GUID format | [optional] [default to undefined]
**idempotency** | [**Idempotency1**](Idempotency1.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WorkflowsEsbConfigResolverWorkflowsV1EventsReportPostReportEventRequestBody } from 'rise-typescript-sdk';

const instance: WorkflowsEsbConfigResolverWorkflowsV1EventsReportPostReportEventRequestBody = {
    triggerKey,
    payload,
    externalEntityId,
    idempotency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
