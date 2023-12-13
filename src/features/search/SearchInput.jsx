import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export default function SearchInput() {
  const [searchParams] = useSearchParams();
  const [city, setCity] = useState(searchParams.get('city') || '');
  const currentTab = useLocation().pathname.split('/')[2];
  const navigate = useNavigate();

  useEffect(() => {
    setCity(searchParams.get('city') ?? '');
  }, [searchParams]);

  useEffect(() => {
    if (currentTab === 'search' && !city) navigate('/app');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function searchCity(city) {
    if (!city) return currentTab === 'search' ? navigate('/app') : null;
    if (city.length > 2) navigate(`search?city=${city}`);
  }

  return (
    <form
      className='flex-1'
      onSubmit={(e) => {
        e.preventDefault();
        searchCity(city);
      }}
    >
      <input
        type='text'
        className='w-full rounded-xl bg-background-secondary pl-3 p-2 lg:p-3 text-sm text-text-primary focus:outline-none'
        placeholder='Search for cities'
        value={city}
        onChange={(e) => {
          const city = e.target.value;
          setCity(city);
          searchCity(city);
        }}
      />
    </form>
  );
}
