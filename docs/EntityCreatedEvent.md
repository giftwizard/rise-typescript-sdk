# EntityCreatedEvent



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityAsJson** | **string** |  | [optional] [default to undefined]
**restoreInfo** | **object** | Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity | [optional] [default to undefined]

## Example

```typescript
import { EntityCreatedEvent } from 'rise-typescript-sdk';

const instance: EntityCreatedEvent = {
    entityAsJson,
    restoreInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
