import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  useEffect(() => {
    document.title = 'Breezy | 404';
  }, []);

  return (
    <div className='grid h-screen place-content-center'>
      <img src='/404.svg' alt='404' className='mx-auto w-1/2' />
      <h1 className='mt-5 text-center font-medium text-text-primary'>
        Oops! It seems you lost your umbrella
      </h1>

      <Link
        to='/app'
        className='mx-auto mt-5 w-fit rounded-lg bg-primary px-3 py-2 text-sm font-bold text-text-primary'
      >
        Find your way back
      </Link>
    </div>
  );
}
