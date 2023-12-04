import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function SearchInput() {
  const [searchParams] = useSearchParams();
  const [city, setCity] = useState(searchParams.get('city') || '');
  const navigate = useNavigate();

  useEffect(() => {
    setCity(searchParams.get('city') ?? '');
  }, [searchParams]);

  function searchCity(city) {
    if (!city) return navigate('weather');
    if (city.length > 2) navigate(`search?city=${city}`);
  }

  return (
    <form
      className='flex-1 pr-3'
      onSubmit={(e) => {
        e.preventDefault();
        searchCity(city);
      }}
    >
      <input
        type='text'
        className='w-full rounded-xl  bg-background-secondary p-2 pl-3 text-sm text-text-primary focus:outline-none'
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
