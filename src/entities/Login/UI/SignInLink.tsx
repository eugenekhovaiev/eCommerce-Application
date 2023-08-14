import Link from '../../../shared/UI/link/Link';
import { SignInProps } from '../types';

function SignInLink(props: SignInProps): JSX.Element {
  return <Link className={props.className} title="Sign In" onClick={props.onClick} />;
}

export default SignInLink;
