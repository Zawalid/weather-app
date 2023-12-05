import AirConditions from './AirConditions';
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
    locationLoading,
    locationError,
    dataLoading,
    temperature,
    weatherCode,
    isDay,
    temperatureUnit,
    hourlyForecast,
    precipitationProbability,
  } = useWeatherContext();

  if (locationError)
    return (
      <div className='flex h-full flex-col items-center justify-center gap-3 text-center '>
        <h3 className='text-2xl font-semibold text-text-primary'>
          Our weather app is a bit clueless without your location.
        </h3>
        <p className='font-semibold  text-text-secondary'>
          Enable location access and refresh the page to see the weather in your area.
        </p>
      </div>
    ); // Todo Add a custom error component

  if (locationLoading || dataLoading)
    return (
      <div className='grid h-full'>
        <Loader />
      </div>
    );

  return (
    <div className='flex flex-col gap-5 ' ref={parent}>
      <CurrentWeather
        city={'Sale'}
        temperature={`${temperature}${temperatureUnit}`}
        precipitationProbability={precipitationProbability}
        weatherCode={weatherCode}
        isDay={isDay}
        transparent={true}
        imageClass='w-28 sm:w-48'
      />
      {!seeMore && <TodayForecast hours={hourlyForecast} transparent={true} />}
      <AirConditions />
    </div>
  );
}
