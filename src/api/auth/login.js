import save from "../token/save";

export async function login(url, userData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-type": "application/json" },
    });

    console.log(response);
    if (!response.ok) {
      const error = await response.json();
      const message = error?.errors?.[0]?.message ?? "something went wrong";

      throw new Error(error.status, { cause: message });
    }

    console.log("i should not run");
    const user = await response.json();

    localStorage.setItem("user", JSON.stringify(user));
    save(user.accessToken);
    alert("Logged in");
    location.assign("/profile");
  } catch (err) {
    if (err instanceof Error) {
      alert(`${err} - ${err.cause}`);
      return;
    }
    alert("woops - something went wrong");
  }
}
