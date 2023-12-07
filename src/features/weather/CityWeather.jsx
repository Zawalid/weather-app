import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CurrentWeather from './CurrentWeather';
import TodayForecast from './TodayForecast';
import { useWeather } from '../../hooks/useWeather';
import { useGetWeatherData } from '../../hooks/useGetWeatherData';
import WeekForecast from './WeekForecast';
import IconButton from '../../ui/IconButton';

export default function CityWeather() {
  //? Alternative
  // const [searchParams] = useSearchParams();
  // const latitude = searchParams.get('lat');
  // const longitude = searchParams.get('lon');
  // const timezone = searchParams.get('timezone');

  const { city } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { latitude, longitude, timezone } = location.state || {};

  const { isLoading, error, data } = useWeather(latitude, longitude, timezone, 3);
  const { weatherCode, isDay, dailyForecast, hourlyForecast, currentForecast } = useGetWeatherData(
    data,
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
      <IconButton
        className='absolute right-2 top-0 hidden lg:grid'
        onClick={() =>
          navigate(location.pathname + location.search, { replace: true, state: null })
        }
      >
        <i className='fa-solid fa-xmark duration-100'></i>
      </IconButton>
    </>
  );
}
