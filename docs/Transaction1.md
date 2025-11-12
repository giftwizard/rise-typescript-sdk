# Transaction1

Transaction is the secondary entity of GiftCardService that indicate an action that modifies the balance of a gift card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Transaction unique id. | [optional] [readonly] [default to undefined]
**createdDate** | **string** | Transaction creation date. | [optional] [readonly] [default to undefined]
**type** | **string** | Type of transaction. | [optional] [default to undefined]
**giftCardId** | **string** | Unique ID of the gift card associated with this transaction. | [optional] [default to undefined]
**amount** | **string** | Transaction amount. | [optional] [default to undefined]
**operationType** | **string** | Indicates whether the transaction adds or subtracts from the GiftCard balance. | [optional] [readonly] [default to undefined]
**idempotencyKey** | **string** | Idempotency key, to prevent duplicate creation. | [optional] [default to undefined]
**updatedBalance** | **string** | Gift card Balance after this transaction operation. | [optional] [readonly] [default to undefined]
**sourceInfo** | [**TransactionSourceInfo1**](TransactionSourceInfo1.md) |  | [optional] [default to undefined]
**externalEvent** | [**ExternalEvent1**](ExternalEvent1.md) |  | [optional] [default to undefined]
**externalId** | **string** | ID of the transaction in a 3rd party system if created there. | [optional] [default to undefined]
**redeemOptions** | [**RedeemOptionsRedeemOptions**](RedeemOptionsRedeemOptions.md) |  | [optional] [default to undefined]
**voidOptions** | [**VoidOptionsVoidOptions**](VoidOptionsVoidOptions.md) |  | [optional] [default to undefined]
**rewardOptions** | [**RewardOptionsRewardOptions**](RewardOptionsRewardOptions.md) |  | [optional] [default to undefined]
**walletActionEndOptions** | [**WalletActionEndOptionsWalletActionEndOptions**](WalletActionEndOptionsWalletActionEndOptions.md) |  | [optional] [default to undefined]
**campaignOptions** | [**CampaignOptionsCampaignOptions**](CampaignOptionsCampaignOptions.md) |  | [optional] [default to undefined]
**storeCreditRefundOptions** | [**StoreCreditRefundOptionsStoreCreditRefundOptions**](StoreCreditRefundOptionsStoreCreditRefundOptions.md) |  | [optional] [default to undefined]
**migrationOptions** | [**MigrationOptionsMigrationOptions**](MigrationOptionsMigrationOptions.md) |  | [optional] [default to undefined]
**paymentMethodRefundOptions** | [**PaymentMethodRefundOptionsPaymentMethodRefundOptions**](PaymentMethodRefundOptionsPaymentMethodRefundOptions.md) |  | [optional] [default to undefined]
**initialOptions** | [**InitialOptionsInitialOptions**](InitialOptionsInitialOptions.md) |  | [optional] [default to undefined]
**walletActionStartOptions** | [**WalletActionStartOptionsWalletActionStartOptions**](WalletActionStartOptionsWalletActionStartOptions.md) |  | [optional] [default to undefined]
**bulkOptions** | [**BulkOptionsBulkOptions**](BulkOptionsBulkOptions.md) |  | [optional] [default to undefined]
**manualOptions** | [**ManualOptionsManualOptions**](ManualOptionsManualOptions.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Transaction1 } from 'rise-typescript-sdk';

const instance: Transaction1 = {
    id,
    createdDate,
    type,
    giftCardId,
    amount,
    operationType,
    idempotencyKey,
    updatedBalance,
    sourceInfo,
    externalEvent,
    externalId,
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
