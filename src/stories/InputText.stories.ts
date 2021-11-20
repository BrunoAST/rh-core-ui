import { Meta } from "@storybook/html";
import "ionicons";

export default {
  title: "Componentes/Inputs/Input Text",
  parameters: {
    layout: "centered",
    actions: {
      handles: ["value"],
    },
  },
  argTypes: {
    isInvalid: {
      control: { type: "boolean" },
      description: "Define os estado de validade do input",
      table: {
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  args: {
    label: "Nome",
    type: "text",
    isInvalid: false
  }
} as Meta;

const Template = ({ label, type, isInvalid }) => {
  const inputText = document.createElement("rh-input-text");
  inputText.label = label;
  inputText.type = type;
  inputText.isInvalid = isInvalid;
  return inputText;
}

export const InputText = Template.bind({});
