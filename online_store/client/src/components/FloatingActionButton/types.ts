import React from "react";

export interface FloatingActionButtonProps {
  variant: "add" | "edit" | "delete";
  onClick: () => void;
  style?: React.CSSProperties;
  className?: string;
  size?: string | number;
}
