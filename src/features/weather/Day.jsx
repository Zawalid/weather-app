export default function Day({ day, icon, weather, temperature }) {
  return (
    <div className="grid grid-cols-3 justify-between items-center border-b border-border pb-2 last:border-none last:pb-0 gap-3">
      <span className="text-text-secondary  text-sm">{day}</span>
      <div className="flex items-center gap-4">
        <img src={icon} alt="sun" className="w-10 h-10" />
        <span className="text-text-primary font-bold text-sm">{weather}</span>
      </div>
      <p className="justify-self-end">
        <span className="text-text-primary font-semibold ">
          {temperature.max}
        </span>
        <span className="text-text-secondary  text-sm">
          /{temperature.min}
        </span>
      </p>
    </div>
  );
}
