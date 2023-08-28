import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import { LinkProps } from '../../shared/types';

function ProfileLink(props: LinkProps): JSX.Element {
  const fullClassName = getFullClassName('link_profile', props.additionalClassName);
  return <LinkElement additionalClassName={fullClassName} title="Your Profile" onClick={props.onClick} to="/profile" />;
}

export default ProfileLink;
