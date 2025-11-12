# FutureDateActivationOffset



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preScheduledEventOffsetExpression** | **string** | The offset value. The value is always taken as negative, so that the automation runs before the trigger date. To create an offset that causes the automation to run after the trigger date, use a delay action. | [optional] [default to undefined]
**scheduledEventOffsetTimeUnit** | **string** | Time unit for the scheduled event offset. | [optional] [default to undefined]

## Example

```typescript
import { FutureDateActivationOffset } from 'rise-typescript-sdk';

const instance: FutureDateActivationOffset = {
    preScheduledEventOffsetExpression,
    scheduledEventOffsetTimeUnit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
