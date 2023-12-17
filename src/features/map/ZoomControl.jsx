import { useMap } from 'react-leaflet';
import IconButton from '../../ui/IconButton';

export default function ZoomControl() {
  const map = useMap();

  return (
    <div className='flex flex-col gap-1'>
      <IconButton
        type={3}
        onClick={(e) => {
          e.stopPropagation();
          map.zoomIn();
        }}
      >
        <i className='fa-solid fa-plus '></i>
      </IconButton>
      <IconButton
        type={3}
        onClick={(e) => {
          e.stopPropagation();
          map.zoomOut();
        }}
      >
        <i className='fa-solid fa-minus '></i>
      </IconButton>
    </div>
  );
}
