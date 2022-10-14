import React from "react";
import s from "./styles.module.scss";
import { ButtonProps } from "./types";
import useTheme from "../../hooks/useTheme";
import { getContrastColor } from "../../utils";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = "primary",
  variant = "contained",
  margin,
}) => {
  const { theme } = useTheme();

  return (
    <button
      className={s.button}
      style={{
        background: variant === "outlined" ? "none" : theme.colors[color],
        borderColor: theme.colors[color],
        color:
          variant === "outlined"
            ? theme.colors[color]
            : getContrastColor(theme.colors[color]),
        boxShadow:
          variant === "outlined" ? "none" : `0 0 3px ${theme.colors[color]}`,
        margin: margin,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
