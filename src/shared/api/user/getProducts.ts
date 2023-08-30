import { ClientResponse, ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';

import { apiRoot } from './getUserApiRoot';
import { ProductsQueryParams } from '../../types';

const getProducts = async (
  queryParams: ProductsQueryParams = {},
): Promise<ClientResponse<ProductProjectionPagedQueryResponse>> => {
  return apiRoot
    .productProjections()
    .search()
    .get({
      queryArgs: {
        sort: queryParams.sort ? `${queryParams.sort.by} ${queryParams.sort.order}` : undefined,
        // filter: 'categories.id:"67d2f5b1-9085-47ad-93f8-abc88702e941"',
        filter: [
          // 'categories.id:"1f07ab8f-cf25-4f59-ba1c-43eef5c0e0ce, 133fbd9e-8fb8-465e-b008-699700693da4"',
          // 'variants.price.centAmount:range (0 to 10000)',
          // 'variants.attributes.color.key:"White"',
          // 'variants.attributes.size.key:"Small"',
          // `searchKeywords.en-US.text:"skinny"`,
        ],
        // filter: 'categories.id:"133fbd9e-8fb8-465e-b008-699700693da4"',
        // filter: 'categories.id:"1ce34364-a540-4fc4-a3dd-13c2ba382c79"',
        // filter: 'categories.id:"30e2020f-da4d-4515-a013-fceee4a1028e"',
        // filter: 'categories.id:"c5dbd972-1739-4c4a-89e8-d227f7000082"',
        // filter: 'categories.id:"6d82a14e-024e-45b1-a1e0-28c26553dae6"',
        // filter: 'categories.id:"dd888fc4-c1a9-4a06-a261-a40af7ef490c"',
        // filter: 'categories.id:"9742f8b2-1666-475a-8096-aa0fd9a0663c"',
        // filter: 'categories.id:"31042a4e-a3df-4a0f-a14a-43de6341c6ed"',
        // filter: 'categories.id:"018b2dfd-fa58-4e81-909b-8987d1e057b0"',
        // filter: 'categories.id:"e64852bd-5e6b-4ed9-8440-2cd49bf40c08"',
        // filter: 'categories.id:"7866c7f0-d526-42b5-a152-dd9acf836e5a"',
      },
    })
    .execute();
};

export default getProducts;
