import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Cities from './Cities';
import { useSettings } from '../../hooks/useSettings';
import ErrorMessage from '../../ui/ErrorMessage';

export default function MyCities() {
  const { myCities, setMyCities } = useOutletContext();
  const navigate = useNavigate();
  const [parent] = useAutoAnimate({
    duration: 400,
  });
  const { enableAnimations } = useSettings();

  useEffect(() => {
    if (!myCities.length) navigate({ replace: true, state: null });
  }, [myCities, navigate]);

  if (!myCities.length) return <ErrorMessage type='noCities' />;

  return (
    <div className='relative h-full' ref={enableAnimations ? parent : null}>
      <Cities
        type={1}
        cities={myCities}
        isMyCities={true}
        onRemove={(id) => setMyCities((prev) => prev.filter((city) => city.id !== id))}
      />
    </div>
  );
}
