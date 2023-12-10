import DropDown from '../../ui/DropDown';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';

export default function Actions({ myCities, setMyCities }) {
  const [sortDir, setSortDir] = useLocalStorageState('sortDir', 'a-z');

  return (
    <DropDown
      options={[
        {
          icon: 'fa-solid fa-trash-can',
          name: 'Remove all cities',
          onclick: () => setMyCities([]),
        },
        {
          icon: 'fa-solid fa-arrow-down-a-z',
          name: 'Sort ascending',
          onclick: () => {
            if (sortDir !== 'a-z') {
              setMyCities(myCities.toSorted((a, b) => a.name.localeCompare(b.name)));
              setSortDir('a-z');
            }
          },
        },
        {
          icon: 'fa-solid fa-arrow-down-z-a',
          name: 'Sort descending',
          onclick: () => {
            if (sortDir !== 'z-a') {
              setMyCities(myCities.toSorted((a, b) => b.name.localeCompare(a.name)));
              setSortDir('z-a');
            }
          },
        },
      ]}
      toggler={<i className='fa-solid fa-ellipsis-v'></i>}
      type='myCities'
    />
  );
}
