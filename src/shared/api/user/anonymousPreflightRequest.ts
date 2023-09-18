import { Category, ClientResponse } from '@commercetools/platform-sdk';
import anonymousSessionFlowRoot from './apiRoots/anonymousSessionFlowRoot';

const anonymousPreflightRequest = async (): Promise<ClientResponse<Category>> => {
  const apiRoot = anonymousSessionFlowRoot();
  return apiRoot.categories().withKey({ key: 'show-leashes' }).get().execute();
};

export default anonymousPreflightRequest;
