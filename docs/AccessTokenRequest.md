# AccessTokenRequest

Once a user has completed the installation process and given your app permission to access their data, use the authorization code we sent you, together with your secret key, to request an access token and a refresh token. (The access token is only valid for 5 minutes.).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grant_type** | **string** | Value must be set to \&quot;authorization_code\&quot; | [optional] [default to undefined]
**client_id** | **string** | The App ID as defined | [optional] [default to undefined]
**client_secret** | **string** | The Secret Key for your app | [optional] [default to undefined]
**code** | **string** | The authorization code received from us. | [optional] [default to undefined]

## Example

```typescript
import { AccessTokenRequest } from 'rise-typescript-sdk';

const instance: AccessTokenRequest = {
    grant_type,
    client_id,
    client_secret,
    code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
