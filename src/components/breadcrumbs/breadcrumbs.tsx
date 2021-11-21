import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";
import "ionicons";
import { BreadcrumbsPaths } from "./types/breadcrumbs-paths";

@Component({
  tag: "rh-breadcrumbs",
  styleUrl: "./breadcrumbs.scss",
  shadow: true
})
export class Breadcrumbs {
  @Prop() paths: BreadcrumbsPaths[] = [];

  @Event() pathClicked: EventEmitter<string>;

  render() {
    return [
      <ul class="container">
        {
          this.paths.map((path, index) =>
            <li key={index}>
              <a
                onClick={() => this.pathClicked.emit(path.pageUrl)}
              >
                {path.name}
              </a>
              {index + 1 !== this.paths.length && <ion-icon class="icon" name="chevron-forward" />}
            </li>
          )
        }
      </ul>
    ];
  }
}
