export default function Button({ children, className, disabled, onClick }) {
  return (
    <button
      className={`w-fit rounded-xl bg-primary px-5 py-2 text-sm  font-semibold text-white transition-colors duration-300  hover:bg-primary-hover 
      disabled:pointer-events-none disabled:opacity-50 disabled:hover:bg-primary 
      ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
