export default function NoResults() {
  return (
    <div className='flex h-full flex-col gap-3 items-center justify-center'>
      <div className='text-4xl sm:text-5xl font-semibold text-text-primary'>No Results</div>
      <div className='text-sm font-medium text-text-secondary'>Try searching for another city</div>
    </div>
  );
}
