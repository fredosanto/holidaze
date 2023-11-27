import { API } from "../enpoints";
import { load } from "../token/load";

export async function makeBooking(formData) {
  const url = API.bookings.$;
  console.log(url);
  console.log(formData);
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        ["Content-Type"]: "application/json",
        Authorization: `Bearer ${load("token")}`,
      },
    });

    const res = await response.json();
    console.log(res);
    alert("Reservation is made");
    location.assign("/profile");
  } catch (err) {
    console.log(err);
  }
}
