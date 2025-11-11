# AggregationResults1



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Aggregation name, returned in &#x60;aggregations.results.name&#x60;. | [optional] [default to undefined]
**type** | **string** | Aggregation type. Must align with the corresponding aggregation field. | [optional] [default to undefined]
**fieldPath** | **string** | Field to aggregate by. Use dot notation to specify a JSON path. For example, &#x60;order.address.streetName&#x60;. | [optional] [default to undefined]
**values** | [**ValueResults1**](ValueResults1.md) |  | [optional] [default to undefined]
**ranges** | [**RangeResults1**](RangeResults1.md) |  | [optional] [default to undefined]
**scalar** | [**ScalarResult1**](ScalarResult1.md) |  | [optional] [default to undefined]
**groupedByValue** | [**GroupByValueResults1**](GroupByValueResults1.md) |  | [optional] [default to undefined]
**dateHistogram** | [**DateHistogramResults1**](DateHistogramResults1.md) |  | [optional] [default to undefined]
**nested** | [**NestedResults1**](NestedResults1.md) |  | [optional] [default to undefined]

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
