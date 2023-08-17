import Link from '../../../shared/UI/link/Link';
import { ISignInProps } from '../types';

function SignInLink(props: ISignInProps): JSX.Element {
  return <Link className={props.className} title="Sign In" onClick={props.onClick} />;
}

export default SignInLink;