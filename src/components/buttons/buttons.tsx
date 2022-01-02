import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { ButtonVariant } from "./types/button-variant";
import "ionicons";

@Component({
  tag: "rh-button",
  styleUrl: "./buttons.scss",
  shadow: true
})
export class Buttons {
  @Prop({ mutable: true, reflect: true }) disabled = false;
  @Prop() ionIconName: string;
  @Prop() ionIconColor: string;
  @Prop() variant: ButtonVariant = "basic";
  @Prop() ariaLabel: string;

  @Event() clicked: EventEmitter;

  render() {
    return [
      <button
        class={`ripple ${this.variant}`}
        style={{ borderColor: this.ionIconName && this.ionIconColor }}
        aria-disabled={this.disabled}
        disabled={this.disabled}
        onClick={() => this.clicked.emit()}
        aria-label={this.ariaLabel}
      >
        {this.ionIconName && <ion-icon style={{ color: this.ionIconColor }} name={this.ionIconName} />}
        {this.variant !== "icon" && <slot></slot>}
      </button>
    ];
  }
}
