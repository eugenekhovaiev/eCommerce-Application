import { anonymousTokenCache } from '../../api/user/BuildClient';
import anonymousPreflightRequest from '../../api/user/anonymousPreflightRequest';
import createCart from '../../api/user/cart/createCart';

const initAnonymousSession = async (): Promise<void> => {
  try {
    await anonymousPreflightRequest();
    localStorage.setItem('token', anonymousTokenCache.get().token);
    await createCart();
  } catch (error) {
    console.log('Failed to create anonymous session!');
  }
};

export default initAnonymousSession;
