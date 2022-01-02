/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ActionListFieldConfig } from "./components/action-list/types/action-list-field-config";
import { BreadcrumbsPaths } from "./components/breadcrumbs/types/breadcrumbs-paths";
import { ButtonVariant } from "./components/buttons/types/button-variant";
import { InputTextType } from "./components/input-text/types/input-text-type";
import { SelectOptions } from "./components/select/types/select-options";
import { MenuItems } from "./shared/types/menu-items";
import { TooltipPosition } from "./components/tooltip/types/tooltip-position";
export namespace Components {
    interface RhActionList {
        "fieldConfigs": ActionListFieldConfig[];
        "items": any[];
    }
    interface RhBreadcrumbs {
        "paths": BreadcrumbsPaths[];
    }
    interface RhButton {
        "ariaLabel": string;
        "disabled": boolean;
        "ionIconColor": string;
        "ionIconName": string;
        "variant": ButtonVariant;
    }
    interface RhInputErrorMessage {
        "isVisible": boolean;
    }
    interface RhInputLabel {
        "isInvalid": boolean;
        "isRequired": boolean;
        "label": string;
    }
    interface RhInputRangeSlider {
        "initialMaxValueCursor": number;
        "initialMinValueCursor": number;
        "label": string;
        "max": number;
        "min": number;
        "minGap": number;
    }
    interface RhInputText {
        "ariaLabel": string;
        "isInvalid": boolean;
        "isRequired": boolean;
        "label": string;
        "maxLength": number;
        "minLength": number;
        "name": string;
        "placeholder": string;
        "type": InputTextType;
        "value": string;
    }
    interface RhSelect {
        "label": string;
        "options": SelectOptions[];
        "placeholder": string;
    }
    interface RhSideBar {
        "currentActiveIndex": number;
        "menuItems": MenuItems[];
    }
    interface RhSideBarItems {
        "currentActiveIndex": number;
        "menuItems": MenuItems[];
    }
    interface RhTextArea {
        "ariaLabel": string;
        "cols": number;
        "isInvalid": boolean;
        "isRequired": boolean;
        "label": string;
        "maxLength": number;
        "minLength": number;
        "name": string;
        "placeholder": string;
        "rows": number;
        "value": string;
    }
    interface RhTooltip {
        "ariaDescribedBy": string;
        "position": TooltipPosition;
        "value": string;
    }
}
declare global {
    interface HTMLRhActionListElement extends Components.RhActionList, HTMLStencilElement {
    }
    var HTMLRhActionListElement: {
        prototype: HTMLRhActionListElement;
        new (): HTMLRhActionListElement;
    };
    interface HTMLRhBreadcrumbsElement extends Components.RhBreadcrumbs, HTMLStencilElement {
    }
    var HTMLRhBreadcrumbsElement: {
        prototype: HTMLRhBreadcrumbsElement;
        new (): HTMLRhBreadcrumbsElement;
    };
    interface HTMLRhButtonElement extends Components.RhButton, HTMLStencilElement {
    }
    var HTMLRhButtonElement: {
        prototype: HTMLRhButtonElement;
        new (): HTMLRhButtonElement;
    };
    interface HTMLRhInputErrorMessageElement extends Components.RhInputErrorMessage, HTMLStencilElement {
    }
    var HTMLRhInputErrorMessageElement: {
        prototype: HTMLRhInputErrorMessageElement;
        new (): HTMLRhInputErrorMessageElement;
    };
    interface HTMLRhInputLabelElement extends Components.RhInputLabel, HTMLStencilElement {
    }
    var HTMLRhInputLabelElement: {
        prototype: HTMLRhInputLabelElement;
        new (): HTMLRhInputLabelElement;
    };
    interface HTMLRhInputRangeSliderElement extends Components.RhInputRangeSlider, HTMLStencilElement {
    }
    var HTMLRhInputRangeSliderElement: {
        prototype: HTMLRhInputRangeSliderElement;
        new (): HTMLRhInputRangeSliderElement;
    };
    interface HTMLRhInputTextElement extends Components.RhInputText, HTMLStencilElement {
    }
    var HTMLRhInputTextElement: {
        prototype: HTMLRhInputTextElement;
        new (): HTMLRhInputTextElement;
    };
    interface HTMLRhSelectElement extends Components.RhSelect, HTMLStencilElement {
    }
    var HTMLRhSelectElement: {
        prototype: HTMLRhSelectElement;
        new (): HTMLRhSelectElement;
    };
    interface HTMLRhSideBarElement extends Components.RhSideBar, HTMLStencilElement {
    }
    var HTMLRhSideBarElement: {
        prototype: HTMLRhSideBarElement;
        new (): HTMLRhSideBarElement;
    };
    interface HTMLRhSideBarItemsElement extends Components.RhSideBarItems, HTMLStencilElement {
    }
    var HTMLRhSideBarItemsElement: {
        prototype: HTMLRhSideBarItemsElement;
        new (): HTMLRhSideBarItemsElement;
    };
    interface HTMLRhTextAreaElement extends Components.RhTextArea, HTMLStencilElement {
    }
    var HTMLRhTextAreaElement: {
        prototype: HTMLRhTextAreaElement;
        new (): HTMLRhTextAreaElement;
    };
    interface HTMLRhTooltipElement extends Components.RhTooltip, HTMLStencilElement {
    }
    var HTMLRhTooltipElement: {
        prototype: HTMLRhTooltipElement;
        new (): HTMLRhTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "rh-action-list": HTMLRhActionListElement;
        "rh-breadcrumbs": HTMLRhBreadcrumbsElement;
        "rh-button": HTMLRhButtonElement;
        "rh-input-error-message": HTMLRhInputErrorMessageElement;
        "rh-input-label": HTMLRhInputLabelElement;
        "rh-input-range-slider": HTMLRhInputRangeSliderElement;
        "rh-input-text": HTMLRhInputTextElement;
        "rh-select": HTMLRhSelectElement;
        "rh-side-bar": HTMLRhSideBarElement;
        "rh-side-bar-items": HTMLRhSideBarItemsElement;
        "rh-text-area": HTMLRhTextAreaElement;
        "rh-tooltip": HTMLRhTooltipElement;
    }
}
declare namespace LocalJSX {
    interface RhActionList {
        "fieldConfigs"?: ActionListFieldConfig[];
        "items"?: any[];
        "onDeleteClicked"?: (event: CustomEvent<any>) => void;
        "onEditClicked"?: (event: CustomEvent<any>) => void;
    }
    interface RhBreadcrumbs {
        "onPathClicked"?: (event: CustomEvent<string>) => void;
        "paths"?: BreadcrumbsPaths[];
    }
    interface RhButton {
        "ariaLabel"?: string;
        "disabled"?: boolean;
        "ionIconColor"?: string;
        "ionIconName"?: string;
        "onClicked"?: (event: CustomEvent<any>) => void;
        "variant"?: ButtonVariant;
    }
    interface RhInputErrorMessage {
        "isVisible"?: boolean;
    }
    interface RhInputLabel {
        "isInvalid"?: boolean;
        "isRequired"?: boolean;
        "label"?: string;
    }
    interface RhInputRangeSlider {
        "initialMaxValueCursor": number;
        "initialMinValueCursor": number;
        "label": string;
        "max"?: number;
        "min"?: number;
        "minGap"?: number;
        "onMaxValueUpdated"?: (event: CustomEvent<number>) => void;
        "onMinValueUpdated"?: (event: CustomEvent<number>) => void;
    }
    interface RhInputText {
        "ariaLabel"?: string;
        "isInvalid"?: boolean;
        "isRequired"?: boolean;
        "label"?: string;
        "maxLength"?: number;
        "minLength"?: number;
        "name"?: string;
        "onValueUpdated"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "type"?: InputTextType;
        "value"?: string;
    }
    interface RhSelect {
        "label"?: string;
        "onCurrentSelectedValue"?: (event: CustomEvent<string>) => void;
        "options"?: SelectOptions[];
        "placeholder"?: string;
    }
    interface RhSideBar {
        "currentActiveIndex"?: number;
        "menuItems"?: MenuItems[];
        "onIsCollapsed"?: (event: CustomEvent<boolean>) => void;
    }
    interface RhSideBarItems {
        "currentActiveIndex"?: number;
        "menuItems"?: MenuItems[];
        "onItemClicked"?: (event: CustomEvent<string>) => void;
    }
    interface RhTextArea {
        "ariaLabel"?: string;
        "cols"?: number;
        "isInvalid"?: boolean;
        "isRequired"?: boolean;
        "label"?: string;
        "maxLength"?: number;
        "minLength"?: number;
        "name"?: string;
        "onValueUpdated"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "rows"?: number;
        "value"?: string;
    }
    interface RhTooltip {
        "ariaDescribedBy"?: string;
        "position"?: TooltipPosition;
        "value"?: string;
    }
    interface IntrinsicElements {
        "rh-action-list": RhActionList;
        "rh-breadcrumbs": RhBreadcrumbs;
        "rh-button": RhButton;
        "rh-input-error-message": RhInputErrorMessage;
        "rh-input-label": RhInputLabel;
        "rh-input-range-slider": RhInputRangeSlider;
        "rh-input-text": RhInputText;
        "rh-select": RhSelect;
        "rh-side-bar": RhSideBar;
        "rh-side-bar-items": RhSideBarItems;
        "rh-text-area": RhTextArea;
        "rh-tooltip": RhTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rh-action-list": LocalJSX.RhActionList & JSXBase.HTMLAttributes<HTMLRhActionListElement>;
            "rh-breadcrumbs": LocalJSX.RhBreadcrumbs & JSXBase.HTMLAttributes<HTMLRhBreadcrumbsElement>;
            "rh-button": LocalJSX.RhButton & JSXBase.HTMLAttributes<HTMLRhButtonElement>;
            "rh-input-error-message": LocalJSX.RhInputErrorMessage & JSXBase.HTMLAttributes<HTMLRhInputErrorMessageElement>;
            "rh-input-label": LocalJSX.RhInputLabel & JSXBase.HTMLAttributes<HTMLRhInputLabelElement>;
            "rh-input-range-slider": LocalJSX.RhInputRangeSlider & JSXBase.HTMLAttributes<HTMLRhInputRangeSliderElement>;
            "rh-input-text": LocalJSX.RhInputText & JSXBase.HTMLAttributes<HTMLRhInputTextElement>;
            "rh-select": LocalJSX.RhSelect & JSXBase.HTMLAttributes<HTMLRhSelectElement>;
            "rh-side-bar": LocalJSX.RhSideBar & JSXBase.HTMLAttributes<HTMLRhSideBarElement>;
            "rh-side-bar-items": LocalJSX.RhSideBarItems & JSXBase.HTMLAttributes<HTMLRhSideBarItemsElement>;
            "rh-text-area": LocalJSX.RhTextArea & JSXBase.HTMLAttributes<HTMLRhTextAreaElement>;
            "rh-tooltip": LocalJSX.RhTooltip & JSXBase.HTMLAttributes<HTMLRhTooltipElement>;
        }
    }
}
