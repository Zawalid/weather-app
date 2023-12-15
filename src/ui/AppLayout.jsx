import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import SearchInput from '../features/search/SearchInput';
import SideBar from './SideBar';
import Aside from './Aside';
import IconButton from './IconButton';
import { useSettings } from '../hooks/useSettings';
import { Toaster } from 'sonner';

export default function AppLayout() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [parent] = useAutoAnimate({
    duration: 400,
  });
  const { enableAnimations } = useSettings();
  const currentTab = useLocation().pathname.split('/')[2];

  useEffect(() => {
    setIsAsideOpen(false);
  }, [currentTab]);

  return (
    <>
      <main className='flex h-full flex-col gap-5 bg-background-primary p-3 pb-[54px]  sm:grid-cols-[80px_1fr] md:grid md:grid-cols-[80px_1fr] md:pb-3 lg:grid-cols-[90px_2fr_1fr] lg:grid-rows-[50px_1fr] lg:p-5'>
        <SideBar />
        <div className='flex h-fit items-center gap-2'>
          <SearchInput />
          <IconButton className='lg:hidden' onClick={() => setIsAsideOpen(!isAsideOpen)} type={1}>
            <i
              className={`fa-solid fa-angles-left text-text-primary transition-transform duration-500 ${
                isAsideOpen ? 'rotate-180' : ''
              } `}
            ></i>
          </IconButton>
        </div>
        <div
          id='main'
          className='col-start-2  h-[calc(100vh-80px)] overflow-auto pr-3 lg:h-[calc(100vh-96px)]'
          ref={enableAnimations ? parent : null}
        >
          <Outlet
            context={{
              seeMore,
              setSeeMore,
              setIsAsideOpen,
            }}
          />
        </div>
        <div
          className={`fixed top-16 flex h-[calc(100%-77px)] w-full flex-col gap-5 overflow-auto bg-background-primary px-3 pb-[50px] transition-[right] duration-500 md:w-[calc(100%-100px)] md:pb-0 lg:relative lg:right-0 lg:top-0 lg:h-full lg:w-full lg:bg-transparent lg:pl-0 ${
            isAsideOpen ? 'right-0' : '-right-full'
          }`}
          ref={enableAnimations ? parent : null}
        >
          <Aside seeMore={seeMore} setIsAsideOpen={setIsAsideOpen} />
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
          duration: 5000,
        }}
      />
    </>
  );
}
