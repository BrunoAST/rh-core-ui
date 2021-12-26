import { h } from "@stencil/core";
import faker from "faker";
import componentSetup from "../../../utils/component-setup/component-setup";
import { InputRangeSlider } from "../input-range-slider";

const label = faker.random.words();
const min = 1;
const max = 10;
const initialMinValueCursor = faker.datatype.number({ min: 1, max: 10 });
const initialMaxValueCursor = faker.datatype.number({ min: 1, max: 10 });

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
    const expectedMinGap = faker.datatype.number({ min: 1, max: 100 });
    await componentSetup(
      <rh-input-range-slider
        label={label}
        min={min}
        max={max}
        minGap={expectedMinGap}
        initialMinValueCursor={initialMinValueCursor}
        initialMaxValueCursor={initialMaxValueCursor}
      />,
      InputRangeSlider
    );
    expect(inputRangeSlider().minGap).toBe(expectedMinGap);
  });

  test("Should receive a label", async () => {
    const expectedLabel = faker.random.words();
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider
        label={expectedLabel}
        min={min}
        max={max}
        initialMinValueCursor={initialMinValueCursor}
        initialMaxValueCursor={initialMaxValueCursor}
      />,
      InputRangeSlider
    );
    expect(shadowRoot.querySelector("label").textContent).toBe(expectedLabel);
    expect(inputRange(shadowRoot)[0].title).toBe(expectedLabel);
    expect(inputRange(shadowRoot)[1].title).toBe(expectedLabel);
  });

  test("Should set min value", async () => {
    const expectedMin = faker.datatype.number({ min: 1, max: 100 });
    await componentSetup(
      <rh-input-range-slider
        label={label}
        min={expectedMin}
        max={max}
        initialMinValueCursor={initialMinValueCursor}
        initialMaxValueCursor={initialMaxValueCursor}
      />,
      InputRangeSlider
    );
    expect(inputRangeSlider().min).toBe(expectedMin);
  });

  test("Should set max value", async () => {
    const expectedMax = faker.datatype.number({ min: 1, max: 100 });
    await componentSetup(
      <rh-input-range-slider
        label={label}
        min={min}
        max={expectedMax}
        initialMinValueCursor={initialMinValueCursor}
        initialMaxValueCursor={initialMaxValueCursor}
      />,
      InputRangeSlider
    );
    expect(inputRangeSlider().max).toBe(expectedMax);
  });

  test("Should set initialMinValueCursor", async () => {
    const expectedValue = faker.datatype.number({ min: 1, max: 100 });
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider
        label={label}
        min={min}
        max={max}
        initialMinValueCursor={expectedValue}
        initialMaxValueCursor={initialMaxValueCursor}
      />,
      InputRangeSlider
    );
    expect(inputRange(shadowRoot)[0].value).toBe(`${expectedValue}`);
    expect(indicators(shadowRoot)[0].textContent).toBe(`${expectedValue}`);
  });

  test("Should set initialMaxValueCursor", async () => {
    const expectedValue = faker.datatype.number({ min: 1, max: 100 });
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider
        label={label}
        min={min}
        max={max}
        initialMinValueCursor={initialMinValueCursor}
        initialMaxValueCursor={expectedValue}
      />,
      InputRangeSlider
    );
    expect(inputRange(shadowRoot)[1].value).toBe(`${expectedValue}`);
    expect(indicators(shadowRoot)[1].textContent).toBe(`${expectedValue}`);
  });

  test("Should emit minValueUpdated", async () => {
    const expectedValue = 1;
    let receivedValue;
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider
        label={label}
        min={min}
        max={max}
        initialMinValueCursor={2}
        initialMaxValueCursor={3}
        onMinValueUpdated={event => receivedValue = event.detail}
      />,
      InputRangeSlider
    );
    inputRange(shadowRoot)[0].value = expectedValue.toString();
    inputRange(shadowRoot)[0].dispatchEvent(new Event("input"));
    expect(receivedValue).toBe(expectedValue);
  });

  test("Should emit maxValueUpdated", async () => {
    const expectedValue = 5;
    let receivedValue;
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider
        label={label}
        min={min}
        max={max}
        initialMinValueCursor={2}
        initialMaxValueCursor={3}
        onMaxValueUpdated={event => receivedValue = event.detail}
      />,
      InputRangeSlider
    );
    inputRange(shadowRoot)[1].value = expectedValue.toString();
    inputRange(shadowRoot)[1].dispatchEvent(new Event("input"));
    expect(receivedValue).toBe(expectedValue);
  });

  test("Should call fillColor when componentDidRender", async () => {
    const fillColorSpy = jest.spyOn(InputRangeSlider.prototype, "fillColor");
    await componentSetup(
      <rh-input-range-slider
        label={label}
        min={min}
        max={max}
        initialMinValueCursor={initialMinValueCursor}
        initialMaxValueCursor={initialMaxValueCursor}
      />,
      InputRangeSlider
    );
    expect(fillColorSpy).toHaveBeenCalledTimes(1);
  });

  test("Should update left slider value when the difference between max value and min value is less or equal minGap (1)", async () => {
    const { shadowRoot } = await componentSetup(
      <rh-input-range-slider
        label={label}
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
        label={label}
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
        label={label}
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
        label={label}
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
