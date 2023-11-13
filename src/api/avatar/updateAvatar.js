import { API } from "../enpoints";
import { user } from "../auth/index.mjs";
import { load, save } from "../token/index.mjs";

const { name } = user();
const url = API.profiles.name(name).media;

export async function updateAvatar(imgLink) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(imgLink),
      headers: {
        ["Content-Type"]: "application/json",
        Authorization: `Bearer ${load("token")}`,
      },
    });

    const res = await response.json();

    save("user", res);
    window.location.reload();

    console.log(res);
  } catch (err) {
    alert(err);
  }
}
