# StoreCreditContext1

Detailed information about the context of a store credit, such as the issuer type and sales channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuer** | **string** | The issuer type of the store credit (e.g., workflow, bulk, manual) | [optional] [default to undefined]
**issuerId** | **string** | Indicates a specific instance of the issuer (relevant for workflow/bulk) | [optional] [default to undefined]
**note** | **string** | An internal note associated with the store credit | [optional] [default to undefined]
**sourceChannelId** | **string** | The Channel ID of the sales channel that is associated with the store credit (e.g. Shopify channel id) | [optional] [default to undefined]
**sourceTenantId** | **string** | The Tenant ID of the sales channel that is associated with the store credit (e.g. Shopify shop id) | [optional] [default to undefined]

## Example

```typescript
import { StoreCreditContext1 } from 'rise-typescript-sdk';

const instance: StoreCreditContext1 = {
    issuer,
    issuerId,
    note,
    sourceChannelId,
    sourceTenantId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
