# WalletActionCreationExpirationDateInThePastDetails



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expirationDate** | **string** | The date on which the walletAction was requested to expire, which is in the past. | [optional] [default to undefined]
**currentDate** | **string** | The current date, which is after the requested expiration date. | [optional] [default to undefined]

## Example

```typescript
import { WalletActionCreationExpirationDateInThePastDetails } from 'rise-typescript-sdk';

const instance: WalletActionCreationExpirationDateInThePastDetails = {
    expirationDate,
    currentDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
