import Switch from '../../ui/Switch';
import { Options } from './Options';

export default function Settings() {
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='text-lg font-semibold text-text-primary '>Units</h2>
      <div className='flex flex-col gap-5 rounded-2xl bg-background-secondary p-5'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-text-secondary '>TEMPERATURE</h3>
          <Options options={['Celsius', 'Fahrenheit']} />
        </div>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-text-secondary '>WIND SPEED</h3>
          <Options options={['Km/h', 'm/s', 'Knots']} />
        </div>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-text-secondary '>PRESSURE</h3>
          <Options options={['hPa', 'Inches', 'KPa', 'mm']} />
        </div>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-text-secondary '>PRECIPITATION</h3>
          <Options options={['Millimeters', 'Inches']} />
        </div>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-text-secondary '>DISTANCE</h3>
          <Options options={['Kilometers', 'Miles']} />
        </div>
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


