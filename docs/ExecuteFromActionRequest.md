# ExecuteFromActionRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionId** | **string** | Requested action id | [optional] [default to undefined]
**activationId** | **string** | Optional: an activation id to link this action to | [optional] [default to undefined]
**payload** | **object** | Activation payload | [optional] [default to undefined]
**configurationCorrelationId** | **string** | Configuration correlation id to run this action from | [optional] [default to undefined]
**scheduleId** | **string** | Optional - schedule id that this action was scheduled from | [optional] [default to undefined]
**externalEntityId** | **string** | Optional - an external entity id that this execution is related to | [optional] [default to undefined]
**automation** | **object** | Optional - Activation automation | [optional] [default to undefined]

## Example

```typescript
import { ExecuteFromActionRequest } from 'rise-typescript-sdk';

const instance: ExecuteFromActionRequest = {
    actionId,
    activationId,
    payload,
    configurationCorrelationId,
    scheduleId,
    externalEntityId,
    automation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
