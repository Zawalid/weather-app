const BASE_URL = 'https://api.open-meteo.com/v1/forecast';
const CURRENT = [
  'temperature_2m',
  'precipitation',
  'wind_speed_10m',
  'wind_gusts_10m',
  'is_day',
  'weather_code',
];
const HOURLY = [
  'precipitation_probability',
  'is_day',
  'wind_speed_10m',
  'temperature_2m',
  'weather_code',
  'relative_humidity_2m',
  'apparent_temperature',
  'visibility',
  'wind_gusts_10m',
  'uv_index',
  'surface_pressure',
];
const DAILY = ['weather_code', 'temperature_2m_min', 'temperature_2m_max', 'sunrise', 'sunset'];

export async function getWeatherData(latitude, longitude, timezone, days) {
  try {
    const url = `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&current=${CURRENT.join(
      ',',
    )}&hourly=${HOURLY.join(',')}&daily=${DAILY.join(
      ',',
    )}&forecast_days=${days}&forecast_hours=12&models=best_match`;

    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
