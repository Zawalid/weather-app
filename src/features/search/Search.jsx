import { useOutletContext, useSearchParams } from 'react-router-dom';
import Cities from '../mycities/Cities';
import { useCity } from '@/hooks/useCity';
import Loader from '@/ui/Loader';
import ErrorMessage from '../../ui/ErrorMessage';

export default function Search() {
  const { setMyCities } = useOutletContext();
  const [searchParams] = useSearchParams();
  const { isLoading, error, cities } = useCity(searchParams.get('city'));

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage type='internetError' />;
  if (!cities.length) return <ErrorMessage type='noResults' />;

  return (
    <div className='flex flex-col gap-5'>
      <div className='space-y-3'>
        <h3 className='text-sm font-medium text-text-secondary '>RESULTS</h3>
        <Cities type={1} cities={cities} onAdd={(city) => setMyCities((prev) => [...prev, city])} />
      </div>
      <div className='space-y-3'>
        <h3 className='text-sm font-medium text-text-secondary '>LATEST SEARCHES</h3>
        <Cities type={2} />
      </div>
    </div>
  );
}
