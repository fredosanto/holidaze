import { API } from "../enpoints";
// import { user } from "../auth/index.mjs";
import { load } from "../token/index.mjs";

export async function updateVenue(venueData, venueId) {
  const url = API.venues.id(venueId).$;
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(venueData),
      headers: {
        ["Content-type"]: "application/json",
        Authorization: `Bearer ${load("token")}`,
      },
    });

    const res = await response.json();
    console.log(res);
    alert("Venue updated");
    location.assign("/profile");
  } catch (err) {
    console.log(err);
  }
}
