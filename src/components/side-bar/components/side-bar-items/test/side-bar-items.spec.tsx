import { h } from "@stencil/core";
import faker from "faker";
import { MenuItems } from "../../../types/menu-items";
import componentSetup from "../../../../../utils/component-setup/component-setup";
import { SideBarItems } from "../side-bar-items";

const menuItems: MenuItems[] = [
  { name: faker.random.word(), url: faker.internet.url(), isActive: false },
  { name: faker.random.word(), url: faker.internet.url(), isActive: false }
];

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
    const listItem = shadowRoot.getElementById("item-0");
    listItem.click();
  });

  test("Should set active to an item when clicked", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-side-bar-items menuItems={menuItems} />,
      SideBarItems
    );
    const listItem = shadowRoot.getElementById("item-0");
    listItem.click();
    expect(menuItems[0].isActive).toBeTruthy();
    expect(listItem.classList.contains("items-list__active")).toBeTruthy();
  });
});
