import save from "../token/save";
interface UserData {
  email: string;
  password: string;
}

const url = "https://api.noroff.dev/api/v1/holidaze/auth/login";

async function login(userData: UserData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-type": "application/json" },
    });

    const user = await response.json();
    console.log(response);

    if (!response.ok) {
      throw new Error("Username or password is incorrect");
    }

    localStorage.setItem("user", JSON.stringify(user));
    save(user.accessToken);
    alert("Logged in");
    location.assign("/profile");
  } catch (err) {
    console.log(err);
    alert(err);
  }
}

export default login;
