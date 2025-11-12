# ActionInitiator2

Information about the initiator of the WalletAction, such as the app or user that initiated the action. Set when the WalletAction is created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of the initiator (e.g., app, user) | [optional] [default to undefined]
**id** | **string** | ID of the initiator | [optional] [default to undefined]

## Example

```typescript
import { ActionInitiator2 } from 'rise-typescript-sdk';

const instance: ActionInitiator2 = {
    type,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
