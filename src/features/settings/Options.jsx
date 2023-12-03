import { useEffect, useRef, useState } from 'react';
import { Option } from './Option';

export function Options({ options }) {
  const [currentOption, setCurrentOption] = useState(options[1]);
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
        <Option
          key={option}
          option={option}
          currentOption={currentOption}
          setCurrentOption={setCurrentOption}
        />
      ))}
    </div>
  );
}
