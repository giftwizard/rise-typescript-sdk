# ActivationScheduleCompleted



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Activation identifier | [optional] [default to undefined]
**scheduleId** | **string** | Activation schedule identifier | [optional] [default to undefined]
**scheduleDate** | **string** | Activation schedule due date | [optional] [default to undefined]
**payload** | **object** | Activation payload | [optional] [default to undefined]
**automation** | **object** | Activation Automation | [optional] [default to undefined]
**externalEntityId** | **string** | Optional - external entity id that this activation is related to | [optional] [default to undefined]

## Example

```typescript
import { ActivationScheduleCompleted } from 'rise-typescript-sdk';

const instance: ActivationScheduleCompleted = {
    id,
    scheduleId,
    scheduleDate,
    payload,
    automation,
    externalEntityId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
