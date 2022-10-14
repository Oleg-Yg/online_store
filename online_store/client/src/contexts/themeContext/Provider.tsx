import React, { PropsWithChildren, useEffect, useState } from "react";
import themeContext from ".";
import { themes, lightTheme } from "../../themes";
import { ITheme } from "../../themes/types";
import { LS_THEME } from "../../constants/global";

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(lightTheme);

  useEffect(() => {
    const lsThemeName = localStorage.getItem(LS_THEME);
    if (lsThemeName) changeTheme(lsThemeName);
  }, []);

  const changeTheme = (title: string) => {
    const foundTheme = themes.find((theme) => theme.title === title);
    if (!foundTheme) return;

    localStorage.setItem(LS_THEME, title);
    setTheme(foundTheme);
  };

  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
