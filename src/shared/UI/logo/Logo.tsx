import './Logo.scss';
import { ILogoProps } from '../../types';
import getClassName from '../../lib/helpers/getClassName';
import LinkElement from '../link/LinkElement';

function Logo(props: ILogoProps): JSX.Element {
  const className = getClassName('logo', props.className);
  if (props.iconSrc) {
    return (
      <LinkElement className={props.className} to="/">
        <h1 className={className} onClick={props.onClick}>
          <span className="logo__title">{props.title}</span>
          <img className="logo__icon" src={props.iconSrc} alt="logo" />
        </h1>
      </LinkElement>
    );
  }
  return (
    <h1 className={className} onClick={props.onClick}>
      {props.title}
    </h1>
  );
}

export default Logo;
