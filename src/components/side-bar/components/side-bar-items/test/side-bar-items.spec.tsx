import { h } from "@stencil/core";
import faker from "faker";
import { MenuItems } from "../../../../../types/menu-items";
import componentSetup from "../../../../../utils/component-setup/component-setup";
import { SideBarItems } from "../side-bar-items";

const menuItems: MenuItems[] = [
  { name: faker.random.word(), url: faker.internet.url(), isActive: false },
  { name: faker.random.word(), url: faker.internet.url(), isActive: false }
];

describe("SideBar component", () => {
  test("Should render menu items", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-side-bar-items menuItems={menuItems} />,
      SideBarItems
    );
    expect(shadowRoot.querySelector(".items-list__item > span").textContent).toBe(menuItems[0].name);
    expect(shadowRoot.querySelector(".items-list").children).toHaveLength(2);
  });

  test("Should set active to an item when clicked", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-side-bar-items menuItems={menuItems} onItemClicked={(data) => {
        expect(data.detail).toBe(menuItems[0].url);
        expect(menuItems[0].isActive).toBeTruthy();
        expect(listItem.classList).toContain("items-list__active");
      }} />,
      SideBarItems
    );
    const listItem = shadowRoot.getElementById("item-0");
    listItem.click();
  });

  test("Should return items-list__active when isActive is true", () => {
    const component = new SideBarItems();
    menuItems[0].isActive = true;
    component.menuItems = menuItems;
    const result = component.checkIsActive(menuItems[0]);
    expect(result).toBe("items-list__active");
  });

  test("Should return null when isActive is false", () => {
    const component = new SideBarItems();
    menuItems[0].isActive = false;
    component.menuItems = menuItems;
    const result = component.checkIsActive(menuItems[0]);
    expect(result).toBeNull();
  });
});
