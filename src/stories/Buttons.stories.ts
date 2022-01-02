import { Meta } from "@storybook/html";
import "ionicons";

export default {
  title: "Componentes/Botões",
  parameters: {
    layout: "centered",
    actions: {
      handles: ["clicked"],
    },
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["basic", "filled", "stroked", "underlined", "icon"],
      description: "Variações visuais",
      table: {
        defaultValue: {
          summary: "basic"
        },
        category: "Propriedades"
      }
    },
    ionIconName: {
      control: { type: "text" },
      description: "A lista de ícones pode ser encontrada [Ionic icons](https://ionic.io/ionicons)",
      table: {
        defaultValue: {
          summary: "undefined"
        },
        category: "Propriedades"
      }
    },
    ionIconColor: {
      control: { type: "text" },
      description: "Define a cor do ícone",
      table: {
        defaultValue: {
          summary: "undefined"
        },
        category: "Propriedades"
      }
    },
    disabled: {
      control: { type: "boolean" },
      description: "Determina se o botão está desabilitado ou não",
      table: {
        defaultValue: {
          summary: "false"
        },
        category: "Propriedades"
      }
    },
    ariaLabel: {
      control: { type: "text" },
      description: "Utilizado para tornar o botão mais descritivo para ferramentas de acessibilidade",
      table: {
        defaultValue: {
          summary: "undefined"
        },
        category: "Propriedades"
      }
    },
    slot: {
      control: { type: "text" },
      description: "Conteúdo filho do botão, aceita qualquer conteúdo HTML"
    },
    clicked: {
      description: "Evento de click do botão",
      table: {
        defaultValue: {
          summary: "CustomEvent<any>"
        },
        category: "Eventos"
      }
    }
  },
  args: {
    disabled: false,
    ionIconName: "",
    ionIconColor: ""
  }
} as Meta;

const Template = ({ variant, ionIconName, ionIconColor, ariaLabel, disabled, slot }) => {
  const button = document.createElement("rh-button");
  button.variant = variant;
  button.ionIconName = ionIconName;
  button.ionIconColor = ionIconColor;
  button.ariaLabel = ariaLabel;
  button.disabled = disabled;
  button.innerHTML = slot;
  return button;
}

export const Basic = Template.bind({});
Basic.args = {
  variant: "basic",
  slot: "Basic"
};

export const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
  slot: "Filled"
};

export const Stroked = Template.bind({});
Stroked.args = {
  variant: "stroked",
  slot: "Stroked"
};

export const Underlined = Template.bind({});
Underlined.args = {
  variant: "underlined",
  slot: "Underlined"
};

export const Icon = Template.bind({});
Icon.args = {
  variant: "icon",
  ionIconName: "save"
};
