# DelayAction



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offsetExpression** | **string** | Value expressing the amount of time to wait from a specific date or from the time the action is executed. | [optional] [default to undefined]
**offsetTimeUnit** | **string** | Time unit for delay offset. | [optional] [default to undefined]
**dueDateEpochExpression** | **string** | The action due date. If defined without an offset, the automation will wait until this date to execute the next step. If an offset is defined, it\&#39;s calculated from this date. The date is expressed in the number of milliseconds since the Unix Epoch (1 January, 1970 UTC). | [optional] [default to undefined]
**postActionIds** | **Array&lt;string&gt;** | List of IDs of actions to run in parallel after the delay. | [optional] [default to undefined]

## Example

```typescript
import { DelayAction } from 'rise-typescript-sdk';

const instance: DelayAction = {
    offsetExpression,
    offsetTimeUnit,
    dueDateEpochExpression,
    postActionIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
