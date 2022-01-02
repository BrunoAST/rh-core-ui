import { h } from "@stencil/core";
import componentSetup from "../../../utils/component-setup/component-setup";
import { Buttons } from "../buttons";
import faker from "faker";

describe("Buttons component", () => {
  test("Should receive a value via slot", async () => {
    await componentSetup(
      <rh-button>Button title</rh-button>,
      Buttons
    );
    expect(document.querySelector("rh-button").textContent).toBe("Button title");
  });

  test("Should have aria label", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-button ariaLabel="Aria label test"></rh-button>,
      Buttons
    );
    expect(shadowRoot.querySelector("button").getAttribute("aria-label")).toBe("Aria label test");
  });

  test("Should not have ion icon element when no icon is passed", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-button></rh-button>,
      Buttons
    );
    expect(shadowRoot.querySelector("ion-icon")).toBe(null);
  });

  test("Should contain an ion icon", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-button ionIconName="save-outline"></rh-button>,
      Buttons
    );
    expect(shadowRoot.querySelector("ion-icon").getAttribute("name")).toBe("save-outline");
  });

  test("Should start with disabled false", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-button />,
      Buttons
    );
    expect(shadowRoot.querySelector("button").hasAttribute("disabled")).toBeFalsy();
    expect(shadowRoot.querySelector("button").hasAttribute("aria-disabled")).toBeFalsy();
  });

  test("Should set disabled to true", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-button disabled />,
      Buttons
    );
    expect(shadowRoot.querySelector("button").hasAttribute("disabled")).toBeTruthy();
    expect(shadowRoot.querySelector("button").hasAttribute("aria-disabled")).toBeTruthy();
  });

  test("Should start with variant basic", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-button variant="basic">Basic</rh-button>,
      Buttons
    );
    expect(document.querySelector("rh-button").textContent).toBe("Basic");
    expect(shadowRoot.querySelector("button").classList.contains("basic")).toBeTruthy();
  });

  test("Should have filled class when variant is filled", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-button variant="filled">Filled</rh-button>,
      Buttons
    );
    expect(document.querySelector("rh-button").textContent).toBe("Filled");
    expect(shadowRoot.querySelector("button").classList.contains("filled")).toBeTruthy();
  });

  test("Should have stroked class when variant is stroked", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-button variant="stroked">Stroked</rh-button>,
      Buttons
    );
    expect(document.querySelector("rh-button").textContent).toBe("Stroked");
    expect(shadowRoot.querySelector("button").classList.contains("stroked")).toBeTruthy();
  });

  test("Should have underlined class when variant is underlined", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-button variant="underlined">Underlined</rh-button>,
      Buttons
    );
    expect(document.querySelector("rh-button").textContent).toBe("Underlined");
    expect(shadowRoot.querySelector("button").classList.contains("underlined")).toBeTruthy();
  });

  test("Should have icon class when variant is icon", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-button variant="icon" />,
      Buttons
    );
    expect(shadowRoot.querySelector("button").classList.contains("icon")).toBeTruthy();
  });

  test("Should emit when button clicked", async () => {
    const onClick = jest.fn();
    const { shadowRoot } = await componentSetup(
      <rh-button onClicked={onClick}>Button</rh-button>,
      Buttons
    );
    shadowRoot.querySelector("button").click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("Should not receive a button border color when ionIconName is not set", async () => {
    const color = faker.internet.color();
    const { shadowRoot } = await componentSetup(
      <rh-button ionIconColor={color} />,
      Buttons
    );
    const button = shadowRoot.querySelector("button");
    expect(button.style.borderColor).toBe("");
  });

  test("Should receive an ionIconColor when it have an ionIconName", async () => {
    const color = faker.internet.color();
    const { shadowRoot } = await componentSetup(
      <rh-button ionIconName="save" ionIconColor={color} />,
      Buttons
    );
    const button = shadowRoot.querySelector("button");
    const ionIcon = shadowRoot.querySelector("ion-icon");
    expect(button.style.borderColor).toBe(color);
    expect(ionIcon.style.color).toBe(color);
  });
});
