import { h } from "@stencil/core";
import faker from "faker";
import componentSetup from "../../../utils/component-setup/component-setup";
import { ActionList } from "../action-list";
import { ActionListFieldConfig } from "../types/action-list-field-config";

const fieldConfigIndexData = {
  name: 0,
  email: 1,
  user: 2
};

const actionButtonIndex = {
  edit: 0,
  delete: 1
};

const itemClicked = jest.fn();

const fieldConfigs: ActionListFieldConfig[] = [
  {
    valueToBeShowed: (value) => value.name
  },
  {
    valueToBeShowed: (value) => value.email
  },
  {
    valueToBeShowed: () => "Vincular relatório ao usuário",
    style: {
      "color": "#F46036",
      "text-decoration": "underline",
      "cursor": "pointer",
      "font-weight": "bold"
    },
    itemClicked: itemClicked
  }
];

const items = Array.from({ length: 5 }).map(() => (
  {
    name: faker.name.findName(),
    email: faker.internet.email()
  }
));

const list = (shadowRoot: ShadowRoot): HTMLLIElement[] => {
  return Array.from(shadowRoot.querySelectorAll("li"));
}

const detail = (shadowRoot: ShadowRoot, itemIndex: number): HTMLSpanElement[] => {
  const detail = list(shadowRoot)[itemIndex];
  return Array.from(detail.querySelectorAll("span"));
}

const actions = (shadowRoot: ShadowRoot, itemIndex: number): HTMLRhButtonElement[] => {
  const item = list(shadowRoot)[itemIndex];
  return Array.from(item.querySelectorAll("rh-button"));
}

describe("Action list component", () => {
  test("Should render list item", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-action-list items={items} />,
      ActionList
    );
    expect(list(shadowRoot).length).toBe(5);
  });

  test("Should render the values to be showed via fieldConfigs", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-action-list fieldConfigs={fieldConfigs} items={items} />,
      ActionList
    );
    const values = detail(shadowRoot, 0);
    expect(values[fieldConfigIndexData.name].textContent.trim()).toBe(items[0].name);
    expect(values[fieldConfigIndexData.email].textContent.trim()).toBe(items[0].email);
    expect(values[fieldConfigIndexData.user].textContent.trim()).toBe("Vincular relatório ao usuário");
  });

  test("Should be able to apply custom styles to the showed value", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-action-list fieldConfigs={fieldConfigs} items={items} />,
      ActionList
    );
    const values = detail(shadowRoot, 0);
    expect(values[fieldConfigIndexData.user].style.color).toBe("#F46036");
    expect(values[fieldConfigIndexData.user].style.textDecoration).toBe("underline");
    expect(values[fieldConfigIndexData.user].style.cursor).toBe("pointer");
    expect(values[fieldConfigIndexData.user].style.fontWeight).toBe("bold");
  });

  test("Should be able to click on a field if it has the itemClicked function implemented", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-action-list fieldConfigs={fieldConfigs} items={items} />,
      ActionList
    );
    const values = detail(shadowRoot, 0);
    values[fieldConfigIndexData.user].click();
    expect(itemClicked).toHaveBeenCalledWith(items[0]);
  });

  test("Should emit edit item click event when edit button is clicked", async () => {
    const editClicked = jest.fn();
    const { shadowRoot } = await componentSetup(
      <rh-action-list fieldConfigs={fieldConfigs} items={items} onEditClicked={editClicked} />,
      ActionList
    );
    const editButton = actions(shadowRoot, 0)[actionButtonIndex.edit];
    editButton.dispatchEvent(new CustomEvent("clicked"));
    expect(editClicked).toHaveBeenCalled();
  });

  test("Should emit delete item click event when delete button is clicked", async () => {
    const deleteClicked = jest.fn();
    const { shadowRoot } = await componentSetup(
      <rh-action-list fieldConfigs={fieldConfigs} items={items} onDeleteClicked={deleteClicked} />,
      ActionList
    );
    const deleteButton = actions(shadowRoot, 0)[actionButtonIndex.delete];
    deleteButton.dispatchEvent(new CustomEvent("clicked"));
    expect(deleteClicked).toHaveBeenCalled();
  });
});
