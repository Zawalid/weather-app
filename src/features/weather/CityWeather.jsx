import { useParams, useSearchParams } from 'react-router-dom';
import CurrentWeather from './CurrentWeather';
import ThreeDaysForecast from './ThreeDaysForeCast';
import TodayForecast from './TodayForecast';
import { useWeather } from '../../hooks/useWeather';
import { getClosestTime } from '../../utils/helpers';

export default function CityWeather() {
  const [searchParams] = useSearchParams();
  const { city } = useParams();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const timezone = searchParams.get('timezone');

  const { isLoading, error, data } = useWeather(lat, lon, timezone, 3);

  if (isLoading || (!lat && !lon && !timezone)) return;
  if (error) return <div>Something went wrong</div>; // Todo Add a custom error component

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

  const threeDays = getItems(3, (day, i) => {
    return {
      time: dailyTime[i],
      weatherCode: dailyWeatherCode[i],
      temperature: {
        max: temperature_2m_max[i],
        min: temperature_2m_min[i],
      },
    };
  });

  const hours = getItems(12, (hour, i) => {
    return {
      time: hourlyTime[i],
      weatherCode: hourlyWeatherCode[i],
      temperature: hourlyTemperature[i],
      precipitationProbability: precipitation_probability[i],
      isDay: hourlyIsDay[i],
    };
  });

  // Find the precipitation probability of the current day based on the closes hour to the current time because the api doesn't provide the precipitation probability for the current day endpoint
  const precipitationProbability = hours.find(
    (hour) =>
      new Date(hour.time).toDateString() ===
      new Date(getClosestTime(hourlyTime, timezone)).toDateString(),
  )?.precipitationProbability;

  return (
    <>
      <CurrentWeather
        city={city}
        temperature={`${temperature_2m}${unit}`}
        precipitationProbability={precipitationProbability}
        weatherCode={currentWeatherCode}
        isDay={currentIsDay}
        transparent={true}
        imageClass='w-28'
      />
      <TodayForecast hours={hours} transparent={true} className='justify-start bg-transparent' />
      <ThreeDaysForecast days={threeDays} />
    </>
  );
}

function getItems(length, callback) {
  return Array.from({ length }, callback);
}
