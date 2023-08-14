export type LinkProps = {
  href?: string;
  target?: string;
  title?: string;
  className?: string;
  children?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type ImgProps = {
  src?: string;
  alt: string;
  className?: string;
};

export type LogoProps = {
  title?: string;
  iconSrc?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};
