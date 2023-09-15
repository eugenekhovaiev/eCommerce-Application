import { useEffect, useState } from 'react';
import { useUserDataContext } from '../shared/lib/contexts/UserDataContext';
import Header from '../widgets/header/Header';
import MyRoutes from './routes/routes';
import getCustomerWithToken from '../shared/api/user/customer/getCustomerWithToken';
import getActiveCart from '../shared/api/user/cart/getActiveCart';
import { useActiveCartContext } from '../shared/lib/contexts/ActiveCartContext';

function App(): JSX.Element {
  const { updateUserData } = useUserDataContext();
  const { updateActiveCart } = useActiveCartContext();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const customer = await getCustomerWithToken();
        const cart = await getActiveCart();
        updateUserData(customer.body);
        updateActiveCart(cart.body);
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
