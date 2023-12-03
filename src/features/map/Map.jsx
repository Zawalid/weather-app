import MapImg from '@/assets/map.png';
export default function Map() {
  return (
    <div
      className='h-full w-full rounded-xl'
      style={{
        backgroundImage: `url(${MapImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    ></div>
  );
}
