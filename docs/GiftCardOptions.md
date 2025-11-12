# GiftCardOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderOptions** | **object** | Detailed information about a Gift Card issued from an order. | [optional] [default to undefined]
**campaignOptions** | **object** | Bulk Options (deprecated) | [optional] [default to undefined]
**migrationOptions** | **object** | Detailed information about a Gift Card or Gift Card Transaction whose source is a migration from Rise V1 or another platform. | [optional] [default to undefined]
**storeCreditOptions** | **object** | Detailed information about a Gift Card that belongs to a Store Credit Wallet. | [optional] [default to undefined]
**workflowOptions** | **object** | Detailed information about a Gift Card issued from a workflow. | [optional] [default to undefined]
**bulkOptions** | **object** | Detailed information about a Gift Card or Gift Card transaction issued from a bulk. | [optional] [default to undefined]
**manualOptions** | **object** | Detailed information about a Gift Card that was created manually. | [optional] [default to undefined]

## Example

```typescript
import { GiftCardOptions } from 'rise-typescript-sdk';

const instance: GiftCardOptions = {
    orderOptions,
    campaignOptions,
    migrationOptions,
    storeCreditOptions,
    workflowOptions,
    bulkOptions,
    manualOptions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
