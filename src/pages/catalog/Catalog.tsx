import { useState } from 'react';
import FilterForm from '../../widgets/filter/FilterForm';
import ProductCategories from '../../widgets/productCategories/ProductCategories';
import ProductCard from '../../entities/productCard/ProductCard';
import SearchInput from '../../entities/inputs/SearchInput';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getProducts from '../../shared/api/user/getProducts';
import buildCategoryTree from '../../shared/lib/helpers/buildCategoryTree';
import Category from '../../shared/types/Category';
import { ProductProjection } from '@commercetools/platform-sdk';
import { FilterProvider } from '../../shared/lib/contexts/FilterContext';
// import TextFieldElement from '../../shared/UI/textFieldElement/TextFieldElement';
// import { InputAdornment } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

const Catalog = (): JSX.Element => {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [isFilter, setIsFilter] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [productsArr, setProductsArr] = useState<ProductProjection[] | []>([]);
  const [categoryId, setCategoryId] = useState('');

  const handleShowPageClick = async (): Promise<void> => {
    try {
      const mainCategories = await buildCategoryTree();
      const productsObj = await getProducts();
      setIsFilter(true);
      setIsSearch(true);
      setMainCategories(mainCategories);
      setProductsArr(productsObj.body.results);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleClick = async (): Promise<void> => {
  //   try {
  //     const productsObj = await getProducts({
  //       // sort: { by: 'name.en-US', order: 'asc' },
  //       // filters: { categoriesIds: '1ce34364-a540-4fc4-a3dd-13c2ba382c79' },
  //       // filters: { attributes: [{ enumName: 'color', value: 'Pink' }] },
  //       // filters: { attributes: [{ enumName: 'size', value: 'Medium' }] },
  //       // filters: { searchKeywords: 'skinny' },
  //     });

  //     console.log(productsObj);
  //     setProductsArr(productsObj.body.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <FilterProvider>
      <main className="catalog">
        <section className="start-screen">
          <div className="container start-screen__wrapper">
            <LinkElement title="Show page" onClick={handleShowPageClick} to="/catalog" />
          </div>
        </section>
        <section className="catalog-products">
          <ProductCategories
            mainCategories={mainCategories}
            setCategoryId={setCategoryId}
            setProducts={setProductsArr}
          />
          <div className="container catalog-products__content">
            <div className="catalog-products__filter">
              {isSearch && (
                <SearchInput
                  additionalClassName="catalog-products__search"
                  setCategoryId={setCategoryId}
                  setProducts={setProductsArr}
                />
              )}
              {isFilter && (
                <FilterForm
                  setProducts={setProductsArr}
                  categoriesIds={categoryId}
                  // isCategoryUpdates={isCategoryUpdated}
                />
              )}
            </div>
            <div className="catalog-products__products">
              {productsArr.map((product, index) => {
                const productImages = product.masterVariant.images;
                const productPreviewUrl = productImages && productImages[0] && productImages[0].url;

                const productPrices = product.masterVariant.prices;
                const productOriginalPrice = productPrices && productPrices[0] && productPrices[0].value.centAmount;
                const productDiscountedPrice =
                  productPrices && productPrices[0] && productPrices[0].discounted?.value.centAmount;

                return (
                  <ProductCard
                    url={product.id}
                    image={productPreviewUrl}
                    name={product.name}
                    priceOriginal={productOriginalPrice}
                    priceDiscounted={productDiscountedPrice}
                    description={product.description}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </FilterProvider>
  );
};

export default Catalog;
