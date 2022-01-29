import { Component, h, Event, EventEmitter, State, Watch, Prop, Listen } from "@stencil/core";
import "ionicons";
import { SelectOptions } from "./types/select-options";

@Component({
  tag: "rh-select",
  styleUrl: "./select.scss",
  shadow: true
})
export class Select {
  currentValueRef: HTMLSpanElement;
  optionsContainerRef: HTMLUListElement;

  @Prop({ mutable: true }) value: string;
  @Prop() label: string;
  @Prop() name: string;
  @Prop() placeholder: string = "";
  @Prop() options: SelectOptions[] = [];

  @Event() valueSelected: EventEmitter<string>;

  @State() selectedIndex = -1;

  get optionsList(): Element[] {
    return Array.from(this.optionsContainerRef.children);
  }

  @Watch("value")
  emitOnValueChange(): void {
    this.valueSelected.emit(this.value);
  }

  @Listen("click", { target: "body" })
  closeOnClickOutside(event: Event): void {
    !(event.target as HTMLElement).classList.contains("hydrated") && this.closeOptions();
  }

  @Listen("keydown", { target: "body" })
  supportKeyboardNavigation(event: KeyboardEvent): void {
    switch (event.key) {
      case "ArrowDown":
        this.handleArrowDown();
        break;
      case "ArrowUp":
        this.handleArrowUp();
        break;
      case "Enter":
        this.handleEnter();
        break;
      case "Escape":
        this.closeOptions();
        break;
    }
  }

  componentDidRender(): void {
    const index = this.options.findIndex(option => option.value === this.value);
    index > -1 && this.onOptionSelected(this.value, this.options[index].title, index);
  }

  onOptionSelected(value: string, title: string, index: number): void {
    if (this.currentValueRef.textContent === value || !title || index < 0) {
      return;
    }
    this.currentValueRef.textContent = title;
    this.value = value;
    this.closeOptions();
  }

  private toggleActive(): void {
    this.optionsContainerRef.classList.toggle("active");
  }

  private closeOptions(): void {
    this.optionsContainerRef.classList.remove("active");
    this.selectedIndex = -1;
  }

  private handleArrowDown(): void {
    if (this.selectedIndex < this.optionsList.length - 1) {
      this.updateHoveredOption(this.selectedIndex + 1);
    }
  }

  private handleArrowUp(): void {
    if (this.selectedIndex > 0) {
      this.updateHoveredOption(this.selectedIndex - 1);
    }
  }

  private handleEnter(): void {
    const option = this.optionsList[this.selectedIndex];
    const value = option && option.getAttribute("data-value");
    const title = option && option.querySelector("label").textContent;
    this.onOptionSelected(value, title, this.selectedIndex);
    this.closeOptions();
  }

  private updateHoveredOption(newIndex: number): void {
    const option = this.optionsList[newIndex];
    (option as HTMLDivElement).scrollIntoView();
    this.optionsList.forEach(element => element.classList.remove("is-hovered"));
    option.classList.add("is-hovered");
    this.selectedIndex = newIndex;
  }

  render() {
    return [
      <div class="select-container">
        <rh-input-label label={this.label} />
        <div role="radiogroup" class="select-box">
          <ul class="options-container" ref={element => this.optionsContainerRef = element}>
            {
              this.options.map((option, index) =>
                <li
                  key={index}
                  class="option"
                  data-value={option.value}
                  onClick={() => this.onOptionSelected(option.value, option.title, index)}
                >
                  <input type="radio" class="radio" name={this.name} id={index.toString()} />
                  <label htmlFor={index.toString()}>{option.title}</label>
                </li>
              )
            }
          </ul>
          <div
            tabIndex={0}
            class="selected"
            onClick={() => this.toggleActive()}
          >
            <span ref={element => this.currentValueRef = element}>{this.placeholder}</span>
            <ion-icon class="icon" name="chevron-down" />
          </div>
        </div>
      </div>
    ];
  }
}
