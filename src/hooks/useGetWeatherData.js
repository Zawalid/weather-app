import { useSettings } from './useSettings';

export function useGetWeatherData(data, daysNumber) {
  const { hoursForeCast } = useSettings();

  if (!data) return {};

  const {
    daily: {
      time: dailyTime,
      weather_code: dailyWeatherCode,
      temperature_2m_max,
      temperature_2m_min,
      sunrise,
      sunset,
    },
    current: {
      temperature_2m,
      weather_code: currentWeatherCode,
      is_day: currentIsDay,
      wind_speed_10m: windSpeed,
      wind_gusts_10m: windGusts,
    },
    hourly: {
      time: hourlyTime,
      weather_code: hourlyWeatherCode,
      temperature_2m: hourlyTemperature,
      precipitation_probability,
      is_day: hourlyIsDay,
      wind_speed_10m: hourlyWindSpeed,
      relative_humidity_2m,
      apparent_temperature,
      visibility,
      uv_index,
      surface_pressure,
    },
    hourly_units: { temperature_2m: temperatureUnit, wind_speed_10m: windSpeedUnit },
  } = data;

  const dailyForecast = getItems(daysNumber, (day, i) => {
    return {
      time: dailyTime[i],
      weatherCode: dailyWeatherCode[i],
      temperature: {
        max: temperature_2m_max[i],
        min: temperature_2m_min[i],
      },
    };
  });

  const hourlyForecast = getItems(parseInt(hoursForeCast), (hour, i) => {
    return {
      time: hourlyTime[i],
      weatherCode: hourlyWeatherCode[i],
      temperature: `${hourlyTemperature[i]} ${temperatureUnit}`,
      precipitationProbability: precipitation_probability[i],
      isDay: hourlyIsDay[i],
      windSpeed: hourlyWindSpeed[i] + windSpeedUnit,
    };
  });

  const currentForecast = {
    precipitationProbability: precipitation_probability[0] || 0,
    humidity: relative_humidity_2m[0] || 0,
    realFeel: `${apparent_temperature[0]} ${temperatureUnit}`,
    visibility: visibility[0] || 0,
    uvIndex: uv_index[0] || 0,
    pressure: surface_pressure[0],
    temperature: `${temperature_2m} ${temperatureUnit}`,
    windSpeed: `${windSpeed} ${windSpeedUnit}`,
    windGusts: `${windGusts} ${windSpeedUnit}` || 0,
    sunrise: sunrise[0],
    sunset: sunset[0],
  };

  return {
    weatherCode: currentWeatherCode,
    isDay: currentIsDay,
    currentForecast,
    dailyForecast,
    hourlyForecast,
  };
}

function getItems(length, callback) {
  return Array.from({ length }, callback);
}
