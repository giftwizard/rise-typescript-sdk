# WorkflowsApi

All URIs are relative to *https://platform.rise.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**reportEvent**](#reportevent) | **POST** /workflows/v1/events/report | |

# **reportEvent**
> ReportEventResponse1 reportEvent(workflowsEsbConfigResolverWorkflowsV1EventsReportPostReportEventRequestBody)

Reports an event and activates account workflows with the specified trigger key. Only the app that created a trigger can report events for it. This means other apps can\'t report events for your triggers, and you can\'t report events for another app\'s triggers.

### Example

```typescript
import {
    WorkflowsApi,
    Configuration,
    WorkflowsEsbConfigResolverWorkflowsV1EventsReportPostReportEventRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowsEsbConfigResolverWorkflowsV1EventsReportPostReportEventRequestBody: WorkflowsEsbConfigResolverWorkflowsV1EventsReportPostReportEventRequestBody; //

const { status, data } = await apiInstance.reportEvent(
    workflowsEsbConfigResolverWorkflowsV1EventsReportPostReportEventRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowsEsbConfigResolverWorkflowsV1EventsReportPostReportEventRequestBody** | **WorkflowsEsbConfigResolverWorkflowsV1EventsReportPostReportEventRequestBody**|  | |


### Return type

**ReportEventResponse1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |
|**400** | Bad Request - Invalid input or parameters  Possible error codes: &#x60;REQUIRED_PROPERTY&#x60; |  -  |
|**428** | Precondition Required - Precondition failed  Possible error codes: &#x60;SCHEMA_VALIDATION_FAILED&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

