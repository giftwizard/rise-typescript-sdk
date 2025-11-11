# WalletAction3

The disabled WalletAction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | WalletAction ID. | [optional] [readonly] [default to undefined]
**revision** | **string** | Represents the current state of an item. Each time the item is modified, its &#x60;revision&#x60; changes. For an update operation to succeed, you MUST pass the latest revision. | [optional] [readonly] [default to undefined]
**createdDate** | **string** | Represents the time this WalletAction was created. | [optional] [readonly] [default to undefined]
**updatedDate** | **string** | Represents the time this WalletAction was last updated. | [optional] [readonly] [default to undefined]
**startDate** | **string** | Represents the time at which the WalletAction\&#39;s amount will be added to the account. Defaults to immediately. | [optional] [default to undefined]
**expirationDate** | **string** | Represents the time at which the unused balance of the WalletAction will be deducted from the account. Defaults to never. | [optional] [default to undefined]
**disableDate** | **string** | Represents the time at which the WalletAction was manually disabled, if applicable. | [optional] [readonly] [default to undefined]
**amount** | **string** | The amount to be added to the Wallet. | [optional] [default to undefined]
**note** | **string** | Free text comment regarding the WalletAction context (**Deprecated**: Use &#x60;note&#x60; instead.) | [optional] [default to undefined]
**type** | **string** | Indicates the kind of the specific WalletAction (**Deprecated**) | [optional] [default to undefined]
**walletActionStarted** | [**WalletActionExecutionDetails1**](WalletActionExecutionDetails1.md) |  | [optional] [default to undefined]
**walletActionEnded** | [**WalletActionExecutionDetails2**](WalletActionExecutionDetails2.md) |  | [optional] [default to undefined]
**status** | **string** | The current status of the WalletAction. Set to PENDING when the WalletAction is created and updated to ACTIVE when the amount is added to the wallet. | [optional] [readonly] [default to undefined]
**source** | [**ActionInitiator2**](ActionInitiator2.md) |  | [optional] [default to undefined]
**notifications** | [**Notifications1**](Notifications1.md) |  | [optional] [default to undefined]
**liability** | **boolean** | Indicates whether the WalletAction is a liability. The default is false. | [optional] [default to undefined]
**storeCreditContext** | [**StoreCreditContext2**](StoreCreditContext2.md) |  | [optional] [default to undefined]
**externalEvent** | [**ExternalEvent2**](ExternalEvent2.md) |  | [optional] [default to undefined]
**walletId** | **string** | ID of the wallet to which the WalletAction belongs. | [optional] [default to undefined]
**idempotencyKey** | **string** | Unique key to identify the WalletAction, used to prevent duplicate WalletActions from being created in case of retries or network issues. The key should be unique for each WalletAction and should not be reused. | [optional] [default to undefined]

## Example

```typescript
import { WalletAction3 } from 'rise-typescript-sdk';

const instance: WalletAction3 = {
    id,
    revision,
    createdDate,
    updatedDate,
    startDate,
    expirationDate,
    disableDate,
    amount,
    note,
    type,
    walletActionStarted,
    walletActionEnded,
    status,
    source,
    notifications,
    liability,
    storeCreditContext,
    externalEvent,
    walletId,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
