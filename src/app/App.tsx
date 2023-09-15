import { useEffect, useState } from 'react';
import { useUserDataContext } from '../shared/lib/contexts/UserDataContext';
import Header from '../widgets/header/Header';
import MyRoutes from './routes/routes';
import getCustomerWithToken from '../shared/api/user/customer/getCustomerWithToken';

function App(): JSX.Element {
  const { updateUserData } = useUserDataContext();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await getCustomerWithToken();
        updateUserData(response.body);
      } catch (error) {
        console.log('No authorized user!');
      } finally {
        setIsLoaded(true);
      }
    };

    fetchData();
  }, []);

  const routes = MyRoutes();

  return isLoaded ? (
    <>
      <Header />
      {routes}
    </>
  ) : (
    <>
      <div>Loading...</div>
    </>
  );
}

export default App;
