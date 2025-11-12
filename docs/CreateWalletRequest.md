# CreateWalletRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerReference** | **object** | Initial Customer Reference for the wallet. | [optional] [default to undefined]
**initialValue** | **string** | Initial amount of store credit. | [optional] [default to undefined]
**currency** | **string** | Currency of the wallet. | [optional] [default to undefined]

## Example

```typescript
import { CreateWalletRequest } from 'rise-typescript-sdk';

const instance: CreateWalletRequest = {
    customerReference,
    initialValue,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
