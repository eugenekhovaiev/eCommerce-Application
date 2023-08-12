import SignUpLink from '../../../entities/Login/UI/SignUpLink';
import clickSignUp from '../lib/listeners/clickSignUp';

function SignUp(): JSX.Element {
  return <SignUpLink onClick={clickSignUp} />;
}

export default SignUp;
