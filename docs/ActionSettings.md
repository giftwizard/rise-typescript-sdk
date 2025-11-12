# ActionSettings



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permanentActionIds** | **Array&lt;string&gt;** | List of actions that cannot be deleted. Default: Empty. All actions are deletable by default. | [optional] [default to undefined]
**readonlyActionIds** | **Array&lt;string&gt;** | List of actions that cannot be edited. Default: Empty. All actions are editable by default. | [optional] [default to undefined]
**disableDelayAddition** | **boolean** | Whether the option to add a delay is disabled for the automation. | [optional] [default to undefined]
**disableConditionAddition** | **boolean** | Whether the option to add a condition is disabled for the automation. | [optional] [default to undefined]

## Example

```typescript
import { ActionSettings } from 'rise-typescript-sdk';

const instance: ActionSettings = {
    permanentActionIds,
    readonlyActionIds,
    disableDelayAddition,
    disableConditionAddition,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
