import { Component, Event, Element, EventEmitter, h, Prop, Listen, State, Watch } from "@stencil/core";
import { MenuItems } from "../../types/menu-items";
import 'ionicons';

@Component({
  tag: "rh-side-bar-items",
  styleUrl: "./side-bar-items.scss",
  shadow: true
})
export class SideBarItems {
  @Element() element: HTMLElement;

  @State() isCollapsed: boolean;

  @Prop({ attribute: "menu-items", mutable: true, reflect: true }) menuItems: MenuItems[] = [];

  @Event({ bubbles: true, composed: true }) itemClicked: EventEmitter<string>;

  @Listen("isCollapsed", { target: "body" })
  onToggleTitleVisibility({ detail }: CustomEvent): void {
    this.isCollapsed = detail;
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
              {
                this.isCollapsed ?
                  <rh-tooltip value={item.name} position="right" class="tooltip">
                    <ion-icon class="icon" name={item.ionIconName} />
                  </rh-tooltip> :

                  [<ion-icon class="icon" name={item.ionIconName} />,
                  <span class="item-title">{item.name}</span>]
              }
            </li>
          )
        }
      </ul>
    ];
  }
}
