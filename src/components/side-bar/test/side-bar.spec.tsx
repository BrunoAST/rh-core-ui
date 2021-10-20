import { h } from "@stencil/core";
import componentSetup from "../../../utils/component-setup/component-setup";
import { SideBarItems } from "../components/side-bar-items/side-bar-items";
import { menuItems } from "../components/side-bar-items/test/mock-menu-items";
import { SideBar } from "../side-bar";

describe("SideBar component", () => {
  test("Should not have item-title-hidden when isCollapsed is false", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-side-bar menuItems={menuItems} />,
      SideBarItems, SideBar
    );
    const rhSideBarItems: HTMLRhSideBarItemsElement = shadowRoot.querySelector("rh-side-bar-items");
    const items = rhSideBarItems.shadowRoot.querySelectorAll(".items-list__item > span");
    items.forEach(item => {
      expect(item.classList.contains("item-title-hidden")).toBeFalsy();
    });
  });

  test("Should add item-title-hidden when isCollapsed is true", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-side-bar menuItems={menuItems} />,
      SideBarItems, SideBar
    );
    (shadowRoot.getElementById("header-button") as HTMLButtonElement).click();
    const rhSideBarItems: HTMLRhSideBarItemsElement = shadowRoot.querySelector("rh-side-bar-items");
    const items = rhSideBarItems.shadowRoot.querySelectorAll(".items-list__item > span");
    items.forEach(item => {
      expect(item.classList.contains("item-title-hidden")).toBeTruthy();
    });
  });

  test("Should collapse side bar when click in backdrop", async () => {
    let isCollapsed: boolean;
    const { shadowRoot } = await componentSetup(
      <rh-side-bar menuItems={menuItems} onIsCollapsed={(event) => isCollapsed = event.detail} />,
      SideBarItems, SideBar
    );
    (shadowRoot.getElementById("header-button") as HTMLButtonElement).click();
    expect(isCollapsed).toBeTruthy();
    (shadowRoot.querySelector(".backdrop") as HTMLButtonElement).click();
    expect(isCollapsed).toBeFalsy();
  });
});
