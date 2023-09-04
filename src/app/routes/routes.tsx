import { Route, Routes, Navigate } from 'react-router-dom';

import Main from '../../pages/main/Main';
import Login from '../../pages/login/Login';
import Page404 from '../../pages/page404/Page404';
import Registration from '../../pages/registration/Registration';
import Catalog from '../../pages/catalog/Catalog';
import Profile from '../../pages/profile/Profile';
import Cart from '../../pages/cart/Cart';
import About from '../../pages/about/About';
import Product from '../../pages/product/Product';

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
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default useRoutes;
