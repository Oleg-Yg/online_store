import React from "react";

export interface FloatingActionButtonProps {
  variant: "add" | "edit";
  onClick: () => void;
  style?: React.CSSProperties;
  className?: string;
}
