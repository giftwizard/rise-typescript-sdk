# SpiAction



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appDefId** | **string** | The App Def Id of the action provider | [optional] [default to undefined]
**actionKey** | **string** | Identifier for this action - human readable action key - unique per app def id | [optional] [default to undefined]
**userActionConfig** | **string** | The configuration of the user for this action, can include params that are taken from the trigger event payload | [optional] [default to undefined]
**postActions** | **Array&lt;object&gt;** | The post action to execute after this action | [optional] [default to undefined]
**userOutputActionConfig** | **string** | The output configuration of the user for this action, can include params that are taken from the trigger event payload | [optional] [default to undefined]
**skipConditionExpression** | **string** | optional skip condition expression for current action decides whether to skip the action before executing it\&#39;s post actions | [optional] [default to undefined]
**postActionsIds** | **Array&lt;string&gt;** | Action\&#39;s post actions ids. | [optional] [default to undefined]
**namespace** | **string** | The namespace of the action | [optional] [default to undefined]

## Example

```typescript
import { SpiAction } from 'rise-typescript-sdk';

const instance: SpiAction = {
    appDefId,
    actionKey,
    userActionConfig,
    postActions,
    userOutputActionConfig,
    skipConditionExpression,
    postActionsIds,
    namespace,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
