import './Header.scss';
import SignIn from '../../features/Login/UI/SignIn';
import SignUp from '../../features/Login/UI/SignUp';
// import CartIcon from '../../entities/Cart/UI/CartIcon';
import Logo from '../../shared/UI/logo/Logo';
import { IHeaderProps } from './types';
import logoIcon from '../../shared/assets/logo.svg';
import { useHeaderContext } from './HeaderContext';

import LogOut from '../../features/Login/UI/LogOut';
import { useEffect } from 'react';

function Header(props: IHeaderProps): JSX.Element {
  const { isLoggedIn, updateHeader } = useHeaderContext();

  useEffect(() => {
    const savedHasHeaderChanged = localStorage.getItem('isAuth');

    if (savedHasHeaderChanged === 'true') {
      updateHeader(true);
    }
  }, [updateHeader]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo className={'header__logo'} onClick={props.logoClick} title="4Dogs" iconSrc={logoIcon} />
          <nav className="nav header__nav">
            {isLoggedIn && <LogOut className="nav__link" />}
            {!isLoggedIn && <SignIn className="nav__link" />}
            {!isLoggedIn && <SignUp className="nav__link" />}
            {/* <CartIcon className="nav__cart" /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
