# ExternalEvent2

Information about the external event that triggered the WalletAction, such as type of event and a short description or identifier of the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Event type indicator | [optional] [default to undefined]
**description** | **string** | Short description or identifier of the event | [optional] [default to undefined]

## Example

```typescript
import { ExternalEvent2 } from 'rise-typescript-sdk';

const instance: ExternalEvent2 = {
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
