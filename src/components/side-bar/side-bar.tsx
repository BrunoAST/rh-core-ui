import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";
import { MenuItems } from "../../types/menu-items";
import 'ionicons';

@Component({
  tag: "rh-side-bar",
  styleUrl: "./side-bar.scss",
  shadow: true,
  assetsDirs: ["assets"]
})
export class SideBar {
  barContainer: HTMLElement;

  @Prop({ attribute: "menu-items", mutable: true, reflect: true }) menuItems: MenuItems[] = [];

  @Event() isBarCollapsed: EventEmitter<boolean>;

  componentWillRender(): void {
    this.isBarCollapsed.emit(false);
  }

  toggleBarState(): void {
    this.barContainer.classList.toggle("container-collapsed-desktop");
    const isCollapsed = this.barContainer.classList.contains("container-collapsed-desktop");
    this.isBarCollapsed.emit(isCollapsed);
  }

  render() {
    return [
      <aside ref={element => this.barContainer = element} class="container">
        <header class="header">
          <h1 class="header__title">Logo</h1>
          <button id="header-button" onClick={this.toggleBarState.bind(this)}>
            <ion-icon class="header__menu-icon" name="menu"></ion-icon>
          </button>
        </header>

        <rh-side-bar-items menuItems={this.menuItems} />

        {/* <footer>
          Login/Logout
        </footer> */}
      </aside>
    ];
  }
}
