import { Component, h, Prop } from "@stencil/core";
import { MenuItems } from "../../types/menu-items";

@Component({
  tag: "rh-side-bar",
  styleUrl: "./side-bar.scss",
  shadow: true,
  assetsDirs: ["assets"]
})
export class SideBar {
  @Prop({ attribute: "menu-items", mutable: true, reflect: true }) menuItems: MenuItems[] = [];

  render() {
    return [
      <aside class="container">
        <header class="header">
          <h1 class="header__title">Logo</h1>
          <div class="header__menu">
          </div>
        </header>

        <rh-side-bar-items menuItems={this.menuItems} />

        {/* <footer>
          Login/Logout
        </footer> */}
      </aside>
    ];
  }
}
