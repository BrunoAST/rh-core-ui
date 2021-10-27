import { Component, Element, h, Prop } from "@stencil/core";
import { TooltipPosition } from "./types/tooltip-position";

@Component({
  tag: "rh-tooltip",
  styleUrl: "./tooltip.scss",
  shadow: true
})
export class Tooltip {
  @Element() element: HTMLElement;

  @Prop({ attribute: "value" }) value: string;
  @Prop({ attribute: "ariaDescribedBy" }) ariaDescribedBy: string;
  @Prop({ attribute: "position" }) position: TooltipPosition = "top";

  render() {
    return [
      <div class="container" role="tooltip">
        <div class={`tooltip ${this.position}`} id={this.ariaDescribedBy}>
          {this.value}
        </div>
        <slot></slot>
      </div>
    ];
  }
}
