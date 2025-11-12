# Service



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceMapping** | **object** | Action\&#39;s service mapping. | [optional] [default to undefined]
**inputMapping** | **string** | Action\&#39;s input mapping. Jsonata description of the input this service gets. | [optional] [default to undefined]
**outputMapping** | **string** | Action\&#39;s output mapping. Jsonata description of the output this service returns. | [optional] [default to undefined]
**postActions** | **Array&lt;object&gt;** | Action\&#39;s post actions. | [optional] [default to undefined]
**postActionsIds** | **Array&lt;string&gt;** | Action\&#39;s post actions ids. | [optional] [default to undefined]
**namespace** | **string** | The namespace of the action | [optional] [default to undefined]

## Example

```typescript
import { Service } from 'rise-typescript-sdk';

const instance: Service = {
    serviceMapping,
    inputMapping,
    outputMapping,
    postActions,
    postActionsIds,
    namespace,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
