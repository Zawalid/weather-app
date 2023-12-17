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
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 512 512'
            height='16px'
            width='16px'
            xmlns='http://www.w3.org/2000/svg'
            className='text-text-primary'
          >
            <path d='M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z'></path>
          </svg>
        </IconButton>
      </div>
      {children}
    </div>
  );
}
