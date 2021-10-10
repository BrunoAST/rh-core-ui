import { h } from "@stencil/core";
import { AnyHTMLElement } from "@stencil/core/internal";
import { newSpecPage } from "@stencil/core/testing";
import { SideBar } from "../side-bar";

type SutParams = {
  title: string;
}

type SutTypes = {
  root: AnyHTMLElement;
  shadowRoot: ShadowRoot;
}

const component = async (params?: SutParams): Promise<SutTypes> => {
  const { root } = await newSpecPage({
    components: [SideBar],
    template: () => (
      <rh-side-bar title={params?.title}>
      </rh-side-bar>
    ),
  });
  return {
    root,
    shadowRoot: root.shadowRoot,
  };
}

describe("SideBar component", () => {

});
