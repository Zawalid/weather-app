import Button from "@/ui/Button";
import Condition from "./Condition";

export default function AirConditions() {
  return (
    <div className="bg-background-secondary rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-text-secondary text-sm font-medium ">
          AIR CONDITIONS
        </h3>
        <Button className="py-1 px-3 text-xs">See more</Button>
      </div>
      <div className="grid gap-3 grid-cols-2 max-[400px]:grid-cols-1 ">
        <Condition icon="fa-temperature-quarter" name="Real Feel" value="20°" />
        <Condition icon="fa-wind" name="Wind" value="20 km/h" />
        <Condition icon="fa-droplet" name="Chance of Rain" value="20%" />
        <Condition icon="fa-sun" name="UV Index" value="1" />
      </div>
    </div>
  );
}
