# RateLimitAction



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxActivationsExpression** | **string** | The maximum number of activations allowed for the action. | [optional] [default to undefined]
**rateLimitDurationExpression** | **string** | Duration of the rate limiting window, expressed in selected time unit. If no value is set, then there is no time limit on the rate limiter. | [optional] [default to undefined]
**rateLimitDurationTimeUnit** | **string** | Time unit for the rate limit duration. | [optional] [default to undefined]
**uniqueIdentifierExpression** | **string** | Unique identifier of each activation by which rate limiter counts activations. | [optional] [default to undefined]
**postActionIds** | **Array&lt;string&gt;** | List of IDs of actions to run in parallel once the action completes. | [optional] [default to undefined]

## Example

```typescript
import { RateLimitAction } from 'rise-typescript-sdk';

const instance: RateLimitAction = {
    maxActivationsExpression,
    rateLimitDurationExpression,
    rateLimitDurationTimeUnit,
    uniqueIdentifierExpression,
    postActionIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
