import { Meta } from "@storybook/html";

export default {
  title: "Componentes/Inputs/Input Error Message",
  parameters: {
    layout: "centered"
  },
  argTypes: {
    isVisible: {
      control: { type: "boolean" },
      description: "Estado atual de exibição da mensagem de erro",
      table: {
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  args: {
    isVisible: false
  }
} as Meta;

const Template = ({ isVisible }) => {
  return `
    <rh-input-text label="Teste" is-required is-invalid="${isVisible}">
      <rh-input-error-message slot="error-message" is-visible="${isVisible}">
        Campo obrigatório
      </rh-input-error-message>
    </rh-input-text>
  `;
};

export const InputErrorMessage = Template.bind({});
