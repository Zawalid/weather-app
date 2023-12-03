import Search from '../features/search/Search';
import Plan from '../features/settings/Plan';
import Settings from '../features/settings/Settings';
import SignUp from '../features/settings/SignUp';
import {
  TodayForecast,
  WeekForecast,
  Weather,
  CurrentWeather,
  ThreeDaysForecast,
} from '../features/weather';
import SearchInput from './SearchInput';
import SideBar from './SideBar';
import Cities from '@/features/cities/Cities';
import { useState } from 'react';

export default function AppLayout() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  return (
    <main className='grid h-full grid-cols-[60px_1fr] gap-5 bg-background-primary p-3 sm:grid-cols-[80px_1fr] lg:grid-cols-[80px_2fr_1fr] lg:grid-rows-[40px_1fr] lg:p-5'>
      <SideBar />
      <div className='flex items-center'>
        <SearchInput />
        <button onClick={() => setIsAsideOpen(!isAsideOpen)} className='lg:hidden'>
          <i
            className={`fa-solid fa-angles-left text-lg text-text-tertiary transition-transform duration-500 lg:hidden ${
              isAsideOpen ? 'rotate-180' : ''
            } `}
          ></i>
        </button>
      </div>
      <div className='col-start-2 overflow-auto pr-3'>
        {/* <Weather /> */}
        {/* <Cities type={1} /> */}
        {/* <Search /> */}
        <Settings />
      </div>
      <div
        className={`fixed  top-12 h-[calc(100%-40px)] w-[calc(100%-80px)] flex-col gap-5 overflow-auto bg-background-primary p-3 transition-[right] duration-500 hover:right-0 sm:w-[calc(100%-100px)] lg:static lg:flex lg:h-full lg:w-full lg:py-0 lg:pl-0 ${
          isAsideOpen ? 'right-0' : '-right-full'
        }`}
      >
        {/* Weather */}
        {/* <TodayForecast className="justify-start overflow-auto noScrollbar" /> */}
        {/* <WeekForecast /> */}

        {/* Cities */}
        {/* <CurrentWeather transparent={true} imageClass='w-28' /> */}
        {/* <TodayForecast transparent={true} className='justify-start bg-transparent' /> */}
        {/* <ThreeDaysForecast /> */}
        {/* Settings */}
        <Plan />
        <SignUp />
      </div>
    </main>
  );
}
