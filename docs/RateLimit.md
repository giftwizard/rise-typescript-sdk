# RateLimit



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxActivationsExpression** | **string** | Value expressing the maximum number of times the trigger can be activated. | [optional] [default to undefined]
**durationExpression** | **string** | Duration of the rate limiting window in the selected time unit. If no value is set, the rate limit is permanent. | [optional] [default to undefined]
**durationTimeUnit** | **string** | Time unit for the rate limit duration. | [optional] [default to undefined]
**uniqueIdentifierExpression** | **string** | Unique identifier of each activation, by which rate limiter will count activations. | [optional] [default to undefined]

## Example

```typescript
import { RateLimit } from 'rise-typescript-sdk';

const instance: RateLimit = {
    maxActivationsExpression,
    durationExpression,
    durationTimeUnit,
    uniqueIdentifierExpression,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
