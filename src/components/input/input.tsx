import { Component, Event, EventEmitter, h, Prop, State, Watch } from "@stencil/core";
import "ionicons";

@Component({
  tag: "rh-input",
  styleUrl: "./input.scss",
  shadow: true
})
export class Input {
  @Prop({ reflect: true }) type = "text";
  @Prop() name: string;
  @Prop() placeholder: string;
  @Prop() label: string;
  @Prop() ariaLabel: string;
  @Prop({ reflect: true, mutable: true }) isInvalid = false;

  @State() currentInputType = this.type;
  @State() isPasswordHidden = true;
  @State() currentValue: any;

  @Event() value: EventEmitter;

  @Watch("currentValue")
  emitOnCurrentValueChange(newValue: string): void {
    this.value.emit(newValue);
  }

  togglePasswordVisibility(): void {
    this.isPasswordHidden = !this.isPasswordHidden;
    this.currentInputType = this.isPasswordHidden ? "password" : "text";
  }

  toggleValidState(invalidClass: string): string {
    return this.isInvalid ? invalidClass : "";
  }

  render() {
    return [
      <div class="container">
        <label class={this.toggleValidState("invalid-label")}>{this.label}</label>
        <span class="input-wrapper">
          {
            this.type === "password" &&
            <ion-icon
              class={`${this.toggleValidState("invalid-icon")} icon`}
              name={this.isPasswordHidden ? "eye-off" : "eye"}
              onClick={this.togglePasswordVisibility.bind(this)}
            />
          }
          <input
            class={this.toggleValidState("invalid-input")}
            type={this.currentInputType}
            name={this.name}
            aria-label={this.ariaLabel}
            aria-invalid={this.isInvalid}
            placeholder={this.placeholder}
            value={this.currentValue}
          />
        </span>
      </div>
    ];
  }
}
