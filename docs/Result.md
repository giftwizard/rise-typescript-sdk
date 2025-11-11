# Result


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **object** | Value aggregation results. | [optional] [default to undefined]
**ranges** | **object** | Range aggregation results. | [optional] [default to undefined]
**scalar** | **object** | Scalar aggregation results. | [optional] [default to undefined]
**groupedByValue** | **object** | Group by value aggregation results. | [optional] [default to undefined]
**dateHistogram** | **object** | Date histogram aggregation results. | [optional] [default to undefined]
**nested** | **object** | Nested aggregation results. | [optional] [default to undefined]

## Example

```typescript
import { Result } from 'rise-typescript-sdk';

const instance: Result = {
    values,
    ranges,
    scalar,
    groupedByValue,
    dateHistogram,
    nested,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
