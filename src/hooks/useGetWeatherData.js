import { getClosestTime } from '../utils/helpers';

export function useGetWeatherData(data, timezone, daysNumber) {
  if (!data) return {};
  const {
    daily: {
      time: dailyTime,
      weather_code: dailyWeatherCode,
      temperature_2m_max,
      temperature_2m_min,
    },
    current: { temperature_2m, weather_code: currentWeatherCode, is_day: currentIsDay },
    current_units: { temperature_2m: unit },
    hourly: {
      time: hourlyTime,
      weather_code: hourlyWeatherCode,
      temperature_2m: hourlyTemperature,
      precipitation_probability,
      is_day: hourlyIsDay,
    },
  } = data;

  const daysForecast = getItems(daysNumber, (day, i) => {
    return {
      time: dailyTime[i],
      weatherCode: dailyWeatherCode[i],
      temperature: {
        max: temperature_2m_max[i],
        min: temperature_2m_min[i],
      },
    };
  });

  const hourlyForecast = getItems(12, (hour, i) => {
    return {
      time: hourlyTime[i],
      weatherCode: hourlyWeatherCode[i],
      temperature: hourlyTemperature[i],
      precipitationProbability: precipitation_probability[i],
      isDay: hourlyIsDay[i],
    };
  });

  // Find the precipitation probability of the current day based on the closes hour to the current time because the api doesn't provide the precipitation probability for the current day endpoint
  const precipitationProbability = hourlyForecast.find(
    (hour) =>
      new Date(hour.time).toDateString() ===
      new Date(getClosestTime(hourlyTime, timezone)).toDateString(),
  )?.precipitationProbability;

  return {
    temperature: temperature_2m,
    weatherCode: currentWeatherCode,
    isDay: currentIsDay,
    temperatureUnit: unit,
    daysForecast,
    hourlyForecast,
    precipitationProbability,
  };
}

function getItems(length, callback) {
  return Array.from({ length }, callback);
}
