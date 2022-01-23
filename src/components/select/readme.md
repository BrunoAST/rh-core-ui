# rh-select



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type              | Default     |
| ------------- | ------------- | ----------- | ----------------- | ----------- |
| `label`       | `label`       |             | `string`          | `undefined` |
| `options`     | --            |             | `SelectOptions[]` | `[]`        |
| `placeholder` | `placeholder` |             | `string`          | `""`        |


## Events

| Event                  | Description | Type                  |
| ---------------------- | ----------- | --------------------- |
| `currentSelectedValue` |             | `CustomEvent<string>` |


## Dependencies

### Depends on

- [rh-input-label](../../shared/components/input-label)
- ion-icon

### Graph
```mermaid
graph TD;
  rh-select --> rh-input-label
  rh-select --> ion-icon
  style rh-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
