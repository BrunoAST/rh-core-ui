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
    },
    slot: {
      control: { type: "text" },
      description: "Espaço onde a mensagem de erro é definida"
    },
  },
  args: {
    isVisible: false,
    slot: "Campo obrigatório"
  }
} as Meta;

export const InputText = ({ isVisible, slot }) => {
  return `
    <rh-input-text label="Teste" is-required is-invalid="${isVisible}">
      <rh-input-error-message slot="error-message" is-visible="${isVisible}">
        ${slot}
      </rh-input-error-message>
    </rh-input-text>
  `;
}

export const TextArea = ({ isVisible, slot }) => {
  return `
    <rh-text-area label="Teste" is-required is-invalid="${isVisible}">
      <rh-input-error-message slot="error-message" is-visible="${isVisible}">
        ${slot}
      </rh-input-error-message>
    </rh-text-area>
  `;
}
