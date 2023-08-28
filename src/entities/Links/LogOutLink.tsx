import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import { LinkProps } from '../../shared/types';
import { useLoggedInContext } from '../../shared/lib/contexts/LoggedInContext';

function LogOutLink(props: LinkProps): JSX.Element {
  const { updateLoggedIn } = useLoggedInContext();

  const handleClick = (): void => {
    localStorage.clear();
    updateLoggedIn(false);
  };

  const fullClassName = getFullClassName('link_logout', props.additionalClassName);
  return <LinkElement additionalClassName={fullClassName} title="Log Out" onClick={handleClick} to="/login" />;
}

export default LogOutLink;
