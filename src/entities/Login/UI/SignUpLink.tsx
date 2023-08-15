import Link from '../../../shared/UI/link/Link';
import { ISignUpProps } from '../types';

function SignUpLink(props: ISignUpProps): JSX.Element {
  return <Link className={props.className} title="Sign Up" onClick={props.onClick} />;
}

export default SignUpLink;
