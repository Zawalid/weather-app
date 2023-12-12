export default function IconButton({ children, className, onClick, type = 2 }) {
  const type1ClassName =
    'grid place-content-center  rounded-md bg-background-secondary px-3 py-2 focus:bg-settings-active';
  const type2ClassName =
    'grid h-6 w-6 place-content-center rounded-full border text-sm text-text-tertiary  duration-100 hover:border-none hover:bg-primary-hover hover:text-white';

  return (
    <button
      className={`${type === 1 ? type1ClassName : type2ClassName} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
