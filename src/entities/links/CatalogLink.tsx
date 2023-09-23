import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import { LinkProps } from '../../shared/types';

function CatalogLink(props: LinkProps): JSX.Element {
  const fullClassName = getFullClassName('link_products', props.additionalClassName);
  return <LinkElement additionalClassName={fullClassName} title="Our Products" onClick={props.onClick} to="/catalog" />;
}

export default CatalogLink;
