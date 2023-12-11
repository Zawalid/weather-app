import { useQuery } from '@tanstack/react-query';
import { getCoordinates } from '../services/geoCodingApi';
import { useSettings } from './useSettings';

export function useCity(city) {
  const {searchResultsCount} = useSettings();
  const { isLoading, data, error } = useQuery({
    queryKey: ['city', city],
    queryFn: () => getCoordinates(city,searchResultsCount),
    enabled: city?.length > 2,
    staleTime : 0,
  });

  return { isLoading, error, cities: data?.results || [] };
}
