import { h } from "@stencil/core";
import { newSpecPage } from "@stencil/core/testing";
import faker from "faker";
import { MenuItems } from "../../../../../types/menu-items";
import { SideBarItems } from "../side-bar-items";

type TestTypes = {
  shadowRoot: ShadowRoot;
  menuItems: MenuItems[];
}

const component = async (): Promise<TestTypes> => {
  const menuItems: MenuItems[] = [
    { name: faker.random.word(), url: faker.internet.url() },
    { name: faker.random.word(), url: faker.internet.url() }
  ];
  const { root } = await newSpecPage({
    components: [SideBarItems],
    template: () => (
      <rh-side-bar-items menuItems={menuItems} />
    )
  });
  return {
    shadowRoot: root.shadowRoot,
    menuItems
  };
}

describe("SideBar component", () => {
  test("Should render menu items", async () => {
    const { shadowRoot, menuItems } = await component();
    expect(shadowRoot.querySelector(".items-list__item").firstChild.textContent).toBe(menuItems[0].name);
    expect(shadowRoot.querySelector(".items-list").children).toHaveLength(2);
  });
});
