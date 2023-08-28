import CartLink from '../../entities/links-comps/CartLink';
import LogInLink from '../../entities/links-comps/LogInLink';
import SignUpLink from '../../entities/links-comps/SignUpLink';
import AboutUsLink from '../../entities/links-comps/AboutUsLink';
import ProfileLink from '../../entities/links-comps/ProfileLink';
import CatalogLink from '../../entities/links-comps/CatalogLink';
import Logo from '../../entities/logo-comp/Logo';

import logoIcon from '../../shared/assets/logo.svg';
import { useLoggedInContext } from '../../shared/lib/contexts/LoggedInContext';

import { useEffect } from 'react';
import LogOutLink from '../../entities/links-comps/LogOutLink';

function Header(): JSX.Element {
  const { isLoggedIn, updateLoggedIn } = useLoggedInContext();

  useEffect(() => {
    const savedHasHeaderChanged = localStorage.getItem('isAuth');

    if (savedHasHeaderChanged === 'true') {
      updateLoggedIn(true);
    }
  }, [updateLoggedIn]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo className={'header__logo'} title="4Dogs" iconSrc={logoIcon} />
          <nav className="nav header__nav">
            <AboutUsLink additionalClassName="nav__link" />
            <CatalogLink additionalClassName="nav__link" />
            <ProfileLink additionalClassName="nav__link" />
            {!isLoggedIn && <LogInLink additionalClassName="nav__link" />}
            {!isLoggedIn && <SignUpLink additionalClassName="nav__link" />}
            {isLoggedIn && <LogOutLink additionalClassName="nav__link" />}
            <CartLink additionalClassName="nav__link" />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
