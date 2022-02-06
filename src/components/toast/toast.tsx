import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";
import "ionicons";

import { ICON_OPTIONS } from "./constants/icon-options";
import { ToastPosition } from "./types/toast-position";
import { ToastType } from "./types/toast-type";

@Component({
  tag: "rh-toast",
  styleUrls: ["./toast.scss"],
  shadow: true
})
export class Toast {
  @Prop() type: ToastType = "info";
  @Prop() position: ToastPosition = "top-right";
  @Prop({ mutable: true, reflect: true }) isVisible = false;
  @Prop() autoHideDuration = 5000;
  @Prop() header: string;
  @Prop() message!: string;

  @Event() closed: EventEmitter<void>;

  componentDidRender(): void {
    setTimeout(() => {
      this.isVisible = false;
      this.closed.emit();
    }, this.autoHideDuration);
  }

  render() {
    return [
      this.isVisible &&
      <div class={`container ${this.type} ${this.position}`} role="alert" aria-live="polite" >
        <ion-icon
          size="large"
          style={{ color: ICON_OPTIONS.find(option => option.toastType === this.type).color }}
          name={ICON_OPTIONS.find(option => option.toastType === this.type).icon}
        />
        <div>
          <h3 class="title">{this.header}</h3>
          <span class="message">{this.message}</span>
        </div>
      </div>
    ];
  }
}
