import { Meta } from "@storybook/html";
import "ionicons";
import { SelectOptions } from "../components/select/types/select-options";

export default {
  title: "Componentes/Inputs/Select",
  parameters: {
    layout: "centered",
    actions: {
      handles: ["valueSelected"]
    }
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Label padrão que será exibido no topo do select",
      table: {
        defaultValue: {
          summary: "''"
        },
        category: "Propriedades"
      }
    },
    placeholder: {
      control: { type: "text" },
      description: "Texto que será exibido quando o usuário ainda não tiver selecionado uma opção",
      table: {
        defaultValue: {
          summary: "''"
        },
        category: "Propriedades"
      }
    },
    options: {
      control: { type: "object" },
      description: "Lista com todas as opções que serão exibidas no select",
      table: {
        defaultValue: {
          summary: "SelectOptions[]"
        },
        category: "Propriedades"
      }
    },
    valueSelected: {
      description: "Evento que emite o valor selecionado pelo usuário",
      table: {
        defaultValue: {
          summary: "CustomEvent<string>"
        },
        category: "Eventos"
      }
    }
  },
  args: {
    label: "Selecione uma competência para a afirmação",
    placeholder: "Selecione",
    options: [
      {
        title: "Competência 1",
        value: "Competência 1"
      },
      {
        title: "Competência 2",
        value: "Competência 2"
      },
      {
        title: "Competência 3",
        value: "Competência 3"
      },
      {
        title: "Competência 4",
        value: "Competência 4"
      },
      {
        title: "Competência 5",
        value: "Competência 5"
      },
      {
        title: "Competência 6",
        value: "Competência 6"
      },
      {
        title: "Competência 7",
        value: "Competência 7"
      },
      {
        title: "Competência 8",
        value: "Competência 8"
      }
    ] as SelectOptions[]
  }
} as Meta;

const Template = ({ options, label, placeholder }) => {
  const select = document.createElement("rh-select");
  select.options = options;
  select.label = label;
  select.placeholder = placeholder;
  return select;
}

export const Select = Template.bind({});
