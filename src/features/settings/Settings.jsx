import Switch from '../../ui/Switch';
import { Options } from './Options';

export default function Settings() {
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='text-lg font-semibold text-text-primary '>Units</h2>
      <div className='flex flex-col gap-5 rounded-2xl bg-background-secondary p-5'>
        <Setting title='TEMPERATURE' options={['Celsius', 'Fahrenheit']} />
        <Setting title='WIND SPEED' options={['Km/h', 'm/s', 'Knots']} />
        <Setting title='PRESSURE' options={['hPa', 'Inches', 'KPa', 'mm']} />
        <Setting title='PRECIPITATION' options={['Millimeters', 'Inches']} />
        <Setting title='DISTANCE' options={['Kilometers', 'Miles']} />
      </div>

      <h2 className='text-lg font-semibold text-text-primary '>Notifications</h2>
      <div className='flex items-center justify-between gap-5 rounded-2xl bg-background-secondary p-5'>
        <div>
          <h4 className='mb-1 text-sm font-medium text-text-tertiary'>Notifications</h4>
          <p className='text-xs text-text-secondary'>Be aware of the weather</p>
        </div>
        <Switch checked={true} />
      </div>

      <h2 className='text-lg font-semibold text-text-primary '>General</h2>
      <div className='flex flex-col gap-5 rounded-2xl bg-background-secondary p-5'>
        <div className='flex items-center justify-between gap-5 border-b border-border pb-3 '>
          <h4 className='mb-1 text-sm font-medium text-text-tertiary'>12-Hour Time</h4>
          <Switch checked={true} />
        </div>
        <div className='flex items-center justify-between gap-5 '>
          <div>
            <h4 className='mb-1 text-sm font-medium text-text-tertiary'>Location</h4>
            <p className='text-xs text-text-secondary'>Get weather of your location</p>
          </div>
          <Switch checked={true} />
        </div>
      </div>
    </div>
  );
}

function Setting({ title, options }) {
  return (
    <div className='space-y-3'>
      <h3 className='text-sm font-medium text-text-secondary '>{title}</h3>
      <Options options={options} />
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
