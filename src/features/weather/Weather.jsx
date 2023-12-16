import OtherConditions from './OtherConditions';
import TodayForecast from './TodayForecast';
import CurrentWeather from './CurrentWeather';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Loader from '@/ui/Loader';
import { useWeatherContext } from '../../hooks/useWeatherContext';
import { useSettings } from '../../hooks/useSettings';
import { throwError } from '../../utils/helpers';
import { useMyCities } from '../../hooks/useMyCities';

export default function Weather() {
  const { seeMore } = useMyCities();
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

  if (locationError) return throwError(locationError, 'locationError');
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
