# StatusInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**successInfo** | **object** | Action output data as defined in your action [output schema](https://dev.wix.com/docs/rest/business-management/automations/actions/about-actions#the-output-schema). | [optional] [default to undefined]
**failureInfo** | **object** | Information about the action\&#39;s failure to complete. | [optional] [default to undefined]

## Example

```typescript
import { StatusInfo } from 'rise-typescript-sdk';

const instance: StatusInfo = {
    successInfo,
    failureInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
