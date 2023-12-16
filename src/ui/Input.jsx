export default function Input({ type, value, onChange, disabled, className, ...props }) {
  return (
    <input
      type={type}
      {...props}
      className={`w-[110px] rounded-lg bg-settings-active px-3 py-[6px] text-text-primary focus:outline-none ${className}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
