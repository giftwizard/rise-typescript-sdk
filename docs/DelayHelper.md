# DelayHelper



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduleIdentifier** | **string** | jsonata expression, for example: triggerName + eventId | [optional] [default to undefined]
**delay** | **object** | decide how long we should wait | [optional] [default to undefined]
**postActions** | **Array&lt;object&gt;** | Delay\&#39;s post actions. | [optional] [default to undefined]
**overrideable** | **boolean** | Optional: if true, any new schedule with the same schedule identifier will override the existing one. If false, the new schedule will be ignored. | [optional] [default to undefined]
**postActionsIds** | **Array&lt;string&gt;** | Delay\&#39;s post actions ids. | [optional] [default to undefined]

## Example

```typescript
import { DelayHelper } from 'rise-typescript-sdk';

const instance: DelayHelper = {
    scheduleIdentifier,
    delay,
    postActions,
    overrideable,
    postActionsIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
