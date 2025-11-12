# GiftCardSourceInfo1

Information about the source of the gift card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The source type of the gift card. | [optional] [default to undefined]
**sourceTenantId** | **string** | The Tenant ID of the sales channel that is associated with the gift card creation (e.g. Shopify shop id). | [optional] [default to undefined]
**sourceChannelId** | **string** | The Channel ID of the sales channel that is associated with the gift card creation (e.g. Shopify channel id). | [optional] [default to undefined]
**sourceLocationId** | **string** | The location ID that is associated with the action (supports POS cases). | [optional] [default to undefined]
**initiator** | [**ActionInitiator3**](ActionInitiator3.md) |  | [optional] [default to undefined]
**orderOptions** | [**OrderOptionsOrderOptions**](OrderOptionsOrderOptions.md) |  | [optional] [default to undefined]
**campaignOptions** | [**CampaignOptionsCampaignOptions**](CampaignOptionsCampaignOptions.md) |  | [optional] [default to undefined]
**migrationOptions** | [**MigrationOptionsMigrationOptions**](MigrationOptionsMigrationOptions.md) |  | [optional] [default to undefined]
**storeCreditOptions** | [**StoreCreditOptionsStoreCreditOptions**](StoreCreditOptionsStoreCreditOptions.md) |  | [optional] [default to undefined]
**workflowOptions** | [**WorkflowOptionsWorkflowOptions**](WorkflowOptionsWorkflowOptions.md) |  | [optional] [default to undefined]
**bulkOptions** | [**BulkOptionsBulkOptions**](BulkOptionsBulkOptions.md) |  | [optional] [default to undefined]
**manualOptions** | [**ManualOptionsManualOptions**](ManualOptionsManualOptions.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GiftCardSourceInfo1 } from 'rise-typescript-sdk';

const instance: GiftCardSourceInfo1 = {
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
