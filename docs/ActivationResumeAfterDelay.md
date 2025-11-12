# ActivationResumeAfterDelay



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Activation identifier | [optional] [default to undefined]
**scheduleId** | **string** | Activation schedule identifier | [optional] [default to undefined]
**scheduleDate** | **string** | Activation schedule due date | [optional] [default to undefined]
**payload** | **object** | Activation payload | [optional] [default to undefined]
**automation** | **object** | Activation Automation | [optional] [default to undefined]
**scheduledActionId** | **string** | Scheduled action identifier - with the intent to execute that action\&#39;s post actions | [optional] [default to undefined]
**externalEntityId** | **string** | Optional - external entity id that this activation is related to | [optional] [default to undefined]

## Example

```typescript
import { ActivationResumeAfterDelay } from 'rise-typescript-sdk';

const instance: ActivationResumeAfterDelay = {
    id,
    scheduleId,
    scheduleDate,
    payload,
    automation,
    scheduledActionId,
    externalEntityId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
