import { useSettings } from '../../hooks/useSettings';
import DropDown from '../../ui/DropDown';

export default function SearchResultsCount() {
  const { searchResultsCount, setSearchResultsCount } = useSettings();
  return (
    <div className='flex items-center justify-between gap-5'>
      <DropDown
        options={[
          { name: '5', onclick: () => setSearchResultsCount(5) },
          { name: '10', onclick: () => setSearchResultsCount(10) },
          { name: '15', onclick: () => setSearchResultsCount(15) },
          { name: '20', onclick: () => setSearchResultsCount(20) },
        ]}
        currentOption={searchResultsCount}
        className='bg-background-secondary'
        toggler={
          <>
            <span className='text-sm font-medium'>Results Count</span>
            <span className='text-sm font-medium'>{searchResultsCount}</span>
          </>
        }
      />
    </div>
  );
}
