import { ITheme } from "../../themes/types";

export interface IThemeContext {
  theme: ITheme;
  changeTheme: (title: string) => void;
}
