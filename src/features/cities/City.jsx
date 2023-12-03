import Sun from '@/assets/sun.png';

export default function City({ name, time, temperature, type }) {
  return (
    <div
      className={`noScrollbar flex cursor-pointer items-center justify-between  gap-5 overflow-auto rounded-xl border-primary bg-background-secondary p-3 transition-colors duration-300 hover:border  hover:bg-transparent ${
        type === 2 ? 'min-w-[150px] flex-col gap-3 px-5' : type === 3 ? 'py-1 ' : ''
      } `}
      id='city'
    >
      <img src={Sun} alt='sun' className={type === 3 ? 'w-16' : 'w-20'} />
      <div className='flex-1'>
        <div className='flex items-center gap-2'>
          <h3 className={`font-semibold text-text-primary ${type === 3 ? 'text-xl' : 'text-2xl'}`}>
            {name}
          </h3>
          {type === 1 && <i className='fa-solid fa-location-arrow text-lg text-text-tertiary'></i>}
        </div>
        {type === 1 || (type === 3 && <p className='mt-2 text-sm text-text-secondary'>{time}</p>)}
      </div>
      <span className={` font-medium text-text-primary ${type === 3 ? 'text-3xl' : 'text-2xl'} `}>
        {temperature}°
      </span>
    </div>
  );
}
