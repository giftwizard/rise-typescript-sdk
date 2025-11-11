# CursorPaging4

Cursor paging options.  Learn more about [cursor paging](https://dev.wix.com/docs/rest/articles/getting-started/api-query-language#cursor-paging).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Maximum number of items to return in the results. | [optional] [default to undefined]
**cursor** | **string** | Pointer to the next or previous page in the list of results.  Pass the relevant cursor token from the &#x60;pagingMetadata&#x60; object in the previous call\&#39;s response. Not relevant for the first request. | [optional] [default to undefined]

## Example

```typescript
import { CursorPaging4 } from 'rise-typescript-sdk';

const instance: CursorPaging4 = {
    limit,
    cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
