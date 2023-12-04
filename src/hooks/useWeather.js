import { useQuery } from '@tanstack/react-query';
import { getWeatherData } from '../services/apiWeather';

export function useWeather(lat, long, timezone, days) {
  const { isLoading, data, error } = useQuery({
    queryKey: ['city', lat, long, timezone],
    queryFn: () => getWeatherData(lat, long, timezone, days),
    enabled: Boolean(lat && long && timezone),
  });

  return { isLoading, error, data };
}
