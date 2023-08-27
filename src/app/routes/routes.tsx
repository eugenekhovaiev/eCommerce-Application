import { Route, Routes, Navigate } from 'react-router-dom';

import Main from '../../pages/Main/Main';
import Login from '../../pages/Login/Login';
import Page404 from '../../pages/Page404/Page404';
import Registration from '../../pages/Registration/Registration';
import Catalog from '../../pages/Catalog/Catalog';
import Profile from '../../pages/Profile/Profile';
import Cart from '../../pages/Cart/Cart';
import About from '../../pages/About/About';

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
