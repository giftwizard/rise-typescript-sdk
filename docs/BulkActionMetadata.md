# BulkActionMetadata



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalSuccesses** | **number** | Number of items that were successfully processed. | [optional] [default to undefined]
**totalFailures** | **number** | Number of items that couldn\&#39;t be processed. | [optional] [default to undefined]
**undetailedFailures** | **number** | Number of failures without details because detailed failure threshold was exceeded. | [optional] [default to undefined]

## Example

```typescript
import { BulkActionMetadata } from 'rise-typescript-sdk';

const instance: BulkActionMetadata = {
    totalSuccesses,
    totalFailures,
    undetailedFailures,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
