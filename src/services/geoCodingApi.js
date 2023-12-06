export async function getCoordinates(city) {
  try {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
