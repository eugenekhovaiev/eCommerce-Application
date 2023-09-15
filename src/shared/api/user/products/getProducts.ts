import { ClientResponse, ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';

// import { apiRoot } from './getUserApiRoot';
import { ProductsQueryParams } from '../../../types';
import getFiltersArray from '../../../lib/helpers/getFiltersArray';
import credentialsFlowRoot from '../apiRoots/credentialsFlowRoot';

const getProducts = async (
  queryParams: ProductsQueryParams = {},
): Promise<ClientResponse<ProductProjectionPagedQueryResponse>> => {
  const filtersArr = getFiltersArray(queryParams.filters);

  const apiRoot = credentialsFlowRoot();
  return apiRoot
    .productProjections()
    .search()
    .get({
      queryArgs: {
        limit: 50,
        'text.en-US': queryParams.searchText,
        fuzzy: true,
        sort: queryParams.sort ? `${queryParams.sort.by} ${queryParams.sort.order}` : undefined,
        filter: filtersArr,
      },
    })
    .execute();
};

export default getProducts;
