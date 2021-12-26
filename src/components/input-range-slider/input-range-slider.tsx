import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";
import "ionicons";

@Component({
  tag: "rh-input-range-slider",
  styleUrl: "./input-range-slider.scss",
  shadow: true
})
export class InputRangeSlider {
  leftSliderRef: HTMLInputElement;
  rightSliderRef: HTMLInputElement;
  leftSliderDisplayValueRef: HTMLSpanElement;
  rightSliderDisplayValueRef: HTMLSpanElement;
  sliderTrackRef: HTMLDivElement;

  @Prop() minGap = 1;
  @Prop() min = 1;
  @Prop() max = 10;
  @Prop() initialMinValueCursor: number;
  @Prop() initialMaxValueCursor: number;

  @Event() minValueUpdated: EventEmitter<number>;
  @Event() maxValueUpdated: EventEmitter<number>;

  componentDidRender(): void {
    this.fillColor();
  }

  get currentMinValue(): number {
    return Number(this.leftSliderRef.value);
  }

  get currentMaxValue(): number {
    return Number(this.rightSliderRef.value);
  }

  onSliderLeftValueChange(): void {
    if (this.currentMaxValue - this.currentMinValue <= this.minGap) {
      this.leftSliderRef.value = `${this.currentMaxValue - this.minGap}`;
    }
    this.minValueUpdated.emit(this.currentMinValue);
    this.leftSliderDisplayValueRef.textContent = this.leftSliderRef.value;
    this.fillColor();
  }

  onSliderRightValueChange(): void {
    if (this.currentMaxValue - this.currentMinValue <= this.minGap) {
      this.rightSliderRef.value = `${this.currentMinValue + this.minGap}`;
    }
    this.maxValueUpdated.emit(this.currentMinValue);
    this.rightSliderDisplayValueRef.textContent = this.rightSliderRef.value;
    this.fillColor();
  }

  fillColor(): void {
    const percentageLeft = ((this.currentMinValue - this.min) / (this.max - this.min)) * 100;
    const percentageRight = ((this.currentMaxValue - this.min) / (this.max - this.min)) * 100;
    this.sliderTrackRef.style.background =
      `linear-gradient(to right, #BBCDE7 ${percentageLeft}%, #30558C ${percentageLeft}%, #30558C ${percentageRight}%, #BBCDE7 ${percentageRight}%)`;
  }

  render() {
    return [
      <div class="wrapper">
        <span class="indicator" ref={element => this.leftSliderDisplayValueRef = element}>
          {this.min}
        </span>
        <div class="container">
          <div
            class="slider-track"
            ref={element => this.sliderTrackRef = element}
          />
          <input
            type="range"
            min={this.min}
            max={this.max}
            value={this.initialMinValueCursor}
            onInput={() => this.onSliderLeftValueChange()}
            ref={element => this.leftSliderRef = element}
          />
          <input
            type="range"
            min={this.min}
            max={this.max}
            value={this.initialMaxValueCursor}
            onInput={() => this.onSliderRightValueChange()}
            ref={element => this.rightSliderRef = element}
          />
        </div>
        <span class="indicator" ref={element => this.rightSliderDisplayValueRef = element}>
          {this.max}
        </span>
      </div>
    ];
  }
}
