# GiftCardSourceInfo2

Information about the source of the gift card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The source type of the gift card. | [default to undefined]
**sourceTenantId** | **string** | The Tenant ID of the sales channel that is associated with the gift card creation (e.g. Shopify shop id). | [optional] [default to undefined]
**sourceChannelId** | **string** | The Channel ID of the sales channel that is associated with the gift card creation (e.g. Shopify channel id). | [optional] [default to undefined]
**sourceLocationId** | **string** | The location ID that is associated with the action (supports POS cases). | [optional] [default to undefined]
**initiator** | [**ActionInitiator3**](ActionInitiator3.md) |  | [optional] [default to undefined]
**orderOptions** | [**OrderOptions1**](OrderOptions1.md) |  | [optional] [default to undefined]
**campaignOptions** | [**CampaignOptions2**](CampaignOptions2.md) |  | [optional] [default to undefined]
**migrationOptions** | [**MigrationOptions2**](MigrationOptions2.md) |  | [optional] [default to undefined]
**storeCreditOptions** | [**StoreCreditOptions1**](StoreCreditOptions1.md) |  | [optional] [default to undefined]
**workflowOptions** | [**WorkflowOptions1**](WorkflowOptions1.md) |  | [optional] [default to undefined]
**bulkOptions** | [**BulkOptions2**](BulkOptions2.md) |  | [optional] [default to undefined]
**manualOptions** | [**ManualOptions2**](ManualOptions2.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GiftCardSourceInfo2 } from 'rise-typescript-sdk';

const instance: GiftCardSourceInfo2 = {
    type,
    sourceTenantId,
    sourceChannelId,
    sourceLocationId,
    initiator,
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
