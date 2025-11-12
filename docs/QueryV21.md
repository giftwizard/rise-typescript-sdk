# QueryV21

WQL expression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**Filter**](Filter.md) |  | [optional] [default to undefined]
**sort** | [**Array&lt;Sorting1&gt;**](Sorting1.md) | Sort object.  Learn more about [sorting](https://dev.wix.com/docs/rest/articles/getting-started/api-query-language#sorting). | [optional] [default to undefined]
**fields** | **Array&lt;string&gt;** | Array of projected fields. A list of specific field names to return. If &#x60;fieldsets&#x60; are also specified, the union of &#x60;fieldsets&#x60; and &#x60;fields&#x60; is returned. | [optional] [default to undefined]
**fieldsets** | **Array&lt;string&gt;** | Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple &#x60;fieldsets&#x60; will return the union of fields from all sets. If &#x60;fields&#x60; are also specified, the union of &#x60;fieldsets&#x60; and &#x60;fields&#x60; is returned. | [optional] [default to undefined]
**paging** | [**PagingPaging**](PagingPaging.md) |  | [optional] [default to undefined]
**cursorPaging** | [**PagingMethodCursorPaging**](PagingMethodCursorPaging.md) |  | [optional] [default to undefined]

## Example

```typescript
import { QueryV21 } from 'rise-typescript-sdk';

const instance: QueryV21 = {
    filter,
    sort,
    fields,
    fieldsets,
    paging,
    cursorPaging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
