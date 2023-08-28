import { useState } from 'react';
import ImageElement from '../../shared/UI/imageElement/ImageElement';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getProducts from '../../shared/api/user/getProducts';

const Catalog = (): JSX.Element => {
  const [imageUrl, setImageUrl] = useState('src/shared/assets/logo.svg');

  const handleClick = async (): Promise<void> => {
    try {
      const products = await getProducts();
      console.log(products);
      const testProductImages = products.body.results[1].masterData.current.masterVariant.images;
      const testProductImageUrl = testProductImages ? testProductImages[0].url : '../../shared/assets/logo.svg';
      console.log(testProductImageUrl);
      setImageUrl(testProductImageUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="catalog">
      <div className="container catalog__container">
        <h2 className="catalog__title">Catalog page content will be here.</h2>
        <LinkElement title="Show products" onClick={handleClick} to="/catalog" />
        <ImageElement src={imageUrl} alt="product image" />
      </div>
    </main>
  );
};

export default Catalog;
