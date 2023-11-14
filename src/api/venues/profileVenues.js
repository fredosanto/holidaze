import { API } from "../enpoints";
import { load } from "../token/index.mjs";

export async function profileVenues(name) {
  const url = API.profiles.name(name).venues;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        ["Content-type"]: "application/json",
        Authorization: `Bearer ${load("token")}`,
      },
    });
    const venues = await response.json();
    return venues;
  } catch (err) {
    console.err;
  }
}
