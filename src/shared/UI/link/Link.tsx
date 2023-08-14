import './Link.scss';
import { LinkProps } from '../../types';

function Link(props: LinkProps): JSX.Element {
  return (
    <a className="link" onClick={props.onClick} href={props.href} target={props.target}>
      {props.title} {props.children}
    </a>
  );
}

export default Link;