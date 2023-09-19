import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { getCtpPasswordFlowClient } from '../BuildClient';
import USER_KEYS from '../keys/USER_KEYS';
import { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder';

// class PasswordFlowApiRoot {
//   private static _instance: PasswordFlowApiRoot | null = null;
//   private _apiRoot!: ByProjectKeyRequestBuilder;

//   constructor(username: string | undefined, password: string | undefined) {
//     if (PasswordFlowApiRoot._instance) {
//       if (!username || !password) {
//         throw new Error('Password flow requires username and password parameters!');
//       }
//       return PasswordFlowApiRoot._instance;
//     }

//     this._apiRoot = createApiBuilderFromCtpClient(getCtpPasswordFlowClient(username!, password!)).withProjectKey({
//       projectKey: USER_KEYS.PROJECT_KEY,
//     });
//   }

//   public get apiRoot(): ByProjectKeyRequestBuilder {
//     return this._apiRoot;
//   }
// }

const passwordFlowRoot = (username: string, password: string): ByProjectKeyRequestBuilder =>
  createApiBuilderFromCtpClient(getCtpPasswordFlowClient(username, password)).withProjectKey({
    projectKey: USER_KEYS.PROJECT_KEY,
  });

export default passwordFlowRoot;
