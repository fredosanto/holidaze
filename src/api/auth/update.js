import { load } from "../token/index.mjs";

export async function update(venueData, url) {
  console.log(venueData);
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
    alert("Updated");
    location.assign("/profile");
  } catch (err) {
    console.log(err);
  }
}
