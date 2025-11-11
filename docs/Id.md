# Id


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anonymousVisitorId** | **string** | ID of a site visitor that has not logged in to the site. | [optional] [default to undefined]
**memberId** | **string** | ID of a site visitor that has logged in to the site. | [optional] [default to undefined]
**userId** | **string** | ID of a User (site owner, contributor, etc.). | [optional] [default to undefined]
**appId** | **string** | ID of an app. | [optional] [default to undefined]

## Example

```typescript
import { Id } from 'rise-typescript-sdk';

const instance: Id = {
    anonymousVisitorId,
    memberId,
    userId,
    appId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
