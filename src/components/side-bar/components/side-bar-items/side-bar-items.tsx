import { Component, Event, Element, EventEmitter, h, Prop, Listen } from "@stencil/core";
import { MenuItems } from "../../../../types/menu-items";
import 'ionicons';

@Component({
  tag: "rh-side-bar-items",
  styleUrl: "./side-bar-items.scss",
  shadow: true
})
export class SideBarItems {
  @Element() element: HTMLElement;

  @Prop({ attribute: "menu-items", mutable: true, reflect: true }) menuItems: MenuItems[] = [];

  @Event({ bubbles: true, composed: true }) itemClicked: EventEmitter<string>;

  @Listen("isBarCollapsed", { target: "body" })
  onIsBarCollapsed(): void {
    const items = Array.from(this.element.shadowRoot.querySelectorAll(".items-list__item > span"));
    items.forEach((item) => {
      item.classList.toggle("item-title-hidden");
    });
  }

  setActiveItem(itemIndex: number): void {
    const items = Array.from(this.element.shadowRoot.querySelectorAll(".items-list__item"));
    items.forEach((_, index) =>
      this.element.shadowRoot.getElementById(`item-${index}`).classList.toggle("items-list__active", index === itemIndex)
    );
    this.menuItems = this.menuItems.map((item, index) => {
      item.isActive = itemIndex === index ? true : false;
      return item;
    });
  }

  emitItemUrl(item: MenuItems): void {
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
              class="items-list__item"
              onClick={() => {
                this.emitItemUrl(item);
                this.setActiveItem(index);
              }}
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
