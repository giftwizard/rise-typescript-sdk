# NestedResultValue1



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**ValueResults1**](ValueResults1.md) |  | [optional] [default to undefined]
**ranges** | [**RangeResults1**](RangeResults1.md) |  | [optional] [default to undefined]
**scalar** | [**ScalarResult1**](ScalarResult1.md) |  | [optional] [default to undefined]
**groupedByValue** | **object** | Circular reference to #/components/schemas/wix.common.AggregationData.AggregationResults.GroupByValueResults (simplified) | [optional] [default to undefined]
**dateHistogram** | [**DateHistogramResults1**](DateHistogramResults1.md) |  | [optional] [default to undefined]
**nested** | **object** | Circular reference to #/components/schemas/wix.common.AggregationData.AggregationResults.NestedResults (simplified) | [optional] [default to undefined]

## Example

```typescript
import { NestedResultValue1 } from 'rise-typescript-sdk';

const instance: NestedResultValue1 = {
    values,
    ranges,
    scalar,
    groupedByValue,
    dateHistogram,
    nested,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
