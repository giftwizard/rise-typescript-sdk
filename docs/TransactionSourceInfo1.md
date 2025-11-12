# TransactionSourceInfo1

Information about the source of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initiator** | [**ActionInitiator1**](ActionInitiator1.md) |  | [optional] [default to undefined]
**sourceTenantId** | **string** | The Tenant ID that is associated with the action. | [optional] [default to undefined]
**sourceChannelId** | **string** | The Channel ID that is associated with the action. | [optional] [default to undefined]
**sourceLocationId** | **string** | The location ID that is associated with the action (supports POS cases). | [optional] [default to undefined]

## Example

```typescript
import { TransactionSourceInfo1 } from 'rise-typescript-sdk';

const instance: TransactionSourceInfo1 = {
    initiator,
    sourceTenantId,
    sourceChannelId,
    sourceLocationId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
