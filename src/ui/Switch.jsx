export default function Switch({ checked }) {
  return (
    <label className='relative inline-flex cursor-pointer items-center'>
      <input type='checkbox' className='peer sr-only' 
      // checked={checked}
       />
      <div className="peer h-5 w-9 rounded-full bg-settings-active after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border  dark:after:bg-white  after:bg-background-primary  after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none  rtl:peer-checked:after:-translate-x-full"></div>
    </label>
  );
}
