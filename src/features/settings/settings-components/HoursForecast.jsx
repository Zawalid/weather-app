import DropDown from '@/ui/DropDown';
import { useSettings } from '@/hooks/useSettings';

export default function HoursForecast() {
  const {  hoursForeCast, setHoursForeCast } = useSettings();

  return (
    <div className='flex items-center justify-between gap-5 '>
      <h4 className='mb-1 text-sm font-medium text-text-tertiary'>Number of Hours Forecast</h4>
      <DropDown
        options={[
          {
            name: '6 Hours',
            onclick: () => setHoursForeCast('6 Hours'),
          },
          {
            name: '12 Hours',
            onclick: () => setHoursForeCast('12 Hours'),
          },
          {
            name: '24 Hours',
            onclick: () => setHoursForeCast('24 Hours'),
          },
        ]}
        currentOption={hoursForeCast}
        className='bg-background-secondary'
        toggler={<span className='text-sm font-medium'>
          {hoursForeCast}
        </span>}
      />
    </div>
  );
}
