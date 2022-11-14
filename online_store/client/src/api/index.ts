import { BACKEND_URL, LS_TOKEN } from "../constants/global";

export default async (
  url: string,
  method: "GET" | "POST" | "PATCH" | "DELETE",
  needAuth = false,
  body?: any
) => {
  const token = localStorage.getItem(LS_TOKEN);
  let result;
  try {
    const response = await fetch(BACKEND_URL + url, {
      method: method || "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: needAuth ? `Bearer ${token}` : "",
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await response.json();
    result = { data, error: null };
  } catch (e) {
    result = { data: null, error: e };
  }
  return result;
};
