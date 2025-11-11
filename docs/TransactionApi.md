# TransactionApi

All URIs are relative to *https://platform.rise.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**queryTransactions**](#querytransactions) | **POST** /v1/rise/gift-cards/transactions/query | |

# **queryTransactions**
> QueryTransactionsResponse1 queryTransactions(transactionTransactionQueryServiceV1RiseGiftCardsTransactionsQueryPostQueryTransactionsRequestBody)

Query Transactions using [API Query Language](https://platform.rise.ai/docs/#tag/About-API-Query-Language).

### Example

```typescript
import {
    TransactionApi,
    Configuration,
    TransactionTransactionQueryServiceV1RiseGiftCardsTransactionsQueryPostQueryTransactionsRequestBody
} from 'rise-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let transactionTransactionQueryServiceV1RiseGiftCardsTransactionsQueryPostQueryTransactionsRequestBody: TransactionTransactionQueryServiceV1RiseGiftCardsTransactionsQueryPostQueryTransactionsRequestBody; //

const { status, data } = await apiInstance.queryTransactions(
    transactionTransactionQueryServiceV1RiseGiftCardsTransactionsQueryPostQueryTransactionsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionTransactionQueryServiceV1RiseGiftCardsTransactionsQueryPostQueryTransactionsRequestBody** | **TransactionTransactionQueryServiceV1RiseGiftCardsTransactionsQueryPostQueryTransactionsRequestBody**|  | |


### Return type

**QueryTransactionsResponse1**

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

