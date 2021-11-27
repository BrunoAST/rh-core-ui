import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core";
import { InputTextType } from "./types/input-text-type";
import "ionicons";
import { toggleValidState } from "../../utils/form/toggle-valid-state";

@Component({
  tag: "rh-input-text",
  styleUrl: "./input-text.scss",
  shadow: true
})
export class InputText {
  @Prop({ reflect: true, mutable: true }) type: InputTextType = "text";
  @Prop() name: string;
  @Prop() placeholder: string;
  @Prop() label: string;
  @Prop() ariaLabel: string;
  @Prop({ reflect: true, mutable: true }) isInvalid = false;
  @Prop({ reflect: true, mutable: true }) isRequired = false;

  @State() currentInputType = this.type;
  @State() isPasswordHidden = true;

  @Event() value: EventEmitter;

  togglePasswordVisibility(): void {
    this.isPasswordHidden = !this.isPasswordHidden;
    this.currentInputType = this.isPasswordHidden ? "password" : "text";
  }

  render() {
    return [
      <div class="container">
        <rh-input-label label={this.label} isInvalid={this.isInvalid} isRequired={this.isRequired} />
        <span class="input-wrapper">
          {
            this.type === "password" &&
            <ion-icon
              class={`${toggleValidState(this.isInvalid, "invalid-icon")} icon`}
              name={this.isPasswordHidden ? "eye-off" : "eye"}
              onClick={this.togglePasswordVisibility.bind(this)}
            />
          }
          <input
            class={toggleValidState(this.isInvalid, "invalid-input")}
            title={this.label}
            type={this.currentInputType}
            name={this.name}
            required={this.isRequired}
            placeholder={this.placeholder}
            aria-label={this.ariaLabel}
            aria-invalid={this.isInvalid}
            aria-required={this.isRequired}
            onInput={(event) => this.value.emit((event.target as HTMLInputElement).value)}
          />
          <slot name="error-message"></slot>
        </span>
      </div>
    ];
  }
}
