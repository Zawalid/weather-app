import Sun from "@/assets/sun.png";

export default function TodayForecast({ transparent, className }) {
  return (
    <div
      className={`py-5 ${
        transparent
          ? "bg-transparent border-y border-border px-0"
          : "bg-background-secondary px-5 rounded-xl"
      }`}
    >
      <h3 className="text-text-secondary text-sm font-medium mb-5">
        TODAY’S FORECAST
      </h3>
      <div className={`flex gap-5 overflow-auto noScrollbar ${className}`}>
        <Hour time="6:00 AM" icon={Sun} temperature="24" />
        <Hour time="9:00 AM" icon={Sun} temperature="21" />
        <Hour time="12:00 PM" icon={Sun} temperature="25" />
        <Hour time="3:00 PM" icon={Sun} temperature="26" />
        <Hour time="6:00 PM" icon={Sun} temperature="20" />
        <Hour time="9:00 PM" icon={Sun} temperature="19" />
      </div>
    </div>
  );
}

function Hour({ time, icon, temperature }) {
  return (
    <div className="flex flex-col items-center border-r border-border pr-5 last:pr-0 last:border-none gap-3">
      <span
        className="text-text-secondary font-semibold text-sm"
        style={{
          textWrap: "nowrap",
        }}
      >
        {time}
      </span>
      <img src={icon} alt="sun" className="w-10 h-10" />
      <span className="text-text-primary font-bold text-lg">
        {temperature}°
      </span>
    </div>
  );
}
