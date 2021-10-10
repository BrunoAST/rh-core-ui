import { newSpecPage } from "@stencil/core/testing";

type ComponentSetupType = {
  shadowRoot: ShadowRoot;
}

const componentSetup = async (templateBody: any, component: any): Promise<ComponentSetupType> => {
  const { root } = await newSpecPage({
    components: [component],
    template: () => templateBody
  });
  return {
    shadowRoot: root.shadowRoot
  }
}

export default componentSetup;
