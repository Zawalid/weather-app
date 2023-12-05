import Day from './Day';
import { checkIfToday, formatDay } from '../../utils/helpers';

export default function WeekForecast({ days,daysNumber }) {
  return (
    <div className='rounded-xl bg-background-secondary p-5'>
      <h3 className='mb-5 text-sm font-medium text-text-secondary'>{daysNumber}-DAY FORECAST</h3>
      <div className='flex flex-col noScrollbar overflow-auto justify-center gap-5 '>
        {days?.map((day) => {
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
