import { Meta } from "@storybook/html";
import "ionicons";
import { BreadcrumbsPaths } from "../components/breadcrumbs/types/breadcrumbs-paths";

export default {
  title: "Componentes/Breadcrumbs",
  parameters: {
    layout: "centered",
    actions: {
      handles: ["pathClicked"],
    },
  },
  argTypes: {
    paths: {
      control: { type: "object" },
      description: "Lista com todos os caminhos referentes ao nível de uma página",
      table: {
        defaultValue: {
          summary: "BreadcrumbsPaths[]"
        }
      }
    },
    pathClicked: {
      description: "Evento que emite a url da opção clicada. A url é emitida na propriedade `detail` do evento",
      table: {
        defaultValue: {
          summary: "CustomEvent<string>"
        }
      }
    }
  },
  args: {
    paths: [
      {
        name: "Perguntas",
        pageUrl: "/perguntas"
      },
      {
        name: "Criar perguntas",
        pageUrl: "/criar-perguntas"
      }
    ] as BreadcrumbsPaths[]
  }
} as Meta;

const Template = ({ paths }) => {
  const breadcrumbs = document.createElement("rh-breadcrumbs");
  breadcrumbs.paths = paths;
  return breadcrumbs;
}

export const Breadcrumbs = Template.bind({});
