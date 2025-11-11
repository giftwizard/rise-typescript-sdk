# PagingMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paging** | **object** | Paging options to limit and skip the number of items. | [optional] [default to undefined]
**cursorPaging** | **object** | Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not &#x60;filter&#x60; or &#x60;sort&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { PagingMethod } from 'rise-typescript-sdk';

const instance: PagingMethod = {
    paging,
    cursorPaging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
