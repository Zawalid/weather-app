export default function Plan() {
  return (
    <div className='rounded-2xl bg-background-secondary p-5'>
      <h2 className='border-b border-border pb-3 text-3xl font-bold text-text-primary'>
        Advanced
      </h2>
      <div className='my-4'>
        <h2 className='text-lg font-semibold text-text-primary '>Get new experience</h2>
        <ul className='mt-5 pl-3'>
          <li className='list-disc text-xs text-text-secondary'>Ad free</li>
          <li className='list-disc text-xs text-text-secondary'>Health activities overview</li>
          <li className='list-disc text-xs text-text-secondary'>Severe weather Notifications</li>
        </ul>
      </div>
      <button className='mt-5 w-full rounded-3xl bg-settings-active py-3 transition-colors duration-500 hover:bg-settings-inactive '>
        <span className='text-4xl font-bold text-text-primary'>$5.99</span>
        <span className='text-sm font-medium text-text-secondary'>/month</span>
      </button>
    </div>
  );
}
