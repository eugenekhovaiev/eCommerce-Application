import SignInLink from '../../../entities/Login/UI/SignInLink';
import handleClickSignIn from '../lib/listeners/clickSignIn';
import { ILoginProps } from '../types';

function SignIn(props: ILoginProps): JSX.Element {
  return <SignInLink className={props.className} onClick={handleClickSignIn} />;
}

export default SignIn;
