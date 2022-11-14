import { ColorVariants } from "../../themes/types";
import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  color?: ColorVariants;
  onClick: () => void;
  variant?: "outlined" | "contained" | "text";
  margin?: string;
}
