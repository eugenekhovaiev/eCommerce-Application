import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import { LinkProps } from '../../shared/types';

function AboutUsLink(props: LinkProps): JSX.Element {
  const fullClassName = getFullClassName('link_about-us', props.additionalClassName);
  return <LinkElement additionalClassName={fullClassName} title="About Us" onClick={props.onClick} to="/about" />;
}

export default AboutUsLink;
