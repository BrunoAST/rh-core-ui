import { h } from "@stencil/core";
import faker from "faker";
import componentSetup from "../../../utils/component-setup/component-setup";
import { InputRangeSlider } from "../input-range-slider";

const inputRangeSlider = (): HTMLRhInputRangeSliderElement => {
  return document.querySelector("rh-input-range-slider");
}

const indicators = (shadowRoot: ShadowRoot): HTMLSpanElement[] => {
  return Array.from(shadowRoot.querySelectorAll(".indicator"));
}

const inputRange = (shadowRoot: ShadowRoot): HTMLInputElement[] => {
  return Array.from(shadowRoot.querySelectorAll("input"));
}

describe("Input range slider component", () => {
  test("Should receive minGap", async () => {
    const minGap = faker.datatype.number({ min: 1, max: 100 });
    await componentSetup(
      <rh-input-range-slider minGap={minGap} />,
      InputRangeSlider
    );
    expect(inputRangeSlider().minGap).toBe(minGap);
  });

  test("Should set min value", async () => {
    const min = faker.datatype.number({ min: 1, max: 100 });
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider min={min} />,
      InputRangeSlider
    );
    expect(inputRangeSlider().min).toBe(min);
    expect(indicators(shadowRoot)[0].textContent).toBe(`${min}`);
  });

  test("Should set max value", async () => {
    const max = faker.datatype.number({ min: 1, max: 100 });
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider max={max} />,
      InputRangeSlider
    );
    expect(inputRangeSlider().max).toBe(max);
    expect(indicators(shadowRoot)[1].textContent).toBe(`${max}`);
  });

  test("Should set initialMinValueCursor", async () => {
    const value = faker.datatype.number({ min: 1, max: 100 });
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider initialMinValueCursor={value} />,
      InputRangeSlider
    );
    expect(inputRange(shadowRoot)[0].value).toBe(`${value}`);
  });

  test("Should set initialMaxValueCursor", async () => {
    const value = faker.datatype.number({ min: 1, max: 100 });
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider initialMaxValueCursor={value} />,
      InputRangeSlider
    );
    expect(inputRange(shadowRoot)[1].value).toBe(`${value}`);
  });

  test("Should emit minValueUpdated", async () => {
    const onMinValueUpdated = jest.fn();
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider onMinValueUpdated={onMinValueUpdated} />,
      InputRangeSlider
    );
    inputRange(shadowRoot)[0].dispatchEvent(new Event("input"));
    expect(onMinValueUpdated).toHaveBeenCalledTimes(1);
  });

  test("Should emit maxValueUpdated", async () => {
    const onMaxValueUpdated = jest.fn();
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider onMaxValueUpdated={onMaxValueUpdated} />,
      InputRangeSlider
    );
    inputRange(shadowRoot)[1].dispatchEvent(new Event("input"));
    expect(onMaxValueUpdated).toHaveBeenCalledTimes(1);
  });

  test("Should call fillColor when componentDidRender", async () => {
    const fillColorSpy = jest.spyOn(InputRangeSlider.prototype, "fillColor");
    await componentSetup(
      <rh-input-range-slider />,
      InputRangeSlider
    );
    expect(fillColorSpy).toHaveBeenCalledTimes(1);
  });

  test("Should update left slider value when the difference between max value and min value is less or equal minGap (1)", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider
        min={1}
        max={5}
        initialMinValueCursor={1}
        initialMaxValueCursor={5}
      />,
      InputRangeSlider
    );
    inputRange(shadowRoot)[0].value = "4";
    inputRange(shadowRoot)[0].dispatchEvent(new Event("input"));
    expect(inputRange(shadowRoot)[0].value).toBe("4");
    expect(indicators(shadowRoot)[0].textContent).toBe("4");
    expect(indicators(shadowRoot)[1].textContent).toBe("5");
  });

  test("Should not update left slider value when the difference between max value and min value is less or equal minGap (1)", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider
        min={1}
        max={5}
        initialMinValueCursor={2}
        initialMaxValueCursor={5}
      />,
      InputRangeSlider
    );
    inputRange(shadowRoot)[0].dispatchEvent(new Event("input"));
    expect(inputRange(shadowRoot)[0].value).toBe("2");
  });

  test("Should update right slider value when the difference between max value and min value is less or equal minGap (1)", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider
        min={1}
        max={5}
        initialMinValueCursor={1}
        initialMaxValueCursor={5}
      />,
      InputRangeSlider
    );
    inputRange(shadowRoot)[1].value = "2";
    inputRange(shadowRoot)[1].dispatchEvent(new Event("input"));
    expect(inputRange(shadowRoot)[1].value).toBe("2");
    expect(indicators(shadowRoot)[0].textContent).toBe("1");
    expect(indicators(shadowRoot)[1].textContent).toBe("2");
  });

  test("Should not update right slider value when the difference between max value and min value is less or equal minGap (1)", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider
        min={1}
        max={5}
        initialMinValueCursor={2}
        initialMaxValueCursor={5}
      />,
      InputRangeSlider
    );
    inputRange(shadowRoot)[1].dispatchEvent(new Event("input"));
    expect(inputRange(shadowRoot)[1].value).toBe("5");
  });
});
