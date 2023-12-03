import AirConditions from "./AirConditions";
import TodayForecast from "./TodayForecast";
import CurrentWeather from "./CurrentWeather";

export default function Weather() {
  return (
    <div className="flex flex-col gap-5 ">
      <CurrentWeather imageClass="w-28 sm:w-48" />
      <TodayForecast className="md:justify-center" />
      <AirConditions />
    </div>
  );
}
