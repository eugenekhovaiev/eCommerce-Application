import '../404/page-404.css';

const Page404 = (): JSX.Element => {
  return (
    <div className="page404-container">
      <h2 className="page404-title">404</h2>
      <p className="page404-subtitle">Page Not Found</p>
      <p className="page404-describe">The page you're looking for does not seem to exist</p>
    </div>
  );
};

export default Page404;
