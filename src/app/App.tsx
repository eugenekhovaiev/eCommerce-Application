import { useEffect, useState } from 'react';
import { useUserDataContext } from '../shared/lib/contexts/UserDataContext';
import Header from '../widgets/header/Header';
import MyRoutes from './routes/routes';
import getCustomerWithToken from '../shared/api/user/customer/getCustomerWithToken';
import getActiveCart from '../shared/api/user/cart/getActiveCart';
import { useActiveCartContext } from '../shared/lib/contexts/ActiveCartContext';
import initAnonymousSession from '../shared/lib/helpers/initAnonymousSession';

function App(): JSX.Element {
  const { updateUserData } = useUserDataContext();
  const { updateActiveCart } = useActiveCartContext();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const customer = (await getCustomerWithToken()).body;
        updateUserData(customer);
      } catch (error) {
        if (!localStorage.getItem('token')) {
          await initAnonymousSession();
        }
      } finally {
        const cart = (await getActiveCart()).body;
        updateActiveCart(cart);
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
    <div>Loading...</div>
  );
}

export default App;
