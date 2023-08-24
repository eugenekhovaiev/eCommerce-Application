import SignInLink from '../../entities/Login/UI/SignInLink';
import SignUpLink from '../../entities/Login/UI/SignUpLink';
import './Main.scss';

function Main(): JSX.Element {
  return (
    <main className="main">
      <section className="start-screen">
        <div className="container">
          <div className="start-screen__wrapper">
            <h2 className="start-screen__title">eCommerce-Application</h2>
            <SignInLink />
            <SignUpLink />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
