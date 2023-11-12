export async function register(url, formData) {
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
  } catch (error) {
    alert(error.message);
  }
}
