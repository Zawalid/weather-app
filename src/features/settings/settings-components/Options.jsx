import { useEffect, useRef } from 'react';

export function Options({ options, currentOption, onChange }) {
  const optionsRef = useRef(null);

  useEffect(() => {
    const options = optionsRef?.current?.querySelectorAll('#option');

    [...options].forEach((option, i) => {
      if (options[i + 1]?.classList.contains('active')) option.classList.add('border-r-0');
    });
  }, [currentOption]);

  return (
    <div
      className='noScrollbar gap- flex justify-between overflow-auto rounded-2xl bg-settings-inactive p-1'
      ref={optionsRef}
    >
      {options.map((option) => (
        <button
          key={option.name}
          className={`peer flex-1 cursor-pointer border-x border-border p-2 text-center text-sm text-text-tertiary first:border-l-0 last:border-r-0 peer-[.active]:border-l-0 ${
            (option.value ? option.value : option) === currentOption ? 'active' : ''
          }`}
          onClick={() => onChange(option.value)}
          id='option'
        >
          {option.name}
        </button>
      ))}
    </div>
  );
}
