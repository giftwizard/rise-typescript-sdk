# TokenInfoResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Whether the token is active. | [optional] [default to undefined]
**subject_type** | **string** | Type of subject to which the token is issued. | [optional] [default to undefined]
**subject_id** | **string** | ID of the subject to which the token is issued. | [optional] [default to undefined]
**exp** | **number** | Token expiration timestamp. | [optional] [default to undefined]
**iat** | **number** | Token issue timestamp. | [optional] [default to undefined]
**client_id** | **number** | ID of the app that [created](https://dev.wix.com/docs/rest/app-management/oauth-2/create-access-token) the token, as defined in the [Wix Dev Center](https://dev.wix.com). | [optional] [default to undefined]
**account_id** | **number** | ID of the account that [created](https://dev.wix.com/docs/rest/app-management/oauth-2/create-access-token) the token, as defined in the [Wix Dev Center](https://dev.wix.com/apps/my-apps). | [optional] [default to undefined]
**site_id** | **number** | ID of the site to which the token is issued. | [optional] [default to undefined]
**instance_id** | **number** | The [instance ID](https://dev.wix.com/docs/rest/app-management/app-instance/introduction) of the app that the access token was created for. Subscribe to the [Instance App Installed](https://dev.wix.com/docs/rest/app-management/app-instance/app-instance-installed) webhook to receive a notification including the new app instance ID whenever a version of your app is installed on a Wix site. | [optional] [default to undefined]

## Example

```typescript
import { TokenInfoResponse } from 'rise-typescript-sdk';

const instance: TokenInfoResponse = {
    active,
    subject_type,
    subject_id,
    exp,
    iat,
    client_id,
    account_id,
    site_id,
    instance_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
