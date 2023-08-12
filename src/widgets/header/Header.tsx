import './Header.scss';
// import SignInLink from '../../entities/Login/UI/SignInLink';
import SignIn from '../../features/Login/UI/SignIn';
// import SignUpLink from '../../entities/Login/UI/SignUpLink';
import SignUp from '../../features/Login/UI/SignUp';
import CartIcon from '../../entities/Cart/UI/CartIcon';

function Header(): JSX.Element {
  return (
    <header className="header">
      <nav className="nav">
        <SignIn />
        <SignUp />
        <CartIcon />
      </nav>
    </header>
  );
}

export default Header;
