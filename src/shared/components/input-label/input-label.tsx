import { Component, h, Prop } from "@stencil/core";
import { toggleValidState } from "../../../utils/form/toggle-valid-state";

@Component({
  tag: "rh-input-label",
  styleUrl: "./input-label.scss",
  shadow: true
})
export class InputLabel {
  @Prop() label: string;
  @Prop() isRequired = false;
  @Prop() isInvalid = false;

  render() {
    return [
      <label class={toggleValidState(this.isInvalid, "invalid-label")}>
        {this.label}
        {this.isRequired && <span class="required-indicator">*</span>}
      </label>
    ];
  }
}
