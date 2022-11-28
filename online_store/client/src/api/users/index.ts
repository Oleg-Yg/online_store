import api from "../index";
import { LS_TOKEN } from "../../constants/global";
import {
  AUTH_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../../navigation/consts";
import jwe_decode from "jwt-decode";

export const registration = async (email: string, password: string) => {
  const { data } = await api(`api/user${REGISTRATION_ROUTE}`, "POST", false, {
    email,
    password,
  });
  localStorage.setItem(LS_TOKEN, data);
  return jwe_decode(data);
};

export const login = async (email: string, password: string) => {
  const { data } = await api(`api/user${LOGIN_ROUTE}`, "POST", false, {
    email,
    password,
  });
  if (data !== null) {
    localStorage.setItem(LS_TOKEN, data);
  }
  return jwe_decode(data);
};

export const logout = async () => {
  localStorage.removeItem(LS_TOKEN);
};

export const check = async () => {
  const { data } = await api(`api/user${AUTH_ROUTE}`, "GET", false);
  localStorage.setItem(LS_TOKEN, data);
  return jwe_decode(data);
};
