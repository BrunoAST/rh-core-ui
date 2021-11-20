import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { ButtonVariant } from "./types/button-variant";
import 'ionicons';

@Component({
  tag: "rh-button",
  styleUrl: "./buttons.scss",
  shadow: true
})
export class Buttons {
  @Prop({ attribute: "disabled", mutable: true, reflect: true }) disabled = false;
  @Prop({ attribute: "ionIconName" }) ionIconName: string;
  @Prop({ attribute: "variant" }) variant: ButtonVariant = "basic";
  @Prop({ attribute: "ariaLabel" }) ariaLabel: string;

  @Event() clicked: EventEmitter;

  render() {
    return [
      <button
        class={`ripple ${this.variant}`}
        aria-disabled={this.disabled}
        disabled={this.disabled}
        onClick={() => this.clicked.emit()}
        aria-label={this.ariaLabel}
      >
        {this.ionIconName && <ion-icon name={this.ionIconName}></ion-icon>}
        {this.variant !== "icon" && <slot></slot>}
      </button>
    ];
  }
}
