import api from "../index";
import { LS_TOKEN } from "../../constants/global";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../navigation/consts";

export const registration = async (email: string, password: string) => {
  const { data } = await api(`api/user${REGISTRATION_ROUTE}`, "POST", false, {
    email,
    password,
  });
  localStorage.setItem(LS_TOKEN, data);
};

export const login = async (email: string, password: string) => {
  const { data } = await api(`api/user${LOGIN_ROUTE}`, "POST", false, {
    email,
    password,
  });
  localStorage.setItem(LS_TOKEN, data);
};

export const logout = async () => {
  localStorage.removeItem(LS_TOKEN);
};
