import { ColorVariants } from "../../themes/types";

export interface InputProps {
  value: string;
  onChange: (event: any) => void;
  placeholder: string;
  type?: string;
  color?: ColorVariants;
  variant?: "outlined" | "filled" | "standard";
  width?: string;
  margin?: string;
}
