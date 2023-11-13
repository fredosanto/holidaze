import { remove } from "../token/index.mjs";

export function useLogout() {
  remove("token");
  remove("user");
  alert("Logged out");
  location.assign("/login");
  //   remove(key);
}
