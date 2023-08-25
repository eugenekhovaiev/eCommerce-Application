import LinkElement from '../../shared/UI/LinkElement/LinkElement';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import { LinkProps } from '../../shared/types';

function LogInLink(props: LinkProps): JSX.Element {
  const fullClassName = getFullClassName('link_login', props.additionalClassName);
  return <LinkElement additionalClassName={fullClassName} title="Log In" onClick={props.onClick} to="/login" />;
}

export default LogInLink;
