import Switch from '@/ui/Switch';

export default function SwitchSetting({ checked, onChange, title, description }) {
  return (
    <div className='flex items-center justify-between gap-5 '>
      <div>
        <h4 className='mb-1 text-sm font-medium text-text-tertiary'>{title}</h4>
        {description && <p className='text-xs text-text-secondary'>{description}</p>}
      </div>
      <Switch checked={checked} onChange={onChange} />
    </div>
  );
}
