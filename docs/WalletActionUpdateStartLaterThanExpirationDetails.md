# WalletActionUpdateStartLaterThanExpirationDetails



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletActionId** | **string** | WalletAction ID. | [optional] [default to undefined]
**startDate** | **string** | The requested start date of the walletAction, which is after the expiration date. | [optional] [default to undefined]
**expirationDate** | **string** | The date of the requested wallet action expiration, which is before the requested start date. | [optional] [default to undefined]

## Example

```typescript
import { WalletActionUpdateStartLaterThanExpirationDetails } from 'rise-typescript-sdk';

const instance: WalletActionUpdateStartLaterThanExpirationDetails = {
    walletActionId,
    startDate,
    expirationDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
