import { NavLink } from 'react-router-dom';
import Logo from '@/ui/Logo';

export default function SideBar() {
  return (
    <aside className='md:rounded-2xl fixed bottom-0 left-0 z-10 row-span-2 flex w-full flex-col items-center gap-12 rounded-t-lg p-2 backdrop-blur-md  md:relative  md:bg-background-secondary'>
      <Logo className='hidden w-12 md:block' />
      <div className='flex w-full justify-evenly gap-5 md:flex-col md:justify-normal'>
        <NavLink to='weather'>
          <Button icon='fa-cloud-sun-rain' text='Weather' />
        </NavLink>
        <NavLink to='mycities'>
          <Button icon='fa-list' text='My Cities' />
        </NavLink>
        <NavLink to='map'>
          <Button icon='fa-map-location-dot' text='Map' />
        </NavLink>
        <NavLink to='settings'>
          <Button icon='fa-sliders' text='Settings' />
        </NavLink>
      </div>
    </aside>
  );
}

function Button({ icon, text }) {
  return (
    <button className='group flex w-full flex-col items-center gap-1 text-text-secondary transition-colors duration-300 hover:text-text-primary md:gap-2'>
      <i className={`fa-solid ${icon} md:text-g`}></i>
      <span className='text-xs group-hover:font-semibold sm:text-sm'>{text}</span>
    </button>
  );
}
