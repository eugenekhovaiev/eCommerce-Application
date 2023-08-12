import SignInLink from '../../../entities/Login/UI/SignInLink';
import clickSignIn from '../lib/listeners/clickSignIn';

function SignIn(): JSX.Element {
  return <SignInLink onClick={clickSignIn} />;
}

export default SignIn;
