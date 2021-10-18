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

  @Event() buttonClicked: EventEmitter;

  render() {
    return [
      <button
        class={`ripple ${this.variant}`}
        aria-disabled={this.disabled}
        disabled={this.disabled}
        onClick={() => this.buttonClicked.emit()}
      >
        {this.ionIconName && <ion-icon name={this.ionIconName}></ion-icon>}
        {this.variant !== "icon" && <slot></slot>}
      </button>
    ];
  }
}
