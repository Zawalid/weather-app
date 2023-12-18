export default function Plan() {
  return (
    <div className='disabled relative rounded-2xl bg-background-secondary p-5'>
      <div className='absolute right-0 top-0 grid place-content-center bg-primary py-1 pl-5 pr-3 '>
        <span className='text-xs font-medium text-white'>Coming soon</span>
        <span className='absolute border-[12px] border-[transparent_transparent_transparent_var(--color-background-secondary)]'></span>
      </div>
      <h2 className='border-b border-border pb-3 text-2xl font-bold text-text-primary sm:text-3xl'>
        Advanced
      </h2>
      <div className='my-4'>
        <h2 className='font-semibold text-text-primary sm:text-lg '>Get new experience</h2>
        <ul className='mt-5 pl-3'>
          <li className='list-disc text-xs text-text-secondary'>Ad free</li>
          <li className='list-disc text-xs text-text-secondary'>Health activities overview</li>
          <li className='list-disc text-xs text-text-secondary'>Severe weather Notifications</li>
        </ul>
      </div>
      <button className='mt-5 w-full rounded-3xl bg-settings-active py-3 transition-colors duration-500 hover:bg-settings-inactive '>
        <span className='text-3xl font-bold text-text-primary sm:text-4xl'>$5.99</span>
        <span className='text-xs font-medium text-text-secondary sm:text-sm'>/month</span>
      </button>
    </div>
  );
}
