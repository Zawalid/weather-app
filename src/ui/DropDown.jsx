import CustomTippy from './CustomTippy';

export default function DropDown({ options, currentOption = '', className, toggler }) {
  return (
    <CustomTippy
      content={
        <div className='flex min-w-[110px] flex-col gap-1 p-2 '>
          {options.map((option) => (
            <button
              key={option.name}
              className={`rounded-md px-3 py-2 text-center font-medium text-text-primary last:mb-0 hover:bg-settings-active ${
                currentOption === option.name ? 'bg-settings-active' : ''
              }`}
              onClick={option.onclick}
            >
              {option.name.includes('System') ? 'System' : option.name}
            </button>
          ))}
        </div>
      }
      trigger='click'
      interactive={true}
      arrow={false}
      placement='bottom-end'
      className={`rounded-lg bg-background-primary shadow-[-5px_5px_10px_var(--color-shadow)] ${className}`}
    >
      <button className='flex min-w-[110px] items-center justify-center gap-2 rounded-lg bg-settings-active px-3 py-2 text-text-primary'>
        {toggler}
      </button>
    </CustomTippy>
  );
}
