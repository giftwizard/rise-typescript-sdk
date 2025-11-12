# ConditionFilter



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditionBlocks** | **Array&lt;object&gt;** | condition evaluates to &#x60;true&#x60; if either of the blocks evaluate to &#x60;true&#x60; (aka OR between all). | [optional] [default to undefined]
**postActions** | **Array&lt;object&gt;** | Actions to perform when condition_blocks evaluates to &#x60;true&#x60;. | [optional] [default to undefined]
**postActionsIds** | **Array&lt;string&gt;** | Action\&#39;s post actions ids. | [optional] [default to undefined]
**elsePostActions** | **Array&lt;object&gt;** | Actions to perform when condition_blocks evaluates to &#x60;false&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { ConditionFilter } from 'rise-typescript-sdk';

const instance: ConditionFilter = {
    conditionBlocks,
    postActions,
    postActionsIds,
    elsePostActions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
