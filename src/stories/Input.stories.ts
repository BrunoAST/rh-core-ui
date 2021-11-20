import { Meta } from "@storybook/html";
import "ionicons";

export default {
  title: "Componentes/Inputs/Input",
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
    label: "E-mail",
    type: "text",
    isInvalid: false
  }
} as Meta;

const Template = ({ label, type, isInvalid }) => {
  const input = document.createElement("rh-input");
  input.label = label;
  input.type = type;
  input.isInvalid = isInvalid;
  return input;
}

export const Input = Template.bind({});
