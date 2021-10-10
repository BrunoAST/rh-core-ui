import { Component, h, Prop } from "@stencil/core";
import { Items } from "../../../../types/items";

@Component({
  tag: "rh-side-bar-items",
  styleUrls: [
    "./side-bar-items.scss",
    "../../../../assets/fontawesome/css/all.css"
  ],
  shadow: true
})
export class SideBarItems {
  @Prop({ attribute: "menu-items", mutable: true, reflect: true }) menuItems: Items[] = [];

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
