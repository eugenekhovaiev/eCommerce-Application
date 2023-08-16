import './Link.scss';
import { ILinkProps } from '../../types';
import getClassName from '../../lib/helpers/getClassName';
import { Link } from 'react-router-dom';

function LinkElement(props: ILinkProps): JSX.Element {
  const className = getClassName('link', props.className);
  return (
    <Link className={className} onClick={props.onClick} to={props.to} target={props.target}>
      {props.title} {props.children}
    </Link>
  );
}

export default LinkElement;
