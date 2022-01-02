# rh-list-action



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute | Description | Type                      | Default |
| -------------- | --------- | ----------- | ------------------------- | ------- |
| `fieldConfigs` | --        |             | `ActionListFieldConfig[]` | `[]`    |
| `items`        | --        |             | `any[]`                   | `[]`    |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `deleteClicked` |             | `CustomEvent<any>` |
| `editClicked`   |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [rh-tooltip](../tooltip)
- [rh-button](../buttons)

### Graph
```mermaid
graph TD;
  rh-action-list --> rh-tooltip
  rh-action-list --> rh-button
  rh-button --> ion-icon
  style rh-action-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
