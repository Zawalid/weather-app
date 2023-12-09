import DropDown from '@/ui/DropDown';
import { useSettings } from '../../../hooks/useSettings';

export default function FontSize() {
  const { fontSize, setFontSize } = useSettings();
  return (
    <div className='flex items-center justify-between gap-5 '>
      <h4 className='mb-1 text-sm font-medium text-text-tertiary'>Font Size</h4>
      <DropDown
        options={[
          {
            name: 'Default',
            onclick: () => setFontSize('Default'),
          },
          {
            name: 'Small',
            onclick: () => setFontSize('Small'),
          },
          {
            name: 'Medium',
            onclick: () => setFontSize('Medium'),
          },
          {
            name: 'Large',
            onclick: () => setFontSize('Large'),
          },
        ]}
        currentOption={fontSize}
        className='bg-background-secondary'
        toggler={<span className='text-sm font-medium'>{fontSize}</span>}
      />
    </div>
  );
}
