# PreinstalledOrigin



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appId** | **string** | ID of the app that defines the preinstalled automation. | [optional] [default to undefined]
**componentId** | **string** | Application component ID. | [optional] [default to undefined]
**componentVersion** | **number** | Application component version. | [optional] [default to undefined]
**override** | **boolean** | Whether the automation is an override automation. If the user modifies the preinstalled automation installed on their site, a site-specific automation is created that overrides the original one. If the user makes no modifications this boolean is set to &#x60;false&#x60; and the original preinstalled automation is used.  Default: &#x60;false&#x60; | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PreinstalledOrigin } from 'rise-typescript-sdk';

const instance: PreinstalledOrigin = {
    appId,
    componentId,
    componentVersion,
    override,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
