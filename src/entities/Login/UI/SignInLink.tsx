import LinkElement from '../../../shared/UI/link/LinkElement';
import { ILinkProps } from '../types';

function SignInLink(props: ILinkProps): JSX.Element {
  if (localStorage.getItem('isAuth') === 'true') {
    return <LinkElement className={props.className} title="Sign In" onClick={props.onClick} to="/" />;
  }
  return <LinkElement className={props.className} title="Sign In" onClick={props.onClick} to="/login" />;
}

export default SignInLink;
