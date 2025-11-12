# NestedAggregationResults1

Nested aggregations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Unique, caller-defined aggregation name, identifiable by the requested aggregation &#x60;name&#x60;. | [optional] [default to undefined]
**type** | **string** | Aggregation type. | [optional] [default to undefined]
**fieldPath** | **string** | Field which the data was aggregated by. | [optional] [default to undefined]
**values** | [**ValueResultsValues**](ValueResultsValues.md) |  | [optional] [default to undefined]
**ranges** | [**RangeResultsRanges**](RangeResultsRanges.md) |  | [optional] [default to undefined]
**scalar** | [**NestedAggregationResults1OneOf2Scalar**](NestedAggregationResults1OneOf2Scalar.md) |  | [optional] [default to undefined]
**groupedByValue** | **object** | Circular reference to #/components/schemas/wix.common.AggregationData.AggregationResults.GroupByValueResults (simplified) | [optional] [default to undefined]
**dateHistogram** | [**NestedAggregationResults1OneOf4DateHistogram**](NestedAggregationResults1OneOf4DateHistogram.md) |  | [optional] [default to undefined]
**nested** | [**NestedAggregationResults1OneOf5Nested**](NestedAggregationResults1OneOf5Nested.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NestedAggregationResults1 } from 'rise-typescript-sdk';

const instance: NestedAggregationResults1 = {
    name,
    type,
    fieldPath,
    values,
    ranges,
    scalar,
    groupedByValue,
    dateHistogram,
    nested,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
