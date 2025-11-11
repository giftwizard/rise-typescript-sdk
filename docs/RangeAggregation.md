# RangeAggregation



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | **Array&lt;object&gt;** | List of range buckets. During aggregation each entity is placed in the first bucket its value falls into, based on the provided range bounds. | [optional] [default to undefined]

## Example

```typescript
import { RangeAggregation } from 'rise-typescript-sdk';

const instance: RangeAggregation = {
    buckets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
