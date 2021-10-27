# rh-side-bar-items



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description | Type          | Default |
| ----------- | --------- | ----------- | ------------- | ------- |
| `menuItems` | --        |             | `MenuItems[]` | `[]`    |


## Events

| Event         | Description | Type                  |
| ------------- | ----------- | --------------------- |
| `itemClicked` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [rh-side-bar](../..)

### Depends on

- [rh-tooltip](../../../tooltip)
- ion-icon

### Graph
```mermaid
graph TD;
  rh-side-bar-items --> rh-tooltip
  rh-side-bar-items --> ion-icon
  rh-side-bar --> rh-side-bar-items
  style rh-side-bar-items fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
