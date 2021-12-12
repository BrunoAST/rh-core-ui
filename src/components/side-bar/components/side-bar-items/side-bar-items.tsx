import { Component, Event, Element, EventEmitter, h, Listen, State, Prop } from "@stencil/core";
import { MenuItems } from "../../../../shared/types/menu-items";
import 'ionicons';

@Component({
  tag: "rh-side-bar-items",
  styleUrl: "./side-bar-items.scss",
  shadow: true
})
export class SideBarItems {
  @Element() element: HTMLElement;

  @State() isCollapsed: boolean;

  @Event({ bubbles: true, composed: true }) itemClicked: EventEmitter<string>;

  @Prop({ attribute: "menu-items", mutable: true, reflect: true }) menuItems: MenuItems[] = [];
  @Prop({ mutable: true, reflect: true }) currentActiveIndex: number;

  @Listen("isCollapsed", { target: "body" })
  onToggleTitleVisibility({ detail }: CustomEvent): void {
    this.isCollapsed = detail;
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
              class={`items-list__item ${this.currentActiveIndex == index ? "items-list__active" : ""}`}
              onClick={() => {
                this.emitItemUrl(item);
                this.currentActiveIndex = index;
              }}
            >
              {
                this.isCollapsed ?
                  <rh-tooltip value={item.name} position="right" class="tooltip">
                    <ion-icon class="icon" name={item.ionIconName} />
                  </rh-tooltip> :
                  [
                    <ion-icon class="icon" name={item.ionIconName} />,
                    <span class="item-title">{item.name}</span>
                  ]
              }
            </li>
          )
        }
      </ul>
    ];
  }
}
