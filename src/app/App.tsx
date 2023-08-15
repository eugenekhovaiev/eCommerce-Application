import Login from '../pages/Login/Login';
import Main from '../pages/main/Main';
import Header from '../widgets/header/Header';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
// import Registration;
// import Page404;

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Login />
      <Main />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path='/registration' element={<Registration />} />
        <Route path='*' element={<Page404 />} /> */}
      </Routes>
    </>
  );
}

export default App;
