# EmailParams



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skipEmailDispatch** | **boolean** | Indicates whether to skip email dispatch for the WalletAction. The default is false. | [optional] [default to undefined]
**overrideTemplateId** | **string** | ID of the email template to be used for the WalletAction, if default template is to be overridden. | [optional] [default to undefined]

## Example

```typescript
import { EmailParams } from 'rise-typescript-sdk';

const instance: EmailParams = {
    skipEmailDispatch,
    overrideTemplateId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
