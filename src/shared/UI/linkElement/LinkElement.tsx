import { LinkProps } from '../../types';
import getFullClassName from '../../lib/helpers/getFullClassName';
import { Link } from 'react-router-dom';

function LinkElement(props: LinkProps): JSX.Element {
  const fullClassName = getFullClassName('link', props.additionalClassName);
  return (
    <Link className={fullClassName} onClick={props.onClick} to={props.to || '/'} target={props.target}>
      {props.title} {props.children}
    </Link>
  );
}

export default LinkElement;
