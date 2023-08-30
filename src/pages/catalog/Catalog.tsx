import FilterForm from '../../widgets/filter/FilterForm';
const Catalog = (): JSX.Element => {
  return (
    <main className="catalog">
      <section className="start-screen">
        <div className="container start-screen__wrapper">
          <h2 className="start-screen__title">Catalog page</h2>
        </div>
      </section>
      <section className="catalog-products">
        <div className="container catalog-products__wrapper">
          <div className="catalog-products__content">
            <FilterForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalog;
