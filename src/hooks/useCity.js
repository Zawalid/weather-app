import { useQuery } from '@tanstack/react-query';
import { getCoordinates } from '../services/geoCodingApi';

export function useCity(city) {
  const { isLoading, data, error } = useQuery({
    queryKey: ['city', city],
    queryFn: () => getCoordinates(city),
    enabled: city?.length > 2,
  });

  return { isLoading, error, cities: data?.results || [] };
}
