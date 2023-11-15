import { API } from "../enpoints";

const api = API.venues.$;
const parameters =
  "?sort=created&sortOrder=desc&limit=10&_owner=true&_bookings=true";
const url = `${api + parameters}`;

export async function getVenues() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    alert(err);
    return err;
  }
}
