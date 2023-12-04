import WeekForecast from './WeekForecast';
import TodayForecast from './TodayForecast';

export function Aside({ seeMore }) {
  return (
    <>
      {seeMore && <TodayForecast className='noScrollbar justify-start overflow-auto' />}
      <WeekForecast />
    </>
  );
}
