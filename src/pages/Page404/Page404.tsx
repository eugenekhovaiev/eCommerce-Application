import LinkElement from '../../shared/UI/linkElement/LinkElement';

const Page404 = (): JSX.Element => {
  return (
    <main className="page404">
      <div className="container page404__wrapper">
        <h2 className="page404__title">404</h2>
        <p className="page404__subtitle">Page Not Found</p>
        <p className="page404__description">The page you are looking for does not seem to exist</p>
        <LinkElement additionalClassName="page404__link" title="Return to main page" to="/" />
      </div>
    </main>
  );
};

export default Page404;
