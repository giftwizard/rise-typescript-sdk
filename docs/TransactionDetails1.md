# TransactionDetails1

Transaction details related to the gift card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastTransaction** | [**TransactionWrapper1**](TransactionWrapper1.md) |  | [optional] [default to undefined]
**lastDecreasingTransaction** | [**TransactionWrapper2**](TransactionWrapper2.md) |  | [optional] [default to undefined]
**lastIncreasingTransaction** | [**TransactionWrapper3**](TransactionWrapper3.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TransactionDetails1 } from 'rise-typescript-sdk';

const instance: TransactionDetails1 = {
    lastTransaction,
    lastDecreasingTransaction,
    lastIncreasingTransaction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
