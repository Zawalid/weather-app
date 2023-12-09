export default function TextInput({ value, onChange, disabled, className }) {
  return (
    <input
      type='text'
      className={`w-[110px] rounded-lg bg-settings-active px-3 py-[6px] text-text-primary focus:outline-none ${className}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
