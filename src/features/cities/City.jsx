import Sun from '@/assets/sun.png';

export default function City({ name, time, temperature, type }) {
  return (
    <div
      className={`noScrollbar flex cursor-pointer items-center justify-between  overflow-auto rounded-xl border-primary bg-background-secondary p-3 transition-colors duration-300 hover:border  hover:bg-transparent ${
        type === 2 ? 'min-w-[150px] flex-col gap-3 px-5' : 'gap-5'
      } `}
      id='city'
    >
      <img src={Sun} alt='sun' className='w-20' />
      <div className='flex-1'>
        <div className='flex items-center gap-2'>
          <h3 className='text-2xl font-semibold text-text-primary'>{name}</h3>
          {type == 1 && <i className='fa-solid fa-location-arrow text-lg text-text-tertiary'></i>}
        </div>
        {type == 1 && <p className='mt-2 text-sm text-text-secondary'>{time}</p>}
      </div>
      <span className='text-2xl font-medium text-text-primary'>{temperature}°</span>
    </div>
  );
}
