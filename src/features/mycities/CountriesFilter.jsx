import { useEffect, useState } from 'react';
import CustomTippy from '../../ui/CustomTippy';

export default function CountriesFilter({
  countries,
  selectedCountries,
  onToggle,
  selectAll,
  unselectAll,
}) {
  return (
    <CustomTippy
      content={
        <div className='flex min-w-[110px] flex-col gap-1 p-2 '>
          {countries.map((country) => (
            <Country
              key={country}
              country={country}
              onToggle={onToggle}
              selected={selectedCountries.includes(country)}
            />
          ))}
          <div className='flex gap-1'>
            <button
              className='mt-2 flex items-center justify-center gap-3 rounded-md bg-settings-inactive px-3 py-2 font-medium hover:bg-background-secondary'
              onClick={selectAll}
            >
              <i className='fa-solid fa-check-double'></i>
              Select
            </button>
            <button
              className='mt-2 flex items-center justify-center gap-3 rounded-md bg-settings-inactive px-3 py-2 font-medium hover:bg-background-secondary'
              onClick={unselectAll}
            >
              <i className='fa-solid fa-square-xmark'></i>
              Unselect
            </button>
          </div>
        </div>
      }
      trigger='click'
      interactive={true}
      arrow={false}
      placement='bottom-end'
      className='rounded-lg bg-background-primary shadow-[-5px_5px_10px_var(--color-shadow)]'
    >
      <button className='grid place-content-center rounded-md bg-background-secondary px-3 py-2 focus:bg-settings-active'>
        <i className='fa-solid fa-filter text=lg text-text-primary'></i>
      </button>
    </CustomTippy>
  );
}

function Country({ country, onToggle, selected }) {
  const [checked, setChecked] = useState(true);
  function check() {
    setChecked(!checked);
    onToggle(country);
  }
  useEffect(() => setChecked(selected), [selected]);

  return (
    <button
      className={`flex items-center gap-3  rounded-md px-3 py-2 text-center hover:bg-settings-active
      ${selected ? 'bg-settings-active' : ''}
      `}
      key={country}
      onClick={check}
    >
      <input
        type='checkbox'
        className='h-4 w-4 accent-[var(--color-primary)]'
        checked={checked}
        onChange={check}
      />
      <span
        className='font-medium text-text-primary  
        '
      >
        {country}
      </span>
    </button>
  );
}
