import fetch from 'node-fetch';
import { ClientBuilder, type AuthMiddlewareOptions, type HttpMiddlewareOptions } from '@commercetools/sdk-client-v2';
import { ADMIN_KEYS } from './keys/ADMIN_KEYS';

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: ADMIN_KEYS.AUTH_URL,
  projectKey: ADMIN_KEYS.PROJECT_KEY,
  credentials: {
    clientId: ADMIN_KEYS.CLIENT_ID,
    clientSecret: ADMIN_KEYS.CLIENT_SECRET,
  },
  scopes: ADMIN_KEYS.SCOPES,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: ADMIN_KEYS.API_URL,
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();
