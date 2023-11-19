import { API } from "../enpoints";
// import { user } from "../auth/index.mjs";
import { load } from "../token/index.mjs";

const url = API.venues.$;

export async function addVenue(venueData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(venueData),
      headers: {
        ["Content-type"]: "application/json",
        Authorization: `Bearer ${load("token")}`,
      },
    });

    const res = await response.json();
    console.log(res);
    alert("New venue added");
    location.assign("/profile");
  } catch (err) {
    console.log(err);
  }
}
