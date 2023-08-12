import Link from '../../../shared/UI/link/Link';
import { SignUpProps } from '../types';

function SignUpLink(props: SignUpProps): JSX.Element {
  return <Link title="Sign Up" onClick={props.onClick} />;
}

export default SignUpLink;
