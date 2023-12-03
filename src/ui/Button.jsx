export default function Button({ children, className, onClick }) {
  return (
    <button
      className={`hover:bg-primary-hover w-fit rounded-xl bg-primary px-5 py-2  text-sm font-semibold text-white transition-colors  duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
