# WalletAction

WalletAction is the main entity of WalletActionService. It represents a Store Credit that adds to the balance of a customer\'s wallet. It contains information about the amount and expiration date (if applicable) of the Store Credit, the context of its source (e.g. refund, workflow, etc.), and its status.

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
**note** | **string** | Free text comment regarding the WalletAction context | [optional] [default to undefined]
**type** | **string** | Indicates the kind of the specific WalletAction | [optional] [default to undefined]
**walletActionStarted** | **object** | Details about the WalletAction\&#39;s execution, such as transaction ID and execution date. Set when the WalletAction is executed (e.g., when the amount is added to the account). | [optional] [readonly] [default to undefined]
**walletActionEnded** | **object** | Details about the execution of the ending of the wallet action (due to expiration, disabling, etc), such as transaction ID and execution date. Set when the WalletAction is ended (i.e. when the amount is deducted from the account). | [optional] [readonly] [default to undefined]
**status** | **string** | The current status of the WalletAction. Set to PENDING when the WalletAction is created and updated to ACTIVE when the amount is added to the wallet. | [optional] [readonly] [default to undefined]
**source** | **object** | Information about the initiator of the WalletAction, such as the app or user that initiated the action. Set when the WalletAction is created. | [optional] [readonly] [default to undefined]
**notifications** | **object** | Settings of the notifications related to the WalletAction. This field is used to specify whether to skip email dispatch or override the template ID for email notifications. | [optional] [default to undefined]
**liability** | **boolean** | Indicates whether the WalletAction is a liability. The default is false. | [optional] [default to undefined]
**storeCreditContext** | **object** | Detailed information about the context of a store credit, such as the issuer type and sales channel. | [optional] [readonly] [default to undefined]
**externalEvent** | **object** | Information about the external event that triggered the WalletAction, such as type of event and a short description or identifier of the event. | [optional] [default to undefined]
**walletId** | **string** | ID of the wallet to which the WalletAction belongs. | [optional] [default to undefined]
**idempotencyKey** | **string** | Unique key to identify the WalletAction, used to prevent duplicate WalletActions from being created in case of retries or network issues. The key should be unique for each WalletAction and should not be reused. | [optional] [default to undefined]

## Example

```typescript
import { WalletAction } from 'rise-typescript-sdk';

const instance: WalletAction = {
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
