# ActivationRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activationId** | **string** | Activation\&#39;s ID. | [optional] [default to undefined]
**configurationId** | **string** | Configuration\&#39;s ID. | [optional] [default to undefined]
**configurationCorrelationId** | **string** |  | [optional] [default to undefined]
**eventName** | **string** | Received event name. | [optional] [default to undefined]
**eventSlug** | **string** | Received event slug. | [optional] [default to undefined]
**eventPayload** | **string** | Received event payload. | [optional] [default to undefined]
**actions** | **Array&lt;object&gt;** | List of action data. | [optional] [default to undefined]
**externalId** | **string** | External ID. | [optional] [default to undefined]
**source** | **object** | The source of this activation | [optional] [default to undefined]
**actionsMap** | **object** | Actions tree | [optional] [default to undefined]
**automation** | **object** | Automation V2. Used for reporting domain event until activation request will be deprecated. | [optional] [default to undefined]
**triggerSchema** | **object** | Trigger entity for the activation, available for v2 and v3 automations only | [optional] [default to undefined]

## Example

```typescript
import { ActivationRequest } from 'rise-typescript-sdk';

const instance: ActivationRequest = {
    activationId,
    configurationId,
    configurationCorrelationId,
    eventName,
    eventSlug,
    eventPayload,
    actions,
    externalId,
    source,
    actionsMap,
    automation,
    triggerSchema,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
