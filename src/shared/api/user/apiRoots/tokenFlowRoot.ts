import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { getCtpTokenFlowClient } from '../BuildClient';
import USER_KEYS from '../keys/USER_KEYS';
import { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder';

const tokenFlowRoot = (token: string): ByProjectKeyRequestBuilder =>
  createApiBuilderFromCtpClient(getCtpTokenFlowClient(token)).withProjectKey({
    projectKey: USER_KEYS.PROJECT_KEY,
  });

export default tokenFlowRoot;
