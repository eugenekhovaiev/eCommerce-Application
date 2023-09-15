import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import { LinkProps } from '../../shared/types';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';

function LogOutLink(props: LinkProps): JSX.Element {
  const { updateUserData } = useUserDataContext();
  const { updateActiveCart } = useActiveCartContext();

  const handleClick = (): void => {
    localStorage.clear();
    updateUserData(undefined);
    updateActiveCart(undefined);
  };

  const fullClassName = getFullClassName('link_logout', props.additionalClassName);
  return <LinkElement additionalClassName={fullClassName} title="Log Out" onClick={handleClick} to="/login" />;
}

export default LogOutLink;
