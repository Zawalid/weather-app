import Button from '@/ui/Button';
import Condition from './Condition';
import { useOutletContext } from 'react-router-dom';

export default function AirConditions() {
  const { seeMore, setSeeMore } = useOutletContext();

  return (
    <>
      <div className={`rounded-xl p-5 ${seeMore ? '' : 'bg-background-secondary'} `}>
        <div className='mb-5 flex items-center justify-between'>
          <h3 className='text-sm font-medium text-text-secondary '>AIR CONDITIONS</h3>
          <Button className='px-3 py-1 text-xs' onClick={() => setSeeMore(!seeMore)}>
            {seeMore ? 'See Less' : 'See More'}
          </Button>
        </div>

        <div className='grid grid-cols-2 gap-3 max-[400px]:grid-cols-1 '>
          <Condition
            separate={seeMore}
            icon='fa-temperature-quarter'
            name='Real Feel'
            value='20°'
          />
          <Condition separate={seeMore} icon='fa-wind' name='Wind' value='20 km/h' />
          <Condition separate={seeMore} icon='fa-droplet' name='Chance of Rain' value='20%' />
          <Condition separate={seeMore} icon='fa-sun' name='UV Index' value='1' />
          {seeMore && (
            <>
              <Condition separate={seeMore} icon='fa-shower' name='Humidity' value='60%' />
              <Condition separate={seeMore} icon='fa-eye' name='Visibility' value='12km' />
              <Condition separate={seeMore} icon='fa-gauge-high' name='Pressure' value='1020 hPa' />
              <Condition separate={seeMore} icon='fa-cloud-sun' name='Sunset' value='20:56' />
            </>
          )}
        </div>
      </div>
    </>
  );
}
