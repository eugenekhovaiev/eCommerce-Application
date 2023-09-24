import fetch from 'node-fetch';
import {
  ClientBuilder,
  AuthMiddlewareOptions,
  HttpMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
  Client,
  ExistingTokenMiddlewareOptions,
  AnonymousAuthMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import USER_KEYS from './keys/USER_KEYS';
import MyTokenCache from './token/MyTokenCache';

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: USER_KEYS.API_URL,
  fetch,
};

export const getCtpCredentialsFlowClient = (): Client => {
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

  return new ClientBuilder()
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
};

export let anonymousTokenCache: MyTokenCache;

export const getCtpAnonymousSessionFlowClient = (): Client => {
  anonymousTokenCache = new MyTokenCache();
  const anonymousAuthMiddlewareOptions: AnonymousAuthMiddlewareOptions = {
    host: USER_KEYS.AUTH_URL,
    projectKey: USER_KEYS.PROJECT_KEY,
    credentials: {
      clientId: USER_KEYS.CLIENT_ID,
      clientSecret: USER_KEYS.CLIENT_SECRET,
    },
    scopes: USER_KEYS.SCOPES,
    tokenCache: anonymousTokenCache,
    fetch,
  };
  return new ClientBuilder()
    .withAnonymousSessionFlow(anonymousAuthMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
};

export let passwordTokenCache: MyTokenCache;

export const getCtpPasswordFlowClient = (username: string, password: string): Client => {
  passwordTokenCache = new MyTokenCache();
  const getPasswordAuthMiddlewareOptions = (username: string, password: string): PasswordAuthMiddlewareOptions => {
    return {
      host: USER_KEYS.AUTH_URL,
      projectKey: USER_KEYS.PROJECT_KEY,
      credentials: {
        clientId: USER_KEYS.CLIENT_ID,
        clientSecret: USER_KEYS.CLIENT_SECRET,
        user: {
          username,
          password,
        },
      },
      scopes: USER_KEYS.SCOPES,
      tokenCache: passwordTokenCache,
      fetch,
    };
  };

  return new ClientBuilder()
    .withPasswordFlow(getPasswordAuthMiddlewareOptions(username, password))
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
};

export const getCtpTokenFlowClient = (token: string): Client => {
  const existingTokenMiddlewareOptions: ExistingTokenMiddlewareOptions = {
    force: true,
  };

  return new ClientBuilder()
    .withExistingTokenFlow(token, existingTokenMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
};
