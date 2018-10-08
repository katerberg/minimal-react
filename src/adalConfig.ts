import { adalFetch, AuthenticationContext, withAdalLogin } from 'react-adal';

export const adalConfig: AdalConfig = {
  clientId: '0b373a7b-2a2c-48a4-9d03-a95cfe76fded',
  endpoints: {
    api: '14d71d65-f596-4eae-be30-27f079bf8d4b',
  },
  tenant: '9ca75128-a244-4596-877b-f24828e476e2',
};

export const authContext: AuthenticationContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch: (input: string, init: any) => Promise<any>, url: string) => adalFetch(authContext, adalConfig.endpoints.api, fetch, url, {});

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
