# QueryV22

API Query Language expression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**Filter1**](Filter1.md) |  | [optional] [default to undefined]
**sort** | [**Array&lt;Sorting2&gt;**](Sorting2.md) | Sort object in the following format: &#x60;[{\&quot;fieldName\&quot;:\&quot;sortField1\&quot;,\&quot;order\&quot;:\&quot;ASC\&quot;},{\&quot;fieldName\&quot;:\&quot;sortField2\&quot;,\&quot;order\&quot;:\&quot;DESC\&quot;}]&#x60; | [optional] [default to undefined]
**fields** | **Array&lt;string&gt;** | Array of projected fields. A list of specific field names to return. If &#x60;fieldsets&#x60; are also specified, the union of &#x60;fieldsets&#x60; and &#x60;fields&#x60; is returned. | [optional] [default to undefined]
**fieldsets** | **Array&lt;string&gt;** | Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple &#x60;fieldsets&#x60; will return the union of fields from all sets. If &#x60;fields&#x60; are also specified, the union of &#x60;fieldsets&#x60; and &#x60;fields&#x60; is returned. | [optional] [default to undefined]
**paging** | [**PagingPaging**](PagingPaging.md) |  | [optional] [default to undefined]
**cursorPaging** | [**PagingMethodCursorPaging**](PagingMethodCursorPaging.md) |  | [optional] [default to undefined]

## Example

```typescript
import { QueryV22 } from 'rise-typescript-sdk';

const instance: QueryV22 = {
    filter,
    sort,
    fields,
    fieldsets,
    paging,
    cursorPaging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
