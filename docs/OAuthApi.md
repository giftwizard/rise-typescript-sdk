# OAuthApi

All URIs are relative to *https://platform.rise.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**someOperation**](#someoperation) | **POST** /oauth2/token | |

# **someOperation**
> CreateAccessTokenResponse someOperation()

Creates an access token.  Use this access token as Authorization header to call any other Rise api.  The token is valid for 4 hours.

### Example

```typescript
import {
    OAuthApi,
    Configuration,
    OAuthOauth2TokenPostSomeOperationRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new OAuthApi(configuration);

let oAuthOauth2TokenPostSomeOperationRequestBody: OAuthOauth2TokenPostSomeOperationRequestBody; // (optional)

const { status, data } = await apiInstance.someOperation(
    oAuthOauth2TokenPostSomeOperationRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oAuthOauth2TokenPostSomeOperationRequestBody** | **OAuthOauth2TokenPostSomeOperationRequestBody**|  | |


### Return type

**CreateAccessTokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - The request was successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

