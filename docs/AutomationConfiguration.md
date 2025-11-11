# AutomationConfiguration

Automation runtime configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Status of the automation on the site. | [optional] [default to undefined]
**trigger** | **object** | Automation trigger configuration. | [optional] [default to undefined]
**rootActionIds** | **Array&lt;string&gt;** | List of IDs of root actions. Root actions are the first actions to run after the trigger. The actions in the list run in parallel. | [optional] [default to undefined]
**actions** | [**Actions**](Actions.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AutomationConfiguration } from 'rise-typescript-sdk';

const instance: AutomationConfiguration = {
    status,
    trigger,
    rootActionIds,
    actions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
