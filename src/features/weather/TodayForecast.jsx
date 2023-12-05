import { formatTime } from '../../utils/helpers';
import Hour from './Hour';

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
      <div className={`noScrollbar flex justify-start gap-5 overflow-auto ${className}`}>
        {hours.map((hour) => (
          <Hour
            key={hour.time}
            time={
              formatTime(hour.time, false) // Todo set the 12-hour based on the user's preference
            }
            isDay={hour.isDay} // Temporary
            weatherCode={hour.weatherCode}
            temperature={hour.temperature}
          />
        ))}
      </div>
    </div>
  );
}
