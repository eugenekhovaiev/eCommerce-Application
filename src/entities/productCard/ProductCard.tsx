import LinkElement from '../../shared/UI/linkElement/LinkElement';
import PriceElement from '../../shared/UI/priceElement/PriceElement';
import { ProductCardProps } from '../../shared/types';

const ProductCard = (props: ProductCardProps): JSX.Element => {
  return (
    <LinkElement additionalClassName="card" to={`/catalog/${props.url}`}>
      <div className="card__wrapper">
        <div className="card__image">
          <img src={props.image ? props.image : 'src/shared/assets/image-placeholder.svg'} alt={props.name['en-US']} />
        </div>
        <div className="card__content">
          <h2 className="card__name">{props.name['en-US']}</h2>
          <div className="card__description">
            {props.description ? props.description['en-US'] : 'Description for this product is missing!'}
          </div>
          <PriceElement
            additionalClassName="card__price"
            priceOriginal={props.priceOriginal}
            priceDiscounted={props.priceDiscounted}
          />
        </div>
      </div>
    </LinkElement>
  );
};

export default ProductCard;
