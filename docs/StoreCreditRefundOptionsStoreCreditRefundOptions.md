# StoreCreditRefundOptionsStoreCreditRefundOptions

Information about a transaction whose source is a store credit refund. (**Deprecated**: Use `wallet_action_start_options` instead.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletActionId** | **string** | ID of the wallet action (store credit) given as a refund. | [optional] [default to undefined]
**liability** | **boolean** | Indicates whether the store credit refund is a liability. | [optional] [default to undefined]

## Example

```typescript
import { StoreCreditRefundOptionsStoreCreditRefundOptions } from 'rise-typescript-sdk';

const instance: StoreCreditRefundOptionsStoreCreditRefundOptions = {
    walletActionId,
    liability,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
