# ItemMetadata



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Item ID. Should always be available, unless it\&#39;s impossible (for example, when failing to create an item). | [optional] [default to undefined]
**originalIndex** | **number** | Index of the item within the request array. Allows for correlation between request and response items. | [optional] [default to undefined]
**success** | **boolean** | Whether the requested action was successful for this item. When &#x60;false&#x60;, the &#x60;error&#x60; field is populated. | [optional] [default to undefined]
**error** | **object** | Details about the error in case of failure. | [optional] [default to undefined]

## Example

```typescript
import { ItemMetadata } from 'rise-typescript-sdk';

const instance: ItemMetadata = {
    id,
    originalIndex,
    success,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
