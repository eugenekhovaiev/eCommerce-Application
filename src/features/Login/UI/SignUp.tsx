import SignUpLink from '../../../entities/Login/UI/SignUpLink';
import clickSignUp from '../lib/listeners/clickSignUp';
import { ILoginProps } from '../types';

function SignUp(props: ILoginProps): JSX.Element {
  return <SignUpLink className={props.className} onClick={clickSignUp} />;
}

export default SignUp;
