import { ImgProps } from '../../types';
import getFullClassName from '../../lib/helpers/getFullClassName';

const ImageElement = (props: ImgProps): JSX.Element => {
  const fullClassName = getFullClassName('', props.additionalClassName);
  return <img className={fullClassName} src={props.src} alt={props.alt} />;
};

export default ImageElement;
