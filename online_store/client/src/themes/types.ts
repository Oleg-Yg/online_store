export interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  background: {
    primary: string;
    secondary: string;
  };
}

export type ColorVariants =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info";

export type BackgroundVariants = "primary" | "secondary";
