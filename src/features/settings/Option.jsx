export function Option({ option }) {
  return (
    <div className='flex-1 cursor-pointer rounded-xl bg-settings-active p-2 text-center text-sm font-medium text-text-primary'>
      {option}
    </div>
  );
}
