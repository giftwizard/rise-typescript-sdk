# CancelEventRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalEntityId** | **string** | ID of the related resource in GUID format. For example, &#x60;fc81a355-3429-50fc-a4c7-def486e828f3&#x60;.  Typically, this ID is defined in your system, but you can also use any resource GUID, such as contact ID, member ID, or invoice ID. See [Choose the right &#x60;externalEntityId&#x60;](https://dev.wix.com/docs/rest/business-management/automations/triggered-events/reporting-and-canceling-events#choose-the-right-externalentityid) for more information. | [optional] [default to undefined]
**triggerKey** | **string** | er key whose event you want to cancel. For example, &#x60;form_submitted&#x60; or &#x60;invoice_due&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { CancelEventRequest } from 'rise-typescript-sdk';

const instance: CancelEventRequest = {
    externalEntityId,
    triggerKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
