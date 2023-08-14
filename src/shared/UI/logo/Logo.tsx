import './Logo.scss';
import { LogoProps } from '../../types';
import getClassName from '../../lib/helpers/getClassName';

function Logo(props: LogoProps): JSX.Element {
  const className = getClassName('logo', props.className);
  if (props.iconSrc) {
    return (
      <h1 className={className} onClick={props.onClick}>
        <span className="logo__title">{props.title}</span>
        <img className="logo__icon" src={props.iconSrc} alt="logo"></img>
      </h1>
    );
  }
  return (
    <h1 className={className} onClick={props.onClick}>
      {props.title}
    </h1>
  );
}

export default Logo;
