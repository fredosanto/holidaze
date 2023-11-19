import { API } from "../enpoints";

export async function getSingleVenue(id) {
  const urlParameters = "?_owner=true&_bookings=true";
  const url = `${API.venues.id(id).$}${urlParameters}`;
  try {
    const response = await fetch(url);
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
}
