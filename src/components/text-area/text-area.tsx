import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";
import { toggleValidState } from "../../utils/form/toggle-valid-state";

@Component({
  tag: "rh-text-area",
  styleUrl: "./text-area.scss",
  shadow: true
})
export class TextArea {
  @Prop() value: string;
  @Prop() name: string;
  @Prop() placeholder: string;
  @Prop() label: string;
  @Prop() ariaLabel: string;
  @Prop() cols = 20;
  @Prop() rows = 3;
  @Prop({ reflect: true, mutable: true }) isInvalid = false;
  @Prop({ reflect: true, mutable: true }) isRequired = false;
  @Prop({ reflect: true, mutable: true }) minLength: number;
  @Prop({ reflect: true, mutable: true }) maxLength: number;

  @Event() valueUpdated: EventEmitter;

  render() {
    return [
      <div class="container">
        <rh-input-label label={this.label} isInvalid={this.isInvalid} isRequired={this.isRequired} />
        <div class="input-wrapper">
          <textarea
            class={toggleValidState(this.isInvalid, "invalid-input")}
            title={this.label}
            name={this.name}
            cols={this.cols}
            rows={this.rows}
            placeholder={this.placeholder}
            required={this.isRequired}
            minLength={this.minLength}
            maxLength={this.maxLength}
            value={this.value}
            aria-label={this.ariaLabel}
            aria-invalid={`${this.isInvalid}`}
            aria-required={`${this.isRequired}`}
            onInput={(event) => this.valueUpdated.emit((event.target as HTMLInputElement).value)}
          />
          <slot name="error-message"></slot>
        </div>
      </div>
    ];
  }
}
