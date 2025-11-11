# CursorPagingMetadata1

Paging metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | Number of items returned in the response. | [optional] [default to undefined]
**cursors** | [**Cursors1**](Cursors1.md) |  | [optional] [default to undefined]
**hasNext** | **boolean** | Indicates if there are more results after the current page. If &#x60;true&#x60;, another page of results can be retrieved. If &#x60;false&#x60;, this is the last page. | [optional] [default to undefined]

## Example

```typescript
import { CursorPagingMetadata1 } from 'rise-typescript-sdk';

const instance: CursorPagingMetadata1 = {
    count,
    cursors,
    hasNext,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
