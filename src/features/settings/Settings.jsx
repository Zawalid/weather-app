import Switch from '../../ui/Switch';
import { useSettings } from '@/hooks/useSettings';
import Theme from './settings-components/Theme';
import Language from './settings-components/Language';
import Units from './Units';

export default function Settings() {
  const { is12HourFormat, setIs12HourFormat, isLocationAccess, setIsLocationAccess } =
    useSettings();

  return (
    <div className='flex flex-col gap-5'>
      {/* Units */}
      <h2 className='text-lg font-semibold text-text-primary '>Units</h2>
      <Units />
      {/* General */}
      <h2 className='text-lg font-semibold text-text-primary '>General</h2>
      <div className='flex flex-col gap-5 rounded-2xl bg-background-secondary p-5'>
        <div className='flex items-center justify-between gap-5 border-b border-border pb-3 '>
          <h4 className='mb-1 text-sm font-medium text-text-tertiary'>12-Hour Time</h4>
          <Switch checked={is12HourFormat} onChange={() => setIs12HourFormat(!is12HourFormat)} />
        </div>

        <div className='flex items-center justify-between gap-5 '>
          <div>
            <h4 className='mb-1 text-sm font-medium text-text-tertiary'>Location</h4>
            <p className='text-xs text-text-secondary'>Get weather of your location</p>
          </div>
          <Switch
            checked={isLocationAccess}
            onChange={() => setIsLocationAccess(!isLocationAccess)}
          />
        </div>
      </div>
      {/* Appearance & Language  */}
      <h2 className='text-lg font-semibold text-text-primary '>Appearance & Language</h2>
      <div className='flex flex-col gap-5 rounded-2xl bg-background-secondary p-5'>
        <Theme />
        <Language />
      </div>
      {/* Notifications */}
      <h2 className='text-lg font-semibold text-text-primary '>Notifications</h2>
      <div className='flex items-center justify-between gap-5 rounded-2xl bg-background-secondary p-5'>
        <div>
          <h4 className='mb-1 text-sm font-medium text-text-tertiary'>Notifications</h4>
          <p className='text-xs text-text-secondary'>Be aware of the weather</p>
        </div>
        <Switch />
      </div>
    </div>
  );
}

/*
 Todo :
       Add setting to change the number of hours in the today forecast
       Add setting to change the number of days in the daily forecast
       Add setting to change the theme
       Add setting to change the language (Maybe)
       

*/
