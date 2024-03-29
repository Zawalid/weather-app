import {  useSearchParams } from 'react-router-dom';
import Cities from '../mycities/Cities';
import { useCity } from '@/hooks/useCity';
import Loader from '@/ui/Loader';
import ErrorMessage from '../../ui/ErrorMessage';
import { useSettings } from '../../hooks/useSettings';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import ViewController from '../../ui/ViewController';
import { throwError } from '../../utils/helpers';

export default function Search() {
  const [citiesView, setCitiesView] = useLocalStorageState('searchedCitiesView', 1);
  const [searchParams] = useSearchParams();
  const cityParam = searchParams.get('city');
  const { isLoading, error, cities } = useCity(cityParam);
  const { searchHistory, enableSearchHistory } = useSettings();

  if (isLoading) return <Loader />;
  if (error) return throwError(error, 'generalError');
  if (!cities.length && cityParam) return <ErrorMessage type='noResults' />;
  if(!cityParam && !searchHistory.length) return <ErrorMessage type='noHistory' />

  return (
    <div className='space-y-5'>
      <div className='flex items-center justify-between'>
        <h3 className='text-sm font-medium text-text-secondary '>
          {cityParam ? 'Results' : 'Recent Searches'}
        </h3>
        <ViewController view={citiesView} setView={setCitiesView} />
      </div>
      {cityParam ? (
        <Cities
          type={citiesView}
          cities={cities}
          source='search'
        />
      ) : (
        enableSearchHistory && <Cities cities={searchHistory} source='searchHistory' type={citiesView} />
      )}
    </div>
  );
}
