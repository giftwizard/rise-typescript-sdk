# InitiatedStatusInfo



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **string** | Activation target | [optional] [default to undefined]
**payload** | **object** | Event payload | [optional] [default to undefined]
**externalEntityId** | **string** | External entity ID | [optional] [default to undefined]
**requestId** | **string** | Unique identifier for the request that initiated the automation | [optional] [default to undefined]

## Example

```typescript
import { InitiatedStatusInfo } from 'rise-typescript-sdk';

const instance: InitiatedStatusInfo = {
    target,
    payload,
    externalEntityId,
    requestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
