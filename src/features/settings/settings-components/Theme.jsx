import DropDown from '@/ui/DropDown';
import { useSettings } from '@/hooks/useSettings';

export default function Theme() {
  const { theme, setTheme, autoDayNightMode } = useSettings();
  return (
    <div
      className={`flex items-center transition-opacity duration-300  justify-between gap-5 ${
        autoDayNightMode ? 'disabled' : ''
      }`}
    >
      <h4 className='mb-1 text-sm font-medium text-text-tertiary'>Theme</h4>
      <DropDown
        options={[
          {
            name: 'Dark',
            onclick: () => setTheme('Dark'),
          },
          {
            name: 'Light',
            onclick: () => setTheme('Light'),
          },
          {
            name: 'System',
            onclick: () => setTheme('System'),
          },
        ]}
        currentOption={theme}
        className='bg-background-secondary'
        toggler={
          <>
            <span className='text-sm font-medium'>
              {theme.includes('System') ? 'System' : theme}
            </span>
          </>
        }
        disabled={autoDayNightMode}
      />
    </div>
  );
}
