export const inputsBaseArgTypes = {
  name: {
    control: { type: "text" },
    description: "Nome do form control submetido com o formulário como parte do conjunto `name/value`",
    table: {
      defaultValue: {
        summary: ""
      }
    }
  },
  placeholder: {
    control: { type: "text" },
    description: "Texto que aparece no input quando nenhum valor foi inserido",
    table: {
      defaultValue: {
        summary: ""
      }
    }
  },
  label: {
    control: { type: "text" },
    description: "Provém uma explicação sobre do que se trata o input",
    table: {
      defaultValue: {
        summary: ""
      }
    }
  },
  ariaLabel: {
    control: { type: "text" },
    description: "Descreve o input. Utilizado por ferramentas de acessibilidade",
    table: {
      defaultValue: {
        summary: ""
      }
    }
  },
  isInvalid: {
    control: { type: "boolean" },
    description: "Define os estado de validade do input",
    table: {
      defaultValue: {
        summary: "false"
      }
    }
  },
  isRequired: {
    control: { type: "boolean" },
    description: "Define os estado de obrigatoriedade do input",
    table: {
      defaultValue: {
        summary: "false"
      }
    }
  },
  minLength: {
    description: "Define a validação da quantidade mínima de caracteres que o input pode receber",
    table: {
      defaultValue: {
        summary: "undefined"
      }
    }
  },
  maxLength: {
    description: "Define a validação da quantidade máxima de caracteres que o input pode receber",
    table: {
      defaultValue: {
        summary: "undefined"
      }
    }
  },
  value: {
    description: "Evento emitido sempre que o valor do input é alterado. O valor em string é emitido na propriedade `detail` do evento",
    table: {
      defaultValue: {
        summary: "CustomEvent<string>"
      }
    }
  }
}

export const inputsBaseArgs = {
  label: "Nome",
  name: "",
  placeholder: "",
  ariaLabel: "",
  isInvalid: false,
  isRequired: false,
  minLength: 5,
  maxLength: 20
}

export const inputsBaseParameters = {
  layout: "centered",
  actions: {
    handles: ["value"]
  },
  docs: { inlineStories: false }
}