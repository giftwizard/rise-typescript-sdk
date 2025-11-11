# WalletActionEndOptions



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletActionId** | **string** | ID of the wallet action being ended. | [optional] [default to undefined]
**transactionId** | **string** | ID of the transaction being reversed. | [optional] [default to undefined]
**liability** | **boolean** | Indicates whether the wallet action end is a liability. | [optional] [default to undefined]
**reason** | **string** | Reason the wallet action is ending. | [optional] [default to undefined]

## Example

```typescript
import { WalletActionEndOptions } from 'rise-typescript-sdk';

const instance: WalletActionEndOptions = {
    walletActionId,
    transactionId,
    liability,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
