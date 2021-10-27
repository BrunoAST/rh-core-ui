import { newSpecPage } from "@stencil/core/testing";

type ComponentSetupType = {
  shadowRoot: ShadowRoot;
  waitForChanges: () => Promise<any>;
}

const componentSetup = async (templateBody: any, ...component: any): Promise<ComponentSetupType> => {
  const { root, waitForChanges } = await newSpecPage({
    components: [...component],
    template: () => templateBody
  });
  return {
    shadowRoot: root.shadowRoot,
    waitForChanges
  }
}

export default componentSetup;
