export interface ILinkProps {
  href?: string;
  target?: string;
  title?: string;
  className?: string;
  children?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface IImgProps {
  src?: string;
  alt: string;
  className?: string;
}

export interface ILogoProps {
  title?: string;
  iconSrc?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
