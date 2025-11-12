# SetVariablesAction



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outputMapping** | **object** | output mapping for example: {\&quot;someField\&quot;: \&quot;{{10}}\&quot;, \&quot;someOtherField\&quot;: \&quot;{{multiply( var(\&#39;account.points.balance\&#39;) ;2 )}}\&quot; } | [optional] [default to undefined]
**outputSchema** | **object** | output json schema representation could be string instead of Struct (and introduce some compression to minimize the size of it) | [optional] [default to undefined]
**postActionIds** | **Array&lt;string&gt;** | List of IDs of actions to run in parallel after variable initialization. | [optional] [default to undefined]

## Example

```typescript
import { SetVariablesAction } from 'rise-typescript-sdk';

const instance: SetVariablesAction = {
    outputMapping,
    outputSchema,
    postActionIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
