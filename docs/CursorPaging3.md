# CursorPaging3

Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursorPaging** | [**CursorPaging3**](CursorPaging3.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CursorPaging3 } from 'rise-typescript-sdk';

const instance: CursorPaging3 = {
    cursorPaging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
