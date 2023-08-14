import './Header.scss';
import SignIn from '../../features/Login/UI/SignIn';
import SignUp from '../../features/Login/UI/SignUp';
import CartIcon from '../../entities/Cart/UI/CartIcon';
import Logo from '../../shared/UI/logo/Logo';
import HeaderProps from './types';
import logoIcon from '../../shared/assets/logo.svg';

function Header(props: HeaderProps): JSX.Element {
  return (
    <header className="container">
      <div className="header">
        <Logo className={'header__logo'} onClick={props.logoClick} title="Home" iconSrc={logoIcon} />
        <nav className="nav">
          <SignIn className="nav__link" />
          <SignUp className="nav__link" />
          <CartIcon className="nav__cart" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
