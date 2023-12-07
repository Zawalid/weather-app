import Button from '@/ui/Button';
import Condition from './Condition';
import { useOutletContext } from 'react-router-dom';
import { formatTime } from '../../utils/helpers';
import { useSettings } from '@/hooks/useSettings';

export default function OtherConditions({ otherConditions }) {
  const { seeMore, setSeeMore } = useOutletContext();
  const {
    precipitationProbability,
    humidity,
    realFeel,
    visibility,
    uvIndex,
    pressure,
    windSpeed,
    windGusts,
    sunrise,
    sunset,
  } = otherConditions;

  const { pressureUnit, distanceUnit, is12HourFormat } = useSettings();
  const conditions = [
    {
      separate: seeMore,
      show: true,
      icon: 'fa-temperature-quarter',
      name: 'Real Feel',
      value: realFeel,
    },
    {
      separate: seeMore,
      show: true,
      icon: 'fa-wind',
      name: 'Wind Speed',
      value: windSpeed,
    },
    {
      separate: seeMore,
      show: true,
      icon: 'fa-droplet',
      name: 'Chance of Rain',
      value: precipitationProbability + '%',
    },
    {
      separate: seeMore,
      show: true,
      icon: 'fa-sun',
      name: 'UV Index',
      value: uvIndex,
    },
    // The ones below are hidden by default
    {
      separate: seeMore,
      show: seeMore,
      icon: 'fa-shower',
      name: 'Humidity',
      value: humidity + '%',
    },
    {
      separate: seeMore,
      show: seeMore,
      icon: 'fa-eye',
      name: 'Visibility',
      value:
        visibility < 1000
          ? `${visibility.toFixed(2)} m`
          : `${(distanceUnit === 'Km' ? visibility / 1000 : visibility / 1609.344)
              .toFixed(2)
              .replace(/\.00$/, '')} ${distanceUnit === 'Km' ? 'Km' : 'Miles'}`,
    },
    {
      separate: seeMore,
      show: seeMore,
      icon: 'fa-wind',
      name: 'Wind Gusts',
      value: windGusts,
    },
    {
      separate: seeMore,
      show: seeMore,
      icon: 'fa-gauge-high',
      name: 'Pressure',
      value: `${(pressureUnit === 'KPa'
        ? pressure / 10
        : pressureUnit === 'Bar'
          ? pressure / 1000
          : pressure
      )
        .toFixed(2)
        .replace(/\.00$/, '')} ${pressureUnit}
      `,
    },
    {
      separate: seeMore,
      show: seeMore,
      icon: 'fa-sun',
      name: 'Sunrise',
      value: formatTime(sunrise, is12HourFormat),
    },
    {
      separate: seeMore,
      show: seeMore,
      icon: 'fa-cloud-sun',
      name: 'Sunset',
      value: formatTime(sunset, is12HourFormat),
    },
  ];

  return (
    <>
      <div className={`rounded-xl ${seeMore ? '' : 'bg-background-secondary p-5'} `}>
        <div className='mb-5 flex items-center justify-between gap-5'>
          <h3 className='text-sm font-medium text-text-secondary '>OTHER CONDITIONS</h3>
          <Button className='px-3 py-1 text-xs' onClick={() => setSeeMore(!seeMore)}>
            {seeMore ? 'See Less' : 'See More'}
          </Button>
        </div>
        <div className='grid grid-cols-2 gap-3 max-[400px]:grid-cols-1 '>
          {conditions.map((condition) => {
            const { separate, show, icon, name, value } = condition;
            return show ? (
              <Condition
                key={name}
                separate={separate}
                icon={icon}
                name={name}
                value={value}
                show={show}
              />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}
