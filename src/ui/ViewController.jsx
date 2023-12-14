import IconButton from './IconButton';

export default function ViewController({ view, setView, children }) {
  return (
    <div className='flex items-center justify-between'>
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
          {/* <i className='fa-solid fa-table-cells text=lg text-text-primary'></i> */}
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 16 16'
            height='16px'
            width='16px'
            className='text-text-primary'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z'></path>
          </svg>
        </IconButton>
      </div>
      {children}
    </div>
  );
}
