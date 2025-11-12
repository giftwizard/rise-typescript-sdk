# CustomerReference3

CustomerReference of the customer for which to create the wallet action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceChannelId** | **string** | Source channel, i.e. Shopify. | [default to undefined]
**sourceTenantId** | **string** | Tenant ID in Source, i.e. shop ID. | [default to undefined]
**sourceCustomerId** | **string** | Customer ID in Source. | [default to undefined]
**firstName** | **string** | First name. | [optional] [default to undefined]
**lastName** | **string** | Last name. | [optional] [default to undefined]
**phone** | **string** | Phone number. | [optional] [default to undefined]
**email** | **string** | Email address. | [default to undefined]

## Example

```typescript
import { CustomerReference3 } from 'rise-typescript-sdk';

const instance: CustomerReference3 = {
    sourceChannelId,
    sourceTenantId,
    sourceCustomerId,
    firstName,
    lastName,
    phone,
    email,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
