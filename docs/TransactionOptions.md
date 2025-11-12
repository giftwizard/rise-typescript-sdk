# TransactionOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redeemOptions** | **object** | Information about a transaction whose source is a gift card redemption. | [optional] [default to undefined]
**voidOptions** | **object** | Information about a transaction that comes to void a previous transaction. | [optional] [default to undefined]
**rewardOptions** | **object** | Reward Options. | [optional] [default to undefined]
**walletActionEndOptions** | **object** | Information about a transaction whose source is the end of a wallet action (store credit). | [optional] [default to undefined]
**campaignOptions** | **object** | Bulk Options. | [optional] [default to undefined]
**storeCreditRefundOptions** | **object** | Information about a transaction whose source is a store credit refund. | [optional] [default to undefined]
**migrationOptions** | **object** | Information about a transaction whose source is a migration from Rise V1 or another platform. | [optional] [default to undefined]
**paymentMethodRefundOptions** | **object** | Information about a transaction whose source is a refunding a payment method. | [optional] [default to undefined]
**initialOptions** | **object** | Information about the first transaction that initializes a gift card. | [optional] [default to undefined]
**walletActionStartOptions** | **object** | Information about a transaction whose source is a wallet action (store credit) to a customer. | [optional] [default to undefined]
**bulkOptions** | **object** | Bulk Options. | [optional] [default to undefined]
**manualOptions** | **object** | Information about a transaction issued manually from the Rise dashboard. | [optional] [default to undefined]

## Example

```typescript
import { TransactionOptions } from 'rise-typescript-sdk';

const instance: TransactionOptions = {
    redeemOptions,
    voidOptions,
    rewardOptions,
    walletActionEndOptions,
    campaignOptions,
    storeCreditRefundOptions,
    migrationOptions,
    paymentMethodRefundOptions,
    initialOptions,
    walletActionStartOptions,
    bulkOptions,
    manualOptions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
