import { useSettings } from '@/hooks/useSettings';
import { Options } from './settings-components/Options';

export default function Units() {
  const {
    temperatureUnit,
    setTemperatureUnit,
    windSpeedUnit,
    setWindSpeedUnit,
    pressureUnit,
    setPressureUnit,
    precipitationUnit,
    setPrecipitationUnit,
    distanceUnit,
    setDistanceUnit,
  } = useSettings();
  return (
    <div className='flex flex-col gap-5 rounded-2xl bg-background-secondary p-5'>
      <Unit
        title='Temperature'
        options={[
          { name: 'Celsius', value: 'celsius' },
          { name: 'Fahrenheit', value: 'fahrenheit' },
        ]}
        currentOption={temperatureUnit}
        onChange={(option) => setTemperatureUnit(option)}
      />
      <Unit
        title='Wind speed'
        options={[
          { name: 'Km/h', value: 'kmh' },
          { name: 'm/s', value: 'ms' },
        ]}
        currentOption={windSpeedUnit}
        onChange={(option) => setWindSpeedUnit(option)}
      />
      <Unit
        title='Pressure'
        options={[
          { name: 'hPa', value: 'hPa' },
          { name: 'KPa', value: 'KPa' },
          { name: 'Bar', value: 'Bar' },
        ]}
        currentOption={pressureUnit}
        onChange={(option) => setPressureUnit(option)}
      />
      <Unit
        title='Precipitation'
        options={[
          { name: 'Millimeters', value: 'mm' },
          { name: 'Inches', value: 'inch' },
        ]}
        currentOption={precipitationUnit}
        onChange={(option) => setPrecipitationUnit(option)}
      />
      <Unit
        title='Distance'
        options={[
          { name: 'Kilometers', value: 'Km' },
          { name: 'Miles', value: 'Mi' },
        ]}
        currentOption={distanceUnit}
        onChange={(option) => setDistanceUnit(option)}
      />
    </div>
  );
}

function Unit({ title, options, currentOption, onChange }) {
  return (
    <div className='space-y-3'>
      <h3 className='text-sm font-medium text-text-secondary '>{title}</h3>
      <Options options={options} currentOption={currentOption} onChange={onChange} />
    </div>
  );
}
