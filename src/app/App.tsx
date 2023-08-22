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

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={localStorage.getItem('isAuth') === 'true' ? <Navigate to="/" replace /> : <Login />}
        />
        <Route path="*" element={<Page404 />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
