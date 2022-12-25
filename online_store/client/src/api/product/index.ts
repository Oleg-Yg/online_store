import api from "../index";
import axios from "axios";
import { BACKEND_URL } from "../../constants/global";

// export const createProduct = async (product: any) => {
//   const { data } = await api(`api/product`, "POST", true, {
//     product,
//   });
//   return data;
// };

const $authHost = axios.create({ baseURL: BACKEND_URL });

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export const createProduct = async (product: any) => {
  const { data } = await $authHost.post(`api/product`, product);
  return data;
};
