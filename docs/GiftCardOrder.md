# GiftCardOrder

A Gift Card Order is a reflection of an order in a Sales Channel that includes a Gift Card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Order ID. | [optional] [readonly] [default to undefined]
**revision** | **string** | Revision number, which increments by 1 each time the Order is updated. To prevent conflicting changes, the current revision must be passed when updating the Order.  Ignored when creating a Order. | [optional] [readonly] [default to undefined]
**createdDate** | **string** | Date and time the Order was created. | [optional] [readonly] [default to undefined]
**updatedDate** | **string** | Date and time the Order was last updated. | [optional] [readonly] [default to undefined]
**sourceChannelId** | **string** | Source sales channel, i.e. Shopify. | [optional] [default to undefined]
**sourceTenantId** | **string** | Tenant ID in source sales channel, i.e. shop ID. | [optional] [default to undefined]
**sourceOrderId** | **string** | Order ID in source sales channel. | [optional] [default to undefined]
**sourceOrderNumber** | **string** | The order number in source sales channel. | [optional] [default to undefined]
**totalAmount** | **string** | The total amount of the order that contains the Gift Card. | [optional] [default to undefined]
**currency** | **string** | The order\&#39;s currency. | [optional] [default to undefined]
**note** | **string** | Note to be added to the order. | [optional] [default to undefined]
**paymentStatus** | **string** | The payment status of the order. | [optional] [default to undefined]
**fulfillmentStatus** | **string** | Fulfillment status of the order in Rise. | [optional] [default to undefined]
**status** | **string** | Status of the order in Rise. | [optional] [default to undefined]
**buyerInfo** | **object** | Information about the buyer. | [optional] [default to undefined]
**scheduleFulfillAt** | **string** | Date and time to fulfill the order by creating Gift Cards. Default is now. | [optional] [default to undefined]
**riseFulfilledAt** | **string** | Date and time the order was fulfilled in Rise by creating Gift Cards. | [optional] [readonly] [default to undefined]
**sourceFulfilledAt** | **string** | Date and time the order was marked fulfilled in the Source sales channel. | [optional] [default to undefined]
**lineItems** | **Array&lt;object&gt;** | The line items in the order that are Gift Cards. | [optional] [default to undefined]
**fraudMessage** | **string** | The fraud message. | [optional] [default to undefined]
**fraudType** | **string** | The fraud logic type. | [optional] [default to undefined]
**sourceLocationId** | **string** | Location ID in Source. | [optional] [default to undefined]

## Example

```typescript
import { GiftCardOrder } from 'rise-typescript-sdk';

const instance: GiftCardOrder = {
    id,
    revision,
    createdDate,
    updatedDate,
    sourceChannelId,
    sourceTenantId,
    sourceOrderId,
    sourceOrderNumber,
    totalAmount,
    currency,
    note,
    paymentStatus,
    fulfillmentStatus,
    status,
    buyerInfo,
    scheduleFulfillAt,
    riseFulfilledAt,
    sourceFulfilledAt,
    lineItems,
    fraudMessage,
    fraudType,
    sourceLocationId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
