export default function IconButton({ children, className, onClick }) {
  return (
    <button
      className={`grid h-6 w-6 place-content-center rounded-full border text-sm text-text-tertiary  duration-100 hover:border-none hover:bg-primary-hover hover:text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
