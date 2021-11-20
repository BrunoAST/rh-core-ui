import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core";
import "ionicons";

@Component({
  tag: "rh-input-text",
  styleUrl: "./input-text.scss",
  shadow: true
})
export class InputText {
  @Prop({ reflect: true }) type = "text";
  @Prop() name: string;
  @Prop() placeholder: string;
  @Prop() label: string;
  @Prop() ariaLabel: string;
  @Prop({ reflect: true }) isInvalid = false;

  @State() currentInputType = this.type;
  @State() isPasswordHidden = true;

  @Event() value: EventEmitter;

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
            onInput={(event) => this.value.emit((event.target as HTMLInputElement).value)}
          />
        </span>
      </div>
    ];
  }
}
