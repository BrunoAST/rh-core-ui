import { Component, h } from "@stencil/core";

@Component({
  tag: "rh-side-bar",
  styleUrl: "./side-bar.scss",
  shadow: true
})
export class SideBar {
  render() {
    return [
      <h1>Hello</h1>
    ];
  }
}
