import { Component, h, Prop, Element, Event, EventEmitter } from "@stencil/core";
import { ButtonVariant } from "./types/button-variant";
import 'ionicons';

@Component({
  tag: "rh-button",
  styleUrl: "./buttons.scss",
  shadow: true
})
export class Buttons {
  @Element() element: HTMLElement;

  @Prop({ attribute: "titleValue" }) titleValue = "";
  @Prop({ attribute: "disabled", mutable: true, reflect: true }) disabled = false;
  @Prop({ attribute: "ionIconName" }) ionIconName: string;
  @Prop({ attribute: "variant", mutable: true, reflect: true }) variant: ButtonVariant = "basic";

  @Event() buttonClicked: EventEmitter;

  render() {
    return [
      <button
        class={`ripple ${this.variant}`}
        disabled={this.disabled}
        onClick={() => this.buttonClicked.emit()}
      >
        {this.ionIconName && <ion-icon name={this.ionIconName}></ion-icon>}
        {this.variant !== "icon" && this.titleValue}
      </button>
    ];
  }
}
