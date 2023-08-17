import fetch from 'node-fetch';
import { ClientBuilder, type AuthMiddlewareOptions, type HttpMiddlewareOptions } from '@commercetools/sdk-client-v2';
import USER_KEYS from './keys/USER_KEYS';

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: USER_KEYS.AUTH_URL,
  projectKey: USER_KEYS.PROJECT_KEY,
  credentials: {
    clientId: USER_KEYS.CLIENT_ID,
    clientSecret: USER_KEYS.CLIENT_SECRET,
  },
  scopes: USER_KEYS.SCOPES,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: USER_KEYS.API_URL,
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();
