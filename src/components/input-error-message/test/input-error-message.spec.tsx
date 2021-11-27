import { h } from "@stencil/core";
import faker from "faker";
import componentSetup from "../../../utils/component-setup/component-setup";
import { InputErrorMessage } from "../input-error-message";

const errorMessage = faker.random.words(3);

describe("InputErrorMessage component", () => {
  test("Should start with error message invisible", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-input-error-message>{errorMessage}</rh-input-error-message>,
      InputErrorMessage
    );
    expect(shadowRoot.querySelector(".message")).toBeNull();
  });

  test("Should show error message when isVisible true", async () => {
    await componentSetup(
      <rh-input-error-message isVisible>{errorMessage}</rh-input-error-message>,
      InputErrorMessage
    );
    expect(document.querySelector("rh-input-error-message").textContent).toBe(errorMessage);
  });

  test("Should set display block to an error message when isVisible true", async () => {
    await componentSetup(
      <rh-input-error-message>{errorMessage}</rh-input-error-message>,
      InputErrorMessage
    );
    const inputErrorMessage = document.querySelector("rh-input-error-message");
    inputErrorMessage.isVisible = true;
    expect(inputErrorMessage.style.display).toBe("block");
    expect(inputErrorMessage.textContent).toBe(errorMessage);
  });

  test("Should set display block only to the first error when more than one is visible at the same time", async () => {
    await componentSetup(
      <div>
        <rh-input-error-message>{errorMessage}</rh-input-error-message>
        <rh-input-error-message>{errorMessage}</rh-input-error-message>
      </div>,
      InputErrorMessage
    );
    const inputErrorMessages = Array.from(document.querySelectorAll("rh-input-error-message"));
    inputErrorMessages[0].isVisible = true;
    inputErrorMessages[1].isVisible = true;
    expect(inputErrorMessages[0].style.display).toBe("block");
    expect(inputErrorMessages[1].style.display).toBe("none");
  });
});
