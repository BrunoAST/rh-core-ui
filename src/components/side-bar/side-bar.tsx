import { Component, getAssetPath, h, Prop } from "@stencil/core";
import { Items } from "../../types/items";

@Component({
  tag: "rh-side-bar",
  styleUrl: "./side-bar.scss",
  shadow: true,
  assetsDirs: ["assets"]
})
export class SideBar {
  @Prop({ attribute: "menu-items", mutable: true, reflect: true }) menuItems: Items[] = [];

  render() {
    return [
      <aside class="container">
        <header class="header">
          <h1 class="header__title">Logo</h1>
          <div class="header__menu">
            <img src={getAssetPath("../../assets/menu.svg")} alt="Menu" />
          </div>
        </header>

        <rh-side-bar-items menuItems={this.menuItems} />

        <footer>
          Login/Logout
        </footer>
      </aside>
    ];
  }
}
