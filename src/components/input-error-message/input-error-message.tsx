import { Component, Element, h, Prop, Watch } from "@stencil/core";

@Component({
  tag: "rh-input-error-message",
  styleUrl: "./input-error-message.scss",
  shadow: true
})
export class InputErrorMessage {
  @Element() element: HTMLElement;

  @Prop() isVisible = false;

  @Watch("isVisible")
  onIsVisibleChange(): void {
    const parent = this.element.parentElement;
    const errorMessageList = Array.from(parent.querySelectorAll("rh-input-error-message"));
    const visibleErrors = errorMessageList.filter(item => item.isVisible);
    visibleErrors.length > 0 && this.applyVisibleErrorForFirstChild(visibleErrors);
  }

  applyVisibleErrorForFirstChild(errors: HTMLRhInputErrorMessageElement[]): void {
    errors.forEach(item => item.style.display = "none");
    errors[0].style.display = "block";
  }

  render() {
    return [
      <div class="container">
        {
          this.isVisible &&
          <span class="message">
            <slot></slot>
          </span>
        }
      </div>
    ];
  }
}
