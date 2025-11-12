# NestedAggregation

Nested aggregation expressed through a list of aggregation where each next aggregation is nested within previous one.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nestedAggregations** | **Array&lt;object&gt;** | Flattened list of aggregations, where each aggregation is nested within previous one. | [optional] [default to undefined]

## Example

```typescript
import { NestedAggregation } from 'rise-typescript-sdk';

const instance: NestedAggregation = {
    nestedAggregations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
