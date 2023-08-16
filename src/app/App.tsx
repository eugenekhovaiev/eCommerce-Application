import 'normalize.css';
import './styles/reset.scss';
import './styles/App.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Login from '../pages/Login/Login';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Main from '../pages/main/Main';
import Header from '../widgets/header/Header';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Page404 from '../pages/404/page-404';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Page404 />
    </>
  );
}

export default App;
