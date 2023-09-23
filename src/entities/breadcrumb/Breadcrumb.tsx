import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import { BreadcrumbProps } from '../../shared/types';

const Breadcrumb = (props: BreadcrumbProps): JSX.Element => {
  const fullClassName = getFullClassName('breadcrumb', props.additionalClassName);
  return (
    <ol className={fullClassName}>
      {props.linkAttributes.map((item, ind) => (
        <li className="breadcrumb__item" key={ind}>
          <LinkElement
            key={ind}
            additionalClassName="breadcrumb__link"
            title={item.title}
            onClick={item.onClick}
            to={item.to}
          />
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumb;
