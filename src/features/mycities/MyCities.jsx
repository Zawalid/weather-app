import { useOutletContext } from 'react-router-dom';
import Cities from './Cities';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function MyCities() {
  const { myCities, setMyCities } = useOutletContext();
  const [parent] = useAutoAnimate({
    duration: 400,
  });

  
  return (
    <div className='h-full'
    ref={parent}
    >
      {myCities.length ? (
        <Cities
          type={1}
          cities={myCities}
          isMyCities={true}
          onRemove={(id) => setMyCities((prev) => prev.filter((city) => city.id !== id))}
        />
      ) : (
        <div className='flex h-full flex-col items-center justify-center gap-3 text-center '>
          <h3 className='text-2xl font-semibold text-text-primary'>
            You don&apos;t have any cities in your list.
          </h3>
          <p className='font-semibold  text-text-secondary'>
            Add a city to see its weather forecast.
          </p>
        </div>
      )}
    </div>
  );
}
