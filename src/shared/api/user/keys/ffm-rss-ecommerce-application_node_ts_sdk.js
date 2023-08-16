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
      clientId: "JAHnRxxKHDgvzmb_RLvq34S1",
      clientSecret: "hr6Jm80FEDJG9g77HSG-t6U3cvR2a85F",
    },
    scopes: ['manage_my_profile:ffm-rss-ecommerce-application view_categories:ffm-rss-ecommerce-application view_published_products:ffm-rss-ecommerce-application manage_my_quotes:ffm-rss-ecommerce-application manage_my_payments:ffm-rss-ecommerce-application manage_my_quote_requests:ffm-rss-ecommerce-application manage_my_business_units:ffm-rss-ecommerce-application manage_my_shopping_lists:ffm-rss-ecommerce-application manage_my_orders:ffm-rss-ecommerce-application create_anonymous_token:ffm-rss-ecommerce-application'],
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