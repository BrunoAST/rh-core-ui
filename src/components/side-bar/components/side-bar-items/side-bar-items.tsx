import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";
import { MenuItems } from "../../../../types/menu-items";

@Component({
  tag: "rh-side-bar-items",
  styleUrls: [
    "./side-bar-items.scss",
  ],
  assetsDirs: ["assets"],
  shadow: false
})
export class SideBarItems {
  @Prop({ attribute: "menu-items", mutable: true, reflect: true }) menuItems: MenuItems[] = [];

  @Event({ bubbles: true, composed: true }) itemClicked: EventEmitter<string>;

  isActiveCssClass(item: MenuItems): string {
    return item.isActive ? "items-list__active" : null;
  }

  onItemClicked(item: MenuItems): void {
    this.itemClicked.emit(item.url);
  }

  render() {
    return [
      <ul class="items-list">
        {
          this.menuItems.map((item, index) =>
            <li
              key={index}
              class={`items-list__item ${this.isActiveCssClass(item)}`}
              onClick={this.onItemClicked.bind(this, item)}
            >
              <i class={item?.faIcon}></i>
              <span>{item.name}</span>
            </li>
          )
        }
      </ul>
    ];
  }
}
