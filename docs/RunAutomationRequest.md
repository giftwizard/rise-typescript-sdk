# RunAutomationRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appId** | **string** | App of the automation trigger | [optional] [default to undefined]
**triggerKey** | **string** | Trigger key of the action | [optional] [default to undefined]
**triggerPayload** | **object** | Payload of the triggered event | [optional] [default to undefined]
**automationId** | **string** | Specific automation id to run | [optional] [default to undefined]
**triggerSchema** | **object** | Schema of the trigger | [optional] [default to undefined]
**skipRetry** | **boolean** | Skip retry mechanism. If set to true, we will not retry the automations actions in case of a retryable error. | [optional] [default to undefined]

## Example

```typescript
import { RunAutomationRequest } from 'rise-typescript-sdk';

const instance: RunAutomationRequest = {
    appId,
    triggerKey,
    triggerPayload,
    automationId,
    triggerSchema,
    skipRetry,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
