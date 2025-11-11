# WalletActionStartOptions



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletActionId** | **string** | ID of the wallet action. | [optional] [default to undefined]
**liability** | **boolean** | Indicates whether the wallet action is a liability. | [optional] [default to undefined]
**context** | **object** | Detailed information about the context of a store credit, such as the issuer type and sales channel. | [optional] [default to undefined]

## Example

```typescript
import { WalletActionStartOptions } from 'rise-typescript-sdk';

const instance: WalletActionStartOptions = {
    walletActionId,
    liability,
    context,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
