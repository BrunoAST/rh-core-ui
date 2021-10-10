import { Component, h, Prop } from "@stencil/core";
import { MenuItems } from "../../../../types/menu-items";

@Component({
  tag: "rh-side-bar-items",
  styleUrls: [
    "./side-bar-items.scss",
    "../../../../assets/fontawesome/css/all.css"
  ],
  shadow: true
})
export class SideBarItems {
  @Prop({ attribute: "menu-items", mutable: true, reflect: true }) menuItems: MenuItems[] = [];

  render() {
    return [
      <i class="fas fa-user"></i>,
      <ul class="items-list">
        {
          this.menuItems.map(item =>
            <li class="items-list__item">{item.name}</li>
          )
        }
      </ul>
    ];
  }
}
