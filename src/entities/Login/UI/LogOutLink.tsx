import LinkElement from '../../../shared/UI/link/LinkElement';
import { ILinkProps } from '../types';

function LogOutLink(props: ILinkProps): JSX.Element {
  return <LinkElement className={props.className} title="Log Out" onClick={props.onClick} to="/" />;
}

export default LogOutLink;
