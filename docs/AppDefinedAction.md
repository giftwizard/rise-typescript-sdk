# AppDefinedAction



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appId** | **string** | ID of the app that defines the action. | [optional] [default to undefined]
**actionKey** | **string** | Action key. | [optional] [default to undefined]
**inputMapping** | **object** | Action input mapping. | [optional] [default to undefined]
**skipConditionOrExpressionGroups** | **Array&lt;object&gt;** | Array of conditions determining whether to skip the action in the automation flow. The action will be skipped if any of the expression groups evaluate to &#x60;true&#x60;. Actions following a skipped action will still run. | [optional] [default to undefined]
**postActionIds** | **Array&lt;string&gt;** | List of IDs of actions to run in parallel once the action completes. | [optional] [default to undefined]
**overrideOutputSchema** | **object** | Optional output schema of the action. It will be used instead the action schema in case it\&#39;s provided. | [optional] [default to undefined]

## Example

```typescript
import { AppDefinedAction } from 'rise-typescript-sdk';

const instance: AppDefinedAction = {
    appId,
    actionKey,
    inputMapping,
    skipConditionOrExpressionGroups,
    postActionIds,
    overrideOutputSchema,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
