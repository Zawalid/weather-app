import Logo from '@/ui/Logo';
import { NavLink } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';

export default function SideBar() {
  return (
    <aside className='row-span-2 flex flex-col items-center gap-12 rounded-2xl bg-background-secondary  p-3'>
      <Logo className='w-12' />
      <div className='flex flex-col gap-5'>
        <NavLink to='weather'>
          <Button icon='fa-cloud-sun-rain' text='Weather' />
        </NavLink>
        <NavLink to='cities'>
          <Button icon='fa-list' text='Cities' />
        </NavLink>
        <NavLink to='map'>
          <Button icon='fa-map' text='Map' />
        </NavLink>
        <NavLink to='settings'>
          <Button icon='fa-sliders' text='Settings' />
        </NavLink>
      </div>
     <ThemeSwitch />
    </aside>
  );
}

function Button({ icon, text }) {
  return (
    <button className='group flex w-full flex-col items-center gap-2 text-text-secondary transition-colors duration-300 hover:text-text-primary'>
      <i className={`fa-solid ${icon} text-lg`}></i>
      <span className='text-xs group-hover:font-semibold sm:text-sm'>{text}</span>
    </button>
  );
}
