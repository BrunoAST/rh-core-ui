import { h } from "@stencil/core";
import componentSetup from "../../../utils/component-setup/component-setup";
import { Pagination } from "../pagination";

const NAVIGATION_LINK_INDEX = {
  first: 0,
  previous: 1,
  next: 2,
  last: 3
};

const navigationLink = (shadowRoot: ShadowRoot): HTMLAnchorElement[] => {
  return Array.from(shadowRoot.querySelectorAll(".pagination-link"));
}

const paginationItems = (shadowRoot: ShadowRoot): HTMLLIElement[] => {
  return Array.from(shadowRoot.querySelectorAll("li"));
}

describe("Pagination component", () => {
  test("Should have navigation links (first, previous, next and last)", async () => {
    const { shadowRoot } = await componentSetup(<rh-pagination total={20} />, Pagination);
    expect(navigationLink(shadowRoot)[NAVIGATION_LINK_INDEX.first]).toBeDefined();
    expect(navigationLink(shadowRoot)[NAVIGATION_LINK_INDEX.previous]).toBeDefined();
    expect(navigationLink(shadowRoot)[NAVIGATION_LINK_INDEX.next]).toBeDefined();
    expect(navigationLink(shadowRoot)[NAVIGATION_LINK_INDEX.last]).toBeDefined();
  });

  test("Should render pagination items based on maxVisiblePages", async () => {
    const max = 5;
    const { shadowRoot } = await componentSetup(<rh-pagination total={20} maxVisiblePages={max} />, Pagination);
    expect(paginationItems(shadowRoot).length).toBe(max);
  });

  test("Should start with maxVisiblePages equals 10 by default", async () => {
    const { shadowRoot } = await componentSetup(<rh-pagination total={20} />, Pagination);
    expect(paginationItems(shadowRoot).length).toBe(10);
  });

  test("Should update maxVisiblePages value if max is greater than total", async () => {
    const total = 3;
    const { shadowRoot } = await componentSetup(<rh-pagination total={total} maxVisiblePages={5} />, Pagination);
    expect(paginationItems(shadowRoot).length).toBe(total);
  });

  test("Should start with the first page active by default", async () => {
    const { shadowRoot } = await componentSetup(<rh-pagination total={10} />, Pagination);
    expect(paginationItems(shadowRoot)[0].classList.contains("active")).toBeTruthy();
  });

  test("Should start with initialActivePage active", async () => {
    const { shadowRoot } = await componentSetup(<rh-pagination total={10} initialActivePage={5} />, Pagination);
    expect(paginationItems(shadowRoot)[4].classList.contains("active")).toBeTruthy();
  });

  test("Should disable first link pagination when currentSelectedPage is the first one", async () => {
    const { shadowRoot, waitForChanges } = await componentSetup(
      <rh-pagination total={10} initialActivePage={5} />,
      Pagination
    );
    const firstNavigationLink = navigationLink(shadowRoot)[NAVIGATION_LINK_INDEX.first];
    firstNavigationLink.click();
    await waitForChanges();
    expect(firstNavigationLink.classList.contains("pagination-link__disabled")).toBeTruthy();
  });

  test("Should disable previous link pagination when currentSelectedPage is the first one", async () => {
    const { shadowRoot, waitForChanges } = await componentSetup(
      <rh-pagination total={10} initialActivePage={2} />,
      Pagination
    );
    const previousNavigationLink = navigationLink(shadowRoot)[NAVIGATION_LINK_INDEX.previous];
    previousNavigationLink.click();
    await waitForChanges();
    expect(previousNavigationLink.classList.contains("pagination-link__disabled")).toBeTruthy();
  });

  test("Should disable next link pagination when currentSelectedPage is the last one", async () => {
    const { shadowRoot, waitForChanges } = await componentSetup(
      <rh-pagination total={10} initialActivePage={9} />,
      Pagination
    );
    const nextNavigationLink = navigationLink(shadowRoot)[NAVIGATION_LINK_INDEX.next];
    nextNavigationLink.click();
    await waitForChanges();
    expect(nextNavigationLink.classList.contains("pagination-link__disabled")).toBeTruthy();
  });

  test("Should disable last link pagination when currentSelectedPage is the last one", async () => {
    const { shadowRoot, waitForChanges } = await componentSetup(
      <rh-pagination total={10} initialActivePage={6} />,
      Pagination
    );
    const lastNavigationLink = navigationLink(shadowRoot)[NAVIGATION_LINK_INDEX.last];
    lastNavigationLink.click();
    await waitForChanges();
    expect(lastNavigationLink.classList.contains("pagination-link__disabled")).toBeTruthy();
  });

  test("Should not navigate to first page if first link pagination is disabled", async () => {
    const { shadowRoot, waitForChanges } = await componentSetup(
      <rh-pagination total={10} initialActivePage={1} />,
      Pagination
    );
    const firstNavigationLink = navigationLink(shadowRoot)[NAVIGATION_LINK_INDEX.first];
    firstNavigationLink.click();
    await waitForChanges();
    expect(paginationItems(shadowRoot)[0].classList.contains("active")).toBeTruthy();
  });

  test("Should not navigate to previous page if previous link pagination is disabled", async () => {
    const { shadowRoot, waitForChanges } = await componentSetup(
      <rh-pagination total={10} initialActivePage={1} />,
      Pagination
    );
    const previousNavigationLink = navigationLink(shadowRoot)[NAVIGATION_LINK_INDEX.previous];
    previousNavigationLink.click();
    await waitForChanges();
    expect(paginationItems(shadowRoot)[0].classList.contains("active")).toBeTruthy();
  });

  test("Should not navigate to next page if next link pagination is disabled", async () => {
    const { shadowRoot, waitForChanges } = await componentSetup(
      <rh-pagination total={10} initialActivePage={10} />,
      Pagination
    );
    const nextNavigationLink = navigationLink(shadowRoot)[NAVIGATION_LINK_INDEX.next];
    nextNavigationLink.click();
    await waitForChanges();
    expect(paginationItems(shadowRoot)[9].classList.contains("active")).toBeTruthy();
  });

  test("Should not navigate to last page if last link pagination is disabled", async () => {
    const { shadowRoot, waitForChanges } = await componentSetup(
      <rh-pagination total={10} initialActivePage={10} />,
      Pagination
    );
    const lastNavigationLink = navigationLink(shadowRoot)[NAVIGATION_LINK_INDEX.last];
    lastNavigationLink.click();
    await waitForChanges();
    expect(paginationItems(shadowRoot)[9].classList.contains("active")).toBeTruthy();
  });

  test("Should navigate using pagination items", async () => {
    const { shadowRoot, waitForChanges } = await componentSetup(
      <rh-pagination total={10} initialActivePage={2} maxVisiblePages={3} />,
      Pagination
    );
    const paginationItem = paginationItems(shadowRoot);
    expect(paginationItem[1].classList.contains("active")).toBeTruthy();
    paginationItem[2].click();
    await waitForChanges();
    expect(paginationItem[2].classList.contains("active")).toBeTruthy();
  });

  test("Should emit the current selected page", async () => {
    let page;
    const { shadowRoot, waitForChanges } = await componentSetup(
      <rh-pagination total={10} initialActivePage={2} onPageClicked={event => page = event.detail} />,
      Pagination
    );
    paginationItems(shadowRoot)[NAVIGATION_LINK_INDEX.next].click();
    await waitForChanges();
    expect(page).toBe(3);
  });
});
