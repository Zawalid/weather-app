export default function ViewController({ view, setView, children }) {
    console.log(view,setView)
  return (
    <div className='mb-3 flex items-center justify-between'>
      <div className='flex gap-3'>
        <button
          className={`grid place-content-center rounded-md px-3 py-2  ${
            view === 1 ? 'bg-settings-active' : 'bg-background-secondary'
          } `}
          onClick={() => setView(1)}
        >
          <i className='fa-solid fa-list text=lg text-text-primary'></i>
        </button>
        <button
          className={`grid place-content-center rounded-md px-3 py-2  ${
            view === 2 ? 'bg-settings-active' : 'bg-background-secondary'
          } `}
          onClick={() => setView(2)}
        >
          <i className='fa-solid fa-grip text=lg text-text-primary'></i>
        </button>
      </div>
      {children}
    </div>
  );
}
