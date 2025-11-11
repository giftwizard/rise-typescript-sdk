# BulkUpdateWalletActionTagsRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **Array&lt;string&gt;** | List of wallet-actions that their tags will update. | [optional] [default to undefined]
**assignTags** | **object** | List of Tags to assign | [optional] [default to undefined]
**unassignTags** | **object** | List of Tags to unAssign | [optional] [default to undefined]

## Example

```typescript
import { BulkUpdateWalletActionTagsRequest } from 'rise-typescript-sdk';

const instance: BulkUpdateWalletActionTagsRequest = {
    ids,
    assignTags,
    unassignTags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
