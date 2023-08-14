import './Main.scss';
// import Header from '../../widgets/header/Header';

function Main(): JSX.Element {
  return (
    <div className="main">
      {/* <Header></Header> */}
      <main className="main_content">
        <div className="start-screen-container">
          <div className="start-screen">
            <h2 className="start-screen_title">eCommerce-Application</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
