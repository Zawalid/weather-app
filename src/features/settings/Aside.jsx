import Plan from './Plan';
import SignUp from './SignUp';
import Button from '@/ui/Button';
import { useSettings } from '@/hooks/useSettings';

export function Aside() {
  const { resetAllSettings,isChanged } = useSettings();
  return (
    <>
      <Plan />
      <SignUp />
      <Button className='w-full' disabled={!isChanged} onClick={resetAllSettings}>
        Reset Settings
      </Button>
    </>
  );
}
