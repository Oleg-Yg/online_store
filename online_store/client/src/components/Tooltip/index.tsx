import React, { useState } from "react";
import { TooltipProps } from "./types";
import s from "./styles.module.scss";
import useTheme from "../../hooks/useTheme";

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  placement,
  style,
  className,
}) => {
  const [visibilityTooltip, setVisibilityTooltip] = useState(false);
  const { theme } = useTheme();

  const changeOnMouseOver = () => {
    setVisibilityTooltip(true);
  };

  const changeOnMouseOut = () => {
    setVisibilityTooltip(false);
  };

  return (
    <label
      onMouseOver={changeOnMouseOver}
      onMouseOut={changeOnMouseOut}
      style={style}
      className={className}
    >
      {children}
      <span
        className={s.tooltip}
        style={{
          background: theme.colors.secondary,
          color: theme.background.secondary,
          visibility: visibilityTooltip ? "visible" : "hidden",
        }}
      >
        {title}
      </span>
    </label>
  );
};

export default Tooltip;
