import { API } from "../enpoints";
import { load } from "../token/load";

export async function makeBooking(formData) {
  const url = API.bookings.$;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        ["Content-Type"]: "application/json",
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
