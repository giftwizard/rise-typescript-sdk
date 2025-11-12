# WalletActionStartOptionsWalletActionStartOptions

Information about a transaction whose source is a wallet action (store credit) to a customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletActionId** | **string** | ID of the wallet action. | [optional] [default to undefined]
**liability** | **boolean** | Indicates whether the wallet action is a liability. | [optional] [default to undefined]
**context** | [**StoreCreditContext2**](StoreCreditContext2.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WalletActionStartOptionsWalletActionStartOptions } from 'rise-typescript-sdk';

const instance: WalletActionStartOptionsWalletActionStartOptions = {
    walletActionId,
    liability,
    context,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
