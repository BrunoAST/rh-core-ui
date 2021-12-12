import { h } from "@stencil/core";
import componentSetup from "../../../../../utils/component-setup/component-setup";
import { SideBarItems } from "../side-bar-items";
import { menuItems } from "./mock-menu-items";

const menuElements = (shadowRoot: ShadowRoot): HTMLLIElement[] => {
  return Array.from(shadowRoot.querySelectorAll("li"));
}

describe("SideBarItems component", () => {
  test("Should render menu items", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-side-bar-items menuItems={menuItems} />,
      SideBarItems
    );
    expect(shadowRoot.querySelector(".items-list__item > span").textContent).toBe(menuItems[0].name);
    expect(shadowRoot.querySelector(".items-list").children).toHaveLength(2);
  });

  test("Should emit url of the clicked item", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-side-bar-items menuItems={menuItems} onItemClicked={(data) => {
        expect(data.detail).toBe(menuItems[0].url);
      }} />,
      SideBarItems
    );
    const listItem = menuElements(shadowRoot)[0];
    listItem.click();
  });

   test("Should set current active index", async () => {
    const currentActiveIndex = 1;
    const { shadowRoot } = await componentSetup(
      <rh-side-bar-items menuItems={menuItems} currentActiveIndex={currentActiveIndex} />,
      SideBarItems
    );
    const listItem = menuElements(shadowRoot)[currentActiveIndex];
    expect(listItem.classList.contains("items-list__active")).toBeTruthy();
  });

  test("Should set active to an item when clicked", async () => {
    const { shadowRoot, waitForChanges } = await componentSetup(
      <rh-side-bar-items menuItems={menuItems} />,
      SideBarItems
    );
    const listItem = menuElements(shadowRoot)[0];
    listItem.click();
    expect(listItem.classList.contains("items-list__active")).toBeFalsy();
    await waitForChanges();
    expect(listItem.classList.contains("items-list__active")).toBeTruthy();
  });
});
