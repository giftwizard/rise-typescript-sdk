# EndMigrationWalletActionRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletActionId** | **string** | ID of the WalletAction to be ended. | [optional] [default to undefined]
**giftCardId** | **string** | ID of the giftcard that belongs to the wallet. | [optional] [default to undefined]
**amountToSubtract** | **string** | Amount of the WalletAction to subtract from the wallet. | [optional] [default to undefined]

## Example

```typescript
import { EndMigrationWalletActionRequest } from 'rise-typescript-sdk';

const instance: EndMigrationWalletActionRequest = {
    walletActionId,
    giftCardId,
    amountToSubtract,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
