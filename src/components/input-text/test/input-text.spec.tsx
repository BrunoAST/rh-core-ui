import { h } from "@stencil/core";
import faker from "faker";
import componentSetup from "../../../utils/component-setup/component-setup";
import { InputText } from "../input-text";

const input = (shadowRoot: ShadowRoot): HTMLInputElement => {
  return shadowRoot.querySelector("input");
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

  describe("isRequired", () => {
    test("Should start with isRequired false", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text />, InputText);
      expect(input(shadowRoot).hasAttribute("required")).toBeFalsy();
      expect(input(shadowRoot).getAttribute("aria-required")).toBe("false");
    });

    test("Should set isRequired to true", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text isRequired label={faker.random.word()} />, InputText);
      expect(input(shadowRoot).hasAttribute("required")).toBeTruthy();
      expect(input(shadowRoot).getAttribute("aria-required")).toBe("true");
    });
  });

  describe("isInvalid", () => {
    test("Should start with isInvalid false", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text />, InputText);
      expect(input(shadowRoot).getAttribute("aria-invalid")).toBe("false");
    });

    test("Should set isInvalid to true", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text isInvalid />, InputText);
      expect(input(shadowRoot).getAttribute("aria-invalid")).toBe("true");
    });

    test("Should set invalid classes when isInvalid is true", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text isInvalid type="password" />, InputText);
      expect(eyeIcon(shadowRoot).classList.contains("invalid-icon")).toBeTruthy();
      expect(input(shadowRoot).classList.contains("invalid-input")).toBeTruthy();
    });
  });

  describe("min length", () => {
    test("Should start with min length null", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text />, InputText);
      expect(input(shadowRoot).getAttribute("minlength")).toBeNull();
    });

    test("Should receive min length", async () => {
      const minLength = faker.datatype.number(100);
      const { shadowRoot } = await componentSetup(<rh-input-text minLength={minLength} />, InputText);
      expect(input(shadowRoot).getAttribute("minlength")).toBe(minLength.toString());
    });
  });

  describe("max length", () => {
    test("Should start with max length null", async () => {
      const { shadowRoot } = await componentSetup(<rh-input-text />, InputText);
      expect(input(shadowRoot).getAttribute("maxlength")).toBeNull();
    });

    test("Should receive max length", async () => {
      const maxLength = faker.datatype.number(100);
      const { shadowRoot } = await componentSetup(<rh-input-text maxLength={maxLength} />, InputText);
      expect(input(shadowRoot).getAttribute("maxlength")).toBe(maxLength.toString());
    });
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

  test("Should receive a title", async () => {
    const title = faker.random.word();
    const { shadowRoot } = await componentSetup(<rh-input-text label={title} />, InputText);
    expect(input(shadowRoot).getAttribute("title")).toBe(title);
  });

  test("Should bind the current value", async () => {
    const currentValue = faker.random.word();
    const { shadowRoot } = await componentSetup(
      <rh-input-text value={currentValue} />,
      InputText
    );
    expect(input(shadowRoot).getAttribute("value")).toBe(currentValue);
  });

  test("Should emit the value", async () => {
    const expectedValue = faker.random.word();
    let value;
    const { shadowRoot } = await componentSetup(
      <rh-input-text onValueUpdated={(event: CustomEvent) => value = event.detail} />,
      InputText
    );
    input(shadowRoot).value = expectedValue;
    input(shadowRoot).dispatchEvent(new Event("input"));
    expect(value).toBe(expectedValue);
  });
});
