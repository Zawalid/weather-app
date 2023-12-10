import { useSettings } from '@/hooks/useSettings';
import Theme from './settings-components/Theme';
import Language from './settings-components/Language';
import Units from './Units';
import FontSize from './settings-components/FontSize';
import SwitchSetting from './settings-components/SwitchSetting';
import DaysForecast from './settings-components/DaysForecast';
import HoursForecast from './settings-components/HoursForecast';
import CitiesDropDown from './settings-components/CitiesDropDown';

export default function Settings() {
  const {
    is12HourFormat,
    setIs12HourFormat,
    isLocationAccess,
    setIsLocationAccess,
    defaultLocation,
    setDefaultLocation,
    enableAnimations,
    setEnableAnimations,
    autoDayNightMode,
    setAutoDayNightMode,
  } = useSettings();

  return (
    <div id='settings' className='flex flex-col gap-5'>
      {/* Units */}
      <div className='settings_section space-y-3'>
        <h2 id='units' className='text-lg font-semibold text-text-primary '>
          Units
        </h2>
        <Units />
      </div>

      {/* General */}
      <div className='settings_section space-y-3'>
        <h2 id='general' className=' text-lg font-semibold text-text-primary '>
          General
        </h2>
        <div className='flex flex-col gap-5 rounded-2xl bg-background-secondary p-5'>
          <SwitchSetting
            checked={is12HourFormat}
            onChange={() => setIs12HourFormat(!is12HourFormat)}
            title='12-Hour Time'
          />
          <DaysForecast />
          <HoursForecast />

          <SwitchSetting
            checked={isLocationAccess}
            onChange={() => setIsLocationAccess(!isLocationAccess)}
            title='Location'
            description='Get weather of your location'
          />
          {/* Disable if location access is granted */}
          <div
            className={`flex items-center justify-between gap-5 transition-opacity duration-300 ${
              isLocationAccess ? 'disabled' : ''
            }`}
          >
            <div>
              <h4 className='mb-1 text-sm font-medium text-text-tertiary'>Default Location</h4>
              <p className='text-xs text-text-secondary'>Set the default location to get weather</p>
            </div>
            <CitiesDropDown currentCity={defaultLocation} onChange={setDefaultLocation} />
          </div>
        </div>
      </div>

      {/* Appearance & Language  */}

      <div className='settings_section space-y-3'>
        <h2 id='appearance' className=' text-lg font-semibold text-text-primary '>
          Appearance 
        </h2>
        <div className=' flex flex-col gap-5 rounded-2xl bg-background-secondary p-5'>
          <Theme />
          <FontSize />
          <SwitchSetting
            title='Enable Animations'
            description='Enable animations for a better experience'
            checked={enableAnimations}
            onChange={() => {
              setEnableAnimations(!enableAnimations);
              window.location.reload();
            }}
          />
          <SwitchSetting
            title='Auto Day/Night Mode'
            description='Automatically switch between light and dark mode based on time of day'
            checked={autoDayNightMode}
            onChange={() => setAutoDayNightMode(!autoDayNightMode)}
          />
          <Language />
        </div>
      </div>

      {/* Notifications */}
      <div className='settings_section space-y-3'>
        <h2 id='notifications' className=' text-lg font-semibold text-text-primary '>
          Notifications
        </h2>
        <div className='disabled flex flex-col gap-5 rounded-2xl bg-background-secondary p-5'>
          <SwitchSetting title='Notifications' description='Be aware of the weather' />
        </div>
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
       

  ? Features :
      Add a sidebar with easy access to the settings categories
      Add an observer to change the sidebar active link based on the current category
      


*/
