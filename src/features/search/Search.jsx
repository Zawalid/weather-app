import { useSearchParams } from 'react-router-dom';
import Cities from '../cities/Cities';
import { useCity } from '@/hooks/useCity';
import NoResults from '@/ui/NoResults';
import Loader from '@/ui/Loader';

export default function Search() {
  const [searchParams] = useSearchParams();
  

  const { isLoading, error, cities } = useCity(searchParams.get('city'));

  if (isLoading)
    return (
      <div className='grid h-full'>
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  if (!cities.length) return <NoResults />;
  return (
    <div className='flex flex-col gap-5'>
      <div className='space-y-3'>
        <h3 className='text-sm font-medium text-text-secondary '>RESULTS</h3>
        <Cities type={1} cities={cities} />
      </div>
      <div className='space-y-3'>
        <h3 className='text-sm font-medium text-text-secondary '>LATEST SEARCHES</h3>
        <Cities type={2} />
      </div>
    </div>
  );
}
