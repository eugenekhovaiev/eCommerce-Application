import 'normalize.css';
import './styles/reset.scss';
import './styles/App.scss';

import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import Main from '../pages/Main/Main';
import Header from '../widgets/Header/Header';
import Page404 from '../pages/404/page-404';
import Cart from '../pages/Cart/Cart';
import Catalog from '../pages/Catalog/Catalog';
import Profile from '../pages/Profile/Profile';
import About from '../pages/About/About';

import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.scss';

import { useLoggedInContext } from '../shared/lib/contexts/LoggedInContext';

function App(): JSX.Element {
  const { isLoggedIn } = useLoggedInContext();

  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
