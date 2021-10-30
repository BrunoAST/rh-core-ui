import { Meta } from "@storybook/html";
import "ionicons";

export default {
  title: "Componentes/Tooltip",
  parameters: {
    layout: "centered"
  },
  argTypes: {
    value: {
      control: { type: "text" },
      description: "Recebe o texto que será exibido pelo Tooltip",
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    position: {
      control: { type: "radio" },
      options: ["top", "bottom", "left", "right"],
      description: "Variações de posições",
      table: {
        defaultValue: {
          summary: "top"
        }
      }
    },
    ariaDescribedBy: {
      control: { type: "text" },
      description: "Utilizado para tornar o elemento mais descritivo para ferramentas de acessibilidade",
      table: {
        defaultValue: {
          summary: "undefined"
        }
      }
    },
    slot: {
      control: { type: "text" },
      description: "Conteúdo filho do botão, aceita qualquer conteúdo HTML"
    },
  },
  args: {
    value: "Tooltip!",
    position: "top",
    slot: "Passe o mouse aqui"
  }
} as Meta;

const Template = ({ value, position, slot }) => {
  return `
    <rh-tooltip
      value=${value}
      position=${position}
    >
      ${slot}
    </rh-tooltip>
  `;
}

export const Tooltip = Template.bind({});
