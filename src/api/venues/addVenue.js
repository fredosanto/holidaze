import { API } from "../enpoints";
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

    const data = await response.json();

    if (!response.ok) {
      throw Error(data.errors[0].message);
    }

    return response.ok;
  } catch (error) {
    return error.message;
  }
}
