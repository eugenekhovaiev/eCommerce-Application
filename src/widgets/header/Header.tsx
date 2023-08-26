import CartLink from '../../entities/Links/CartLink';
import LogInLink from '../../entities/Links/LogInLink';
import SignUpLink from '../../entities/Links/SignUpLink';
import AboutUsLink from '../../entities/Links/AboutUsLink';
import ProfileLink from '../../entities/Links/ProfileLink';
import CatalogLink from '../../entities/Links/CatalogLink';
import Logo from '../../entities/Logo/Logo';

import { IHeaderProps } from './types';
import logoIcon from '../../shared/assets/logo.svg';
import { useLoggedInContext } from '../../shared/lib/contexts/LoggedInContext';

import { useEffect } from 'react';
import LogOutLink from '../../entities/Links/LogOutLink';

function Header(props: IHeaderProps): JSX.Element {
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
          <Logo className={'header__logo'} onClick={props.logoClick} title="4Dogs" iconSrc={logoIcon} />
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
