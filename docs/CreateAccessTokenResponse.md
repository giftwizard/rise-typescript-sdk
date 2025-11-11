# CreateAccessTokenResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **string** | Created access token. | [optional] [default to undefined]
**token_type** | **string** | Type of the created access token. Always &#x60;”Bearer”&#x60;. | [optional] [default to undefined]
**expires_in** | **number** | Time the access token expires in seconds. Always &#x60;14400&#x60; (4 hours). | [optional] [default to undefined]

## Example

```typescript
import { CreateAccessTokenResponse } from 'rise-typescript-sdk';

const instance: CreateAccessTokenResponse = {
    access_token,
    token_type,
    expires_in,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
