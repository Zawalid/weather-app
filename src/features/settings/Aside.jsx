import Plan from './Plan';
import SignUp from './SignUp';
import Button from '@/ui/Button';
import { useSettings } from '@/hooks/useSettings';
import NavigationSidebar from './NavigationSidebar';

export function Aside() {
  const { resetAllSettings,isChanged } = useSettings();
  return (
    <>
      {/* <Plan /> */}
      {/* <SignUp /> */}
      <NavigationSidebar />
      {/* <Button className='w-full' disabled={!isChanged} onClick={resetAllSettings}>
        Reset Settings
      </Button> */}
    </>
  );
}
