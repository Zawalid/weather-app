import OtherConditions from './OtherConditions';
import TodayForecast from './TodayForecast';
import CurrentWeather from './CurrentWeather';
import { useOutletContext } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Loader from '@/ui/Loader';
import { useWeatherContext } from '../../hooks/useWeatherContext';
import { useSettings } from '../../hooks/useSettings';
import ErrorMessage from '../../ui/ErrorMessage';

export default function Weather() {
  const { seeMore } = useOutletContext();
  const [parent] = useAutoAnimate({
    duration: 400,
  });
  const { enableAnimations } = useSettings();

  const {
    location,
    locationLoading,
    locationError,
    dataLoading,
    weatherCode,
    isDay,
    hourlyForecast,
    currentForecast,
  } = useWeatherContext();
  if (locationError) 
    return String(locationError)?.includes('Network') ? (
      <ErrorMessage type='internetError' />
    ) : (
      <ErrorMessage type='locationError' />
    );
  

  if (locationLoading || dataLoading) return <Loader />;

  if (!location) return;

  return (
    <div className='flex flex-col gap-5 ' ref={enableAnimations ? parent : null}>
      <CurrentWeather
        location={location}
        temperature={currentForecast.temperature}
        weatherCode={weatherCode}
        isDay={isDay}
        transparent={true}
        imageClass='w-28 sm:w-48'
      />
      {!seeMore && <TodayForecast hours={hourlyForecast} />}
      <OtherConditions otherConditions={currentForecast} />
    </div>
  );
}
