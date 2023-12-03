import { load } from "./load";

export async function deleteItem(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        ["Content-Type"]: "application/json",
        Authorization: `Bearer ${load("token")}`,
      },
    });

    console.log(response);

    location.reload();
  } catch (err) {
    console.log(err);
  }
}
