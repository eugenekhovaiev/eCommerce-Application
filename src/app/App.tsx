import Login from '../pages/Login/Login';
import './styles/App.css';
import Main from '../pages/main/Main';
import Header from '../widgets/header/Header';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Login />
      <Main />
    </>
  );
}

export default App;
