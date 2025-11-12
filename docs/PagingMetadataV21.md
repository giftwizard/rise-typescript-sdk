# PagingMetadataV21



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | Number of items returned in the response. | [optional] [default to undefined]
**offset** | **number** | Offset that was requested. | [optional] [default to undefined]
**total** | **number** | Total number of items that match the query. Returned if offset paging is used and the &#x60;tooManyToCount&#x60; flag is not set. | [optional] [default to undefined]
**tooManyToCount** | **boolean** | Flag that indicates the server failed to calculate the &#x60;total&#x60; field. | [optional] [default to undefined]
**cursors** | [**Cursors2**](Cursors2.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PagingMetadataV21 } from 'rise-typescript-sdk';

const instance: PagingMetadataV21 = {
    count,
    offset,
    total,
    tooManyToCount,
    cursors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
