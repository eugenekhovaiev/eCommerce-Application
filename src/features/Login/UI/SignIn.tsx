import SignInLink from '../../../entities/Login/UI/SignInLink';
import { ILoginProps } from '../types';

function SignIn(props: ILoginProps): JSX.Element {
  return <SignInLink className={props.className} />;
}

export default SignIn;
