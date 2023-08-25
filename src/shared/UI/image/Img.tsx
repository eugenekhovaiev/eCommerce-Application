import { ImgProps } from '../../types';
import getFullClassName from '../../lib/helpers/getFullClassName';

function Img(props: ImgProps): JSX.Element {
  const className = getFullClassName('', props.className);
  return <img className={className} src={props.src} alt={props.alt} />;
}

export default Img;
