import LogInLink from '../../entities/Links/LogInLink';
import SignUpLink from '../../entities/Links/SignUpLink';

function Main(): JSX.Element {
  return (
    <main className="main">
      <section className="start-screen">
        <div className="container">
          <div className="start-screen__wrapper">
            <h2 className="start-screen__title">eCommerce-Application</h2>
            <LogInLink />
            <SignUpLink />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
