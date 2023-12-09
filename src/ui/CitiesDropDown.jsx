import { useState } from 'react';
import CustomTippy from './CustomTippy';
import { useCity } from '@/hooks/useCity';

const popularCities = [
  {
    id: 2643743,
    name: 'London',
    latitude: 51.50853,
    longitude: -0.12574,
    elevation: 25,
    feature_code: 'PPLC',
    country_code: 'GB',
    admin1_id: 6269131,
    admin2_id: 2648110,
    timezone: 'Europe/London',
    population: 7556900,
    country_id: 2635167,
    country: 'United Kingdom',
    admin1: 'England',
    admin2: 'Greater London',
  },
  {
    id: 5128581,
    name: 'New York',
    latitude: 40.71427,
    longitude: -74.00597,
    elevation: 10,
    feature_code: 'PPL',
    country_code: 'US',
    admin1_id: 5128638,
    timezone: 'America/New_York',
    population: 8175133,
    country_id: 6252001,
    country: 'United States',
    admin1: 'New York',
  },
  {
    id: 1850147,
    name: 'Tokyo',
    latitude: 35.6895,
    longitude: 139.69171,
    elevation: 44,
    feature_code: 'PPLC',
    country_code: 'JP',
    admin1_id: 1850144,
    timezone: 'Asia/Tokyo',
    population: 8336599,
    country_id: 1861060,
    country: 'Japan',
    admin1: 'Tokyo',
  },
  {
    id: 2988507,
    name: 'Paris',
    latitude: 48.85341,
    longitude: 2.3488,
    elevation: 42,
    feature_code: 'PPLC',
    country_code: 'FR',
    admin1_id: 3012874,
    admin2_id: 2968815,
    timezone: 'Europe/Paris',
    population: 2138551,
    country_id: 3017382,
    country: 'France',
    admin1: 'Île-de-France',
    admin2: 'Paris',
  },
  {
    id: 1816670,
    name: 'Beijing',
    latitude: 39.9075,
    longitude: 116.39723,
    elevation: 49,
    feature_code: 'PPLC',
    country_code: 'CN',
    admin1_id: 2038349,
    admin2_id: 11876380,
    timezone: 'Asia/Shanghai',
    population: 11716620,
    country_id: 1814991,
    country: 'China',
    admin1: 'Beijing',
    admin2: 'Beijing',
  },
];

export default function CitiesDropDown({ className, currentCity, onChange }) {
  const [searchedCity, setSearchedCity] = useState('');

  const { isLoading, error, cities } = useCity(searchedCity);

  function formatCityName(city) {
    if (!city) return;
    return ` ${city.name},  ${
      city.country.includes(' ')
        ? city.country.split(' ')[0].at(0) + city.country.split(' ')[1].at(0)
        : city.country
    }`;
  }

  return (
    <CustomTippy
      content={
        <div
          className={` min-h-[258px] min-w-[110px] gap-1  p-2 ${
            isLoading ? 'grid grid-rows-[auto_1fr] ' : 'flex flex-col'
          } `}
        >
          <div className='mb-2 flex items-center gap-1'>
            <input
              type='text'
              className=' w-full justify-self-start rounded-md bg-background-secondary p-2 pl-3 text-sm text-text-primary focus:outline-none'
              placeholder='Search'
              value={searchedCity}
              onChange={(e) => setSearchedCity(e.target.value)}
            />
            <CustomTippy content='None' className='bg-settings-active p-1'>
              <button onClick={() => onChange(null)}>
                <i className='fa-solid fa-ban text-lg'></i>
              </button>
            </CustomTippy>
          </div>
          {isLoading ? (
            <i className='fa-solid  fa-spinner m-auto  animate-spin text-lg text-text-secondary'></i>
          ) : (
            (cities.length === 0 ? popularCities : cities).map((city) => {
              return (
                <button
                  key={city.id}
                  className={`rounded-md px-3 py-2 text-center font-medium text-text-primary last:mb-0 hover:bg-settings-active  ${
                    city.id === currentCity?.id ? 'bg-settings-active' : ''
                  } `}
                  onClick={() => onChange(city)}
                >
                  {formatCityName(city)}
                </button>
              );
            })
          )}
        </div>
      }
      trigger='click'
      interactive={true}
      arrow={false}
      placement='bottom-end'
      className={`rounded-lg bg-background-primary shadow-[-5px_5px_10px_var(--color-shadow)] ${className}`}
    >
      <button className='flex min-w-[110px] items-center justify-center gap-2 rounded-lg bg-settings-active px-3 py-2 text-text-primary'>
        <span className='text-sm font-medium'>
          {currentCity ? formatCityName(currentCity) : 'None'}
        </span>
      </button>
    </CustomTippy>
  );
}
