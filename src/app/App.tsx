import Header from '../widgets/header/Header';
import useRoutes from './routes/routes';

function App(): JSX.Element {
  const routes = useRoutes();

  return (
    <>
      <Header />
      {routes}
    </>
  );
}

export default App;
