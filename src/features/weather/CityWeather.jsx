import { useLocation,  useParams } from 'react-router-dom';
import CurrentWeather from './CurrentWeather';
import TodayForecast from './TodayForecast';
import { useWeather } from '../../hooks/useWeather';
import { useGetWeatherData } from '../../hooks/useGetWeatherData';
import WeekForecast from './WeekForecast';
import IconButton from '../../ui/IconButton';
import ErrorMessage from '../../ui/ErrorMessage';
import { throwError } from '../../utils/helpers';
import { useMyCities } from '../../hooks/useMyCities';
import { useCustomNavigate } from '../../hooks/useCustomNavigate';

export default function CityWeather() {
  const { city } = useParams();
  const navigate = useCustomNavigate();
  const location = useLocation();
  const { latitude, longitude, timezone } = location.state || {};
  const { setIsAsideOpen } = useMyCities();

  const { isLoading, error, data } = useWeather(latitude, longitude, timezone);
  const { weatherCode, isDay, dailyForecast, hourlyForecast, currentForecast } = useGetWeatherData(
    data,
    3,
  );

  if (isLoading || (!latitude && !longitude && !timezone))
    return window.innerWidth < 1024 ? <ErrorMessage type='noSelectedCity' /> : null;
  if (error) return throwError(error, 'generalError');

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
        className='absolute right-2 top-0 grid'
        onClick={() => {
          const path = location.pathname;
          navigate(`/${path.split('/')[1]}/${path.split('/')[2]}${location.search}`);
          setIsAsideOpen(false);
        }}
      >
        <i className='fa-solid fa-xmark duration-100'></i>
      </IconButton>
    </>
  );
}
