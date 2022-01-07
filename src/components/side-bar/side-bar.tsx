import { Component, Event, EventEmitter, h, Listen, Prop } from "@stencil/core";
import 'ionicons';

import { dispatchWindowEvent } from "../../shared/helpers/window-event";
import { MenuItems } from "../../shared/types/menu-items";

@Component({
  tag: "rh-side-bar",
  styleUrl: "./side-bar.scss",
  shadow: true
})
export class SideBar {
  containerRef: HTMLElement;
  backdropRef: HTMLElement;
  mainContentRef: HTMLElement;

  @Event() isCollapsed: EventEmitter<boolean>;

  @Prop({ mutable: true, reflect: true }) menuItems!: MenuItems[];
  @Prop({ mutable: true, reflect: true }) currentActiveIndex: number;

  @Listen("resize", { target: "window" })
  onWindowResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.backdropRef.classList.remove("backdrop__active");
    if (width < 960) {
      this.containerRef.classList.add("container__collapsed");
      this.mainContentRef.classList.add("main-content__collapsed");
      this.isCollapsed.emit(true);
    } else {
      this.containerRef.classList.remove("container__collapsed");
      this.mainContentRef.classList.remove("main-content__collapsed");
      this.isCollapsed.emit(false);
    }
  }

  componentDidRender(): void {
    dispatchWindowEvent("resize");
  }

  toggle(): void {
    this.containerRef.classList.toggle("container__collapsed");
    const isCollapsed = this.containerRef.classList.contains("container__collapsed");
    this.mainContentRef.classList.toggle("main-content__collapsed", isCollapsed);
    this.backdropRef.classList.toggle("backdrop__active", !isCollapsed);
    this.isCollapsed.emit(isCollapsed);
  }

  render() {
    return [
      <div class="backdrop" onClick={() => this.toggle()} ref={element => this.backdropRef = element} />,
      <aside class="container" ref={element => this.containerRef = element}>
        <header class="header">
          <h1 class="header__title">Innove</h1>
          <button id="header-button" onClick={() => this.toggle()}>
            <ion-icon class="header__menu-icon" name="menu" />
          </button>
        </header>
        <rh-side-bar-items menuItems={this.menuItems} currentActiveIndex={this.currentActiveIndex} />
      </aside>,
      <main ref={element => this.mainContentRef = element} class="main-content">
        <slot></slot>
      </main>
    ];
  }
}
