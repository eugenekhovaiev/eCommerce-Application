type LinkProps = {
  href?: string;
  target?: string;
  title?: string;
  children?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type ImgProps = {
  src?: string;
  alt: string;
};

type LogoProps = {
  title?: string;
  iconSrc?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export type { LinkProps, ImgProps, LogoProps };
