import { Meta } from "@storybook/html";

export default {
  title: "Componentes/Pagination",
  parameters: {
    layout: "centered",
    actions: {
      handles: ["pageClicked"]
    }
  },
  argTypes: {
    initialActivePage: {
      control: { type: "number" },
      description: "Seta a página que começa inicialmente ativa.",
      table: {
        defaultValue: {
          summary: "1"
        },
        category: "Propriedades"
      }
    },
    maxVisiblePages: {
      control: { type: "number" },
      description: "Define a quantidade de opções de páginas que estarão visíveis.",
      table: {
        defaultValue: {
          summary: "10"
        },
        category: "Propriedades"
      }
    },
    total: {
      control: { type: "number" },
      description: "Recebe a quantidade total de páginas.",
      table: {
        defaultValue: {
          summary: "0"
        },
        category: "Propriedades"
      }
    },
    pageClicked: {
      description: "Evento emitido quando a navegação entre páginas ocorre. O número da página é emitido na propriedade `detail` do evento",
      table: {
        defaultValue: {
          summary: "CustomEvent<number>"
        },
        category: "Eventos"
      }
    }
  },
  args: {
    initialActivePage: 1,
    maxVisiblePages: 10,
    total: 20
  }
} as Meta;

const Template = ({ initialActivePage, maxVisiblePages, total }) => {
  const pagination = document.createElement("rh-pagination");
  pagination.initialActivePage = initialActivePage;
  pagination.maxVisiblePages = maxVisiblePages;
  pagination.total = total;
  return pagination;
}

export const Pagination = Template.bind({});
