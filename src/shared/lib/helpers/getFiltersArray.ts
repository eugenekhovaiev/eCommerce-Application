import { Filters } from '../../types';

function getFiltersArray(filters: Filters | undefined): string[] | undefined {
  if (filters) {
    const categoriesFilter = filters.categoriesIds ? `categories.id:"${filters.categoriesIds}"` : undefined;
    const attributesFiltersArr = filters.attributes
      ? filters.attributes.map((attribute) => `variants.attributes.${attribute.enumName}.key:"${attribute.value}"`)
      : undefined;
    const priceFilter = filters.priceRange
      ? `variants.price.centAmount:range (${filters.priceRange.from} to ${filters.priceRange.to})`
      : undefined;
    const searchKeywordsFilter = filters.searchKeywords
      ? `searchKeywords.en-US.text:"${filters.searchKeywords}"`
      : undefined;

    return [categoriesFilter, priceFilter, searchKeywordsFilter]
      .concat(attributesFiltersArr)
      .filter((elem) => elem != undefined) as string[];
  }
  return undefined;
}

export default getFiltersArray;
