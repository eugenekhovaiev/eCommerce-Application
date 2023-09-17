import getFullClassName from '../../lib/helpers/getFullClassName';
import { PriceProps } from '../../types';

const PriceElement = (props: PriceProps): JSX.Element => {
  const fullClassName = getFullClassName('price', props.additionalClassName);

  const priceOriginal = props.priceOriginal ? `$${(+props.priceOriginal / 100).toFixed(2)}` : 'Price is missing!';
  const priceDiscounted = props.priceDiscounted ? `$${(+props.priceDiscounted / 100).toFixed(2)}` : undefined;
  const priceFinal = priceDiscounted ? priceDiscounted : priceOriginal;

  return (
    <div className={fullClassName}>
      <h3 className="price__final">{priceFinal}</h3>
      {priceDiscounted && <div className="price__line-through">{priceOriginal}</div>}
    </div>
  );
};

export default PriceElement;
