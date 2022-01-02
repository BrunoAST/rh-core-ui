import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";

import { ActionListFieldConfig } from "./types/action-list-field-config";

@Component({
  tag: "rh-action-list",
  styleUrl: "./action-list.scss",
  shadow: true
})
export class ActionList {
  @Prop() fieldConfigs: ActionListFieldConfig[] = [];
  @Prop() items: any[] = [];

  @Event() editClicked: EventEmitter<any>;
  @Event() deleteClicked: EventEmitter<any>;

  render() {
    return [
      <ul class="list">
        {
          this.items.map((item, itemIndex) =>
            <li key={itemIndex} class="list__item">
              <div class="detail">
                {
                  this.fieldConfigs.map((config, configIndex) =>
                    <span
                      key={configIndex}
                      style={config.style}
                      onClick={() => config.itemClicked(item)}
                    >
                      {config.valueToBeShowed(item)}
                    </span>
                  )
                }
              </div>
              <div class="actions">
                <rh-tooltip
                  position="left"
                  value="Editar"
                >
                  <rh-button
                    variant="icon"
                    ionIconColor="#1D3354"
                    ariaLabel="Editar item"
                    ionIconName="pencil"
                    onClicked={() => this.editClicked.emit(item)}
                  />
                </rh-tooltip>

                <rh-tooltip
                  position="left"
                  value="Excluir"
                >
                  <rh-button
                    variant="icon"
                    ionIconColor="#BF0303"
                    ariaLabel="Excluir item"
                    ionIconName="trash"
                    onClicked={() => this.deleteClicked.emit(item)}
                  />
                </rh-tooltip>
              </div>
            </li>
          )
        }
      </ul>
    ];
  }
}
