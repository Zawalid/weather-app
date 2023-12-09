import { useSettings } from '../../hooks/useSettings';
import { checkIfCurrentHour, formatTime } from '../../utils/helpers';
import Hour from './Hour';

export default function TodayForecast({ hours = [], transparent, className }) {
  const { is12HourFormat ,hoursForeCast} = useSettings();
  return (
    <div
      className={`py-5 ${
        transparent
          ? 'border-y border-border bg-transparent px-0'
          : 'rounded-xl bg-background-secondary px-5'
      }`}
    >
      <h3 className='mb-5 text-sm font-medium text-text-secondary'>{parseInt(hoursForeCast)}-HOUR FORECAST</h3>
      <div className={`noScrollbar flex justify-start gap-5 overflow-auto ${className}`}>
        {hours.map((hour) => (
          <Hour
            key={hour.time}
            time={checkIfCurrentHour(hour.time) ? 'Now' : formatTime(hour.time, is12HourFormat)}
            isDay={hour.isDay}
            weatherCode={hour.weatherCode}
            temperature={hour.temperature}
            windSpeed={hour.windSpeed}
          />
        ))}
      </div>
    </div>
  );
}
