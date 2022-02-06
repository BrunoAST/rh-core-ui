import { h } from "@stencil/core";
import faker from "faker";
import componentSetup from "../../../utils/component-setup/component-setup";
import { Toast } from "../toast";

const message = faker.random.words();

const toastContainer = (shadowRoot: ShadowRoot) => {
  return shadowRoot.querySelector("[role=alert]");
}

describe("Toast component", () => {
  test("Should render component", async () => {
    const { shadowRoot } = await componentSetup(<rh-toast isVisible message={message} />, Toast);
    expect(toastContainer(shadowRoot)).not.toBeNull();
  });

  test("Should set a message", async () => {
    const { shadowRoot } = await componentSetup(<rh-toast isVisible message={message} />, Toast);
    expect(shadowRoot.querySelector(".message").textContent.trim()).toBe(message);
  });

  describe("Type", () => {
    test("Should start with type equals to info by default", async () => {
      const { shadowRoot } = await componentSetup(<rh-toast isVisible message={message} />, Toast);
      expect(toastContainer(shadowRoot).classList.contains("info")).toBeTruthy();
    });

    test("Should set type to warning", async () => {
      const { shadowRoot } = await componentSetup(<rh-toast isVisible message={message} type="warning" />, Toast);
      expect(toastContainer(shadowRoot).classList.contains("warning")).toBeTruthy();
    });

    test("Should set type to error", async () => {
      const { shadowRoot } = await componentSetup(<rh-toast isVisible message={message} type="error" />, Toast);
      expect(toastContainer(shadowRoot).classList.contains("error")).toBeTruthy();
    });

    test("Should set type to success", async () => {
      const { shadowRoot } = await componentSetup(<rh-toast isVisible message={message} type="success" />, Toast);
      expect(toastContainer(shadowRoot).classList.contains("success")).toBeTruthy();
    });
  });

  describe("Position", () => {
    test("Should start with position equals to top-right by default", async () => {
      const { shadowRoot } = await componentSetup(<rh-toast isVisible message={message} />, Toast);
      expect(toastContainer(shadowRoot).classList.contains("top-right")).toBeTruthy();
    });

    test("Should set position to top-center", async () => {
      const { shadowRoot } = await componentSetup(<rh-toast isVisible message={message} position="top-center" />, Toast);
      expect(toastContainer(shadowRoot).classList.contains("top-center")).toBeTruthy();
    });

    test("Should set position to bottom-center", async () => {
      const { shadowRoot } = await componentSetup(<rh-toast isVisible message={message} position="bottom-center" />, Toast);
      expect(toastContainer(shadowRoot).classList.contains("bottom-center")).toBeTruthy();
    });

    test("Should set position to bottom-right", async () => {
      const { shadowRoot } = await componentSetup(<rh-toast isVisible message={message} position="bottom-right" />, Toast);
      expect(toastContainer(shadowRoot).classList.contains("bottom-right")).toBeTruthy();
    });
  });

  test("Should close toast after 5000ms", async () => {
    jest.useFakeTimers();
    const closed = jest.fn();
    await componentSetup(<rh-toast isVisible onClosed={closed} message={message} />, Toast);
    jest.advanceTimersByTime(5000);
    expect(closed).toHaveBeenCalledTimes(1);
  });
});
