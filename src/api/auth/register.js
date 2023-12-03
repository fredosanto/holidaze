import { API } from "../enpoints";

const url = API.auth.register;

export async function register(formData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json" },
    });

    console.log(response);
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw Error(data.errors[0].message);
    }

    return response.ok;
  } catch (error) {
    return error.message;
  }
}
