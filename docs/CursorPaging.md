# CursorPaging



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Number of items to load. | [optional] [default to undefined]
**cursor** | **string** | Pointer to the next or previous page in the list of results.  You can get the relevant cursor token from the &#x60;pagingMetadata&#x60; object in the previous call\&#39;s response. Not relevant for the first request. | [optional] [default to undefined]

## Example

```typescript
import { CursorPaging } from 'rise-typescript-sdk';

const instance: CursorPaging = {
    limit,
    cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
