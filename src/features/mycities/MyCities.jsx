import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Cities from './Cities';

export default function MyCities() {
  const { myCities, setMyCities } = useOutletContext();
  const navigate = useNavigate();
  const [parent] = useAutoAnimate({
    duration: 400,
  });

  useEffect(() => {
    if (!myCities.length) navigate({ replace: true, state: null });
  }, [myCities, navigate]);

  return myCities.length ? (
    <div className='relative h-full' ref={parent}>
      <Cities
        type={1}
        cities={myCities}
        isMyCities={true}
        onRemove={(id) => setMyCities((prev) => prev.filter((city) => city.id !== id))}
      />
    </div>
  ) : (
    <div className='flex h-full flex-col items-center justify-center gap-3 text-center '>
      <h3 className='text-2xl font-semibold text-text-primary'>
        You don&apos;t have any cities in your list.
      </h3>
      <p className='font-semibold  text-text-secondary'>Add a city to see its weather forecast.</p>
    </div>
  );
}
