# GiftCardLineItem1

The details of an order line item that is a Gift Card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Line Item ID in Rise. | [optional] [readonly] [default to undefined]
**sourceLineItemId** | **string** | Line Item ID in Source Channel. | [optional] [default to undefined]
**sourceVariantId** | **string** | Product Variant ID in Source Channel. | [optional] [default to undefined]
**giftingInfo** | [**GiftingInfo1**](GiftingInfo1.md) |  | [optional] [default to undefined]
**quantity** | **number** | Number of Gift Cards to create for this Line Item. | [optional] [default to undefined]
**fulfilledQuantity** | **number** | Number of Gift Cards that were already fulfilled for this Line Item. | [optional] [readonly] [default to undefined]
**price** | **string** | Price of the Line Item. | [optional] [default to undefined]
**giftCardInitialValue** | **string** | The initial value to apply to the Gift Card. | [optional] [default to undefined]
**updatedDate** | **string** | Date and time the Line Item was last updated. | [optional] [readonly] [default to undefined]
**fulfilledData** | [**FulfilledData1**](FulfilledData1.md) |  | [optional] [default to undefined]
**giftCardExpiration** | [**Expiration1**](Expiration1.md) |  | [optional] [default to undefined]
**sideEffects** | [**SideEffects1**](SideEffects1.md) |  | [optional] [default to undefined]
**giftCardEncryptedCode** | **string** | The encrypted code to create the Gift Card with. | [optional] [default to undefined]

## Example

```typescript
import { GiftCardLineItem1 } from 'rise-typescript-sdk';

const instance: GiftCardLineItem1 = {
    id,
    sourceLineItemId,
    sourceVariantId,
    giftingInfo,
    quantity,
    fulfilledQuantity,
    price,
    giftCardInitialValue,
    updatedDate,
    fulfilledData,
    giftCardExpiration,
    sideEffects,
    giftCardEncryptedCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
