import Cities from '../cities/Cities';

export default function Search() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='space-y-3'>
        <h3 className='text-sm font-medium text-text-secondary '>LATEST SEARCHES</h3>
        <Cities type={1} />
      </div>
      <div className='space-y-3'>
        <h3 className='text-sm font-medium text-text-secondary '>MORE SUGGESTIONS</h3>
        <Cities type={2} />
      </div>
    </div>
  );
}
