import Logo from "@/ui/Logo";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="p-3 gap-12 row-span-2 rounded-2xl flex items-center flex-col  bg-background-secondary">
      <Logo className="w-12" />
      <div className="flex flex-col gap-5">
        <NavLink to="/app">
          <Button icon="fa-cloud-sun-rain" text="Weather" />
        </NavLink>
        {/* <NavLink to="cities"> */}
        <Button icon="fa-list" text="Cities" />
        {/* </NavLink> */}
        {/* <NavLink to="map"> */}
        <Button icon="fa-map" text="Map" />
        {/* </NavLink> */}
        {/* <NavLink to="settings"> */}
        <Button icon="fa-sliders" text="Settings" />
        {/* </NavLink> */}
      </div>
    </aside>
  );
}

function Button({ icon, text }) {
  return (
    <button className="flex group w-full text-text-secondary flex-col items-center gap-2 transition-colors duration-300 hover:text-text-primary">
      <i className={`fa-solid ${icon} text-lg`}></i>
      <span className="group-hover:font-semibold text-xs sm:text-sm">
        {text}
      </span>
    </button>
  );
}
