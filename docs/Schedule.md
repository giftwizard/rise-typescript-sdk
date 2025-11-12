# Schedule



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [readonly] [default to undefined]
**identifier** | **string** | doesn\&#39;t have to be unique. example: triggerName+entityId | [optional] [default to undefined]
**configurationCorrelationId** | **string** |  | [optional] [default to undefined]
**activationId** | **string** |  | [optional] [default to undefined]
**scheduledAction** | **object** |  | [optional] [default to undefined]
**eventPayload** | **string** | Raw domain event, not enriched | [optional] [default to undefined]
**scheduleStatus** | **string** |  | [optional] [readonly] [default to undefined]
**scheduleDate** | **string** |  | [optional] [readonly] [default to undefined]
**createdDate** | **string** |  | [optional] [readonly] [default to undefined]
**updatedDate** | **string** |  | [optional] [readonly] [default to undefined]
**overrideable** | **boolean** |  | [optional] [default to undefined]
**triggerInfo** | **object** |  | [optional] [default to undefined]
**automation** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { Schedule } from 'rise-typescript-sdk';

const instance: Schedule = {
    id,
    identifier,
    configurationCorrelationId,
    activationId,
    scheduledAction,
    eventPayload,
    scheduleStatus,
    scheduleDate,
    createdDate,
    updatedDate,
    overrideable,
    triggerInfo,
    automation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
