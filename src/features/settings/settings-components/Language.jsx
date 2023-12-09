import DropDown from '@/ui/DropDown';

export default function Language() {
  return (
    <div className='flex items-center justify-between gap-5 '>
      <h4 className='mb-1 text-sm font-medium text-text-tertiary'>Language</h4>
      <DropDown
        options={[
          {
            name: 'English',
            onclick: () => console.log('English'),
          },
          {
            name: 'Arabic',
            onclick: () => console.log('Arabic'),
          },
          {
            name: 'French',
            onclick: () => console.log('French'),
          },
        ]}
        className='bg-background-secondary'
        toggler={<span className='text-sm font-medium'>English</span>}
      />
    </div>
  );
}
