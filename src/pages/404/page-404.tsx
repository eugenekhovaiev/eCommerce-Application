import LinkElement from '../../shared/UI/link/LinkElement';
import '../404/page-404.scss';

const Page404 = (): JSX.Element => {
  return (
    <main className="page404">
      <div className="container page404__container">
        <h2 className="page404__title">404</h2>
        <p className="page404__subtitle">Page Not Found</p>
        <p className="page404__description">The page you&apos;re looking for does not seem to exist</p>
        <LinkElement to="/">
          <div>Return to main page</div>
        </LinkElement>
      </div>
    </main>
  );
};

export default Page404;
