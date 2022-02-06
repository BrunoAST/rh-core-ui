import { Meta } from "@storybook/html";

export default {
  title: "Componentes/Toast",
  parameters: {
    layout: "fullscreen",
    actions: {
      handles: ["closed"]
    }
  },
  argTypes: {
    message: {
      control: { type: "text" },
      description: "Recebe a mensagem a ser exibida",
      type: {
        required: true
      },
      table: {
        defaultValue: {
          summary: "undefined"
        },
        category: "Propriedades"
      }
    },
    header: {
      control: { type: "text" },
      description: "Recebe o título a ser exibida",
      table: {
        defaultValue: {
          summary: "undefined"
        },
        category: "Propriedades"
      }
    },
    type: {
      control: { type: "radio" },
      options: ["info", "warning", "success", "error"],
      description: "Possíveis visuais para o toast",
      table: {
        defaultValue: {
          summary: "info"
        },
        category: "Propriedades"
      }
    },
    position: {
      control: { type: "radio" },
      options: ["top-center", "bottom-center", "top-right", "bottom-right"],
      description: "Possíveis posições para o toast",
      table: {
        defaultValue: {
          summary: "top-right"
        },
        category: "Propriedades"
      }
    },
    isVisible: {
      control: { type: "boolean" },
      description: "Define se o toast está ou não visível",
      table: {
        defaultValue: {
          summary: "false"
        },
        category: "Propriedades"
      }
    },
    autoHideDuration: {
      control: { type: "number" },
      description: "Define o tempo que o toast ficará visível em milissegundos",
      table: {
        defaultValue: {
          summary: "5000"
        },
        category: "Propriedades"
      }
    },
    closed: {
      description: "Evento emitido quando o toast é fechado.",
      table: {
        defaultValue: {
          summary: "CustomEvent<void>"
        },
        category: "Eventos"
      }
    },
  },
  args: {
    message: "Registro salvo com sucesso!",
    header: "Sucesso",
    type: "info",
    position: "top-right",
    isVisible: false,
    autoHideDuration: 5000
  }
} as Meta;

const Template = ({ message, header, type, position, isVisible, autoHideDuration }) => {
  return `
    <rh-toast
      message="${message.toString()}"
      header="${header}"
      type="${type}"
      position="${position}"
      is-visible="${isVisible}"
      auto-hide-duration="${autoHideDuration}"
    >
    </rh-toast>
  `;
}

export const Toast = Template.bind({});
