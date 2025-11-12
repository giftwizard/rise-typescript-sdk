# RateLimiting



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxNumOfActivations** | **number** | The maximum number of activations allowed in the given time frame | [optional] [default to undefined]
**maxNumOfActivationsExpression** | **string** | Optional, used if provided: A jsonata expression that evaluates to the maximum number of activations allowed in the given time frame | [optional] [default to undefined]
**timeFrameInMinutes** | **number** | If given - the time frame in minutes, otherwise, for life | [optional] [default to undefined]
**timeFrameInMinutesExpression** | **string** | Optional, used if provided - A jsonata expression that evaluates to the time frame in minutes, otherwise, for life | [optional] [default to undefined]
**keyJsonata** | **string** | The jsonata to use to extract the entity/resource key from the enriched event payload | [optional] [default to undefined]
**postActions** | **Array&lt;object&gt;** | The actions to perform if this rate limiting action succeeded - meaning we are still in the allowed number of activations in the given time frame | [optional] [default to undefined]
**postActionsIds** | **Array&lt;string&gt;** | The ids of actions to perform if this rate limiting action succeeded - meaning we are still in the allowed number of activations in the given time frame | [optional] [default to undefined]

## Example

```typescript
import { RateLimiting } from 'rise-typescript-sdk';

const instance: RateLimiting = {
    maxNumOfActivations,
    maxNumOfActivationsExpression,
    timeFrameInMinutes,
    timeFrameInMinutesExpression,
    keyJsonata,
    postActions,
    postActionsIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
