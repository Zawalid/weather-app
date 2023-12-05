import { useParams, useSearchParams } from 'react-router-dom';
import CurrentWeather from './CurrentWeather';
import TodayForecast from './TodayForecast';
import { useWeather } from '../../hooks/useWeather';
import { useGetWeatherData } from '../../hooks/useGetWeatherData';
import WeekForecast from './WeekForecast';

export default function CityWeather() {
  const [searchParams] = useSearchParams();
  const { city } = useParams();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const timezone = searchParams.get('timezone');

  const { isLoading, error, data } = useWeather(lat, lon, timezone, 3);

  const {
    temperature,
    weatherCode,
    isDay,
    temperatureUnit,
    daysForecast,
    hourlyForecast,
    precipitationProbability,
  } = useGetWeatherData(data, timezone, 3);

  if (isLoading || (!lat && !lon && !timezone)) return;
  if (error) return <div>Something went wrong</div>; // Todo Add a custom error component

  return (
    <>
      <CurrentWeather
        city={city}
        temperature={`${temperature}${temperatureUnit}`}
        precipitationProbability={precipitationProbability}
        weatherCode={weatherCode}
        isDay={isDay}
        transparent={true}
        imageClass='w-28'
      />
      <TodayForecast hours={hourlyForecast} transparent={true} className='bg-transparent' />
      <WeekForecast days={daysForecast} daysNumber={3} />
    </>
  );
}
