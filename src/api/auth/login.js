import { API } from "../enpoints";
import { save } from "../token/save";

const url = API.auth.login;

export async function login(userData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-type": "application/json" },
    });

    if (!response.ok) {
      const error = await response.json();
      const message = error?.errors?.[0]?.message ?? "something went wrong";

      throw new Error(error.status, { cause: message });
    }

    const user = await response.json();
    save("token", user.accessToken);
    save("user", user);

    location.assign("/profile");
  } catch (err) {
    if (err instanceof Error) {
      return err.cause;
    }
    return err;
  }
}
