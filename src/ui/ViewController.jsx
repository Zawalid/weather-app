import IconButton from './IconButton';

export default function ViewController({ view, setView, children }) {
  return (
    <div className='mb-5 flex items-center justify-between'>
      <div className='flex gap-3'>
        <IconButton
          type={1}
          className={view === 1 ? 'bg-settings-active' : 'bg-background-secondary'}
          onClick={() => setView(1)}
        >
          <i className='fa-solid fa-list text=lg text-text-primary'></i>
        </IconButton>
        <IconButton
          type={1}
          className={view === 2 ? 'bg-settings-active' : 'bg-background-secondary'}
          onClick={() => setView(2)}
        >
        <i className='fa-solid fa-grip text=lg text-text-primary'></i>
        </IconButton>
       
      </div>
      {children}
    </div>
  );
}
