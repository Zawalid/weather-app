import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import SearchInput from '../features/search/SearchInput';
import SideBar from './SideBar';
import Aside from './Aside';
import Actions from '../features/mycities/Actions';
import IconButton from './IconButton';
import { useSettings } from '../hooks/useSettings';
import { Toaster, toast } from 'sonner';

export default function AppLayout() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [myCities, setMyCities] = useLocalStorageState('myCities', []);
  const [parent] = useAutoAnimate({
    duration: 400,
  });
  const { enableAnimations } = useSettings();
  const currentTab = useLocation().pathname.split('/')[2];

  return (
    <>
      <main className='grid h-full grid-cols-[75px_1fr]  gap-5 bg-background-primary p-3 sm:grid-cols-[80px_1fr] lg:grid-cols-[90px_2fr_1fr] lg:grid-rows-[40px_1fr] lg:p-5'>
        <SideBar />
        <div className='flex h-fit items-center gap-2'>
          <SearchInput />
          {currentTab === 'mycities' && <Actions myCities={myCities} setMyCities={setMyCities} />}
          <IconButton className='lg:hidden' onClick={() => setIsAsideOpen(!isAsideOpen)}>
            <i
              className={`fa-solid fa-angles-left transition-transform duration-500 ${
                isAsideOpen ? 'rotate-180' : ''
              } `}
            ></i>
          </IconButton>
        </div>
        <div
          className='col-start-2  h-[calc(100vh-80px)] overflow-auto pr-3 lg:h-[calc(100vh-96px)]'
          ref={enableAnimations ? parent : null}
        >
          <Outlet
            context={{
              seeMore,
              setSeeMore,
              myCities,
              setMyCities,
            }}
          />
        </div>
        <div
          className={`fixed top-16 flex h-[calc(100%-80px)] w-[calc(100%-95px)] flex-col gap-5 overflow-auto bg-background-primary px-3 transition-[right] duration-500 sm:w-[calc(100%-100px)] lg:relative lg:right-0 lg:top-0 lg:h-full lg:w-full lg:bg-transparent lg:py-0 lg:pl-0 ${
            isAsideOpen ? 'right-0' : '-right-full'
          }`}
          ref={enableAnimations ? parent : null}
        >
          <Aside seeMore={seeMore} />
        </div>
      </main>
      <Toaster
        position='top-right'
        theme='dark'
        loadingIcon={
          <i className='fa-solid fa-spinner animate-spin text-lg text-text-secondary'></i>
        }
        toastOptions={{
          className: 'sonner-toast',
          duration: 500000,
        }}
      />
    </>
  );
}

toast('Hello World!');
toast.success('Hello World!');
toast.error('Hello World!');
toast.loading('Hello World!');
