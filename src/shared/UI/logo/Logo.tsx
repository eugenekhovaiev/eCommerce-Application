import { LogoProps } from '../../types';

function Logo(props: LogoProps): JSX.Element {
  if (props.iconSrc) {
    return (
      <h1 onClick={props.onClick}>
        {props.title}
        <img src={props.iconSrc} alt="logo"></img>
      </h1>
    );
  }
  return <h1 onClick={props.onClick}>{props.title}</h1>;
}

export default Logo;
