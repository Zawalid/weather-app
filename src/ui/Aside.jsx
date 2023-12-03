import { useLocation } from 'react-router-dom';

import Plan from '../features/settings/Plan';
import SignUp from '../features/settings/SignUp';
import TodayForecast from '../features/weather/TodayForecast';
import CurrentWeather from '../features/weather/CurrentWeather';
import WeekForecast from '../features/weather/WeekForecast';
import ThreeDaysForecast from '../features/weather/ThreeDaysForeCast';
import Cities from '../features/cities/Cities';

export default function Aside() {
  const currentTab = useLocation().pathname.split('/')[2];
  return currentTab === 'weather' ? (
    <>
      <TodayForecast className='noScrollbar justify-start overflow-auto' />
      <WeekForecast />
    </>
  ) : currentTab === 'cities' ? (
    <>
      <CurrentWeather transparent={true} imageClass='w-28' />
      <TodayForecast transparent={true} className='justify-start bg-transparent' />
      <ThreeDaysForecast />
    </>
  ) : currentTab === 'settings' ? (
    <>
      <Plan />
      <SignUp />
    </>
  ) : (
    <>
    <Cities type={3} />
    </>
  );
}
