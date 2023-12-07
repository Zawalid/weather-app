import WeekForecast from './WeekForecast';
import TodayForecast from './TodayForecast';
import { useWeatherContext } from '../../hooks/useWeatherContext';

export function Aside({ seeMore }) {
  const { hourlyForecast, dailyForecast } = useWeatherContext();
  if (!hourlyForecast || !dailyForecast) return;
  return (
    <>
      {seeMore && <TodayForecast hours={hourlyForecast} />}
      <WeekForecast days={dailyForecast} daysNumber={7} />
    </>
  );
}
