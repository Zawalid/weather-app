import WeekForecast from './WeekForecast';
import TodayForecast from './TodayForecast';
import { useWeatherContext } from '../../hooks/useWeatherContext';
import { useSettings } from '../../hooks/useSettings';
import { useMyCities } from '../../hooks/useMyCities';

export function Aside() {
  const { hourlyForecast, dailyForecast } = useWeatherContext();
  const { daysForeCast, isLocationAccess, defaultLocation } = useSettings();
  const { seeMore } = useMyCities();

  if (!hourlyForecast || !dailyForecast) return;
  return (
    <>
      {seeMore && <TodayForecast hours={hourlyForecast} />}
      {(isLocationAccess || defaultLocation) && (
        <WeekForecast days={dailyForecast} daysNumber={parseInt(daysForeCast)} />
      )}
    </>
  );
}
