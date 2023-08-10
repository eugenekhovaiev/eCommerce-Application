/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ctpClient } from './BuildClient';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

// Create apiRoot from the imported ClientBuilder and include your Project key
export const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: 'ffm-rss-ecommerce-application',
});

// Example call to return Project information
// This code has the same effect as sending a GET request to the commercetools Composable Commerce API without any endpoints.
export const getProject = () => {
  return apiRoot.get().execute();
};

export const getEndPoint = () => {
  return apiRoot.shoppingLists().get().execute();
};

export const getCustomers = () => {
  return apiRoot.customers().get().execute();
};

// Retrieve Project information and output the result to the log
// getProject().then(console.log).catch(console.error);
