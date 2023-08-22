import LinkElement from '../../../shared/UI/link/LinkElement';
import { ILinkProps } from '../types';

function SignUpLink(props: ILinkProps): JSX.Element {
  return <LinkElement className={props.className} title="Sign Up" onClick={props.onClick} to="/registration" />;
}

export default SignUpLink;
