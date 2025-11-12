# Idempotency



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique identifier for the event. If you send the same idempotency key in multiple report event requests, for the same trigger key and app id, consecutive requests will be ignored after the first one. Note that the idempotency key is kept for a week before it expires. | [optional] [default to undefined]
**ttlInMilliseconds** | **string** | Optional. The time to live (TTL) in milliseconds before the key will expire. Default is a week. | [optional] [default to undefined]

## Example

```typescript
import { Idempotency } from 'rise-typescript-sdk';

const instance: Idempotency = {
    key,
    ttlInMilliseconds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
