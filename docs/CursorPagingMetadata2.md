# CursorPagingMetadata2

Paging metadata. Contains cursor which can be used in next query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | Number of items returned in current page. | [optional] [default to undefined]
**cursors** | [**Cursors4**](Cursors4.md) |  | [optional] [default to undefined]
**hasNext** | **boolean** | Whether there are more pages to retrieve following the current page.  + &#x60;true&#x60;: Another page of results can be retrieved. + &#x60;false&#x60;: This is the last page. | [optional] [default to undefined]

## Example

```typescript
import { CursorPagingMetadata2 } from 'rise-typescript-sdk';

const instance: CursorPagingMetadata2 = {
    count,
    cursors,
    hasNext,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
