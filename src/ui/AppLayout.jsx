import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SearchInput from './SearchInput';
import SideBar from './SideBar';
import Aside from './Aside';

export default function AppLayout() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  return (
    <main className='grid h-full grid-cols-[60px_1fr] gap-5 bg-background-primary p-3 sm:grid-cols-[80px_1fr] lg:grid-cols-[80px_2fr_1fr] lg:grid-rows-[40px_1fr] lg:p-5'>
      <SideBar />
      <div className='flex items-center'>
        <SearchInput />
        <button onClick={() => setIsAsideOpen(!isAsideOpen)} className='lg:hidden'>
          <i
            className={`fa-solid fa-angles-left text-lg text-text-tertiary transition-transform duration-500 lg:hidden ${
              isAsideOpen ? 'rotate-180' : ''
            } `}
          ></i>
        </button>
      </div>
      <div className='col-start-2 overflow-auto pr-3'>
        <Outlet />
      </div>
      <div
        className={`fixed  top-12 h-[calc(100%-40px)] w-[calc(100%-80px)] flex-col gap-5 overflow-auto bg-background-primary p-3 transition-[right] duration-500 hover:right-0 sm:w-[calc(100%-100px)] lg:static lg:flex lg:h-full lg:w-full lg:py-0 lg:pl-0 ${
          isAsideOpen ? 'right-0' : '-right-full'
        }`}
      >
        <Aside />
      </div>
    </main>
  );
}
