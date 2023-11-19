export async function getVenues(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    alert(err);
    return err;
  }
}
