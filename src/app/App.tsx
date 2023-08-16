import 'normalize.css';
import './styles/reset.scss';
import './styles/App.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Login from '../pages/Login/Login';
// import Registration;
import Main from '../pages/main/Main';
import Header from '../widgets/header/Header';
import Page404 from '../pages/404/page-404';
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';

function App(): JSX.Element {
  return (
    <>
      <Header />
      {/* <Login /> */}
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
        {/* <Route path='/registration' element={<Registration />} /> */}
      </Routes>
    </>
  );
}

export default App;
