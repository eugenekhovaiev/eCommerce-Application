import LinkElement from '../../../shared/UI/link/LinkElement';
import { ILinkProps } from '../types';

function SignInLink(props: ILinkProps): JSX.Element {
  return <LinkElement className={props.className} title="Log In" onClick={props.onClick} to="/login" />;
}

export default SignInLink;
