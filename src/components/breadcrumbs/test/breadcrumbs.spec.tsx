import { h } from "@stencil/core";
import faker from "faker";
import componentSetup from "../../../utils/component-setup/component-setup";
import { Breadcrumbs } from "../breadcrumbs";
import { BreadcrumbsPaths } from "../types/breadcrumbs-paths";

const paths = Array.from({ length: 3 }).map(() => {
  return {
    name: faker.random.word(),
    pageUrl: faker.internet.url()
  } as BreadcrumbsPaths;
});

const breadcrumbs = (shadowRoot: ShadowRoot): HTMLLIElement[] => {
  return Array.from(shadowRoot.querySelectorAll("li"));
}

describe("Breadcrumbs component", () => {
  test("Should render paths", async () => {
    const { shadowRoot } = await componentSetup(<rh-breadcrumbs paths={paths} />, Breadcrumbs);
    expect(breadcrumbs(shadowRoot).length).toBe(paths.length);
    paths.forEach((path, index) => {
      expect(breadcrumbs(shadowRoot)[index].textContent).toBe(path.name);
    });
  });

  test("Should not render arrow indicator for the last path item", async () => {
    const { shadowRoot } = await componentSetup(<rh-breadcrumbs paths={paths} />, Breadcrumbs);
    expect(breadcrumbs(shadowRoot)[0].querySelector("ion-icon")).toBeDefined();
    expect(breadcrumbs(shadowRoot)[paths.length - 1].querySelector("ion-icon")).toBeNull();
  });

  test("Should emit the pageUrl when a path is clicked", async () => {
    let pageUrl;
    const expectedPageUrl = paths[0].pageUrl;
    const { shadowRoot } = await componentSetup(
      <rh-breadcrumbs
        paths={paths}
        onPathClicked={(event) => pageUrl = event.detail}
      />,
      Breadcrumbs
    );
    breadcrumbs(shadowRoot)[0].querySelector("a").click();
    expect(pageUrl).toBe(expectedPageUrl);
  });
});
