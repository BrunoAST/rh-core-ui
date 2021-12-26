import { Meta } from "@storybook/html";

export default {
  title: "Componentes/Inputs/Input Range Slider",
  parameters: {
    actions: {
      handles: ["minValueUpdated", "maxValueUpdated"]
    }
  },
  argTypes: {
    minGap: {
      control: { type: "number" },
      description: "Define o intervalo entre os valores inferior e superior",
      table: {
        defaultValue: {
          summary: "1"
        },
        category: "Propriedades"
      }
    },
    min: {
      control: { type: "number" },
      description: "Define o mínimo valor possível para o slider",
      table: {
        defaultValue: {
          summary: "1"
        },
        category: "Propriedades"
      }
    },
    max: {
      control: { type: "number" },
      description: "Define o máximo valor possível para o slider",
      table: {
        defaultValue: {
          summary: "10"
        },
        category: "Propriedades"
      }
    },
    initialMinValueCursor: {
      control: { type: "number" },
      description: "Define o valor mínimo inicial que o cursor possuirá",
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
    initialMaxValueCursor: {
      control: { type: "number" },
      description: "Define o valor máximo inicial que o cursor possuirá",
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
    label: {
      control: { type: "text" },
      description: "Define a descrição exibida na parte superior do slider",
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
    minValueUpdated: {
      description: "Evento emitido sempre que o valor inferior do input é alterado. O número é emitido na propriedade `detail` do evento",
      table: {
        defaultValue: {
          summary: "CustomEvent<number>"
        },
        category: "Eventos"
      }
    },
    maxValueUpdated: {
      description: "Evento emitido sempre que o valor superior do input é alterado. O número é emitido na propriedade `detail` do evento",
      table: {
        defaultValue: {
          summary: "CustomEvent<number>"
        },
        category: "Eventos"
      }
    }
  },
  args: {
    minGap: 1,
    min: 1,
    max: 10,
    initialMinValueCursor: 2,
    initialMaxValueCursor: 8,
    label: "Informe um intervalo"
  }
} as Meta;

const Template = ({ minGap, min, max, initialMinValueCursor, initialMaxValueCursor, label }) => {
  return `
    <rh-input-range-slider
      label="${label}"
      min-gap="${minGap}"
      min="${min}"
      max="${max}"
      initial-min-value-cursor="${initialMinValueCursor}"
      initial-max-value-cursor="${initialMaxValueCursor}"
    ></rh-input-range-slider>
  `;
}

export const InputRangeSlider = Template.bind({});
