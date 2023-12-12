import { useSettings } from '@/hooks/useSettings';
import Theme from './settings-components/Theme';
import Language from './settings-components/Language';
import Units from './Units';
import FontSize from './settings-components/FontSize';
import SwitchSetting from './settings-components/SwitchSetting';
import DaysForecast from './settings-components/DaysForecast';
import HoursForecast from './settings-components/HoursForecast';
import CitiesDropDown from './settings-components/CitiesDropDown';
import Button from '@/ui/Button';
import { toast } from 'sonner';
import SortCriteria from './settings-components/SortCriteria';
import SearchResultsCount from './settings-components/SearchResultsCount';
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
    isChanged,
    resetAllSettings,
    enableSearchHistory,
    setEnableSearchHistory,
    searchHistory,
    clearSearchHistory,
    enableDeleteConfirmations,
    setEnableDeleteConfirmations,
  } = useSettings();

  return (
    <div id='settings' className='flex flex-col gap-5'>
      {/* Units */}
      <div className='settings_section space-y-3'>
        <h2 id='units' className='text-lg font-semibold text-text-primary '>
          Units & Measures
        </h2>
        <Units />
      </div>

      {/* Weather */}
      <div className='settings_section space-y-3'>
        <h2 id='weather' className=' text-lg font-semibold text-text-primary '>
          Weather Data
        </h2>
        <div className='flex flex-col gap-5 rounded-2xl bg-background-secondary p-5'>
          <DaysForecast />
          <HoursForecast />
        </div>
      </div>

      {/* Location & Time */}
      <div className='settings_section space-y-3'>
        <h2 id='location' className=' text-lg font-semibold text-text-primary '>
          Time & Location
        </h2>
        <div className='flex flex-col gap-5 rounded-2xl bg-background-secondary p-5'>
          <SwitchSetting
            checked={is12HourFormat}
            onChange={() => setIs12HourFormat(!is12HourFormat)}
            title='12-Hour Time'
          />
          <SwitchSetting
            checked={isLocationAccess}
            onChange={() => setIsLocationAccess(!isLocationAccess)}
            title='Location'
            description='Get weather of your location'
          />
          {/* Disable if location access is granted */}
          <div
            className={`flex items-center justify-between gap-5  ${
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

      {/* Display*/}
      <div className='settings_section space-y-3'>
        <h2 id='display' className=' text-lg font-semibold text-text-primary '>
          Display & Theme{' '}
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
              toast.warning('Please reload the page to apply changes.', {
                action: {
                  label: 'Reload',
                  onClick: () => window.location.reload(),
                },
                actionButtonStyle: {
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  boxShadow: '-1px 1px 1px 0px #0303033d',
                  border: 'none',
                  fontWeight: 'medium',
                },
              });
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

      {/* Preferences */}
      <div className='settings_section space-y-3'>
        <h2 id='preferences' className=' text-lg font-semibold text-text-primary '>
          Preferences
        </h2>
        <div className=' flex flex-col gap-5 rounded-2xl bg-background-secondary p-5'>
          <SwitchSetting
            checked={enableDeleteConfirmations}
            onChange={() => setEnableDeleteConfirmations(!enableDeleteConfirmations)}
            title='Deletion Confirmation'
            description='Enable confirmation prompts for deletions.'
          />
          <SortCriteria />
          <SearchResultsCount />

          <div className='flex flex-col gap-3'>
            <SwitchSetting
              title='Search History'
              description='Save your search history'
              checked={enableSearchHistory}
              onChange={() => setEnableSearchHistory(!enableSearchHistory)}
            />
            <div
              className={`ml-5  flex items-center justify-between
              ${!enableSearchHistory || searchHistory.length === 0 ? 'disabled' : ''}
              `}
            >
              <h4 className='1 text-sm font-medium text-text-tertiary'>Clear Search History</h4>
              <button
                className='disabled:hover:red-600 w-[110px] rounded-lg bg-red-600 px-5 py-2  text-sm font-semibold  text-white hover:bg-red-700
                '
                onClick={clearSearchHistory}
                disabled={!enableSearchHistory || searchHistory.length === 0}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      <Button className='w-full' disabled={!isChanged} onClick={resetAllSettings}>
        Reset Settings
      </Button>
    </div>
  );
}


