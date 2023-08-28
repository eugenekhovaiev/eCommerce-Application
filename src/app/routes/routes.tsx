import { Route, Routes, Navigate } from 'react-router-dom';

import Main from '../../pages/main/Main';
import Login from '../../pages/loginPage/Login';
import Page404 from '../../pages/404page/Page404';
import Registration from '../../pages/registrationPage/Registration';
import Catalog from '../../pages/catalogPage/Catalog';
import Profile from '../../pages/profilePage/Profile';
import Cart from '../../pages/cartPage/Cart';
import About from '../../pages/aboutPage/About';

import { useLoggedInContext } from '../../shared/lib/contexts/LoggedInContext';

export const useRoutes = (): JSX.Element => {
  const { isLoggedIn } = useLoggedInContext();

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/registration" element={isLoggedIn ? <Navigate to="/" replace /> : <Registration />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default useRoutes;
