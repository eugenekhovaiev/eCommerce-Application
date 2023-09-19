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
      <section className="coupons">
        <div className="container coupons__wrapper">
          <h2 className="coupons__title">Coupons</h2>
          <div className="coupons__cards">
            <div className="coupons__card coupons__card_orange">
              <div className="coupons__image coupons__image_orange">25%</div>
              <div className="coupons__code coupons__code_orange">25off</div>
              <div className="coupons__description coupons__description_orange">
                Get 25% off on <span className="coupons__category">all products</span>
              </div>
              <div className="coupons__exceptions coupons__exceptions_orange">
                The coupon cannot be applied to products on sale.
              </div>
            </div>
            <div className="coupons__card coupons__card_green">
              <div className="coupons__image coupons__image_green">100%</div>
              <div className="coupons__code coupons__code_green">takeAllForFree</div>
              <div className="coupons__description coupons__description_green">
                Get 100% off on <span className="coupons__category">all products</span>
              </div>
              <div className="coupons__exceptions coupons__exceptions_green" />
            </div>
            <div className="coupons__card coupons__card_purple">
              <div className="coupons__image coupons__image_purple">50%</div>
              <div className="coupons__code coupons__code_purple">50offcollars</div>
              <div className="coupons__description coupons__description_purple">
                Get 50% off on <span className="coupons__category">collars</span>
              </div>
              <div className="coupons__exceptions coupons__exceptions_purple">
                The coupon cannot be applied to products on sale.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
