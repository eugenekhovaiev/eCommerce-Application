import fetch from 'node-fetch';
  import {
    ClientBuilder,
    type AuthMiddlewareOptions,
    type HttpMiddlewareOptions,
  } from '@commercetools/sdk-client-v2';
  
  // Configure authMiddlewareOptions
  const authMiddlewareOptions: AuthMiddlewareOptions = {
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey: 'ffm-rss-ecommerce-application',
    credentials: {
      clientId: "c8zuPHXVEouCz8hbmU_mDXik",
      clientSecret: "jMVpSdPNGD00SdA6NGbKyo1C3enmI7hK",
    },
    scopes: ['manage_project:ffm-rss-ecommerce-application'],
    fetch,
  };
  
  // Configure httpMiddlewareOptions
  const httpMiddlewareOptions: HttpMiddlewareOptions = {
    host: 'https://api.europe-west1.gcp.commercetools.com',
    fetch,
  };
  
  // Export the ClientBuilder
  export const ctpClient = new ClientBuilder()
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();