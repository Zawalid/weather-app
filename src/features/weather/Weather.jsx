import AirConditions from './AirConditions';
import TodayForecast from './TodayForecast';
import CurrentWeather from './CurrentWeather';
import { useOutletContext } from 'react-router-dom';

export default function Weather() {
  const { seeMore } = useOutletContext();

  return (
    <div className='flex flex-col gap-5 '>
      <CurrentWeather imageClass='w-28 sm:w-48' />
      {!seeMore && <TodayForecast className='md:justify-center' />}
      <AirConditions />
    </div>
  );
}
