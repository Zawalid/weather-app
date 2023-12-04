export async function getWeatherData(latitude, longitude, timezone, days) {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&current=temperature_2m,precipitation,is_day,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_min,temperature_2m_max&forecast_days=3&forecast_hours=12&models=best_match`,
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
