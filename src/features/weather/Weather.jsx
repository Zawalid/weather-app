import OtherConditions from './OtherConditions';
import TodayForecast from './TodayForecast';
import CurrentWeather from './CurrentWeather';
import { useOutletContext } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Loader from '@/ui/Loader';
import { useWeatherContext } from '../../contexts/WeatherContext';

export default function Weather() {
  const { seeMore } = useOutletContext();
  const [parent] = useAutoAnimate({
    duration: 400,
  });

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

  if (!locationError)
    return (
      <div className='flex h-full flex-col items-center justify-center gap-3 text-center '>
        {locationError === 'Your browser does not support geolocation' ? (
          <p className='font-semibold  text-text-secondary'>{locationError}</p>
        ) : (
          <>
            <h3 className='text-lg font-semibold text-text-primary sm:text-2xl'>
              Our weather app is a bit clueless without your location.
            </h3>
            <p className='text-xs font-semibold text-text-secondary  sm:text-base'>
              Enable location access and refresh the page to see the weather in your area.
            </p>
          </>
        )}
      </div>
    ); // Todo Add a custom error component

  if (locationLoading || dataLoading)
    return (
      <div className='grid h-full'>
        <Loader />
      </div>
    );

  if (!location) return;

  return (
    <div className='flex flex-col gap-5 ' ref={parent}>
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
