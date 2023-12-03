export function Option({ option, currentOption, setCurrentOption }) {
  return (
    <button
      className={`peer flex-1 cursor-pointer border-x border-border p-2 text-center text-sm text-text-tertiary first:border-l-0 last:border-r-0 peer-[.active]:border-l-0 ${
        option === currentOption ? 'active' : ''
      }`}
      onClick={() => setCurrentOption(option)}
      id='option'
    >
      {option}
    </button>
  );
}
