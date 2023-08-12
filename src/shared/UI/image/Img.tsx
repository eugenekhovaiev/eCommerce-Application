import { ImgProps } from '../../types';

function Img(props: ImgProps): JSX.Element {
  return <img src={props.src} alt={props.alt} />;
}

export default Img;
