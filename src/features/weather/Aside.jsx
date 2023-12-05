import WeekForecast from './WeekForecast';
import TodayForecast from './TodayForecast';
import { useWeatherContext } from '../../contexts/WeatherContext';

export function Aside({ seeMore }) {
  const { hourlyForecast, daysForecast } = useWeatherContext();
  if (!hourlyForecast || !daysForecast) return;
  return (
    <>
      {seeMore && <TodayForecast hours={hourlyForecast} />}
      <WeekForecast days={daysForecast} daysNumber={7} />
    </>
  );
}
