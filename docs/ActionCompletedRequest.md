# ActionCompletedRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executionIdentifier** | **string** | The execution identifier that was given to the spi provider when we invoked the action | [optional] [default to undefined]
**result** | **object** | The result of invoking the action. Must conform to the output schema configured by the action provider. | [optional] [default to undefined]

## Example

```typescript
import { ActionCompletedRequest } from 'rise-typescript-sdk';

const instance: ActionCompletedRequest = {
    executionIdentifier,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
