async function save(token: string) {
  const url = "https://api.noroff.dev/api/v1/holidaze/bookings";

  if (!token) {
    return;
  }

  console.log(token);
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  localStorage.setItem("token", token);

  const response = await fetch(`${url}`, options);
  const data = await response.json();

  console.log(data);
}

export default save;
