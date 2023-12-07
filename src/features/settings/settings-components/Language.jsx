import DropDown from '../../../ui/DropDown';

export default function Language() {
  return (
    <div className='flex items-center justify-between gap-5 '>
      <h4 className='mb-1 text-sm font-medium text-text-tertiary'>Language</h4>
      <DropDown
        className='bg-background-secondary'
        toggler={
          <button className='flex items-center gap-3 rounded-lg bg-settings-active px-3 py-2 text-text-primary'>
            <img src='https://flagsapi.com/US/flat/64.png' alt='English' className='w-5' />
            <span className='text-sm font-medium'>English</span>
          </button>
        }
      >
        <Lang language={{ name: 'English', code: 'US' }} />
        <Lang language={{ name: 'Arabic', code: 'MA' }} />
        <Lang language={{ name: 'French', code: 'FR' }} />
      </DropDown>
    </div>
  );
}

function Lang({ language, onChange }) {
  return (
    <button
      className='flex items-center gap-3 rounded-md px-3 py-2 text-text-primary last:mb-0 hover:bg-settings-active hover:text-text-primary'
      onClick={() => onChange({ name: language.name, code: language.code })}
    >
      <img
        src={`https://flagsapi.com/${language.code}/flat/64.png`}
        alt='English'
        className='w-5'
      />
      <span className='text-sm font-medium'>{language.name}</span>
    </button>
  );
}
