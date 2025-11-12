# CursorPagingMetadata



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | Number of items returned in the response. | [optional] [default to undefined]
**cursors** | **object** | Offset that was requested. | [optional] [default to undefined]
**hasNext** | **boolean** | Indicates if there are more results after the current page. If &#x60;true&#x60;, another page of results can be retrieved. If &#x60;false&#x60;, this is the last page. | [optional] [default to undefined]

## Example

```typescript
import { CursorPagingMetadata } from 'rise-typescript-sdk';

const instance: CursorPagingMetadata = {
    count,
    cursors,
    hasNext,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
