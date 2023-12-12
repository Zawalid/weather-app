import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Cities from './Cities';
import { useSettings } from '../../hooks/useSettings';
import ErrorMessage from '../../ui/ErrorMessage';
import { confirmDeletion } from '../../utils/helpers';
import Actions from './Actions';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';

export default function MyCities() {
  const [citiesView, setCitiesView] = useLocalStorageState('citiesView', 1);
  const { myCities, setMyCities } = useOutletContext();
  const navigate = useNavigate();
  const [parent] = useAutoAnimate({
    duration: 400,
  });
  const { enableAnimations, enableDeleteConfirmations } = useSettings();

  useEffect(() => {
    if (!myCities.length) navigate({ replace: true, state: null });
  }, [myCities, navigate]);

  if (!myCities.length) return <ErrorMessage type='noCities' />;

  return (
    <div className='relative h-full' ref={enableAnimations ? parent : null}>
      <div className='mb-3 flex items-center justify-between'>
        <div className='flex gap-3'>
          <button
            className={`grid place-content-center rounded-md px-3 py-2  ${
              citiesView === 1 ? 'bg-settings-active' : 'bg-background-secondary'
            } `}
            onClick={() => setCitiesView(1)}
          >
            <i className='fa-solid fa-list text=lg text-text-primary'></i>
          </button>
          <button
            className={`grid place-content-center rounded-md px-3 py-2  ${
              citiesView === 2 ? 'bg-settings-active' : 'bg-background-secondary'
            } `}
            onClick={() => setCitiesView(2)}
          >
            <i className='fa-solid fa-grip text=lg text-text-primary'></i>
          </button>
        </div>
        <Actions myCities={myCities} setMyCities={setMyCities} />
      </div>

      <Cities
        type={citiesView}
        cities={myCities}
        setCities={setMyCities}
        isMyCities={true}
        onRemove={(id) =>
          enableDeleteConfirmations
            ? confirmDeletion('Are you sure you want to remove this city?', 'Remove', () =>
                setMyCities((prev) => prev.filter((city) => city.id !== id)),
              )
            : setMyCities((prev) => prev.filter((city) => city.id !== id))
        }
      />
    </div>
  );
}
