import Sun from "@/assets/sun.png";

export default function CurrentWeather({ transparent, imageClass }) {
  return (
    <div
      className={`flex items-center justify-between ${
        transparent ? "px-0" : "px-3 sm:px-8"
      } `}
    >
      <div className="flex flex-col gap-5 sm:gap-8 justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl text-text-primary font-bold mb-2">
            Rabat
          </h2>
          <p className="text-text-secondary text-xs sm:text-sm">
            Chance of rain: 0%
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl text-text-primary font-bold">
          21°
        </h1>
      </div>
      <img src={Sun} alt="sun" className={imageClass} />
    </div>
  );
}
