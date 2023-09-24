import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { getCtpCredentialsFlowClient } from '../BuildClient';
import USER_KEYS from '../keys/USER_KEYS';
import { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder';

// class CredentialsFlowApiRoot {
//   private static _instance: CredentialsFlowApiRoot | null = null;
//   private _apiRoot!: ByProjectKeyRequestBuilder;

//   constructor() {
//     if (CredentialsFlowApiRoot._instance) {
//       return CredentialsFlowApiRoot._instance;
//     }

//     this._apiRoot = createApiBuilderFromCtpClient(getCtpCredentialsFlowClient()).withProjectKey({
//       projectKey: USER_KEYS.PROJECT_KEY,
//     });
//   }

//   public get apiRoot(): ByProjectKeyRequestBuilder {
//     return this._apiRoot;
//   }
// }

const credentialsFlowRoot = (): ByProjectKeyRequestBuilder =>
  createApiBuilderFromCtpClient(getCtpCredentialsFlowClient()).withProjectKey({
    projectKey: USER_KEYS.PROJECT_KEY,
  });

export default credentialsFlowRoot;
