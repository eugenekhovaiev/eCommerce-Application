import Header from '../widgets/header/Header';
import useRoutes from './routes/routes';
import { FilterProvider } from '../shared/lib/contexts/FilterContext';

function App(): JSX.Element {
  const routes = useRoutes();

  return (
    <>
      <FilterProvider>
        <Header />
        {routes}
      </FilterProvider>
    </>
  );
}

export default App;
