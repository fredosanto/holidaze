import { load } from "../token/index.mjs";

export async function update(venueData, url) {
  try {
    const response = await fetch(url, {
      method: "PUT",
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
