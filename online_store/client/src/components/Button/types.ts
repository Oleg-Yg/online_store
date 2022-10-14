import { ColorVariants } from "../../themes/types";
import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  color?: ColorVariants;
  onClick: () => void;
  variant?: "outlined" | "contained";
  margin?: string;
}
