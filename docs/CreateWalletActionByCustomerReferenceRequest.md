# CreateWalletActionByCustomerReferenceRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerReference** | **object** | CustomerReference of the customer for which to create the wallet action. | [optional] [default to undefined]
**walletAction** | **object** | WalletAction to be created. | [optional] [default to undefined]
**newWalletCurrency** | **string** | The currency for the new wallet, if no wallet already exists. | [optional] [default to undefined]

## Example

```typescript
import { CreateWalletActionByCustomerReferenceRequest } from 'rise-typescript-sdk';

const instance: CreateWalletActionByCustomerReferenceRequest = {
    customerReference,
    walletAction,
    newWalletCurrency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
