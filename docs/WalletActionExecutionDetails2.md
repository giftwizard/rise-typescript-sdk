# WalletActionExecutionDetails2

Details about the execution of the ending of the wallet action (due to expiration, disabling, etc), such as transaction ID and execution date. Set when the WalletAction is ended (i.e. when the amount is deducted from the account).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **string** | ID of the Gift Card Transaction created by the WalletAction. | [optional] [readonly] [default to undefined]
**executionDate** | **string** | Represents the time at which the WalletAction was executed. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { WalletActionExecutionDetails2 } from 'rise-typescript-sdk';

const instance: WalletActionExecutionDetails2 = {
    transactionId,
    executionDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
