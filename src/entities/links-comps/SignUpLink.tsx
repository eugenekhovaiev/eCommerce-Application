import LinkElement from '../../shared/UI/link/LinkElement';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import { LinkProps } from '../../shared/types';

function SignUpLink(props: LinkProps): JSX.Element {
  const fullClassName = getFullClassName('link_registration', props.additionalClassName);
  return <LinkElement additionalClassName={fullClassName} title="Sign Up" onClick={props.onClick} to="/registration" />;
}

export default SignUpLink;
