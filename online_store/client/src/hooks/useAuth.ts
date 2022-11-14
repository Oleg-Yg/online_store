import { LS_TOKEN } from "../constants/global";

const useAuth = () => {
  const token = localStorage.getItem(LS_TOKEN);
  if (token === "null") {
    return false;
  } else {
    return !!token;
  }
};

export default useAuth;
