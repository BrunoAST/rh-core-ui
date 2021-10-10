import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";
import { MenuItems } from "../../../../types/menu-items";
import 'ionicons';

@Component({
  tag: "rh-side-bar-items",
  styleUrl: "./side-bar-items.scss",
  shadow: true
})
export class SideBarItems {
  @Prop({ attribute: "menu-items", mutable: true, reflect: true }) menuItems: MenuItems[] = [];

  @Event({ bubbles: true, composed: true }) itemClicked: EventEmitter<string>;

  checkIsActive(item: MenuItems): string {
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
              id={`item-${index}`}
              class={`items-list__item ${this.checkIsActive(item)}`}
              onClick={this.onItemClicked.bind(this, item)}
            >
              <ion-icon class="icon" name={item.ionIconName}></ion-icon>
              <span>{item.name}</span>
            </li>
          )
        }
      </ul>
    ];
  }
}
