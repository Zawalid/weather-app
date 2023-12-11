import { useSettings } from '../../../hooks/useSettings';
import DropDown from '../../../ui/DropDown';

export default function SortCriteria() {
  const { sortCriteria, setSortCriteria } = useSettings();
  return (
    <div className='flex items-center   justify-between gap-5'>
      <h4 className='mb-1 text-sm font-medium text-text-tertiary'>Sort Criteria</h4>
      <DropDown
        options={[
          {
            name: 'City Name',
            onclick: () => setSortCriteria('City Name'),
          },
          {
            name: 'Country Name',
            onclick: () => setSortCriteria('Country Name'),
          },
          {
            name: 'Temperature',
            onclick: () => setSortCriteria('Temperature'),
          },
        ]}
        currentOption={sortCriteria}
        className='bg-background-secondary'
        toggler={<span className='text-sm font-medium'>{sortCriteria}</span>}
      />
    </div>
  );
}
