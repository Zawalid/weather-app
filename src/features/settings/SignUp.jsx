import Button from '@/ui/Button';
export default function SignUp() {
  return (
    <div className='rounded-2xl bg-background-secondary p-5'>
      <h2 className='border-b border-border pb-3 text-lg font-semibold text-text-primary '>
        Never forget your umbrella
      </h2>
      <p className='text-xs text-text-secondary my-5'>
        Sign up for our daily weather newsletter personalized just for you.{' '}
      </p>
      <Button className='w-full'>Sign up</Button>
    </div>
  );
}
