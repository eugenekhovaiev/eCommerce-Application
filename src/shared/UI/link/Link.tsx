import { LinkProps } from '../../types';

function Link(props: LinkProps): JSX.Element {
  return (
    <a href={props.href} target={props.target}>
      {props.title}
    </a>
  );
}

export default Link;
