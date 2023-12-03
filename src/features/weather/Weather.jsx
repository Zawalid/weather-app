import AirConditions from './AirConditions';
import TodayForecast from './TodayForecast';
import CurrentWeather from './CurrentWeather';
import { useOutletContext } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function Weather() {
  const { seeMore } = useOutletContext();
  const [parent] = useAutoAnimate({
    duration: 400,
  });

  return (
    <div className='flex flex-col gap-5 ' ref={parent}>
      <CurrentWeather imageClass='w-28 sm:w-48' />
      {!seeMore && <TodayForecast className='md:justify-center' />}
      <AirConditions />
    </div>
  );
}
