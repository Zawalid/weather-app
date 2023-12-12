import DropDown from '../../ui/DropDown';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import { useSettings } from '../../hooks/useSettings';
import { confirmDeletion } from '../../utils/helpers';

export default function Actions({ myCities, setMyCities }) {
  const [sortDir, setSortDir] = useLocalStorageState('sortDir', 'a-z');
  const { enableDeleteConfirmations, sortCriteria } = useSettings();

  function sort(dir) {
    switch (sortCriteria) {
      case 'City Name':
        setMyCities(
          dir === 'a-z'
            ? myCities.toSorted((a, b) => a.name.localeCompare(b.name))
            : myCities.toSorted((a, b) => b.name.localeCompare(a.name)),
        );
        break;
      case 'Country Name':
        setMyCities(
          dir === 'a-z'
            ? myCities.toSorted((a, b) => a.country.localeCompare(b.country))
            : myCities.toSorted((a, b) => b.country.localeCompare(a.country)),
        );
        break;
      case 'Temperature':
        setMyCities(
          dir === 'a-z'
            ? myCities.toSorted((a, b) => a.temperature - b.temperature)
            : myCities.toSorted((a, b) => b.temperature - a.temperature),
        );
        break;
    }
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
        <button className='grid place-content-center rounded-md bg-background-secondary px-3 py-2 focus:bg-settings-active'>
          <i className='fa-solid fa-ellipsis-v text=lg text-text-primary'></i>
        </button>
      }
      type='myCities'
    />
  );
}
