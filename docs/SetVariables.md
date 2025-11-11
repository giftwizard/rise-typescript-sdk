# SetVariables



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outputMapping** | **string** | Action\&#39;s output mapping. Jsonata expressions to set variables for example: { \&quot;var1\&quot;: \&quot;$average([10,20])\&quot;, \&quot;var2\&quot;: \&quot;$number($lookup($, $decodeUrlComponent(\\\&quot;var1\\\&quot;))) &gt;&#x3D; $number(8)\&quot;\&quot; } | [optional] [default to undefined]
**postActions** | **Array&lt;object&gt;** | Action\&#39;s post actions. | [optional] [default to undefined]
**postActionsIds** | **Array&lt;string&gt;** | Action\&#39;s post actions ids. | [optional] [default to undefined]
**namespace** | **string** | The namespace of the action | [optional] [default to undefined]
**outputSchema** | **object** | Json Schema for the output mapping | [optional] [default to undefined]

## Example

```typescript
import { SetVariables } from 'rise-typescript-sdk';

const instance: SetVariables = {
    outputMapping,
    postActions,
    postActionsIds,
    namespace,
    outputSchema,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
