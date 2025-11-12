# AutomationSettings



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hidden** | **boolean** | Whether the automation is hidden from users. Default: &#x60;false&#x60; | [optional] [default to undefined]
**readonly** | **boolean** | Whether the automation is read-only. Default: &#x60;false&#x60; | [optional] [default to undefined]
**disableDelete** | **boolean** | Whether the option to delete the automation from the site is disabled. Default: &#x60;false&#x60; | [optional] [default to undefined]
**disableStatusChange** | **boolean** | Whether the option to change the automation status (from active to inactive and vice versa) is disabled. Default: &#x60;false&#x60; | [optional] [default to undefined]
**actionSettings** | **object** | Automation action settings. | [optional] [default to undefined]

## Example

```typescript
import { AutomationSettings } from 'rise-typescript-sdk';

const instance: AutomationSettings = {
    hidden,
    readonly,
    disableDelete,
    disableStatusChange,
    actionSettings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
