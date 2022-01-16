import { Component, Event, EventEmitter, h, Prop, State, Watch } from "@stencil/core";
import "ionicons";

@Component({
  tag: "rh-pagination",
  styleUrl: "./pagination.scss",
  shadow: true
})
export class Pagination {
  @Prop() total: number = 0;
  @Prop({ mutable: true }) maxVisiblePages: number = 10;
  @Prop() initialActivePage: number = 1;

  @State() pages: number[] = [];
  @State() currentSelectedPage = this.initialActivePage;

  @Event() pageClicked: EventEmitter<number>;

  @Watch("currentSelectedPage")
  onCurrentSelectedPageChange(currentPage: number): void {
    this.pageClicked.emit(currentPage);
  }

  componentWillRender(): void {
    if (this.maxVisiblePages > this.total) {
      this.maxVisiblePages = this.total;
    }
    this.buildPaginationItems();
  }

  get isPreviousLinkDisabled(): boolean {
    return this.currentSelectedPage === 1;
  }

  get isNextLinkDisabled(): boolean {
    return this.currentSelectedPage === this.total;
  }

  buildPaginationItems(): void {
    this.pages = [];
    const from = this.paginationTo() - this.maxVisiblePages;
    Array.from({ length: this.maxVisiblePages }).forEach((_, index) => {
      const page = (index + 1) + from;
      this.pages.push(page);
    });
  }

  paginationTo(): number {
    const half = Math.round(this.maxVisiblePages / 2);
    let to = this.maxVisiblePages;
    if (this.currentSelectedPage + half >= this.total) {
      to = this.total;
    } else if (this.currentSelectedPage > half) {
      to = this.currentSelectedPage + half;
    }
    return to;
  }

  handleFirstLinkClick(): void {
    if (this.isPreviousLinkDisabled) {
      return;
    }
    this.currentSelectedPage = 1;
  }

  handlePreviousLinkClick(): void {
    if (this.isPreviousLinkDisabled) {
      return;
    }
    this.currentSelectedPage -= 1;
  }

  handleNextLinkClick(): void {
    if (this.isNextLinkDisabled) {
      return;
    }
    this.currentSelectedPage += 1;
  }

  handleLastLinkClick(): void {
    if (this.isNextLinkDisabled) {
      return;
    }
    this.currentSelectedPage = this.total;
  }

  render() {
    return [
      <div class="container">
        <rh-tooltip value="Primeiro">
          <a
            class={`pagination-link ${this.isPreviousLinkDisabled ? "pagination-link__disabled" : ""}`}
            onClick={() => this.handleFirstLinkClick()}
          >
            <ion-icon name="play-skip-back-outline" />
          </a>
        </rh-tooltip>
        <rh-tooltip value="Anterior">
          <a
            class={`pagination-link ${this.isPreviousLinkDisabled ? "pagination-link__disabled" : ""}`}
            onClick={() => this.handlePreviousLinkClick()}
          >
            <ion-icon class="pagination-link__previous" name="play-outline" />
          </a>
        </rh-tooltip>
        <ul class="pagination">
          {this.pages.map(page =>
            <li
              class={`pagination__item ${this.currentSelectedPage === page ? "active" : ""}`}
              key={page}
              onClick={() => {
                this.currentSelectedPage = page;
                this.buildPaginationItems();
              }}
            >
              <span>{page}</span>
            </li>
          )}
        </ul>
        <rh-tooltip value="Próximo">
          <a
            class={`pagination-link ${this.isNextLinkDisabled ? "pagination-link__disabled" : ""}`}
            onClick={() => this.handleNextLinkClick()}
          >
            <ion-icon name="play-outline" />
          </a>
        </rh-tooltip>
        <rh-tooltip value="Último">
          <a
            class={`pagination-link ${this.isNextLinkDisabled ? "pagination-link__disabled" : ""}`}
            onClick={() => this.handleLastLinkClick()}
          >
            <ion-icon name="play-skip-forward-outline" />
          </a>
        </rh-tooltip>
      </div>
    ];
  }
}
