async function getVenues(url: string) {
  try {
    const res = await fetch(url);
    const array = await res.json();

    await array;
    //   console.log(list);
    return array;
  } catch (err) {
    console.log(err);
  }
}

export default getVenues;
