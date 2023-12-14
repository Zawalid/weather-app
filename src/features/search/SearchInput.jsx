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

  function searchCity(city) {
    if (!city && currentTab === 'search') return navigate('search', { replace: true });
    if (city.length > 2) navigate(`search?city=${city}`, { replace: true });
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
        className='w-full rounded-xl bg-background-secondary p-2 pl-3 text-sm text-text-primary focus:outline-none lg:p-3'
        placeholder='Search for cities'
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          searchCity(e.target.value);
        }}
        onFocus={() => currentTab !== 'search' && navigate('search')}
      />
    </form>
  );
}
