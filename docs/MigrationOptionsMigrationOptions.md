# MigrationOptionsMigrationOptions

Information about a transaction whose source is a migration from Rise V1 or another platform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previousId** | **string** | ID of the gift card or transaction in Rise V1. | [optional] [default to undefined]
**liability** | **boolean** | Indicates whether the gift card or transaction is a liability. | [optional] [default to undefined]
**note** | **string** | Note about the gift card or transaction being migrated. | [optional] [default to undefined]

## Example

```typescript
import { MigrationOptionsMigrationOptions } from 'rise-typescript-sdk';

const instance: MigrationOptionsMigrationOptions = {
    previousId,
    liability,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
