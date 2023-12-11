export async function getCoordinates(city, count) {
  try {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=${count}`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
