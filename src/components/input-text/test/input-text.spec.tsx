import { h } from "@stencil/core";
import faker from "faker";
import componentSetup from "../../../utils/component-setup/component-setup";
import { InputText } from "../input-text";

const input = (shadowRoot: ShadowRoot): HTMLInputElement => {
  return shadowRoot.querySelector("input");
}

const label = (shadowRoot: ShadowRoot): HTMLLabelElement => {
  return shadowRoot.querySelector("label");
}

const eyeIcon = (shadowRoot: ShadowRoot): HTMLIonIconElement => {
  return shadowRoot.querySelector("ion-icon");
}

describe("Input text component", () => {
  describe("type", () => {
    test("Should start with type text", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text />, InputText);
      expect(input(shadowRoot).getAttribute("type")).toBe("text");
      expect(eyeIcon(shadowRoot)).toBeNull();
    });

    test("Should set type to password", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text type="password" />, InputText);
      expect(input(shadowRoot).getAttribute("type")).toBe("password");
      expect(eyeIcon(shadowRoot)).toBeDefined();
      expect(eyeIcon(shadowRoot).getAttribute("name")).toBe("eye-off");
    });

    test("Should update currentInputType when togglePasswordVisibility is called", () => {
      const component = new InputText();
      component.isPasswordHidden = false;
      expect(component.currentInputType).toBe("text");
      component.togglePasswordVisibility();
      expect(component.currentInputType).toBe("password");
    });

    test("Should toggle password visibility", async () => {
      const { shadowRoot, waitForChanges } = await componentSetup(<rh-input-text type="password" />, InputText);
      expect(input(shadowRoot).getAttribute("type")).toBe("password");
      expect(eyeIcon(shadowRoot).getAttribute("name")).toBe("eye-off");
      eyeIcon(shadowRoot).click();
      await waitForChanges();
      expect(input(shadowRoot).getAttribute("type")).toBe("text");
      expect(eyeIcon(shadowRoot).getAttribute("name")).toBe("eye");
    });
  });

  test("Should receive a label", async () => {
    const labelText = faker.random.word();
    const { shadowRoot } = await componentSetup(<rh-input-text label={labelText} />, InputText);
    expect(label(shadowRoot).textContent).toBe(labelText);
  });

  test("Should receive a name", async () => {
    const name = faker.random.word();
    const { shadowRoot } = await componentSetup(<rh-input-text name={name} />, InputText);
    expect(input(shadowRoot).getAttribute("name")).toBe(name);
  });

  test("Should receive a placeholder", async () => {
    const placeholder = faker.random.word();
    const { shadowRoot } = await componentSetup(<rh-input-text placeholder={placeholder} />, InputText);
    expect(input(shadowRoot).getAttribute("placeholder")).toBe(placeholder);
  });

  test("Should receive an ariaLabel", async () => {
    const ariaLabel = faker.random.word();
    const { shadowRoot } = await componentSetup(<rh-input-text ariaLabel={ariaLabel} />, InputText);
    expect(input(shadowRoot).getAttribute("aria-label")).toBe(ariaLabel);
  });

  describe("isRequired", () => {
    test("Should start with isRequired false", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text />, InputText);
      expect(input(shadowRoot).hasAttribute("required")).toBeFalsy();
      expect(input(shadowRoot).hasAttribute("aria-required")).toBeFalsy();
    });

    test("Should set isRequired to true", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text isRequired label={faker.random.word()} />, InputText);
      const requiredIndicator = shadowRoot.querySelector("label > span");
      expect(input(shadowRoot).hasAttribute("required")).toBeTruthy();
      expect(input(shadowRoot).hasAttribute("aria-required")).toBeTruthy();
      expect(requiredIndicator.textContent).toBe("*");
    });
  });

  test("Should emit the value", async () => {
    const expectedValue = faker.random.word();
    let value;
    const { shadowRoot } = await componentSetup(
      <rh-input-text onValue={(event: CustomEvent) => value = event.detail} />,
      InputText
    );
    input(shadowRoot).value = expectedValue;
    input(shadowRoot).dispatchEvent(new Event("input"));
    expect(value).toBe(expectedValue);
  });

  describe("isInvalid", () => {
    test("Should start with isInvalid false", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text />, InputText);
      expect(input(shadowRoot).hasAttribute("aria-invalid")).toBeFalsy();
    });

    test("Should set isInvalid to true", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text isInvalid />, InputText);
      expect(input(shadowRoot).hasAttribute("aria-invalid")).toBeTruthy();
    });

    test("Should set invalid classes when isInvalid is true", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text isInvalid type="password" />, InputText);
      expect(label(shadowRoot).classList.contains("invalid-label")).toBeTruthy();
      expect(eyeIcon(shadowRoot).classList.contains("invalid-icon")).toBeTruthy();
      expect(input(shadowRoot).classList.contains("invalid-input")).toBeTruthy();
    });
  });
});
