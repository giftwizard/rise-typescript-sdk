# RefundTransactionRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **string** |  | [optional] [default to undefined]
**amount** | **string** | Optional custom amount to refund. If not provided, the full amount of the transaction will be refunded. | [optional] [default to undefined]
**context** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { RefundTransactionRequest } from 'rise-typescript-sdk';

const instance: RefundTransactionRequest = {
    transactionId,
    amount,
    context,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
