import Sun from "@/assets/sun.png";
import  Day  from "./Day";

export default function WeekForecast() {
  return (
    <div className="bg-background-secondary rounded-xl p-5">
      <h3 className="text-text-secondary text-sm font-medium mb-5">
        7-DAY FORECAST
      </h3>
      <div className="flex flex-col justify-center gap-5 ">
        <Day
          day="Today"
          icon={Sun}
          weather="Sunny"
          temperature={{ day: 30, night: 20 }}
        />
        <Day
          day="Tue"
          icon={Sun}
          weather="Sunny"
          temperature={{ day: 30, night: 20 }}
        />
        <Day
          day="Wed"
          icon={Sun}
          weather="Sunny"
          temperature={{ day: 30, night: 20 }}
        />
        <Day
          day="Thu"
          icon={Sun}
          weather="Sunny"
          temperature={{ day: 30, night: 20 }}
        />
        <Day
          day="Fri"
          icon={Sun}
          weather="Sunny"
          temperature={{ day: 30, night: 20 }}
        />
        <Day
          day="Sat"
          icon={Sun}
          weather="Sunny"
          temperature={{ day: 30, night: 20 }}
        />
        <Day
          day="Sun"
          icon={Sun}
          weather="Sunny"
          temperature={{ day: 30, night: 20 }}
        />
      </div>
    </div>
  );
}


