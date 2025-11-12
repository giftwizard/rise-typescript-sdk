# Filter1

Filter object in the following format: `\"filter\" : { \"fieldName1\": \"value1\", \"fieldName2\":{\"$operator\":\"value2\"} }` Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**Fields1**](Fields1.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Filter1 } from 'rise-typescript-sdk';

const instance: Filter1 = {
    fields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
