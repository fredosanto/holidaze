// import { API } from "../enpoints";
import { load } from "../token/load";

export async function userBooking(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        ["Content-Type"]: "application/json",
        Authorization: `Bearer ${load("token")}`,
      },
    });

    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
}
