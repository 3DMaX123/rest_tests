import {IClassName} from "@t/root";

type ButtonBase = IClassName

interface ILinkButton extends ButtonBase {
  is: "link";
  text: string;
  to: string;
  action?: never;
}

interface IActionButton extends ButtonBase {
  is: "button";
  text: string;
  action: () => void;
  to?: never;
}

interface IComeBackButton extends ButtonBase {
  is: "comeBack";
  to: string;
  text?: never;
  action?: never;
}

export type ButtonProps = ILinkButton | IActionButton | IComeBackButton;
