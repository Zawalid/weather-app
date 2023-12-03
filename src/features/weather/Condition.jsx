export default function Condition({ icon, name, value, separate }) {
  return (
    <div
      className={`flex gap-3 ${
        separate ? "bg-background-secondary p-3 rounded-2xl" : ""
      }`}
    >
      <i className={`fa-solid ${icon} text-text-secondary text-lg`}></i>
      <div className="flex flex-col gap-2">
        <span className="text-text-secondary text-sm sm:text-base">{name}</span>
        <span className="text-text-primary text-xl sm:text-3xl font-bold">
          {value}
        </span>
      </div>
    </div>
  );
}
