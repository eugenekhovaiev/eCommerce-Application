import CartLink from '../../entities/links/CartLink';
import LogInLink from '../../entities/links/LogInLink';
import SignUpLink from '../../entities/links/SignUpLink';
import AboutUsLink from '../../entities/links/AboutUsLink';
import ProfileLink from '../../entities/links/ProfileLink';
import CatalogLink from '../../entities/links/CatalogLink';
import Logo from '../../entities/logo/Logo';

import logoIcon from '../../shared/assets/logo.svg';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';

import LogOutLink from '../../entities/links/LogOutLink';

function Header(): JSX.Element {
  const { userData } = useUserDataContext();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo className={'header__logo'} title="4Dogs" iconSrc={logoIcon} />
          <nav className="nav header__nav">
            <AboutUsLink additionalClassName="nav__link" />
            <CatalogLink additionalClassName="nav__link" />
            {userData && <ProfileLink additionalClassName="nav__link" />}
            {!userData && <LogInLink additionalClassName="nav__link" />}
            {!userData && <SignUpLink additionalClassName="nav__link" />}
            {userData && <LogOutLink additionalClassName="nav__link" />}
            <CartLink additionalClassName="nav__link" />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
