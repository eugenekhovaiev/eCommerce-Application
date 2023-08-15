import Login from '../pages/Login/Login';
import './styles/App.css';
import Main from '../pages/main/Main';
import Header from '../widgets/header/Header';
import { Registration } from '../pages/Registration/Registration';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Registration />
      <Login />
      <Main />
    </>
  );
}

export default App;
