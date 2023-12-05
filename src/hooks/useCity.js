import { useQuery } from '@tanstack/react-query';
import { getCoordinates } from '../services/apiGeoCoding';

export function useCity(city) {
  const { isLoading, data, error } = useQuery({
    queryKey: ['city', city],
    queryFn: () => getCoordinates(city),
    enabled: city.length > 2,
    staleTime: Infinity,
  });

  return { isLoading, error, cities: data?.results || [] };
}
