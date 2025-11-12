# SearchGiftCardsResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**giftCards** | **Array&lt;object&gt;** | Gift Cards which satisfy the provided query. | [optional] [default to undefined]
**pagingMetadata** | **object** | Paging metadata. Contains cursor which can be used in next query. | [optional] [default to undefined]
**aggregationData** | **object** | Aggregation data. | [optional] [default to undefined]

## Example

```typescript
import { SearchGiftCardsResponse } from 'rise-typescript-sdk';

const instance: SearchGiftCardsResponse = {
    giftCards,
    pagingMetadata,
    aggregationData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
