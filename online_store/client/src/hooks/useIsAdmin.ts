import { LS_TOKEN } from "../constants/global";
import jwe_decode from "jwt-decode";

const useIsAdmin = () => {
  const token = localStorage.getItem(LS_TOKEN);
  if (token) {
    if (token !== "null") {
      const user: { role: string } = jwe_decode(token as string);
      return user.role === "ADMIN";
    } else {
      return false;
    }
  } else {
    return !!token;
  }
};

export default useIsAdmin;
