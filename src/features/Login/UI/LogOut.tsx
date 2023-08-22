import LogOutLink from '../../../entities/Login/UI/LogOutLink';
import { useHeaderContext } from '../../../widgets/header/HeaderContext';
import { ILoginProps } from '../types';

function LogOut(props: ILoginProps): JSX.Element {
  const { updateHeader } = useHeaderContext();

  const handleClick = (): void => {
    localStorage.clear();
    updateHeader(false);
  };

  return <LogOutLink className={props.className} onClick={handleClick} />;
}

export default LogOut;
