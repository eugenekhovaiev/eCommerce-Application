import LogInLink from '../../entities/links/LogInLink';
import SignUpLink from '../../entities/links/SignUpLink';

function Main(): JSX.Element {
  return (
    <main className="main">
      <section className="start-screen">
        <div className="container">
          <div className="start-screen__wrapper">
            <h2 className="start-screen__title">eCommerce-Application</h2>
            <LogInLink additionalClassName="start-screen__link" />
            <SignUpLink additionalClassName="start-screen__link" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
