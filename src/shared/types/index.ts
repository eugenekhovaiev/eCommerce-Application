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

export type { LinkProps, ImgProps };
