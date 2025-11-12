# SearchDetails



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **string** | Search mode. Defines the search logic for combining multiple terms in the &#x60;expression&#x60;. | [optional] [default to undefined]
**expression** | **string** | Search term or expression. | [optional] [default to undefined]
**fields** | **Array&lt;string&gt;** | Fields to search in. If the array is empty, all searchable fields are searched. Use dot notation to specify a JSON path. For example, &#x60;order.address.streetName&#x60;. | [optional] [default to undefined]
**fuzzy** | **boolean** | Whether to enable the search function to use an algorithm to automatically find results that are close to the search expression, such as typos and declensions. | [optional] [default to undefined]

## Example

```typescript
import { SearchDetails } from 'rise-typescript-sdk';

const instance: SearchDetails = {
    mode,
    expression,
    fields,
    fuzzy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
