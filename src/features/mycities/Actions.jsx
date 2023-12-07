import CustomTippy from '../../ui/CustomTippy';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';

export default function Actions({ myCities, setMyCities }) {
  const [sortDir, setSortDir] = useLocalStorageState('sortDir', 'a-z');

  return (
    <CustomTippy
      content={
        <div className='flex w-fit flex-col gap-5 '>
          <button
            className='flex items-center gap-3 text-text-secondary hover:text-text-primary'
            onClick={() => setMyCities([])}
          >
            <i className='fa-solid fa-trash-can cursor-pointer text-lg '></i>
            <span className='text-sm font-medium'>Remove all cities</span>
          </button>

          <button
            className={`flex items-center gap-3 ${
              sortDir === 'a-z'
                ? 'text-text-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => {
              if (sortDir !== 'a-z') {
                setMyCities(myCities.toSorted((a, b) => a.name.localeCompare(b.name)));
                setSortDir('a-z');
              }
            }}
          >
            <i className='fa-solid fa-arrow-down-a-z cursor-pointer text-lg'></i>
            <span className='text-sm font-medium'>Sort ascending </span>
          </button>

          <button
            className={`flex items-center gap-3 ${
              sortDir === 'z-a'
                ? 'text-text-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => {
              if (sortDir !== 'z-a') {
                setMyCities(myCities.toSorted((a, b) => b.name.localeCompare(a.name)));
                setSortDir('z-a');
              }
            }}
          >
            <i className='fa-solid fa-arrow-down-z-a cursor-pointer text-lg'></i>
            <span className='text-sm font-medium'>Sort descending </span>
          </button>
        </div>
      }
      trigger='click'
      interactive={true}
      arrow={false}
      placement='bottom-end'
      maxWidth='auto'
      className='rounded-lg bg-background-primary p-1 shadow-[-5px_5px_10px_var(--color-shadow)]'
    >
      <button className='grid h-6 w-6 place-content-center rounded-full border text-sm text-text-tertiary  duration-100 hover:border-none hover:bg-primary-hover hover:text-white'>
        <i className='fa-solid fa-ellipsis-v'></i>
      </button>
    </CustomTippy>
  );
}
