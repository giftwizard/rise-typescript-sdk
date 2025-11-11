# ConditionAction



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orExpressionGroups** | **Array&lt;object&gt;** | The condition evaluates to &#x60;true&#x60; if either of the expression groups evaluate to &#x60;true&#x60;. | [optional] [default to undefined]
**truePostActionIds** | **Array&lt;string&gt;** | List of IDs of actions to run when the entire condition is evaluated to &#x60;true&#x60;. | [optional] [default to undefined]
**falsePostActionIds** | **Array&lt;string&gt;** | List of IDs of actions to run when the entire condition is evaluated to &#x60;false&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { ConditionAction } from 'rise-typescript-sdk';

const instance: ConditionAction = {
    orExpressionGroups,
    truePostActionIds,
    falsePostActionIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
