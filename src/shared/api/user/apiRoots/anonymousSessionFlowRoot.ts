import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { getCtpAnonymousSessionFlowClient } from '../BuildClient';
import { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder';
import USER_KEYS from '../keys/USER_KEYS';

const anonymousSessionFlowRoot = (): ByProjectKeyRequestBuilder =>
  createApiBuilderFromCtpClient(getCtpAnonymousSessionFlowClient()).withProjectKey({
    projectKey: USER_KEYS.PROJECT_KEY,
  });

export default anonymousSessionFlowRoot;
