import { LogoProps } from '../../shared/types';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import LinkElement from '../../shared/UI/link/LinkElement';

function Logo(props: LogoProps): JSX.Element {
  const className = getFullClassName('logo', props.className);
  if (props.iconSrc) {
    return (
      <LinkElement additionalClassName={props.className} to="/">
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
