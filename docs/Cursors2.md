# Cursors2

Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next** | **string** | Cursor string pointing to the next page in the list of results. | [optional] [default to undefined]
**prev** | **string** | Cursor pointing to the previous page in the list of results. | [optional] [default to undefined]

## Example

```typescript
import { Cursors2 } from 'rise-typescript-sdk';

const instance: Cursors2 = {
    next,
    prev,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
