import "ionicons";

export default {
  title: "Componentes/Botões",
  parameters: {
    layout: "centered",
    actions: {
      handles: ["buttonClicked"],
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
        }
      }
    },
    ionIconName: {
      control: { type: "text" },
      description: "A lista de ícones pode ser encontrada [Ionic icons](https://ionic.io/ionicons)",
      table: {
        defaultValue: {
          summary: "undefined"
        }
      }
    },
    disabled: {
      control: { type: "boolean" },
      description: "Determina se o botão está desabilitado ou não",
      table: {
        defaultValue: {
          summary: "false"
        }
      }
    },
    ariaLabel: {
      control: { type: "text" },
      description: "Utilizado para tornar o botão mais descritivo para ferramentas de acessibilidade",
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
    buttonClicked: {
      description: "Evento de click do botão",
      table: {
        defaultValue: {
          summary: "CustomEvent<any>"
        }
      }
    }
  },
  args: {
    ionIconName: ""
  }
}

const Template = ({ variant, ionIconName, ariaLabel, slot }) => {
  return `
    <rh-button
      variant=${variant}
      ariaLabel=${ariaLabel}
      ionIconName=${ionIconName}
    >
      ${slot}
    </rh-button>
  `;
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
