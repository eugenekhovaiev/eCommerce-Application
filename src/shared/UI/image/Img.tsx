import { IImgProps } from '../../types';
import getClassName from '../../lib/helpers/getClassName';

function Img(props: IImgProps): JSX.Element {
  const className = getClassName('', props.className);
  return <img className={className} src={props.src} alt={props.alt} />;
}

export default Img;
