import { User } from "../../types/user";

async function useRegister(url: string, formData: User) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json" },
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw Error;
    }
    alert("User succesfully registered");
    window.location.assign("/login");
  } catch (error: any) {
    alert(error.message);
  }
}

export default useRegister;
