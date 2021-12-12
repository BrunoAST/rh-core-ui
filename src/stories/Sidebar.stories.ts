import { Meta } from '@storybook/html';
import { MenuItems } from '../shared/types/menu-items';
import 'ionicons';

export default {
  title: "Componentes/Sidebar",
  parameters: {
    actions: {
      handles: ["isCollapsed", "itemClicked"]
    },
    componentSubtitle: "Em dispositivos móveis, um backdrop será exibido quando o menu estiver expandido. " +
      "Quando o menu estiver colapsado e um 'hover' for realizado em algum item da lista, um tooltip será exibido. " +
      "O conteúdo filho da sidebar 'slot' não será empurrado para a direita também",
    docs: { inlineStories: false, iframeHeight: 500 },
  },
  argTypes: {
    menuItems: {
      control: { type: "object" },
      description: "Lista que renderiza os itens do menu",
      table: {
        defaultValue: {
          summary: "MenuItems[]"
        }
      }
    },
    currentActiveIndex: {
      control: { type: "number" },
      description: "Define o item atual do menu que estará em destaque",
      table: {
        defaultValue: {
          summary: "-"
        }
      }
    },
    isCollapsed: {
      description: "Evento emitido sempre que um clique é realizado no botão de abrir/fechar menu. O valor boleano é emitido na propriedade `detail` do evento",
      table: {
        defaultValue: {
          summary: "CustomEvent<boolean>"
        }
      }
    },
    itemClicked: {
      description: "Evento emitido sempre que um clique é realizado em um item da lista, a `URL` é emitida na propriedade `detail` do evento",
      table: {
        defaultValue: {
          summary: "CustomEvent<string>"
        }
      }
    },
    slot: {
      control: { type: "text" },
      description: "Conteúdo filho da sidebar, aceita qualquer conteúdo HTML"
    },
  },
  args: {
    slot: "Sou um conteúdo filho da sidebar!",
    currentActiveIndex: 1,
    menuItems: [
      {
        name: "Início",
        url: "inicio",
        ionIconName: "apps"
      },
      {
        name: "Competências",
        url: "competencias",
        ionIconName: "extension-puzzle"
      },
      {
        name: "Afirmações",
        url: "afirmacoes",
        ionIconName: "list"
      },
      {
        name: "Usuários",
        url: "usuarios",
        ionIconName: "people"
      },
      {
        name: "Testes",
        url: "testes",
        ionIconName: "clipboard"
      },
      {
        name: "Resultados",
        url: "resultados",
        ionIconName: "bar-chart"
      },
    ] as MenuItems[]
  }
} as Meta;

const Template = ({ menuItems, currentActiveIndex, slot }) => {
  const sideBar = document.createElement("rh-side-bar");
  sideBar.menuItems = menuItems;
  sideBar.currentActiveIndex = currentActiveIndex;
  sideBar.innerHTML = slot;
  return sideBar;
}

export const Sidebar = Template.bind({});
