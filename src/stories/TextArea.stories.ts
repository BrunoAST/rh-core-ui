import { Meta } from "@storybook/html";
import { inputsBaseArgs, inputsBaseArgTypes, inputsBaseParameters } from "./shared/input-base-args";

export default {
  title: "Componentes/Inputs/Text Area",
  parameters: {
    ...inputsBaseParameters
  },
  argTypes: {
    ...inputsBaseArgTypes,
    cols: {
      control: { type: "number" },
      description: "Define a largura visível do text area",
      table: {
        defaultValue: {
          summary: "20"
        }
      }
    },
    rows: {
      control: { type: "number" },
      description: "Define o número de linhas do text area",
      table: {
        defaultValue: {
          summary: "3"
        }
      }
    }
  },
  args: {
    ...inputsBaseArgs,
    label: "Descrição",
    cols: 100,
    rows: 3,
    minLength: 50,
    maxLength: 70
  }
} as Meta;

const Template = ({ value, label, placeholder, name, ariaLabel, cols, rows, isRequired, isInvalid, minLength, maxLength }) => {
  const textArea = document.createElement("rh-text-area");
  textArea.value = value;
  textArea.name = name;
  textArea.placeholder = placeholder;
  textArea.label = label;
  textArea.ariaLabel = ariaLabel;
  textArea.cols = cols;
  textArea.rows = rows;
  textArea.isInvalid = isInvalid;
  textArea.isRequired = isRequired;
  textArea.minLength = minLength;
  textArea.maxLength = maxLength;
  return textArea;
}

export const TextArea = Template.bind({});
