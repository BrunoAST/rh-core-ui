import { h } from "@stencil/core";
import { dispatchWindowEvent } from "../../../shared/helpers/window-event";
import componentSetup from "../../../utils/component-setup/component-setup";
import { SideBarItems } from "../components/side-bar-items/side-bar-items";
import { menuItems } from "../components/side-bar-items/test/mock-menu-items";
import { SideBar } from "../side-bar";

describe("SideBar component", () => {
  test("Should contain item title span element when isCollapsed is false", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-side-bar menuItems={menuItems} />,
      SideBarItems, SideBar
    );
    const rhSideBarItems: HTMLRhSideBarItemsElement = shadowRoot.querySelector("rh-side-bar-items");
    const items = rhSideBarItems.shadowRoot.querySelectorAll("span.item-title");
    items.forEach(item => expect(item).not.toBeNull());
  });

  test("Should not contain item title span element when isCollapsed is true", async () => {
    const { shadowRoot, waitForChanges } = await componentSetup(
      <rh-side-bar menuItems={menuItems} />,
      SideBarItems, SideBar
    );
    (shadowRoot.getElementById("header-button") as HTMLButtonElement).click();
    await waitForChanges();
    const rhSideBarItems: HTMLRhSideBarItemsElement = shadowRoot.querySelector("rh-side-bar-items");
    const items = rhSideBarItems.shadowRoot.querySelectorAll("span.item-title");
    expect(items).toHaveLength(0);
  });

  test("Should collapse side bar when click in backdrop", async () => {
    let isCollapsed: boolean;
    const { shadowRoot } = await componentSetup(
      <rh-side-bar menuItems={menuItems} onIsCollapsed={(event) => isCollapsed = event.detail} />,
      SideBar
    );
    (shadowRoot.getElementById("header-button") as HTMLButtonElement).click();
    expect(isCollapsed).toBeTruthy();
    (shadowRoot.querySelector(".backdrop") as HTMLDivElement).click();
    expect(isCollapsed).toBeFalsy();
  });

  test("Should add main-content__collapsed class when click in menu toggle", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-side-bar menuItems={menuItems} />,
      SideBar
    );
    expect(shadowRoot.querySelector("main").classList.contains("main-content__collapsed")).toBeFalsy();
    (shadowRoot.getElementById("header-button") as HTMLButtonElement).click();
    expect(shadowRoot.querySelector("main").classList.contains("main-content__collapsed")).toBeTruthy();
  });

  test("Should collapse when window innerWidth is less than 960 pixels wide", async () => {
    let isCollapsed: boolean;
    const { shadowRoot } = await componentSetup(
      <rh-side-bar menuItems={menuItems} onIsCollapsed={(event) => isCollapsed = event.detail} />,
      SideBar
    );
    (window as any).innerWidth = 500;
    dispatchWindowEvent("resize");
    expect(shadowRoot.querySelector("main").classList.contains("main-content__collapsed")).toBeTruthy();
    expect(shadowRoot.querySelector(".container").classList.contains("container__collapsed")).toBeTruthy();
    expect(shadowRoot.querySelector(".backdrop").classList.contains("backdrop__active")).toBeFalsy();
    expect(isCollapsed).toBeTruthy();
  });

  test("Should expand when window innerWidth is greater than 960 pixels wide", async () => {
    let isCollapsed: boolean;
    const { shadowRoot } = await componentSetup(
      <rh-side-bar menuItems={menuItems} onIsCollapsed={(event) => isCollapsed = event.detail} />,
      SideBar
    );
    (window as any).innerWidth = 500;
    dispatchWindowEvent("resize");
    expect(shadowRoot.querySelector("main").classList.contains("main-content__collapsed")).toBeTruthy();
    (window as any).innerWidth = 1080;
    dispatchWindowEvent("resize");
    expect(shadowRoot.querySelector("main").classList.contains("main-content__collapsed")).toBeFalsy();
    expect(shadowRoot.querySelector(".container").classList.contains("container__collapsed")).toBeFalsy();
    expect(shadowRoot.querySelector(".backdrop").classList.contains("backdrop__active")).toBeFalsy();
    expect(isCollapsed).toBeFalsy();
  });
});
