import { TokenCache, TokenStore } from '@commercetools/sdk-client-v2';

class MyTokenCache implements TokenCache {
  private _myCache: TokenStore;

  constructor() {
    this._myCache = {
      token: '',
      expirationTime: 100,
    };
  }

  public set = (cache: TokenStore): void => {
    this._myCache = cache;
  };

  public get = (): TokenStore => {
    return this._myCache;
  };
}

export default MyTokenCache;
