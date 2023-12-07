import { useQuery } from '@tanstack/react-query';
import { getWeatherData } from '../services/weatherApi';
import { useSettings } from './useSettings';

export function useWeather(lat, long, timezone, days) {
  const { temperatureUnit, windSpeedUnit, precipitationUnit } = useSettings();

  const { isLoading, data, error } = useQuery({
    queryKey: ['weather', lat, long, timezone, temperatureUnit, windSpeedUnit, precipitationUnit],
    queryFn: () =>
      getWeatherData(
        lat,
        long,
        timezone,
        days,
        24,
        temperatureUnit,
        windSpeedUnit,
        precipitationUnit,
      ),
    enabled: Boolean(lat && long && timezone),
    staleTime: 0,
  });

  return { isLoading, error, data };
}
