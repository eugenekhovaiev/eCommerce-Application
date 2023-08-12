import Link from '../../../shared/UI/link/Link';
import { SignInProps } from '../types';

function SignInLink(props: SignInProps): JSX.Element {
  return <Link title="Sign In" onClick={props.onClick} />;
}

export default SignInLink;
