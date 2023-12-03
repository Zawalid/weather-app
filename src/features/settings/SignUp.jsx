import Button from '@/ui/Button';
export default function SignUp() {
  return (
    <div className='rounded-2xl bg-background-secondary p-5'>
      <h2 className='border-border border-b pb-3 font-semibold text-text-primary sm:text-lg '>
        Never forget your umbrella
      </h2>
      <p className='my-5 text-xs text-text-secondary sm:text-sm'>
        Sign up for our daily weather newsletter personalized just for you.{' '}
      </p>
      <Button className='w-full'>Sign up</Button>
    </div>
  );
}
