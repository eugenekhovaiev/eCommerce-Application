import { useEffect, useState } from 'react';
import FilterForm from '../../widgets/filter/FilterForm';
import ProductCategories from '../../widgets/productCategories/ProductCategories';
import Breadcrumb from '../../entities/breadcrumb/Breadcrumb';
import ProductCard from '../../entities/productCard/ProductCard';
import getProducts from '../../shared/api/user/products/getProducts';
import buildCategoryTree from '../../shared/lib/helpers/buildCategoryTree';
import Category from '../../shared/types/Category';
import { LinkProps } from '../../shared/types';
import { FilterProvider } from '../../shared/lib/contexts/FilterContext';
import addCategoryLinkToBreadcrumb from '../../shared/lib/helpers/addCategoryLinkToBreadcrumb';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import { useProductsArrayContext } from '../../shared/lib/contexts/ProductsArrayContext';
import { useLastQueryParametersContext } from '../../shared/lib/contexts/LastQueryParametersContext';
import CARDS_PER_PAGE from '../../shared/consts/CARDS_PER_PAGE';

const Catalog = (): JSX.Element => {
  const { productsArray, updateProductsArray } = useProductsArrayContext();
  const { lastQueryParameters, updateLastQueryParameters } = useLastQueryParametersContext();
  const [allProductsLoaded, setAllProductsLoaded] = useState(false);

  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [isFilter, setIsFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [category, setCategory] = useState<Category>();
  const [breadcrumbLinks, setBreadcrumbLinks] = useState<LinkProps[]>([]);

  const handleCategoryClick = async (category?: Category): Promise<void> => {
    try {
      const newQueryParams = {
        filters: { categoriesIds: category ? category.id : undefined },
      };
      const productsObj = await getProducts(newQueryParams);
      updateLastQueryParameters(newQueryParams);
      updateProductsArray(productsObj.body.results);
      setCategoryId(category ? category.id : '');
      setCategory(category);
      if (setSearch) setSearch('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMoreClick = async (): Promise<void> => {
    try {
      const cardsOnPage = productsArray.length;

      const offsetedQuery = lastQueryParameters ? lastQueryParameters : {};
      offsetedQuery.offset = cardsOnPage;

      const moreProducts = (await getProducts(offsetedQuery)).body.results;
      updateProductsArray([...productsArray, ...moreProducts]);
      if (moreProducts.length < CARDS_PER_PAGE) {
        setAllProductsLoaded(true);
      }
      updateLastQueryParameters(offsetedQuery);
    } catch (error) {
      console.log('Can not get products');
    }
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const mainCategories = await buildCategoryTree();
        const productsObj = await getProducts();
        updateLastQueryParameters({});
        setIsFilter(true);
        setMainCategories(mainCategories);
        updateProductsArray(productsObj.body.results);
      } catch (error) {
        console.log('Unable to get categories or products!');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (productsArray.length % CARDS_PER_PAGE !== 0) {
      setAllProductsLoaded(true);
    } else {
      setAllProductsLoaded(false);
    }
  }, [productsArray.length]);

  useEffect(() => {
    const headBreadcrumbLinks: LinkProps[] = [
      { title: 'Products', onClick: () => handleCategoryClick(), to: '/catalog' },
    ];
    const tailBreadcrumbLinks: LinkProps[] = addCategoryLinkToBreadcrumb(handleCategoryClick, category).reverse();
    setBreadcrumbLinks(headBreadcrumbLinks.concat(...tailBreadcrumbLinks));
  }, [category]);

  if (!productsArray || !mainCategories) {
    return <div>Loading...</div>;
  }

  return (
    <FilterProvider>
      <main className="catalog">
        <ProductCategories
          mainCategories={mainCategories}
          setCategoryId={setCategoryId}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
        />
        <div className="container">
          <div className="catalog__content">
            <Breadcrumb linkAttributes={breadcrumbLinks} additionalClassName="catalog__breadcrumb" />
            <div className="catalog__filter">
              {search !== '' && (
                <div className="catalog__search-results-info">
                  <h4 className="title">Search results</h4>
                  <h3 className="subtitle">&quot;{search}&quot;</h3>
                </div>
              )}
              {isFilter && <FilterForm search={search} categoriesIds={categoryId} />}
            </div>
            <div className="catalog__products">
              <div className="catalog__cards">
                {productsArray.length
                  ? productsArray.map((product, index) => {
                      const productImages = product.masterVariant.images;
                      const productPreviewUrl = productImages && productImages[0] && productImages[0].url;

                      const productPrices = product.masterVariant.prices;
                      const productOriginalPrice =
                        productPrices && productPrices[0] && productPrices[0].value.centAmount;
                      const productDiscountedPrice =
                        productPrices && productPrices[0] && productPrices[0].discounted?.value.centAmount;

                      return (
                        <ProductCard
                          id={product.id}
                          image={productPreviewUrl}
                          name={product.name}
                          priceOriginal={productOriginalPrice}
                          priceDiscounted={productDiscountedPrice}
                          description={product.description}
                          key={index}
                        />
                      );
                    })
                  : 'No products matching your request.'}
              </div>
              {!allProductsLoaded && (
                <ButtonElement
                  additionalClassName="catalog__load-more"
                  variant="contained"
                  title="Load More"
                  onClick={handleLoadMoreClick}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </FilterProvider>
  );
};

export default Catalog;
