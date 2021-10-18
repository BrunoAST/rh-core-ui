/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonVariant } from "./components/buttons/types/button-variant";
import { MenuItems } from "./components/side-bar/types/menu-items";
import { TooltipPosition } from "./components/tooltip/types/tooltip-position";
export namespace Components {
    interface RhButton {
        "ariaLabel": string;
        "disabled": boolean;
        "ionIconName": string;
        "variant": ButtonVariant;
    }
    interface RhSideBar {
        "menuItems": MenuItems[];
    }
    interface RhSideBarItems {
        "menuItems": MenuItems[];
    }
    interface RhTooltip {
        "ariaDescribedBy": string;
        "position": TooltipPosition;
        "value": string;
    }
}
declare global {
    interface HTMLRhButtonElement extends Components.RhButton, HTMLStencilElement {
    }
    var HTMLRhButtonElement: {
        prototype: HTMLRhButtonElement;
        new (): HTMLRhButtonElement;
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
    interface HTMLRhTooltipElement extends Components.RhTooltip, HTMLStencilElement {
    }
    var HTMLRhTooltipElement: {
        prototype: HTMLRhTooltipElement;
        new (): HTMLRhTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "rh-button": HTMLRhButtonElement;
        "rh-side-bar": HTMLRhSideBarElement;
        "rh-side-bar-items": HTMLRhSideBarItemsElement;
        "rh-tooltip": HTMLRhTooltipElement;
    }
}
declare namespace LocalJSX {
    interface RhButton {
        "ariaLabel"?: string;
        "disabled"?: boolean;
        "ionIconName"?: string;
        "onButtonClicked"?: (event: CustomEvent<any>) => void;
        "variant"?: ButtonVariant;
    }
    interface RhSideBar {
        "menuItems"?: MenuItems[];
        "onIsBarCollapsed"?: (event: CustomEvent<boolean>) => void;
    }
    interface RhSideBarItems {
        "menuItems"?: MenuItems[];
        "onItemClicked"?: (event: CustomEvent<string>) => void;
    }
    interface RhTooltip {
        "ariaDescribedBy"?: string;
        "position"?: TooltipPosition;
        "value"?: string;
    }
    interface IntrinsicElements {
        "rh-button": RhButton;
        "rh-side-bar": RhSideBar;
        "rh-side-bar-items": RhSideBarItems;
        "rh-tooltip": RhTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rh-button": LocalJSX.RhButton & JSXBase.HTMLAttributes<HTMLRhButtonElement>;
            "rh-side-bar": LocalJSX.RhSideBar & JSXBase.HTMLAttributes<HTMLRhSideBarElement>;
            "rh-side-bar-items": LocalJSX.RhSideBarItems & JSXBase.HTMLAttributes<HTMLRhSideBarItemsElement>;
            "rh-tooltip": LocalJSX.RhTooltip & JSXBase.HTMLAttributes<HTMLRhTooltipElement>;
        }
    }
}
