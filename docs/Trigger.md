# Trigger



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appId** | **string** | ID of the app that defines the trigger. | [optional] [default to undefined]
**triggerKey** | **string** | Trigger key. | [optional] [default to undefined]
**filters** | **Array&lt;object&gt;** | List of filters on schema fields. In order for the automation to run, all filter expressions must evaluate to &#x60;true&#x60; for a given payload. | [optional] [default to undefined]
**scheduledEventOffset** | **object** | Defines the time offset between the trigger date and when the automation runs. | [optional] [default to undefined]
**rateLimit** | **object** | Limits the number of times an automation can be triggered. | [optional] [default to undefined]
**automationConfigMapping** | **object** | An optional configuration, per automation, of a schema that is optionally offered by the trigger provider to affect the behavior of the trigger. For example, a trigger provider may offer a schema that allows the user to configure the trigger to happen at a certain time of day, He would define a schema with a field called \&quot;startDate\&quot; and using this parameter the user can define his preferred startDate, per automation. | [optional] [default to undefined]
**overrideSchema** | **object** | Optional schema of the trigger. It will be used instead the trigger schema in case it\&#39;s provided. | [optional] [default to undefined]

## Example

```typescript
import { Trigger } from 'rise-typescript-sdk';

const instance: Trigger = {
    appId,
    triggerKey,
    filters,
    scheduledEventOffset,
    rateLimit,
    automationConfigMapping,
    overrideSchema,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
