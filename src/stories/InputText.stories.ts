import { Meta } from "@storybook/html";
import "ionicons";
import { inputsBaseArgs, inputsBaseArgTypes, inputsBaseParameters } from "./shared/input-base-args";

export default {
  title: "Componentes/Inputs/Input Text",
  parameters: {
    ...inputsBaseParameters
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["text", "password"],
      description: "Define o tipo de exibição do conteúdo",
      table: {
        defaultValue: {
          summary: "text"
        }
      }
    },
    ...inputsBaseArgTypes
  },
  args: {
    type: "text",
    ...inputsBaseArgs
  }
} as Meta;

const Template = ({ value, label, type, name, placeholder, ariaLabel, isInvalid, isRequired, minLength, maxLength }) => {
  const inputText = document.createElement("rh-input-text");
  inputText.value = value;
  inputText.label = label;
  inputText.type = type;
  inputText.name = name;
  inputText.placeholder = placeholder;
  inputText.ariaLabel = ariaLabel;
  inputText.isInvalid = isInvalid;
  inputText.isRequired = isRequired;
  inputText.minLength = minLength;
  inputText.maxLength = maxLength;
  return inputText;
}

export const InputText = Template.bind({});
