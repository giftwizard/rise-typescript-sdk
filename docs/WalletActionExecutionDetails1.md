# WalletActionExecutionDetails1

Details about the WalletAction\'s execution, such as transaction ID and execution date. Set when the WalletAction is executed (e.g., when the amount is added to the account).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **string** | ID of the Gift Card Transaction created by the WalletAction. | [optional] [readonly] [default to undefined]
**executionDate** | **string** | Represents the time at which the WalletAction was executed. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { WalletActionExecutionDetails1 } from 'rise-typescript-sdk';

const instance: WalletActionExecutionDetails1 = {
    transactionId,
    executionDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
