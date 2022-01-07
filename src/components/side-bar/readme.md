# rh-side-bar



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute              | Description | Type          | Default     |
| ------------------------ | ---------------------- | ----------- | ------------- | ----------- |
| `currentActiveIndex`     | `current-active-index` |             | `number`      | `undefined` |
| `menuItems` _(required)_ | --                     |             | `MenuItems[]` | `undefined` |


## Events

| Event         | Description | Type                   |
| ------------- | ----------- | ---------------------- |
| `isCollapsed` |             | `CustomEvent<boolean>` |


## Dependencies

### Depends on

- ion-icon
- [rh-side-bar-items](./components/side-bar-items)

### Graph
```mermaid
graph TD;
  rh-side-bar --> ion-icon
  rh-side-bar --> rh-side-bar-items
  rh-side-bar-items --> rh-tooltip
  rh-side-bar-items --> ion-icon
  style rh-side-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
