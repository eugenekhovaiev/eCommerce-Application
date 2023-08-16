import LinkElement from '../../../shared/UI/link/Link';
import { ISignUpProps } from '../types';

function SignUpLink(props: ISignUpProps): JSX.Element {
  return <LinkElement className={props.className} title="Sign Up" onClick={props.onClick} to="/" />;
}

export default SignUpLink;
