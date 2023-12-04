import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import SearchInput from '../features/search/SearchInput';
import SideBar from './SideBar';
import Aside from './Aside';

export default function AppLayout() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [parent] = useAutoAnimate({
    duration: 400,
  });

  return (
    <main className='grid h-full grid-cols-[60px_1fr] gap-3 bg-background-primary p-3 sm:grid-cols-[80px_1fr] sm:gap-5 lg:grid-cols-[80px_2fr_1fr] lg:grid-rows-[40px_1fr] lg:p-5'>
      <SideBar />
      <div className='flex h-fit items-center'>
        <SearchInput />
        <button onClick={() => setIsAsideOpen(!isAsideOpen)} className='lg:hidden'>
          <i
            className={`fa-solid fa-angles-left text-lg text-text-tertiary transition-transform duration-500 lg:hidden ${
              isAsideOpen ? 'rotate-180' : ''
            } `}
          ></i>
        </button>
      </div>
      <div
        className='col-start-2  h-[calc(100vh-80px)] overflow-auto pr-3 lg:h-[calc(100vh-96px)]'
        ref={parent}
      >
        <Outlet
          context={{
            seeMore,
            setSeeMore,
          }}
        />
      </div>
      <div
        className={`fixed top-16 flex h-[calc(100%-80px)] w-[calc(100%-80px)] flex-col gap-5 overflow-auto bg-background-primary px-3 transition-[right] duration-500 sm:w-[calc(100%-100px)] lg:static lg:right-0 lg:top-0 lg:h-full lg:w-full lg:bg-transparent lg:py-0 lg:pl-0 ${
          isAsideOpen ? 'right-0' : '-right-full'
        }`}
        ref={parent}
      >
        <Aside seeMore={seeMore} />
      </div>
    </main>
  );
}
