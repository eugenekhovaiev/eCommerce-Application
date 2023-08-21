import './Header.scss';
import SignIn from '../../features/Login/UI/SignIn';
import SignUp from '../../features/Login/UI/SignUp';
import CartIcon from '../../entities/Cart/UI/CartIcon';
import Logo from '../../shared/UI/logo/Logo';
import { IHeaderProps } from './types';
import logoIcon from '../../shared/assets/logo.svg';

function Header(props: IHeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo className={'header__logo'} onClick={props.logoClick} title="4Dogs" iconSrc={logoIcon} />
          <nav className="nav header__nav">
            <SignIn className="nav__link" />
            <SignUp className="nav__link" />
            <CartIcon className="nav__cart" />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
