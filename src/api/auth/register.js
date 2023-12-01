import { API } from "../enpoints";

const url = API.auth.register;

export async function register(formData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json" },
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw Error(data.errors[0].message);
    }
    // alert("User succesfully registered");
    // window.location.assign("/login");
  } catch (error) {
    alert(error.message);
  }
}
