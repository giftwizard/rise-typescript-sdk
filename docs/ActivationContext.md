# ActivationContext



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activationId** | **string** | Activation ID | [optional] [default to undefined]
**actionId** | **string** | Action ID | [optional] [default to undefined]
**configurationId** | **string** | Configuration ID | [optional] [default to undefined]
**configurationCorrelationId** | **string** | Configuration Correlation ID | [optional] [default to undefined]
**eventName** | **string** | name of the event. intended to keep backwards compatibility, probably not in use. | [optional] [default to undefined]
**eventSlug** | **string** | Event slug, also probably not in use | [optional] [default to undefined]
**enrichedEventPayload** | **string** | Enriched event payload | [optional] [default to undefined]
**rawEventPayload** | **string** | Raw event payload | [optional] [default to undefined]
**actions** | **Array&lt;object&gt;** | Actions | [optional] [default to undefined]
**activationStatus** | **string** | Activation status | [optional] [default to undefined]
**externalId** | **string** | External ID | [optional] [default to undefined]
**automationV2** | **object** | Automation | [optional] [default to undefined]
**output** | **string** | Output | [optional] [default to undefined]

## Example

```typescript
import { ActivationContext } from 'rise-typescript-sdk';

const instance: ActivationContext = {
    activationId,
    actionId,
    configurationId,
    configurationCorrelationId,
    eventName,
    eventSlug,
    enrichedEventPayload,
    rawEventPayload,
    actions,
    activationStatus,
    externalId,
    automationV2,
    output,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
