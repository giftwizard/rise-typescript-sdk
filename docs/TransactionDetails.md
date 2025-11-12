# TransactionDetails



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastTransaction** | **object** | The last transaction that modified the gift card balance. | [optional] [readonly] [default to undefined]
**lastDecreasingTransaction** | **object** | The last transaction that decreased the gift card balance, such as redemption or refund. | [optional] [readonly] [default to undefined]
**lastIncreasingTransaction** | **object** | ID of the last transaction that increased the gift card balance. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { TransactionDetails } from 'rise-typescript-sdk';

const instance: TransactionDetails = {
    lastTransaction,
    lastDecreasingTransaction,
    lastIncreasingTransaction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
