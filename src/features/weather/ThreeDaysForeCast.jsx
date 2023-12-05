import Day from './Day';
import { checkIfToday, formatDay } from '../../utils/helpers';

export default function ThreeDaysForecast({ days }) {
  return (
    <div className='rounded-xl bg-transparent py-5'>
      <h3 className='mb-5 text-sm font-medium text-text-secondary'>3-DAY FORECAST</h3>
      <div className='flex flex-col justify-center gap-5 '>
        {days.map((day) => {
          const {
            time,
            weatherCode,
            temperature: { max, min },
          } = day;

          return (
            <Day
              key={day.time}
              day={checkIfToday(time) ? 'Today' : formatDay(time)}
              weatherCode={weatherCode}
              temperature={{ max, min }}
            />
          );
        })}
      </div>
    </div>
  );
}
