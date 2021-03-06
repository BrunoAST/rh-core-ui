import { h } from "@stencil/core";
import componentSetup from "../../../utils/component-setup/component-setup";
import { Select } from "../select";
import faker from "faker";
import { selectOptions } from "./mock-select-options";
import { dispatchKeydownEvent } from "../../../test/helpers/dispatch-keydown-event";

const label = faker.random.words();

const optionsElementList = (shadowRoot: ShadowRoot): Element[] => {
  return Array.from(shadowRoot.querySelector(".options-container").children);
}

const mockScrollIntoViewOptionsList = (shadowRoot: ShadowRoot) => {
  optionsElementList(shadowRoot).forEach((option) => option.scrollIntoView = jest.fn());
}

describe("Select component", () => {
  test("Should render placeholder", async () => {
    const placeholder = faker.random.word();
    const { shadowRoot } = await componentSetup(
      <rh-select placeholder={placeholder} />,
      Select
    );
    expect(shadowRoot.querySelector(".selected > span").textContent).toBe(placeholder);
  });

  test("Should receive a name", async () => {
    const name = faker.random.word();
    const { shadowRoot } = await componentSetup(<rh-select name={name} options={selectOptions} />, Select);
    expect(shadowRoot.querySelector("input").getAttribute("name")).toBe(name);
  });

  test("Should render options", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-select label={label} options={selectOptions} />,
      Select
    );
    const options = Array.from(shadowRoot.querySelector(".options-container").children);
    options.forEach((option, index) => {
      expect(option.querySelector("label").textContent).toBe(selectOptions[index].title);
    });
  });

  test("Should update selected value when an option is clicked", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-select label={label} options={selectOptions} />,
      Select
    );
    expect(shadowRoot.querySelector(".selected").textContent).toBe("");
    (shadowRoot.querySelector(`[data-value=${selectOptions[0].value}]`) as HTMLLIElement).click();
    expect(shadowRoot.querySelector(".selected").textContent).toBe(selectOptions[0].title);
  });

  test("Should receive a value via prop", async () => {
    const options = [{ value: "Item 1", title: "Item 1" }];
    const value = "Item 1";
    const { shadowRoot } = await componentSetup(
      <rh-select value={value} options={options} />,
      Select
    );
    expect(shadowRoot.querySelector(".selected").textContent).toBe(value);
  });

  test("Should not update the selected value when the inserted prop value is not found", async () => {
    const options = [{ value: "Item 1", title: "Item 1" }];
    const value = "Value not found";
    const { shadowRoot } = await componentSetup(
      <rh-select value={value} options={options} />,
      Select
    );
    expect(shadowRoot.querySelector(".selected").textContent).toBe("");
  });

  test("Should not update selected value when value or title is empty", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-select label={label} options={[{ value: "", title: "Empty value" }]} />,
      Select
    );
    expect(shadowRoot.querySelector(".selected").textContent).toBe("");
    (shadowRoot.querySelector(`.options-container`).children[0] as HTMLLIElement).click();
    expect(shadowRoot.querySelector(".selected").textContent).toBe("");
  });

  test("Should toggle active", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-select label={label} options={selectOptions} />,
      Select
    );
    (shadowRoot.querySelector(".selected") as HTMLDivElement).click();
    expect(shadowRoot.querySelector(".options-container").classList.contains("active")).toBeTruthy();
    (shadowRoot.querySelector(".selected") as HTMLDivElement).click();
    expect(shadowRoot.querySelector(".options-container").classList.contains("active")).toBeFalsy();
  });

  test("Should close when click outside", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-select label={label} options={selectOptions} />,
      Select
    );
    (shadowRoot.querySelector(".selected") as HTMLDivElement).click(); // Opens the list of options
    expect(shadowRoot.querySelector(".options-container").classList.contains("active")).toBeTruthy();
    document.body.dispatchEvent(new Event("click", { bubbles: true })); // Clicks outside select
    expect(shadowRoot.querySelector(".options-container").classList.contains("active")).toBeFalsy();
  });

  test("Should emit the selected value", async () => {
    let valueSelected;
    const { shadowRoot } = await componentSetup(
      <rh-select label={label} options={selectOptions} onValueSelected={(event) => valueSelected = event.detail} />,
      Select
    );
    (shadowRoot.querySelector(".options-container").children[0] as HTMLLIElement).click();
    expect(valueSelected).toBe(selectOptions[0].value);
  });

  test("Should navigate to next option in the list when ArrowDown is pressed", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-select label={label} options={selectOptions} />,
      Select
    );
    const expectedOptionsHoveredIndex = 0;
    const notExpectedOptionsHoveredIndex = 1;
    mockScrollIntoViewOptionsList(shadowRoot);
    dispatchKeydownEvent("ArrowDown");
    expect(optionsElementList(shadowRoot)[expectedOptionsHoveredIndex].classList.contains("is-hovered")).toBeTruthy();
    expect(optionsElementList(shadowRoot)[notExpectedOptionsHoveredIndex].classList.contains("is-hovered")).toBeFalsy();
  });

  test("Should navigate to previous option in the list when ArrowUp is pressed", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-select label={label} options={selectOptions} />,
      Select
    );
    const expectedOptionsHoveredIndex = 1;
    const notExpectedOptionsHoveredIndex = 2;
    mockScrollIntoViewOptionsList(shadowRoot);
    dispatchKeydownEvent("ArrowDown"); // Hover first option
    dispatchKeydownEvent("ArrowDown"); // Hover second option
    dispatchKeydownEvent("ArrowDown"); // Hover third option
    dispatchKeydownEvent("ArrowUp"); // Go back do second option
    expect(optionsElementList(shadowRoot)[expectedOptionsHoveredIndex].classList.contains("is-hovered")).toBeTruthy();
    expect(optionsElementList(shadowRoot)[notExpectedOptionsHoveredIndex].classList.contains("is-hovered")).toBeFalsy();
  });

  test("Should not hover any option when ArrowUp is the first navigation key pressed", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-select label={label} options={selectOptions} />,
      Select
    );
    mockScrollIntoViewOptionsList(shadowRoot);
    dispatchKeydownEvent("ArrowUp");
    optionsElementList(shadowRoot).forEach(option => expect(option.classList.contains("is-hovered")).toBeFalsy());
  });

  test("Should hover the last option when there are no more options to be hovered", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-select label={label} options={selectOptions} />,
      Select
    );
    const expectedOptionsHoveredIndex = 9;
    const notExpectedOptionsHoveredIndex = 8;
    mockScrollIntoViewOptionsList(shadowRoot);
    Array.from({ length: 11 }).forEach(() => dispatchKeydownEvent("ArrowDown"));
    expect(optionsElementList(shadowRoot)[expectedOptionsHoveredIndex].classList.contains("is-hovered")).toBeTruthy();
    expect(optionsElementList(shadowRoot)[notExpectedOptionsHoveredIndex].classList.contains("is-hovered")).toBeFalsy();
  });

  test("Should select an option when Enter is pressed", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-select label={label} options={selectOptions} />,
      Select
    );
    const expectedOptionToBeSelected = selectOptions[0];
    mockScrollIntoViewOptionsList(shadowRoot);
    dispatchKeydownEvent("ArrowDown");
    dispatchKeydownEvent("Enter");
    expect(shadowRoot.querySelector(".selected").textContent).toBe(expectedOptionToBeSelected.title);
  });

  test("Should close options when Escape is pressed", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-select label={label} options={selectOptions} />,
      Select
    );
    (shadowRoot.querySelector(".selected") as HTMLDivElement).click();
    expect(shadowRoot.querySelector(".options-container").classList.contains("active")).toBeTruthy();
    dispatchKeydownEvent("Escape");
    expect(shadowRoot.querySelector(".options-container").classList.contains("active")).toBeFalsy();
  });
});
