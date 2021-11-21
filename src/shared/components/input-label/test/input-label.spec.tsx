import { h } from "@stencil/core";
import faker from "faker";
import componentSetup from "../../../../utils/component-setup/component-setup";
import { InputLabel } from "../input-label";

const labelText = faker.random.word();

const label = (shadowRoot: ShadowRoot): HTMLLabelElement => {
  return shadowRoot.querySelector("label");
}

describe("Input label component", () => {
  test("Should receive a label", async () => {
    const { shadowRoot } = await componentSetup(<rh-input-label label={labelText} />, InputLabel);
    expect(label(shadowRoot).textContent).toBe(labelText);
  });

  test("Should show required indicator", async () => {
    const { shadowRoot } = await componentSetup(<rh-input-label isRequired label={labelText} />, InputLabel);
    const requiredIndicator = shadowRoot.querySelector("label > span");
    expect(requiredIndicator.textContent).toBe("*");
  });

  test("Should set invalid-label class when isInvalid is true", async () => {
    const { shadowRoot } = await componentSetup(<rh-input-label isInvalid label={labelText} />, InputLabel);
    expect(label(shadowRoot).classList.contains("invalid-label")).toBeTruthy();
  });
});
