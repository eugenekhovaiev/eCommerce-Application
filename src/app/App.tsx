import './styles/App.css';
// import Login from '../pages/Login/Login';
import Main from '../pages/main/Main';
import Header from '../widgets/header/Header';
import { Registration } from '../pages/Registration/Registration';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Main />
      <Registration />
      {/* <Login /> */}
    </>
  );
}

export default App;
