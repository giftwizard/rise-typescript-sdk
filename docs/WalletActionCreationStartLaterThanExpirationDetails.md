# WalletActionCreationStartLaterThanExpirationDetails



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **string** | The date on which the walletAction was requested to become active, which is after the expiration date. | [optional] [default to undefined]
**expirationDate** | **string** | The date when the walletAction was requested to expire, which is before the requested start date. | [optional] [default to undefined]

## Example

```typescript
import { WalletActionCreationStartLaterThanExpirationDetails } from 'rise-typescript-sdk';

const instance: WalletActionCreationStartLaterThanExpirationDetails = {
    startDate,
    expirationDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
