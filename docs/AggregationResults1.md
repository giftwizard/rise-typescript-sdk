# AggregationResults1



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Aggregation name, returned in &#x60;aggregations.results.name&#x60;. | [optional] [default to undefined]
**type** | **string** | Aggregation type. Must align with the corresponding aggregation field. | [optional] [default to undefined]
**fieldPath** | **string** | Field to aggregate by. Use dot notation to specify a JSON path. For example, &#x60;order.address.streetName&#x60;. | [optional] [default to undefined]
**values** | [**ValueResultsValues**](ValueResultsValues.md) |  | [optional] [default to undefined]
**ranges** | [**RangeResultsRanges**](RangeResultsRanges.md) |  | [optional] [default to undefined]
**scalar** | [**NestedAggregationResults1OneOf2Scalar**](NestedAggregationResults1OneOf2Scalar.md) |  | [optional] [default to undefined]
**groupedByValue** | [**GroupByValueResultsGroupedByValue**](GroupByValueResultsGroupedByValue.md) |  | [optional] [default to undefined]
**dateHistogram** | [**NestedAggregationResults1OneOf4DateHistogram**](NestedAggregationResults1OneOf4DateHistogram.md) |  | [optional] [default to undefined]
**nested** | [**NestedAggregationResults1OneOf5Nested**](NestedAggregationResults1OneOf5Nested.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AggregationResults1 } from 'rise-typescript-sdk';

const instance: AggregationResults1 = {
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
