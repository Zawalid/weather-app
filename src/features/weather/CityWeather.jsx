import { useLocation, useParams } from 'react-router-dom';
import CurrentWeather from './CurrentWeather';
import TodayForecast from './TodayForecast';
import { useWeather } from '../../hooks/useWeather';
import { useGetWeatherData } from '../../hooks/useGetWeatherData';
import WeekForecast from './WeekForecast';

export default function CityWeather() {
  //? Alternative
  // const [searchParams] = useSearchParams();
  // const latitude = searchParams.get('lat');
  // const longitude = searchParams.get('lon');
  // const timezone = searchParams.get('timezone');

  const { city } = useParams();
  const location = useLocation().state;
  const { latitude, longitude, timezone } = location || {};

  const { isLoading, error, data } = useWeather(latitude, longitude, timezone, 3);
  const { weatherCode, isDay, dailyForecast, hourlyForecast, currentForecast } = useGetWeatherData(
    data,
    timezone,
    3,
  );

  if (isLoading || (!latitude && !longitude && !timezone)) return;
  if (error) return <div>Something went wrong</div>; // Todo Add a custom error component

  return (
    <>
      <CurrentWeather
        location={{ city }}
        temperature={currentForecast.temperature}
        precipitationProbability={currentForecast.precipitationProbability}
        weatherCode={weatherCode}
        isDay={isDay}
        transparent={true}
        imageClass='w-28'
      />
      <TodayForecast hours={hourlyForecast} transparent={true} className='bg-transparent' />
      <WeekForecast days={dailyForecast} daysNumber={3} />
    </>
  );
}
