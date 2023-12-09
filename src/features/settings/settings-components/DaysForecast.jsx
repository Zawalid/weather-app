import DropDown from '@/ui/DropDown';
import { useSettings } from '@/hooks/useSettings';

export default function DaysForecast() {
  const { daysForeCast, setDaysForeCast } = useSettings();
  return (
    <div className='flex items-center justify-between gap-5 '>
      <h4 className='mb-1 text-sm font-medium text-text-tertiary'>Number of Days Forecast</h4>
      <DropDown
        options={[
          {
            name: '3 Days',
            onclick: () => setDaysForeCast('3 Days'),
          },
          {
            name: '7 Days',
            onclick: () => setDaysForeCast('7 Days'),
          },
          {
            name: '14 Days',
            onclick: () => setDaysForeCast('14 Days'),
          },
          {
            name: '16 Days',
            onclick: () => setDaysForeCast('16 Days'),
          },
        ]}
        currentOption={daysForeCast}
        className='bg-background-secondary'
        toggler={<span className='text-sm font-medium'>
          {daysForeCast}
        </span>}
      />
    </div>
  );
}
