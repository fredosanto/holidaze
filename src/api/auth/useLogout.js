import remove from "../token/remove";

function useLogout() {
  localStorage.clear();
  alert("Logged out");
  location.assign("/login");
  //   remove(key);
}

export default useLogout;
