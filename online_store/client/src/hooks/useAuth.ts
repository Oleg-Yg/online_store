import { LS_TOKEN } from "../constants/global";

const useAuth = () => {
  const token = localStorage.getItem(LS_TOKEN);
  return !!token;
};

export default useAuth;
