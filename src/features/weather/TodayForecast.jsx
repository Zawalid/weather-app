import Sun from '@/assets/sun.png';
import { formatTime } from '../../utils/helpers';

export default function TodayForecast({ hours = [], transparent, className }) {
  return (
    <div
      className={`py-5 ${
        transparent
          ? 'border-y border-border bg-transparent px-0'
          : 'rounded-xl bg-background-secondary px-5'
      }`}
    >
      <h3 className='mb-5 text-sm font-medium text-text-secondary'>TODAY’S FORECAST</h3>
      <div className={`noScrollbar flex gap-5 overflow-auto ${className}`}>
        {hours.map((hour) => (
          <Hour
            key={hour.time}
            time={
              formatTime(hour.time, true) // Todo set the 12-hour based on the user's preference
            }
            temperature={hour.temperature}
            icon={Sun}
          />
        ))}
        {/* <Hour time='9:00 AM' icon={Sun} temperature='21' /> */}
        {/* <Hour time='12:00 PM' icon={Sun} temperature='25' /> */}
        {/* <Hour time='3:00 PM' icon={Sun} temperature='26' /> */}
        {/* <Hour time='6:00 PM' icon={Sun} temperature='20' /> */}
        {/* <Hour time='9:00 PM' icon={Sun} temperature='19' /> */}
      </div>
    </div>
  );
}

function Hour({ time, icon, temperature }) {
  return (
    <div className='flex flex-col items-center gap-3 border-r border-border pr-5 last:border-none last:pr-0'>
      <span
        className='text-sm font-semibold text-text-secondary'
        style={{
          textWrap: 'nowrap',
        }}
      >
        {time}
      </span>
      <img src={icon} alt='sun' className='h-10 w-10' />
      <span className='text-lg font-bold text-text-primary'>{temperature}°</span>
    </div>
  );
}
