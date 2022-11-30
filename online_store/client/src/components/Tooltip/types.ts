import React from "react";

export interface TooltipProps {
  title: string;
  children: React.ReactNode;
  placement?: string;
  style?: React.CSSProperties;
  className?: string;
}
