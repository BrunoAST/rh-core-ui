import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";
import { toggleValidState } from "../../utils/form/toggle-valid-state";

@Component({
  tag: "rh-text-area",
  styleUrl: "./text-area.scss",
  shadow: true
})
export class TextArea {
  @Prop() name: string;
  @Prop() placeholder: string;
  @Prop() label: string;
  @Prop() ariaLabel: string;
  @Prop() cols = 20;
  @Prop() rows = 3;
  @Prop({ reflect: true, mutable: true }) isInvalid = false;
  @Prop({ reflect: true, mutable: true }) isRequired = false;
  @Prop({ reflect: true, mutable: true }) minLength: number;

  @Event() value: EventEmitter;

  render() {
    return [
      <div class="container">
        <rh-input-label label={this.label} isInvalid={this.isInvalid} isRequired={this.isRequired} />
        <textarea
          class={toggleValidState(this.isInvalid, "invalid-input")}
          name={this.name}
          cols={this.cols}
          rows={this.rows}
          placeholder={this.placeholder}
          required={this.isRequired}
          minLength={this.minLength}
          aria-label={this.ariaLabel}
          aria-invalid={this.isInvalid}
          aria-required={this.isRequired}
          onInput={(event) => this.value.emit((event.target as HTMLInputElement).value)}
        />
      </div>
    ];
  }
}
