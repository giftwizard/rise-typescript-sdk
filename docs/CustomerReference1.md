# CustomerReference1

A reference to a customer in a specific source channel, containing the channel, tenant, and customer ID of the customer in that source, as well as the customer\'s first name, last name, phone number, and email address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceChannelId** | **string** | Source channel, i.e. Shopify. | [optional] [default to undefined]
**sourceTenantId** | **string** | Tenant ID in Source, i.e. shop ID. | [optional] [default to undefined]
**sourceCustomerId** | **string** | Customer ID in Source. | [optional] [default to undefined]
**firstName** | **string** | First name. | [optional] [default to undefined]
**lastName** | **string** | Last name. | [optional] [default to undefined]
**phone** | **string** | Phone number. | [optional] [default to undefined]
**email** | **string** | Email address. | [optional] [default to undefined]

## Example

```typescript
import { CustomerReference1 } from 'rise-typescript-sdk';

const instance: CustomerReference1 = {
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
