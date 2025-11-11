# EventInfo



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | **object** | Event payload, formatted as key:value pairs. Must comply with the payload schema if you provided one when configuring your trigger. | [optional] [default to undefined]
**externalEntityId** | **string** | ID of the related resource in GUID format. | [optional] [default to undefined]
**idempotency** | **object** | Idempotency information for the event. | [optional] [default to undefined]

## Example

```typescript
import { EventInfo } from 'rise-typescript-sdk';

const instance: EventInfo = {
    payload,
    externalEntityId,
    idempotency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
