import DropDown from '../../ui/DropDown';
import { useSettings } from '../../hooks/useSettings';
import { confirmDeletion } from '../../utils/helpers';
import { useState } from 'react';
import { useMyCities } from '../../hooks/useMyCities';

export default function Actions({  filteredCities, setFilteredCities }) {
  const [, setSortDir] = useState('a-z');
  const { enableDeleteConfirmations, sortCriteria } = useSettings();
  const {setMyCities}= useMyCities()

 
  function sort(dir) {
    const sorted = [...filteredCities];

    switch (sortCriteria) {
      case 'City Name':
        dir === 'a-z'
          ? sorted.sort((a, b) => a.name.localeCompare(b.name))
          : sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'Country Name':
        dir === 'a-z'
          ? sorted.sort((a, b) => a.country.localeCompare(b.country))
          : sorted.sort((a, b) => b.country.localeCompare(a.country));
        break;
      case 'Temperature':
        dir === 'a-z'
          ? sorted.sort((a, b) => a.temperature - b.temperature)
          : sorted.sort((a, b) => b.temperature - a.temperature);
        break;
    }
    setMyCities(sorted);
    setFilteredCities(sorted);
  }

  return (
    <DropDown
      options={[
        {
          icon: 'fa-solid fa-trash-can',
          name: 'Remove all cities',
          onclick: () =>
            enableDeleteConfirmations
              ? confirmDeletion('Are you sure you want to remove all cities?', 'Remove', () =>
                  setMyCities([]),
                )
              : setMyCities([]),
        },
        {
          icon: `fa-solid fa-arrow-down-${sortCriteria === 'Temperature' ? '1-9' : 'a-z'}`,
          name: 'Sort ascending',
          onclick: () => {
            sort('a-z');
            setSortDir('a-z');
          },
        },
        {
          icon: `fa-solid fa-arrow-down-${sortCriteria === 'Temperature' ? '9-1' : 'z-a'}`,
          name: 'Sort descending',
          onclick: () => {
            sort('z-a');
            setSortDir('z-a');
          },
        },
      ]}
      toggler={
        <button className='grid w-10 place-content-center rounded-md bg-background-secondary px-3 py-2 focus:bg-settings-active'>
          <i className='fa-solid fa-ellipsis-v text=lg text-text-primary'></i>
        </button>
      }
      type='myCities'
    />
  );
}
