import Sun from '@/assets/sun.png';

export default function City({ city, isCurrentCity, type, onClick }) {
  const { name, country, country_code, time, temperature } = city;

  return (
    <div
      className={`noScrollbar flex cursor-pointer items-center justify-between  gap-5 overflow-auto rounded-xl border-primary bg-background-secondary p-3 transition-colors duration-300 hover:border  hover:bg-transparent ${
        type === 2 ? 'min-w-[150px] flex-col gap-3 px-5' : type === 3 ? 'py-1' : ''
      } 
      ${isCurrentCity ? 'active' : ''}
      `}
      id='city'
      onClick={onClick}
    >
      <img src={Sun} alt='sun' className={type === 3 ? 'w-16' : 'w-20'} />
      <div className='flex-1'>
        <div className='flex items-center gap-2'>
          <h3 className={`font-semibold text-text-primary ${type === 3 ? 'text-xl' : 'text-2xl'}`}>
            {name}
          </h3>
        </div>
        {[1, 3].includes(type) && (
          <p className='mt-1 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:gap-2'>
            <span className='flex items-center gap-2 text-text-tertiary '>
              {country}{' '}
              <img
                src={`https://flagsapi.com/${country_code}/flat/64.png`}
                alt={country_code}
                className='w-5'
              />
            </span>
            <span className=' text-xs text-text-secondary sm:border-l  sm:pl-2  sm:text-sm'>
              {time}
            </span>
          </p>
        )}
      </div>
      <span className={` font-medium text-text-primary ${type === 3 ? 'text-3xl' : 'text-2xl'} `}>
        {temperature}°
      </span>
    </div>
  );
}
