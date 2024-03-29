import { toast } from 'sonner';

function On() {
  return (
    <svg
      stroke='currentColor'
      fill='white'
      strokeWidth='1'
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Wi-Fi_On'>
        <g>
          <path d='M2.922,10.777a12.194,12.194,0,0,1,18.155-.034c.436.476,1.141-.233.707-.707a13.189,13.189,0,0,0-19.569.034c-.432.475.273,1.184.707.707Z'></path>
          <path d='M5.654,13.169a8.615,8.615,0,0,1,12.691-.024c.437.475,1.143-.234.707-.707a9.621,9.621,0,0,0-14.106.024c-.433.474.272,1.184.708.707Z'></path>
          <path d='M8.7,15.492a4.47,4.47,0,0,1,6.6-.013c.438.474,1.143-.235.707-.707a5.475,5.475,0,0,0-8.015.013c-.434.474.271,1.183.707.707Z'></path>
          <circle cx='11.999' cy='17.172' r='1.12'></circle>
        </g>
      </g>
    </svg>
  );
}
function Off() {
  return (
    <svg
      stroke='currentColor'
      fill='white'
      strokeWidth='1'
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Wi-Fi_Off'>
        <g>
          <path d='M10.37,6.564a12.392,12.392,0,0,1,10.71,3.93c.436.476,1.141-.233.708-.708A13.324,13.324,0,0,0,10.37,5.564c-.631.076-.638,1.077,0,1Z'></path>
          <path d='M13.907,10.283A8.641,8.641,0,0,1,18.349,12.9c.434.477,1.139-.232.707-.707a9.586,9.586,0,0,0-4.883-2.871c-.626-.146-.893.818-.266.965Z'></path>
          <circle cx='12.003' cy='16.922' r='1.12'></circle>
          <path d='M19.773,19.06a.5.5,0,0,1-.71.71l-5.84-5.84A4.478,4.478,0,0,0,8.7,15.24c-.43.48-1.14-.23-.71-.7a5.47,5.47,0,0,1,4.06-1.78l-2.37-2.37a8.693,8.693,0,0,0-4.03,2.53c-.43.48-1.13-.23-.7-.71A9.439,9.439,0,0,1,8.893,9.6L6.883,7.59a12.557,12.557,0,0,0-3.96,2.94.5.5,0,1,1-.7-.71,13.109,13.109,0,0,1,3.91-2.98l-1.9-1.9a.5.5,0,0,1,.71-.71Z'></path>
        </g>
      </g>
    </svg>
  );
}
export function monitorNetwork() {
  window.addEventListener('offline', () =>
    toast.error('No internet connection', {
      icon: <Off />,
    }),
  );
  window.addEventListener('online', () =>
    toast.success('Back online!', {
      icon: <On />,
    }),
  );
}
