import 'normalize.css';
import './styles/reset.scss';
import './styles/App.scss';

import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import Main from '../pages/main/Main';
import Header from '../widgets/header/Header';
import Page404 from '../pages/404/page-404';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.scss';

import { useHeaderContext } from '../widgets/header/HeaderContext';

function App(): JSX.Element {
  const { isLoggedIn } = useHeaderContext();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/registration" element={isLoggedIn ? <Navigate to="/" replace /> : <Registration />} />
      </Routes>
    </>
  );
}

export default App;
