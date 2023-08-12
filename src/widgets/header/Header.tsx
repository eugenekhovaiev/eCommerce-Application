import './Header.scss';
import SignIn from '../../features/Login/UI/SignIn';
import SignUp from '../../features/Login/UI/SignUp';
import CartIcon from '../../entities/Cart/UI/CartIcon';
import Logo from '../../shared/UI/logo/Logo';
import HeaderProps from './types';

function Header(props: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <Logo onClick={props.logoClick} title="Home" />
      <nav className="nav">
        <SignIn />
        <SignUp />
        <CartIcon />
      </nav>
    </header>
  );
}

export default Header;
