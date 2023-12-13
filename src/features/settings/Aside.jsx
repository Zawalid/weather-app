import Plan from './Plan';
import SignUp from './SignUp';
import NavigationSidebar from './NavigationSidebar';

export function Aside({ setIsAsideOpen }) {
  return (
    <>
      <NavigationSidebar setIsAsideOpen={setIsAsideOpen} />
      <Plan />
      <SignUp />
    </>
    // Todo : If im not using the Plan and SignUp components, Change the grid cols to '90px 3fr 1fr'
  );
}
