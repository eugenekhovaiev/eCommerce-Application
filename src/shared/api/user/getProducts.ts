import { ClientResponse, ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';

import { apiRoot } from './getUserApiRoot';
import { ProductsQueryParams } from '../../types';
import getFiltersArray from '../../lib/helpers/getFiltersArray';
import CARDS_PER_PAGE from '../../consts/CARDS_PER_PAGE';

const getProducts = async (
  queryParams: ProductsQueryParams = {},
): Promise<ClientResponse<ProductProjectionPagedQueryResponse>> => {
  const filtersArr = getFiltersArray(queryParams.filters);

  return apiRoot
    .productProjections()
    .search()
    .get({
      queryArgs: {
        limit: queryParams.limit ? queryParams.limit : CARDS_PER_PAGE,
        offset: queryParams.offset ? queryParams.offset : 0,
        'text.en-US': queryParams.searchText,
        fuzzy: true,
        sort: queryParams.sort ? `${queryParams.sort.by} ${queryParams.sort.order}` : undefined,
        filter: filtersArr,
      },
    })
    .execute();
};

export default getProducts;
