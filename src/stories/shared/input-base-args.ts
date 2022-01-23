export const inputsBaseArgTypes = {
  value: {
    control: { type: "text" },
    description: "Valor atual presente no input",
    table: {
      defaultValue: {
        summary: "undefined"
      },
      category: "Propriedades"
    }
  },
  name: {
    control: { type: "text" },
    description: "Nome do form control submetido com o formulário como parte do conjunto `name/value`",
    table: {
      defaultValue: {
        summary: ""
      },
      category: "Propriedades"
    }
  },
  placeholder: {
    control: { type: "text" },
    description: "Texto que aparece no input quando nenhum valor foi inserido",
    table: {
      defaultValue: {
        summary: ""
      },
      category: "Propriedades"
    }
  },
  label: {
    control: { type: "text" },
    description: "Provém uma explicação sobre do que se trata o input",
    table: {
      defaultValue: {
        summary: ""
      },
      category: "Propriedades"
    }
  },
  ariaLabel: {
    control: { type: "text" },
    description: "Descreve o input. Utilizado por ferramentas de acessibilidade",
    table: {
      defaultValue: {
        summary: ""
      },
      category: "Propriedades"
    }
  },
  isInvalid: {
    control: { type: "boolean" },
    description: "Define os estado de validade do input",
    table: {
      defaultValue: {
        summary: "false"
      },
      category: "Propriedades"
    }
  },
  isRequired: {
    control: { type: "boolean" },
    description: "Define os estado de obrigatoriedade do input",
    table: {
      defaultValue: {
        summary: "false"
      },
      category: "Propriedades"
    }
  },
  minLength: {
    description: "Define a validação da quantidade mínima de caracteres que o input pode receber",
    table: {
      defaultValue: {
        summary: "undefined"
      },
      category: "Propriedades"
    }
  },
  maxLength: {
    description: "Define a validação da quantidade máxima de caracteres que o input pode receber",
    table: {
      defaultValue: {
        summary: "undefined"
      },
      category: "Propriedades"
    }
  },
  valueUpdated: {
    description: "Evento emitido sempre que o valor do input é alterado. O valor em string é emitido na propriedade `detail` do evento",
    table: {
      defaultValue: {
        summary: "CustomEvent<any>"
      },
      category: "Eventos"
    }
  }
}

export const inputsBaseArgs = {
  value: "",
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
    handles: ["valueUpdated"]
  },
  docs: { inlineStories: false }
}