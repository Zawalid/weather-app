import CustomTippy from './CustomTippy';

export default function DropDown({ children, className, toggler }) {
  return (
    <CustomTippy
      content={<div className='flex w-fit flex-col '>{children}</div>}
      trigger='click'
      interactive={true}
      arrow={false}
      placement='bottom-end'
      maxWidth='auto'
      className={`rounded-lg bg-background-primary shadow-[-5px_5px_10px_var(--color-shadow)] ${className}`}
    >
      {toggler}
    </CustomTippy>
  );
}
