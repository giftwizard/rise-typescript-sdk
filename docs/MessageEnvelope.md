# MessageEnvelope



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instanceId** | **string** | App instance ID. | [optional] [default to undefined]
**eventType** | **string** | Event type. | [optional] [default to undefined]
**identity** | **object** | The identification type and identity data. | [optional] [default to undefined]
**data** | **string** | Stringify payload. | [optional] [default to undefined]

## Example

```typescript
import { MessageEnvelope } from 'rise-typescript-sdk';

const instance: MessageEnvelope = {
    instanceId,
    eventType,
    identity,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
