import './Link.scss';
import { ILinkProps } from '../../types';
import getClassName from '../../lib/helpers/getClassName';

function Link(props: ILinkProps): JSX.Element {
  const className = getClassName('link', props.className);
  return (
    <a className={className} onClick={props.onClick} href={props.href} target={props.target}>
      {props.title} {props.children}
    </a>
  );
}

export default Link;