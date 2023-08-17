import SignUpLink from '../../../entities/Login/UI/SignUpLink';
import { ILoginProps } from '../types';

function SignUp(props: ILoginProps): JSX.Element {
  return <SignUpLink className={props.className} />;
}

export default SignUp;
