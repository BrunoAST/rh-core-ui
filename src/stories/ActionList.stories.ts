import { Meta } from "@storybook/html";
import faker from "faker";
import { ActionListFieldConfig } from "../components/action-list/types/action-list-field-config";

export default {
  title: "Componentes/Action List",
  parameters: {
    actions: {
      handles: ["editClicked", "deleteClicked"]
    }
  },
  argTypes: {
    fieldConfigs: {
      control: { type: "array" },
      description: "Lista da configuração dos campos que serão exibidos pela lista, baseados no objeto de items passado.",
      table: {
        defaultValue: {
          summary: "ActionListFieldConfig[]"
        },
        category: "Propriedades"
      }
    },
    items: {
      control: { type: "array" },
      description: "Lista com os objetos que serão exibidos pelo componente",
      table: {
        defaultValue: {
          summary: "any[]"
        },
        category: "Propriedades"
      }
    },
    editClicked: {
      description: "Evento emitido quando o botão de editar de algum item da lista é clicado. O objeto referente ao item clicado é emitido na propriedade `detail` do evento",
      table: {
        defaultValue: {
          summary: "CustomEvent<any>"
        },
        category: "Eventos"
      }
    },
    deleteClicked: {
      description: "Evento emitido quando o botão de excluir de algum item da lista é clicado. O objeto referente ao item clicado é emitido na propriedade `detail` do evento",
      table: {
        defaultValue: {
          summary: "CustomEvent<any>"
        },
        category: "Eventos"
      }
    }
  },
  args: {
    fieldConfigs: [
      {
        valueToBeShowed: (value) => value.name
      },
      {
        valueToBeShowed: (value) => value.email
      },
      {
        valueToBeShowed: () => "Vincular relatório ao usuário",
        style: {
          "color": "#F46036",
          "text-decoration": "underline",
          "cursor": "pointer",
          "font-weight": "bold"
        },
        itemClicked: (value) => console.log("Valor do item clicado", value)
      }
    ] as ActionListFieldConfig[],
    items: Array.from({ length: 5 }).map(() => (
      {
        name: faker.name.findName(),
        email: faker.internet.email()
      }
    ))
  }
} as Meta;

const Template = ({ fieldConfigs, items }) => {
  const actionList = document.createElement("rh-action-list");
  actionList.fieldConfigs = fieldConfigs;
  actionList.items = items;
  return actionList;
}

export const ActionList = Template.bind({});
