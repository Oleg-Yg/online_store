import React from "react";

export interface DropdownAutocompleteProps {
  list: string[];
  onChange: (event: any) => void;
  placeholder: string;
  className?: string;
  style?: React.CSSProperties;
}
