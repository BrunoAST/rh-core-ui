import { Meta } from "@storybook/html";
import "ionicons";

export default {
  title: "Componentes/Inputs/Input Text",
  parameters: {
    layout: "centered",
    actions: {
      handles: ["value"]
    },
    docs: { inlineStories: false }
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
    name: {
      control: { type: "text" },
      description: "Nome do form control submetido com o formulário como parte do conjunto `name/value`",
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    placeholder: {
      control: { type: "text" },
      description: "Texto que aparece no input quando nenhum valor foi inserido",
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    label: {
      control: { type: "text" },
      description: "Provém uma explicação sobre do que se trata o input",
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    ariaLabel: {
      control: { type: "text" },
      description: "Descreve o input. Utilizado por ferramentas de acessibilidade",
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    isInvalid: {
      control: { type: "boolean" },
      description: "Define os estado de validade do input",
      table: {
        defaultValue: {
          summary: "false"
        }
      }
    },
    isRequired: {
      control: { type: "boolean" },
      description: "Define os estado de obrigatoriedade do input",
      table: {
        defaultValue: {
          summary: "false"
        }
      }
    },
    value: {
      description: "Evento emitido sempre que o valor do input é alterado. O valor em string é emitido na propriedade `detail` do evento",
      table: {
        defaultValue: {
          summary: "CustomEvent<string>"
        }
      }
    }
  },
  args: {
    label: "Nome",
    type: "text",
    name: "",
    placeholder: "",
    ariaLabel: "",
    isInvalid: false,
    isRequired: false
  }
} as Meta;

const Template = ({ label, type, isInvalid, isRequired }) => {
  const inputText = document.createElement("rh-input-text");
  inputText.label = label;
  inputText.type = type;
  inputText.isInvalid = isInvalid;
  inputText.isRequired = isRequired;
  return inputText;
}

export const InputText = Template.bind({});
