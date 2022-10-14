import { createContext } from "react";
import lightTheme from "../../themes/light";
import { IThemeContext } from "./types";

const themeContext = createContext<IThemeContext>({
  theme: lightTheme,
  changeTheme: () => null,
});

export default themeContext;
