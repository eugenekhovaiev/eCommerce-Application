import LinkElement from '../../../shared/UI/link/LinkElement';
import { ISignInProps } from '../types';

function SignInLink(props: ISignInProps): JSX.Element {
  return <LinkElement className={props.className} title="Log In" onClick={props.onClick} to="/login" />;
}

export default SignInLink;
